import React from 'react';
import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
              alt="Emblem of India" 
              className="footer-emblem" 
            />
            <h2 className="footer-title">RAVINDRA SINGH BHATI</h2>
          </div>
          
          <p className="footer-description">
            Ravindra Singh Bhati is a fearless advocate for student rights, education reform, and women's empowerment. As a strong voice of youth, he champions rural development, inclusive growth, and justice for all. His journey reflects an unwavering commitment to addressing issues at the grassroots level and driving meaningful social change.
          </p>

          <div className="footer-socials">
            <a href="#" className="social-icon"><FiInstagram /></a>
            <a href="#" className="social-icon"><FiFacebook /></a>
            <a href="#" className="social-icon"><FiYoutube /></a>
            <a href="#" className="social-icon">
              {/* Custom X logo since it might not be in standard react-icons/fi */}
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="4" x2="20" y2="20"></line>
                <line x1="20" y1="4" x2="4" y2="20"></line>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Ravindra Singh Bhati. All rights reserved. | Designed by NeoIT Solution Associated By Apnaayat</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
