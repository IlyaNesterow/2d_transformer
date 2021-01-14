from matplotlib.figure import Figure


def draw(position: tuple, fig: Figure, x: list, y: list, title: str, color: str = 'b'):
    axis = fig.add_subplot(*position)
    axis.plot(x, y, color)
    axis.set_title(title)
    m = max(x + y) + 5
    axis.set_ylim(ymin=0, ymax=m)
    axis.set_xlim(xmin=0, xmax=m)