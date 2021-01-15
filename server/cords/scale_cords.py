

def scale_coords(coords: list) -> list:
    if not all(i > 0 for i in coords):
        m = abs(min(coords)) + 1
        coords = [xi + m for xi in coords]
    return coords