from flask import Flask

app = Flask(__name__, static_folder="./routes/react/build/static", template_folder="./routes/react/build")

from app import app
from app.requests import requests
from app.routes import routes