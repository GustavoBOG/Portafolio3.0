import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Certificates from "./components/certificates/Certificates";

function App() {
  return (
    // Contenedor principal de la aplicación.
    // bg-background y text-text definen los colores base definidos en tailwind.config
    <div className="w-full flex flex-col bg-background text-text font-sans">
      
      {/* Barra de Navegación fijada en la parte superior (Header) */}
      <Header />
      
      {/* Contenedor principal (main) de todas las secciones del portafolio */}
      {/* max-w-7xl y mx-auto centran el contenido y limitan su ancho en pantallas grandes */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        
        {/* Sección: Inicio (Hero section con foto y título principal) */}
        <section id="inicio">
          <Home />
        </section>
        
        {/* Sección: Proyectos y Experiencia */}
        <section id="proyectos" className="mt-24">
          <Projects />
        </section>

        {/* Sección: Tecnologías (Carrusel estático/animado de herramientas) */}
        <section id="stack" className="mt-2">
          <Skills />
        </section>

        {/* Sección: Sobre Mí (Card de información personal con estilo Glassmorphism) */}
        <section id="sobre-mi" className="mt-24">
          <About />
        </section>

        {/* Sección: Formación (Certificados, grados, etc.) */}
        <section id="formacion" className="mt-24 mb-24">
          <Certificates />
        </section>

      </main>
    </div>
  );
}

export default App;
