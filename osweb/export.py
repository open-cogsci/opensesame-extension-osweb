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
import hashlib
import time
import json
import base64
import warnings
import tempfile
import zipfile


def standalone(osexp, dst, subject=0, fullscreen=False):

    _html(osexp, dst, u'standalone', subject=subject, fullscreen=fullscreen)


def jatos(
    osexp,
    dst,
    title='My OpenSesame experiment',
    description='No description',
    subject=0,
    fullscreen=False
):

    asset = _unique_hash()
    dirname = tempfile.mkdtemp(suffix=u'.jatos')
    os.mkdir(os.path.join(dirname, asset))
    asset_path = os.path.join(dirname, asset, u'index.html')
    jas_path = os.path.join(dirname, u'info.jas')
    _html(
        osexp,
        asset_path,
        u'jatos',
        subject=subject,
        fullscreen=fullscreen
    )
    info = {
    	'version': '3',
    	'data': {
    		'title': title,
    		'description': description,
    		'groupStudy': False,
    		'dirName': asset,
    		'comments': '',
    		'jsonData': None,
    		'componentList': [{
    			'title': 'Experiment',
    			'htmlFilePath': 'index.html',
    			'reloadable': False,
    			'active': True,
    			'jsonData': None
    		}],
    		'batchList': []
    	}
    }
    with open(jas_path, u'w') as fd:
        json.dump(info, fd)
    with zipfile.ZipFile(dst, 'w') as fd:
        fd.write(jas_path, u'info.jas')
        fd.write(asset_path, os.path.join(asset, u'index.html'))


# Private functions


def _html(osexp, dst, type_, subject=0, fullscreen=False):

    js = js_osweb + [os.path.join(js_folder, u'{}.js'.format(type_))]
    tmpl = os.path.join(tmpl_folder, u'{}.html'.format(type_))
    html = _read(tmpl).format(
        javascript=_format_js(js,
            subject=_subject_js(subject),
            fullscreen=u'true' if fullscreen else u'false'
        ),
        osexp_blob=_read_b64(osexp)
    )
    with open(dst, 'w') as fd:
        fd.write(html)


def _format_js(js, **kwargs):

    tmpl = '\n'.join([_read(path) for path in js])
    for name, val in kwargs.items():
        key = u'{{{{{}}}}}'.format(name)
        if key not in tmpl:
            warnings.warn(u'{} not in template'.format(name))
            continue
        tmpl = tmpl.replace(key, val)
    return tmpl


def _subject_js(subjects):

    if isinstance(subjects, int):
        return str(subjects)
    return u'{}[Math.floor(Math.random()*{})]'.format(
        subjects,
        len(subjects)
    )


def _read(path):

    with open(path) as fd:
        return fd.read()


def _read_b64(path):

    with open(path, 'rb') as fd:
        e = base64.b64encode(fd.read())
        return e.decode()


def _unique_hash():

    return hashlib.md5(str(time.time()).encode()).hexdigest()


js_folder = os.path.join(os.path.dirname(__file__), u'src', u'js')
tmpl_folder = os.path.join(os.path.dirname(__file__), u'src', u'html')
js_osweb = [
    os.path.join(js_folder, basename)
    for basename in os.listdir(js_folder)
    if basename.startswith(u'osweb') or basename.startswith(u'vendors~osweb.')
]
