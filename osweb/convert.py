"""This file is part of OpenSesame.

OpenSesame is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

OpenSesame is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public Lcense for more details.

You should have received a copy of the GNU General Public License
along with OpenSesame.  If not, see <http://www.gnu.org/licenses/>.
"""
from libopensesame.py3compat import *
from bs4 import BeautifulSoup
from libopensesame.experiment import Experiment
from libopensesame.oslogging import oslogger
from pathlib import Path
import base64
import fileinspector
import hashlib
import io
import json
import os
import shutil
import sys
import tarfile
import tempfile
import time
import uuid
import zipfile
from . import version_info, sync
from .oswebwriter import OSWebWriter
from .oswebexceptions import VersionConflict, UnsupportedJZIP


FORMAT_IDENTIFIER = 'OSWeb JZIP Format v1'

# Paths towards assets that are bundled with the osweb extension code
src_folder = Path(os.path.dirname(__file__)) / 'src'
src_paths = {'js': src_folder / 'js',
             'css': src_folder / 'css',
             'html': src_folder / 'html',
             'img': src_folder / 'img'}


def supported_jzip(info_jas):
    """Takes a JSON dict in the format of info.jas and checks whether the
    info indicates that the associated JZIP can be converted to an Experiment.
    
    Parameters
    ----------
    info_jas: dict
    
    Returns
    -------
    bool
    """
    try:
        data = info_jas.get('data', {})
        if not isinstance(data, dict):
            oslogger.warning(
                f"Expected 'data' to be a dictionary in info_jas, got {data}")
            return False
        comments = data.get('comments', None)
        return comments == FORMAT_IDENTIFIER
    except Exception as e:
        oslogger.warning(f"An error occurred while checking info_jas: {e}")
        return False


def as_jatos_exp(exp):
    """Takes an experiment object (or a Path or str in which case the 
    experiment is opened from file), adds a UUID variable if it doesn't already
    exist, and returns the Experiment object.
    
    Parameters
    ----------
    exp : Experiment or str or Path
        Experiment
        
    Returns
    -------
    Experiment
    """
    if isinstance(exp, (str, Path)):
        oslogger.debug(f'reading experiment from file: {exp}')
        exp = Experiment(experiment_path=exp, string=exp)
    if not exp.var.has('jatos_uuid'):
        exp.var.jatos_uuid = unique_uuid()
        oslogger.debug(f'generating JATOS UUID: {exp.var.jatos_uuid}')
    return exp


def jzip_to_exp(jzip_path, factory=Experiment):
    """Converts a JZIP archive to an Experiment
    
    Parameters
    ----------
    jzip_path : str or Path
    factory : callable, optional
        A callable that takes a definition string and returns an Experiment
        object.
    
    Returns
    -------
    Experiment
    
    Raises
    ------
    UnsupportedJZIP
    """
    with tempfile.TemporaryDirectory() as tmp_dir:
        tmp_dir_path = Path(tmp_dir)
        with zipfile.ZipFile(jzip_path, 'r') as zip_ref:
            zip_ref.extractall(tmp_dir)
        # Find the .jas file, which is the only file in the root with a .jas
        # extension
        info_jas_path = next(tmp_dir_path.glob('*.jas'))
        with info_jas_path.open('r') as f:
            info = json.load(f)
        if not supported_jzip(info):
            raise UnsupportedJZIP('Unsupported JZIP Study Archive')
        # Get the uuid and component_hash from info.jas
        uuid = info['data']['uuid']
        component_hash = info['data']['componentList'][0]['htmlFilePath'] \
            .replace('.html', '')
        # Build the paths to the necessary files
        osexp_path = tmp_dir_path / uuid / f'{component_hash}.orig.osexp'
        pool_path = tmp_dir_path / uuid / 'pool'
        version_info_path = tmp_dir_path / uuid / 'version_info.json'
        # Load the .orig.osexp file
        with osexp_path.open('r') as f:
            script = f.read()
        exp = factory(string=script)
        # Copy all files from the pool folder to the experiment's file pool.
        # If there are no files in the file pool, the pool path doesn't exist
        # in the jzip.
        dest_pool_path = Path(exp.pool.folder())
        if pool_path.exists():
            for filename in pool_path.iterdir():
                shutil.copy(filename, dest_pool_path)
        # Copy version_info.json to the experiment's file pool
        if version_info_path.exists():
            shutil.copy(version_info_path, dest_pool_path)
    return exp


