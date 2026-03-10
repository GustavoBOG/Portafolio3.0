import { FaMapMarkerAlt, FaLinkedinIn } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { MdPhoneIphone } from "react-icons/md";

/**
 * Componente SocialIcons
 * Renderiza los íconos con enlaces hacia redes sociales como GitHub y LinkedIn.
 * Integra efectos de hover premiun (resplandor y animación al pasar el cursor).
 */
const SocialIcons = () => {
  const socialLinks = [
    { href: "https://github.com/GustavoBOG", icon: VscGithub },
    { href: "https://www.linkedin.com/in/gustavo-bolivar/", icon: FaLinkedinIn }
  ];

  return (
    <div className="flex gap-4 mt-8 pt-4">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#E04E0B]/50 hover:shadow-[0_0_20px_rgba(224,78,11,0.2)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#E04E0B] to-[#FF8C00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <social.icon className="w-5 h-5 relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300" />
        </a>
      ))}
    </div>
  );
};

/**
 * Componente ContactInfo
 * Renderiza la información de contacto personal (Ubicación, Teléfono, Email).
 */
const ContactInfo = () => (
  <div className="space-y-4 mt-8">
    <div className="flex items-center gap-4 group cursor-default">
      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#E04E0B]/50 group-hover:bg-[#E04E0B]/10 transition-colors">
        <FaMapMarkerAlt className="text-[#E04E0B] w-4 h-4 group-hover:scale-110 transition-transform" />
      </div>
      <span className="text-sm tracking-wide text-gray-400 group-hover:text-white transition-colors">Madrid, España</span>
    </div>
    <div className="flex items-center gap-4 group cursor-default">
      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#E04E0B]/50 group-hover:bg-[#E04E0B]/10 transition-colors">
        <MdPhoneIphone className="text-[#E04E0B] w-4 h-4 group-hover:scale-110 transition-transform" />
      </div>
      <span className="text-sm tracking-wide text-gray-400 group-hover:text-white transition-colors">+34 603 534 213</span>
    </div>
    <div className="flex items-center gap-4 group cursor-default">
      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#E04E0B]/50 group-hover:bg-[#E04E0B]/10 transition-colors">
        <FaRegMessage className="text-[#E04E0B] w-4 h-4 group-hover:scale-110 transition-transform" />
      </div>
      <span className="text-sm text-gray-400 group-hover:text-white transition-colors tracking-widest">gbolivar.dev@gmail.com</span>
    </div>
  </div>
);

/**
 * Componente Principal Home (Hero Section)
 * Es la primera vista al entrar a la página. 
 * Contiene la foto de perfil, un identificador de estado ("Disponible") y el título principal.
 */
const Home = () => {
  return (
    <section className="relative flex items-center min-h-[calc(100vh-100px)] py-12">

      {/* Structural Lines */}
      <div className="absolute -left-12 -top-2 bottom-0 w-[1px] bg-gradient-to-b from-[#E04E0B]/20 via-[#E04E0B] to-transparent z-10 hidden lg:block" />

      {/* Main Container */}
      <div className="w-full h-full relative z-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 w-full h-full pl-0 lg:pl-16">
          
          {/* Profile Image Column */}
          <div className="relative w-[300px] md:w-[450px] lg:w-[500px] xl:w-[600px] flex-shrink-0 flex justify-center lg:justify-start group perspective-[1000px]">
            {/* Glowing orbs for 3D effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#E04E0B]/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#E04E0B]/30 group-hover:blur-[100px] transition-all duration-1000"></div>
            
            <img
              src="/images/profile2.png" 
              alt="Gustavo Bolivar"
              className="w-full h-auto object-contain filter drop-shadow-[0_0_20px_rgba(224,78,11,0.2)] relative z-10 group-hover:scale-105 group-hover:-translate-y-2 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Text Content Column */}
          <div className="text-left flex flex-col justify-center w-full lg:w-1/2 max-w-xl z-20">
            
            {/* Animated Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm w-fit mb-8 shadow-[0_0_15px_rgba(224,78,11,0.05)] hover:border-[#E04E0B]/50 transition-colors cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E04E0B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E04E0B]"></span>
              </span>
              <span className="text-xs font-mono tracking-widest text-gray-300 uppercase">Disponible</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-black uppercase tracking-tighter leading-[1.1] mb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500">
              GUSTAVO <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E04E0B] to-[#FF8C00]">BOLÍVAR</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl font-medium tracking-wide border-l-2 border-[#E04E0B] pl-5 mb-2 mt-2 py-1">
              Desarrollador Full-Stack <span className="text-[#E04E0B]">&</span> Diseñador UI
            </p>

            <ContactInfo />
            
            <SocialIcons />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;