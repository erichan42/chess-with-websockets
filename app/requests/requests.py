from app import app

@app.route('/app/game', methods=['GET'])
def creategame():
    return 'Game has been created'