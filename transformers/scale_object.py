from typing import Iterable


def scale(x: Iterable, y: Iterable, scale_x: int = 1, scale_y: int = 1):
    if len(x) != len(y):
        raise ValueError('x should be as long as y')
    
    x = [x1 * scale_x for x1 in x]
    y = [y1 * scale_y for y1 in y]

    return x, y