from flask import Blueprint, jsonify, request  # type: ignore
from game_service.email.EmailFormatter import EmailFormatter
from game_service.email.EmailSender import EmailSender
from game_service.extensions.LimiterExtension import limiter

api = Blueprint('api', __name__)

@api.route('/health')
@limiter.limit("1/second")
def health():
    return jsonify({"status": "ok"}), 200

@api.route('/handle_email', methods=['POST'])
@limiter.limit("1/second", override_defaults=False)
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

