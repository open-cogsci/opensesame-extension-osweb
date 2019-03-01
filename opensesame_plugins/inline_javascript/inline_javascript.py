# coding=utf-8
from libopensesame.py3compat import *
import js2py
from js2py.translators import translate_js
from libopensesame.inline_script import inline_script
from libqtopensesame.items.inline_script import inline_script as qtinline_script
from libqtopensesame.items.qtplugin import qtplugin
from libqtopensesame.misc.translate import translation_context
_ = translation_context(u'inline_javascript', category=u'plugin')


class JavaScriptWorkspace(js2py.EvalJs):

	def __init__(self, experiment):

		self.__dict__[u'experiment'] = experiment
		self.__dict__[u'_globals'] = {}
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
			u'__name__'			: u'javascript_workspace',
			u'vars'				: self.experiment.var,
		})

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


class inline_javascript(inline_script):

	description = u'Executes JavaScript code (ECMA 5.1)'

	def reset(self):

		self.var._prepare = u''
		self.var._run = u''

	@property
	def workspace(self):

		if not hasattr(self.experiment, u'javascript_workspace'):
			self.experiment.javascript_workspace = JavaScriptWorkspace(
				self.experiment
			)
		return self.experiment.javascript_workspace


class qtinline_javascript(qtinline_script):

	description = _(u'Executes JavaScript code (ECMA 5.1)')
	language = u'JavaScript'

	def __init__(self, name, experiment, string=None):

		inline_script.__init__(self, name, experiment, string)
		qtplugin.__init__(self, plugin_file=__file__)

	def item_icon(self):

		return self.qicon
