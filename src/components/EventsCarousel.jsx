import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import './EventsCarousel.css';

const eventsData = [
  {
    title: 'NEEV',
    desc: 'The NEEV Initiative is a grassroots educational movement focused on building a strong foundation for students...',
    img: 'https://ravindrasinghbhati.com/wp-content/uploads/2026/04/b6835b3a-5999-4735-9443-b6f14aaf4718-768x431-2.jpg'
  },
  {
    title: 'Grand Rohidi Music Festival',
    desc: 'An Unprecedented Confluence of Art, Culture, and Tourism Overview On the occasion of Youth Day in 2025...',
    img: 'https://ravindrasinghbhati.com/wp-content/uploads/2025/11/rohidi-festival-2.webp'
  },
  {
    title: 'Vidhansabha Gherav',
    desc: 'During the COVID pandemic, when colleges and universities remained closed, students across Rajasthan were still forced to pay unjust fees.',
    img: 'https://ravindrasinghbhati.com/wp-content/uploads/2025/11/vidhansabha-gheraw.webp'
  },
  {
    title: 'Khejadi Bachao Abhiyan',
    desc: 'A Strong Initiative for Desert Conservation MLA Ravindra Singh Bhati has launched an impactful movement to protect the Khejdi tree.',
    img: 'https://ravindrasinghbhati.com/wp-content/uploads/2025/11/khejadibachao.jpg'
  },
  {
    title: 'Oran Bachao Initiative',
    desc: 'The Oran Bachao Initiative is a grassroots movement dedicated to protecting Rajasthan’s Orans — community-conserved sacred groves.',
    img: 'https://ravindrasinghbhati.com/wp-content/uploads/2025/11/oran.webp'
  }
];

const EventsCarousel = () => {
  const carouselRef = useRef(null);
  const [scrollAmount, setScrollAmount] = useState(0);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="events-section section-padding" id="events">
      <div className="container">
        <div className="events-header">
          <div>
            <span className="badge mb-2">Ravindra's Story of Change</span>
            <h2 className="section-title">
              Steps Towards Change - <span className="gradient-text">Events</span>
            </h2>
          </div>
          <div className="carousel-controls">
            <button className="control-btn glass-panel" onClick={scrollLeft}><FiArrowLeft size={20} /></button>
            <button className="control-btn glass-panel" onClick={scrollRight}><FiArrowRight size={20} /></button>
          </div>
        </div>

        <div className="carousel-container" ref={carouselRef}>
          {eventsData.map((event, index) => (
            <motion.div 
              className="event-card glass-panel"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
            >
              <div className="event-img">
                <img src={event.img} alt={event.title} />
              </div>
              <div className="event-content">
                <h4 className="event-title">{event.title}</h4>
                <p className="event-desc">{event.desc}</p>
                <a href="#readmore" className="read-more">
                  Read More <FiArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;
