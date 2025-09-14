# ecommerce

Este proyecto es una tienda online creada con Next.js, React, Tailwind CSS y ESLint.


## Características principales

- Catálogo de productos con filtros y búsqueda
- Página principal con secciones destacadas
- Carrito de compras (contexto global)
- Chat IA flotante
- Componentes reutilizables y diseño responsivo

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
npm install
```

## Ejecución en desarrollo

```bash
npm run dev
```

## Build y ejecución en producción

```bash
npm run build
npm start
```

Esto genera la carpeta `.next` y sirve el sitio en modo producción en [http://localhost:3000](http://localhost:3000).

## Estructura principal

- `src/app`: Páginas y componentes principales
- `public`: Recursos públicos

## Componentes destacados

- `Hero`: Banner principal
- `Navbar`, `Footer`: Navegación y pie de página
- `FeaturedGrid`, `AccessoriesGrid`: Listados de productos
- `CartBar`, `CartButton`, `CartContext`: Carrito de compras
- `IAChatFloating`: Chat IA flotante

## Notas técnicas

- La página principal (`src/app/page.js`) es un Client Component (`"use client"`) para permitir interactividad.
- Se recomienda usar `<Image />` de Next.js en vez de `<img>` para optimización de imágenes.

## Personalización

Modifica los archivos en `src/app` para adaptar la tienda a tus necesidades.

---

Para instrucciones avanzadas, consulta `.github/copilot-instructions.md`.

---

## Recursos útiles

Este proyecto usa [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para cargar la fuente [Geist](https://vercel.com/font).

Para aprender más sobre Next.js:
- [Documentación oficial](https://nextjs.org/docs)
- [Tutorial interactivo](https://nextjs.org/learn)

Para desplegar en Vercel:
- [Guía de despliegue](https://nextjs.org/docs/app/building-your-application/deploying)
