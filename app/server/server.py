from app import app
import socket
import _thread

class Server:
    def __init__(self, host='localhost', port=5002):
        self.host = host
        self.port = port
        self.server_socket = socket(
            socket.AF_INET,
            socket.SOCK_STREAM)

    def start(self):

        self.server_socket.bind((self.host,self.port))
        self.server_socket.listen(5)
        print('The server is ready to receive')
    
        while True:
            connection_socket, addr = self.server_socket.accept()

            sentence = connection_socket.recv(1024).decode()
            capitalized_sentence = sentence.upper()
            connection_socket.send(capitalized_sentence.encode())
            
            connection_socket.close()