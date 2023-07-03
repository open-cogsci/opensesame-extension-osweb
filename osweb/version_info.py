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
import json
import requests
import hashlib
import zlib
from libopensesame.oslogging import oslogger
from . import convert, sync
from .oswebexceptions import VersionInfoDownloadError


VersionComparison = namedtuple(
    'VersionComparison', ('unmodified', 'modified', 'conflicting', 'added',
                          'deleted'))


def compare_version_info(jatos_info, older_info, newer_info):
    """Compares two version infos to see whether the experiment corresponding
    to older_info can be safely updated to newer_info. Returns a 
    VersionComparison object that contains lists of files that:
    
    - have been unmodified in older_info relative to newer_info (unmodified)
    - have been modified in older_info relative to newer_info but can be
      fast-forwarded without conflict (modified)
    - have been modified in older_info relative to newer_info and cannot be
      fast-forwarded without conflict (conflicting)
    - have been added in newer_info relative to older_info (added)
    - have been deleted in newer_info relative to older_info (deleted)
    """

    def get_src_file_history(newer_versions, file):
        return [v[file] for v in newer_versions if file in v]

    newer_versions = newer_info[jatos_info.url]['versions']
    older_versions = older_info[jatos_info.url]['versions']
    newer_latest = newer_versions[-1]
    older_latest = older_versions[-1]
    newer_files = set(newer_latest.keys())
    older_files = set(older_latest.keys())
    all_files = newer_files & older_files
    # A file is unmodified if the latest versions in the newer and older info
    # are the same
    unmodified = set(file for file in all_files
                     if newer_latest[file] == older_latest[file])
    # A file is modified if the latest versions in the newer and older info
    # don't match, but the old version is present in the history of the newer
    # info
    modified = set(file for file in all_files
                   if newer_latest[file] != older_latest[file] 
                   and older_latest[file] in get_src_file_history(
                       newer_versions, file))
    # A file is conflicting if trhe latest versions in the newer and older info
    # don't match, and the old version is not in th ehistory of the newer info
    conflicting = set(file for file in all_files
                      if newer_latest[file] != older_latest[file]
                      and older_latest[file] not in get_src_file_history(
                          newer_versions, file))
    added = newer_files - older_files
    deleted = older_files - newer_files
    return VersionComparison(unmodified, modified, conflicting, added, deleted)


def download_version_info(exp, jatos_info):
    """Downloads version info (version_info.json) from JATOS and returns it as
    a dict. If the study doesn't exist or if it does exist but does not contain
    any version info, None is returned.
    """
    headers = {'accept': 'application/json',
               'Authorization': f'Bearer {jatos_info.token}'}
    try:
        response = requests.get(
            f'{jatos_info.url}/jatos/api/v1/studies/{exp.var.jatos_uuid}'
            f'/assets/version_info.json',
            headers=headers)
    except Exception as e:
        raise VersionInfoDownloadError(
            f'Failed to connect to JATOS server: \n\n{e}')
    if response.status_code == 200:
        oslogger.debug('version info succesfully downloaded')
        try:
            return response.json()
        except Exception as e:
            raise VersionInfoDownloadError(
                f'Failed to parse version info: \n\n{e}')
    oslogger.warning('failed to download version info')


def update_version_info(exp, asset_list, jatos_info):
    """Updates version_info.json in the file pool (creating it if it doesn't
    exist yet) and return the version info as a dict.
    """
    exp = convert.as_jatos_exp(exp)
    folder = Path(exp.pool.folder())
    version_info_path = folder / 'version_info.json'
    if version_info_path.exists():
        version_info = json.loads(version_info_path.read_text())
    else:
        oslogger.debug('initializing version_info.json')
        version_info = {}
    # Initialize mandatory fields if they don't exist yet
    version_info.setdefault(jatos_info.url, {})
    version_info[jatos_info.url].setdefault('uuid', exp.var.jatos_uuid)
    version_info[jatos_info.url].setdefault('versions', [])
    # Compute the version dict for the current state of the files in the folder
    current_version = {}
    for src, tgt in asset_list:
        if isinstance(src, Path):
            if not src.exists():
                oslogger.debug(f'asset does not exist: {src}')
                continue
            src = src.read_bytes()
        else:
            src = src.encode('utf-8')
        sha256 = adler32(src)
        current_version[tgt] = sha256
        oslogger.debug(f'{tgt}: {sha256}')
    # Append the current version to the list of versions
    version_info[jatos_info.url]['versions'].append(current_version)
    # Save back to the file and return
    version_info_path.write_text(json.dumps(version_info))
    return version_info


def extract_version_info(exp):
    path = Path(convert.as_jatos_exp(exp).pool.folder()) / 'version_info.json'
    return json.loads(path.read_text())


def adler32(data):
    """Compute the Adler32 checksum of the file specified by `path`."""
    return zlib.adler32(data) & 0xffffffff  # Return a 32-bit integer<