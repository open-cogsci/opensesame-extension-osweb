'''Executes JavaScript code'''

category = 'OSWeb'
priority = 100
def supports(exp):
    return exp.var.canvas_backend == 'osweb'
