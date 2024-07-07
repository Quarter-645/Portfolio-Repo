class EmailFormatter:
    def __init__(self, data):
        self.choices = data.get("history", [])
        if not self.choices:
            raise ValueError("No history data found in the request")

    def formatData(self):
        userChoices = ""
        for choice in self.choices:
            step = choice.get("step", "Unknown Step")
            selection = choice.get("selection", "No Selection")
            choiceString = f"{step} : {selection}\n"
            userChoices += choiceString

        return userChoices

    def formatEmailBody(self):
        emailString = "Hey Connor, someone completed your form! Here were their choices: \n"
        emailString += self.formatData()
        return emailString
