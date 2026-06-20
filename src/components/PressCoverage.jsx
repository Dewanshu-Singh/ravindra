import React from 'react';
import { motion } from 'framer-motion';
import { FiZoomIn, FiArrowRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './PressCoverage.css';

const newsItems = [
  { id: 1, date: 'Dec 2025', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop' },
  { id: 2, date: 'Dec 2025', img: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600&h=400&fit=crop' },
  { id: 3, date: 'Dec 2025', img: 'https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=600&h=400&fit=crop' },
  { id: 4, date: 'Dec 2025', img: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=600&h=400&fit=crop' },
  { id: 5, date: 'Dec 2025', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop' }
];

const PressCoverage = () => {
  return (
    <section className="press-section section-padding">
      <div className="container">
        <div className="mb-8">
          <span className="badge mb-2">Press Coverage</span>
          <h2 className="section-title">
            From The <span className="gradient-text">Newspapers</span>
          </h2>
        </div>

        <motion.div 
          className="press-swiper-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
          }}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1.5 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 }
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: false,
            }}
            navigation={true}
            modules={[EffectCoverflow, Navigation, Pagination]}
            className="press-swiper"
          >
            {newsItems.map((news) => (
              <SwiperSlide key={news.id} className="press-slide">
                <div className="press-card">
                  <div className="press-img-wrapper">
                    <img src={news.img} alt={`Newspaper ${news.id}`} />
                    <div className="press-overlay">
                      <FiZoomIn className="zoom-icon" />
                    </div>
                  </div>
                  <div className="press-date-badge">
                    {news.date}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        
        <div className="text-right mt-6">
          <a href="#" className="view-all-link">
            View All <FiArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PressCoverage;
