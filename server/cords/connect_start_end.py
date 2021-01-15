

def connect(x: list, y: list):
    l = len(x) - 1
    if x[0] != x[l] or y[0] != y[l]:
        x.append(x[0])
        y.append(y[0])