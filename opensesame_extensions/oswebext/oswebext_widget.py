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
from libqtopensesame.widgets.base_widget import base_widget
from libopensesame.osexpfile import osexpwriter
from osweb import export, linter, __version__
from libqtopensesame.misc.translate import translation_context
from libqtopensesame.misc.config import cfg
_ = translation_context(u'oswebext', category=u'extension')


class oswebext_widget(base_widget):

	"""
	desc:
		Controls for interacting with OSWeb
	"""

	def __init__(self, main_window):

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
		self.ui.button_test.clicked.connect(self._test)
		self.ui.button_jatos.clicked.connect(self._export_jatos)
		self.ui.label_version.setText(__version__)
		self.ui.linedit_subject.setValidator(
			QRegExpValidator(QRegExp("^(?:\d+(?:-\d+)?(?:,(?!$))?)+"))
		)
		self.ui.icon_expsize_warning.setPixmap(
			QIcon.fromTheme('emblem-important').pixmap(32,32)
		)
		self._run_linter()

	def on_activate(self):

		self._run_linter()
		self._check_filesize()

	def _run_linter(self):

		error_report = linter.check_compatibility(self.experiment)
		if not error_report:
			error_report = u'No problems detected'
		self.ui.label_linter.setText(error_report)

	def _check_filesize(self):

		try:
			size = self.pool.size()
		except:
			size = -1
		if size > 10*1024**2:
			self.ui.label_expsize_warning.setText(_('Your experiment is '
				'%d MB which is larger than the recommended maximum size of 10MB.\n'
				'This is detrimental to loading times and performance when the experiment is run online.'
				) % (size / 1048576))
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

		osexp = self._tmp_osexp()
		html = self._tmp_html()
		poss_subject_nrs = self.ui.linedit_subject.text()
		fullscreen = self.ui.fs_checkBox.isChecked()
		export.standalone(
			osexp,
			html,
			subject=poss_subject_nrs,
			fullscreen=fullscreen
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
			fullscreen=fullscreen
		)
		os.remove(osexp)
		self.extension_manager.fire(
			'notify',
			message='Experiment succesfully exported',
			category='success',
			always_show=True
		)

	def _tmp_osexp(self):

		with tempfile.NamedTemporaryFile(suffix=u'.osexp', delete=False) as fd:
			pass
		osexpwriter(self.experiment, fd.name)
		return fd.name

	def _tmp_html(self):

		with tempfile.NamedTemporaryFile(suffix=u'.html', delete=False) as fd:
			pass
		return fd.name
