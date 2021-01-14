from matplotlib.figure import Figure
from server.figure.get_coords import get_coords
from server.figure.modify_coords import modify_coords
from server.figure.draw_plot import draw


def create_figure(body: dict) -> Figure:
    try:
        x, y = get_coords(body)
        
        fig = Figure()
        original = body.get('original', None)
        if original: 
            draw((2, 1, 1), fig, x, y, 'Original')
            pos = (2, 1, 2)
        else:
            pos = (1, 1, 1)
        x, y = modify_coords(body, x, y)
        draw(pos, fig, x, y, 'With transformation', 'r')

        return fig
    except Exception as ex:
        raise ex
