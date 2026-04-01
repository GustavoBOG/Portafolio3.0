# 🎨 Arquitectura de Componentes UI: Guía Detallada Paso a Paso

Esta es la segunda parte de la guía de estudio del portafolio. En este documento, vamos a destripar cada uno de los componentes visuales de tu aplicación, explicando **línea por línea** cómo se logró cada diseño premium, qué hacen las clases mágicas de Tailwind y cómo funciona Framer Motion para dar vida a la interfaz.

---

## 🛠️ Herramientas Clave que debes entender primero

Antes de analizar los componentes, estos son los tres pilares de todos ellos:
1. **Tailwind CSS (`@apply` o clases en línea)**: Usamos clases como `glass-panel` o `bg-accent` (que configuramos en `tailwind.config.js`) para estilizar en segundos.
2. **Framer Motion (`<motion.div>`)**: Reemplaza las etiquetas estándar `<div>` por `<motion.div>` para poder animarlas pasando propiedades como `initial`, `animate` o `whileInView`.
3. **React Icons (`react-icons/fa`)**: Nos permiten importar cualquier ícono del mundo usando simplemente `<FaGithub />`.

---

## 1. El Menú de Navegación (`Header.jsx`)
Ubicación: `src/components/header/Header.jsx`

El *Header* tiene un comportamiento inteligente: empieza transparente, pero cuando haces scroll hacia abajo, se vuelve "pegajoso" (sticky) y adquiere un fondo tipo cristal. Además, controla un menú lateral en la versión móvil.

### Lógica Paso a Paso:
```javascript
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Para deslizar la página suavemente
import { Link as RouterLink, useLocation } from 'react-router-dom'; // Para ir a otras páginas

const Header = () => {
  // Estado 1: ¿Está abierto el menú en el móvil?
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Estado 2: ¿Hemos hecho scroll hacia abajo?
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
```

El efecto "Cristal" al bajar la página se logra con esto:
```javascript
  useEffect(() => {
    const handleScroll = () => {
      // Si la ventana bajó más de 30px, guardamos true
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
```

