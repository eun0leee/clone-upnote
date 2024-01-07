/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#DF3223', // text-delete
        'blue-400': '#5B7FCD', // blue-hover
        'blue-500': '#5C90F6', // nav-title, button-background, add-button-text
        white: '#FFFFFF', // text-default
        'gray-300': '#DEDEDE', // nav-title, memo-section-h1, memo-list-title
        'gray-400': '#B0B0B0', // icon-light, memo-list-preview
        'gray-500': '#8B8B8B', // memo-list-updatedAt
        'gray-550': '#777777', // text-placeholder
        'gray-600': '#747474', // icon-dark
        'gray-650': '#46464A', // modal-input-background
        'gray-700': '#373740', // memo-list-border-bottom
        'gray-750': '#333438', // notebook-header-background
        'gray-800': '#28292A', // memo-header-background, modal-background
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
