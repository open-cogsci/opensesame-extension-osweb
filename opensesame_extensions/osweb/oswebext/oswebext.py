#-*- coding:utf-8 -*-

"""
This file is part of OpenSesame.

OpenSesame is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

OpenSesame is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with OpenSesame.  If not, see <http://www.gnu.org/licenses/>.
"""
from libopensesame.py3compat import *
import webbrowser
import os
from pathlib import Path
from libopensesame.exceptions import UserAborted
from libqtopensesame.extensions import BaseExtension
from libqtopensesame.misc.translate import translation_context
from libqtopensesame.misc.config import cfg
from libqtopensesame.items.experiment import Experiment
from . import osweb_linter as linter
from osweb.oswebexceptions import PythonToJavaScriptError, \
    OSWebCompatibilityError, ListRemoteError, UnsupportedJZIP, \
    JZIPDownloadError
from openexp import backend
from qtpy.QtWidgets import QFileDialog
_ = translation_context('oswebext', category='extension')


def decorate_backend_info(fnc):
    """Wraps around the backend_info() function to add the OSWeb backend."""
    def inner():
        backend_info = fnc()
        backend_info['osweb'] = {'description': 'In a browser with OSWeb',
                                 'canvas': 'osweb',
                                 'keyboard': 'osweb',
                                 'mouse': 'osweb',
                                 'sampler': 'osweb',
                                 'color': 'osweb',
                                 'clock': 'osweb',
                                 'log': 'osweb',
                                 'icon': 'applications-internet',
                                 'settings': False}
        return backend_info
    return inner


