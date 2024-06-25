import React from 'react';
import EducationCard from './EducationCard';

import UQ from '../images/credentials/UQ.svg';
import Google from '../images/credentials/Google.webp';
import Docker from '../images/credentials/Docker.png';
import Mozilla from '../images/credentials/Mozilla.png';
import OpenEDG from '../images/credentials/OpenEDG.jpg';


import Placeholder from '../images/Placeholder.png';

const CREDENTIALS = [
    { "name": "BachelorOfComputerScience", "image": UQ },
    { "name": "GoogleCyberSecurityCertificate", "image": Google },
    { "name": "DockerCertificate", "image": Docker },
    { "name": "MozillaJavaScriptCertificate", "image": Mozilla },
    { "name": "OpenEDGPythonCertificate", "image": OpenEDG },
];

function Education() {
    return (
        <section id="education" className="flex items-center justify-center min-h-screen flex-wrap p-16">
            {CREDENTIALS.map((credential, index) => (
                <EducationCard
                    key={index}
                    credentialName={credential.name}
                    image={credential.image}
                />
            ))}
        </section>
    );
}

export default Education;
