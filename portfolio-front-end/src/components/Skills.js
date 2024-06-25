import GeneralSkills from "./GeneralSkills";
import ToolSkills from "./ToolSkills";

function Skills() {
    return (
        <section id="skills" className="flex flex-col items-center justify-center min-h-screen p-16 z-20">
            <GeneralSkills />
            <ToolSkills />
        </section>
    );
}

export default Skills;
