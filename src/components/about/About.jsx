import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

/**
 * Componente AboutMe
 * Esta sección renderiza la información de tu perfil personal de una manera
 * estilizada visualmente (efectos de difuminado y tarjetas con text-gradients), 
 * superponiendo tu contenido sobre una mascota de render 3D (Robot).
 */
const AboutMe = () => {
  return (
    <section className="w-full relative pb-24">
      {/* Título tipo Header Full-Width */}
      <div className="w-[100vw] relative left-1/2 -translate-x-1/2 py-6 mt-12 mb-16 bg-[#050505]/30">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#E04E0B] via-[#E04E0B]/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4">
          <FaRegUserCircle className="text-[#E04E0B] text-4xl md:text-5xl" />
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-wide">Sobre Mi</h2>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#E04E0B] via-[#E04E0B]/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Use flex-col-reverse on mobile so the robot is above the card, but maintain flex-row on desktop */}
        <div className="flex flex-col-reverse lg:flex-row items-center relative">
          
          {/* Tarjeta de Texto Izquierda */}
          <div className="w-full lg:w-3/4 xl:w-8/12 relative z-30 lg:-ml-4 group">
            {/* Glowing background blob */}
            <div className="absolute inset-0 bg-[#E04E0B]/5 blur-[80px] rounded-[32px] pointer-events-none group-hover:bg-[#E04E0B]/10 transition-colors duration-700"></div>

            <div className="relative bg-[#0A0A0A]/80 backdrop-blur-xl rounded-[32px] p-8 md:p-12 border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden hover:border-[#E04E0B]/30 hover:shadow-[0_0_40px_rgba(224,78,11,0.15)]">
               
               {/* Animated inner glow */}
               <div className="absolute inset-0 bg-gradient-to-br from-[#E04E0B]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <h3 className="relative z-10 text-3xl md:text-4xl font-black mb-8 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 inline-block">
                Hola, soy <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#E04E0B] to-[#FF8C00]">Gustavo Bolívar.</span>
              </h3>
              
              <div className="relative z-10 space-y-5 text-gray-400 text-sm md:text-base leading-relaxed font-light">
                <p>
                  Soy un <strong className="text-gray-200 font-medium tracking-wide">Full-Stack Developer Jr.</strong> especializado en ecosistemas de JavaScript moderno.
                </p>
                <p>
                  Me apasiona construir productos donde <span className="text-gray-300">el diseño refinado, la experiencia de usuario y el desarrollo</span> trabajen en una perfecta sinergia. Mi objetivo siempre es crear interfaces que no solo funcionen, sino que cuenten una historia.
                </p>
                <p>
                  Sigo una metodología orientada al prototipado temprano, logrando transformar ideas abstractas en aplicaciones escalables con impacto visual, sin comprometer jamás el rendimiento.
                </p>
                
                <div className="pt-6 mt-6 border-t border-white/10">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium tracking-wide text-gray-300">
                    <li className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#E04E0B]"></div>
                       Inteligencia Artificial
                    </li>
                    <li className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#E04E0B]"></div>
                       Curva de aprendizaje rápida
                    </li>
                    <li className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#E04E0B]"></div>
                       Adaptabilidad a tecnologías
                    </li>
                    <li className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#E04E0B]"></div>
                       Enfoque colaborativo ágil
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* Imagen Robot Derecha */}
          
          {/* Version Desktop: Robot que sobresale por la derecha */}
          <div className="hidden lg:block absolute right-[-20%] xl:right-[-15.8%] top-1/2 -translate-y-[55%] z-20 pointer-events-none w-[500px] xl:w-[600px]">
            <img
              src="/images/robot2.png"
              alt="Robot 3D Saludando"
              className="w-full h-auto drop-shadow-[0_0_20px_rgba(224,78,11,0.15)] animate-[float_6s_ease-in-out_infinite]"
            />
          </div>

          {/* Version Mobile/Tablet: Robot arriba de la tarjeta y pegado a la izquierda */}
          <div className="block lg:hidden w-[120%] -ml-[10%] max-w-[400px] sm:-ml-[5%] relative z-20 pointer-events-none mb-[-2rem]">
            <img
              src="/images/robot2.png"
              alt="Robot 3D Saludando"
              className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(224,78,11,0.2)] animate-[float_6s_ease-in-out_infinite] origin-left"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
