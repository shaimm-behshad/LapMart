/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0ee4eb",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: "#111111",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.bg-primary-gradient': {
          background: `radial-gradient(50% 123.47% at 50% 50%, #00FF94 0%, #720059 100%),
                       linear-gradient(121.28deg, #669600 0%, #FF0000 100%),
                       linear-gradient(360deg, #0029FF 0%, #8FFF00 100%),
                       radial-gradient(100% 164.72% at 100% 100%, #6100FF 0%, #00FF57 100%),
                       radial-gradient(100% 148.07% at 0% 0%, #FFF500 0%, #51D500 100%)`,
          'background-blend-mode': 'screen, color-dodge, overlay, difference, normal',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
