from server.cords.scale_cords import scale_coords


def move(x: list, y: list, move_x: float = 0, move_y: float = 0):
    if len(x) != len(y):
        raise ValueError('x should be as long as y')
    
    x = [x1 + move_x for x1 in x]
    y = [y1 + move_y for y1 in y]

    x = scale_coords(x)
    y = scale_coords(y)

    return x, y