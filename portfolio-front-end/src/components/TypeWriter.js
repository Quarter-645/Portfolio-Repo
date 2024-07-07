import React, { useState, useEffect } from 'react';
import '../index.css';

const words = [
    { text: " Software Developer ", icon: "fas fa-laptop" },
    { text: " Cloud Engineer ", icon: "fa fa-cloud" },
    { text: " Web Developer ", icon: "fas fa-globe" },
    { text: " Software Architect ", icon: "fas fa-drafting-compass" },
    { text: " Mobile Developer ", icon: "fas fa-mobile-alt" },
    { text: " Security Analyst ", icon: "fas fa-shield-alt" },
];

const Typewriter = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let typingTimeout;
        let pauseTimeout;

        if (typing) {
            if (displayedText.length < words[currentWordIndex].text.length) {
                typingTimeout = setTimeout(() => {
                    setDisplayedText(words[currentWordIndex].text.slice(0, displayedText.length + 1));
                }, 100); // Adjust typing speed here
            } else {
                pauseTimeout = setTimeout(() => {
                    setTyping(true);
                    setDisplayedText('');
                    setCurrentWordIndex((currentWordIndex + 1) % words.length);
                }, 3000); // Pause duration here
                setTyping(false);
            }
        }

        return () => {
            clearTimeout(typingTimeout);
            clearTimeout(pauseTimeout);
        };
    }, [typing, displayedText, currentWordIndex]);

    useEffect(() => {
        setTyping(true);
    }, [displayedText]);

    return (
        <div className='typewriter'>
            <h2 className="text-2xl text-white">
            <i className={`${words[currentWordIndex].icon} mr-2`}></i>{displayedText} <span className="cursor">&nbsp;</span>
            </h2>
        </div>
    );
};

export default Typewriter;
