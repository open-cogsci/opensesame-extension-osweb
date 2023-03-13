'''Embeds custom HTML'''

category = 'OSWeb'
controls = [{
    'type': 'editor',
    'var': 'html',
    'label': 'HTML editor',
    'syntax': True,
    'language': 'html',
    'name': 'editor_widget',
    'tooltip': 'An HTML editor widget'
}]
def supports(exp):
    return exp.var.canvas_backend == 'osweb'
