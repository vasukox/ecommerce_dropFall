"use client";
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Section({ id, title, children }) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  // Alternar fondo entre negro y blanco para contraste
  const bgClass = 'bg-black text-white';

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`min-h-screen flex flex-col justify-center items-center snap-start py-20 ${bgClass}`}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-purple-400 mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >
        {title}
      </motion.h2>
      <div className="w-full max-w-6xl flex flex-wrap justify-center gap-8">
        {children}
      </div>
    </motion.section>
  );
}
