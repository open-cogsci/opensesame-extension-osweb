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
from libqtopensesame.runners.base_runner import BaseRunner


class OSWebRunner(BaseRunner):
    """Runs an experiment in the traditional way, in the same process."""
    
    def execute(self):
        return_values = self.main_window.extension_manager.fire(
            'osweb_run', fullscreen=self._fullscreen,
            subject_nr=self._subject_nr, logfile=self._logfile)
        return return_values.get('Oswebext', None)
    
    def init_experiment(self, quick=False, fullscreen=False):
        # Get and set the subject number and log file. In OpenSesame 4.1 this
        # has been unified into a single dialog
        try:
            # OpenSesame <= 4.0
            subject_nr = self.get_subject_nr(quick=quick)
            logfile = self.get_logfile(quick=quick, subject_nr=subject_nr,
                                       file_extension='.json')
        except AttributeError:
            # OpenSesame >= 4.1
            settings = self.get_experiment_settings(quick=quick)
            if settings is None:
                subject_nr = None
                logfile = None
            else:
                subject_nr = settings['subject_nr']
                logfile = settings['logfile']
                fullscreen = settings['fullscreen']
        if subject_nr is None or logfile is None:
            return False
        self._subject_nr = subject_nr
        self._logfile = logfile
        self._fullscreen = fullscreen
        return True

    def workspace_globals(self):
        return {}
