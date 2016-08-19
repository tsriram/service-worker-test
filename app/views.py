from app import app
from flask import render_template

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/sw.js')
def sw():
	return app.send_static_file('js/sw.js')
