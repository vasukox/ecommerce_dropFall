"use client";
import React, { useState } from "react";
import CartBar from "./CartBar";
import { motion, AnimatePresence } from "framer-motion";

export default function CartButton() {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <button
        className="p-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-3d hover:scale-110 transition-transform duration-300 animate-bounce-3d"
        onClick={() => setShowCart((v) => !v)}
        aria-label="Abrir carrito"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.3h12.2a1 1 0 00.9-1.3L17 13M7 13V6a1 1 0 011-1h9a1 1 0 011 1v7" />
        </svg>
      </button>
      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            style={{ position: "fixed", top: 70, right: 32, zIndex: 100 }}
          >
            <CartBar />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
