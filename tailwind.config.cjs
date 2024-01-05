/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {},
    extend: {
      colors: {},
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({});
    },
    ({ addComponents }) => {
      addComponents({});
    },
  ],
};
