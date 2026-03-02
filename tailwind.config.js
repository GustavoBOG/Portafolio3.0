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
        'orange-gradient': 'linear-gradient(135deg, #FF4D00 0%, #FBC30B 100%)',
        'header-gradient': 'linear-gradient(90deg, #FF4D00 33%, rgba(251, 195, 11, 0) 100%)',
      },
      colors: {
        background: "#111111", // Fondo oscuro (hex del usuario)
        surface: "#1A1A1A", // Fondo de tarjetas
        header: "#111111", // Header
        text: "#FFFFFF", // Texto principal
        textSecondary: "#A0A0A0", // Texto secundario
        accent: "#E04E0B", // Naranja principal (hex del usuario)
        accentHover: "#FF6B2B", // Naranja hover
        accentDark: "#412015", // Marrón/Naranja oscuro (hex del usuario)
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Consolas", "Monaco", "monospace"],
      },
    },
  },
  plugins: [],
}
