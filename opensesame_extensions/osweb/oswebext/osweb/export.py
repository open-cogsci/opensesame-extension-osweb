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
import tarfile
import io
import sys
import uuid
from pathlib import Path
from bs4 import BeautifulSoup
import fileinspector
from libopensesame.experiment import Experiment
from libopensesame.oslogging import oslogger
from opensesame_extensions.osweb.oswebext.oswebwriter import OSWebWriter


# Paths towards assets that are bundled with the osweb extension code
src_folder = Path(os.path.dirname(__file__)) / 'src'
src_paths = {'js': src_folder / 'js',
             'css': src_folder / 'css',
             'html': src_folder / 'html',
             'img': src_folder / 'img'}


def standalone(osexp_path, index_path, subject='0', logfile='osweb-data.json',
               fullscreen=False, welcome_text='', external_js=[]):
    """Builds an index.html that embeds everything and can be run in a browser.

    Parameters
    ----------
    osexp_path : str or Path
        Path to the OpenSesame experiment (.osexp) file.
    index_path : str or Path
        Path to the to-be-generated index.html file.
    subject : str, optional
        Identifier of the JATOS subject, by default '0'.
    logfile : str, optional
        The name of the logfile that is downloaded when the experiment is 
        finished.
    fullscreen : bool, optional
        Whether to run the JATOS study in fullscreen mode, by default False.
    welcome_text : str, optional
        Text to display on the JATOS study welcome screen, by default ''.
    external_js : List[str], optional
        List of URLs to external JavaScript libraties to include in the JATOS
        study, by default [].
    """
    script, pool_paths = _extract_script_and_pool_paths(osexp_path)
    params = {'subject': subject, 'logfile': logfile, 'fullscreen': fullscreen,
              'welcomeText': _safe_welcome_text(welcome_text),
              'externalJS': external_js}
    _compose_html_and_get_assets(script, Path(index_path),
                                 'standalone', params=params,
                                 pool_paths=pool_paths)


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
    script, pool_paths = _extract_script_and_pool_paths(osexp_path)
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
            component_hash=component_hash, uuid=uuid,
            pool_paths=pool_paths)
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
        jas_path.write_text(json.dumps(info), 'utf-8')
        with zipfile.ZipFile(jzip_path, 'w') as fd:
            fd.write(jas_path, 'info.jas')
            fd.write(index_path, f'{uuid}/{component_hash}.html')
            fd.writestr(f'{uuid}/{component_hash}.osexp', script)
            for pool_path in pool_paths:
                fd.write(pool_path, f'{uuid}/pool/{pool_path.name}')
            for img in ['opensesame.png', 'warning.png']:
                fd.write(src_paths['img'] / img, f'{uuid}/img/{img}')
            for js in assets['js']:
                fd.write(js['src'], f'{uuid}/{js["dest"]}')
            for css in assets['css']:
                fd.write(css['src'], f'{uuid}/{css["dest"]}')
    return uuid


# Private functions

def _get_os_assets(sub_dir):
    return [{'src': path, 'dest': f'{sub_dir}/{path.name}'}
            for path in src_paths[sub_dir].glob('*osweb*')]


def _compose_html_and_get_assets(script, index_path, mode, params=None,
                                 component_hash=None, uuid=uuid,
                                 pool_paths=[]):
    """Generates an index.html and returns asset information.
    
    Parameters
    ----------
    script: str
        The osexp script
    index_path: Path
        A path where the resulting index.html should be created
    mode: str
        'standalone' or 'jatos'
    params: dict
        Experiment parameters, such as fullscreen
    component_hash: str, optional
    uuid: str, optional
    pool_paths: list, optional
        A list of paths that should be included in the file pool
        
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
    assets['js'].append({'src': src_paths['js'] / '_shared.js',
                         'dest': ('js/_shared.js')})
    env_css = f'{mode}.css'
    env_css_src = src_paths[u'css'] / env_css
    if env_css_src.exists():
        assets['css'].append({'src': env_css_src, 'dest': (f'css/{env_css}')})
    tmpl = src_paths['html'] / f'{mode}.html'
    # The HTML file parsed as a DOM Tree
    dom = BeautifulSoup(tmpl.read_text('utf-8'), 'html.parser')
    if mode == 'standalone':
        _compose_for_standalone(script, dom, assets, params)
    elif mode == 'jatos':
        _compose_for_jatos(component_hash, uuid, dom, assets, params)
    # Add the file pool. This is a hidden div tag that contains elements for
    # each of the files in the pool. These are dynamically loaded by OSWeb.
    pool = dom.new_tag('div', id='filePool', style='display:none;')
    for path in pool_paths:
        # File inspector doesn't accept Path objects
        mime = fileinspector.determine_type(str(path))
        if mime is None:
            oslogger.warning(f'unknown mimetype for {path}')
            continue
        if mode == 'standalone':
            src = f'data:{mime};base64,{_read_b64(path)}'
        else:
            src = Path('pool') / path.name
        id_ = path.name
        oslogger.debug(f'adding {path} to file pool')
        if mime.startswith('image/'):
            asset = dom.new_tag('img', src=src, id=id_)
        elif mime.startswith('text/'):
            asset = dom.new_tag('pre', id=id_)
            asset.string = path.read_text()
        elif mime.startswith('video/'):
            src = dom.new_tag('source', src=src)
            asset = dom.new_tag('video', id=id_)
            asset.append(src)
        elif mime.startswith('audio/'):
            src = dom.new_tag('source', src=src)
            asset = dom.new_tag('audio', id=id_)
            asset.append(src)
        else:
            oslogger.warning(f'unsupported {mime} mimetype for {path}')
        pool.append(asset)
    dom.body.append(pool)
    # Write HTML file
    html = dom.prettify()
    index_path.write_text(html, 'utf-8')
    return assets


def _compose_for_standalone(script, dom, assets, params=None):
    """Builds on top of the base HTML template to create a structure that is 
    appropriate for a standalone HTML file.
    
    Parameters
    ----------
    script: str
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
            script_tag.append(js_file['src'].read_text('utf-8') + '\n')
    dom.head.append(script_tag)
    css_tag = dom.new_tag(u'style')
    for css_file in assets['css']:
        if css_file['src'].suffix == '.css':
            css_tag.append(css_file['src'].read_text('utf-8') + '\n')
    dom.head.append(css_tag)
    # Add experiment as base64 encoded string
    exp_tag = dom.new_tag(
        'embed', id='osexp_src',
        src=f'data:text/plain;base64,{_to_b64(script)}',
        style='display:none')
    dom.body.append(exp_tag)


def _compose_for_jatos(component_hash, uuid, dom, assets, params):
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
    

def _to_b64(s):
    return base64.b64encode(s.encode('utf-8')).decode()


def unique_uuid():
    return str(uuid.UUID(hashlib.md5(str(time.time()).encode()).hexdigest()))


def _safe_welcome_text(s):
    return s.replace('\n', '<br />'). \
        replace('"', '&#34;').replace("'", '&#39;')


def _extract_script_and_pool_paths(osexp_path):
    with tempfile.NamedTemporaryFile(suffix='.osexp', delete=False) as fd:
        pass
    exp = Experiment(string=osexp_path)
    script = OSWebWriter(exp, fd.name).script
    pool_paths = [Path(exp.pool[path]) for path in exp.pool]
    try:
        os.remove(fd.name)
    except Exception as e:
        oslogger.warning(f'failed to remove temporary file: {fd.name}')
    return script, pool_paths
