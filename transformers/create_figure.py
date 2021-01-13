from matplotlib.figure import Figure
from transformers.utils.prepare_cords import prepare


def create_figure(body: dict) -> Figure:
    try:
        x, y = prepare(body)

        fig = Figure()
        axis = fig.add_subplot(1, 1, 1)
        axis.plot(x, y, 'b')
        m = max(x + y) + 5
        axis.set_ylim(ymin=0, ymax=m)
        axis.set_xlim(xmin=0, xmax=m)

        return fig
    except Exception as ex:
        raise ex
