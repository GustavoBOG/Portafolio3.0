import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";

// Importaciones directas para componentes críticos (Above the fold)
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/Projects/Projects";
import ProjectDetail from "./components/Projects/ProjectDetail";
import Footer from "./components/footer/Footer";

// Lazy loading para secciones pesadas o no críticas inmediatamente
const About = lazy(() => import("./components/about/About"));
const Skills = lazy(() => import("./components/skills/Skills"));
const Certificates = lazy(() => import("./components/certificates/Certificates"));

/**
 * LoadingFallback
 * Componente simple para mostrar durante la carga de las secciones lazy.
 */
const LoadingFallback = () => (
  <div className="w-full h-24 flex items-center justify-center">
    <div className="w-8 h-[2px] bg-accent/20 overflow-hidden relative">
      <div className="absolute inset-0 bg-accent animate-[loading_1.5s_infinite]" />
    </div>
  </div>
);



/**
 * MainPortfolio
 * Layout principal del portafolio (página de inicio con todas las secciones).
 */
function MainPortfolio() {
  const location = useLocation();

  // Controlar el scroll de la página cuando hay un proyecto abierto
  useEffect(() => {
    const isProjectOpen = location.pathname.includes("/projects/");
    
    if (isProjectOpen) {
      document.body.classList.add("no-scroll");
      document.documentElement.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll");
    };
  }, [location.pathname]);

  return (
    <>
      {/* Barra de Navegación fijada en la parte superior */}
      <Header />

      {/* Contenedor principal liberado (ancho total) */}
      <main className="flex-grow w-full mt-20 overflow-x-hidden">

        {/* Sección: Inicio */}
        <section id="inicio">
          <Home />
        </section>

        {/* Sección: Proyectos y Experiencia */}
        <section id="proyectos" className="mt-24">
          <Projects />
        </section>

        {/* Secciones con Carga Perezosa (Lazy Load) */}
        <Suspense fallback={<LoadingFallback />}>
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
        </Suspense>

      </main>

      {/* Footer del sitio */}
      <Footer />

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
    <div className="w-full flex flex-col bg-background text-text font-sans relative min-h-screen">
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
