"use client";
import React from "react";

const accessories = [
  {
    name: "The Rogue Prince of Persia",
    description: "Da forma a tu leyenda en este roguelite de acción de ritmo rápido.",
    tag: "DISPONIBLE AHORA",
    highlight: "CONSIGUELO AHORA",
    color: "bg-yellow-400 text-black",
    bg: "bg-gradient-to-br from-yellow-900 via-yellow-700 to-purple-900",
  },
  {
    name: "Call Of Duty®: Black Ops 6 - Season 05",
    description: "Echa un vistazo al evento Atomic Block Party en la temporada de recarga.",
    tag: "DISPONIBLE CON GAME PASS",
    highlight: "CONSIGUELO AHORA",
    color: "bg-yellow-400 text-black",
    bg: "bg-gradient-to-br from-gray-900 via-yellow-700 to-yellow-900",
  },
  {
    name: "Delta Force",
    description: "Sumérgete ahora en los modos extracción, guerra y campaña.",
    tag: "DISPONIBLE AHORA",
    highlight: "CONSIGUELO AHORA",
    color: "bg-yellow-400 text-black",
    bg: "bg-gradient-to-br from-gray-900 via-gray-700 to-yellow-900",
  },
  {
    name: "Hell is Us",
    description: "Navega por Hekla mediante la exploración, la investigación y el combate.",
    tag: "DISPONIBLE AHORA",
    highlight: "CONSIGUELO AHORA",
    color: "bg-yellow-400 text-black",
    bg: "bg-gradient-to-br from-gray-900 via-gray-700 to-blue-900",
  },
  {
    name: "Cyberpunk: Neon Rush",
    description: "Explora una ciudad futurista llena de acción y tecnología avanzada.",
    tag: "NUEVO LANZAMIENTO",
    highlight: "DESCUBRELO",
    color: "bg-pink-400 text-black",
    bg: "bg-gradient-to-br from-pink-900 via-purple-700 to-gray-900",
  },
  {
    name: "Mystic Valley",
    description: "Sumérgete en un mundo de fantasía y magia con paisajes únicos.",
    tag: "DISPONIBLE AHORA",
    highlight: "EXPLORA",
    color: "bg-green-400 text-black",
    bg: "bg-gradient-to-br from-green-900 via-blue-700 to-purple-900",
  },
];

export default function AccessoriesGrid() {
  // Ejemplo de variedad visual y tamaños
  const layout = [
    "row-span-2 col-span-2 min-h-[400px]", // grande
    "row-span-1 col-span-1 min-h-[200px]", // pequeño
    "row-span-1 col-span-1 min-h-[200px]", // pequeño
    "row-span-2 col-span-1 min-h-[400px]", // vertical
  ];
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 py-10 grid-flow-dense">
      {accessories.map((item, idx) => (
        <div
          key={idx}
          className={`relative rounded-2xl overflow-hidden shadow-3d border-2 border-purple-700/40 flex flex-col justify-end ${layout[idx % layout.length]} ${item.bg}`}
        >
          <div className="relative z-10 p-8 flex flex-col justify-end h-full">
            <span className={`text-xs font-bold px-3 py-1 rounded mb-2 w-fit ${item.color}`}>{item.tag}</span>
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 drop-shadow-lg">{item.name}</h3>
            <p className="text-base text-gray-200 mb-4 font-medium drop-shadow">{item.description}</p>
            <a href="#" className={`font-bold underline text-sm w-fit ${item.color} px-3 py-1 rounded`}>{item.highlight} &rarr;</a>
          </div>
        </div>
      ))}
    </div>
  );
}
