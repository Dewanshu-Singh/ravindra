import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiStar, FiHeart, FiTarget } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Achievements.css';

const achievementsData = [
  {
    title: 'Reopened Hepson & Tepson center',
    desc: 'Reopened the largest study center for physically challenged students in Western Rajasthan.',
    icon: <FiBookOpen size={32} />
  },
  {
    title: 'Top Cleanliness Award for JNVU',
    desc: 'Led JNVU to be recognized as one of the best universities in the Swachh Bharat Campaign.',
    icon: <FiStar size={32} />
  },
  {
    title: 'Free Admissions for Underprivileged',
    desc: 'Enabled free university admissions for the orphans and children of army personnel.',
    icon: <FiHeart size={32} />
  },
  {
    title: 'National-Level Shooting Athlete',
    desc: 'Achieved recognition as a national-level shooting player.',
    icon: <FiTarget size={32} />
  },
  {
    title: 'Youth Empowerment Initiative',
    desc: 'Organized state-level sports and cultural events for youth engagement.',
    icon: <FiStar size={32} />
  },
  {
    title: 'Digital Literacy Program',
    desc: 'Started digital literacy campaigns in rural Barmer.',
    icon: <FiBookOpen size={32} />
  }
];

const Achievements = () => {
  return (
    <section className="achievements-section section-padding" id="achievements">
      <div className="container">
        <div className="text-center mb-8">
          <span className="badge mb-2">Achievements</span>
          <h2 className="section-title">
            Impactful <span className="gradient-text">Milestone</span>
          </h2>
        </div>

        <motion.div 
          className="achievements-swiper-container"
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
            className="achievements-swiper"
          >
            {achievementsData.map((item, index) => (
              <SwiperSlide key={index} className="achievements-slide">
                <div 
                  className="achievement-card glass-panel"
                >
                  <div className="achievement-icon">
                    {item.icon}
                  </div>
                  <h4 className="achievement-title">{item.title}</h4>
                  <p className="achievement-desc">{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
