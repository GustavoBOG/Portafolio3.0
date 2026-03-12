import React from 'react';
import { motion } from "framer-motion";
import { FaRegUserCircle } from 'react-icons/fa';

/**
 * Componente AboutMe
 * Esta sección renderiza la información de tu perfil personal de una manera
 * estilizada visualmente (efectos de difuminado y tarjetas con text-gradients), 
 * superponiendo tu contenido sobre una mascota de render 3D (Robot).
 */
const AboutMe = () => {
  return (
    <section className="w-full relative py-20 overflow-visible">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Título de Sección con Estilo Editorial */}
        <div className="w-full mb-20 relative text-left">
          <div className="flex items-center gap-6 mb-4">
             <div className="h-[2px] w-12 bg-accent"></div>
             <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase">Historia</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none">
            Sobre <br/> 
            <span className="text-textSecondary/40">Mí</span>
          </h2>
        </div>

        <div className="flex flex-col-reverse min-[1177px]:flex-row items-center relative">
          
          {/* Tarjeta de Biografía */}
          <div className="w-full min-[1177px]:w-3/4 xl:w-7/12 relative z-30 group">
            <div className="glass-panel rounded-[3rem] p-10 md:p-14 transition-all duration-700 hover:border-accent/30 hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden relative">
               
               {/* Resplandor interno dinámico */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full group-hover:bg-accent/10 transition-colors duration-700" />

               <h3 className="text-3xl md:text-4xl font-black mb-10 leading-tight">
                 Hola, soy <span className="text-gradient-accent">Gustavo Bolívar.</span>
               </h3>
              
               <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-light">
                 <p>
                   Soy un desarrollador <strong className="text-white font-bold italic">Full-Stack</strong> con alma de diseñador. Mi enfoque no es solo escribir código, sino esculpir experiencias digitales que generen impacto.
                 </p>
                 <p>
                   Me especializo en ecosistemas modernos de <span className="text-white">JavaScript</span>, donde fusiono la precisión técnica con una estética visual de vanguardia. Mi objetivo es que cada interfaz cuente una historia coherente y memorable.
                 </p>
                 
                 <div className="pt-10 mt-10 border-t border-white/5">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        "Inteligencia Artificial aplicada",
                        "Arquitectura de Interfaces",
                        "Obsesión por el detalle",
                        "Metodologías Ágiles",
                      ].map((skill, i) => (
                        <div key={i} className="flex items-center gap-3">
                           <div className="w-5 h-5 rounded-lg glass-panel flex items-center justify-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                           </div>
                           <span className="text-sm font-bold tracking-wide text-gray-300 uppercase">{skill}</span>
                        </div>
                      ))}
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Asset 3D: El Robot - Reposicionado para evitar cortes */}
          <div className="relative w-full min-[1177px]:w-2/5 flex justify-center min-[1177px]:absolute min-[1177px]:-right-20 min-[1177px]:top-1/2 min-[1177px]:-translate-y-1/2 z-20 pointer-events-none mb-12 min-[1177px]:mb-0">
             {/* Glow de profundidad expansivo */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-accent/5 blur-[160px] rounded-full pointer-events-none" />
             
             <motion.img
               initial={{ opacity: 0, x: 100 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
               src="/images/robot2.png"
               alt="Robot 3D"
               className="w-full h-auto max-w-[500px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] animate-float"
             />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
