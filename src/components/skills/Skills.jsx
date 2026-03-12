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

  const marqueeSkills = [...allSkills, ...allSkills, ...allSkills, ...allSkills];

  return (
    <section className="w-full relative py-20 overflow-hidden">
      {/* Título de Sección con Estilo Editorial */}
      <div className="w-full mb-16 relative">
        <div className="flex items-center gap-6 mb-4">
           <div className="h-[2px] w-12 bg-accent"></div>
           <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase">Tecnologías</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
          Stack <br/> 
          <span className="text-textSecondary/40">Técnico</span>
        </h2>
      </div>

      {/* Contenedor del Marquee con Glassmorphism */}
      <div className="relative py-10">
        {/* Sombras laterales para difuminado de entrada/salida */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee group-hover:pause-animation gap-12 pr-12">
            {marqueeSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-6 glass-panel rounded-2xl px-10 py-6 transition-all duration-500 hover:border-accent/40 hover:bg-accent/5 hover:-translate-y-1 group/card"
              >
                <div className="text-3xl md:text-4xl text-accent/80 group-hover/card:text-accent group-hover/card:scale-110 transition-all duration-500">
                  <skill.icon />
                </div>
                <span className="text-lg md:text-xl font-bold tracking-tight text-gray-300 group-hover/card:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Descripción final sutil */}
      <p className="text-center text-gray-500 text-sm mt-12 font-light tracking-wide max-w-2xl mx-auto">
        Explorando constantemente las últimas fronteras del desarrollo para crear soluciones de alto rendimiento con <span className="text-accent">JavaScript</span> y ecosistemas modernos.
      </p>
    </section>
  );
};

export default Skills;