import json
import os

class EmailFormatter:
    def __init__(self, data):
        self.choices = data.get("history", [])
        if not self.choices:
            raise ValueError("No history data found in the request")

        script_dir = os.path.dirname(__file__)  # Get the directory of this script
        json_file_path = os.path.join(script_dir, 'dialog.json')

        with open(json_file_path, 'r') as f:
            self.dialog_data = json.load(f)
        

    def formatData(self):
        userChoices = ""
        for choice in self.choices:
            step_name = choice.get("step", "Unknown Step")
            selection = choice.get("selection", "No Selection")

            if step_name in self.dialog_data:
                step_text = self.dialog_data[step_name].get("text", "No text found")
                choiceString = f"Prompt: {step_text}\nResponse: {selection}\n\n"
            else:
                choiceString = f"Prompt: {step_name}\nResponse: {selection}\n\n"
            
            userChoices += choiceString

        return userChoices

    def formatEmailBody(self):
        emailString = "Hey Connor, someone completed your form! Here were their choices: \n\n"
        emailString += self.formatData()
        return emailString
