import React from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiArrowRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Headlines.css';

const headlineVideos = [
  { id: 1, title: 'Headline 1', img: 'https://img.youtube.com/vi/XobA5Yawdt8/maxresdefault.jpg', url: 'https://youtu.be/XobA5Yawdt8' },
  { id: 2, title: 'Headline 2', img: 'https://img.youtube.com/vi/MYvmS-1kSSI/maxresdefault.jpg', url: 'https://youtu.be/MYvmS-1kSSI' },
  { id: 3, title: 'Headline 3', img: 'https://img.youtube.com/vi/HEyqztqG-WA/maxresdefault.jpg', url: 'https://youtu.be/HEyqztqG-WA' },
  { id: 4, title: 'Headline 4', img: 'https://img.youtube.com/vi/XobA5Yawdt8/maxresdefault.jpg', url: 'https://youtu.be/XobA5Yawdt8' },
  { id: 5, title: 'Headline 5', img: 'https://img.youtube.com/vi/MYvmS-1kSSI/maxresdefault.jpg', url: 'https://youtu.be/MYvmS-1kSSI' },
  { id: 6, title: 'Headline 6', img: 'https://img.youtube.com/vi/HEyqztqG-WA/maxresdefault.jpg', url: 'https://youtu.be/HEyqztqG-WA' }
];

const Headlines = () => {
  return (
    <section className="headlines-section section-padding">
      <div className="container">
        <div className="mb-8">
          <span className="badge mb-2">News & Coverage</span>
          <h2 className="section-title">
            In The <span className="gradient-text">Headlines</span>
          </h2>
        </div>

        <motion.div 
          className="headlines-swiper-container"
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
            className="headlines-swiper"
          >
            {headlineVideos.map((video) => (
              <SwiperSlide key={video.id} className="headlines-slide">
                <a href={video.url} target="_blank" rel="noopener noreferrer" className="headline-card" style={{ display: 'block' }}>
                  <div className="headline-thumbnail-wrapper">
                    <img src={video.img} alt={video.title} />
                    <div className="play-button-overlay">
                      <div className="play-icon-circle-small">
                        <FiPlay />
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="text-right mt-6">
          <a href="#" className="view-all-link-orange">
            View All <FiArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Headlines;
