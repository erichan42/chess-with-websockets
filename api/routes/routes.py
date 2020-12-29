from flask import render_template
from api import api

@api.route('/')
@api.route('/index')
def index():
    return render_template('index.html')