def exp_to_jzip(exp, jzip_path=None, subject='0', fullscreen=False,
                welcome_text='', external_js=[], intro_click=True,
                jatos_info=None):
    """Builds a jzip archive that can be imported into JATOS.

    Parameters
    ----------
    exp : Experiment or str or Path
        Experiment
    jzip_path : str or Path
        Path and filename of the resulting jzip file.  If no path is provided,
        a temporary file is created. The temporary needs to be explicitly
        removed.
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
    intro_click: bool, optional
        Indicates whether the experiment should be preceded by a screen that
        the participant needs to click. This allows the experiment to be 
        executed in the context of a user action, which is necessary for
        certain actions.
    jatos_info: JatosInfo or None, optional
        If provided, remote version information is checked and only modified
        assets are included in the archive.

    Returns
    -------
    Path
        The path to the jzip file
        
    Raises
    ------
    VersionConflict
    """
    exp = as_jatos_exp(exp)
    if jzip_path is None:
        jzip_path = Path(tempfile.NamedTemporaryFile(suffix='.jzip').name)
    else:
        jzip_path = Path(jzip_path)
    version_info_path = Path(exp.pool.folder()) / 'version_info.json'
    component_hash = unique_uuid()
    orig_script, osweb_script, pool_paths = _extract_script_and_pool_paths(exp)
    # We create a temporary directory that will contain all the files that will
    # go into the jzip archive.
    #
    # The folder structure is as follows:
    #
    #     info.jas                        # JATOS metadata
    #     {uuid}/
    #        {component_hash}.html        # HTML entry point
    #        {component_hash}.osexp       # Rewritten OSWeb script
    #        {component_hash}.orig.osexp  # Original OpenSesame script
    #        orig.osexp                   # As above but with constant name for
    #                                     # conflict detection
    #        version_info.json
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
        assets_dir = tmp_dir / exp.var.jatos_uuid
        assets_dir.mkdir()
        index_path = assets_dir / f'{component_hash}.html'
        jas_path = tmp_dir / 'info.jas'
        params = {'subject': subject,
                  'fullscreen': fullscreen,
                  'welcomeText': _safe_welcome_text(welcome_text),
                  'externalJS': external_js,
                  'introClick': intro_click}
        assets = _compose_html_and_get_assets(
            exp, index_path, 'jatos', params=params,
            component_hash=component_hash, pool_paths=pool_paths)
        info = {
            'version': '3',  # This refers to the JATOS version
            'data': {
                'title': exp.var.title,
                'description': exp.var.description,
                'groupStudy': False,
                'dirName': exp.var.jatos_uuid,
                'uuid': exp.var.jatos_uuid,
                'comments': FORMAT_IDENTIFIER,
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
        # Create a list of (src, jzip paths) where src can be a Path object
        # or a str that should be written to a file
        asset_list = [(index_path, f'{component_hash}.html'),
                      (osweb_script, f'{component_hash}.osexp'),
                      (orig_script, f'{component_hash}.orig.osexp'),
                      (orig_script, 'orig.osexp')]
        for pool_path in pool_paths:
            asset_list.append((pool_path, f'pool/{pool_path.name}'))
        for img in assets['img']:
            asset_list.append((img['src'], f'{img["dest"]}'))
        for js in assets['js']:
            asset_list.append((js['src'], f'{js["dest"]}'))
        for css in assets['css']:
            asset_list.append((css['src'], f'{css["dest"]}'))
        # Now that we have a complete list of files we can remove files that
        # don't need to be updated. To do so, we first update the current
        # version info. Then we try to download the previous version. If this
        # is not available, we upload everything. If it is available and there
        # is a conflict, then we raise an Exception. If it is available and
        # there is no conflict, then we remove all unmodified files
        if jatos_info is not None:
            asset_list.append((version_info_path, 'version_info.json'))
            current_info = version_info.update_version_info(exp, asset_list,
                                                            jatos_info)
            older_info = version_info.download_version_info(exp, jatos_info)
            if older_info is not None:
                vc = version_info.compare_version_info(jatos_info, older_info,
                                                       current_info)
                oslogger.debug(f'unmodified: {vc.unmodified}')
                oslogger.debug(f'modified: {vc.modified}')
                oslogger.debug(f'conflicting: {vc.conflicting}')
                oslogger.debug(f'added: {vc.added}')
                oslogger.debug(f'deleted: {vc.deleted}')
                if vc.conflicting:
                    file_list = '- ' + '\n- '.join(vc.conflicting)
                    raise VersionConflict(
                        f'The current version of the experiment contains '
                        f'changes that conflict with the (remote) version of '
                        f'the experiment on JATOS.\n\nThis conflict results '
                        f'from the following files:\n\n{file_list}')
            else:
                oslogger.debug(f'no older version info found')
                # TODO For now we don't strip the unmodified assets because
                # it's unclear how to do incremental uploads to JATOS
                # asset_list = [(src, tgt) for src, tgt in asset_list
                #               if tgt not in vc.unmodified]
        with zipfile.ZipFile(jzip_path, 'w') as fd:
            # info.jas is the only non-asset file
            fd.write(jas_path, 'info.jas')
            # Write all assets to jzip
            for src, tgt in asset_list:
                oslogger.debug(f'adding {tgt}')
                tgt = f'{exp.var.jatos_uuid}/{tgt}'
                if isinstance(src, Path):
                    fd.write(src, tgt)
                else:
                    fd.writestr(tgt, src)
    return jzip_path


def exp_to_html(exp, index_path=None, subject='0', logfile='osweb-data.json',
                fullscreen=False, welcome_text='', external_js=[],
                intro_click=True):
    """Builds an index.html that embeds everything and can be run in a browser.

    Parameters
    ----------
    exp : Experiment or str or Path
        Experiment
    index_path : str or Path or None, optional
        Path to the to-be-generated index.html file. If no path is provided,
        a temporary file is created. The temporary needs to be explicitly
        removed.
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
    intro_click: bool, optional
        Indicates whether the experiment should be preceded by a screen that
        the participant needs to click. This allows the experiment to be 
        executed in the context of a user action, which is necessary for
        certain actions.
        
    Returns
    -------
    Path
        The path to the html file
    """
    exp = as_jatos_exp(exp)
    _, script, pool_paths = _extract_script_and_pool_paths(exp)
    # We replace backslashes with slash forwards to avoid escaping issues with
    # first needing to escape the JSON and then needing to escape JavaScript
    # code
    params = {'subject': subject, 'logfile': logfile.replace('\\', '/'),
              'fullscreen': fullscreen,
              'welcomeText': _safe_welcome_text(welcome_text),
              'externalJS': external_js, 'introClick': intro_click}
    if index_path is None:
        with tempfile.NamedTemporaryFile(suffix='.html', delete=False) as fd:
            index_path = fd.name
    index_path = Path(index_path)
    _compose_html_and_get_assets(exp, index_path, 'standalone', script=script,
                                 params=params, pool_paths=pool_paths)
    return index_path


# Private functions

def _get_os_assets(sub_dir):
    return [{'src': path, 'dest': f'{sub_dir}/{path.name}'}
            for path in src_paths[sub_dir].glob('*osweb*')]


def _compose_html_and_get_assets(exp, index_path, mode, script=None,
                                 params=None, component_hash=None,
                                 pool_paths=[]):
    """Generates an index.html and returns asset information.
    
    Parameters
    ----------
    exp: Experiment
    index_path: Path
        A path where the resulting index.html should be created
    mode: str
        'standalone' or 'jatos'
    script: str, optional
        The experiment script
    params: dict
        Experiment parameters, such as fullscreen
    component_hash: str, optional
    pool_paths: list, optional
        A list of paths that should be included in the file pool
        
    Returns
    -------
    dict
        A dict where keys are asset subdirectories ('js', 'css') and values are
        lists of files in the asset subdirectories.
    """
    assets = {'js': _get_os_assets('js'), 'css': _get_os_assets('css')}
    assets['img'] = [{'src': src_paths['img'] / 'opensesame.png',
                      'dest': 'img/opensesame.png'},
                     {'src': src_paths['img'] / 'osdoc.png',
                      'dest': 'img/osdoc.png'},
                     {'src': src_paths['img'] / 'warning.png',
                      'dest': 'img/warning.png'}]
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
        _compose_for_jatos(component_hash, exp.var.jatos_uuid, dom, assets,
                           params)
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
            continue
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


def _extract_script_and_pool_paths(exp):
    """Extracts the scripts and pool paths from the experiment. There are
    two scripts. The first is the original script. The second is the script as
    it will be used by OSWeb, which is partly rewritten. If the experiment is
    not configured to use OSWeb, the second script is a placeholder that 
    informs the user that the experiment does not run in a browser.
    """
    if exp.var.canvas_backend != 'osweb':
        oslogger.debug('using placeholder experiment')
        osweb_exp = as_jatos_exp(src_folder / 'osexp/placeholder.osexp')
    else:
        osweb_exp = exp
    with tempfile.NamedTemporaryFile(suffix='.osexp', delete=False) as fd:
        pass
    script = OSWebWriter(osweb_exp, fd.name).script
    try:
        os.remove(fd.name)
    except Exception as e:
        oslogger.warning(f'failed to remove temporary file: {fd.name}')
    pool_paths = [Path(exp.pool[path]) for path in exp.pool]
    return exp.to_string(), script, pool_paths
