# coding=utf-8
from libopensesame.py3compat import *
from libopensesame.exceptions import osexception
from libopensesame import python_workspace_api as py_api
import js2py.base


class Canvas(object):
    
    def __init__(self, kwargs={}):
        self._canvas = py_api.Canvas(**_cnv(kwargs))
    
    @property
    def color(self): return self._canvas.color
    @color.setter
    def color(self, val): self._canvas.color = val
    @property
    def background_color(self): return self._canvas.background_color
    @background_color.setter
    def background_color(self, val): self._canvas.background_color = val
    @property
    def fill(self): return self._canvas.fill
    @fill.setter
    def fill(self, val): self._canvas.fill = val
    @property
    def penwidth(self): return self._canvas.penwidth
    @penwidth.setter
    def penwidth(self, val): self._canvas.penwidth = val
    @property
    def html(self): return self._canvas.html
    @html.setter
    def html(self, val): self._canvas.html = val
    @property
    def font_family(self): return self._canvas.font_family
    @font_family.setter
    def font_family(self, val): self._canvas.font_family = val
    @property
    def font_size(self): return self._canvas.font_size
    @font_size.setter
    def font_size(self, val): self._canvas.font_size = val
    @property
    def font_italic(self): return self._canvas.font_italic
    @font_italic.setter
    def font_italic(self, val): self._canvas.font_italic = val
    @property
    def font_bold(self): return self._canvas.font_bold
    @font_bold.setter
    def font_bold(self, val): self._canvas.font_bold = val
    @property
    def font_underline(self): return self._canvas.font_underline
    @font_underline.setter
    def font_underline(self, val): self._canvas.font_underline = val
    
    def arrow(self, kwargs={}):
        self._canvas.arrow(**_args(kwargs, sx=0, sy=0, ex=50, ey=0))
        
    def clear(self, kwargs={}):
        self._canvas.clear(**_args(kwargs))
    
    def circle(self, kwargs={}):
        self._canvas.circle(**_args(kwargs, x=0, y=0, r=50))
        
    def ellipse(self, kwargs={}):
        self._canvas.ellipse(**_args(kwargs, x=-50, y=-25, w=100, h=50))
    
    def fixdot(self, kwargs={}):
        self._canvas.fixdot(**_args(kwargs))
        
    def gabor(self, kwargs={}):
        self._canvas.gabor(**_args(kwargs, x=0, y=0, orient=0, freq=.1))
        
    def image(self, kwargs={}):
        kwargs = _args(kwargs)
        if 'fname' not in kwargs:
            raise osexception(
                'fname is a required parameter for Canvas.image()')
        kwargs['fname'] = py_api.experiment.pool[kwargs['fname']]
        self._canvas.image(**kwargs)
        
    def line(self, kwargs={}):
        self._canvas.line(**_args(kwargs, sx=0, sy=0, ex=50, ey=0))
        
    def noise_patch(self, kwargs={}):
        self._canvas.noise_patch(**_args(kwargs, x=0, y=0))
    
    def polygon(self, kwargs={}):
        kwargs = _args(kwargs)
        if 'vertices' not in kwargs:
            raise osexception(
                'vertices is a required parameter for Canvas.polygon()')
        self._canvas.polygon(**kwargs)
        
    def rect(self, kwargs={}):
        self._canvas.rect(**_args(kwargs, x=-50, y=-25, w=100, h=50))
        
    def show(self):
        return self._canvas.show()
        
    def text(self, kwargs={}):
        kwargs = _args(kwargs)
        if 'text' not in kwargs:
            raise osexception(
                'text is a required parameter for Canvas.text()')
        self._canvas.text(**kwargs)
        
        
def xy_from_polar(rho, phi, pole=(0, 0)):
    return py_api.xy_from_polar(*_cnv_args(rho, phi, pole))
    
    
def xy_to_polar(x, y, pole=(0, 0)):
    return py_api.xy_to_polar(*_cnv_args(x, y, pole))
    
    
def xy_circle(n, rho, phi0=0, pole=(0, 0)):
    return py_api.xy_circle(*_cnv_args(n, rho, phi0, pole))
    
    
def xy_distance(x1, y1, x2, y2):
    return py_api.xy_distance(*_cnv_args(x1, y1, x2, y2))


def xy_grid(n, spacing, pole=(0, 0)):
    return py_api.xy_grid(*_cnv_args(n, spacing, pole))
    
    
def xy_random(n, width, height, min_dist=0, pole=(0, 0)):
    return py_api.xy_random(*_cnv_args(n, width, height, min_dist, pole))


def reset_feedback():
    py_api.reset_feedback()
    
    
def set_subject_nr(nr):
    py_api.set_subject_nr(_cnv(nr))
    
    
def sometimes(p=.5):
    py_api.sometimes(_cnv(p))
    
    
def _args(obj, **defaults):
    obj = _cnv(obj)
    for key, val in defaults.items():
        if key not in obj:
            obj[key] = val
    return obj


def _cnv_args(*args):
    
    return [
        _cnv(arg) for arg in args
        if not isinstance(arg, js2py.base.PyJsUndefined)
    ]


def _cnv(obj):
    if isinstance(obj, (js2py.base.PyJsNumber, js2py.base.PyJsString)):
        return obj.value
    if isinstance(obj, js2py.base.PyJsArray):
        return [_cnv(obj[val]) for val in obj]
    if isinstance(obj, js2py.base.JsObjectWrapper):
        try:
            return {key: _cnv(obj[key]) for key in obj}
        except TypeError:
            return [_cnv(val) for val in obj]
    return obj
