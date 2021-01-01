from flask import render_template
from app import app

@app.route('/')
@app.route('/<game-code>')
def index():
    return render_template('index.html')