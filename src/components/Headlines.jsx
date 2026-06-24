import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiArrowRight } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Headlines.css';

const headlineVideos = [
  { id: 1, title: 'Headline 1', img: 'https://img.youtube.com/vi/AmNUz3YbHzc/maxresdefault.jpg', url: 'https://youtu.be/AmNUz3YbHzc' },
  { id: 2, title: 'Headline 2', img: 'https://img.youtube.com/vi/ZvVhJHr1P2c/maxresdefault.jpg', url: 'https://youtu.be/ZvVhJHr1P2c' },
  { id: 3, title: 'Headline 3', img: 'https://img.youtube.com/vi/k5CZIjlWWD0/maxresdefault.jpg', url: 'https://youtu.be/k5CZIjlWWD0' },
  { id: 4, title: 'Headline 4', img: 'https://img.youtube.com/vi/3s9yMGFipg0/maxresdefault.jpg', url: 'https://youtu.be/3s9yMGFipg0' },
  { id: 5, title: 'Headline 5', img: 'https://img.youtube.com/vi/JE_67bm4ogs/maxresdefault.jpg', url: 'https://youtu.be/JE_67bm4ogs' }
];

const Headlines = () => {
  const [playingId, setPlayingId] = useState(null);
  const [swiperRef, setSwiperRef] = useState(null);

  const handlePlayClick = (id) => {
    setPlayingId(id);
    if (swiperRef && swiperRef.autoplay) {
      swiperRef.autoplay.stop();
    }
  };

  const handleSlideChange = () => {
    setPlayingId(null);
    if (swiperRef && swiperRef.autoplay && !swiperRef.autoplay.running) {
      swiperRef.autoplay.start();
    }
  };

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
            onSwiper={setSwiperRef}
            slidesPerView={1}
            spaceBetween={30}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[Navigation, Pagination, Autoplay]}
            className="headlines-swiper single-player-swiper"
            onSlideChange={handleSlideChange}
          >
            {headlineVideos.map((video) => {
              const videoId = video.url.split('/').pop();
              return (
                <SwiperSlide key={video.id} className="headlines-slide single-slide">
                  <div className="headline-card-wrapper">
                    {playingId === video.id ? (
                      <div className="headline-video-container">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : (
                      <div className="headline-card" onClick={() => handlePlayClick(video.id)}>
                        <div className="headline-thumbnail-wrapper">
                          <img src={video.img} alt={video.title} />
                          <div className="play-button-overlay">
                            <div className="play-icon-circle-small">
                              <FiPlay />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
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
