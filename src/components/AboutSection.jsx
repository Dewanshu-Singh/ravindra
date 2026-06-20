import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="image-backdrop gradient-bg"></div>
            {/* We use a placeholder image URL or a stylistic glass card here since we don't have the real image locally */}
            <div className="about-image glass-panel">
              <img 
                src="https://ravindrasinghbhati.com/wp-content/themes/ravsaa/assets/img/ravsa-about-img.webp" 
                alt="Ravindra Singh Bhati" 
                className="img-fluid"
              />
            </div>
          </motion.div>

          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          >
            <span className="badge">Ravindra Singh Bhati</span>
            <h2 className="section-title mt-4 mb-4">
              Meet Ravsa – The <span className="gradient-text">Voice of the People</span>
            </h2>
            <p className="text-secondary mb-4">
              Ravindra Singh Bhati was born in Dudhora village, nestled in the heart of Rajasthan’s Barmer district.
            </p>
            <p className="text-secondary mb-4">
              His father, Shaitan Singh Bhati, served as a school teacher, instilling in him the importance of education, discipline, and integrity. His mother, Ashok Kanwar, played a pivotal role in nurturing tradition, resilience, and cultural pride.
            </p>
            <p className="text-secondary mb-8">
              Driven by a sincere dedication to community welfare and guided by an enduring sense of responsibility, Bhati has emerged as a dynamic figure—one who blends youthful energy with grassroots understanding. His journey stands as a testament to the belief that strong roots and sincere intent can bring about meaningful change.
            </p>
            
            <a href="#more" className="btn-secondary">
              Know More About
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
