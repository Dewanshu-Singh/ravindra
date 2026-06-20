import React from 'react';
import './EventLogos.css';

const logos = [
  { img: 'https://ravindrasinghbhati.com/wp-content/uploads/2025/11/vidhansabha-gheraw.webp', alt: 'Vidhansabha Gherav' },
  { img: 'https://ravindrasinghbhati.com/wp-content/uploads/2025/11/khejadibachao.jpg', alt: 'Khejadi Bachao' },
  { img: 'https://ravindrasinghbhati.com/wp-content/uploads/2025/11/oran.webp', alt: 'Oran Bachao' },
  { img: 'https://ravindrasinghbhati.com/wp-content/uploads/2025/11/sheo-jan-samman.webp', alt: 'Jan Samman Padyatra' },
  { img: 'https://ravindrasinghbhati.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-19-at-12.44.07_7370dcd8.jpg', alt: 'Jan Samvad Yatra' },
  { img: 'https://ravindrasinghbhati.com/wp-content/uploads/2025/11/run-registan.webp', alt: 'Run for Registan' },
  { img: 'https://ravindrasinghbhati.com/wp-content/uploads/2025/11/govansh.webp', alt: 'Govansh Bachao' },
  { img: 'https://ravindrasinghbhati.com/wp-content/uploads/2026/04/b6835b3a-5999-4735-9443-b6f14aaf4718-768x431-2.jpg', alt: 'NEEV' },
  { img: 'https://ravindrasinghbhati.com/wp-content/uploads/2025/11/rohidi-festival-2.webp', alt: 'Grand Rohidi Music Festival' },
];

const EventLogos = () => {
  return (
    <div className="event-logos-wrapper">
      <div className="event-logos-track">
        {/* Render the logos twice for seamless infinite scrolling */}
        {[...logos, ...logos].map((item, index) => (
          <div className="logo-item" key={index}>
            <img src={item.img} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventLogos;
