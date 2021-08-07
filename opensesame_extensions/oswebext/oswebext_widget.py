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
from qtpy.QtWidgets import QFileDialog
from qtpy.QtCore import QRegExp
from qtpy.QtGui import QRegExpValidator, QIcon
from libqtopensesame.widgets.base_preferences_widget \
    import BasePreferencesWidget
from libopensesame.osexpfile import osexpwriter
from osweb import export, __version__
from libqtopensesame.misc.translate import translation_context
from libqtopensesame.misc.config import cfg
_ = translation_context(u'oswebext', category=u'extension')

MEGABYTE = 1024 ** 2


class oswebext_widget(BasePreferencesWidget):

    """
    desc:
        Controls for interacting with OSWeb
    """

    def __init__(self, main_window, oswebext):

        """
        desc:
            Constructor.

        arguments:
            main_window:	The main-window object.
        """

        super(oswebext_widget, self).__init__(
            main_window,
            ui=u'extensions.oswebext.oswebext'
        )
        self._oswebext = oswebext
        self.ui.button_test.clicked.connect(self._test)
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
        self.ui.label_version.setText(__version__)
        self.ui.linedit_subject.setValidator(
            QRegExpValidator(QRegExp("^(?:\d+(?:-\d+)?(?:,(?!$))?)+"))
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
                u'Your experiment is %d MB. <br />'
                u'This exceeds the recommended maximum size of 10 MB. <br /> '
                u'This may increase online loading time.'
            ) % (size // MEGABYTE))
            self.ui.icon_expsize_warning.setVisible(True)
            self.ui.label_expsize_warning.setVisible(True)
        else:
            self.ui.icon_expsize_warning.setVisible(False)
            self.ui.label_expsize_warning.setVisible(False)

    def _test(self):

        """
        desc:
            Tests the experiment by running it in an external browser.
        """

        self.main_window.get_ready()
        osexp = self._tmp_osexp()
        html = self._tmp_html()
        poss_subject_nrs = self.ui.linedit_subject.text()
        fullscreen = self.ui.fs_checkBox.isChecked()
        export.standalone(
            osexp,
            html,
            subject=poss_subject_nrs,
            fullscreen=fullscreen,
            welcome_text=self.ui.plaintextedit_welcome_text.toPlainText()
        )
        webbrowser.open('file://{}'.format(html))
        os.remove(osexp)

    def _export_jatos(self):

        if self.main_window.current_path:
            suggested_path = self.main_window.current_path + u'.zip'
        else:
            suggested_path = cfg.file_dialog_path
        path = QFileDialog.getSaveFileName(
            self.main_window,
            _(u'Export JATOS study…'),
            directory=suggested_path,
            filter=u'JATOS study (*.zip)'
        )
        if isinstance(path, tuple):
            path = path[0]
        if not path:
            return
        osexp = self._tmp_osexp()
        poss_subject_nrs = self.ui.linedit_subject.text()
        fullscreen = self.ui.fs_checkBox.isChecked()
        export.jatos(
            osexp,
            path,
            title=self.experiment.title,
            description=self.experiment.description,
            subject=poss_subject_nrs,
            fullscreen=fullscreen,
            welcome_text=self.ui.plaintextedit_welcome_text.toPlainText()
        )
        os.remove(osexp)
        self.extension_manager.fire(
            'notify',
            message='Experiment succesfully exported',
            category='success',
            always_show=True
        )

    def _convert_results(self):

        from osweb import data
        from datamatrix import io

        jatos_results_path = QFileDialog.getOpenFileName(
            self.main_window,
            _(u'Select JATOS results file…'),
            filter=u'JATOS results (*.*)'
        )
        if isinstance(jatos_results_path, tuple):
            jatos_results_path = jatos_results_path[0]
        if not jatos_results_path:
            return

        self.main_window.set_busy(True)
        try:
            dm = data.parse_jatos_results(
                jatos_results_path,
                include_context=cfg.oswebext_include_context
            )
        except UnicodeDecodeError:
            self.extension_manager.fire(
                'notify',
                message = _('File is not utf-8 encoded'),
                category = 'warning'
            )
            return
        finally:
            self.main_window.set_busy(False)
        export_path = QFileDialog.getSaveFileName(
            self.main_window,
            _(u'Save as…'),
            filter=u'Excel (*.xlsx);;CSV (*.csv)'
        )
        if isinstance(export_path, tuple):
            export_path = export_path[0]
        if not export_path:
            return
        if export_path.lower().endswith(u'.xlsx'):
            io.writexlsx(dm, export_path)
        else:
            io.writetxt(dm, export_path)

    def _tmp_osexp(self):

        with tempfile.NamedTemporaryFile(suffix='.osexp', delete=False) as fd:
            pass
        osexpwriter(self.experiment, fd.name)
        return fd.name

    def _tmp_html(self):

        with tempfile.NamedTemporaryFile(suffix='.html', delete=False) as fd:
            pass
        return fd.name
