

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { IoMdDownload } from "react-icons/io";
import { LiaToolsSolid } from "react-icons/lia";
import { FaUserCircle } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { PiCertificateThin } from "react-icons/pi";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const menuItems = [
    { 
      path: "/Projects", 
      label: "Projects", 
      icon: <LiaToolsSolid className="mr-2 w-9 h-9 text-grisclaro" /> 
    },
    { 
      path: "/About", 
      label: "About Me", 
      icon: <FaUserCircle className="mr-2 w-9 h-9 text-vividBlue" /> 
    },
    { 
      path: "/Skills", 
      label: "Skills", 
      icon: <FaRegLightbulb className="mr-2 w-9 h-9 text-bombilla" /> 
    },
    { 
      path: "/Certificates", 
      label: "Certificates", 
      icon: <PiCertificateThin className="mr-2 w-9 h-9 text-vividBlue" /> 
    }
  ];

  return (
    <>
      {/* Fondo oscuro cuando el menú está abierto */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      <header className="bg-header text-white py-4 px-6 flex items-center justify-between w-full h-[80px] relative z-50">
        {/* Logo/Nombre */}
        <div className="mr-12">
          <Link 
            to="/" 
            className="text-primario font-roboto ml-10 text-h5 md:text-h3"
          >
            Gustavo Bolivar
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow">
          <ul className="flex space-x-9">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-h4 font-roboto hover:text-primario transition-colors ${
                    currentPath === item.path
                      ? "text-primario border-b-2 border-primario"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Download CV Button (Desktop) */}
        <a
          href="/cv/CV.pdf"
          download
          className="hidden md:flex bg-primario hover:bg-vividBlue text-h4 font-roboto rounded-full py-3 px-16 items-center transition-colors"
        >
          Download CV
          <IoMdDownload className="w-[30px] h-[30px] ml-2" />
        </a>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div 
            className="fixed top-0 right-0 w-[50%] h-full bg-header md:hidden z-50 shadow-lg"
          >
            <div className="flex justify-end p-4">
              <button 
                onClick={toggleMenu} 
                className="text-white focus:outline-none"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <ul className="flex flex-col">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={toggleMenu}
                    className={`flex items-center px-6 py-4 hover:bg-primario transition-colors ${
                      currentPath === item.path ? "bg-primario" : ""
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/cv/CV.pdf"
                  download
                  className="flex items-center px-6 py-4 hover:bg-primario transition-colors"
                  onClick={toggleMenu}
                >
                  <IoMdDownload className="mr-2 w-9 h-9" />
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
