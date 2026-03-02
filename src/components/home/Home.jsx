import { FaMapMarkerAlt, FaLinkedinIn, FaDiscord, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { MdPhoneIphone } from "react-icons/md";
import { TypeAnimation } from 'react-type-animation';

const SocialIcons = ({ isMobile }) => {
  const iconSize = isMobile ? "w-[30px] h-[30px]" : "w-[50px] h-[50px]";

  const socialLinks = [
    {
      href: "https://github.com/GustavoBOG",
      icon: VscGithub
    },
    {
      href: "https://www.linkedin.com/in/gustavo-bolivar/",
      icon: FaLinkedinIn
    },
    {
      href: "https://discord.com/users/grounda.",
      icon: FaDiscord
    },
    {
      href: "https://www.instagram.com/gusta_bolivar/",
      icon: FaInstagram
    },
    {
      href: "https://www.facebook.com/gustavo.bolivar.16",
      icon: FaFacebookF
    }
  ];

  return (

    <div className={`
      ${isMobile
        ? "flex lg:hidden flex-col absolute right-[-10px] top-1/2 transform -translate-y-1/2 space-y-4"
        : "hidden lg:flex justify-center mt-8 gap-5"
      } text-text
    `}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primario text-text rounded-2xl p-3 hover:bg-vividBlue hover:scale-125 transition-all"
        >
          <social.icon className={iconSize} />
        </a>
      ))}
    </div>
  );
};

const Home = () => {
  return (
    <section className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center bg-background py-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-7xl mx-auto px-2 relative">

        {/* Contenido móvil - Texto */}
        <div className="text-center lg:hidden w-full max-w-md">
          <span className="inline-block bg-primario hover:bg-vividBlue text-text text-h4 px-8 py-1 rounded-full rounded-es-none font-roboto">
            Hola a todos!
          </span>
          <h1 className="text-text text-h2 font-roboto mt-3">Yo soy Gustavo</h1>
          <div className="text-h4 min-h-[30px]">
            <TypeAnimation
              sequence={[
                'Desarrollador Full Stack.',
                1500,
                'Entusiasta del diseño web.',
                1500,
                'Convirtiendo ideas en realidad.',
                1500,
                'Resolviendo problemas con código.',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primario"
            />
          </div>
        </div>

        {/* Contenedor de imagen y redes sociales */}
        <div className="relative flex flex-col-reverse lg:flex-row items-center -ml-10 sm:ml-0">

          {/* Redes Sociales Móvil */}
          <SocialIcons isMobile={true} />

          {/* Imagen de Perfil */}
          <div className="w-full max-w-sm lg:max-w-xl flex-shrink-0 select-none -mt-10 ml-0 sm:ml-4">
            <img
              src="/images/profile2.png"
              alt="Gustavo"
              className="w-full h-auto object-contain cursor-default"
            />
          </div>
        </div>

        {/* Información de Usuario */}
        <div className="text-center lg:text-left w-full max-w-md">

          {/* Contenido escritorio - Texto */}
          <div className="hidden lg:block">
            <span className="inline-block bg-primario hover:bg-vividBlue text-text text-h4 px-8 py-3 rounded-full rounded-es-none font-roboto">
              Hola a todos!
            </span>
            <h1 className="text-text text-h2 font-roboto mt-3">Yo soy Gustavo</h1>
            <div className="text-h4 min-h-[30px]">
              <TypeAnimation
                sequence={[
                  'Desarrollador Full Stack.',
                  1500,
                  'Entusiasta del diseño web.',
                  1500,
                  'Convirtiendo ideas en realidad.',
                  1500,
                  'Resolviendo problemas con código.',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-primario"
              />
            </div>
          </div>

          {/* Información de Contacto */}
          <div className="mt-0 space-y-2 text-text text-h6">
            <p className="flex items-center justify-center lg:justify-start gap-4 py-1">
              <FaMapMarkerAlt className="w-[30px] h-[30px]" />
              Madrid , España
            </p>
            <p className="flex items-center justify-center lg:justify-start gap-4 py-1">
              <MdPhoneIphone className="w-[30px] h-[30px]" />
              +34 603 534 213
            </p>
            <p className="flex items-center justify-center lg:justify-start gap-4 py-1">
              <FaRegMessage className="w-[30px] h-[30px]" />
              gbolivar.dev@gmail.com
            </p>
          </div>

          {/* Redes Sociales Escritorio */}
          <SocialIcons isMobile={false} />
        </div>
      </div>
    </section>
  )
}

export default Home