class Oswebext(BaseExtension):
    
    preferences_ui = 'extensions.oswebext.preferences'

    def event_startup(self):
        self._control_panel = None
        backend.backend_info = decorate_backend_info(backend.backend_info)
        file_menu = self.get_submenu('file')
        if cfg.oswebext_jatos_url == 'https://jatos.mindprobe.eu':
            open_title = _('Open from MindProbe')
            publish_title = _('Publish to MindProbe')
        else:
            open_title = _('Open from JATOS')
            publish_title = _('Publish to JATOS')
        action_open_jatos = self.qaction('document-open',
                                         open_title,
                                         self.event_osweb_open_jatos)
        action_publish_jatos = self.qaction('document-save',
                                            publish_title,
                                            self.event_osweb_publish_jatos)
        self.add_action(file_menu, action_open_jatos, -4, False, False)
        self.add_action(file_menu, action_publish_jatos, -4, False, True)
        
    def provide_runner(self):
        if self.experiment.var.canvas_backend == 'osweb':
            from .osweb_runner import OSWebRunner
            return OSWebRunner
        
    def provide_item_supported(self, experiment, item_type):
        if self.experiment.var.canvas_backend != 'osweb':
            return None
        return linter.item_type_supported(item_type)
        
    def _suggested_path(self, suffix):
        folder = os.path.dirname(cfg.file_dialog_path)
        name = self.experiment.syntax.sanitize(
            self.experiment.var.title, strict=True, allow_vars=False) + suffix
        return os.path.join(folder, name)
        
    def event_osweb_export_html(self):
        from osweb import convert
        path = QFileDialog.getSaveFileName(
            self.main_window, _('Save as…'),
            directory=self._suggested_path('.html'),
            filter='HMTL files (.html)')
        # In PyQt5, the QFileDialog.getOpenFileName returns a tuple instead of
        # a string, of which the first position contains the path.
        if isinstance(path, tuple):
            path = path[0]
        if not path:
            return
        if not path.lower().endswith('.html'):
            path += '.html'
        try:
            if not cfg.oswebext_bypass_linter:
                errors = linter.check_compatibility(
                    self.experiment, fullscreen=cfg.oswebext_fullscreen)
                if errors:
                    raise OSWebCompatibilityError(errors)
            convert.exp_to_html(
                self.experiment,
                index_path=path,
                subject=str(cfg.oswebext_subject_nrs),
                logfile='osweb-data.json',
                fullscreen=cfg.oswebext_fullscreen,
                welcome_text=cfg.oswebext_welcome_text,
                external_js=self._external_js(),
                intro_click=cfg.oswebext_intro_click)
        except (OSWebCompatibilityError, PythonToJavaScriptError) as e:
            self.report_exception(e)
            return
        self._refresh_control_panel()

    def event_osweb_export_jzip(self):
        from osweb import convert
        path = QFileDialog.getSaveFileName(
            self.main_window, _('Save as…'),
            directory=self._suggested_path('.jzip'),
            filter='JATOS Study Archive (*.jzip)')
        # In PyQt5, the QFileDialog.getOpenFileName returns a tuple instead of
        # a string, of which the first position contains the path.
        if isinstance(path, tuple):
            path = path[0]
        if not path:
            return
        if not path.lower().endswith('.jzip'):
            path += '.jzip'
        convert.exp_to_jzip(
            self.experiment,
            jzip_path=path,
            subject=str(cfg.oswebext_subject_nrs),
            fullscreen=cfg.oswebext_fullscreen,
            welcome_text=cfg.oswebext_welcome_text,
            external_js=self._external_js(),
            intro_click=cfg.oswebext_intro_click)
        self._refresh_control_panel()
        
    def event_osweb_import_jzip(self):
        from osweb import convert
        path = QFileDialog.getOpenFileName(
            self.main_window, _('Open'),
            directory=os.path.dirname(cfg.file_dialog_path),
            filter='JATOS Study Archive (*.jzip)')
        # In PyQt5, the QFileDialog.getOpenFileName returns a tuple instead of
        # a string, of which the first position contains the path.
        if isinstance(path, tuple):
            path = path[0]
        if not path:
            return
        self._open_jzip(path)

    def event_osweb_open_jatos(self):
        from osweb import sync
        if not self._jatos_configured():
            return
        self.main_window.set_busy(True)
        try:
            remote_exp_list = sync.list_remote(self._jatos_info())
        except ListRemoteError as e:
            self.report_exception(e)
            return
        finally:
            self.main_window.set_busy(False)
        haystack = []
        for remote_exp in remote_exp_list:
            haystack.append(
                (remote_exp['title'], remote_exp,
                 self._select_remote_experiment))
        self.extension_manager.fire(
            'quick_select',
            haystack=haystack,
            placeholder_text=_('Browse') + f' {cfg.oswebext_jatos_url} …')
        
    def _select_remote_experiment(self, remote_exp):
        from osweb import sync, convert
        self.main_window.set_busy(True)
        try:
            jzip_path = sync.download_jzip(remote_exp['uuid'],
                                           self._jatos_info())
        except JZIPDownloadError as e:
            self.report_exception(e)
        else:
            self._open_jzip(jzip_path)
        finally:
            self.main_window.set_busy(False)
    
    def event_osweb_publish_jatos(self):
        from osweb import sync, convert
        if not self._jatos_configured():
            return
        self.main_window.set_busy(True)
        try:
            sync.upload(
                self.experiment,
                self._jatos_info(),
                subject=str(cfg.oswebext_subject_nrs),
                fullscreen=cfg.oswebext_fullscreen,
                welcome_text=cfg.oswebext_welcome_text,
                external_js=self._external_js(),
                intro_click=cfg.oswebext_intro_click)
        except Exception as e:
            self.report_exception(e)
        else:
            self.extension_manager.fire(
                'notify',
                message=_('Experiment has been published to JATOS'),
                always_show=True)
        finally:
            self.main_window.set_busy(False)
        self._refresh_control_panel()
    
    def event_osweb_convert_results(self):
        from osweb import results
        from datamatrix import io

        results_path = QFileDialog.getOpenFileName(
            self.main_window, _('Select OSWeb results file…'),
            filter='OSWeb results (*.*)')
        if isinstance(results_path, tuple):
            results_path = results_path[0]
        if not results_path:
            return
        results_path = Path(results_path)
        self.main_window.set_busy(True)
        try:
            dm = results.parse_results(
                results_path, include_context=cfg.oswebext_include_context)
        except Exception as e:
            self.report_exception(e)
            return
        finally:
            self.main_window.set_busy(False)
        export_path = QFileDialog.getSaveFileName(
            self.main_window, _('Save as…'),
            filter='Excel (*.xlsx);;CSV (*.csv)')
        if isinstance(export_path, tuple):
            export_path = export_path[0]
        if not export_path:
            return
        export_path = Path(export_path)
        if export_path.suffix.lower() not in ('.csv', '.xlsx'):
            export_path = export_path.with_suffix('.xlsx')
        if export_path.suffix.lower().endswith('.xlsx'):
            io.writexlsx(dm, export_path)
        else:
            io.writetxt(dm, export_path)
        
    def event_osweb_run(self, fullscreen=False, subject_nr=0,
                        logfile='quickrun.csv'):
        from osweb import convert
        if not cfg.oswebext_bypass_linter:
            errors = linter.check_compatibility(
                self.experiment, fullscreen=cfg.oswebext_fullscreen)
            if errors:
                return OSWebCompatibilityError(errors)
        # Replace the csv extension by a json extension
        if logfile.lower().endswith('.csv'):
            logfile = logfile[:-4] + '.json'
        self.main_window.get_ready()
        try:
            index_path = convert.exp_to_html(
                self.experiment,
                subject=str(subject_nr),
                logfile=logfile,
                fullscreen=fullscreen,
                welcome_text=cfg.oswebext_welcome_text,
                external_js=self._external_js(),
                intro_click=cfg.oswebext_intro_click)
        except PythonToJavaScriptError as e:
            self.report_exception(e)
            return
        finally:
            self._refresh_control_panel()
        webbrowser.open('file://{}'.format(index_path))
        # The UserAborted exception will result in a notification, rather than
        # in a full-screen tab saying that the experiment has finished.
        return UserAborted(_('Experiment started in external browser'))

    def activate(self):
        self._show_controls()
        
    def settings_widget(self):
        widget = super().settings_widget()
        widget.ui.button_clear_jatos_uuid.clicked.connect(
            lambda: self._clear_jatos_uuid(widget))
        return widget
        
    def _clear_jatos_uuid(self, widget):
        del self.experiment.var.jatos_uuid
        widget.ui.edit_uuid.setText('')

    def _show_controls(self, jatos_configured=True):
        from .osweb_control_panel import OSWebControlPanel
        if self._control_panel is None:
            self._control_panel = OSWebControlPanel(self.main_window,
                                                    self.settings_widget())
        self.tabwidget.add(self._control_panel, self.icon(), self.label())
        self._control_panel.set_jatos_configured(jatos_configured)
        
    def _external_js(self):
        return [url.strip() for url in cfg.oswebext_external_js.splitlines()]

    def _jatos_configured(self):
        if isinstance(cfg.oswebext_jatos_url, str) and \
                cfg.oswebext_jatos_url.startswith('http') and \
                isinstance(cfg.oswebext_jatos_api_token, str) and \
                cfg.oswebext_jatos_api_token.startswith('jap_'):
            return True
        self._show_controls(jatos_configured=False)
        return False

    def _jatos_info(self):
        from osweb import sync
        return sync.JatosInfo(cfg.oswebext_jatos_url,
                              cfg.oswebext_jatos_api_token)

    def _refresh_control_panel(self):
        if self._control_panel is None:
            return
        self._control_panel.refresh()

    def _open_jzip(self, jzip_path):
        from osweb import convert
        try:
            exp = convert.jzip_to_exp(
                jzip_path,
                factory=lambda string: Experiment(self.main_window,
                                                  string=string))
        except UnsupportedJZIP as e:
            self.report_exception(e)
        else:
            self.main_window.open_experiment(exp)
