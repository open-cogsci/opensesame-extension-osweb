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
import uuid
from pathlib import Path
from bs4 import BeautifulSoup
from libopensesame.experiment import Experiment

# Paths towards assets that are bundled with the osweb extension code
src_folder = Path(os.path.dirname(__file__)) / 'src'
src_paths = {'js': src_folder / 'js',
             'css': src_folder / 'css',
             'html': src_folder / 'html',
             'img': src_folder / 'img'}


def standalone(osexp_path, index_path, subject='0', fullscreen=False,
               welcome_text='', external_js=[]):
    """Builds an index.html that embeds everything and can be run in a browser.

    Parameters
    ----------
    osexp_path : str or Path
        Path to the OpenSesame experiment (.osexp) file.
    index_path : str or Path
        Path to the to-be-generated index.html file.
    subject : str, optional
        Identifier of the JATOS subject, by default '0'.
    fullscreen : bool, optional
        Whether to run the JATOS study in fullscreen mode, by default False.
    welcome_text : str, optional
        Text to display on the JATOS study welcome screen, by default ''.
    external_js : List[str], optional
        List of URLs to external JavaScript libraties to include in the JATOS 
        study, by default [].
    """
    params = {'subject': subject, 'fullscreen': fullscreen,
              'welcomeText': _safe_welcome_text(welcome_text),
              'externalJS': external_js}
    _compose_html_and_get_assets(Path(osexp_path), Path(index_path),
                                 'standalone', params=params)


def jatos(osexp_path, jzip_path, title='My OpenSesame experiment',
          description='No description', subject='0', fullscreen=False,
          welcome_text='', external_js=[], uuid=None):
    """Builds a jzip archive that can be imported into JATOS.

    Parameters
    ----------
    osexp_path : str or Path
        Path to the OpenSesame experiment (.osexp) file.
    jzip_path : str or Path
        Path and filename of the resulting jzip file.
    title : str, optional
        Title of the JATOS study, by default 'My OpenSesame experiment'.
    description : str, optional
        Description of the JATOS study, by default 'No description'.
    subject : str, optional
        Identifier of the JATOS subject, by default '0'.
    fullscreen : bool, optional
        Whether to run the JATOS study in fullscreen mode, by default False.
    welcome_text : str, optional
        Text to display on the JATOS study welcome screen, by default ''.
    external_js : List[str], optional
        List of URLs to external JavaScript libraties to include in the JATOS 
        study, by default [].
    uuid : str, optional
        Unique identifier of the JATOS study, by default None, in which case a
        random uuid is generated.

    Returns
    -------
    str
        The uuid of the JATOS study.
    """
    if uuid is None:
        uuid = unique_uuid()
    osexp_path = Path(osexp_path)
    component_hash = hashlib.md5(osexp_path.read_bytes()).hexdigest()
    jzip_path = Path(jzip_path)
    # We create a temporary directory that will contain all the files that will
    # go into the jzip archive.
    #
    # The folder structure is as follows:
    #
    #     info.jas
    #     {uuid}/
    #        {component_hash}.html
    #        {component_hash}.osexp
    #        pool/
    #            {files from file pool}
    #        css/
    #            vendors-osweb*.css.map
    #            vendors-osweb*.css
    #            osweb*.css.map
    #            osweb*.css
    #            jatos.css
    #        js/
    #            vendors-osweb*.js.map
    #            vendors-osweb*.js
    #            osweb*.js.map
    #            osweb*.js
    #            jatos.js
    #        img/
    #            warning.png
    #            opensesame.png
    with tempfile.TemporaryDirectory(suffix='.jatos') as tmp_dir:
        tmp_dir = Path(tmp_dir)
        assets_dir = tmp_dir / uuid
        assets_dir.mkdir()
        index_path = assets_dir / f'{component_hash}.html'
        jas_path = tmp_dir / 'info.jas'
        params = {'subject': subject,
                  'fullscreen': fullscreen,
                  'welcomeText': _safe_welcome_text(welcome_text),
                  'externalJS': external_js}
        assets = _compose_html_and_get_assets(
            osexp_path, index_path, 'jatos', params=params,
            component_hash=component_hash, uuid=uuid)
        info = {
            'version': '3',  # This refers to the JATOS version
            'data': {
                'title': title,
                'description': description,
                'groupStudy': False,
                'dirName': uuid,
                'uuid': uuid,
                'comments': 'Experiment exported by OpenSesame',
                'jsonData': None,
                'componentList': [{
                    'title': 'OSWeb experiment',
                    'htmlFilePath': f'{component_hash}.html',
                    'reloadable': False,
                    'active': True,
                    'jsonData': json.dumps(params),
                }],
                'batchList': []
            }
        }
        jas_path.write_text(json.dumps(info))
        with zipfile.ZipFile(jzip_path, 'w') as fd:
            fd.write(jas_path, 'info.jas')
            fd.write(index_path, f'{uuid}/{component_hash}.html')
            for img in ['opensesame.png', 'warning.png']:
                fd.write(src_paths['img'] / img, f'{uuid}/img/{img}')
            for js in assets['js']:
                fd.write(js['src'], f'{uuid}/{js["dest"]}')
            for css in assets['css']:
                fd.write(css['src'], f'{uuid}/{css["dest"]}')
            fd.write(osexp_path, f'{uuid}/{component_hash}.osexp')
            # exp = Experiment(osexp_path)
            # fd.writestr(exp.to_string(), f'{uuid}/{component_hash}.osexp')
            # for poolfile_path in exp.pool:
            #     fd.writestr(exp.pool[pool_path], f'pool/{poolfile_path}')
    return uuid


# Private functions

