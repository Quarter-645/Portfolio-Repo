from flask import jsonify, request 

class EmailFormatter:
    def __init__(self, request):
        self.visitor_name = request.get('visitor_name')
        self.time_stamp = request.get('time_stamp')
        self.visitor_type = request.get('visitor_type')
        self.enjoyment_type = request.get('enjoyment_type')
        self.desire_contact = request.get('desire_contact')

    def formatEmailBody(self):
        baseString = """
        Hey Connor, {vistor_name} completed your form at {time_completed}! \n
        They were a {visitor_type} who {enjoyment_type} your site! \n
        They are {desire_contact} in getting in touch.
        """

        emailBody = baseString.format(self.visitor_name, self.time_stamp, self.visitor_type, self.enjoyment_type, self.desire_contact)

        return emailBody
    
    

