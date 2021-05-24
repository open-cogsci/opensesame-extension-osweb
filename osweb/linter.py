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

from libopensesame.py3compat import *
import itertools as it


# These items are supported but don't have a specific linter function
SUPPORTED_ITEMS = [
    u'sequence',
    u'touch_response',
    u'notepad',
    u'reset_feedback',
    u'repeat_cycle',
    u'advanced_delay',
    u'inline_javascript'
]

STRUCTURE_CHECK_ITEMS = [
    u'logger',
    u'repeat_cycle',
    u'reset_feedback',
    u'loop',
    u'sequence'
]


def check_compatibility(exp):
    """Checks the compatibility of an experiment and returns all warnings as a
    list of text strings. An empty list indicates that the experiment is
    compatible.
    """
    return u'\n'.join(check_supported_items(exp) + check_structure(exp))


def check_item(item):
    """Checks whether an item is compatible and returns all warnings as a list
    of text strings. An empty list indicates that the experiment is
    compatible. If an item specific linter function is available (with the 
    name check_item_[item type]) then this is used. Otherwise, a warning is
    giving when the item type is not in the list of supported items.
    """
    try:
        linter_fnc = eval('check_item_{}'.format(item.item_type))
    except NameError:
        if item.item_type not in SUPPORTED_ITEMS:
            return [u'Item {} is not supported'.format(item.item_type)]
        return []
    return linter_fnc(item)


def check_supported_items(exp):
    """Checks all items and returns a list of warnings."""
    return list(it.chain(*[check_item(item) for item in exp.items.values()]))


def check_structure(exp):
    """Checks the structure of the experiment for a specific issue with OSWeb
    in which for certain items the prepare and run phases need to be called
    in alternation, i.e. it is not allowed to call the prepare phase (or the
    run phase) twice in a row.
    """
    def set_state(item_name, state):
        
        if item_name not in exp.items:
            return
        item = exp.items[item_name]
        if (
            states.get(item_name, None) == state and
            item.item_type in STRUCTURE_CHECK_ITEMS
        ):
            errors.append(
                u'The {} phase for item {} is called multiple times in a row'.format(
                    state,
                    item_name
                )
            )
        states[item_name] = state
        if item.item_type == 'sequence':
            for sub_item_name, _ in item.items:
                set_state(sub_item_name, state)
        elif item.item_type == 'loop':
            set_state(item._item, 'prepare')
            set_state(item._item, 'run')

    errors = []
    states = {}
    set_state(exp.var.start, 'prepare')
    set_state(exp.var.start, 'run')
    return errors


def item_warning(item, msg):
    return '{} ({}): {}'.format(item.name, item.item_type, msg)


def check_item_loop(item):
    w = []
    if item.var.continuous != 'no':
        w.append(item_warning(item, 'Resume after break not supported'))
    if item.var.break_if_on_first != 'yes':
        w.append(
            item_warning(
                item,
                'Disabling evaluate on first cycle not supported'
            )
        )
    if item.var.source != 'table':
        w.append(item_warning(item, 'File source not supported'))
    if item._constraints:
        w.append(item_warning(item, 'Constraints not supported'))
    return w


def check_item_sketchpad(item):
    w = []
    for e in item.elements:
        if e.properties.get('rotation', 0) != 0:
            w.append(item_warning(item, 'Rotation not supported'))
        if safe_decode(e.properties.get('color', '')).lower()[:3] in (
            'hsv', 'hsl', 'lab'
        ):
            w.append(item_warning(
                item, 'hsv, hsl, and lab colorspaces not supported')
            )
    return w


def check_item_feedback(item):
    return check_item_sketchpad(item)
    
    
def check_item_mouse_response(item):
    w = []
    if item.var.linked_sketchpad:
        w.append(item_warning(item, 'Linked sketchpad not supported'))
    if item.var.event_type == 'mouserelease':
        w.append(item_warning(item, 'Mouse release not supported'))
    return w


def check_item_keyboard_response(item):
    w = []
    if item.var.event_type == 'keyrelease':
        w.append(item_warning(item, 'Key release not supported'))
    return w


def check_item_sampler(item):
    w = []
    if item.var.pitch != 1:
        w.append(item_warning(item, 'Changing pitch not supported'))
    if item.var.pan != 0:
        w.append(item_warning(item, 'Panning not supported'))
    if item.var.stop_after != 0:
        w.append(item_warning(item, 'Stop after not supported'))
    if item.var.fade_in != 0:
        w.append(item_warning(item, 'Fade in not supported'))
    return w


def check_item_logger(item):
    w = []
    if item.var.auto_log == 'yes':
        w.append(item_warning(
            item,
            'To save bandwidth, select only relevant variables instead of logging all variables'
        ))
    return w
