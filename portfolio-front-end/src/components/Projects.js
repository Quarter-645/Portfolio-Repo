import ProjectCard from "./ProjectCard";

function Projects() {
    const PROJECTS = [
        { "name": "RaspberryPiServer", "imageLarge": true },
        { "name": "DECO3801", "imageLarge": false },
    ];

    return (
        <section id="projects" className="flex flex-col items-center justify-center bg-lightGrey">
            {PROJECTS.map((project, index) => (
                <ProjectCard 
                    key={index} 
                    projectName={project.name} 
                    imageLarge={project.imageLarge} 
                />
            ))}
        </section>
    );
}

export default Projects;
