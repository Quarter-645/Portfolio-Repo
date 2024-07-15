import React, { useState, useEffect } from 'react';
import useInView from '../hooks/useInView';
import formData from '../content/dialog.json';
import { sendSelectionHistory } from '../api/send_email';
import { sendDiscordMessage } from '../api/discord';

function FormCard() {
    const [ref, isInView] = useInView(0.5);
    const [currentStep, setCurrentStep] = useState('start');
    const [selectionHistory, setSelectionHistory] = useState([]);

    const handleOptionClick = (nextStep, selectedOption) => {
        setCurrentStep(nextStep);
        setSelectionHistory([...selectionHistory, { step: currentStep, selection: selectedOption }]);
    };

    useEffect(() => {
        if (!formData[currentStep].options.length) {
            sendDiscordMessage("form");
            sendSelectionHistory(selectionHistory)
                .then(result => console.log('Selection history sent successfully:', result))
                .catch(error => console.error('Error sending selection history:', error));
        }
    }, [currentStep, selectionHistory]);

    const { text, options } = formData[currentStep];

    return (
        <div className={`flex items-center justify-center p-4 transform transition-transform md:min-w-full duration-1000 ${isInView ? 'scale-100' : 'scale-50'}`} ref={ref}>
            <div className="bg-grey py-4 px-6 rounded-lg shadow-lg flex flex-col items-center max-w-full md:max-w-6xl">
                <h2 className="text-xl text-center text-white mb-4">{text}</h2>
                <div className="flex flex-col space-y-2">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleOptionClick(option.next, option.text)}
                            className="bg-blue opacity-80 transition duration-300 hover:opacity-100 hover:bg-blue text-white font-bold py-2 px-4 rounded"
                        >
                            {option.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FormCard;
