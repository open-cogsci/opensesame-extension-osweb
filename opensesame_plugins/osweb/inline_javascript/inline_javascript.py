# coding=utf-8
from libopensesame.py3compat import *
import js2py
from js2py.translators import translate_js
import esprima
from esprima.nodes import FunctionDeclaration, VariableDeclaration, \
    ExpressionStatement, AssignmentExpression, StaticMemberExpression, \
    BlockStatement
from libopensesame.inline_script import InlineScript
from libqtopensesame.items.inline_script import InlineScript as QtInlineScript
from libqtopensesame.items.qtplugin import QtPlugin
from pyqode.core.widgets import SplittableCodeEditTabWidget
from libqtopensesame.misc.translate import translation_context
from libopensesame.oslogging import oslogger
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

        self._var_cache = None
        if self.mime_type not in SplittableCodeEditTabWidget.editors:
            SplittableCodeEditTabWidget.register_code_edit(JavaScriptCodeEdit)
        InlineScript.__init__(self, name, experiment, string)
        QtPlugin.__init__(self, plugin_file=__file__)

    def item_icon(self):

        return self.qicon

    @staticmethod
    def _extract_assignments(script):
    
        def inner(body, only_globals=False):
            if hasattr(body, 'body') and body.body is not None:
                return inner(body.body,
                    only_globals=only_globals or 
                        isinstance(body, FunctionDeclaration))
            if not isinstance(body, list):
                body = [body]
            assignments = []
            for element in body:
                if isinstance(element, VariableDeclaration) and \
                        not only_globals:
                    # Only var results in assignments
                    if element.kind == 'var':
                        for declaration in element.declarations:
                            assignments.append(declaration.id.name)
                elif isinstance(element, ExpressionStatement) \
                        and isinstance(element.expression,
                                       AssignmentExpression) \
                        and isinstance(element.expression.left,
                                       StaticMemberExpression):
                    if element.expression.left.object.name \
                            in ['vars','window']:
                        assignments.append(
                            element.expression.left.property.name)
                elif isinstance(element, list):
                    assignments += inner(body, only_globals=only_globals)
                elif hasattr(element, 'body') and element.body is not None:
                    assignments += inner(element.body,
                        only_globals=only_globals or 
                            isinstance(element, FunctionDeclaration))
            return assignments
        
        try:
            return inner(esprima.parse(script).body)
        except Exception as e:
            oslogger.debug(f'failed to extract assignments: {e}')
            return []
    
