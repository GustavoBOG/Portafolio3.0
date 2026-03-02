import React from 'react';
import { FaAward } from "react-icons/fa";

const Certificates = () => {
  // Datos alineados con la imagen de diseño
  const formationData = [
    {
      id: 1,
      institution: 'Big School',
      logo: '/images/certificates/bslogo.png',
      title: 'Desarrollo con IA (Especialización)',
      year: '2025'
    },
    {
      id: 2,
      institution: 'Big School',
      logo: '/images/certificates/bslogo.png', // Duplicado en el diseño
      title: 'Desarrollo con IA (Especialización)',
      year: '2025'
    },
    {
      id: 3,
      institution: 'Hack A Boss',
      logo: '/images/certificates/hackaboss.png',
      title: 'UX/UI Design: Primeros Pasos l',
      year: '2025'
    },
    {
      id: 4,
      institution: 'Hack A Boss',
      logo: '/images/certificates/hackaboss.png',
      title: 'Bootcamp Desarrollador Full Stack l',
      year: '2024'
    },
    {
      id: 5,
      institution: 'Udemy',
      logo: '/images/certificates/u.png',
      title: 'Especialización en Maquetación (Máster en CSS y HTML5)',
      year: '2024'
    },
    {
      id: 6,
      institution: 'U.E Colegio Tirso De Molina',
      logo: '/images/profile2.png', // Fallback, no hay logo en assets aparentemente
      title: 'Bachiller en Ciencias l',
      year: '2013'
    }
  ];

  return (
    <section className="w-full py-16 relative">
      {/* Línea divisoria superior de sección con degradado completo */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#FF4D00] to-transparent"></div>
      
      {/* Línea divisoria intermedia naranja corta (estilo viñeta) */}
      <div className="absolute top-0 left-[10%] w-[1px] h-24 bg-gradient-to-b from-[#FF4D00] to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative pt-8">
        
        {/* Título de Sección */}
        <div className="flex items-center gap-4 mb-12 border-b border-gray-800 pb-4">
          <FaAward className="text-accent text-3xl md:text-4xl" />
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-wide">Formación</h2>
        </div>

        {/* Grid de Formación */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formationData.map((item) => (
            <div
              key={item.id}
              className="bg-surface rounded-2xl p-6 border border-gray-800 hover:border-accent group hover:shadow-[0_0_15px_rgba(255,69,0,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-md flex items-center justify-center p-1 overflow-hidden">
                     <img 
                       src={item.logo} 
                       alt={`Logo de ${item.institution}`} 
                       className="w-full h-full object-contain"
                       onError={(e) => {
                         // Fallback para imágenes no encontradas
                         e.target.src = 'https://via.placeholder.com/48?text=Logo';
                       }}
                     />
                  </div>
                  <h3 className="text-white text-xl font-bold">
                    {item.institution}
                  </h3>
                </div>
                
                <p className="text-gray-300 text-sm md:text-base">
                  {item.title} ({item.year})
                </p>
              </div>

              <div className="mt-6">
                <button className="bg-[#2A2A2A] text-gray-300 hover:text-white hover:bg-accent border border-gray-700 hover:border-accent transition-colors text-xs font-semibold px-4 py-1.5 rounded-md">
                  Ver
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
