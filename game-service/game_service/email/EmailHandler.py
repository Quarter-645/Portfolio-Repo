from game_service.email.EmailFormatter import EmailFormatter
from game_service.email.EmailSender import EmailSender


def handleEmail(request):
    formatter = EmailFormatter(request)
    sender = EmailSender(formatter.formatEmailBody())
    
    sender.send_email()