"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { id: "featured", label: "Productos más comprados" },
  { id: "catalog", label: "Catálogo" },
  { id: "accessories", label: "Accesorios" },
  { id: "gaming-showcase", label: "Gaming" },
];

export default function NavMenu() {
  const [active, setActive] = useState("featured");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/catalogo") {
      setActive("catalog");
      return;
    }
    const handleScroll = () => {
      let found = "featured";
      for (const link of links) {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            found = link.id;
            break;
          }
        }
      }
      setActive(found);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleClick = (id) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActive(id);
      }
    }
  };

  return (
    <ul className="flex gap-0 bg-black/30 rounded-full px-2 py-1 shadow-lg">
      {links.map((link) => (
        <li key={link.id}>
          <button
            onClick={() => handleClick(link.id)}
            className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 focus:outline-none
              ${active === link.id
                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-3d scale-105"
                : "bg-transparent text-purple-200 hover:bg-purple-900/60 hover:text-white"}
            `}
            style={{ border: active === link.id ? "2px solid #a855f7" : "2px solid transparent" }}
          >
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
