from flask import Flask

api = Flask(__name__)

from api import api
from api.requests import requests
from api.routes import routes