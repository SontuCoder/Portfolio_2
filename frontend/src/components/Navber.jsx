import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Navber = (navOpen) => {
    const [activeLink, setActiveLink] = useState('#home'); 
    const activeBox = useRef();
    


    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link',
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link',
        },
        {
            label: 'Work',
            link: '#work',
            className: 'nav-link',
        },
        {
            label: 'Reviews',
            link: '#reviews',
            className: 'nav-link',
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden',
        }
    ];

    return (
        <nav className={'navbar'+ navOpen}>
            {
                navItems.map(({ label, link, className }) => (
                    <a
                        href={link}
                        key={link} 
                        className={`${className} ${activeLink === link ? 'active' : ''}`} 
                        onClick={() => setActiveLink(link)} 
                    >
                        {label}
                    </a>
                ))
            }
            <div className="active-box"
                ref={activeBox}
            ></div>
        </nav>
    );
};

Navber.prototype = {
    navOpen: PropTypes.bool.isRequired
}

export default Navber;
