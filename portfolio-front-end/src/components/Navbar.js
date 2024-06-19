import React, { useState, useEffect } from 'react'; 

function Navbar() {
    const LINK_CSS = "bg-grey bg-opacity-70 transition duration-300 hover:bg-opacity-90 cursor-pointer md:mx-1 mx-0.5 p-2 rounded-3xl text-white font-bold md:w-24 w-20 md:text-base text-sm text-center";
    const ACTIVE_LINK_CSS = "bg-blue transition duration-300 cursor-pointer mx-1 p-2 rounded-3xl text-white font-bold md:text-lg md:w-24 w-20 text-center"; // CSS class for active link
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        setActiveLink('home');

        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const scrollPosition = window.scrollY;
        
            sections.forEach((section) => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
        
                if (scrollPosition >= top && scrollPosition < top + height) {
                    setActiveLink(section.id);
                    // console.log('Active Section:', activeLink);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                behavior: 'smooth',
                top: section.offsetTop,
            });
        }
    };

    return (
      <div className="bg-lightGrey rounded-3xl p-1 flex fixed top-4 left-1/2 -translate-x-1/2 z-50 border border-grey">
        <a className={`${activeLink === 'home' ? ACTIVE_LINK_CSS : LINK_CSS}`} onClick={() => scrollToSection('home')}>Home</a>
        <a className={`${activeLink === 'projects' ? ACTIVE_LINK_CSS : LINK_CSS}`} onClick={() => scrollToSection('projects')}>Projects</a>
        <a className={`${activeLink === 'skills' ? ACTIVE_LINK_CSS : LINK_CSS}`} onClick={() => scrollToSection('skills')}>Skills</a>
        <a className={`${activeLink === 'education' ? ACTIVE_LINK_CSS : LINK_CSS}`} onClick={() => scrollToSection('education')}>Education</a>
        <a className={`${activeLink === 'contact' ? ACTIVE_LINK_CSS : LINK_CSS}`} onClick={() => scrollToSection('contact')}>Contact</a>
      </div>
    );
}

export default Navbar;
