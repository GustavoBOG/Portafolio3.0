import { FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

/**
 * Componente Certificates
 * Rejilla de tarjetas que muestran tu información educativa. Formación,
 * certificaciones obtenidas o bootcamps cursados.
 *
 * MEJORA AUDIT: Cada item tiene `credentialUrl`. Si existe enlace, el botón
 * "Ver credencial" es funcional. Si es null, el botón no se renderiza (eliminando UI muerta).
 */
const Certificates = () => {
  // Datos alineados con la imagen de diseño
  const formationData = [
    {
      id: 1,
      institution: 'Big School',
      logo: '/images/certificates/bslogo.png',
      title: 'Desarrollo con IA (Especialización)',
      year: '2026',
      credentialUrl: null, // Añade la URL cuando obtengas el certificado
    },
    {
      id: 2,
      institution: 'Big School',
      logo: '/images/certificates/bslogo.png', // Duplicado en el diseño
      title: 'Desarrollo con IA (Especialización)',
      year: '2025',
      credentialUrl: null,
    },
    {
      id: 3,
      institution: 'Hack A Boss',
      logo: '/images/certificates/hackaboss.png',
      title: 'UX/UI Design: Primeros Pasos l',
      year: '2025',
      credentialUrl: null,
    },
    {
      id: 4,
      institution: 'Hack A Boss',
      logo: '/images/certificates/hackaboss.png',
      title: 'Bootcamp Desarrollador Full Stack l',
      year: '2024',
      credentialUrl: null,
    },
    {
      id: 5,
      institution: 'Udemy',
      logo: '/images/certificates/u.png',
      title: 'Especialización en Maquetación (Máster en CSS y HTML5)',
      year: '2024',
      credentialUrl: null,
    },
    {
      id: 6,
      institution: 'U.E Colegio Tirso De Molina',
      logo: '/images/logoTirso.png',
      title: 'Bachiller en Ciencias l',
      year: '2013',
      credentialUrl: null,
    }
  ];

  // Variantes de animación para entrada en scroll
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
    }),
  };

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

        {/* Grid de Formación Premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {formationData.map((item, i) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={i}
              className="group relative overflow-hidden bg-[#0A0A0A]/80 backdrop-blur-md rounded-2xl p-8 border border-white/5 transition-all duration-500 hover:border-[#E04E0B]/50 hover:shadow-[0_0_30px_rgba(224,78,11,0.15)] hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Efecto de resplandor interno en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E04E0B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10 w-full mb-6">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 bg-white border border-white/10 rounded-2xl flex items-center justify-center p-2.5 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 shadow-lg">
                     <img
                       src={item.logo}
                       alt={`Logo de ${item.institution}`}
                       className="w-full h-full object-contain filter drop-shadow-sm"
                       onError={(e) => {
                         e.target.src = 'https://via.placeholder.com/48?text=Logo';
                       }}
                     />
                  </div>
                  <span className="px-3 py-1 font-mono text-xs font-medium tracking-wider rounded-full bg-white/5 border border-white/10 text-gray-400 group-hover:text-[#E04E0B] group-hover:bg-[#E04E0B]/10 group-hover:border-[#E04E0B]/30 transition-all duration-300">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-white text-xl md:text-2xl font-bold mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {item.institution}
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                  {item.title}
                </p>
              </div>

              {/* CORRECCIÓN AUDIT: Solo muestra "Ver credencial" si existe una URL real.
                  Cuando tengas el link, rellena el campo `credentialUrl` del item correspondiente. */}
              {item.credentialUrl ? (
                <div className="mt-4 relative z-10 border-t border-white/5 pt-6">
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-semibold text-gray-400 group-hover:text-[#E04E0B] transition-colors duration-300 w-fit"
                  >
                    <span className="tracking-wide uppercase text-xs">Ver credencial</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
