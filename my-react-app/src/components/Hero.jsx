import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import newBg from '../assets/new bg.jpg';

// Add Playfair Display font from Google Fonts in index.html or via @import in CSS

const quotes = [
  {
    text: 'Excellence on the ground is what keeps excellence in the air.',
    className: 'text-3xl md:text-5xl font-bold drop-shadow-lg bg-gradient-to-r from-fuchsia-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent font-serif',
  },
  {
    text: '"Aviation is proof that given the will, we have the capacity to achieve the impossible."',
    className: 'text-2xl md:text-4xl font-semibold drop-shadow-lg bg-gradient-to-r from-cyan-400 via-emerald-400 to-lime-300 bg-clip-text text-transparent font-serif',
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 3500);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section
      className="relative w-full min-h-[60vh] flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${newBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Animated floating shape */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full opacity-30 blur-2xl z-0"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Lighter blue-to-white gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #60a5fa 0%, #fff 90%)',
          opacity: 0.45,
        }}
      ></div>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-40 z-0"></div>
      {/* 3D Flip Quotes */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            className={quotes[index].className}
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.8 }}
            style={{ perspective: 800 }}
          >
            {quotes[index].text}
          </motion.h1>
        </AnimatePresence>
      </div>
      {/* Scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center animate-bounce">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
} 