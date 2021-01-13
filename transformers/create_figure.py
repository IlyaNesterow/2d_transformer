from matplotlib.figure import Figure
from transformers.move_object import move


def create_figure():
    x, y = move([10, 30, 15], [50, 20, 5], -5)
    print(x, y)

    fig = Figure()
    axis = fig.add_subplot(1, 1, 1)
    axis.plot(x, y, 'b')
    m = max(x + y) + 5
    axis.set_ylim(ymin=0, ymax=m)
    axis.set_xlim(xmin=0, xmax=m)

    return fig
