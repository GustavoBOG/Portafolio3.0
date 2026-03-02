import React, { useState, useEffect } from 'react';
import { certificates } from '../../data/certificatesData';

const Certificates = () => {
  const [isStacked, setIsStacked] = useState(true);
  const [expandedCertificate, setExpandedCertificate] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar tamaño de pantalla para ajustes responsivos
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const certificatesData = certificates;

  const cardWidth = 260;
  const gap = 24;
  const centerOffset = ((certificatesData.length - 1) * (cardWidth + gap)) / 2;

  const handleCertificateClick = (id) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    if (isStacked) {
      setIsStacked(false);
    } else if (expandedCertificate === id) {
      setExpandedCertificate(null);
    } else {
      setExpandedCertificate(id);
    }

    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  const renderExpandedCertificate = () => {
    const certificate = certificatesData.find(cert => cert.id === expandedCertificate);

    if (isMobile) {
      return (
        <div className="flex justify-center items-center w-full transition-all duration-700 ease-in-out">
          <div
            className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-xl cursor-pointer w-full max-w-sm"
            style={{ boxShadow: '16px 16px 4px rgba(0, 0, 0, 0.25)' }}
            onClick={() => handleCertificateClick(certificate.id)}
          >
            {/* Tarjeta superior en móvil */}
            <div className={`w-full p-6 flex flex-col items-center justify-center ${certificate.background} relative`}>
              <div className="absolute top-4 left-4 w-8 h-8 bg-background rounded-full flex items-center justify-center">
                <span className="text-white font-medium">{certificate.id}</span>
              </div>
              <h3 className="text-white text-lg font-bold mb-4 text-center font-roboto">{certificate.title}</h3>
              <img
                src={certificate.logo}
                alt={`Logo de ${certificate.title}`}
                className="h-32 w-auto object-contain"
              />
            </div>

            {/* Certificado expandido debajo en móvil */}
            <div className="w-full bg-white">
              <img
                src={certificate.certificate}
                alt={`Certificado de ${certificate.title}`}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      );
    } else {
      // Versión original exacta para desktop
      return (
        <div className="flex justify-center items-center w-full transition-all duration-700 ease-in-out">
          <div
            className="flex flex-row bg-white rounded-2xl overflow-hidden shadow-xl cursor-pointer h-[500px] max-w-6xl w-full"
            style={{ boxShadow: '16px 16px 4px rgba(0, 0, 0, 0.25)' }}
            onClick={() => handleCertificateClick(certificate.id)}
          >
            {/* Lado izquierdo - Tarjeta */}
            <div className={`w-[300px] p-6 flex flex-col items-center justify-center ${certificate.background}`}>
              <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-medium text-lg">{certificate.id}</span>
              </div>
              <h3 className="text-white text-lg font-bold mb-4 text-center font-roboto">{certificate.title}</h3>
              <img
                src={certificate.logo}
                alt={`Logo de ${certificate.title}`}
                className="h-32 w-auto object-contain"
              />
            </div>

            {/* Lado derecho - Imagen del certificado */}
            <div className="flex-grow bg-white">
              <img
                src={certificate.certificate}
                alt={`Certificado de ${certificate.title}`}
                className="w-full h-[500px] object-contain"
              />
            </div>
          </div>
        </div>
      );
    }
  };

  const renderAnimatedCertificates = () => {
    if (isMobile) {
      // Vista vertical para móviles - centrada
      return (
        <div className="relative flex flex-col items-center justify-start gap-8 w-full py-4">
          {certificatesData.map((certificate) => (
            <div
              key={certificate.id}
              className={`relative w-[260px] h-[320px] rounded-2xl shadow-lg ${certificate.background} cursor-pointer transition-all duration-500`}
              style={{ boxShadow: '8px 8px 4px rgba(0, 0, 0, 0.25)' }}
              onClick={() => handleCertificateClick(certificate.id)}
            >
              <div className="absolute top-4 left-4 w-8 h-8 bg-background rounded-full flex items-center justify-center">
                <span className="text-white font-medium">{certificate.id}</span>
              </div>
              <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-white text-lg font-roboto font-bold mb-4 mt-4">{certificate.title}</h3>
                <div className="flex items-center justify-center h-40">
                  <img
                    src={certificate.logo}
                    alt={`Logo de ${certificate.title}`}
                    className="h-32 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      // Código exactamente original para escritorio
      return (
        <div className="relative w-full h-[500px]">
          <div className="absolute top-16 left-[350px] -translate-x-1/2 -translate-y-1/2"> {/* Restaurada posición original */}
            {certificatesData.map((certificate, index) => {
              const translateX = !isStacked
                ? index * (cardWidth + gap) - centerOffset + cardWidth / 2
                : index * 20 - 20;

              const translateY = 0;
              const rotation = isStacked ? (index * 5 - 5) : 0;
              const z = isStacked ? certificatesData.length - index : 1;

              return (
                <div
                  key={certificate.id}
                  className={`absolute transition-transform duration-700 ease-in-out w-[260px] h-[320px] rounded-2xl shadow-lg transform ${certificate.background} cursor-pointer`}
                  style={{
                    transform: `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg)`,
                    zIndex: z
                  }}
                  onClick={() => handleCertificateClick(certificate.id)}
                >
                  <div className="absolute top-4 left-4 w-8 h-8 bg-background rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">{certificate.id}</span>
                  </div>
                  <div className="h-full flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-white text-lg font-roboto font-bold mb-4 mt-4">{certificate.title}</h3>
                    <div className="flex items-center justify-center h-40">
                      <img
                        src={certificate.logo}
                        alt={`Logo de ${certificate.title}`}
                        className="h-32 w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  };

  return (
    <section className="w-full min-h-[calc(100vh-80px)] bg-background py-10 relative">
      <div className="max-w-6xl mx-auto px-4 mt-28">
        {isStacked ? (
          renderAnimatedCertificates()
        ) : expandedCertificate ? (
          renderExpandedCertificate()
        ) : (
          renderAnimatedCertificates()
        )}
      </div>
    </section>
  );
};

export default Certificates;



