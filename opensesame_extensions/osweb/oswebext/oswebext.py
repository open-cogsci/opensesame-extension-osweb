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
from libqtopensesame.extensions import BaseExtension
from libqtopensesame.misc.translate import translation_context
from .osweb import linter
from .osweb_runner import OSWebRunner
from openexp import backend
import os
_ = translation_context(u'oswebext', category=u'extension')


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

    def event_startup(self):
        self._widget = None
        backend.backend_info = decorate_backend_info(backend.backend_info)
        
    def provide_runner(self):
        if self.experiment.var.canvas_backend == 'osweb':
            return OSWebRunner
        
    def provide_item_supported(self, experiment, item_type):
        if self.experiment.var.canvas_backend != 'osweb':
            return None
        return linter.item_type_supported(item_type)
        
    def event_osweb_run(self, fullscreen=False, subject_nr=0,
                        logfile='quickrun.csv'):
        if self.run_linter():
            self.widget()._test(fullscreen=fullscreen, subject_nr=subject_nr,
                                logfile=os.path.basename(logfile))
            return
        self._show_controls()

    def activate(self):
        self._show_controls()

    def run_linter(self):
        error_report = linter.check_compatibility(
            self.experiment,
            fullscreen=(False if self._widget is None 
                        else self._widget.ui.fs_checkBox.isChecked()))
        if not error_report:
            error_report = u'No problems detected'
            ok = True
        else:
            self.extension_manager.fire(
                'notify', message=_('Compatibility check failed'),
                category='warning')
            ok = False
        if self._widget is not None:
            self._widget.set_error(error_report)
        return ok

    def _show_controls(self):
        """Opens the plug-in manager tab, or switch to it if already open."""
        self.tabwidget.add(self.widget(), self.icon(), self.label())

    def widget(self):
        """
        Returns
        -------
        QWidget
            The widget to be used in the tab widget.
        """
        if self._widget is None:
            self.set_busy()
            from .oswebext_widget import OSWebExtWidget
            self._widget = OSWebExtWidget(self.main_window, self)
            self.set_busy(False)
        return self._widget
