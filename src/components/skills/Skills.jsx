import React from 'react';
import { FaRocket } from "react-icons/fa";

const Skills = () => {
  const allSkills = [
    { name: 'HTML5', icon: '/images/skills/html5.png' },
    { name: 'CSS3', icon: '/images/skills/css.png' },
    { name: 'JavaScript', icon: '/images/skills/js.png' },
    { name: 'React', icon: '/images/skills/react.png' },
    { name: 'Node.js', icon: '/images/skills/node.png' },
    { name: 'Next.js', icon: '/images/skills/next.png' },  // Use fallback or actual image if exists
    { name: 'MySQL', icon: '/images/skills/mySQL.png' },
    { name: 'Git', icon: '/images/skills/github.png' },
  ];

  return (
    <section className="w-full py-16 relative">
      {/* Línea divisoria superior de sección con degradado completo */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#FF4D00] to-transparent"></div>
      
      {/* Línea divisoria intermedia naranja corta (estilo viñeta) */}
      <div className="absolute top-0 left-[10%] w-[1px] h-24 bg-gradient-to-b from-[#FF4D00] to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative pt-8">
        
        {/* Título de Sección */}
        <div className="flex items-center gap-4 mb-4">
          <FaRocket className="text-accent text-3xl" />
          <h2 className="text-white text-3xl font-bold tracking-wide">Stack Tecnológico</h2>
        </div>

        <h3 className="text-white text-lg font-bold mb-8 mt-8">Tecnologías y Herramientas</h3>

        {/* Grid de Tecnologías */}
        <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 sm:gap-4 w-full mt-12 bg-[#1A1A1A] py-8 px-6 rounded-2xl relative">
          {/* Borde sutil en el contenedor del grid */}
          <div className="absolute inset-0 border border-[#FF4D00]/20 rounded-2xl pointer-events-none"></div>

          {allSkills.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center gap-2 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                 <img 
                   src={skill.icon} 
                   alt={`Logo de ${skill.name}`}
                   className="max-w-full max-h-full object-contain"
                   onError={(e) => {
                      // Fallback temporal si Next.js no existe
                      if(skill.name === 'Next.js') {
                         e.target.src = 'https://cdn.worldvectorlogo.com/logos/next-js.svg';
                      }
                   }}
                 />
              </div>
              <span className="text-white font-bold text-sm md:text-base hidden sm:block whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;