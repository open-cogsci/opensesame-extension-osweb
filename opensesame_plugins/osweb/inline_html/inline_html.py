# coding=utf-8
from libopensesame.py3compat import *
from libopensesame.item import Item
from libopensesame.oslogging import oslogger


class InlineHtml(Item):

    def reset(self):
        
        self.var.html = '''<input type='text' name='text_response'>
<input type='submit' value='ok'>'''

    def run(self):
        
        oslogger.warning(
            'inline_html items require OSWeb and do nothing on the desktop'
        )
