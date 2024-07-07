import ProjectCard from "./ProjectCard";

import Raspberry from "../images/projects/Raspberry.png";
import WFA from '../images/projects/WFA.png';
import DECO3801 from '../images/projects/Olympic.webp';
import INFS3202 from '../images/projects/MenuScan.png';
import CSSE6400 from '../images/projects/Gourmet.jpg';
import CSSE3200 from '../images/projects/CSSE3200.gif';

function Projects() {
    const PROJECTS = [
        { "name": "RaspberryPiServer", "image": Raspberry },
        { "name": "WFA", "image": WFA },
        { "name": "CSSE3200", "image": CSSE3200 },
        { "name": "INFS3202", "image": INFS3202 },
        { "name": "DECO3801", "image": DECO3801 },
        { "name": "CSSE6400", "image": CSSE6400 },
    ];

    return (
        <section id="projects" className="flex flex-col items-center justify-center p-16">
            {PROJECTS.map((project, index) => (
                <ProjectCard 
                    key={index} 
                    projectName={project.name}
                    image={project.image}
                />
            ))}
        </section>
    );
}

export default Projects;
