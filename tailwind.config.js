/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#f4f1ea',
        ink: '#2c2416',
        gold: {
          DEFAULT: '#b8860b',
          light: '#d4a84b',
        },
        burgundy: '#722f37',
        stone: '#8b8378',
        cream: '#faf8f3',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
