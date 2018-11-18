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
js_folder = os.path.join(src_folder, u'js')
# Folder containing HTML templates
tmpl_folder = os.path.join(src_folder, u'html')
# Folder containing image assets
img_folder = os.path.join(src_folder, u'img')
py3 = sys.version_info[0] >= 3


def safe_decode(s):

	if (py3 and isinstance(s, bytes)) or (not py3 and isinstance(s, str)):
		return s.decode('utf-8')
	return s


def standalone(osexp, dst, subject=0, fullscreen=False):

	params = {'subject': subject, 'fullscreen': fullscreen}
	mode = u'standalone'
	_html(osexp, dst, mode, _js_files(mode), params, bundled=True)


def jatos(
	osexp,
	dst,
	title='My OpenSesame experiment',
	description='No description',
	subject=0,
	fullscreen=False
):

	mode = u'jatos'
	asset = _unique_hash()
	dirname = tempfile.mkdtemp(suffix=u'.jatos')
	os.mkdir(os.path.join(dirname, asset))
	index_path = os.path.join(dirname, asset, u'index.html')
	logo_path = os.path.join(img_folder, u'opensesame.png')
	jas_path = os.path.join(dirname, u'info.jas')

	js_sources = _js_files(mode)

	params = {'subject': subject, 'fullscreen': fullscreen}

	_html(
		osexp,
		index_path,
		mode,
		js_sources
	)

	info = {
		'version': '3',
		'data': {
			'title': title,
			'description': description,
			'groupStudy': False,
			'dirName': asset,
			'comments': 'Experiment exported by OpenSesame',
			'jsonData': None,
			'componentList': [{
				'title': 'OSWeb experiment',
				'htmlFilePath': 'index.html',
				'reloadable': False,
				'active': True,
				'comments': """The following variables can be passed to the OSWeb runner with the JSON Input field:
- subject (int): the subject number. If ommited, the current jatos component result id will be used.
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
		fd.write(index_path, os.path.join(asset, u'index.html'))
		fd.write(logo_path, os.path.join(asset, u'img', u'opensesame.png'))
		fd.write(osexp, os.path.join(asset, os.path.basename(osexp)))
		for js in js_sources:
			fd.write(js['src'], os.path.join(asset, js['dest']))


# Private functions

def _js_files(mode):

	# The osweb source and vendor js bundles.
	jsFiles = [
		{
			'src': os.path.join(js_folder, basename),
			'dest': os.path.join(u'js', basename)
		}
		for basename in os.listdir(js_folder)
		if basename.startswith(u'osweb') or basename.startswith(u'vendors~osweb.')
	]

	#  The current environment js (Jatos or otherwise)
	envJs = u'{}.js'.format(mode)
	jsFiles.append({
		'src': os.path.join(js_folder, envJs),
		'dest': os.path.join(u'js', envJs)
	})
	return jsFiles


def _html(osexp, dst, type_, js=None, params=None, bundled=False):

	js = js or []
	tmpl = os.path.join(tmpl_folder, u'{}.html'.format(type_))

	# The HTML file parsed as a DOM Tree
	with open(tmpl, 'r') as t_fp:
		dom = BeautifulSoup(t_fp, u'html.parser')

	if bundled:
		_compose_for_standalone(osexp, dom, js, params)
	else:
		_compose_for_jatos(osexp, dom, js, params)

	html = dom.prettify()
	with io.open(dst, 'w', encoding=u'utf-8') as fd:
		fd.write(safe_decode(html))


def _compose_for_standalone(osexp, dom, js, params=None):
	""" Builds on top of the base HTML template to create a structure that is appropriate
	for a standalone HTML file """

	logo_tag = dom.new_tag(u'script', type=u'text/javascript')
	logo_path = os.path.join(img_folder, u'opensesame.png')
	logo_tag.append(u'const logoSrc = "data:image/png;base64,{}"'.format(_read_b64(logo_path)))
	dom.head.append(logo_tag)

	if params:
		params_tag = dom.new_tag(u'script', type=u"text/javascript")
		params_tag.append(u'const params = JSON.parse(\'{}\')\n'.format(json.dumps(params)))
		dom.head.append(params_tag)
	script_tag = dom.new_tag(u'script', type=u"text/javascript")
	for js_file in js:
		script_tag.append(_read(js_file['src']) + '\n')

	dom.head.append(script_tag)

	# Add experiment as base64 encoded string
	exp_tag = dom.new_tag(
		u'embed',
		id=u'osexp_src',
		src=u'data:application/gzip;base64,' + _read_b64(osexp),
		style=u'display:none'
	)
	dom.body.append(exp_tag)


def _compose_for_jatos(osexp, dom, js, params=None):
	""" Builds on top of the base HTML template to create a structure that is appropriate
	for integration in JATOS """

	scriptTag = dom.new_tag('script', id="parameters", type="text/javascript")
	if params:
		# Create a script node that exposes the experiment's parameters
		scriptTag.append(u'const params = JSON.parse(\'{}\')'.format(json.dumps(params)))

	# Get the OpenSesame experiment file name, and add a JS variable to its location
	scriptTag.append(u'const osexpFile = "{}"'.format(os.path.basename(osexp)))
	dom.head.append(scriptTag)

	# Add script nodes referencing the sources of all other required javascript files.
	for js_file in js:
		scriptTag = dom.new_tag('script', src=js_file['dest'], type="text/javascript")
		dom.head.append(scriptTag)


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
	standalone('','output.html')
