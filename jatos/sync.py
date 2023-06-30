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
import zlib
from pathlib import Path
import requests
from libopensesame.oslogging import oslogger
from . import version_info
from . import convert


JatosInfo = namedtuple('JatosInfo', ('url', 'token'))


def download_jzip(uuid):
    pass


def list_remote(jatos_info):
    headers = {'accept': 'application/json',
               'Authorization': f'Bearer {jatos_info.token}'}
    response = requests.get(
        f'{jatos_info.url}/jatos/api/v1/studies/properties', headers=headers)
    study_list = response.json()['data']
    oslogger.debug(f'listed {len(study_list)} remote studies')
    return study_list


def list_remote_assets(exp, jatos_info, flatten=True):

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
    # We first download the remote version info and update the local version
    # info. Then we compare these to determine whether there is a conflict,
    # in which case we abort, or whether some files have not been modified and
    # so do not need to be re-uploaded.
    remote_version_info = version_info.download_version_info(exp, jatos_info)
    local_version_info = version_info.update_version_info(exp, jatos_info)
    if remote_version_info is None:
        oslogger.debug('no remote version info')
        exclude_files = []
    else:
        oslogger.debug('remote version info found')
        version_comparison = version_info.compare_version_info(
            jatos_info, remote_version_info, local_version_info)
        if version_comparison.conflicting:
            oslogger.warning('remote experiment conflicts with local one')
            return
        exclude_files = version_comparison.unmodified
        oslogger.info(f'excluding {len(exclude_files)} unmodified files')
    # Next we create a temporary jzip that only includes files that need to be
    # re-uploaded. This is uploaded to JATOS, and then the jzip is deleted
    # again.
    path = convert.exp_to_jzip(exp, exclude_files=exclude_files,
                               jatos_info=jatos_info)
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
        response = requests.post(f'{jatos_info.url}/jatos/api/v1/study?keepAssets=true',
                                 headers=headers,
                                 files={'study': fd})
    path.unlink()
    if response.status_code == 200:
        oslogger.debug('succesfully published')
        return True
    oslogger.warning('failed to publish')
    return False


def needs_osweb(exp, jatos_info, local_assets):
    
    def _adler32_checksum(path):
        """Compute the Adler32 checksum of the file specified by `path`."""
        with path.open('rb') as f:
            data = f.read()
            checksum = zlib.adler32(data)
        return checksum & 0xffffffff  # Return a 32-bit integer

    exp = convert.as_jatos_exp(exp)
    remote_assets = list_remote_assets(exp, jatos_info)
    if remote_assets is None:
        oslogger.info('osweb source not found on remote experiment')
        return True
    for key, local_key_assets in local_assets.items():
        for local_asset_dict in local_key_assets:
            local_asset = local_asset_dict['src']
            remote_checksum = remote_assets.get(f'{key}/{local_asset.name}',
                                                None)
            local_checksum = _adler32_checksum(local_asset)
            oslogger.debug(
                f'{local_asset.name}: {remote_checksum} / {local_checksum}')
            if remote_checksum != local_checksum:
                break
    else:
        oslogger.info('all osweb source files match')
        return False
    oslogger.info('some osweb source files do not match')
    return True
