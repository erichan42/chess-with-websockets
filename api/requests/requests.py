from api import api

@api.route('/api/game', methods=['GET'])
def creategame():
    return 'Game has been created'