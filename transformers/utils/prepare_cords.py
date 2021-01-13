from transformers.move_object import move
from transformers.scale_object import scale
from transformers.rotate_object import rotate
from transformers.utils.modify_cords import modify
from transformers.utils.connect_start_end import connect


def prepare(body: dict) -> list and list:
    x = body.get('x', None)
    y = body.get('y', None)

    if not x or not y:
        raise AttributeError('missing coords')

    if body.get('connect', None):
        connect(x, y)

    x, y = modify(body.get('move', None), x, y, move)
    x, y = modify(body.get('scale', None), x, y, scale)
    x, y = modify(body.get('rotate', None), x, y, rotate)

    return x, y