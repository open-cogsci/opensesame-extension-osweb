#!/usr/bin/env python3
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
from setuptools import setup
from osweb import __version__


def readme():
    if os.path.exists('readme.md'):
        with open('readme.md') as fd:
            return fd.read()
    return ''


setup(
    # Some general metadata. By convention, a extension is named:
    # opensesame-extension-[extension name]
    name='opensesame-extension-osweb',
    version=__version__,
    description='OSWeb extension for OpenSesame',
    long_description=readme(),
    long_description_content_type='text/markdown',
    author='Sebastiaan Mathot',
    author_email='s.mathot@cogsci.nl',
    url='https://github.com/smathot/opensesame-extension-osweb',
    classifiers=[
        'Intended Audience :: Science/Research',
        'Topic :: Scientific/Engineering',
        'Environment :: MacOS X',
        'Environment :: Win32 (MS Windows)',
        'Environment :: X11 Applications',
        'License :: OSI Approved :: Apache Software License',
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 3',
    ],
    packages=[
        'osweb'
    ],
    install_requires=[
        'beautifulsoup4', 'js2py'
    ],
    package_data={
        'osweb': [
            'src/html/*.html',
            'src/js/*.js',
            'src/img/*.png',
            'src/css/*.css'
        ]
    },
    data_files=[
        (
            'share/opensesame_extensions/oswebext',
            [
                'opensesame_extensions/oswebext/oswebext.py',
                'opensesame_extensions/oswebext/oswebext.ui',
                'opensesame_extensions/oswebext/oswebext_widget.py',
                'opensesame_extensions/oswebext/info.json',
            ]
        ),
        (
            'share/opensesame_plugins/inline_javascript',
            [
                'opensesame_plugins/inline_javascript/info.yaml',
                'opensesame_plugins/inline_javascript/inline_javascript.py',
                'opensesame_plugins/inline_javascript/javascript_code_edit.py',
                'opensesame_plugins/inline_javascript/javascript_workspace_api.py',
                'opensesame_plugins/inline_javascript/inline_javascript.png',
                'opensesame_plugins/inline_javascript/inline_javascript_large.png',
            ]
        ),
        (
            'share/opensesame_plugins/inline_html',
            [
                'opensesame_plugins/inline_html/info.yaml',
                'opensesame_plugins/inline_html/inline_html.py',
                'opensesame_plugins/inline_html/inline_html.png',
                'opensesame_plugins/inline_html/inline_html_large.png',
            ]
        )
    ]
)
