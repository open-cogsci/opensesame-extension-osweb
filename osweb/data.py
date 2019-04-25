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

import json
from datamatrix import DataMatrix
from datamatrix.py3compat import *


def parse_jatos_results(jatos_path):

	if hasattr(json.decoder, 'JSONDecodeError'):
		jsonerror = json.decoder.JSONDecodeError
	else:
		jsonerror = ValueError
	dm = DataMatrix(length=0)
	invalid_lines = 0
	total_lines = 0
	with open(jatos_path) as fd:
		for line in fd:
			line = line.strip()
			if line.startswith('[{'):
				line = line[1:]
			if line.endswith('},') or line.endswith('}]'):
				line = line[:-1]
			total_lines += 1
			try:
				d = json.loads(line)
			except jsonerror:
				invalid_lines += 1
			else:
				if d:
					dm <<= DataMatrix(length=1)._fromdict(
						{key: [safe_decode(val)] for key, val in d.items()}
					)
	if invalid_lines:
		warn('Failed to parse {} of {} lines'.format(
			invalid_lines,
			total_lines
		))
	return dm

if __name__ == '__main__':

	import sys

	dm = parse_jatos_results(sys.argv[-1])
	print(dm)
