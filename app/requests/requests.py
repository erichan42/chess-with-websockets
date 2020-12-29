from app import app
from flask import request, jsonify
import json

@app.route('/api/game/', methods=['POST'])
def create_game():
    test = [
        {
            'code': '59FQ92',
            'port': 5001
        }
    ]
    empty_dict = {
        'code': '59FQ92',
        'port': 0
    }
    
    req = json.loads(request.data)
    for obj in test:
        if obj.get('code') == req.get('code'):
            return jsonify(obj)
    return jsonify(empty_dict)