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


class OSWebException(OSException):
    def __str__(self):
        return f'{self.title()}\n\n{self._msg}'

    def markdown(self):
        return f'# {self.title()}\n\n{self._msg}\n\n{self._read_more}'


class PythonToJavaScriptError(OSWebException):
    """A `PythonToJavaScriptError` is raised when a Python expression could
    not be converted to JavaScript. This may happen when a Python expression is
    invalid or when there is no equivalent of a Python expression in
    JavaScript. To resolve the error, locate and fix the Python expression
    mentioned in the error message.
    """
        
        
class OSWebCompatibilityError(OSWebException):
    """An `OSWebCompatibilityError` is raised when an experiment contains
    functionality that is not supported by OSWeb. This may happen when the
    experiment contains unsupported items, such as Python `inline_script` 
    items. An overview of supported functionality can be found on the
    documentation site. The compatibility check can be disabled (at your own 
    risk!) in the OSWeb control panel.
    """


class JZIPDownloadError(OSWebException):
    """A `JZIPDownloadError` is raised when an experiment could not be
    downloaded from a JATOS server. This may happen when the JATOS server or
    API token are incorrect. This may also happen when there is a problem with
    the internet connection. Finally, this may also happen when the experiment
    that you are trying to open is not in the correct format, for example when
    it uses jsPsych, lab.js, or an older version of OSWeb.
    """


class VersionInfoDownloadError(OSWebException):
    """A `VersionInfoDownloadError` is raised when version info could not be
    downloaded from a JATOS server. This may happen when the JATOS server or
    API token are incorrect. This may also happen when there is a problem with
    the internet connection. Finally, this may also happen when the experiment
    that you are trying to open is not in the correct format, for example when
    it uses jsPsych, lab.js, or an older version of OSWeb.
    """


class JZIPUploadError(OSWebException):
    """A `JZIPUploadError` is raised when an experiment could not be 
    uploaded to a JATOS server. This may happen when the JATOS server or API 
    token are incorrect. This may also happen when there is a problem with the
    internet connection.
    """


class VersionConflict(OSWebException):
    """A `VersionConflict` is raised when trying to update a remote experiment
    that cannot be safely updated to the current experiment. To work around 
    this, you can reset the JATOS UUID to reset the link between the remote
    experiment and the current experiment.
    """


class UnsupportedJZIP(OSWebException):
    """An `UnsupportedJZIP` is raised when opening an unsupported JATOS Study
    Archive (.jzip). This may happen when the study was created with an older
    version of OSWeb or with other software. This may also happen when the
    jzip file is corruped.
    """


class ListRemoteError(OSWebException):
    """A `ListRemoteError` is raised when something goes wrong while trying to
    list all (remote) experiments on a JATOS server. This may happen when the
    JATOS server or API token are incorrect. This may also happen when there is
    a problem with the internet connection.
    """
