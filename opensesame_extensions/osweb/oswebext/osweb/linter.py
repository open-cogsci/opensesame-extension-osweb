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
    'sequence',
    'touch_response',
    'notepad',
    'reset_feedback',
    'repeat_cycle',
    'advanced_delay',
    'inline_javascript',
    'inline_html',
    'feedback',
    'form_text_display',
    'form_multiple_choice',
    'form_consent',
    'logger',
    'sketchpad'
]

STRUCTURE_CHECK_ITEMS = [
    'repeat_cycle',
    'reset_feedback',
    'loop',
    'sequence'
]


def item_type_supported(item_type):
    """Checks whether an item_type is supported. Items are supported if they
    have a custom linter function or if they are in the SUPPORTED_ITEMS list.
    """
    try:
        eval('check_item_{}'.format(item_type))
    except NameError:
        return item_type in SUPPORTED_ITEMS
    return True


def check_compatibility(exp, fullscreen):
    """Checks the compatibility of an experiment and returns all warnings as a
    list of text strings. An empty list indicates that the experiment is
    compatible.
    """
    return '\n'.join(
        check_supported_items(exp, fullscreen) + 
        check_structure(exp, fullscreen)
    )


def check_item(item, fullscreen):
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
            return ['Item {} is not supported'.format(item.item_type)]
        return []
    return linter_fnc(item, fullscreen)


def check_supported_items(exp, fullscreen):
    """Checks all items and returns a list of warnings."""
    return list(it.chain(
        *[check_item(item, fullscreen) for item in exp.items.values()]
    ))


def check_structure(exp, fullscreen):
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
                'The {} phase for item {} is called multiple times in a row'.format(
                    state,
                    item_name
                )
            )
        states[item_name] = state
        if item.item_type == 'sequence':
            for sub_item_name, _, _ in item.items:
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


def check_item_loop(item, fullscreen):
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
    if item._constraints:
        w.append(item_warning(item, 'Constraints not supported'))
    return w

    
def check_item_mouse_response(item, fullscreen):
    w = []
    if item.var.event_type == 'mouserelease':
        w.append(item_warning(item, 'Mouse release not supported'))
    return w


def check_item_keyboard_response(item, fullscreen):
    w = []
    if item.var.event_type == 'keyrelease':
        w.append(item_warning(item, 'Key release not supported'))
    return w


def check_item_sampler(item, fullscreen):
    w = []
    if item.var.stop_after != 0:
        w.append(item_warning(item, 'Stop after not supported'))
    return w

def check_item_form_text_input(item, fullscreen):
    if not fullscreen:
        return []
    return [item_warning(
        item,
        'Some browsers disable text input in fullscreen for security reasons'
    )]
