"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const banner = {
  title: "ESTE SEPTIEMBRE EN GAMING",
  subtitle: "Descubre los lanzamientos más esperados y las novedades del mundo gaming.",
  img: "/gaming-banner.jpg",
};

const games = [
  {
    name: "Nuevos lanzamientos",
    description: "Conoce los mejores títulos nuevos de este mes, como Borderlands 4.",
    img: "/borderlands.jpg",
  },
  {
    name: "Gaming Indies",
    description: "Descubre los lanzamientos indie más emocionantes y especiales de este mes, como Hollow Knight: Silksong.",
    img: "/silksong.jpg",
  },
  {
    name: "Últimas novedades",
    description: "Mantente al día con los eventos nuevos más importantes de este mes, como la actualización Tierras sin Ley de Helldivers 2.",
    img: "/helldivers.jpg",
  },
];

export default function GamingShowcase() {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  return (
    <motion.div
      id="gaming-showcase"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col items-center justify-center py-6"
    >
      {/* Banner principal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative w-full max-w-5xl h-64 md:h-80 rounded-3xl overflow-hidden mb-6 flex items-center justify-start bg-gradient-to-r from-purple-900 via-pink-700 to-red-700"
      >
        <Image src={banner.img} alt={banner.title} fill className="object-cover absolute inset-0 z-0 opacity-80" />
        <div className="relative z-10 p-10 md:p-16 flex flex-col justify-center h-full">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">{banner.title}</h2>
          <p className="text-lg md:text-xl text-white/80 mb-2 font-medium drop-shadow">{banner.subtitle}</p>
        </div>
      </motion.div>
      {/* Galería de juegos */}
  <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
            className="rounded-2xl overflow-hidden shadow-3d bg-gradient-to-br from-black via-purple-950 to-black flex flex-col min-h-[260px]"
          >
            <div className="relative w-full h-40">
              <Image src={game.img} alt={game.name} fill className="object-cover" />
            </div>
            <div className="p-6 flex flex-col justify-start">
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{game.name}</h3>
              <p className="text-base text-gray-200 mb-2 font-medium drop-shadow">{game.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
