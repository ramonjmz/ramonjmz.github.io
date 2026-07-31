# ramonjmz.github.io

Portafolio personal de Ramón Jiménez, construido con Next.js. Incluye secciones de perfil, proyectos y un panel de administración básico.

## Stack

- [Next.js 13](https://nextjs.org/) (App Router, export estático)
- React 18 + TypeScript
- Tailwind CSS + [shadcn/ui](https://ui.shadcn.com/) (componentes Radix UI)
- Framer Motion

## Requisitos

- Node.js 20+
- npm

## Instalación

```bash
git clone https://github.com/ramonjmz/portfolio.git
cd portfolio
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

Esto levanta el servidor en [http://localhost:3000](http://localhost:3000) con hot reload.

## Build de producción

```bash
npm run build
```

El proyecto usa `output: 'export'` (ver `next.config.js`), por lo que `next build` genera un sitio estático en la carpeta `out/`.

Para previsualizar el build localmente:

```bash
npm run start
```

## Lint

```bash
npm run lint
```

## Estructura del proyecto

```
app/          # Rutas y páginas (App Router), incluye /admin
components/   # Componentes de UI reutilizables
config/       # Configuración del sitio (site.ts)
hooks/        # Hooks de React personalizados
lib/          # Datos y utilidades (perfil, proyectos, helpers)
types/        # Tipos de TypeScript compartidos
public/       # Assets estáticos
```

### Datos del perfil y proyectos

El contenido del portafolio (nombre, bio, skills, links, proyectos) se define directamente en:

- `lib/profile.ts`
- `lib/projects.ts`

No hay base de datos: para actualizar la información mostrada en el sitio, edita esos archivos directamente.

## Despliegue

El sitio se despliega automáticamente a GitHub Pages mediante el workflow `.github/workflows/nextjs.yml` en cada push a `master`: hace `next build` y publica el contenido de `out/`.
