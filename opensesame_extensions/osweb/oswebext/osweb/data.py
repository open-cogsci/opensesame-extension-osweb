# coding=utf-8

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
import os
import json
from datamatrix import DataMatrix, operations as ops
from pathlib import Path
import tempfile
import zipfile
from datamatrix.py3compat import *


STEPS = 100


def parse_results(path, include_context=False):
    """Converts a results file, detects its type, and returns it as a
    DataMatrix. If the context is included, columns are created for each of the
    context variables.

    Parameters
    ----------
    path: Path
    include_context: bool

    Returns
    -------
    DataMatrix
    """
    path = Path(path)
    if path.suffix.lower() in ('.zip', '.jrzip'):
        return parse_jrzip(path, include_context)
    if path.suffix.lower() == '.json':
        return parse_json(path)
    return parse_jatos_results(path, include_context)
    
    
def parse_json(path):
    """Converts a json results file, as stored by standalone OSWeb, and returns
    it as a DataMatrix. If the context is included, columns are created for
    each of the context variables.

    Parameters
    ----------
    path: Path
    include_context: bool

    Returns
    -------
    DataMatrix
    """
    data = json.loads(path.read_text())
    if not isinstance(data, list):
        raise TypeError('Invalid JSON results file')
    dm = DataMatrix(length=len(data))
    for dm_row, data_row in zip(dm, data):
        for key, val in data_row.items():
            dm_row[key] = val
    return dm


def parse_jrzip(path, include_context):
    """Converts a JATOS results archive and returns it as a DataMatrix. If the
    context is included, columns are created for each of the context variables.

    Parameters
    ----------
    path: Path
    include_context: bool

    Returns
    -------
    DataMatrix
    """
    dms = []
    with tempfile.TemporaryDirectory() as temp_dir:
        temp_dir = Path(temp_dir)
        with zipfile.ZipFile(path, 'r') as zip_ref:
            zip_ref.extractall(temp_dir)
            # The archive contains separate txt files that are similar to one
            # line from the old txt data files.
            for results_file in temp_dir.glob('**/*.txt'):
                dm = parse_jatos_results(results_file, include_context)
                # We extract the jatosResultId from the file name, which has
                # the format study_result_[result_id]
                dm.jatosStudyResultId = results_file.parts[-3].split('_')[-1]
                dms.append(dm)
    return ops.stack(dms)


def parse_jatos_results(path, include_context):
    """Converts a JATOS data-only results file and returns it as a DataMatrix.
    If the context is included, columns are created for each of the context
    variables.
    
    Parameters
    ----------
    path: Path
    include_context: bool
    
    Returns
    -------
    DataMatrix
    """
    if hasattr(json.decoder, 'JSONDecodeError'):
        jsonerror = json.decoder.JSONDecodeError
    else:
        jsonerror = ValueError
    dm = DataMatrix(length=STEPS)
    invalid_lines = 0
    incomplete_lines = 0
    total_lines = 0
    row = 0
    with path.open() as fd:
        for line in fd:
            # Strip the lines so that they are valid json
            line = line.strip()
            if line.startswith('[{'):
                line = line[1:]
            if line.endswith('},') or line.endswith('}]'):
                line = line[:-1]
            total_lines += 1
            # Ignore empty lines
            if not line:
                continue
            try:
                d = json.loads(line)
            except jsonerror:
                invalid_lines += 1
                continue
            else:
                if not d:
                    continue
            # Complete data is stored as a single-json object with a data and
            # context field. We're only interested in the data field here,
            # which in turn is a list of dicts where each dict corresponds to
            # a logger call. This data is stored when an experiment is
            # successfully finished.
            if len(d) == 2 and 'data' in d and 'context' in d:
                trials = d['data']
                context = d['context']
            # Incomplete data is stored as a single json line corresponding to
            # a single logger call. This kind of data should only happen when
            # the experiment is not finished, so that data is only partially
            # logged, one trial at a time.
            else:
                trials = [d]
                context = {}
                incomplete_lines += 1
            first_row = row
            for trial in trials:
                if row >= len(dm):
                    dm.length += STEPS
                for key, val in trial.items():
                    if key not in dm:
                        dm[key] = u''
                    dm[key][row] = safe_decode(val)
                row += 1
            if include_context:
                for key, value in _flatten_dict(context).items():
                    if key not in dm:
                        dm[key] = u''
                    dm[key][first_row:row] = safe_decode(value)
    dm.length = row
    if invalid_lines:
        warn('Failed to parse {} of {} lines'.format(invalid_lines,
                                                     total_lines))
    if incomplete_lines:
        warn('Incomplete (unfinished) data in {} of {} lines'.format(
            incomplete_lines, total_lines))
    return dm


def _flatten_dict(d):
    
    flat_dict = {}
    for key, value in d.items():
        if isinstance(value, dict):
            for subkey, subvalue in _flatten_dict(value).items():
                flat_dict['{}_{}'.format(key, subkey)] = subvalue
        else:
            flat_dict[key] = value
    return flat_dict


if __name__ == '__main__':

    import sys
    dm = parse_jatos_results(sys.argv[-1])
    print(dm)
    print('{} trials'.format(len(dm)))
