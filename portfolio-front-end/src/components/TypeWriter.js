import React, { useState, useEffect } from 'react';
import '../index.css';

const words = [
    " Software Developer 💻" ,
    " Cloud Engineer ☁️",
    " Web Developer 🌍",
    " Software Architect 🏗️",
    " Mobile Developer 📲",
    " Security Analyst 🔐",
  ];

  const Typewriter = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        let typingTimeout;
        let pauseTimeout;

        if (typing) {
        if (displayedText.length < words[currentWordIndex].length) {
            typingTimeout = setTimeout(() => {
            setDisplayedText(words[currentWordIndex].slice(0, displayedText.length + 1));
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
    }, [typing, displayedText, words, currentWordIndex]);

    useEffect(() => {
        setTyping(true);
    }, [displayedText]);

    return (
        <div className='typewriter'>
            <h2 className="text-2xl text-white">A {displayedText}<span className="cursor">&nbsp;</span></h2>
        </div>
    );
    };

    export default Typewriter;