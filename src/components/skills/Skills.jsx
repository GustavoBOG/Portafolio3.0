import React from 'react';
import { FaRocket } from "react-icons/fa";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, 
  SiNextdotjs, SiGit, SiPostman, SiFigma, SiMysql 
} from "react-icons/si";

/**
 * Componente SVG personalizado auxiliar (ej. para un icono interno o framework custom).
 */
const AntigravityIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M12.025 2q2.025 0 3.163 1.525T17.125 7q.65 1.575 1.25 3.5t1.275 3.875q.65 1.875 1.425 3.525t1.8 2.825q.2.225.175.525t-.225.525t-.475.25t-.55-.175q-1.975-1.55-3.25-3.463t-2.575-3.337q-.85-.95-1.812-1.5T12.025 13t-2.137.55t-1.813 1.5q-1.3 1.425-2.575 3.338T2.25 21.85q-.275.2-.55.175t-.475-.25T1 21.25t.175-.525Q2.2 19.55 2.975 17.9T4.4 14.375q.675-1.95 1.275-3.875T6.925 7q.8-1.95 1.938-3.475T12.025 2"/>
  </svg>
);

/**
 * Componente Skills
 * Sección visual "Stack Tecnológico". Presenta un carrusel animado (Marquee)
 * de infinito recorrido horizontal con las tecnologías que manejas.
 */
const Skills = () => {
  const allSkills = [
    { name: 'HTML', icon: SiHtml5 },
    { name: 'CSS', icon: SiCss3 },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'React', icon: SiReact },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Git', icon: SiGit },
    { name: 'Postman', icon: SiPostman },
    { name: 'Antigravity', icon: AntigravityIcon },
    { name: 'Figma', icon: SiFigma },
    { name: 'MySQL', icon: SiMysql },
  ];

  // Duplicamos el array múltiples veces para que el carrusel nunca se quede sin contenido antes de reiniciar el bucle
  const marqueeSkills = [...allSkills, ...allSkills, ...allSkills, ...allSkills];

  return (
    <section className="w-full pb-16 relative">
      {/* Título tipo Header Full-Width */}
      <div className="w-[100vw] relative left-1/2 -translate-x-1/2 py-6 mb-12 bg-[#050505]/30">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#E04E0B] via-[#E04E0B]/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
          <FaRocket className="text-[#E04E0B] text-3xl md:text-4xl" />
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-wide">Stack Tecnológico</h2>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#E04E0B] via-[#E04E0B]/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="inline-block border-b-2 border-dotted border-[#E04E0B]/50 pb-1 mb-12">
          <h3 className="text-white text-lg font-bold">Tecnologías y Herramientas</h3>
        </div>

      {/* Carrusel de Tecnologías (Infinite Marquee) - Expandido al ancho total de la pantalla */}
      <div className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-hidden py-4">
          <div className="flex w-max animate-marquee whitespace-nowrap pause-hover">
            {marqueeSkills.map((skill, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 mx-8 group cursor-pointer"
              >
                <div className="text-[#E04E0B] text-3xl md:text-5xl transition-transform duration-300 group-hover:scale-110">
                   <skill.icon />
                </div>
                <span className="text-white font-bold text-lg md:text-2xl tracking-wide transition-colors group-hover:text-[#E04E0B]">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;