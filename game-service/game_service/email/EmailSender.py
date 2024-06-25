import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import os

class EmailSender:
    def __init__(self, body):
        self.smtp_server = 'smtp.gmail.com'
        self.smtp_port = 587
        self.sender_email = 'connormorrisondevelopment@gmail.com'
        self.sender_password = os.environ['MAIL_PASSWORD']
        self.recipient_email = 'connormorrisondevelopment@gmail.com'
        self.subject = 'Someone Replied to the Form!'
        self.body = body

    def send_email(self):
        # Create the MIME message
        message = MIMEMultipart()
        message['From'] = self.sender_email
        message['To'] = self.recipient_email
        message['Subject'] = self.subject

        # Attach the body with the msg instance
        message.attach(MIMEText(self.body, 'plain'))

        try:
            # Connect to the SMTP server
            server = smtplib.SMTP(self.smtp_server, self.smtp_port)
            server.starttls()  # Secure the connection
            server.login(self.sender_email, self.sender_password)  # Log in to the server

            # Send the email
            text = message.as_string()
            server.sendmail(self.sender_email, self.recipient_email, text)

            # Terminate the SMTP session
            server.quit()

        except Exception as e:
            print(f"Failed to send email: {e}")
