"use client";
import React from "react";

export default function NavLink({ targetId, colorClass, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className={`px-4 py-2 rounded-xl ${colorClass} shadow-3d hover:scale-105 transition-transform duration-300 animate-bounce-3d`}
    >
      {children}
    </a>
  );
}
