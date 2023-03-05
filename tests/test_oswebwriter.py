#!/usr/bin/env python
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
import unittest
from libopensesame.py3compat import *
from openexp._color.color import color
from libopensesame.experiment import Experiment
from opensesame_extensions.osweb.oswebext.oswebwriter import OSWebWriter


class OSWebWriterTestCase(unittest.TestCase):
    
    def test_rewriting(self):
        
        with open('tests/data/oswebwriter.osexp') as fd:
            exp = Experiment(string=fd.read())
        writer = OSWebWriter(exp, 'tmp.osexp')
        with open('tests/data/oswebwriter_ref.osexp') as fd:
            ref_exp = Experiment(string=fd.read())
            self.assertEqual(ref_exp.to_string(), writer.script)
        
        
if __name__ == '__main__':
    
    unittest.main()
