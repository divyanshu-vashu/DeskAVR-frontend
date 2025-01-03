import React from 'react';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Social media icons
import '../stylesheets/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} SpectoVX Assistive Tech Pvt Ltd. All rights reserved.
          </p>
        </div>
        <div className="footer-right">
          <a href="https://www.linkedin.com/company/specto-v/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/spectov_official/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="mailto:deskavr.spectov@gmail.com" className="social-icon">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
