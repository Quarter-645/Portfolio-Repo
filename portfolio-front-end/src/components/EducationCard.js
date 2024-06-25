import React from 'react';
import useInView from '../hooks/useInView';

// Project Data
import CREDENTIAL_JSON from '../content/credentials.json';

function EducationCard({ credentialName, image }) {
    const [ref, isInView] = useInView(0.5);
    const CREDENTIAL = CREDENTIAL_JSON[credentialName];

    return (
        <div className={`flex items-center justify-center p-4 transform transition-transform md:min-w-full duration-1000 ${isInView ? 'scale-100' : 'scale-50'}`} ref={ref}>
            <div className="bg-grey py-4 px-6 rounded-lg shadow-lg flex flex-col lg:flex-row items-center max-w-full md:max-w-6xl">
                <div className="ml-4">
                    <h3 className="text-3xl font-bold text-white">{CREDENTIAL.organisation}</h3>
                    <h2 className="text-3xl font-bold text-white">{CREDENTIAL.name}</h2>
                    <p className={`text-white transition-height overflow-hidden`}>
                        {CREDENTIAL.attained}
                    </p>
                </div>
                <img
                    src={image}
                    alt={CREDENTIAL.imageAlt}
                    className="rounded-lg w-32 h-32 lg:w-64 lg:h-64 m-4 object-contain order-first"
                />
            </div>
        </div>
    );
}

export default EducationCard;
