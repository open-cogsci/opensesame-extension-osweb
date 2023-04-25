#-*- coding:utf-8 -*-

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
from libopensesame.py3compat import *
from libopensesame.osexpfile import OSExpWriter
from libopensesame.oslogging import oslogger
from metapensiero.pj.__main__ import transform_string as py2js
import re

RE_VAR = re.compile('(?<!\w)var\.', re.MULTILINE)
RE_RUN_IF = re.compile(r'^\t(?P<cmd>run \w+ .*)$', re.MULTILINE)
RE_SET_COND = re.compile(r'^\t(?P<cmd>set (break_if|condition) .*)$',
                         re.MULTILINE)
RE_DRAW = re.compile(r'^\t(?P<cmd>draw .*)$', re.MULTILINE)
RE_FSTRING = re.compile(r'(?<!{){(?!{)(?P<expr>.*?)}')
RE_IGNORE_RUN = re.compile('___run__.*?__end__\n', re.MULTILINE | re.DOTALL)
RE_IGNORE_PREPARE = re.compile('___prepare__.*?__end__\n', re.MULTILINE | re.DOTALL)
RE_IGNORE_SCRIPT = re.compile('<script>.*?</script>', re.MULTILINE | re.DOTALL)


class OSWebWriter(OSExpWriter):
    """Translates Python-style conditional expressions and f-string to
    JavaScript before writing the experiment to disk. This means that OSWeb
    doesn't have to do any translating itself.
    """
    
    def transform(self, cond, escape=False):
        py_cond = self._exp.syntax.compile_cond(cond, bytecode=False)
        # JavaScript uses vars as opposed to var for the var_store object
        py_cond = RE_VAR.sub('vars.', py_cond)
        # The last two characters are ;\n, which are not valid in some
        # contexts and we therefore strip them off
        js_cond = py2js(py_cond)[:-2]
        if escape:
            js_cond = js_cond.replace('"', r'\"')
        return js_cond
            
    @property
    def create_cmd(self):
        return self._exp.syntax.create_cmd
    
    @property
    def parse_cmd(self):
        return self._exp.syntax.parse_cmd

    @property
    def script(self):
        script = self._exp.to_string()
        for m in RE_RUN_IF.finditer(script):
            _, (item, cond), _ = self.parse_cmd(m.group('cmd'))
            cond = self.transform(cond)
            cmd = self.create_cmd('run', (item, cond))
            oslogger.debug(f'rewriting {m.group("cmd")} to {cmd}')
            script = script.replace(m.group('cmd'), cmd)
        for m in RE_SET_COND.finditer(script):
            _, (key, cond), _ = self.parse_cmd(m.group('cmd'))
            cond = self.transform(cond)
            cmd = self.create_cmd('set', (key, cond))
            oslogger.debug(f'rewriting {m.group("cmd")} to {cmd}')
            script = script.replace(m.group('cmd'), cmd)
        for m in RE_DRAW.finditer(script):
            _, args, kwargs = self.parse_cmd(m.group('cmd'))
            for key, val in kwargs.items():
                if key == 'show_if':
                    kwargs[key] = self.transform(val)
            cmd = self.create_cmd('draw', args, kwargs)
            oslogger.debug(f'rewriting {m.group("cmd")} to {cmd}')
            script = script.replace(m.group('cmd'), cmd)
        # We transform all Python f-strings into JavaScript template literals.
        # However, we ignore multiline _run and html variables, because those
        # can contain code that looks like f-strings but should not be
        # converted.
        ignore_spans = []
        for m in RE_IGNORE_RUN.finditer(script):
            ignore_spans.append(m.span())
        for m in RE_IGNORE_PREPARE.finditer(script):
            ignore_spans.append(m.span())
        for m in RE_IGNORE_SCRIPT.finditer(script):
            ignore_spans.append(m.span())
        start_pos = 0
        while True:
            for m in RE_FSTRING.finditer(script, start_pos):
                start, end = m.span()
                if any(ignore_start <= start and ignore_end >= end
                       for ignore_start, ignore_end in ignore_spans):
                    continue
                template_literal = f'${{{self.transform(m.group("expr"), escape=True)}}}'
                oslogger.debug(f'converting f-string {m.group()} to template '
                               f'literal {template_literal}')
                script = script[:start] + template_literal + script[end:]
                start_pos = end
                break
            else:
                break
        return script
