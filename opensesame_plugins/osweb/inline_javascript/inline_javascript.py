# coding=utf-8
from libopensesame.py3compat import *
import esprima
from esprima.nodes import FunctionDeclaration, VariableDeclaration, \
    ExpressionStatement, AssignmentExpression, StaticMemberExpression
from libopensesame.inline_script import InlineScript
from libqtopensesame.items.inline_script import InlineScript as QtInlineScript
from libqtopensesame.misc.translate import translation_context
from libqtopensesame.items.qtplugin import QtPlugin
from libopensesame.oslogging import oslogger
_ = translation_context('inline_javascript', category='plugin')


class InlineJavascript(InlineScript):
    pass  # There is no desktop runtime for OSWeb


class QtInlineJavascript(QtInlineScript):

    description = _('Executes JavaScript')
    language = 'javascript'
    
    def __init__(self, name, experiment, string=None):
        self._var_cache = None
        InlineJavascript.__init__(self, name, experiment, string)
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
