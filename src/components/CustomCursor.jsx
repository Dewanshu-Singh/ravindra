import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' || 
        e.target.tagName === 'BUTTON' || 
        e.target.closest('a') || 
        e.target.closest('button') ||
        e.target.classList.contains('card') ||
        e.target.closest('.achievement-card') ||
        e.target.closest('.vertical-video-card') ||
        e.target.closest('.press-card') ||
        e.target.closest('.headline-card')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className={`custom-cursor-dot ${isHovering ? 'hovering' : ''}`}
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
      <motion.div
        className={`custom-cursor-outline ${isHovering ? 'hovering' : ''}`}
        animate={{ x: mousePosition.x - 20, y: mousePosition.y - 20 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.15 }}
      />
    </>
  );
};

export default CustomCursor;
