import React from "react";
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
    // Navigate back to the homepage list
    navigate("/");
  };

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-white">
        <p className="text-2xl font-bold text-gray-400">Proyecto no encontrado.</p>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg hover:border-[#E04E0B] hover:text-[#E04E0B] transition-all duration-300 text-sm"
        >
          <FaArrowLeft />
          Volver a proyectos
        </button>
      </div>
    );
  }

  const hasDemo = project.pageUrl && project.pageUrl !== "#";
  const hasRepo = project.githubUrl && project.githubUrl !== "#";

  return (
    <motion.div
      layoutId={`project-container-${project.slug}`}
      initial={{ opacity: 0, borderRadius: "1rem" }}
      animate={{ opacity: 1, borderRadius: "0rem" }}
      exit={{ opacity: 0, borderRadius: "1rem" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-background overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
      {/* ── Barra superior full-width (replica el estilo del header de secciones) ── */}
      <div className="w-full border-b border-[#E04E0B]/30 bg-[#050505]/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <button
            onClick={handleBack}
            id="btn-back-to-projects"
            className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg hover:border-[#E04E0B] hover:text-[#E04E0B] transition-all duration-300 text-sm font-medium text-gray-300 group"
          >
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Volver a proyectos
          </button>
        </div>
      </div>

      {/* ── Contenido principal ── */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* Encabezado del proyecto */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <FaRegFolder className="text-[#E04E0B] text-xl" />
            {project.categories?.map((cat) => (
              <span
                key={cat}
                className="text-[10px] font-mono px-2 py-0.5 rounded-sm border border-[#E04E0B]/40 text-[#E04E0B] bg-[#E04E0B]/10"
              >
                {cat.toUpperCase()}
              </span>
            ))}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl">
            {project.fullDescription || project.description}
          </p>
        </div>

        {/* ── Imagen principal ── */}
        <div className="relative rounded-2xl overflow-hidden mb-10 border border-white/10 shadow-2xl">
          {/* Glow de fondo */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#E04E0B]/20 via-transparent to-purple-900/20 pointer-events-none z-10 rounded-2xl" />
          <img
            src={project.imageUrl}
            alt={`Captura del proyecto ${project.title}`}
            className="w-full object-cover max-h-[520px] rounded-2xl"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>

        {/* ── Tecnologías ── */}
        <div className="mb-10">
          <h2 className="text-sm font-mono text-[#E04E0B] uppercase tracking-widest mb-4">
            Tecnologías utilizadas
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-[#111] text-gray-300 text-xs font-mono px-4 py-2 rounded-md border border-orange-500/20 hover:border-[#E04E0B]/60 hover:text-white transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── Botones de acción ── */}
        <div className="flex flex-wrap gap-4">
          {hasDemo && (
            <a
              href={project.pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              id={`btn-demo-${project.slug}`}
              className="flex items-center gap-2 px-6 py-3 bg-[#E04E0B] hover:bg-[#FF6620] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-[#E04E0B]/20 hover:shadow-[#E04E0B]/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <FaExternalLinkAlt className="text-sm" />
              Ver demo
            </a>
          )}
          {hasRepo && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              id={`btn-repo-${project.slug}`}
              className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/50 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/5 hover:-translate-y-0.5 active:translate-y-0"
            >
              <FaGithub className="text-lg" />
              Ver repositorio
            </a>
          )}
        </div>

      </main>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetail;
