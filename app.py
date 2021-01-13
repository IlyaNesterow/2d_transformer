from io import BytesIO
from flask import *
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas
from transformers.create_figure import create_figure

app = Flask(__name__, static_url_path='',
                  static_folder='client/build',
                  template_folder='client/build')


@app.route("/")
def home(): 
    return render_template("index.html") 


@app.route('/plot', methods=['GET', 'PATCH'])
def plot_png():
    try:
        if request.method == 'GET':
            body = {
                'x': [10, 20, 40],
                'y': [10, 50, 70],
                'connect': True, 
                'scale': {
                    'scale_x': 5,
                }
            }
        else: 
            body = request.json
        fig = create_figure(body)
        output = BytesIO()
        FigureCanvas(fig).print_png(output)
        return Response(output.getvalue(), mimetype='image/png'), 201
    except Exception as ex:
        return jsonify({'error': ex}), 500


if __name__ == '__main__':
    app.run(host='localhost', port=3000, debug=True)