from math import cos, sin, radians, floor
from server.cords.scale_cords import scale_coords


def rotate(x: list, y: list, angle: int = 0):
    if len(x) != len(y):
        raise ValueError('x should be as long as y')

    angle = radians(angle)
    
    for i in range(len(x)):
        x[i] = floor(x[i] * cos(angle) - y[i] * sin(angle))
        y[i] = floor(x[i] * sin(angle) + y[i] * cos(angle))

    x = scale_coords(x)
    y = scale_coords(y)

    return x, y