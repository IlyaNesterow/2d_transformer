

def scale(x: list, y: list, scale_x: int = 1, scale_y: int = 1):
    if len(x) != len(y):
        raise ValueError('x should be as long as y')
    if scale_x < 0 or scale_y < 0:
        raise ValueError('Scaling index cannot be less than 0')
    
    x = [x1 * scale_x for x1 in x]
    y = [y1 * scale_y for y1 in y]

    return x, y