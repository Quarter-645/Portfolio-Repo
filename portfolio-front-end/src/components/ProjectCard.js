import React from 'react';
import Raspberry from "../images/Raspberry.png";
import Placeholder from '../images/Placeholder.png';

const PROJECT_JSON = {
    "RaspberryPiServer" : {
        "name" : "Raspberry Pi Web Server",
        "text" : "This is a custom built web server designed to host a portfolio of projects to showcase to employers. It was designed mindfully with a microservices architecture as to ensure modularity and maintainability. It currently hosts a range of projects for you to try out, you can see some of them linked with a \"try me\" button below!",
        "imagePath" : Raspberry,
        "imageAlt" : "The Raspberry Pi Logo",
    },
    "DECO3801" : {
        "name" : "2032 Olympic XR Interactive Experience",
        "text" : "While enrolled in DECO3801 at the esteemed University of Queensland, I had the privilege of collaborating with a talented group of developers to create an immersive Extended Reality (XR) experience. Our collective aim was to cultivate and heighten the excitement of ticket purchasers eagerly anticipating the forthcoming Brisbane 2032 Olympics in our immersive XR prototype.",
        "imagePath" : Placeholder,
        "imageAlt" : "The Olympic Rings",
    },
}

function ProjectCard({projectName, imageLarge}) {
    const PROJECT = PROJECT_JSON[projectName];
    const BUTTON_CSS = "bg-blue transition duration-300 opacity-80 hover:opacity-100 cursor-pointer m-4 p-2 rounded-xl text-white font-bold w-24 text-center";
    const IMAGE_CSS = imageLarge ? "w-64 h-64" : "w-48 h-48";
    const HEADER = imageLarge ? <h2 className="text-3xl font-bold text-white">{PROJECT.name}</h2> : <h3 className="text-2xl font-bold text-white">{PROJECT.name}</h3>;
    const CONTAINER_CSS = imageLarge ? "bg-grey py-4 px-6 rounded-lg shadow-lg flex items-center max-w-full md:max-w-6xl" : "bg-grey py-4 px-6 rounded-lg shadow-lg flex items-center max-w-full md:max-w-4xl"
    return (
        <div className="flex items-center justify-center p-4">
            <div className={CONTAINER_CSS}>
                <div className="ml-4">
                    {HEADER}
                    <p className="text-white">{PROJECT.text}</p>
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
                    src={PROJECT.imagePath}
                    alt={PROJECT.imageAlt}
                    className={`rounded-lg ${IMAGE_CSS} object-cover`}
                />
            </div>
        </div>
    );
}

export default ProjectCard;
