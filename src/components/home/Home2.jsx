import { motion } from "framer-motion";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";

/**
 * Frontend Design - Intentional Aesthetic: Brutalist Editorial + Luxury Minimal
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const SocialIcons = () => {
  const socialLinks = [
    { href: "https://wa.me/34603534213", icon: FaWhatsapp, label: "WhatsApp" },
    { href: "https://www.linkedin.com/in/gustavo-bolivar/", icon: FaLinkedinIn, label: "LinkedIn" },
    { href: "https://github.com/GustavoBOG", icon: VscGithub, label: "GitHub" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1, ease: "easeOut" }}
      className="flex gap-4 md:gap-6 justify-center"
    >
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/40 transition-all duration-300 hover:border-[#E04E0B] hover:bg-[#E04E0B]/20 overflow-hidden cursor-pointer pointer-events-auto shadow-xl"
          title={social.label}
        >
          <social.icon className="w-4 h-4 md:w-5 md:h-5 relative z-10 text-white group-hover:text-white group-hover:scale-110 transition-all duration-300 drop-shadow-md" />
        </a>
      ))}
    </motion.div>
  );
};

const Home2 = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      /* Altura calculada para restar el header (80px) y no generar ningún scroll */
      className="relative w-full h-[calc(100svh-80px)] min-h-[500px] overflow-hidden bg-[#050505] flex items-center justify-center"
    >
      {/* Dynamic Animated Gradient Injection */}
      <style>
        {`
          @keyframes flowGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .massive-text {
            background: linear-gradient(
              -45deg, 
              #B83E06 0%,  /* Base naranja oscurecida */
              #CC5E14 20%,  /* Reemplazo del amarillo por un ocre/naranja mate y cálido */
              #A33400 40%,  /* Tono rojizo apagado */
              #421000 60%,  /* Sombra profunda para dar volumen sin lastimar */
              #D14C08 80%,  /* Naranja de acento más controlado */
              #B83E06 100%
            );
            background-size: 300% 300%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            animation: flowGradient 7s ease-in-out infinite;
            -webkit-font-smoothing: antialiased;
          }
        `}
      </style>

      {/* 1. TEXTO GIGANTE EN EL FONDO (Totalmente Responsive) */}
      {/* El mt-[-12vh] desplaza los textos más arriba para cubrir el hueco con el header en móviles */}
      <div className="absolute top-[10%] md:top-[12%] flex flex-col items-center w-full pointer-events-none select-none z-0 px-2 lg:px-0">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="w-full text-center tracking-tighter"
        >
          {/* MÓVIL: "G B" en horizontal absoluto */}
          <div className="md:hidden text-[55vw] sm:text-[45vw] font-black uppercase massive-text whitespace-nowrap flex justify-center items-center gap-[4vw] leading-none mb-8">
            <span>G</span>
            <span>B</span>
          </div>

          {/* ESCRITORIO / TABLET: Líneas apiladas tradicionales */}
          <div className="hidden md:block text-[16vw] lg:text-[16vw] xl:text-[17vw] font-black uppercase massive-text whitespace-nowrap leading-[0.95] md:leading-[1.05]">
            GUSTAVO
          </div>
          <div className="hidden md:block text-[16vw] lg:text-[16vw] xl:text-[17vw] font-black uppercase massive-text whitespace-nowrap mt-[1vh] lg:mt-[2vh] leading-[0.95] md:leading-[1.05]">
             BOLIVAR
          </div>
        </motion.div>
      </div>

      {/* 2. IMAGEN DEL PERFIL SUPERPUESTA (Atada al fondo de la pantalla) */}
      <div className="absolute bottom-0 w-full flex justify-center pointer-events-none z-10 px-4 md:px-0">
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 } }
          }}
          /* En móviles mantenemos min-w, pero en escritorio damos libertad total de ancho para que se rija por la altura de la pantalla */
          className="relative min-w-[600px] sm:min-w-[650px] md:min-w-0 md:w-full flex justify-center"
        >
          <img
            src="/images/photos/meprofile.png" 
            alt="Gustavo Bolivar"
            fetchPriority="high"
            /* 
              Cambio clave: En pantallas medianas y grandes forzamos w-auto y determinamos la altura con vh. 
              Esto garantiza que en pantallas de resoluciones gigantescas/cuadradas (ej 1800px) suba y llene la pantalla armónicamente.
            */
            className="w-full h-auto max-h-[75svh] sm:max-h-[80svh] md:w-auto md:h-[85vh] lg:h-[86vh] xl:h-[88vh] object-contain object-bottom filter drop-shadow-[0_-5px_50px_rgba(0,0,0,0.85)] relative z-10"
          />
        </motion.div>
      </div>

      {/* 3. ICONOS SOCIALES SOBRE LA FOTO (Nivel del pecho/chaqueta ajustado por pantallas) */}
      <div className="absolute bottom-[5%] md:bottom-[10%] lg:bottom-[12%] z-50 w-full pointer-events-auto">
        <SocialIcons />
      </div>
      
    </motion.section>
  );
};

export default Home2;
