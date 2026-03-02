import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode } from 'react-icons/fa';
import { LiaCertificateSolid } from 'react-icons/lia';
import { projects } from '../../data/projectsData';
import { certificates } from '../../data/certificatesData';

const AboutMe = () => {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] bg-background py-16 relative">
      <div className="container mx-auto px-4">


        {/* Contenido principal */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between relative">
          {/* Columna izquierda - Texto */}
          <div className="lg:w-8/12 pr-0 lg:pr-12 z-10">
            <div className="lg:max-w-full">
              <p className="text-text text-h3 lg:text-h1 mb-8 leading-relaxed ">
                Hola, soy Gustavo Bolívar.
              </p>
              <p className="text-text text-h5 mb-2 leading-relaxed">
                Mi camino no empezó en la programación, pero cuando descubrí lo que se siente al construir algo útil desde cero, supe que no había vuelta atrás.
              </p>
              <p className="text-text text-h5 mb-2 leading-relaxed">
                Decidí cambiar el rumbo de mi carrera para dedicarme a lo que de verdad me divierte: <strong>buscar soluciones reales a través del código.</strong>
              </p>
              <p className="text-text text-h5 mb-2 leading-relaxed">
                No me conformo con que algo simplemente funcione; me gusta que tenga sentido y que aporte valor.
              </p>
              <p className="text-text text-h5 mb-2 leading-relaxed">
                Aunque no soy diseñador de formación, soy de los que se fijan en los detalles y disfrutan creando interfaces que sean fáciles y agradables de usar.
              </p>
              <p className="text-text text-h3 lg:text-h2 mb-8 leading-relaxed">
                ¿Mi filosofía?
              </p>
              <p className="text-text text-h5 leading-relaxed mb-8">
                Muy simple: <strong>Honestidad ante todo, aprender algo nuevo cada día y ponerle ganas a cada proyecto que construyo.</strong>
              </p>
            </div>
          </div>

          {/* Columna derecha - Imagen (posición absoluta) */}
          <div className="absolute right-0 lg:right-4 top-0 lg:w-5/12 h-full z-0">
            <div className="relative w-full h-full">
              <img
                src="/images/robot.png"
                alt="Robot"
                className="relative w-full max-w-lg object-contain 
             bottom-[-750px] sm:bottom-[-40px] md:bottom-[-60px] lg:bottom-10 
             left-[-30px] sm:left-[80px] md:left-[120px] lg:left-[150px]"
              />
            </div>
          </div>
        </div>

        {/* Tarjetas - Centradas debajo */}
        <div className="w-full flex justify-center mt-64 md:mt-12 z-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-5xl">
            {/* Tarjeta Proyectos - Con Link y efecto hover */}
            <Link to="/projects" className="block">
              <div className="bg-card rounded-2xl relative h-48 min-w-[320px] md:w-[500px] cursor-pointer transform transition-transform duration-300 hover:scale-105">
                <div
                  className="absolute w-full h-full top-0 left-0 rounded-2xl"
                  style={{
                    background: "linear-gradient(30deg, #1C4470 35%, #2963A3 50%, #1C4470 75%)",
                    boxShadow: "13px 13px 4px 4px rgba(0, 0, 0, 0.25)"
                  }}
                ></div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-text text-h4 bg-primario rounded-3xl bg-opacity-50 px-2 py-2">
                      <FaCode />
                    </span>
                    <span className="text-text text-h2">{projects.length}</span>
                  </div>
                  <h3 className="text-text text-h3 font-roboto mb-1">Proyectos</h3>
                  <p className="text-text text-h5">ver portafolio</p>
                </div>
              </div>
            </Link>

            {/* Tarjeta Certificados - Con Link y efecto hover */}
            <Link to="/certificates" className="block">
              <div className="bg-card rounded-2xl relative h-48 min-w-[320px] md:w-[500px] cursor-pointer transform transition-transform duration-300 hover:scale-105">
                <div
                  className="absolute w-full h-full top-0 left-0 rounded-2xl"
                  style={{
                    background: "linear-gradient(30deg, #1C4470 35%, #2963A3 50%, #1C4470 75%)",
                    boxShadow: "13px 13px 4px 4px rgba(0, 0, 0, 0.25)"
                  }}
                ></div>
                <div className="relative z-10 p-6 h-full flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-text text-h4 bg-primario rounded-3xl bg-opacity-50 px-2 py-2">
                      <LiaCertificateSolid />
                    </span>
                    <span className="text-text text-h2">{certificates.length}</span>
                  </div>
                  <h3 className="text-text text-h3 font-roboto mb-1">Certificados</h3>
                  <p className="text-text text-h5">ver logros</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
