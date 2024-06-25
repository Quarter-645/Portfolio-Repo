import React from 'react';
import tools from '../content/tools.json';
import useInView from '../hooks/useInView';
import '../App.css';
const images = require.context('../images/tools', false, /\.(png|jpe?g|svg|webp)$/);


const imageMap = {};
images.keys().forEach((key) => {
  const imageName = key.replace('./', '').replace(/\.[^/.]+$/, "");
  imageMap[imageName] = images(key);
});


function ToolSkills() {
    const [ref, isInView] = useInView(0.5);

    return (
        <div 
            className={`bg-grey p-4 rounded-lg md:max-w-6xl transform transition-transform duration-1000 ease-in-out md:m-4 ${isInView ? 'scale-100' : 'scale-75'}`} 
            ref={ref}
        >
            <h1 className="text-4xl font-bold mb-6 text-white text-center">Programming Languages, Frameworks, Libraries, and Tools</h1>
            <div className="flex flex-wrap justify-center gap-8 text-lg max-w-screen">
                {tools.Tools.map((tool, index) => (
                    <div key={index} className="flex flex-col items-center scale-100 hover:scale-125 transition ease-in-out duration-300 ">
                        <img src={imageMap[tool]} alt={tool} className="h-24"/>
                        <p className="mt-2 text-white text-center">{tool}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ToolSkills;
