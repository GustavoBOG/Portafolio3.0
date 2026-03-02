import React from "react";
import { FaRegFolder } from "react-icons/fa";
import { projects } from "../../data/projectsData";

const Projects = () => {
  const displayProjects = projects.slice(0, 4);

  return (
    <section className="w-full py-16 relative">
      {/* Línea divisoria superior de sección con degradado completo */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#FF4D00] to-transparent"></div>
      
      {/* Línea divisoria intermedia naranja corta (estilo viñeta) */}
      <div className="absolute top-0 left-[10%] w-[1px] h-24 bg-gradient-to-b from-[#FF4D00] to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative pt-8">
        
        {/* Título de Sección con línea debajo */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-accent text-3xl font-mono font-bold">{">_"}</span>
            <h2 className="text-white text-3xl font-bold tracking-wide">Proyectos y Experiencia</h2>
          </div>
          {/* Línea sutil debajo del título si es necesario según diseño, o solo usamos el grid border */}
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="bg-background rounded-2xl p-[1px] relative group overflow-hidden transition-all duration-300"
            >
              {/* Borde con degradado estático alrededor de toda la tarjeta, como muestra la imagen 3 */}
              <div className="absolute inset-0 bg-gradient-to-r from-accentDark to-[#FF4D00]/50 rounded-2xl opacity-100"></div>
              
              <div className="relative bg-[#111111] h-full rounded-2xl p-6 flex flex-col group-hover:bg-[#1a1a1a] transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <FaRegFolder className="text-accent text-xl" />
                  <h3 className="text-white text-xl font-semibold">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 5).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-accentDark text-gray-300 text-[10px] font-mono px-3 py-1 rounded-sm border border-orange-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a href={project.pageUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10">
                  <span className="sr-only">Ver {project.title}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 w-full">
           <div className="flex flex-col items-center">
             <button className="text-white flex flex-col items-center gap-2 hover:text-accent transition-colors group">
               <span className="text-sm font-medium">Ver más</span>
               <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
               </svg>
             </button>
             {/* Divider Line under View More */}
             <div className="w-screen h-[1px] bg-gradient-to-r from-[#FF4D00] to-transparent mt-8"></div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
