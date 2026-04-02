import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Componente Header (Barra de Navegación)
 * Navegación fija tipo "Sticky Navbar". Contiene el menú desktop y su contraparte
 * responsive para móvil con menú lateral (drawer) y desenfoques visuales.
 *
 * Comportamiento de navegación:
 * - En la ruta "/" → usa react-scroll para navegar entre secciones de la misma página.
 * - En otras rutas → navega a "/#sección" usando react-router-dom.
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Detectar si estamos en la Home para habilitar scroll suave
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  useEffect(() => {
    // Optimización: Usar passive: true para mejorar el rendimiento del scroll
    const handleScroll = () => {
      const offset = window.scrollY > 30;
      if (isScrolled !== offset) {
        setIsScrolled(offset);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  // Bloquear scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const menuItems = [
    { target: "inicio", label: "Inicio" },
    { target: "proyectos", label: "Proyectos" },
    { target: "sobre-mi", label: "Sobre Mí" },
    { target: "formacion", label: "Formación" }
  ];

  /**
   * handleNavClick
   * Gestiona la navegación tanto interna (scroll) como externa (rutas).
   */
  const handleNavClick = (target) => {
    if (isMenuOpen) setIsMenuOpen(false);

    if (!isHomePage) {
      navigate(`/#${target}`);
    }
  };

  // Efecto para manejar el scroll automático cuando se llega con un hash en la URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    }
  }, [location]);

  return (
    <>
      {/* Overlay para el menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={toggleMenu}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'py-3 bg-background/80 backdrop-blur-md border-b border-white/5' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Logo / Identidad Visual */}
          <RouterLink 
            to="/" 
            className="group flex items-center gap-2 focus:outline-none"
            onClick={() => isHomePage && window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(224,78,11,0.3)] group-hover:scale-110 transition-transform duration-300">
              G
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold tracking-tighter text-lg">BOLÍVAR</span>
              <span className="block text-[10px] text-accent font-mono leading-none tracking-[0.2em] -mt-1 uppercase">Dev & Design</span>
            </div>
          </RouterLink>

          {/* Navegación Desktop */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {menuItems.map((item) => (
                <li key={item.target}>
                  {isHomePage ? (
                    <ScrollLink
                      to={item.target}
                      spy={true}
                      smooth="true"
                      offset={-100}
                      duration={800}
                      activeClass="!text-accent after:scale-x-100"
                      className="relative text-textSecondary hover:text-white text-xs tracking-[0.15em] font-bold uppercase cursor-pointer transition-colors duration-300 py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-accent after:scale-x-0 after:transition-transform after:duration-300"
                    >
                      {item.label}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to={`/#${item.target}`}
                      className="text-textSecondary hover:text-white text-xs tracking-[0.15em] font-bold uppercase transition-colors duration-300 py-2"
                      onClick={() => handleNavClick(item.target)}
                    >
                      {item.label}
                    </RouterLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Botón CTA Header - Descargar CV */}
          <div className="hidden md:block">
             <a 
               href="/cv/cv2.0.png" 
               download="CV_Gustavo_Bolivar.png"
               className="px-5 py-2 rounded-full border border-accent/30 text-accent text-[10px] font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300"
             >
                Descargar CV
             </a>
          </div>

          {/* Botón Menú Móvil */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-label="Alternar menú de navegación"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-accent transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-4 h-0.5 bg-white self-end transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 !w-6' : ''}`} />
          </button>
        </div>

        {/* Menú Lateral Móvil (Drawer) */}
        <aside
          className={`fixed top-0 right-0 w-[80%] max-w-sm h-full bg-[#050505] border-l border-white/5 z-50 transform transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isMenuOpen ? 'translate-x-0 shadow-2xl shadow-accent/10' : 'translate-x-full'}`}
        >
          <div className="flex flex-col h-full p-8">
            <div className="flex justify-end mb-12">
               <button onClick={toggleMenu} className="text-gray-400 hover:text-white"><FiX size={28}/></button>
            </div>
            <ul className="space-y-6">
              {menuItems.map((item, idx) => (
                <li key={item.target}>
                  {isHomePage ? (
                    <ScrollLink
                      to={item.target}
                      spy={true}
                      smooth="true"
                      offset={-80}
                      duration={800}
                      onClick={toggleMenu}
                      className="block text-2xl font-black uppercase tracking-tighter text-textSecondary hover:text-accent transition-colors cursor-pointer"
                    >
                      <span className="text-xs font-mono text-accent mr-2">0{idx + 1}.</span>
                      {item.label}
                    </ScrollLink>
                  ) : (
                    <RouterLink
                      to={`/#${item.target}`}
                      onClick={() => handleNavClick(item.target)}
                      className="block text-2xl font-black uppercase tracking-tighter text-textSecondary hover:text-accent transition-colors"
                    >
                      <span className="text-xs font-mono text-accent mr-2">0{idx + 1}.</span>
                      {item.label}
                    </RouterLink>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a 
                href="/cv/cv2.0.png" 
                download="CV_Gustavo_Bolivar.png"
                onClick={toggleMenu}
                className="w-full inline-block px-6 py-4 rounded-xl border border-accent/30 text-accent text-center text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300"
              >
                Descargar CV
              </a>
            </div>

            <div className="mt-auto pt-8 border-t border-white/5">
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest leading-relaxed">
                  Basado en Madrid, <br/>disponible para proyectos globales.
                </p>
            </div>
          </div>
        </aside>
      </header>
    </>
  );
};

export default Header;
