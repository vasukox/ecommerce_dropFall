"use client";
import React, { useState } from "react";

export default function SearchBar({ products }) {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const matches = Array.isArray(products)
    ? products.filter(p => p.name.toLowerCase().includes(query.toLowerCase())).slice(0, 6)
    : [];

  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        value={query}
        onChange={e => { setQuery(e.target.value); setShow(true); }}
        onFocus={() => setShow(true)}
        onBlur={() => setTimeout(() => setShow(false), 120)}
        placeholder="Buscar productos..."
        className="px-4 py-2 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
        autoComplete="off"
      />
      {show && query && matches.length > 0 && (
        <ul className="absolute left-0 top-full w-full bg-black/90 rounded-lg shadow-lg mt-1 z-20 border border-purple-700">
          {matches.map((p, idx) => (
            <li key={idx} className="px-4 py-2 text-purple-200 hover:bg-purple-900/60 hover:text-white cursor-pointer transition-all">
              {p.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
