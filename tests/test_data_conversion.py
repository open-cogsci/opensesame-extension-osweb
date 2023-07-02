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
from osweb import results


class DataConversionTestCase(unittest.TestCase):
    
    def test_txt(self):
        dm = results.parse_results('tests/data/test-data.txt')
        assert len(dm) > 0 and dm.columns
        
    def test_json(self):
        dm = results.parse_results('tests/data/test-data.json')
        assert len(dm) > 0 and dm.columns
        
    def test_jrzip(self):
        dm = results.parse_results('tests/data/test-data.jrzip')
        assert len(dm) > 0 and dm.columns
        
    def test_zip(self):
        dm = results.parse_results('tests/data/test-data.zip')
        assert len(dm) > 0 and dm.columns

        
if __name__ == '__main__':
    
    unittest.main()
