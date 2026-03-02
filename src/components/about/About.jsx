import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section className="w-full py-16 overflow-hidden relative">
      {/* Línea divisoria superior de sección con degradado completo */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#FF4D00] to-transparent"></div>
      
      {/* Línea divisoria intermedia naranja corta (estilo viñeta) */}
      <div className="absolute top-0 left-[10%] w-[1px] h-24 bg-gradient-to-b from-[#FF4D00] to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative pt-8">
        
        {/* Título de Sección */}
        <div className="flex items-center gap-4 mb-4">
          <FaRegUserCircle className="text-accent text-4xl" />
          <h2 className="text-white text-3xl font-bold tracking-wide">Sobre Mi</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between relative mt-16">
          
          {/* Tarjeta de Texto Izquierda */}
          <div className="w-full lg:w-7/12 relative z-10">
            <div className="bg-surface rounded-3xl p-8 md:p-12 border border-accent/20 shadow-2xl relative">
              {/* Decoración de borde naranja leve en la parte superior izquierda */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-accent rounded-tl-3xl opacity-50"></div>
              
              <h3 className="text-white text-2xl font-bold mb-6">
                Hola, soy Gustavo Bolivar.
              </h3>
              
              <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                <p>
                  Hasta hace poco, llevaba una vida como la de cualquier otra persona, con hobbies y aspiraciones.
                  Seguí el camino tradicional: estudié, busqué trabajo y me adapté a lo que se esperaba...
                  Pero un día decidí tomar un giro diferente y diseñar mi propio camino.
                </p>
                <p>
                  Ahora, me he propuesto desarrollar y aprovechar al máximo todas mis habilidades en el mundo de la tecnología.
                </p>
                <p className="font-semibold text-white">
                  ¿Y adivina qué?
                </p>
                <p>
                  El resultado ha sido increíblemente satisfactorio y gratificante.
                  Me he convertido en un full stack developer motivado y comprometido a seguir creciendo.
                </p>
                <p>
                  Estoy decidido a convertirme en uno de los mejores en este campo, disfrutando cada paso del proceso.
                </p>
              </div>
            </div>
          </div>

          {/* Imagen Robot Derecha */}
          <div className="w-full lg:w-5/12 mt-12 lg:mt-0 flex justify-center lg:justify-end relative z-20">
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-[-50px] pointer-events-none">
              <img
                src="/images/robot.png"
                alt="Robot 3D"
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,69,0,0.3)] animate-[float_6s_ease-in-out_infinite]"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutMe;
