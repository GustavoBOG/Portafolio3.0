import React, { useState } from "react";
import { FiGlobe } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

import { projects } from "../../data/projectsData";

const Projects = () => {
  const [filter, setFilter] = useState("Todos");

  const filteredProjects =
    filter === "Todos"
      ? projects
      : projects.filter((project) => project.categories.includes(filter));

  return (
    <section className="w-full min-h-[calc(100vh-80px)] bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:mt-10">

        {/* Filtros */}
        <div className="flex gap-4 mb-10 flex-wrap">
          {["Todos", "Desarrollo", "Diseño"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-white font-bold transition-colors duration-300 ${filter === category
                ? "bg-vividBlue"
                : "bg-primario hover:bg-vividBlue"
                }`}
            >
              {category === "Todos" ? "Todos los proyectos" : category}
            </button>
          ))}
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-midnightBlue rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              {/* Imagen */}
              <div className="h-48 overflow-hidden bg-custom-gradient relative group">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span>Sin Imagen</span>
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-white text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 flex-grow line-clamp-4">
                  {project.description}
                </p>

                {/* Iconos y Categoría */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-3">
                    <a
                      href={project.pageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primario text-2xl"
                    >
                      <FiGlobe />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primario text-2xl"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="flex gap-2">
                    {project.categories.map((cat, index) => (
                      <span
                        key={index}
                        className={`text-white text-xs px-3 py-1 rounded-full ${cat === "Diseño" ? "bg-primario" : "bg-vividBlue"
                          }`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
