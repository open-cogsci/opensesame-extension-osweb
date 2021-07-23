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
import tempfile
import zipfile
import io
import sys
from bs4 import BeautifulSoup

src_folder = os.path.join(os.path.dirname(__file__), u'src')
# Folder containing osweb javascript
srcPaths = {
    'js': os.path.join(src_folder, u'js'),
    'css': os.path.join(src_folder, u'css'),
    'html': os.path.join(src_folder, u'html'),
    'img': os.path.join(src_folder, u'img')
}
py3 = sys.version_info[0] >= 3


def safe_decode(s):

    if (py3 and isinstance(s, bytes)) or (not py3 and isinstance(s, str)):
        return s.decode('utf-8')
    return s


def standalone(osexp, dst, subject='0', fullscreen=False, welcome_text=''):

    params = {
        'subject': subject,
        'fullscreen': fullscreen,
        'welcomeText': welcome_text.replace('\n', '\\n')
    }
    _html(osexp, dst, u'standalone', params)


def jatos(
        osexp,
        dst,
        title='My OpenSesame experiment',
        description='No description',
        subject='0',
        fullscreen=False,
        welcome_text=''
):

    uuid = _unique_hash()
    dirname = tempfile.mkdtemp(suffix=u'.jatos')
    os.mkdir(os.path.join(dirname, uuid))
    index_path = os.path.join(dirname, uuid, u'index.html')
    jas_path = os.path.join(dirname, u'info.jas')

    params = {
        'subject': subject,
        'fullscreen': fullscreen,
        'welcomeText': welcome_text
    }

    assets = _html(
        osexp,
        index_path,
        u'jatos',
        params
    )

    info = {
        'version': '3',
        'data': {
            'title': title,
            'description': description,
            'groupStudy': False,
            'dirName': uuid,
            'comments': 'Experiment exported by OpenSesame',
            'jsonData': None,
            'componentList': [{
                'title': 'OSWeb experiment',
                'htmlFilePath': 'index.html',
                'reloadable': False,
                'active': True,
                'comments': """The following variables can be passed to the OSWeb runner with the JSON Input field:
- subject (string): the allowed range of subject numbers. If empty or ommitted, the current jatos component result id will be used for the subject number.
The value can be a range ('1-10'), a comma-separated list of numbers ('1,2,3,6,7,8') or a combination of the two ('1,2,3,5-10,25')
- fullscreen (bool): indicates whether the experiment should be run fullscreen
- omitJatosIds (bool): If set to true, Jatos specific data will not be appended to the results
				""",
                'jsonData': json.dumps(params),
            }],
            'batchList': []
        }
    }

    with io.open(jas_path, u'w', encoding=u'utf-8') as fd:
        fd.write(safe_decode(json.dumps(info)))

    with zipfile.ZipFile(dst, 'w') as fd:
        fd.write(jas_path, u'info.jas')
        fd.write(index_path, os.path.join(uuid, u'index.html'))
        for img in [u'opensesame.png', u'warning.png']:
            fd.write(os.path.join(srcPaths['img'], img),
                     os.path.join(uuid, u'img', img))
        fd.write(osexp, os.path.join(uuid, os.path.basename(osexp)))
        for js in assets['js']:
            fd.write(js['src'], os.path.join(uuid, js['dest']))
        for css in assets['css']:
            fd.write(css['src'], os.path.join(uuid, css['dest']))


# Private functions

def _get_os_assets(type):

    return [{
            'src': os.path.join(srcPaths[type], basename),
            'dest': type + '/' + basename
            } for basename in os.listdir(srcPaths[type])
            if basename.startswith((u'osweb', u'vendors~osweb'))
            ]


