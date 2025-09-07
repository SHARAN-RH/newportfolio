/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Use class-based dark mode instead of media queries
  theme: {
    extend: {
      fontFamily: {
        akronim: ['Akronim', 'cursive'],
      },
    },
  },
  plugins: [],
};
