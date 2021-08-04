# coding=utf-8
from libopensesame.py3compat import *
from libopensesame.item import item
from libopensesame.oslogging import oslogger
from libqtopensesame.items.qtautoplugin import qtautoplugin
from libqtopensesame.misc.translate import translation_context
_ = translation_context(u'inline_html', category=u'plugin')


class inline_html(item):

    description = _(u'Embeds custom HTML')
    
    def reset(self):
        
        self.var.html = '''<input type='text' name='text_response'>
<input type='submit' value='ok'>'''

    def run(self):
        
        oslogger.warning(
            'inline_html items require OSWeb and do nothing on the desktop'
        )


class qtinline_html(inline_html, qtautoplugin):

    def __init__(self, name, experiment, string=None):

        inline_html.__init__(self, name, experiment, string)
        qtautoplugin.__init__(self, plugin_file=__file__)

    def item_icon(self):

        return self.qicon
