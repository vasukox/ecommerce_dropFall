"use client";
import CartButton from './CartButton';
import NavMenu from './NavMenu';
export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-8 py-4 bg-gradient-to-r from-purple-900 via-black to-purple-900 shadow-lg fixed top-0 left-0 z-50 border-b-2 border-purple-700">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold text-purple-500 tracking-wide">DROPP FALL</span>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <NavMenu />
      </div>
      <div className="flex items-center gap-4">
        <CartButton />
      </div>
    </nav>
  );
}
