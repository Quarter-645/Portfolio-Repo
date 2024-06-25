import React from 'react';
import useInView from '../hooks/useInView';

function ContactCard() {
    const [ref, isInView] = useInView(0.5);

    return (
        <div className={`flex items-center justify-center p-4 transform transition-transform duration-1000 ${isInView ? 'scale-100' : 'scale-50'}`} ref={ref}>
            <div className="bg-grey py-4 px-6 rounded-lg shadow-lg flex flex-col items-center max-w-full md:max-w-6xl">
                <h2 className="text-3xl text-white mb-2 font-bold">Contact me</h2>
                <p className="text-2xl text-white text-center mb-4">Want to get in touch about me or my work or if you'd like to say hello? Please get in touch via any of these means, I'd love to hear from you!</p>
                <div className="flex space-x-4">
                    <a href="https://github.com/Quarter-645" target="_blank" rel="noopener noreferrer" className="text-white text-2xl transition duration-300 hover:text-gray-400">
                        <i className="fab fa-github mx-2 text-7xl"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/connor-morrison-43b6a9209/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl transition duration-300 hover:text-gray-400">
                        <i className="fab fa-linkedin mx-2 text-7xl"></i>
                    </a>
                    <a href="mailto:connormorrisondevelopment@gmail.com" className="text-white text-2xl transition duration-300 hover:text-gray-400">
                        <i className="fas fa-envelope mx-2 text-7xl"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;
