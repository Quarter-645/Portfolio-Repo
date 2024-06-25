import React, { useState } from 'react';
import skills from '../content/skills.json';
import useInView from '../hooks/useInView';

function GeneralSkills() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [ref, isInView] = useInView(0.5);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={`bg-grey p-4 rounded-lg md:max-w-6xl transform transition-transform duration-1000 mt-8 ${isInView ? 'scale-100' : 'scale-50'}`}  ref={ref}>
            <h1 className="text-4xl font-bold mb-6 text-white text-center">Skills</h1>
            <div className="w-full">
                {Object.keys(skills).map((key, index) => (
                    <div key={index}>
                        <button
                            className={`w-full text-left py-2 px-4 text-white text-center font-bold transition duration-300 hover:bg-blue hover:bg-opacity-60 ${activeIndex === index ? 'rounded-t-lg bg-blue text-xl hover:bg-opacity-100' : 'rounded-lg text-lg'}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            {skills[key].name}
                        </button>
                        <div
                            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
                        >
                            <div className="p-4 bg-lightGrey text-black rounded-b-lg">
                                <p>{skills[key].description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GeneralSkills;
