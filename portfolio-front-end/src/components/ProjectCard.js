import React from 'react';
import useInView from '../hooks/useInView';

// Project Data
import PROJECT_JSON from '../content/projects.json';
import Placeholder from '../images/Placeholder.png';

function ProjectCard({ projectName, image }) {
    const [ref, isInView] = useInView(0.5);
    image = !image ? Placeholder : image;
    const PROJECT = PROJECT_JSON[projectName];
    const BUTTON_CSS = "bg-blue transition duration-300 opacity-80 hover:opacity-100 cursor-pointer m-4 p-2 rounded-xl text-white font-bold w-24 text-center";
    
    return (
        <div className={`flex items-center justify-center p-4 transform transition-transform duration-1000 ${isInView ? 'scale-100' : 'scale-50'}`} ref={ref}>
            <div className="bg-grey py-4 px-6 rounded-lg shadow-lg flex flex-col lg:flex-row items-center max-w-full md:max-w-6xl">
                <div className="ml-4">
                    <h2 className="text-3xl font-bold text-white">{PROJECT.name}</h2>
                    <p className="text-white line-clamp-4">{PROJECT.text}</p>
                    <div className="flex mt-4">
                        <button className={BUTTON_CSS}>
                            More Info
                        </button>
                        <button className={BUTTON_CSS}>
                            GitHub
                        </button>
                    </div>
                </div>
                <img 
                    src={image}
                    alt={PROJECT.imageAlt}
                    className="rounded-lg w-32 h-32 lg:w-64 lg:h-64 m-4 object-contain order-first"
                />
            </div>
        </div>
    );
}


export default ProjectCard;