def _get_os_assets(sub_dir):
    return [{'src': path, 'dest': f'{sub_dir}/{path.name}'}
            for path in src_paths[sub_dir].glob('*osweb*')]


def _compose_html_and_get_assets(osexp_path, index_path, mode, params=None,
                                 component_hash=None, uuid=uuid):
    """Generates an index.html and returns asset information.
    
    Parameters
    ----------
    osexp_path: Path
        A path to the experiment file
    index_path: Path
        A path where the resulting index.html should be created
    mode: str
        'standalone' or 'jatos'
    params: dict
        Experiment parameters, such as fullscreen
    component_hash: str, optional
    uuid: str, optional
        
    Returns
    -------
    dict
        A dict where keys are asset subdirectories ('js', 'css') and values are
        lists of files in the asset subdirectories.
    """
    assets = {'js': _get_os_assets('js'), 'css': _get_os_assets('css')}
    # Add potentially present platform js and css files.
    env_js = f'{mode}.js'
    env_js_src = src_paths['js'] / env_js
    if env_js_src.exists():
        assets['js'].append({'src': env_js_src, 'dest': (f'js/{env_js}')})
    env_css = f'{mode}.css'
    env_css_src = src_paths[u'css'] / env_css
    if env_css_src.exists():
        assets['css'].append({'src': env_css_src, 'dest': (f'css/{env_css}')})
    tmpl = src_paths['html'] / f'{mode}.html'
    # The HTML file parsed as a DOM Tree
    with tmpl.open() as t_fp:
        dom = BeautifulSoup(t_fp, 'html.parser')
    if mode == 'standalone':
        _compose_for_standalone(osexp_path, dom, assets, params)
    elif mode == 'jatos':
        _compose_for_jatos(component_hash, uuid, dom, assets, params)
    html = dom.prettify()
    index_path.write_text(html)
    return assets


def _compose_for_standalone(osexp_path, dom, assets, params=None):
    """Builds on top of the base HTML template to create a structure that is 
    appropriate for a standalone HTML file.
    
    Parameters
    ----------
    osexp_path: Path
        Path to the experiment file
    dom: Tag
        A BeautifulSoup Tag corresponding to the full HTML file
    assets: dict
    params: dict
        Experiment parameters, such as fullscreen
    """
    logo_tag = dom.new_tag(u'script', type=u'text/javascript')
    logo_path = src_paths['img'] / 'opensesame.png'
    logo_tag.append(
        f'const logoSrc = "data:image/png;base64,{_read_b64(logo_path)}"')
    dom.head.append(logo_tag)
    if params:
        # Embed links to external JavaScript pacakages
        for url in params['externalJS']:
            params_tag = dom.new_tag(u'script', type=u"text/javascript",
                                     src=url.strip())
            dom.head.append(params_tag)
        params_tag = dom.new_tag(u'script', type=u"text/javascript")
        params_tag.append(
            f'const params = JSON.parse(\'{json.dumps(params)}\')\n')
        dom.head.append(params_tag)
    script_tag = dom.new_tag('script', type='text/javascript')
    for js_file in assets['js']:
        if js_file['src'].suffix == '.js':
            script_tag.append(js_file['src'].read_text() + '\n')
    dom.head.append(script_tag)
    css_tag = dom.new_tag(u'style')
    for css_file in assets['css']:
        if css_file['src'].suffix == '.css':
            css_tag.append(css_file['src'].read_text() + '\n')
    dom.head.append(css_tag)
    # Add experiment as base64 encoded string
    exp_tag = dom.new_tag(
        'embed', id='osexp_src',
        src=f'data:application/gzip;base64,{_read_b64(osexp_path)}',
        style='display:none')
    dom.body.append(exp_tag)


def _compose_for_jatos(component_hash, uuid, dom, assets, params=None):
    """Builds on top of the base HTML template to create a structure that is 
    appropriate for integration in JATOS.
    
    Parameters
    ----------
    component_hash: str
    uuid: str
    dom: Tag
        A BeautifulSoup Tag corresponding to the full HTML file
    assets: dict
    params: dict
        Experiment parameters, such as fullscreen
    """
    script_tag = dom.new_tag('script', id="parameters", type="text/javascript")
    if params:
        # Embed links to external JavaScript pacakages
        for url in params['externalJS']:
            params_tag = dom.new_tag(u'script', type=u"text/javascript",
                                     src=url)
            dom.head.append(params_tag)        
        # Create a script node that exposes the experiment's parameters
        script_tag.append(
            f'const params = JSON.parse(\'{json.dumps(params)}\')')
    # Get the OpenSesame experiment file name, and add a JS variable to its
    # location
    script_tag.append(f'const osexpFile = "{component_hash}.osexp"')
    script_tag.append(f'const jatosAssetsFolder = "{uuid}"')
    script_tag.append(f'const jatosComponentHash = "{component_hash}"')
    dom.head.append(script_tag)
    # Add script nodes referencing the sources of all other required javascript
    # files.
    for js_file in assets['js']:
        if js_file['src'].suffix == '.js':
            script_tag = dom.new_tag('script', src=js_file['dest'],
                                     type="text/javascript")
            dom.head.append(script_tag)
    for css_file in assets['css']:
        if css_file['src'].suffix == '.css':
            styleTag = dom.new_tag('link', href=css_file['dest'],
                                   type="text/css", rel="stylesheet",
                                   media="all")
            dom.head.append(styleTag)


def _read_b64(path):
    return base64.b64encode(path.read_bytes()).decode()


def unique_uuid():
    return str(uuid.UUID(hashlib.md5(str(time.time()).encode()).hexdigest()))


def _safe_welcome_text(s):
    return s.replace('\n', '<br />'). \
        replace('"', '&#34;').replace("'", '&#39;')