def _html(osexp, dst, mode, params=None):

    assets = {
        'js': _get_os_assets(u'js'),
        'css': _get_os_assets(u'css')
    }

    # Add potentially present platform js file.
    env_js = u'{}.js'.format(mode)
    env_js_src = os.path.join(srcPaths[u'js'], env_js)
    if os.path.exists(env_js_src):
        assets['js'].append({
            'src': env_js_src,
            'dest': (u'js/' + env_js)
        })

    # Add potentially present platform css file.
    # Not very DRY code....
    env_css = u'{}.css'.format(mode)
    env_css_src = os.path.join(srcPaths[u'css'], env_css)
    if os.path.exists(env_css_src):
        assets['css'].append({
            'src': env_css_src,
            'dest': (u'css/' + env_css)
        })

    tmpl = os.path.join(srcPaths['html'], u'{}.html'.format(mode))

    # The HTML file parsed as a DOM Tree
    with open(tmpl, 'r') as t_fp:
        dom = BeautifulSoup(t_fp, u'html.parser')

    if mode == u'standalone':
        _compose_for_standalone(osexp, dom, assets, params)
    elif mode == u'jatos':
        _compose_for_jatos(osexp, dom, assets, params)

    html = dom.prettify()
    with io.open(dst, 'w', encoding=u'utf-8') as fd:
        fd.write(safe_decode(html))

    return assets


def _compose_for_standalone(osexp, dom, assets, params=None):
    """ Builds on top of the base HTML template to create a structure that is appropriate
    for a standalone HTML file """

    logo_tag = dom.new_tag(u'script', type=u'text/javascript')
    logo_path = os.path.join(srcPaths['img'], u'opensesame.png')
    logo_tag.append(
        u'const logoSrc = "data:image/png;base64,{}"'.format(_read_b64(logo_path)))
    dom.head.append(logo_tag)

    if params:
        params_tag = dom.new_tag(u'script', type=u"text/javascript")
        params_tag.append(
            u'const params = JSON.parse(\'{}\')\n'.format(json.dumps(params)))
        dom.head.append(params_tag)
    script_tag = dom.new_tag(u'script', type=u"text/javascript")
    for js_file in assets['js']:
        if os.path.splitext(js_file['src'])[1] == '.js':
            script_tag.append(_read(js_file['src']) + '\n')
    dom.head.append(script_tag)

    css_tag = dom.new_tag(u'style')
    for css_file in assets['css']:
        if os.path.splitext(css_file['src'])[1] == '.css':
            css_tag.append(_read(css_file['src']) + '\n')
    dom.head.append(css_tag)

    # Add experiment as base64 encoded string
    exp_tag = dom.new_tag(
        u'embed',
        id=u'osexp_src',
        src=u'data:application/gzip;base64,' + _read_b64(osexp),
        style=u'display:none'
    )
    dom.body.append(exp_tag)


def _compose_for_jatos(osexp, dom, assets, params=None):
    """ Builds on top of the base HTML template to create a structure that is appropriate
    for integration in JATOS """

    scriptTag = dom.new_tag('script', id="parameters", type="text/javascript")
    if params:
        # Create a script node that exposes the experiment's parameters
        scriptTag.append(
            u'const params = JSON.parse(\'{}\')'.format(json.dumps(params)))

    # Get the OpenSesame experiment file name, and add a JS variable to its location
    scriptTag.append(u'const osexpFile = "{}"'.format(os.path.basename(osexp)))
    dom.head.append(scriptTag)

    # Add script nodes referencing the sources of all other required javascript files.
    for js_file in assets['js']:
        if os.path.splitext(js_file['src'])[1] == '.js':
            scriptTag = dom.new_tag('script', src=js_file['dest'], type="text/javascript")
            dom.head.append(scriptTag)

    for css_file in assets['css']:
        if os.path.splitext(css_file['src'])[1] == '.css':
            styleTag = dom.new_tag('link', href=css_file['dest'], type="text/css", rel="stylesheet", media="all")
            dom.head.append(styleTag)


def _read(path):

    with io.open(path, encoding='utf-8') as fd:
        return fd.read()


def _read_b64(path):

    with open(path, 'rb') as fd:
        e = base64.b64encode(fd.read())
        return e.decode()


def _unique_hash():

    return hashlib.md5(str(time.time()).encode()).hexdigest()


if __name__ == "__main__":
    standalone('', 'output.html')
