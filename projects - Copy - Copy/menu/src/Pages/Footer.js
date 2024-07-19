import React from 'react';
import '../App.css'; // Ensure this file contains your styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="path/to/logo.png" alt="Lifescience" />
          <p>Lifescience</p>
        </div>
        <div className="footer-info">
          <p>Lifescience Technologies Private Limited</p>
          <p>Clinic: No.1s, 2nd Floor, Gopalapuram 1st St, Gopalapuram, Chennai, 600086.</p>
        </div>
        <div className="footer-contact">
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <p>support@lifescience.com</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} size="lg" />
            <p>+91 99899 98989</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faGlobe} size="lg" />
            <p>www.lifescience.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
