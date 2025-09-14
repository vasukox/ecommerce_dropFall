"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-purple-950 to-black text-gray-300 pt-12 pb-6 px-4 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-purple-900 pb-8">
        <div>
          <h3 className="text-2xl font-bold text-purple-400 mb-4">DROPP FALL</h3>
          <p className="mb-2 text-sm">Tu tienda de tecnología y gaming. Descubre lo último en productos y accesorios para elevar tu experiencia digital.</p>
          <a href="#" className="text-purple-400 hover:underline text-sm">Ver más →</a>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-white">Descubre</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#featured" className="hover:text-purple-400">Más comprados</a></li>
            <li><a href="#catalog" className="hover:text-purple-400">Catálogo</a></li>
            <li><a href="#accessories" className="hover:text-purple-400">Accesorios</a></li>
            <li><a href="#gaming" className="hover:text-purple-400">Gaming</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-white">Nosotros</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-400">Equipo</a></li>
            <li><a href="#" className="hover:text-purple-400">Carreras</a></li>
            <li><a href="#" className="hover:text-purple-400">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-white">Recursos</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-400">Seguridad</a></li>
            <li><a href="#" className="hover:text-purple-400">Privacidad</a></li>
            <li><a href="#" className="hover:text-purple-400">Ayuda</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3 text-white">Social</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-400">Facebook</a></li>
            <li><a href="#" className="hover:text-purple-400">Instagram</a></li>
            <li><a href="#" className="hover:text-purple-400">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-gray-500">
        <div className="mb-2 md:mb-0">&copy; 2025 DROPP FALL. Todos los derechos reservados.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-purple-400">Términos</a>
          <a href="#" className="hover:text-purple-400">Privacidad</a>
          <a href="#" className="hover:text-purple-400">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
