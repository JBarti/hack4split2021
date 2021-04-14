from flask import Flask, jsonify

app = Flask(__name__, static_url_path = '/',
                      static_folder='static')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/ping')
def ping():
    return jsonify({"pong": True}), 200

if __name__ == '__main__':
    app.run()

