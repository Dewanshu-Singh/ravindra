import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiAward, FiTarget, FiFlag, FiStar } from 'react-icons/fi';
import './Milestones.css';

const milestonesData = [
  {
    year: '2019',
    title: 'A Historic Victory at JNVU',
    description: 'Ravindra Singh Bhati created history at Jai Narain Vyas University by becoming the first independent candidate elected as President.',
    icon: <FiAward />,
    image: 'https://ravindrasinghbhati.com/wp-content/themes/ravsaa/assets/img/ravsa-jnvu-win.webp'
  },
  {
    year: '2022',
    title: 'The Second Historic Triumph',
    description: 'In the 2022 student elections, Ravindra Singh Bhati once again played a key role in securing a landmark win, strengthening his legacy of leadership.',
    icon: <FiStar />,
    image: 'https://ravindrasinghbhati.com/wp-content/themes/ravsaa/assets/img/2nd-victory-jnvu.webp'
  },
  {
    year: '2023',
    title: 'Historic Mandate in Sheo',
    description: 'In the 2023 Rajasthan Assembly elections, Ravindra Singh Bhati contested as an independent from Sheo (Barmer). With strong public support, he won with 79,495 votes.',
    icon: <FiTarget />,
    image: 'https://ravindrasinghbhati.com/wp-content/themes/ravsaa/assets/img/sheo-election-win.jpg'
  },
  {
    year: '2024',
    title: 'Independent Spirit, Historic Support',
    description: 'Contested as an independent from Barmer–Jaisalmer–Balotra Lok Sabha Constituency. Secured 586,500 votes, placing him among India’s top independent candidates.',
    icon: <FiFlag />,
    image: 'https://ravindrasinghbhati.com/wp-content/themes/ravsaa/assets/img/ravindra-singh-locksabha.jpg'
  }
];

const Card = ({ milestone, i, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="card-container">
      <motion.div 
        className="card-content"
        style={{ 
          scale, 
          top: `calc(${i * 40}px)`,
        }}
      >
        <div className="card-inner">
          <div className="card-text">
            <h2 className="timeline-year gradient-text">{milestone.year}</h2>
            <h3 className="timeline-title">{milestone.title}</h3>
            <p className="timeline-desc">{milestone.description}</p>
          </div>
          <div className="card-image-wrapper">
            <motion.img 
              style={{ scale: imageScale }}
              src={milestone.image} 
              alt={milestone.title} 
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Milestones = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section className="milestones-section section-padding" id="milestones" ref={container}>
      <div className="container">
        <div className="text-center mb-8 sticky-header">
          <span className="badge mb-2">Milestones</span>
          <h2 className="section-title">
            Leadership <span className="gradient-text">Journey</span>
          </h2>
        </div>

        <div className="cards-wrapper">
          {milestonesData.map((milestone, i) => {
            const targetScale = 1 - ( (milestonesData.length - i) * 0.05);
            return (
              <Card 
                key={i} 
                i={i} 
                milestone={milestone} 
                progress={scrollYProgress} 
                range={[i * 0.25, 1]} 
                targetScale={targetScale} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
