import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import EventLogos from './components/EventLogos';
import AboutSection from './components/AboutSection';
import Milestones from './components/Milestones';
import EventsCarousel from './components/EventsCarousel';
import Achievements from './components/Achievements';
import AssemblyHighlights from './components/AssemblyHighlights';
import PressCoverage from './components/PressCoverage';
import Headlines from './components/Headlines';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './index.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="app-container">
      <CustomCursor />
      <motion.div 
        className="scroll-progress-bar" 
        style={{ scaleX }} 
      />
      <Navbar />
      <main>
        <Hero3D />
        <div className="sections-bg-wrapper">
          <EventLogos />
          <AboutSection />
          <Milestones />
          <EventsCarousel />
          <Achievements />
          <PressCoverage />
          <Headlines />
          <AssemblyHighlights />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
