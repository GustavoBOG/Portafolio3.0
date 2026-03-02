import { FaMapMarkerAlt, FaLinkedinIn } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { MdPhoneIphone } from "react-icons/md";

const SocialIcons = () => {
  const socialLinks = [
    { href: "https://github.com/GustavoBOG", icon: VscGithub },
    { href: "https://www.linkedin.com/in/gustavo-bolivar/", icon: FaLinkedinIn }
  ];

  return (
    <div className="flex gap-4 mt-8 pt-2">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#E04E0B] text-white w-10 h-10 rounded-lg hover:bg-white hover:text-[#E04E0B] transition-colors flex items-center justify-center shadow-lg"
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

const ContactInfo = () => (
  <div className="space-y-4 mt-6 text-[#A0A0A0]">
    <div className="flex items-center gap-4">
      <FaMapMarkerAlt className="text-[#E04E0B] w-5 h-5 flex-shrink-0" />
      <span className="text-sm tracking-wide">Madrid, España</span>
    </div>
    <div className="flex items-center gap-4">
      <MdPhoneIphone className="text-[#E04E0B] w-5 h-5 flex-shrink-0" />
      <span className="text-sm tracking-wide">+34 603 534 213</span>
    </div>
    <div className="flex items-center gap-4">
      <FaRegMessage className="text-[#E04E0B] w-5 h-5 flex-shrink-0" />
      <span className="text-sm tracking-wide">gbolivar.dev@gmail.com</span>
    </div>
  </div>
);

const Home = () => {
  return (
    <section className="relative flex items-center min-h-[calc(100vh-100px)] py-12">
      
      {/* Decorative Glow behind image */}
      <div className="absolute left-1/4 top-1/2 w-[600px] h-[600px] bg-[#E04E0B]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      {/* Main Container */}
      <div className="w-full h-full relative z-10">
        
        {/* Structural Lines localized to this container */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#E04E0B] hidden lg:block z-0" />
        <div className="absolute left-0 right-0 top-[20px] h-[1px] bg-gradient-to-r from-[#E04E0B] to-transparent hidden lg:block z-0" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 w-full h-full pl-0 lg:pl-16">
          
          {/* Profile Image Column */}
          <div className="relative w-[300px] md:w-[450px] lg:w-[500px] xl:w-[600px] flex-shrink-0 flex justify-center lg:justify-start">
            <img
              src="/images/profile2.png" 
              alt="Gustavo Bolivar"
              className="w-full h-auto object-contain filter drop-shadow-xl"
            />
          </div>

          {/* Text Content Column */}
          <div className="text-left flex flex-col justify-center w-full lg:w-1/2 max-w-xl">
            <h1 className="text-[#E04E0B] text-4xl md:text-5xl lg:text-[56px] font-black uppercase tracking-tight leading-none mb-2">
              GUSTAVO BOLIVAR
            </h1>
            <p className="text-white text-lg md:text-xl font-bold tracking-wide">
              Desarrollador y Diseñador Web
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