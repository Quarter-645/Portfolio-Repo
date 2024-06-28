import React, { useState } from 'react';
import useInView from '../hooks/useInView';
import DIALOG from '../content/dialog.json';

const opening = {
    "Question": "Hey there, tired from all your exploring? How about you rest and tell me a tale? What kind of adventure are you on?",
    "Answer1": "I'm looking to recruit members to my team",
    "Answer2": "I'm a fellow technologist",
    "Answer3": "I'm just exploring"
};

function FormCard() {
    const [ref, isInView] = useInView(0.5);
    const [currentQuestion, setCurrentQuestion] = useState(opening);
    const [dialogBranch, setDialogBranch] = useState(null);
    const [questionIndex, setQuestionIndex] = useState(1);

    const handleOpeningAnswerClick = (answer) => {
        let nextQuestion;
        switch (answer) {
            case "Answer1":
                nextQuestion = DIALOG.Employer[1];
                setDialogBranch('Employer');
                break;
            case "Answer2":
                nextQuestion = DIALOG.Technologist[1];
                setDialogBranch('Technologist');
                break;
            case "Answer3":
                nextQuestion = DIALOG.Wanderer[1];
                setDialogBranch('Wanderer');
                break;
            default:
                return;
        }
        setCurrentQuestion(nextQuestion);
    };

    const handleDialogAnswerClick = () => {
        let nextQuestionIndex = questionIndex + 1;
        if (DIALOG[dialogBranch][nextQuestionIndex]) {
            setCurrentQuestion(DIALOG[dialogBranch][nextQuestionIndex]);
            setQuestionIndex(nextQuestionIndex);
        } else {
            // Handle the end of the dialog if needed
            setCurrentQuestion({ Question: "Thank you for your feedback!" });
        }
    };

    const renderAnswers = (question) => {
        const answers = [];
        for (const key in question) {
            if (key !== 'Question') {
                answers.push(
                    <button className="bg-blue text-white py-2 px-4 rounded-lg" key={key} onClick={() => dialogBranch ? handleDialogAnswerClick() : handleOpeningAnswerClick(key)}>
                        {question[key]}
                    </button>
                );
            }
        }
        return answers;
    };

    return (
        <div className={`flex items-center justify-center p-4 transform transition-transform md:min-w-full duration-1000 ${isInView ? 'scale-100' : 'scale-50'}`} ref={ref}>
            <div className="bg-grey py-4 px-6 rounded-lg shadow-lg flex flex-col lg:flex-row items-center max-w-full md:max-w-6xl">
                <h2 className="text-xl text-white mb-4">{currentQuestion.Question}</h2>
                <div className="flex flex-col space-y-2">
                    {renderAnswers(currentQuestion)}
                </div>
            </div>
        </div>
    );
}

export default FormCard;
