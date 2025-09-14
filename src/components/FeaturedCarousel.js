"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "Auriculares Pro",
    price: "$99",
    img: "/vercel.svg",
    description: "Sonido envolvente y batería de larga duración.",
    specs: ["Bluetooth 5.2", "Cancelación de ruido", "20h batería", "Carga rápida"],
  },
  {
    name: "Teclado Mecánico RGB",
    price: "$129",
    img: "/window.svg",
    description: "Iluminación personalizable y switches premium.",
    specs: ["Switches Red/Blue", "RGB 16M colores", "Anti-ghosting", "USB-C"],
  },
  {
    name: "Smartwatch X",
    price: "$149",
    img: "/next.svg",
    description: "Monitor de salud y notificaciones inteligentes.",
    specs: ["Pantalla AMOLED", "GPS integrado", "Resistente al agua", "Notificaciones"],
  },
  {
    name: "Altavoz Bluetooth",
    price: "$79",
    img: "/globe.svg",
    description: "Sonido potente y diseño portátil.",
    specs: ["Bass Boost", "12h batería", "Resistente al agua", "Manos libres"],
  },
  {
    name: "Monitor UltraWide",
    price: "$349",
    img: "/file.svg",
    description: "Pantalla curva 34'' para máxima productividad y gaming.",
    specs: ["144Hz", "HDR10", "Curvo", "USB-C"],
  },
  {
    name: "Tablet Creativa",
    price: "$259",
    img: "/window.svg",
    description: "Ideal para diseño gráfico y edición de fotos.",
    specs: ["Stylus incluido", "Pantalla 2K", "8GB RAM", "Android 13"],
  },
  {
    name: "Cámara Deportiva 4K",
    price: "$179",
    img: "/next.svg",
    description: "Graba tus aventuras con calidad profesional y resistencia extrema.",
    specs: ["4K 60fps", "Sumergible", "WiFi", "Control remoto"],
  },
];

export default function FeaturedCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % products.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[500px] relative">
      {/* Fondo animado extra */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0.3, scale: 1 }}
        animate={{ opacity: 0.5, scale: 1.04 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        style={{ background: "radial-gradient(circle at 60% 40%, #a855f7 0%, #000 80%)", filter: "blur(60px)" }}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={products[index].name}
          initial={{ opacity: 0, scale: 0.92, y: 60, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0, boxShadow: "0 0 60px #a855f7, 0 0 120px #000" }}
          exit={{ opacity: 0, scale: 0.92, y: -60, rotate: 3 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-gradient-to-br from-black via-purple-950 to-black rounded-3xl shadow-3d p-12 flex flex-col items-center w-full max-w-2xl mx-auto border-4 border-pink-500/40 relative z-10"
        >
          <motion.div
            className="w-36 h-36 mb-8 flex items-center justify-center"
            initial={{ scale: 0.8, rotate: -8 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image src={products[index].img} alt={products[index].name} width={130} height={130} className="drop-shadow-2xl" />
          </motion.div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-pink-400 mb-2 text-center drop-shadow-lg animate-pulse">{products[index].name}</h3>
          <span className="text-3xl font-bold text-purple-400 mb-4 drop-shadow">{products[index].price}</span>
          <p className="text-gray-200 text-lg mb-6 text-center font-medium">{products[index].description}</p>
          <ul className="mb-8 text-base text-purple-200 flex flex-wrap justify-center gap-4">
            {products[index].specs.map((spec, i) => (
              <li key={i} className="bg-purple-900/60 px-4 py-2 rounded-full border border-pink-500/30 shadow-md font-semibold">{spec}</li>
            ))}
          </ul>
          <motion.button
            className="px-10 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-extrabold text-xl shadow-3d hover:scale-105 transition-transform duration-300 animate-bounce-3d"
            whileHover={{ scale: 1.08, boxShadow: "0 0 40px #a855f7" }}
            whileTap={{ scale: 0.97 }}
          >
            Comprar
          </motion.button>
        </motion.div>
      </AnimatePresence>
      <div className="flex gap-3 mt-10 z-10">
        {products.map((_, i) => (
          <button
            key={i}
            className={`w-5 h-5 rounded-full border-2 border-pink-500 transition-all duration-300 ${i === index ? "bg-purple-500 scale-125" : "bg-purple-900"}`}
            onClick={() => setIndex(i)}
            aria-label={`Ver producto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
