from flask import Blueprint, jsonify, request 
from email.EmailHandler import handleEmail

api = Blueprint('api', __name__, url_prefix='/api/')

@api.route('/health')
def health():
    return jsonify({"status": "ok"}), 200


@api.route('/handle_email', methods=['POST'])
def handleEmail():
    handleEmail(request)    
    return jsonify({"status" : "Email Sent!"}), 201
