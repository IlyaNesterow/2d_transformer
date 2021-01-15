from server.cords.scale_cords import scale_coords
from server.cords.connect_start_end import connect


def get_coords(body: dict) -> list and list:
    x = body.get('x', None)
    y = body.get('y', None)

    if not x or not y:
        raise AttributeError('missing coords')

    x = scale_coords(x)
    y = scale_coords(y)

    if body.get('connect', None):
        connect(x, y)

    return x, y