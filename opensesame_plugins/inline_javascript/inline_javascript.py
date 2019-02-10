# coding=utf-8
from libopensesame.py3compat import *
import types
import js2py
from js2py.translators import translate_js
from libopensesame.inline_script import inline_script
from openexp.canvas_elements import ElementFactory
from libopensesame.widgets.widget_factory import WidgetFactory
import libopensesame.python_workspace_api as api
from libqtopensesame.items.inline_script import inline_script as qtinline_script
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
			u'exp'				: self.experiment,
			u'vars'				: self.experiment.var,
			u'pool'				: self.experiment.pool,
			u'items'			: self.experiment.items,
			u'clock'			: self.experiment._clock,
			u'log'				: self.experiment._log,
			u'responses'		: self.experiment._responses,
			u'data_files'		: self.experiment.data_files,
		})
		# All functions from the api modules are also loaded into the globals.
		# This way they can be called directly by name.
		api.set_aliases()
		for name, obj in api.__dict__.items():
			if self._is_api_object(obj):
				self._globals[name] = obj
		# A hack to fix the Canvas object. For some reason that needs to be
		# carried outside of the context
		self._globals[u'Canvas'] = lambda: api.Canvas()

	def _is_api_object(self, obj):

		if isinstance(obj, types.FunctionType):
			return True
		if isinstance(obj, type) and issubclass(
			obj, (WidgetFactory, ElementFactory)):
				return True
		return False

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

	def item_icon(self):

		return u'applications-internet'
