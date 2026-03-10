import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from "react-icons/fi";

/**
 * Componente Header (Barra de Navegación)
 * Navegación fija tipo "Sticky Navbar". Contiene el menú desktop y su contraparte
 * responsive para móvil con menú lateral (drawer) y desenfoques visuales.
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const menuItems = [
    { target: "inicio", label: "INICIO" },
    { target: "proyectos", label: "PROYECTOS" },
    { target: "sobre-mi", label: "SOBRE MI" },
    { target: "formacion", label: "FORMACIÓN" }
  ];

  return (
    <>
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={toggleMenu}
        />
      )}

      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-header/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'}`}>
        {/* Gradient Border Line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-header-gradient" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center relative">
          <div className="md:hidden absolute left-4">
            <span className="font-bold text-lg">
              <span className="text-white">G</span>
              <span className="text-accent">B</span>
            </span>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex space-x-12">
              {menuItems.map((item) => (
                <li key={item.target}>
                  <Link
                    to={item.target}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    activeClass="text-accent font-bold"
                    className="text-textSecondary hover:text-white text-sm tracking-widest font-semibold cursor-pointer transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden absolute right-4">
            <button 
              onClick={toggleMenu} 
              className="text-white hover:text-accent transition-colors focus:outline-none"
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div 
          className={`fixed top-0 right-0 w-[60%] h-full bg-surface shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        >
          <div className="flex justify-end p-6 border-b border-gray-800">
            <button 
              onClick={toggleMenu} 
              className="text-white hover:text-accent transition-colors focus:outline-none"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>
          <ul className="flex flex-col mt-8">
            {menuItems.map((item) => (
              <li key={item.target}>
                <Link
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={toggleMenu}
                  activeClass="text-accent border-l-4 border-accent pl-4 bg-gray-800/50"
                  className="block px-8 py-5 text-gray-300 hover:text-white hover:bg-gray-800/30 transition-all font-medium tracking-wide cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
