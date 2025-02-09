/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        fancy: ['var(--font-fancy)'],
      },
      colors: {
        primary: {
          '25': 'hsl(30, 100%, 98%)',  // Softest Cream White
          '50': 'hsl(30, 95%, 95%)',   // Light Apricot Mist
          '100': 'hsl(30, 90%, 90%)',  // Pale Peach Glow
          '200': 'hsl(30, 85%, 80%)',  // Warm Peach
          '300': 'hsl(30, 75%, 70%)',  // Soft Melon
          '400': 'hsl(30, 65%, 60%)',  // Muted Tangerine
          '500': 'hsl(30, 60%, 50%)',  // Gentle Sunset Orange
          '600': 'hsl(30, 55%, 45%)',  // Warm Honey
          '700': 'hsl(30, 50%, 35%)',  // Toasted Almond
          '800': 'hsl(30, 45%, 30%)',  // Burnt Caramel
          '900': 'hsl(30, 40%, 25%)',  // Deep Amber
          '950': 'hsl(30, 35%, 15%)',  // Earthy Clay
          '999': 'hsl(30, 30%, 7%)',   // Warm Mocha
        },
        secondary: {
          '50': '#fff8f0',  // Soft Cream White
          '100': '#ffebd6', // Light Peach
          '200': '#ffd4ab', // Gentle Apricot
          '300': '#ffba85', // Warm Golden Peach
          '400': '#ff995c', // Soft Orange Glow
          '500': '#ff7a33', // Light Tangerine
          '600': '#e8641f', // Muted Pumpkin
          '700': '#bf501a', // Warm Cinnamon
          '800': '#994014', // Toasted Spice
          '900': '#7a320f', // Deep Rust
          '950': '#401a08', // Dark Earthy Brown
        },        
        gray: colors.stone,
      }
    },
  },
  plugins: [],
}
