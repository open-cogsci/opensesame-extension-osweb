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

STRUCTURE_CHECK_ITEMS = [
    u'logger',
    u'repeat_cycle',
    u'reset_feedback',
    u'loop',
    u'sequence'
]


def check_compatibility(exp):

    return u'\n'.join(check_supported_items(exp) + check_structure(exp))


def check_supported_items(exp):

    return [
        u'Item {} is not supported'.format(item.item_type)
        for item in exp.items.values()
        if item.item_type not in SUPPORTED_ITEMS
    ]


def check_structure(exp):
    
    errors = []
    states = {}
    
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
        
    set_state(exp.var.start, 'prepare')
    set_state(exp.var.start, 'run')
    return errors


# from libopensesame.experiment import experiment
# exp = experiment(
#     name = 'Dummy',
#     string = '/home/sebastiaan/Downloads/Sentences-and-Letters-with-textEW_2.osexp'
# )
# print(check_structure(exp))
