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
from libqtopensesame.extensions import base_extension
from libqtopensesame.misc.translate import translation_context
from osweb import linter
_ = translation_context(u'oswebext', category=u'extension')


class oswebext(base_extension):

	"""
	desc:
		An example extension that lists all available events.
	"""

	def event_startup(self):

		self._widget = None
		self._show_controls_action = self.qaction(
			u'applications-internet',
			u'OSWeb',
			self._show_controls,
		)
		self.add_action(
			self.get_submenu(u'tools'),
			self._show_controls_action,
			3,
			False,
			False
		)

	def activate(self):

		self.widget()._test()

	def event_new_item(self, name, _type):

		self.run_linter()

	def event_delete_item(self, name):

		self.run_linter()

	def event_purge_unused_items(self):

		self.run_linter()

	def run_linter(self):

		error_report = linter.check_compatibility(self.experiment)
		if not error_report:
			error_report = u'No problems detected'
			self.action.setEnabled(True)
		else:
			self.action.setEnabled(False)
		if self._widget is not None:
			self._widget.set_error(error_report)

	def _show_controls(self):

		"""
		desc:
			Open the plug-in manager tab, or switch to it if already open.
		"""

		self.tabwidget.add(self.widget(), self.icon(), self.label())

	def widget(self):

		"""
		returns:
			desc:	The widget to be used in the tab widget.
			type:	QWidget
		"""

		if self._widget is None:
			self.set_busy()
			from oswebext_widget import oswebext_widget
			self._widget = oswebext_widget(self.main_window, self)
			self.set_busy(False)
		return self._widget
