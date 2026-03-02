/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(30deg, #1C4470 35%, #2963A3 50%, #1C4470 75%)',
      },
      colors: {
        background: "#0E2944", // Fondo
        header: "#192C3F", // Header
        text: "#FFFFFF", // Texto
        primario: "#51B6F9", // Azul Secundario
        vividBlue: "#115FFF", // Azul Vivo
        midnightBlue: "#264470", // Azul Oscuro
        grisclaro: "#4B4949",//para la herramienta
        bombilla: "#F7FF09",//para la bombilla 
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        h1: ["48px", { fontWeight: "700" }],  // h1 más grande que h3
        h2: ["40px", { fontWeight: "700" }],  // h2 ligeramente más pequeño que h1
        h3: ["36px", { fontWeight: "700" }],  // h3 como referencia
        h4: ["24px", { fontWeight: "700" }],  // h4 más pequeño que h3
        h5: ["18px", { fontWeight: "700" }],  // h5 más pequeño que h4
        h6: ["20px", { fontWeight: "200" }],
      }
    },
  },
  plugins: [],
}

