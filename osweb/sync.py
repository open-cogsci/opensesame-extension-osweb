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
from collections import namedtuple
from pathlib import Path
import requests
from requests_toolbelt import MultipartEncoder, MultipartEncoderMonitor
import tempfile
import os
from libopensesame.oslogging import oslogger
from . import version_info
from . import convert
from .oswebexceptions import JZIPDownloadError, JZIPUploadError, \
    ListRemoteError, VersionConflict


JatosInfo = namedtuple('JatosInfo', ('url', 'token'))


def download_jzip(uuid, jatos_info, callback=None, jzip_path=None):
    """Downloads a JZIP file from a JATOS server and saves it to a specified 
    location.

    This function sends a GET request to the JATOS server to download a JZIP 
    file  identified by a specific UUID. The file is saved to a location 
    specified by `jzip_path`, or to a temporary location if no path is 
    provided. The function logs the download  process and raises a 
    `JZIPDownloadError` if the server responds with a non-200 status code.

    Parameters
    ----------
    uuid : str
        The unique identifier of the study on the JATOS server.
    jatos_info : JatosInfo
    callback : callable, optional
        A function that takes a MultipartEncoderMonitor as a single argument.
        This function can be used to monitor upload progress.    
    jzip_path : str, optional
        The path where the JZIP file will be saved. If not provided, the file 
        is saved to a temporary location.

    Returns
    -------
    pathlib.Path
        The path where the JZIP file has been saved.

    Raises
    ------
    JZIPDownloadError
        If the response from the server is not a 200 status code.
    """
    headers = {'accept': 'application/json',
               'Authorization': f'Bearer {jatos_info.token}'}
    try:
        response = requests.get(
            f'{jatos_info.url}/jatos/api/v1/studies/{uuid}', headers=headers,
            stream=True)
        response.raise_for_status()
    except requests.exceptions.HTTPError as e:
        raise JZIPDownloadError(f'HTTP error occurred: {e}')
    except Exception as e:
        raise JZIPDownloadError(f'Failed to connect to JATOS server: \n\n{e}')

    if jzip_path is None:
        jzip_path = Path(tempfile.NamedTemporaryFile(delete=False).name)
    else:
        jzip_path = Path(jzip_path)
    try:
        with jzip_path.open('wb') as f:
            total_length = int(response.headers.get('content-length'))
            downloaded = 0
            for chunk in response.iter_content(chunk_size=1024):
                downloaded += len(chunk)
                f.write(chunk)
                if callback is not None:
                    callback(downloaded, total_length)
    except Exception as e:
        raise JZIPDownloadError(f'Failed to stream from JATOS server: \n\n{e}')
    return jzip_path


def list_remote(jatos_info):
    """List the properties of remote studies from a JATOS server.
    
    Parameters
    ----------
    jatos_info : JatosInfo
    
    Returns
    -------
    study_list : list
        A list of dictionaries, where each dictionary contains properties
        of a remote study available on the JATOS server. The content of
        each dictionary depends on the properties set in each study on the
        server.
    """
    headers = {'accept': 'application/json',
               'Authorization': f'Bearer {jatos_info.token}'}
    try:
        response = requests.get(
            f'{jatos_info.url}/jatos/api/v1/studies/properties',headers=headers)
    except Exception as e:
        raise ListRemoteError(f'Failed to connect to JATOS server: \n\n{e}')
    if response.status_code == 401:
        raise ListRemoteError(
            'Invalid API token: {jato_info.token} status code 401)')
    try:
        study_list = response.json()['data']
    except Exception as e:
        raise ListRemoteError(
            f'Server does not appear to be a JATOS server: \n\n{e}')
    oslogger.debug(f'listed {len(study_list)} remote studies')
    return study_list


def upload(exp, jatos_info, callback=None, **jzip_kwargs):
    """Upload an experiment to a JATOS server.

    This function converts an experiment into a jzip file, logs the size of the
    file, sends a POST request to the JATOS server to upload the study, and
    finally deletes the local jzip file. The JATOS UUID is returned.

    Parameters
    ----------
    exp : Experiment
        If no UUID was specified in the experiment, the experiment object is 
        modified in place such that a jatos_uuid variabiable is added.
    jatos_info : JatosInfo
    callback : callable, optional
        A function that takes a MultipartEncoderMonitor as a single argument.
        This function can be used to monitor upload progress.
    jzip_kwags : dict, optional
        Parameters that are passed onto convert.exp_to_jzip()
        
    Returns
    -------
    str
        JATOS UUID

    Raises
    ------
    JZIPUploadError
        If the experiment failed to upload for technical reasons
    VersionConflict
        If the experiment failed to upload because of a version conflict
    """
    exp = convert.as_jatos_exp(exp)
    try:
        path = convert.exp_to_jzip(exp, jatos_info=jatos_info, **jzip_kwargs)
    except VersionConflict:
        raise
    except Exception as e:
        raise JZIPUploadError(f'Failed to connect to server: \n\n{e}')
    oslogger.debug(
        f'jzip exported to {path} ({path.stat().st_size / 1024 ** 2:.2f} Mb)')
    params = {
        'keepProperties': 'false', 
        'keepAssets': 'true', 
        'keepCurrentAssetsName': 'true', 
        'renameAssets': 'true'
    }
    with path.open('rb') as fd:
        encoder = MultipartEncoder(
            {'study': ('filename', fd, 'application/zip')})
        # A callback function that calls the actual user-provided callback
        # with the number of bytes read and the total number of bytes
        def upload_callback(monitor):
            if callback is not None:
                callback(monitor.bytes_read, encoder.len)
        monitor = MultipartEncoderMonitor(encoder, upload_callback)
        headers = {'accept': 'application/json',
                   'Authorization': f'Bearer {jatos_info.token}',
                   'Content-Type': monitor.content_type}
        try:
            response = requests.post(f'{jatos_info.url}/jatos/api/v1/study',
                                     headers=headers,
                                     data=monitor)
            response.raise_for_status()
        except requests.exceptions.HTTPError as e:
            raise JZIPUploadError(f'HTTP error occurred: {e}')
        except Exception as e:
            raise JZIPUploadError(f'Failed to connect to server: \n\n{e}')
    path.unlink()
    if response.status_code == 200:
        oslogger.debug('succesfully published')
        return exp.var.jatos_uuid
    if response.status_code == 401:
        raise JZIPUploadError(
            'Invalid API token: {jato_info.token} status code 401)')
    if response.status_code == 404:
        raise JZIPUploadError(
            f'Invalid server address: {jatos_info.url} (status code 404)')
    raise JZIPUploadError(
        f'Unknown upload error (status code {response.status_code})')
