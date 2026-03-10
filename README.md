# Portfolio de Gustavo Bolívar

Bienvenido al repositorio de mi portafolio personal. Este proyecto está construido con una pila tecnológica moderna (React + Vite + Tailwind CSS) y presenta una interfaz de usuario premium tipo "Glassmorphism" con animaciones y estilos visuales avanzados.

## 🚀 Tecnologías Principales

- **React**: Biblioteca principal para la construcción de interfaces de usuario.
- **Vite**: Herramienta de construcción ultra rápida y servidor de desarrollo para React.
- **Tailwind CSS**: Framework de utilidades CSS para estructurar, maquetar y diseñar la interfaz de manera rápida.
- **React Scroll**: Para lograr una navegación suave (smooth scrolling) entre las secciones de la misma página.
- **React Icons**: Para los íconos consistentes en toda la aplicación (Redes sociales, UI, etc.).

## 📂 Estructura del Proyecto

El proyecto sigue una estructura limpia y modularizada, separando claramente responsabilidades, permitiendo escalar fácilmente y hacer el mantenimiento mucho más sencillo:

```text
src/
├── assets/          # Imágenes estáticas y recursos locales.
├── components/      # Componentes de cada sección de la "Landing Page".
│   ├── about/       # Sección "Sobre Mí" con tarjeta estilo Glassmorphism.
│   ├── certificates/# Sección "Formación" (Mapeo de grados/certificados).
│   ├── header/      # Barra de Menú de navegación principal superior.
│   ├── home/        # Primer pantallazo o Hero Section que ve el usuario.
│   ├── Projects/    # Grid de tarjetas con proyectos y experiencia.
│   └── skills/      # Carrusel infinito de stack de tecnologías.
├── data/            # Almacén de datos constantes (ej. projectsData.js).
├── index.css        # Archivo de Tailwind CSS con extensiones globales premium.
├── main.jsx         # Punto de entrada de React.
└── App.jsx          # Archivo raíz donde se integran e importan las secciones.
```

## 🛠 Instalación y Ejecución Local

1. Clona este repositorio en tu ordenador:
   ```bash
   git clone https://github.com/GustavoBOG/Portafolio3.0.git
   ```
2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
3. Levanta el servidor local de desarrollo:
   ```bash
   npm run dev
   ```

## ✨ Características de Diseño Destacadas

- **Diseño Premium**: Paleta de colores oscuros profundos (`#050505`) con discretos resplandores en color naranja coral focal (`#E04E0B`). Diseñado para generar bastante impacto visual inicial.
- **Glassmorphism**: Uso extendido de `backdrop-blur` (desenfoques transparentes) mezclados con fondos oscuros.
- **Micro-interacciones interactivas**: Efectos 3D y resplandores visuales que reaccionan cuando el usuario pasa su mouse (hover) por encima de botones o imágenes.
- **Responsive**: Diseño completamente adaptable a cualquier tamaño de pantalla (Mobile First adaptado a pantallas gigantes).
- **Tipografía y Legibilidad**: Empleo de degradados de texto (`bg-clip-text`) para los títulos, ayudando a resaltar la información más crucial en cada pantalla.
