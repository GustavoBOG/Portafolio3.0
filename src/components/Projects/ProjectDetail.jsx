import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../../data/projectsData";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaRegFolder } from "react-icons/fa";

/**
 * ProjectDetail
 * Página de detalle de un proyecto individual.
 * Accesible mediante la ruta /projects/:slug
 */
const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  const handleBack = () => {
    navigate("/");
  };

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-white text-gradient">
        <p className="text-2xl font-bold opacity-40">Proyecto no encontrado.</p>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-6 py-3 glass-panel rounded-2xl hover:border-accent/50 transition-all duration-300"
        >
          <FaArrowLeft />
          Volver al inicio
        </button>
      </div>
    );
  }

  const hasDemo = project.pageUrl && project.pageUrl !== "#";
  const hasRepo = project.githubUrl && project.githubUrl !== "#";

  return (
    <motion.div
      layoutId={`project-container-${project.slug}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-background overflow-y-auto"
    >
      <div className="min-h-screen relative flex flex-col">
        
        {/* Barra de herramientas flotante superior */}
        <nav className="sticky top-0 left-0 w-full z-20 py-6 px-6 sm:px-12 flex justify-between items-center pointer-events-none">
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={handleBack}
            className="pointer-events-auto flex items-center gap-3 px-5 py-2.5 glass-panel rounded-full hover:border-accent/40 text-textSecondary hover:text-white transition-all duration-300 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest">Cerrar</span>
          </motion.button>

          <div className="hidden md:flex items-center gap-3">
             {project.categories?.map((cat) => (
               <span key={cat} className="pointer-events-auto px-4 py-1.5 glass-panel rounded-full text-[9px] font-mono font-bold text-accent uppercase tracking-widest">
                  {cat}
               </span>
             ))}
          </div>
        </nav>

        {/* Contenido Hero del Proyecto */}
        <main className="max-w-7xl mx-auto px-6 sm:px-12 py-12 flex-grow w-full">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Información (Sticky en Desktop) */}
              <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
                 <div>
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.9] mb-6">
                       {project.title}
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                       {project.fullDescription || project.description}
                    </p>

                    {/* Nueva sección: Desafíos y Soluciones */}
                    {project.features && (
                       <div className="space-y-6 pt-4">
                          <h4 className="text-[10px] sm:text-xs font-mono font-black text-gray-400 uppercase tracking-[0.3em]">
                             {project.featuresTitle || "Desafíos y Soluciones Técnicas"}
                          </h4>
                          <div className="grid grid-cols-1 gap-8">
                             {project.features.map((feature, i) => (
                                <div key={i} className="flex gap-5 group/item">
                                   <div className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0 group-hover/item:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(224,78,11,0.5)]" />
                                   <div className="space-y-2">
                                      <p className="text-white font-bold text-base md:text-lg tracking-tight">
                                         {feature.title}
                                      </p>
                                      <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                                         {feature.description}
                                      </p>
                                   </div>
                                </div>
                             ))}
                          </div>
                       </div>
                    )}

                    {/* Nueva sección: Entregables (Opcional) */}
                    {project.deliverables && (
                       <div className="space-y-6 pt-6 border-t border-white/10 mt-6">
                          <h4 className="text-[10px] sm:text-xs font-mono font-black text-gray-400 uppercase tracking-[0.3em] pt-4">
                             Entregables Clave
                          </h4>
                          <div className="grid grid-cols-1 gap-8">
                             {project.deliverables.map((item, i) => (
                                <div key={i} className="flex gap-5 group/item">
                                   <div className="mt-2 w-2 h-2 rounded-full bg-accent shrink-0 group-hover/item:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(224,78,11,0.5)]" />
                                   <div className="space-y-2">
                                      <p className="text-white font-bold text-base md:text-lg tracking-tight">
                                         {item.title}
                                      </p>
                                      <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                                         {item.description}
                                      </p>
                                   </div>
                                </div>
                             ))}
                          </div>
                       </div>
                    )}
                 </div>

                 <div className="space-y-4">
                    <h4 className="text-[10px] font-mono font-black text-gray-500 uppercase tracking-[0.3em]">Tecnologías</h4>
                    <div className="flex flex-wrap gap-2">
                       {project.technologies.map((tech, i) => (
                         <span key={i} className="px-4 py-2 glass-panel rounded-xl text-xs text-gray-300 font-medium">
                            {tech}
                         </span>
                       ))}
                    </div>
                 </div>

                 <div className="flex flex-wrap gap-4 pt-8">
                    {hasDemo && (
                      <a href={project.pageUrl} target="_blank" rel="noopener noreferrer" 
                         className="flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-1">
                         <FaExternalLinkAlt size={14}/>
                         <span>Ver Proyecto</span>
                      </a>
                    )}
                    {hasRepo && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
                         className="flex items-center gap-3 px-8 py-4 glass-panel hover:border-accent/40 text-white font-bold rounded-2xl transition-all duration-300 hover:-translate-y-1">
                         <FaGithub size={18}/>
                         <span>Código Fuente</span>
                      </a>
                    )}
                 </div>
              </div>

              {/* Contenido Visual */}
              <div className="lg:col-span-7 space-y-8">
                 <div className="relative p-[2px] rounded-[2.5rem] bg-orange-gradient shadow-[0_20px_50px_rgba(224,78,11,0.3)]">
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-background">
                       <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                       <img 
                         src={project.imageUrl} 
                         alt={project.title} 
                         className="w-full h-auto object-cover"
                       />
                    </div>
                 </div>
              </div>

           </div>
        </main>

        {/* Footer detalle */}
        <footer className="py-12 px-12 border-t border-white/5 mt-auto flex justify-between items-center opacity-30 grayscale pointer-events-none">
           <span className="text-[10px] font-mono uppercase tracking-[0.5em]">Gustavo Bolívar</span>
           <span className="text-[10px] font-mono uppercase tracking-[0.5em]">2026</span>
        </footer>

      </div>
    </motion.div>
  );
};

export default ProjectDetail;
