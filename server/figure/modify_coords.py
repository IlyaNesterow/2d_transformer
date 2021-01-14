from server.figure.move_object import move
from server.figure.scale_object import scale
from server.figure.rotate_object import rotate
from server.utils.modify_cords import modify


def modify_coords(body: dict, x: list, y: list) -> list and list:
    x, y = modify(body.get('move', None), x, y, move)
    x, y = modify(body.get('scale', None), x, y, scale)
    x, y = modify(body.get('angle', None), x, y, rotate)

    return x, y