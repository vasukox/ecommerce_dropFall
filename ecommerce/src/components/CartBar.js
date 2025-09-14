"use client";
"use client";
import React, { useContext } from 'react';
import Image from "next/image";
import { CartContext } from './CartContext';

export default function CartBar() {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <div className="bg-black/95 border-2 border-purple-700 rounded-2xl shadow-3d p-4 z-50 w-96 max-w-full" style={{minWidth: '320px'}}>
      <h4 className="text-xl font-bold text-purple-400 mb-4">Carrito</h4>
      {cart.length === 0 ? (
        <p className="text-gray-400">El carrito está vacío.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item, idx) => (
            <li key={idx} className="flex items-center gap-4 bg-gradient-to-r from-purple-900 to-black rounded-xl p-2">
              <div className="w-16 h-16 flex items-center justify-center bg-black rounded-lg">
                <Image src={item.img} alt={item.name} width={56} height={56} className="w-14 h-14 object-contain" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-purple-300 text-base">{item.name}</div>
                <div className="text-pink-400 font-semibold">{item.price}</div>
              </div>
              <button className="px-3 py-1 rounded-lg bg-pink-600 text-white text-xs font-bold hover:bg-pink-700 transition" onClick={() => removeFromCart(item.name)}>
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 text-right">
        <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-3d hover:scale-105 transition-transform duration-300">
          Ir al carrito
        </button>
      </div>
    </div>
  );
}
