/ @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src//*.{js,ts,jsx,tsx}"],
  safelist: ["backdrop-blur"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      screens: {
        'mq-576': '576px',
        'mq-768': '768px',
        'mq-935': '935px',
        'mq-1200': '1200px',
      },
    },
  },
  mode: "jit",
  plugins: [],
  extend: {
    width: {
      "4/5w": "80vw",
    },
  },
};