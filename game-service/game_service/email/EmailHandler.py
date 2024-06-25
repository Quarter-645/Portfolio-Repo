from EmailFormatter import * 
from EmailSender import *


def handleEmail(request):
    formatter = EmailFormatter(request)
    sender = EmailSender(formatter.formatEmailBody)
    
    sender.send_email()