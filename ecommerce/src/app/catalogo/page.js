"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";

const products = [
  { name: "Monitor 4K", price: "$299", img: "/file.svg", description: "Resolución ultra alta y colores vibrantes.", category: "Electrónica" },
  { name: "Cámara Web HD", price: "$59", img: "/vercel.svg", description: "Videollamadas nítidas y fácil instalación.", category: "Electrónica" },
  { name: "Tablet Pro", price: "$399", img: "/window.svg", description: "Potencia y portabilidad para trabajar y jugar.", category: "Electrónica" },
  { name: "Impresora WiFi", price: "$89", img: "/next.svg", description: "Impresión rápida y conectividad inalámbrica.", category: "Oficina" },
  { name: "Teclado Inalámbrico", price: "$49", img: "/vercel.svg", description: "Diseño compacto y batería de larga duración.", category: "Oficina" },
  { name: "Mouse Gamer RGB", price: "$39", img: "/window.svg", description: "Precisión extrema y luces personalizables.", category: "Gaming" },
  { name: "Auriculares Bluetooth", price: "$79", img: "/next.svg", description: "Sonido envolvente y cancelación de ruido.", category: "Electrónica" },
  { name: "Smart TV 50''", price: "$499", img: "/globe.svg", description: "Imagen 4K y apps integradas para streaming.", category: "Electrónica" },
  { name: "Cámara de Seguridad", price: "$69", img: "/file.svg", description: "Vigilancia inteligente con acceso remoto.", category: "Hogar" },
  { name: "Router WiFi 6", price: "$129", img: "/vercel.svg", description: "Internet ultrarrápido y cobertura total.", category: "Electrónica" },
  { name: "SSD Externo 1TB", price: "$119", img: "/window.svg", description: "Almacenamiento portátil y velocidad máxima.", category: "Electrónica" },
];

const categories = ["Todos", "Electrónica", "Oficina", "Gaming", "Hogar"];

export default function CatalogoPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const filtered = products.filter(p => {
    const matchCategory = category === "Todos" || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Productos destacados para el carrusel
  const featured = products.slice(0, 5);
  const [current, setCurrent] = useState(0);

  // Carrusel automático
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % featured.length);
    }, 3500);
    return () => clearTimeout(timer);
  }, [current, featured.length]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#18122B] via-[#393053] to-[#635985] text-white">
      <Navbar />
      <div className="pt-24 px-2 md:px-8">
        {/* Banner tipo cuadro con carrusel */}
        <div className="w-full max-w-5xl mx-auto mb-10 rounded-3xl bg-gradient-to-r from-purple-900 via-pink-700 to-blue-700 shadow-2xl flex flex-col md:flex-row items-center justify-between p-8 gap-8 relative">
          <div className="flex-1 flex flex-col justify-center items-start">
            <span className="uppercase text-xs font-bold text-pink-300 mb-2 tracking-widest">Producto destacado</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-white drop-shadow-lg">{featured[current].name}</h2>
            <p className="text-lg text-purple-100 mb-4 max-w-xl">{featured[current].description}</p>
            <span className="text-2xl font-bold text-pink-400 mb-4 block">{featured[current].price}</span>
            <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-3d hover:scale-110 transition-transform duration-300 animate-bounce-3d">
              Consíguelo ahora
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-64 h-64 rounded-2xl overflow-hidden flex items-center justify-center bg-[#23203A] shadow-lg border-2 border-purple-700/30">
              <img src={featured[current].img} alt={featured[current].name} className="object-contain w-40 h-40" />
            </div>
          </div>
          {/* Flechas manuales */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 text-white rounded-full shadow-lg p-2 hover:bg-white/40 transition"
            onClick={() => setCurrent((current - 1 + featured.length) % featured.length)}
            aria-label="Anterior"
            style={{ backdropFilter: 'blur(4px)' }}
          >
            &#8592;
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 text-white rounded-full shadow-lg p-2 hover:bg-white/40 transition"
            onClick={() => setCurrent((current + 1) % featured.length)}
            aria-label="Siguiente"
            style={{ backdropFilter: 'blur(4px)' }}
          >
            &#8594;
          </button>
        </div>
        {/* Filtros y grid de productos */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Buscar producto..."
            className="px-5 py-3 rounded-2xl bg-[#23203A] text-white focus:outline-none focus:ring-2 focus:ring-purple-500 w-full md:w-1/2 shadow-lg border border-purple-700/30"
          />
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 focus:outline-none shadow-lg
                  ${category === cat ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white scale-105 border-2 border-pink-400" : "bg-[#23203A] text-purple-200 hover:bg-purple-900/60 hover:text-white border border-purple-700/30"}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center text-lg text-gray-400">No se encontraron productos.</div>
          ) : (
            filtered.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
