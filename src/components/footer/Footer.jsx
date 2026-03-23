import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker, HiCheck } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Footer Component
 * Proporciona el cierre del sitio con enlaces de navegación, redes sociales,
 * información de contacto y estado de disponibilidad.
 */
const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [copied, setCopied] = useState(false);
  
  const email = "gbolivar.dev@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const menuItems = [
    { target: "inicio", label: "Inicio" },
    { target: "proyectos", label: "Proyectos" },
    { target: "sobre-mi", label: "Sobre Mí" },
    { target: "formacion", label: "Formación" }
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/GustavoBOG", label: "GitHub" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/gustavobolivar", label: "LinkedIn" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full pt-20 pb-10 overflow-hidden border-t border-white/5 bg-background"
    >
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/3 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      {/* Notificación de Copiado */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-10 left-1/2 z-[100] px-6 py-3 rounded-2xl bg-white text-black font-bold text-xs uppercase tracking-widest shadow-2xl flex items-center gap-3 border border-white/10"
          >
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
              <HiCheck size={14} />
            </div>
            Copiado en el portapapeles
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Identidad */}
          <div className="space-y-6">
            <RouterLink 
              to="/" 
              className="flex items-center gap-2 group"
              onClick={() => isHomePage && window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(224,78,11,0.2)] group-hover:scale-110 transition-transform duration-300">
                G
              </div>
              <div>
                <span className="text-white font-bold tracking-tighter text-lg uppercase">Bolívar</span>
                <span className="block text-[10px] text-accent font-mono leading-none tracking-[0.2em] -mt-1 uppercase font-bold">Dev & Design</span>
              </div>
            </RouterLink>
            <p className="text-textSecondary text-sm leading-relaxed max-w-xs">
              Diseño y desarrollo experiencias digitales excepcionales con un enfoque en la elegancia, la funcionalidad y el rendimiento.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-white/5 flex items-center justify-center text-textSecondary hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Navegación</h4>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.target}>
                  {isHomePage ? (
                    <ScrollLink
                      to={item.target}
                      spy={true}
                      smooth="true"
                      offset={-100}
                      duration={800}
                      className="text-textSecondary hover:text-accent text-sm transition-colors cursor-pointer flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-3" />
                      {item.label}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to={`/#${item.target}`}
                      className="text-textSecondary hover:text-accent text-sm transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-3" />
                      {item.label}
                    </RouterLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Hablemos</h4>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${email}`} className="group flex items-start gap-3">
                  <div className="mt-1 text-accent"><HiOutlineMail size={18} /></div>
                  <div>
                    <span className="block text-xs text-textSecondary uppercase font-mono tracking-widest mb-0.5 font-bold">Email</span>
                    <span className="text-sm text-white group-hover:text-accent transition-colors">{email}</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 text-accent"><HiOutlineLocationMarker size={18} /></div>
                <div>
                  <span className="block text-xs text-textSecondary uppercase font-mono tracking-widest mb-0.5 font-bold">Ubicación</span>
                  <span className="text-sm text-white">Madrid, España</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna 4: Estado */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Estado</h4>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-green-500/80 font-bold">Disponible para trabajar</span>
              </div>
              <p className="text-xs text-textSecondary leading-relaxed">
                Actualmente aceptando proyectos como freelance y oportunidades de tiempo completo.
              </p>
              <button 
                onClick={handleCopyEmail}
                className="block w-full py-2 bg-accent hover:bg-accent-hover text-white text-center text-[10px] font-bold uppercase tracking-widest rounded-lg transition-colors"
                aria-label="Copiar email de contacto"
              >
                {copied ? '¡Email Copiado!' : 'Iniciar Proyecto'}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar Simple */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-textSecondary text-[10px] font-mono uppercase tracking-widest font-bold">
          <p>
            © {currentYear} GUSTAVO BOLÍVAR
          </p>
          <div className="flex items-center gap-2">
            Hecho con <span className="text-accent">♥</span> en React
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;


