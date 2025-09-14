"use client";
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CartContext } from './CartContext';

export default function ProductCard({ name, price, img, description }) {
  const { addToCart } = useContext(CartContext);
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-3d p-6 flex flex-col items-center min-h-[340px] hover:scale-105 transition-transform duration-300 border-2 border-purple-700/30 w-full max-w-xs sm:w-72"
      initial={{ opacity: 0, scale: 0.99, y: 7 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.38, ease: 'easeOut' }}
    >
      <div className="w-20 h-20 mb-4 flex items-center justify-center">
        <Image src={img} alt={name} width={80} height={80} className="drop-shadow-lg" />
      </div>
      <h3 className="text-xl font-bold text-purple-400 mb-2 text-center">{name}</h3>
      <p className="text-gray-300 text-sm mb-4 text-center">{description}</p>
      <span className="text-lg font-semibold text-pink-400 mb-4">{price}</span>
      <button 
        className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-3d hover:scale-110 transition-transform duration-300 animate-bounce-3d"
        onClick={() => addToCart({ name, price, img, description })}
      >
        Comprar
      </button>
    </motion.div>
  );
}
