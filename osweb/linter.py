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

SUPPORTED_ITEMS = [
	u'sequence',
	u'loop',
	u'sketchpad',
	u'feedback',
	u'mouse_response',
	u'sampler',
	u'keyboard_response',
	u'logger',
	u'touch_response',
	u'notepad',
	u'reset_feedback',
	u'repeat_cycle',
	u'advanced_delay',
	u'inline_javascript'
]


def check_compatibility(exp):

	return u'\n'.join([
		u'Item {} is not supported'.format(item.item_type)
		for item in exp.items.values()
		if item.item_type not in SUPPORTED_ITEMS
	])
