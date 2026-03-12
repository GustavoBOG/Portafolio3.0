import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRegFolder, FaArrowRight } from "react-icons/fa";
import { projects } from "../../data/projectsData";

/**
 * Componente Projects
 * Renderiza la lista de proyectos desde un origen de datos estático (`projectsData.js`).
 * Cada tarjeta es clickeable y navega a /projects/:slug con una transición suave.
 */
const Projects = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  // CORRECCIÓN AUDIT: Antes slice(0,4) ocultaba proyectos. Ahora muestra todos.
  const displayProjects = isExpanded ? projects : projects.slice(0, 2);

  // Navegación con transición compartida
  const handleCardClick = (slug) => {
    navigate(`/projects/${slug}`);
  };

  // Variantes para animación de entrada en scroll (whileInView)
  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section className="w-full pb-4 relative">
      {/* Título tipo Header Full-Width */}
      <div className="w-[100vw] relative left-1/2 -translate-x-1/2 py-6 mb-12 bg-[#050505]/30">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#E04E0B] via-[#E04E0B]/80 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
          <span className="text-[#E04E0B] text-3xl md:text-4xl font-mono font-bold mt-1">{">_"}</span>
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-wide">Proyectos y Experiencia</h2>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#E04E0B] via-[#E04E0B]/80 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayProjects.map((project, i) => (
            <motion.button
              layoutId={`project-container-${project.slug}`}
              key={project.id}
              onClick={() => handleCardClick(project.slug)}
              whileHover={{ scale: 1.02 }}
              whileInView="visible"
              initial="hidden"
              variants={cardVariants}
              custom={i}
              viewport={{ once: true, amount: 0.15 }}
              id={`project-card-${project.slug}`}
              className="text-left bg-background rounded-2xl p-[1px] relative group overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-[#E04E0B]/10 focus:outline-none focus:ring-2 focus:ring-[#E04E0B]/50"
              aria-label={`Ver detalle del proyecto ${project.title}`}
            >
              {/* Borde con degradado estático alrededor de toda la tarjeta */}
              <div className="absolute inset-0 bg-gradient-to-r from-accentDark to-[#FF4D00]/50 rounded-2xl opacity-100 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative bg-[#111111] h-full rounded-2xl p-6 flex flex-col group-hover:bg-[#1a1a1a] transition-colors duration-300">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <FaRegFolder className="text-accent text-xl flex-shrink-0" />
                    <h3 className="text-white text-xl font-semibold">
                      {project.title}
                    </h3>
                  </div>
                  {/* Flecha de navegación — aparece en hover */}
                  <FaArrowRight className="text-[#E04E0B] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0" />
                </div>

                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-2">
                  {project.description}
                </p>

                {/* MEJORA AUDIT: Tooltip en badges de tecnología */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 7).map((tech, index) => (
                    <span
                      key={index}
                      title={tech}
                      className="bg-accentDark text-gray-300 text-[10px] font-mono px-3 py-1 rounded-sm border border-orange-500/20 hover:border-[#E04E0B]/60 hover:text-white transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="flex justify-center mt-8 w-full">
          <div className="flex flex-col items-center gap-1">
            {projects.length > 2 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex flex-col items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-white hover:border-[#E04E0B]/60 hover:text-[#E04E0B] hover:bg-[#E04E0B]/5 transition-all duration-300 group"
              >
                <span className="text-sm font-medium tracking-wide">
                  {isExpanded
                    ? "Ver menos"
                    : `Ver más proyectos (${projects.length - 2} restantes)`}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : "animate-bounce"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
