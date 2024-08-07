import './App.css';
import Background from './components/Background.js';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Education from './components/Education.js';
import Contact from './components/Contact.js';
import { sendDiscordMessage } from './api/discord.js';
import React, { useEffect, useState } from 'react';


function App() {
    const [sent, updateSent] = useState(false);

    useEffect(() => {
        if (!sent) {
            sendDiscordMessage();
            updateSent(true);
        }
    }, [sent]);


    return (
        <>
        <Background/>
        <Navbar/>
        <Home/>
        <Projects />
        <Skills />
        <Education />
        <Contact />
        </>
    );
}

export default App;
