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
import sys
from libopensesame.oslogging import oslogger
from pyqode.python.backend import server
from libqtopensesame.pyqode_extras.widgets import FallbackCodeEdit


class JavaScriptCodeEdit(FallbackCodeEdit):

    mimetypes = [
        'text/x-javascript',
        'text/javascript',
        'application/javascript'
    ]

    def _start_backend(self):
        
        self.backend.start(
            server.__file__,
            sys.executable,
            reuse=True,
            share_id='javascript'
        )

    @property
    def language(self):

        return 'javascript'

    def __repr__(self):

        return 'JavaScriptCodeEdit(path={})'.format(self.file.path)
