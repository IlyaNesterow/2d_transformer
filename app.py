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
        fig = create_figure(request.json)
        output = BytesIO()
        FigureCanvas(fig).print_png(output)
        return Response(output.getvalue(), mimetype='image/png')
    except Exception:
        return jsonify({'warning': 'error occored'}), 500


if __name__ == '__main__':
    app.run(host='localhost', port=3000, debug=True)