**En el diseño (JSX):**
El contenedor del Header cambia de clases de Tailwind dinámicamente gracias a esa variable `isScrolled`:
```jsx
<header className={`fixed top-0 w-full z-50 transition-all duration-500 
  ${isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'}
`}>
  {/* El backdrop-blur-md crea ese efecto Apple de desenfoque trasero */}
</header>
```

---

## 2. El Hero (Pantalla Principal) (`Home.jsx`)
Ubicación: `src/components/home/Home.jsx`

Esta es la primera impresión del usuario: tu nombre gigante, una foto que parece "flotar" y botones de contacto. 

### Lógica Paso a Paso:
En `Home` usamos un sistema de animaciones **escalonadas** ("staggered"). Esto significa que el texto principal aparece primero, y 0.2 segundos después aparecen tus redes sociales, luego tus datos de contacto, uno tras otro, creando una secuencia fluida.

```javascript
// Estas "Variantes" le enseñan a Framer Motion cómo animar una familia de elementos
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 } // Cada "hijo" esperará 0.1s más que el anterior
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 }, // Empieza invisible y 10px abajo
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } // Aparece y sube a su lugar
};
```

**La Imagen de Perfil Flotante:**
```jsx
<motion.img
  src="/images/profile2.png" 
  className="... animate-float" // Esta clase `animate-float` está en tailwind.config.js y mueve la imagen gentilmente arriba y abajo infinitamente
/>
{/* Este div oscuro crea la sombra de la imagen para que parezca elevarse */}
<div className="absolute -bottom-6 left-1/2 w-1/2 h-4 bg-black/40 blur-xl rounded-full" />
```

---

## 3. Sobre Mí (`About.jsx`)
Ubicación: `src/components/about/About.jsx`

Aquí la estructura es un "Flex de 2 columnas" invertido en versión móvil. La tarjeta que contiene tu información usa clases `glass-panel`.

```jsx
// El contenedor maestro de la tarjeta
<div className="glass-panel rounded-[3rem] p-10 hover:border-accent/30 hover:shadow-2xl">
  
  {/* LUZ DE NEÓN INTERNA MÁGICA */}
  {/* Esto es un círculo difuminado (blur-[100px]) que se pinta en la esquina superior derecha y brilla al pasar el ratón (group-hover) */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full group-hover:bg-accent/10 transition-colors" />

  <h3>Hola, soy <span className="text-gradient-accent">Gustavo Bolívar.</span></h3>
  {/* ... texto de descripción ... */}
</div>
```
A la derecha tenemos un "Asset 3D" de un Robot. Al igual que tu perfil, está configurado para aparecer de un costado progresivamente:
```jsx
<motion.img
  initial={{ opacity: 0, x: 100 }}   // Empieza desplazado a la derecha 100px
  whileInView={{ opacity: 1, x: 0 }} // Mientras se ve en pantalla, entra a la posición original
/>
```

---

## 4. Stack Tecnológico (`Skills.jsx`)
Ubicación: `src/components/skills/Skills.jsx`

Esta sección presenta un **"Banner Infinito" (Carrusel o Marquee)** en movimiento continuo. No usamos librerías complejas para esto, sino CSS y Tailwind puro.

### Lógica Paso a Paso:
1. Creamos un Array con tus skills y los iconos de `react-icons/si`.
2. Como un carrusel necesita parecer infinito, multiplicamos el Array 4 veces para tener un bloque lo suficientemente largo que no se corte en monitores pantalla gigante.
```javascript
const allSkills = [ { name: 'HTML', icon: SiHtml5 }, ... ]
// Repetimos el arreglo 4 veces
const marqueeSkills = [...allSkills, ...allSkills, ...allSkills, ...allSkills];
```
3. Aplicamos la animación de envoltura en JSX:
```jsx
{/* La clase animate-marquee traslada todo el bloque de derecha a izquierda en 30 segundos */}
{/* group-hover:pause-animation permite que al poner el cursor, la banda deje de rodar */}
<div className="flex animate-marquee group-hover:pause-animation gap-12 pr-12">
  {marqueeSkills.map((skill) => (
    <div className="flex items-center glass-panel p-6">
       <skill.icon /> {skill.name}
    </div>
  ))}
</div>
```

---

## 5. La Grilla de Proyectos (`Projects.jsx`)
Ubicación: `src/components/Projects/Projects.jsx`

Esta sección renderiza una cuadrícula de dos columnas en ordenadores y una en móviles usando `grid-cols-1 lg:grid-cols-2`. 
Se cargan limitados a 4 proyectos primero, con un **botón de "Ver Más"**.

### Lógica Paso a Paso:
```javascript
const [isExpanded, setIsExpanded] = useState(false);

// Si 'isExpanded' es True, muestra TODOS. Si es False, usa '.slice()' para mostrar solo los 4 primeros
const displayProjects = isExpanded ? projects : projects.slice(0, 4);

// Para saltar a los detalles, usamos 'navigate' (propio de React Router)
const handleCardClick = (slug) => navigate(`/projects/${slug}`);
```

Para las tarjetas de proyectos (`glass-card`), usamos `layoutId` de Framer Motion. 
```jsx
<motion.div layoutId={`project-container-${project.slug}`}>
```
Al hacer clic, este `layoutId` permite a la librería "animar el salto inter-páginas" expandiendo visualmente la chiquita a una pantalla completa, creando ese bello efecto modal.

---

## 6. La Magia del Detalle (`ProjectDetail.jsx`)
Ubicación: `src/components/Projects/ProjectDetail.jsx`

Cuando el usuario hace clic en un proyecto, entra a esta ruta `/projects/proyect-nombre`. Aquí logramos una vista "Modal Full Screen".

1. Usamos `useParams()` para saber qué proyecto abrimos leyendo la URL y lo buscamos en el archivo Base de Datos:
```javascript
const { slug } = useParams(); // Obtenemos la URL
const project = projects.find((p) => p.slug === slug); // Buscamos en el Array
```

2. El envoltorio principal usa el MISMO `layoutId` que la tarjeta en `Projects.jsx`. Así, Framer Motion fusiona ambos visualmente.

3. En el Detalle, dividimos el contenido: Lado izquierdo para la letanía de "Desafíos" e historia (que se queda fijo (sticky) al bajar), lado derecho para las imágenes del diseño.

---

## 7. Formación y Logros (`Certificates.jsx`)
Ubicación: `src/components/certificates/Certificates.jsx`

Esta es una sección muy similar a "Proyectos", operando bajo una grilla (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`). Cada certificado es un simple contenedor Glass Effect.

La única magia aquí radican en cómo manejamos los logos inexistentes o con errores para no romper la UI:
```jsx
<img
   src={item.logo}
   // Si falla la carga de la imagen, inyectamos una imagen gris de reemplazo vía Placeholder
   onError={(e) => { e.target.src = 'https://via.placeholder.com/48?text=Logo'; }}
/>
```

---

## 8. El Cierre (`Footer.jsx`)
Ubicación: `src/components/footer/Footer.jsx`

Al final de la página, el Footer funciona como una tarjeta gigante de información de contacto organizada en 4 columnas. Incluye elementos estéticos masivos.

### El Efecto Neón de Fondo
El resplandor circular en grandes monitores al final de tu página se hace así:
```jsx
{/* Genera una elipse de 500x500 naranja difuminada al extremo extremo superior derecho del Footer */}
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full" />
```

### Funcionalidad Inteligente: Copiar al Portapapeles
Cuando el usuario da clic al botón "Iniciar Proyecto", disparamos esta función:
```javascript
const handleCopyEmail = (e) => {
  e.preventDefault();
  navigator.clipboard.writeText("gbolivar.dev@gmail.com"); // Escribe en el portapapeles de Windows/Mac
  setCopied(true); // Despierta la notificación verde en la UI animada de "Copiado"
  setTimeout(() => setCopied(false), 3000); // 3 segundos después apaga la notificación verde de la UI
};
```

Con una `<AnimatePresence>` de Framer Motion, la alerta verde surge de abajo sólo cuando `copied === true`.

---

## Resumen Final

Has notado un patrón en casi todos los componentes:
1. Empezamos con el archivo `Import` (`React`, `motion`, `íconos`).
2. Declaramos la función del componente (`const Header = () => {}`) y sus estados.
3. Definimos variables de estilo de animación (`variants`).
4. Retornamos JSX en un grid o flex centrado (`max-w-6xl mx-auto`).
5. Espolvoreamos muchísimas clases estéticas de Tailwind CSS al final.

Ahora tienes el poder documentado para crear cualquier otra sección (por ejemplo "Servicios") con total similitud visual y arquitectónica. ¡Éxito programando!
