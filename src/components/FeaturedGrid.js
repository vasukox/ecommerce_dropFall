"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Hollow Knight: Silksong",
  img: "/placeholder.svg",
    description: "La secuela del galardonado juego de acción y aventura",
    tag: "ULTIMATE · PC",
    link: "#",
    highlight: "EXPLORA",
    color: "text-green-400",
  },
  {
    name: "Dragon Age™: The Veilguard",
  img: "/placeholder.svg",
    description: "Desafía a los dioses y salva un mundo maltratado",
    tag: "ULTIMATE · PC",
    link: "#",
    highlight: "EXPLORA",
    color: "text-green-400",
  },
  {
    name: "Gears of War: Reloaded",
  img: "/placeholder.svg",
    description: "El icónico original, fielmente renovado",
    tag: "ULTIMATE · PC",
    link: "#",
    highlight: "EXPLORA",
    color: "text-green-400",
  },
  {
    name: "Starfield",
  img: "/placeholder.svg",
    description: "Explora el universo y descubre nuevos mundos en esta épica aventura espacial.",
    tag: "ULTIMATE · PC",
    link: "#",
    highlight: "EXPLORA",
    color: "text-green-400",
  },
  {
    name: "Forza Horizon 5",
  img: "/placeholder.svg",
    description: "Vive la experiencia de carreras más espectacular en México.",
    tag: "ULTIMATE · PC",
    link: "#",
    highlight: "EXPLORA",
    color: "text-green-400",
  },
  {
    name: "Minecraft Legends",
  img: "/placeholder.svg",
    description: "Defiende el mundo de Minecraft en una nueva aventura estratégica.",
    tag: "ULTIMATE · PC",
    link: "#",
    highlight: "EXPLORA",
    color: "text-green-400",
  },
];

export default function FeaturedGrid() {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPrevIndex(index);
      setIndex((i) => (i + 1) % products.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[700px] py-10 relative">
      {/* Producto anterior difuminado */}
      {prevIndex !== null && (
        <motion.div
          key={products[prevIndex].name + "-blur"}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 0.5, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl min-h-[600px] z-0 pointer-events-none"
          style={{ filter: "blur(16px) brightness(0.7)" }}
        >
          <Image
            src={products[prevIndex].img}
            alt={products[prevIndex].name}
            fill
            className="object-cover rounded-3xl"
          />
        </motion.div>
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={products[index].name}
          initial={{ opacity: 0, scale: 0.96, x: 80 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.96, x: -80 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative rounded-3xl overflow-hidden shadow-3d bg-gradient-to-br from-black via-purple-950 to-black border-4 border-purple-700/40 flex flex-col justify-end min-h-[600px] w-full max-w-3xl mx-auto z-10"
        >
          <div className="absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-purple-800">
            <svg width="160" height="160" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-400 opacity-80">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="relative z-10 p-12 flex flex-col justify-end h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <span className="text-xs font-bold px-3 py-1 rounded bg-black/60 text-gray-200 mb-2 w-fit">{products[index].tag}</span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 drop-shadow-lg">{products[index].name}</h3>
            <p className="text-base text-gray-200 mb-4 font-medium drop-shadow">{products[index].description}</p>
            <a href={products[index].link} className={`font-bold ${products[index].color} text-sm hover:underline w-fit`}>{products[index].highlight} &rarr;</a>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3 mt-8 z-20">
        {products.map((_, i) => (
          <button
            key={i}
            className={`w-5 h-5 rounded-full border-2 border-green-400 transition-all duration-300 ${i === index ? "bg-purple-500 scale-125" : "bg-purple-900"}`}
            onClick={() => {
              setPrevIndex(index);
              setIndex(i);
            }}
            aria-label={`Ver producto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
