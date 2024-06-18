import ProjectCard from "./ProjectCard";

function Projects() {
    const PROJECTS = [
        { "name": "RaspberryPiServer", "imageLarge": false },
        { "name": "WFA", "imageLarge": false },
        { "name": "CSSE3200", "imageLarge": false },
        { "name": "INFS3202", "imageLarge": false },
        { "name": "DECO3801", "imageLarge": false },
        { "name": "CSSE6400", "imageLarge": false },
    ];

    return (
        <section id="projects" className="flex flex-col items-center justify-center bg-lightGrey">
            {PROJECTS.map((project, index) => (
                <ProjectCard 
                    key={index} 
                    projectName={project.name}
                />
            ))}
        </section>
    );
}

export default Projects;
