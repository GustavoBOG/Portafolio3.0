import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Certificates from "./components/certificates/Certificates";

function App() {
  return (
    <div className="w-full flex flex-col bg-background text-text font-sans">
      <Header />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <section id="inicio">
          <Home />
        </section>
        
        <section id="proyectos" className="mt-24">
          <Projects />
        </section>

        <section id="stack" className="mt-24">
          <Skills />
        </section>

        <section id="sobre-mi" className="mt-24">
          <About />
        </section>

        <section id="formacion" className="mt-24 mb-24">
          <Certificates />
        </section>
      </main>
    </div>
  );
}

export default App;
