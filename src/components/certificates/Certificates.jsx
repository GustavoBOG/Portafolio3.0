import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

/**
 * Componente Certificates
 * Rejilla de tarjetas que muestran tu información educativa y certificaciones.
 * Implementado con un diseño premium glass-card.
 */
const Certificates = () => {
  const formationData = [
    {
      id: 1,
      institution: 'Big School',
      logo: '/images/certificates/bslogo.png',
      title: 'Desarrollo con IA (Especialización)',
      year: '2026',
      credentialUrl: null,
    },
    {
      id: 2,
      institution: 'Big School',
      logo: '/images/certificates/bslogo.png',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section className="w-full relative py-20 pb-40">
      {/* Título de Sección con Estilo Editorial */}
      <div className="w-full mb-20 relative">
        <div className="flex items-center gap-6 mb-4">
           <div className="h-[2px] w-12 bg-accent"></div>
           <span className="text-accent font-mono text-xs tracking-[0.3em] uppercase">Trayectoria</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
          Formación <br/> 
          <span className="text-textSecondary/40">&</span> Logros
        </h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formationData.map((item, i) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={i}
              className="group relative"
            >
              <div className="glass-card rounded-[2.5rem] p-8 h-full flex flex-col transition-all duration-500 hover:border-accent/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 rounded-2xl bg-white p-3 shadow-xl group-hover:scale-110 transition-transform duration-500">
                     <img
                       src={item.logo}
                       alt={item.institution}
                       className="w-full h-full object-contain"
                       onError={(e) => { e.target.src = 'https://via.placeholder.com/48?text=Logo'; }}
                     />
                  </div>
                  <span className="px-4 py-1.5 glass-panel rounded-full text-[10px] font-mono font-bold text-gray-500 group-hover:text-accent group-hover:bg-accent/10 transition-all duration-300">
                    {item.year}
                  </span>
                </div>

                <div className="flex-grow mb-8">
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-accent transition-colors leading-tight">
                    {item.institution}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    {item.title}
                  </p>
                </div>

                {item.credentialUrl && (
                  <div className="mt-auto pt-6 border-t border-white/5">
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-widest text-accent hover:text-white transition-colors"
                    >
                      Ver Credencial
                      <FaExternalLinkAlt size={8} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
