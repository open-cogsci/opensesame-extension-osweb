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
import tempfile
import os
from libopensesame.oslogging import oslogger
from . import version_info
from . import convert


JatosInfo = namedtuple('JatosInfo', ('url', 'token'))


class JZIPDownloadError(Exception):
    pass


def download_jzip(uuid, jatos_info, jzip_path=None):
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
    response = requests.get(
        f'{jatos_info.url}/jatos/api/v1/studies/{uuid}', headers=headers,
        stream=True)
    if response.status_code != 200:
        raise JZIPDownloadError()
    if jzip_path is None:
        temp = tempfile.NamedTemporaryFile(delete=False)
        jzip_path = temp.name
    jzip_path = Path(jzip_path)
    with jzip_path.open('wb') as f:
        for chunk in response.iter_content(chunk_size=1024):
            if chunk:
                f.write(chunk)
    oslogger.info(f'file downloaded at {jzip_path}')
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
    response = requests.get(
        f'{jatos_info.url}/jatos/api/v1/studies/properties', headers=headers)
    study_list = response.json()['data']
    oslogger.debug(f'listed {len(study_list)} remote studies')
    return study_list


def list_remote_assets(exp, jatos_info, flatten=True):
    """List remote assets in a JATOS study.

    This function retrieves the structure of the remote assets in a given JATOS
    study and optionally flattens the returned asset structure into a 
    dictionary where keys are file paths and values are file checksums.

    Parameters
    ----------
    exp : Experiment
    jatos_info : JatosInfo
    flatten : bool, optional
        If True (default), the returned asset structure is flattened. If False,
        the original nested structure is returned.

    Returns
    -------
    dict or None
        Dictionary of remote assets, where keys are file paths and values are
        file checksums, or None if the request fails. If 'flatten' is False,
        the returned structure may be nested.

    Raises
    ------
    requests.exceptions.RequestException
        If a request to the JATOS server fails.
    """
    def _flatten_assets(data, assets=None):
        if assets is None:
            assets = {}
        if 'content' in data:
            for item in data['content']:
                _flatten_assets(item, assets)
        elif data['type'] == 'file':
            assets[data['path']] = data['checksum']
        return assets
    
    exp = convert.as_jatos_exp(exp)
    headers = {'accept': 'application/json',
               'Authorization': f'Bearer {jatos_info.token}'}
    response = requests.get(
        f'{jatos_info.url}/jatos/api/v1/studies/{exp.var.jatos_uuid}'
        f'/assets/structure',
        headers=headers)
    if response.status_code != 200:
        return None
    if flatten:
        assets = _flatten_assets(response.json()['data'])
    return assets
    

def upload(exp, jatos_info):
    """Upload an experiment to a JATOS server.

    This function converts an experiment into a jzip file, logs the size of the
    file, sends a POST request to the JATOS server to upload the study, and
    finally deletes the local jzip file. It returns a boolean indicating the
    success of the upload operation.

    Parameters
    ----------
    exp : Experiment
    jatos_info : JatosInfo

    Returns
    -------
    bool
        True if the upload was successful (HTTP status code 200), False
        otherwise.
    """
    path = convert.exp_to_jzip(exp, jatos_info=jatos_info)
    oslogger.info(
        f'jzip exported to {path} ({path.stat().st_size / 1024 ** 2:.2f} Mb)')
    headers = {'accept': 'application/json',
               'Authorization': f'Bearer {jatos_info.token}'}
    params = {
        'keepProperties': 'false', 
        'keepAssets': 'true', 
        'keepCurrentAssetsName': 'true', 
        'renameAssets': 'true'
    }
    with path.open('rb') as fd:
        response = requests.post(f'{jatos_info.url}/jatos/api/v1/study',
                                 headers=headers,
                                 files={'study': fd})
    path.unlink()
    if response.status_code == 200:
        oslogger.debug('succesfully published')
        return True
    oslogger.warning('failed to publish')
    return False
