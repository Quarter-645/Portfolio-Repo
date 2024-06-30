from flask import Blueprint, jsonify, request 
from game_service.email.EmailFormatter import EmailFormatter
from game_service.email.EmailSender import EmailSender

api = Blueprint('api', __name__, url_prefix='/api/')

@api.route('/health')
def health():
    return jsonify({"status": "ok"}), 200


@api.route('/handle_email', methods=['POST'])
def handleEmail():
    if request.method == 'POST':
        try:
            data = request.json
            formatter = EmailFormatter(data)
            print(formatter.formatEmailBody())
            sender = EmailSender(formatter.formatEmailBody())
            sender.send_email()
            return jsonify({"message": "Email sent successfully"}), 201
        except Exception as e:
            return jsonify({"error": str(e)}), 500


#Remove in PROD
@api.route('/test', methods=['POST'])
def test():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid data"}), 400
    # Process the data
    return jsonify({"request_payload": data}), 200