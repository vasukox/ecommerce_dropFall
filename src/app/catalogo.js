"use client";
import React from "react";
import ProductCard from "../components/ProductCard";

// Ejemplo de productos, puedes expandir este array
const products = [
  { name: "Monitor 4K", price: "$299", img: "/file.svg", description: "Resolución ultra alta y colores vibrantes." },
  { name: "Cámara Web HD", price: "$59", img: "/vercel.svg", description: "Videollamadas nítidas y fácil instalación." },
  { name: "Tablet Pro", price: "$399", img: "/window.svg", description: "Potencia y portabilidad para trabajar y jugar." },
  { name: "Impresora WiFi", price: "$89", img: "/next.svg", description: "Impresión rápida y conectividad inalámbrica." },
  { name: "Teclado Inalámbrico", price: "$49", img: "/vercel.svg", description: "Diseño compacto y batería de larga duración." },
  { name: "Mouse Gamer RGB", price: "$39", img: "/window.svg", description: "Precisión extrema y luces personalizables." },
  { name: "Auriculares Bluetooth", price: "$79", img: "/next.svg", description: "Sonido envolvente y cancelación de ruido." },
  { name: "Smart TV 50''", price: "$499", img: "/globe.svg", description: "Imagen 4K y apps integradas para streaming." },
  { name: "Cámara de Seguridad", price: "$69", img: "/file.svg", description: "Vigilancia inteligente con acceso remoto." },
  { name: "Router WiFi 6", price: "$129", img: "/vercel.svg", description: "Internet ultrarrápido y cobertura total." },
  { name: "SSD Externo 1TB", price: "$119", img: "/window.svg", description: "Almacenamiento portátil y velocidad máxima." },
];

export default function CatalogoPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white pt-24 px-4 md:px-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-purple-400">Catálogo completo</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </div>
  );
}
