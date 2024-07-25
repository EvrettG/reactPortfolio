import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <a href="https://github.com/EvrettG" target="_blank" rel="noopener noreferrer" className="footer-icon">
                    <FaGithub size={30} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                    <FaLinkedin size={30} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                    <FaTwitter size={30} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;