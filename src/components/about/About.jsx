import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

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
        <div className="flex flex-col lg:flex-row items-center relative">
          
          {/* Tarjeta de Texto Izquierda */}
          <div className="w-full lg:w-3/4 xl:w-8/12 relative z-30 lg:-ml-4">
            <div className="bg-[#0b0b0b]/90 backdrop-blur-sm rounded-[32px] p-8 md:p-12 border border-[#E04E0B]/60 shadow-[0_0_30px_rgba(224,78,11,0.15)] transition-all hover:border-[#E04E0B] hover:shadow-[0_0_40px_rgba(224,78,11,0.25)]">
              
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-8">
                Hola, soy Gustavo Bolívar.
              </h3>
              
              <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed font-light">
                <p>
                  Soy un Full-Stack Developer Jr. especializado en JavaScript (React, Node.js, Express).
                </p>
                <p>Apasionado por construir productos donde diseño, experiencia de usuario y desarrollo trabajen juntos.</p>
                <p>Trabajo con una metodología basada en prototipar antes de programar, lo que me permite transformar ideas y diseños en aplicaciones funcionales sin perder la visión original del producto.</p>
                
                <p className="font-bold text-gray-300 text-sm md:text-base leading-relaxed font-light pt-4">
                  Entusiasta de la Inteligencia Artificial
                  <br className="hidden md:block"/>
                  Alta adaptabilidad a nuevas tecnologías y entornos
                  <br className="hidden md:block"/>
                  Fuerte enfoque en trabajo en equipo y colaboración
                </p>
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

          {/* Version Mobile/Tablet: Robot ajustado abajo */}
          <div className="block lg:hidden w-full max-w-[350px] mx-auto mt-8 relative z-20 pointer-events-none">
            <img
              src="/images/robot2.png"
              alt="Robot 3D Saludando"
              className="w-full h-auto drop-shadow-[0_0_15px_rgba(224,78,11,0.2)] animate-[float_6s_ease-in-out_infinite]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
