"""This file is part of OpenSesame.

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
from libopensesame.exceptions import OSException


class PythonToJavaScriptError(OSException):
    """ A `PythonToJavaScriptError` is raised when a Python expression could
    not be converted to JavaScript. This may happen when a Python expression is
    invalid or when there is no equivalent of a Python expression in
    JavaScript. To resolve the error, locate and fix the Python expression
    mentioned in the error message.
    """
    def __str__(self):
        return f'{self.title()}\n\n{self._msg}'

    def markdown(self):
        return f'# {self.title()}\n\n{self._msg}\n\n{self._read_more}'
