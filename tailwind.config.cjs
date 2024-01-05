/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#DF3223', // text-delete
        blue: '#5C90F6', // section-text, button-background
        white: '#FFFFFF', // text-default
        'gray-300': '#DEDEDE', // text-title
        'gray-400': '#B0B0B0', // icon-light, text-memo-preview
        'gray-600': '#747474', // icon-dark
        'gray-900': '#2D2E31', // list-active
        'gray-930': '#1E1F20', // background
        'gray-950': '#0F0F14', // line-divider
      },
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
