"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ProductCard from "../components/ProductCard";
import AccessoriesGrid from "../components/AccessoriesGrid";
import FeaturedGrid from "../components/FeaturedGrid";
import CartBar from "../components/CartBar";
import Footer from "../components/Footer";
import GamingShowcase from "../components/GamingShowcase";
import IAChatFloating from "../components/IAChatFloating";

export default function Home() {
  return (
    <div className="font-sans bg-black min-h-screen w-full text-white overflow-x-hidden snap-y snap-mandatory scroll-smooth" style={{scrollBehavior: 'smooth'}}>
      <Navbar />
      <main className="pt-24 flex flex-col w-full">
        <Hero />
        <Section id="featured" title="Productos más comprados">
          <FeaturedGrid />
        </Section>
        <Section id="accessories" title="Accesorios">
          <AccessoriesGrid />
        </Section>

        <Section id="catalog" title="Catálogo">
          {/* Banner principal del catálogo con enlace */}
          <div className="w-full flex justify-center mb-6">
            <a href="/catalogo" className="block w-full max-w-4xl rounded-3xl bg-gradient-to-r from-purple-900 via-pink-700 to-red-700 p-10 text-center text-white text-3xl font-extrabold shadow-lg hover:scale-105 transition-transform duration-300">
              Ver todo el catálogo
            </a>
          </div>
        </Section>

        <GamingShowcase />
      </main>
  <Footer />
  <IAChatFloating />

      {/* Botón flotante de acceso a chat IA */}
      <button
        id="ia-chat-btn"
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-3d p-4 flex items-center justify-center hover:scale-110 transition-transform duration-300"
        style={{ boxShadow: '0 4px 24px 0 rgba(180, 70, 255, 0.3)' }}
        onClick={() => document.getElementById('ia-chat-box').classList.toggle('hidden')}
        aria-label="Abrir chat IA"
      >
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 3C7.03 3 3 6.58 3 11c0 2.38 1.19 4.53 3.17 6.13-.13.47-.46 1.7-.54 2.02-.09.36.26.68.62.57.25-.08 1.54-.49 2.18-.7C9.5 19.67 10.73 20 12 20c4.97 0 9-3.58 9-9s-4.03-8-9-8z" stroke="#fff" strokeWidth="2"/></svg>
      </button>
      {/* Caja de chat IA flotante */}
  <div id="ia-chat-box" className="hidden fixed bottom-24 right-8 z-50 w-80 max-w-xs bg-black rounded-2xl shadow-2xl border border-purple-700 flex-col">
        <div className="bg-gradient-to-r from-purple-700 to-pink-500 text-white font-bold px-4 py-3 rounded-t-2xl">Asesor IA</div>
        <div className="flex-1 px-4 py-3 overflow-y-auto text-sm" style={{ maxHeight: '260px' }}>
          <div className="text-gray-300 mb-2">¡Hola! Soy tu asesor virtual. ¿En qué puedo ayudarte hoy?</div>
          {/* Aquí irían los mensajes del chat */}
        </div>
        <div className="flex items-center gap-2 px-4 py-3 border-t border-purple-700">
          <input type="text" placeholder="Escribe tu mensaje..." className="flex-1 px-3 py-2 rounded-lg bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
          <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-3d">Enviar</button>
        </div>
      </div>
    </div>
  );
}
