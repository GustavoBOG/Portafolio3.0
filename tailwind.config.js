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
        'glass-gradient': 'linear-gradient(110deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      },
      colors: {
        background: "#050505", // Fondo ultra oscuro para profundidad
        surface: "#0A0A0A", // Superficie de tarjetas
        header: "rgba(5, 5, 5, 0.8)", // Transparencia para el header
        text: "#F8F9FA", // Blanco suave para lectura
        textSecondary: "#A3A3A3", // Gris neutro profesional
        accent: {
          DEFAULT: "#E04E0B",
          hover: "#FF5F15",
          glow: "rgba(224, 78, 11, 0.4)",
        },
        accentDark: "#1A0D07",
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "system-ui", "sans-serif"], // Outfit como fuente principal moderna
        mono: ["Consolas", "Monaco", "monospace"],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
