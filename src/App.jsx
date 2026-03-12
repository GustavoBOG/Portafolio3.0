import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Certificates from "./components/certificates/Certificates";
import ProjectDetail from "./components/Projects/ProjectDetail";



/**
 * MainPortfolio
 * Layout principal del portafolio (página de inicio con todas las secciones).
 */
function MainPortfolio() {
  const location = useLocation();
  // We no longer need sessionStorage since MainPortfolio stays mounted
  // when navigating to /projects/:slug.

  return (
    <>
      {/* Barra de Navegación fijada en la parte superior */}
      <Header />

      {/* Contenedor principal de todas las secciones */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">

        {/* Sección: Inicio */}
        <section id="inicio">
          <Home />
        </section>

        {/* Sección: Proyectos y Experiencia */}
        <section id="proyectos" className="mt-24">
          <Projects />
        </section>

        {/* Sección: Tecnologías */}
        <section id="stack" className="mt-2">
          <Skills />
        </section>

        {/* Sección: Sobre Mí */}
        <section id="sobre-mi" className="mt-24">
          <About />
        </section>

        {/* Sección: Formación */}
        <section id="formacion" className="mt-24 mb-24">
          <Certificates />
        </section>

      </main>

      {/* Render the ProjectDetail overlay if we are on a project route */}
      <AnimatePresence>
        <Outlet key={location.pathname} />
      </AnimatePresence>
    </>
  );
}

/**
 * App
 * Define las rutas de la aplicación:
 *  /                   → Portafolio completo
 *  /projects/:slug     → Página de detalle de proyecto
 */
function App() {
  return (
    <div className="w-full flex flex-col bg-background text-text font-sans relative">
      <Routes>
        <Route path="/" element={<MainPortfolio />}>
          {/* Default path matches the main portfolio layout, but we also map projects into it */}
          <Route path="projects/:slug" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
