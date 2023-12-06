/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["backdrop-blur"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: 

      
      { medienda: ['Merienda', 'san-serif'],

        mono: ['Inconsolata', 'monospace'],
        
        lato: ["Lato", "sans-serif"],
      },
   

      screens: {
        
      },
    },
  },
  mode: "jit",
  plugins: [],
  extend: {
    width: {
      "4/5vw": "80vw",
    },
  },
};
