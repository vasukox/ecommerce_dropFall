"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      className="relative h-screen flex flex-col justify-center items-center text-center bg-black snap-start overflow-hidden" id="hero"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* GIF glitch background */}
      <Image
        src="/glitch.gif"
        alt="Glitch background"
        width={1920}
        height={1080}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40 blur-sm"
        draggable={false}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold text-purple-400 drop-shadow-lg mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Elevate Your Tech
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Discover the latest in cutting-edge technology and accessories.<br />Shop now and redefine your digital world.
        </motion.p>
        <motion.button
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xl shadow-3d hover:scale-105 transition-transform duration-300 animate-bounce-3d"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Shop Now
        </motion.button>
      </div>
    </motion.section>
  );
}
