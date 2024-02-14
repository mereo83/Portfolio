import React, { useState } from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('blog');

    const handleNavLinkClick = (section) => {
        setActiveLink(section);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={`nav-item ${activeLink === 'blog' ? 'active' : ''}`}>
                            <a className="nav-link" href="#blog" onClick={() => handleNavLinkClick('blog')}>Blog</a>
                        </li>
                        <li className={`nav-item ${activeLink === 'portfolio' ? 'active' : ''}`}>
                            <a className="nav-link" href="#portfolio" onClick={() => handleNavLinkClick('portfolio')}>Portfolio</a>
                        </li>
                        <li className={`nav-item ${activeLink === 'skills' ? 'active' : ''}`}>
                            <a className="nav-link" href="#skills" onClick={() => handleNavLinkClick('skills')}>Skills</a>
                        </li>
                        <li className={`nav-item ${activeLink === 'contact' ? 'active' : ''}`}>
                            <a className="nav-link" href="#contact" onClick={() => handleNavLinkClick('contact')}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
