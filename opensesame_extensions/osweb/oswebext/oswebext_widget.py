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
import os
import tempfile
import webbrowser
from pathlib import Path
from qtpy.QtWidgets import QFileDialog
from qtpy.QtCore import QRegularExpression
from qtpy.QtGui import QRegularExpressionValidator, QIcon
from libqtopensesame.widgets.base_preferences_widget \
    import BasePreferencesWidget
from libopensesame.osexpfile import OSExpWriter
from .osweb import export
from .. import __version__
from libopensesame.oslogging import oslogger
from libqtopensesame.misc.translate import translation_context
from libqtopensesame.misc.config import cfg
_ = translation_context('oswebext', category='extension')

MEGABYTE = 1024 ** 2


class OSWebExtWidget(BasePreferencesWidget):

    """
    desc:
        Controls for interacting with OSWeb
    """

    def __init__(self, main_window, oswebext):
        super().__init__(main_window, ui='extensions.oswebext.oswebext')
        self._oswebext = oswebext
        self.ui.button_test.clicked.connect(self._test)
        self.ui.fs_checkBox.toggled.connect(self._run_linter)
        self.ui.button_jatos.clicked.connect(self._export_jatos)
        self.ui.button_convert.clicked.connect(self._convert_results)
        self.ui.plaintextedit_welcome_text.setPlainText(
            safe_decode(cfg.oswebext_welcome_text)
        )
        self.ui.plaintextedit_welcome_text.textChanged.connect(
            lambda: setattr(
                cfg,
                'oswebext_welcome_text',
                self.ui.plaintextedit_welcome_text.toPlainText()
            )
        )
        self.ui.plaintextedit_external_js.setPlainText(
            safe_decode(cfg.oswebext_external_js)
        )
        self.ui.plaintextedit_external_js.textChanged.connect(
            lambda: setattr(
                cfg,
                'oswebext_external_js',
                self.ui.plaintextedit_external_js.toPlainText()
            )
        )
        self.ui.label_version.setText(__version__)
        self.ui.linedit_subject.setValidator(
            QRegularExpressionValidator(
                QRegularExpression("^(?:\d+(?:-\d+)?(?:,(?!$))?)+"))
        )
        self.ui.icon_expsize_warning.setPixmap(
            QIcon.fromTheme('emblem-important').pixmap(32, 32)
        )
        self._init_widgets()
        self._run_linter()

    def on_activate(self):

        self._run_linter()
        self._check_filesize()

    def set_error(self, error_report):

        self.ui.label_linter.setText(error_report)

    def _run_linter(self):

        self._oswebext.run_linter()

    def _check_filesize(self):

        try:
            size = self.pool.size()
        except:
            size = -1
        if size > 10 * MEGABYTE:
            self.ui.label_expsize_warning.setText(_(
                'Your experiment is %d MB. <br />'
                'This exceeds the recommended maximum size of 10 MB. <br /> '
                'This may increase online loading time.'
            ) % (size // MEGABYTE))
            self.ui.icon_expsize_warning.setVisible(True)
            self.ui.label_expsize_warning.setVisible(True)
        else:
            self.ui.icon_expsize_warning.setVisible(False)
            self.ui.label_expsize_warning.setVisible(False)
            
    def _external_js(self):
        return [url.strip() for url in
                self.ui.plaintextedit_external_js.toPlainText().splitlines()]
        
    def _uuid(self):
        uuid = self.experiment.var.get('jatos_uuid', False)
        if uuid:
            return uuid
        return None

    def _test(self, fullscreen=None, subject_nr=None, logfile=None):
        """Tests the experiment by running it in an external browser"""
        # Replace the csv extension by a json extension
        if logfile.lower().endswith('.csv'):
            logfile = logfile[:-4] + '.json'
        self.main_window.get_ready()
        osexp = self._tmp_osexp()
        html = self._tmp_html()
        if subject_nr is None:
            subject_nr = self.ui.linedit_subject.text()
        if fullscreen is None:
            fullscreen = self.ui.fs_checkBox.isChecked()
        export.standalone(
            osexp,
            html,
            subject=str(subject_nr),
            logfile=logfile,
            fullscreen=fullscreen,
            welcome_text=self.ui.plaintextedit_welcome_text.toPlainText(),
            external_js=self._external_js())
        webbrowser.open('file://{}'.format(html))
        try:
            os.remove(osexp)
        except PermissionError as e:
            oslogger.warning(
                'failed to remove temporary experiment file ({})'.format(e))

    def _export_jatos(self):
        if self.main_window.current_path:
            suggested_path = self.main_window.current_path + '.jzip'
        else:
            suggested_path = cfg.file_dialog_path
        path = QFileDialog.getSaveFileName(
            self.main_window,
            _('Export JATOS study…'),
            directory=suggested_path,
            filter='JATOS study (*.jzip)')
        if isinstance(path, tuple):
            path = path[0]
        if not path:
            return
        if not path.lower().endswith('.jzip'):
            path += '.jzip'
        osexp = self._tmp_osexp()
        poss_subject_nrs = self.ui.linedit_subject.text()
        fullscreen = self.ui.fs_checkBox.isChecked()
        self.experiment.var.jatos_uuid = export.jatos(
            osexp,
            path,
            title=self.experiment.var.title,
            description=self.experiment.var.description,
            subject=poss_subject_nrs,
            fullscreen=fullscreen,
            welcome_text=self.ui.plaintextedit_welcome_text.toPlainText(),
            external_js=self._external_js(),
            uuid=self._uuid())
        os.remove(osexp)
        self.extension_manager.fire(
            'notify',
            message='Experiment succesfully exported',
            category='success',
            always_show=True)

    def _convert_results(self):

        from opensesame_extensions.osweb.oswebext.osweb import data
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
            dm = data.parse_results(
                results_path, include_context=cfg.oswebext_include_context)
        except Exception as e:
            self.extension_manager.fire(
                'notify', message=_(f'Failed to convert results file: {e}'),
                category='warning')
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

    def _tmp_osexp(self):

        with tempfile.NamedTemporaryFile(suffix='.osexp', delete=False) as fd:
            pass
        OSExpWriter(self.experiment, fd.name)
        return fd.name

    def _tmp_html(self):

        with tempfile.NamedTemporaryFile(suffix='.html', delete=False) as fd:
            pass
        return fd.name
