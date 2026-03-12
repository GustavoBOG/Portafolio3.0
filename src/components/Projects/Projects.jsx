import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCog, FaPaintBrush, FaArrowRight } from "react-icons/fa";
import { projects } from "../../data/projectsData";

/**
 * Componente Projects
 * Renderiza la lista de proyectos de forma minimalista, sin imágenes,
 * priorizando la legibilidad y un estilo editorial limpio.
 */
const Projects = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  // Mostrar 4 proyectos inicialmente (2 filas de 2)
  const displayProjects = isExpanded ? projects : projects.slice(0, 4);

  const handleCardClick = (slug) => {
    navigate(`/projects/${slug}`);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: i * 0.1, 
        ease: [0.22, 1, 0.36, 1] 
      },
    }),
  };

  /**
   * Obtiene el icono según la categoría
   */
  const getCategoryIcon = (category = "") => {
    const cat = category.toLowerCase();
    // Preferencia para diseño si incluye palabras clave, si no desarrollo
    if (cat.includes("diseño") || cat.includes("design") || cat.includes("ui") || cat.includes("ux") || cat.includes("visual")) {
      return <FaPaintBrush className="text-accent" />;
    }
    return <FaCog className="text-accent" />;
  };

  return (
    <section id="proyectos" className="w-full relative py-20 overflow-visible">
      {/* Contenedor controlado para un centrado más elegante (max-w-6xl en lugar de 7xl) */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        {/* Título de Sección - Tamaño reducido y tracking corregido */}
        <div className="w-full mb-16 relative">
          <div className="flex items-center gap-6 mb-4">
             <div className="h-[2px] w-12 bg-accent/60"></div>
             <span className="text-accent font-mono text-[10px] tracking-[0.4em] uppercase font-bold">Portafolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none">
            Proyectos <br/> 
            <span className="text-textSecondary/40">Destacados</span>
          </h2>
        </div>

        <div className="relative">
          {/* Rejilla de Proyectos - 2 Columnas Centradas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {displayProjects.map((project, i) => (
              <motion.div
                layoutId={`project-container-${project.slug}`}
                key={project.id}
                onClick={() => handleCardClick(project.slug)}
                whileHover={{ y: -5 }}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={i}
                className="group relative cursor-pointer"
              >
                <div className="glass-card rounded-[2rem] p-8 h-full flex flex-col justify-between transition-all duration-500 group-hover:border-accent/40 group-hover:bg-accent/[0.03] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                  
                  <div>
                    {/* Header: Icono dinámico + Título */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl p-3 rounded-xl glass-panel group-hover:scale-110 transition-all duration-500 group-hover:text-white">
                           {getCategoryIcon(project.categories?.[0])}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent transition-colors tracking-tighter leading-tight">
                          {project.title}
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:bg-accent group-hover:text-background transition-all duration-500 shadow-xl">
                        <FaArrowRight className="-rotate-45" size={16} />
                      </div>
                    </div>

                    {/* Categoría debajo del título */}
                    <span className="text-[10px] font-mono tracking-widest text-accent uppercase font-black mb-6 block opacity-70 group-hover:opacity-100 transition-opacity pl-[3.5rem]">
                      {project.categories?.[0] || 'DESARROLLO'}
                    </span>
                    
                    {/* Descripción - Fuente más grande y legible */}
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 line-clamp-2 italic font-light group-hover:text-gray-300 transition-colors">
                      "{project.description}"
                    </p>
                  </div>

                  {/* Tecnologías - Estética refinada */}
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                    {project.technologies.slice(0, 6).map((tech, index) => (
                      <span
                        key={index}
                        className="text-[10px] font-mono font-bold tracking-tight px-3 py-1.5 rounded-lg bg-white/[0.03] text-gray-500 group-hover:text-accent group-hover:bg-accent/10 transition-all duration-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Botón Ver más - Centrado y elegante */}
          {projects.length > 4 && (
            <div className="flex justify-center mt-16">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group flex flex-col items-center gap-3 focus:outline-none"
              >
                <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-500 shadow-lg">
                  <motion.div
                    animate={{ y: isExpanded ? 0 : [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <svg 
                      className={`w-5 h-5 text-accent transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
                <span className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-gray-500 group-hover:text-accent transition-colors">
                  {isExpanded ? "Contraer" : "Explorar todos"}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
