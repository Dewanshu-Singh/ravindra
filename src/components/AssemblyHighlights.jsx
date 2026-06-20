import React from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiVideo } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './AssemblyHighlights.css';

const highlightVideos = [
  { id: 1, title: 'Assembly Speech 1', img: 'https://img.youtube.com/vi/vParm8K1JnA/hqdefault.jpg', url: 'https://youtu.be/vParm8K1JnA' },
  { id: 2, title: 'Assembly Speech 2', img: 'https://img.youtube.com/vi/wVPt6HJ-1wg/hqdefault.jpg', url: 'https://youtu.be/wVPt6HJ-1wg' },
  { id: 3, title: 'Assembly Speech 3', img: 'https://img.youtube.com/vi/yAVkVdjMKHU/hqdefault.jpg', url: 'https://youtu.be/yAVkVdjMKHU' },
  { id: 4, title: 'Assembly Speech 4', img: 'https://img.youtube.com/vi/A_OKNtRk0hY/hqdefault.jpg', url: 'https://youtu.be/A_OKNtRk0hY' },
  { id: 5, title: 'Assembly Speech 1', img: 'https://img.youtube.com/vi/vParm8K1JnA/hqdefault.jpg', url: 'https://youtu.be/vParm8K1JnA' },
  { id: 6, title: 'Assembly Speech 2', img: 'https://img.youtube.com/vi/wVPt6HJ-1wg/hqdefault.jpg', url: 'https://youtu.be/wVPt6HJ-1wg' }
];

const AssemblyHighlights = () => {
  return (
    <section className="assembly-section section-padding">
      <div className="container">
        <div className="section-header-flex">
          <div>
            <span className="badge mb-2">Voice of the People</span>
            <h2 className="section-title">
              Assembly <span className="gradient-text">Highlights</span>
            </h2>
          </div>
          <button className="primary-btn view-all-btn">
            View All Videos <FiVideo className="ml-2" />
          </button>
        </div>

        <motion.div 
          className="assembly-swiper-container"
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
            className="highlight-swiper"
          >
            {highlightVideos.map((video) => (
              <SwiperSlide key={video.id} className="highlight-slide">
                <a href={video.url} target="_blank" rel="noopener noreferrer" className="vertical-video-card" style={{ display: 'block' }}>
                  <div className="video-thumbnail-wrapper">
                    <img src={video.img} alt={video.title} />
                    <div className="play-button-overlay">
                      <div className="play-icon-circle">
                        <FiPlay />
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default AssemblyHighlights;
