import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaLinkedinIn } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { MdPhoneIphone } from "react-icons/md";

/**
 * Variantes de Animación para entrada escalonada
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

/**
 * Componente SocialIcons
 */
const SocialIcons = () => {
  const socialLinks = [
    { href: "https://github.com/GustavoBOG", icon: VscGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/gustavo-bolivar/", icon: FaLinkedinIn, label: "LinkedIn" }
  ];

  return (
    <motion.div variants={itemVariants} className="flex gap-3 mt-4 lg:mt-8">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl flex items-center justify-center glass-panel overflow-hidden transition-all duration-300 hover:border-accent/50"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <social.icon className="w-4 h-4 lg:w-5 lg:h-5 relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300" />
        </a>
      ))}
    </motion.div>
  );
};

/**
 * Componente ContactInfo
 */
const ContactInfo = () => (
  <motion.div variants={itemVariants} className="space-y-2 lg:space-y-4 mt-4 lg:mt-8">
    {[
      { icon: FaMapMarkerAlt, text: "Madrid, España" },
      { icon: MdPhoneIphone, text: "+34 603 534 213" },
      { icon: FaRegMessage, text: "gbolivar.dev@gmail.com" }
    ].map((item, i) => (
      <div key={i} className="flex items-center gap-3 lg:gap-4 group cursor-default">
        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl glass-panel flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
          <item.icon className="text-accent w-3 h-3 lg:w-4 lg:h-4 group-hover:scale-110 transition-transform" />
        </div>
        <span className="text-xs lg:text-sm tracking-wide text-gray-400 group-hover:text-white transition-colors">
          {item.text}
        </span>
      </div>
    ))}
  </motion.div>
);

/**
 * Componente AvailabilityBadge
 */
const AvailabilityBadge = () => (
  <motion.div 
    variants={itemVariants}
    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel w-fit shadow-sm hover:border-accent/40 transition-colors"
  >
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
    </span>
    <span className="text-[9px] font-bold tracking-[0.2em] text-accent uppercase">Disponible</span>
  </motion.div>
);

const Home = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="relative flex items-center min-h-[calc(100vh-80px)] py-6 lg:py-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 h-full flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-16 lg:pl-16 w-full">
          
          {/* 1. Badge - Orden 1 en móvil */}
          <div className="w-full lg:hidden flex justify-center order-1 mb-2">
             <AvailabilityBadge />
          </div>

          {/* 2. Imagen de Perfil - Compacta en móvil, Orden 2 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut", delay: 0.2 } }
            }}
            className="relative lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-last mb-4 lg:mb-0"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-accent/5 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative">
              <motion.img
                src="/images/profile2.png" 
                alt="Gustavo Bolivar"
                fetchPriority="high"
                className="w-full max-w-[160px] sm:max-w-[220px] lg:max-w-[550px] h-auto object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative z-10 animate-float"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-black/40 blur-xl rounded-full opacity-50" />
            </div>
          </motion.div>

          {/* 3. Texto - Orden 3 en móvil */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 order-3 text-center lg:text-left">
            <div className="hidden lg:block mb-8">
               <AvailabilityBadge />
            </div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[88px] font-black uppercase tracking-tighter leading-[0.9] mb-4 lg:mb-6"
            >
              <span className="text-gradient block">GUSTAVO</span>
              <span className="text-gradient-accent block">BOLÍVAR</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 text-sm md:text-xl font-medium tracking-tight border-l-4 border-accent pl-4 py-1 mb-2 italic"
            >
              Arquitecto de experiencias <span className="text-accent">Full-Stack</span> & Diseñador Visual.
            </motion.p>

            <ContactInfo />
            <SocialIcons />
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Home;