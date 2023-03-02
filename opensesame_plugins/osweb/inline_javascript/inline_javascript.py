# coding=utf-8
from libopensesame.py3compat import *
import js2py
from js2py.translators import translate_js
from libopensesame.inline_script import InlineScript
from libqtopensesame.items.inline_script import InlineScript as QtInlineScript
from libqtopensesame.items.qtplugin import QtPlugin
from pyqode.core.widgets import SplittableCodeEditTabWidget
from libqtopensesame.misc.translate import translation_context
from . import javascript_workspace_api as api
_ = translation_context(u'inline_javascript', category=u'plugin')


class JavaScriptWorkspace(js2py.EvalJs):

    def __init__(self, experiment):

        self.__dict__[u'experiment'] = experiment
        self.__dict__[u'_globals'] = {}
        self.__dict__[u'_persistent'] = {}
        self.init_globals()
        js2py.EvalJs.__init__(self, self._globals)

    def init_globals(self):

        """
        desc:
            Initialize the global workspace.
        """
        # By setting the __name__ global, the workspace will operate as a
        # module, so that e.g. import statements don't suffer from locality.
        self._globals.update({
            u'__name__': u'javascript_workspace',
            u'vars': self.experiment.var,
            u'persistent': self._persistent
        })
        for name, obj in api.__dict__.items():
            if name.startswith('_'):
                continue
            self._globals[name] = obj

    def _compile(self, js=None, use_compilation_plan=False):

        code = translate_js(
            js,
            '',
            use_compilation_plan=use_compilation_plan
        )
        return compile(
            code,
            '<EvalJS snippet>',
            'exec'
        )

    def _exec(self, compiled):

        exec(compiled, self._context)


class InlineJavascript(InlineScript):

    def reset(self):

        self.var._prepare = u''
        self.var._run = u''

    @property
    def workspace(self):

        if not hasattr(self.experiment, u'javascript_workspace'):
            self.experiment.javascript_workspace = JavaScriptWorkspace(
                self.experiment)
        return self.experiment.javascript_workspace


class QtInlineJavascript(QtInlineScript):

    language = u'JavaScript'  # For OpenSesame 3.2
    ext = u'.js'  # For OpenSesame 3.3
    mime_type = u'application/javascript'  # For OpenSesame 3.3

    def __init__(self, name, experiment, string=None):

        # This requires pyqode_extras, which is not available in opensesamerun
        # and therefore we import it only here.
        from .javascript_code_edit import JavaScriptCodeEdit
        
        if self.mime_type not in SplittableCodeEditTabWidget.editors:
            SplittableCodeEditTabWidget.register_code_edit(JavaScriptCodeEdit)
        InlineScript.__init__(self, name, experiment, string)
        QtPlugin.__init__(self, plugin_file=__file__)

    def item_icon(self):

        return self.qicon
