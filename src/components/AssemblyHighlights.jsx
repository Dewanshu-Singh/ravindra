import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiVideo, FiX } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './AssemblyHighlights.css';

const highlightVideos = [
  { id: 1, title: 'Assembly Speech 1', img: '/shorts1.png', ytId: 'vParm8K1JnA' },
  { id: 2, title: 'Assembly Speech 2', img: '/shorts2.png', ytId: 'wVPt6HJ-1wg' },
  { id: 3, title: 'Assembly Speech 3', img: '/shorts3.png', ytId: 'yAVkVdjMKHU' },
  { id: 4, title: 'Assembly Speech 4', img: '/shorts4.png', ytId: 'A_OKNtRk0hY' }
];

const AssemblyHighlights = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const openVideo = (ytId) => {
    setActiveVideoId(ytId);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setActiveVideoId(null);
    document.body.style.overflow = '';
  };

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
                <div 
                  className="vertical-video-card" 
                  style={{ display: 'block', cursor: 'pointer' }}
                  onClick={() => openVideo(video.ytId)}
                >
                  <div className="video-thumbnail-wrapper">
                    <img src={video.img} alt={video.title} />
                    <div className="play-button-overlay">
                      <div className="play-icon-circle">
                        <FiPlay />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideoId && (
          <motion.div 
            className="video-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
          >
            <motion.div 
              className="video-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="video-modal-close" onClick={closeVideo}>
                <FiX />
              </button>
              <div className="video-modal-iframe-container">
                <iframe 
                  src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`} 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AssemblyHighlights;
