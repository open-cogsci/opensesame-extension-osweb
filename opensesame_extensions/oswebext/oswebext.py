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
from libopensesame.oslogging import oslogger
from libqtopensesame.extensions import base_extension


class oswebext(base_extension):

	"""
	desc:
		An example extension that lists all available events.
	"""

	def event_startup(self):

		self._widget = None

	def activate(self):

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
			self._widget = oswebext_widget(self.main_window)
			self.set_busy(False)
		return self._widget
