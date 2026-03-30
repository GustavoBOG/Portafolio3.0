export const projects = [
    {
        id: 3,
        slug: "wonderfly",
        title: "WonderFly",
        description: "Plataforma Full-Stack para búsqueda y comparación de vuelos en tiempo real.",
        fullDescription:
            "WonderFly es una plataforma Full-Stack diseñada para la búsqueda y comparación de vuelos en tiempo real. Este proyecto destaca por integrar servicios externos de alta fidelidad y una gestión de datos robusta, ofreciendo una experiencia de usuario fluida y eficiente.",
        features: [
            {
                title: "Integración de APIs Reales",
                description: "Conexión asíncrona con Amadeus API para obtener datos de vuelos actualizados, gestionando tiempos de respuesta y filtrado complejo."
            },
            {
                title: "Arquitectura Escalable",
                description: "Backend construido con Node.js y Express bajo el patrón de controladores, asegurando un código limpio y fácil de mantener."
            },
            {
                title: "Seguridad y Persistencia",
                description: "Sistema de autenticación de usuarios (JWT) con base de datos MySQL para la gestión segura de perfiles y vuelos favoritos."
            },
            {
                title: "UI/UX Reactiva",
                description: "Interfaz desarrollada en React con una gestión de estado optimizada, permitiendo búsquedas dinámicas sin recargas innecesarias."
            }
        ],
        imageUrl: "/images/plane.png",
        technologies: [
            "HTML5",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Express",
            "MySQL",
            "Amadeus API",
            "JWT"
        ],
        githubUrl: "https://github.com/GustavoBOG/planificadorDeViajes",
        pageUrl: "https://planificador-de-viajes.vercel.app/",
        categories: ["Desarrollo"],
    },
    {
        id: 4,
        slug: "lalaland-cafe",
        title: "La La Land Cafe",
        description: "Solución digital integral para una cafetería real en Madrid.",
        fullDescription:
            "LalaLand Café es una solución digital integral para una cafetería real en Madrid. El proyecto transforma la identidad de marca en una experiencia web de alto rendimiento, optimizando la conversión mediante una carta interactiva y una arquitectura orientada al usuario.",
        features: [
            {
                title: "Navegación Inteligente (ScrollSpy)",
                description: "Implementé un sistema de menú autogestionado con debouncing y animaciones de easing cúbico, sincronizando la navegación fija con la sección activa en pantalla."
            },
            {
                title: "Arquitectura Modular con React 19",
                description: "Estructuré el proyecto en +27 componentes organizados por features (Carta, Blog, Club), garantizando un mantenimiento ágil y una escalabilidad profesional."
            },
            {
                title: "Diseño Responsive Dual",
                description: "Desarrollé layouts diferenciados para móvil y desktop en secciones críticas, utilizando grids dinámicos y acordeones para maximizar la legibilidad en cualquier dispositivo."
            },
            {
                title: "Integración de Ecosistema Digital",
                description: "Sincronización en tiempo real con Google Reviews, gestión de reservas de catering y conectividad directa con plataformas de Delivery (Uber Eats/Glovo)."
            }
        ],
        imageUrl: "/images/mockuplala.png",
        technologies: [
            "HTML5",
            "Tailwind CSS",
            "JavaScript",
            "React",
            "Vite",
            "Node.js",
        ],
        githubUrl: "#",
        pageUrl: "https://lalalandcafe.vercel.app/",
        categories: ["Desarrollo", "Diseño"],
    },
    {
        id: 5,
        slug: "solrepyma",
        title: "SOLREPYMAN",
        description: "Identidad y Estandarización Corporativa.",
        fullDescription:
            "Este proyecto consistió en el rediseño integral de la identidad visual de Solrepyman. El objetivo fue elevar la profesionalidad percibida de la marca y estandarizar todos los puntos de contacto operativos, desde la documentación administrativa hasta la presencia física del equipo.",
        featuresTitle: "Desafíos y Soluciones de Diseño",
        features: [
            {
                title: "Evolución de Marca (Rebranding)",
                description: "Actualicé el logotipo hacia una estética más profesional, moderna y legible, garantizando su versatilidad y correcto impacto visual en cualquier formato."
            },
            {
                title: "Sistema de Color y Coherencia",
                description: "Definí una paleta corporativa estricta para solidificar la identidad de marca, asegurando uniformidad visual en toda la comunicación."
            },
            {
                title: "Normalización Documental",
                description: "Diseñé una suite administrativa consistente (Albaranes, Presupuestos, Facturas, Pedidos) para eliminar disparidades, proyectar profesionalismo y facilitar la administración."
            },
            {
                title: "Operatividad y Uniformidad",
                description: "Creé el sello corporativo oficial para validaciones operativas y un mockup de uniformes para visualizar la aplicación de marca en el entorno laboral de la empresa."
            }
        ],
        deliverables: [
            {
                title: "Identidad",
                description: "Logotipo renovado, Sello corporativo y Manual de color (Charcoal Blue, Black Ink, Pure White)."
            },
            {
                title: "Documentación",
                description: "Modelos de Factura, Albarán, Presupuesto y Pedido con diseño unificado y QR de información."
            },
            {
                title: "Herramientas Operativas",
                description: "Estandarización y optimización de tablas Excel para la gestión de inventario y caja chica."
            },
            {
                title: "Visualización",
                description: "Mockup de uniformes para la representación visual de la marca."
            }
        ],
        imageUrl: "/images/logos.jpg",
        technologies: ["Figma", "Excel"],
        githubUrl: "#",
        pageUrl: "#",
        categories: ["Diseño"],
    },
    {
        id: 6,
        slug: "artesana",
        title: "ARTESANA",
        description: "Conceptualización e Identidad de Marca.",
        fullDescription:
            "Este proyecto abarcó el desarrollo integral de la identidad visual para Artesana, una marca dedicada a productos hechos a mano con el corazón. El objetivo fue crear una narrativa de marca coherente que reflejara la naturaleza orgánica, delicada y única de sus creaciones, estableciendo una conexión emocional y táctil con el consumidor.",
        featuresTitle: "Desafíos y Soluciones de Diseño",
        features: [
            {
                title: "Creación y Definición de Naming",
                description: 'Desarrollé el nombre "Artesana" como una propuesta directa y evocadora, que encapsula la esencia de la labor manual, la autenticidad y el cuidado en cada detalle.'
            },
            {
                title: "Diseño de Logotipo Conceptual",
                description: "Creé un logotipo que fusiona elementos botánicos (la rama de eucalipto) con trazos abstractos de hilo y costura, simbolizando la naturaleza y el proceso de creación manual en una composición delicada y equilibrada."
            },
            {
                title: "Estrategia de Paleta de Colores",
                description: "Implementé una paleta cromática orgánica (Marrón Artesano, Oro Hilo, Crema Natural, Verde Eucalipto) para transmitir calidez, naturalidad, elegancia y la autenticidad de los materiales utilizados."
            },
            {
                title: "Creación de Patrón de Marca",
                description: "Diseñé un patrón de marca dinámico y versátil, combinando variaciones del isotipo y monogramas, para su aplicación en packaging, revestimientos y soportes digitales, fortaleciendo la consistencia visual."
            },
            {
                title: "Visualización de Producto (Mockups)",
                description: "Entregué una suite de mockups de alta fidelidad para visualizar la aplicación de marca en productos reales, incluyendo el packaging de tela, rollos de pegatinas y tarjetas de visita, demostrando la tactilidad y el impacto visual de la identidad."
            }
        ],
        deliverables: [
            {
                title: "Identidad",
                description: "Naming conceptual, Logotipo unificado, Paleta cromática corporativa y Patrón de marca."
            },
            {
                title: "Soportes Visuales",
                description: "Mockups de aplicación en packaging de tela, etiquetas en rollo y papelería corporativa."
            },
            {
                title: "Guía de Estilo",
                description: "Definición de colores corporativos con valores HEX."
            }
        ],
        imageUrl: "/images/artes_ana_logo.png",
        technologies: ["Illustrator", "Figma", "Photoshop"],
        githubUrl: "#",
        pageUrl: "#",
        categories: ["Diseño"],
    },
    {
        id: 1,
        slug: "pokedex",
        title: "PokeDex",
        description:
            "Una web interactiva que funciona como una Pokedex, utilizando una API pública de Pokémon para obtener y mostrar la información detallada sobre cada Pokémon.",
        fullDescription:
            "Aplicación web interactiva inspirada en la Pokédex original de la franquicia Pokémon. Consume la PokéAPI pública para obtener datos en tiempo real de más de 800 Pokémon, mostrando estadísticas, tipos, evoluciones e imágenes. Incluye buscador dinámico, filtros por tipo y paginación optimizada para una experiencia fluida.",
        imageUrl: "/images/PokeDex.png",
        technologies: ["HTML5", "CSS", "JavaScript"],
        githubUrl: "https://github.com/GustavoBOG/Pokedex",
        pageUrl: "https://poke-evo-lution.vercel.app/",
        categories: ["Desarrollo"],
    },
    {
        id: 2,
        slug: "rick-morty",
        title: "Rick & Morty Characters",
        description:
            "Una web interactiva que permite explorar todos los personajes de la serie Rick and Morty. Utiliza una API pública para obtener y mostrar información detallada sobre cada personaje.",
        fullDescription:
            "Explorador de personajes de la serie Rick and Morty construido con React. Conecta con la Rick and Morty API pública para listar todos los personajes con sus datos (estado, especie, origen, localización). Incluye filtros por estado y especie, buscador en tiempo real y navegación entre páginas de resultados.",
        imageUrl: "/images/rick&morty.png",
        technologies: ["HTML5", "CSS", "JavaScript", "React"],
        githubUrl: "https://github.com/GustavoBOG/Rick-morty",
        pageUrl: "https://rick-morty-nine-tau.vercel.app/",
        categories: ["Desarrollo"],
    },
];
