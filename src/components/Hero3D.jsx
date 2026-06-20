import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './Hero3D.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-canvas-container">
        {/* Replaced 3D sphere with a clean animated gradient background via CSS */}
      </div>

      <div className="container hero-content">
        <div className="hero-grid">
          <div className="hero-text-wrapper">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hero-subtitle"
            >
              Ravindra Singh Bhati
            </motion.h4>
            
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.3
                  }
                }
              }}
              className="hero-title"
            >
              <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>New </motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="gradient-text">Voice.</motion.span> <br />
              <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>New </motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="gradient-text">Vision.</motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hero-description"
            >
              Youngest MLA of the Rajasthan Legislative Assembly. 
              A dynamic figure blending youthful energy with grassroots understanding.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hero-cta"
            >
              <a href="#join" className="btn-primary">
                Join Our Mission <FiArrowRight />
              </a>
            </motion.div>
          </div>

          <motion.div 
            className="hero-image-wrapper"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
          >
            <div className="hero-image-backdrop gradient-bg"></div>
            <motion.img 
              src="/herosection.png" 
              alt="Ravindra Singh Bhati" 
              className="hero-img"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
