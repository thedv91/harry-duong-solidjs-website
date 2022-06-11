const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['sans-serif', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        '96px': 'repeat(auto-fill, minmax(100px, auto))',
      },
      colors: {
        primary: colors.violet['700'],
      },
      fontSize: {
        xl: '1.375rem', // 22px
        '2xl': '1.5625rem', // 25px
        '3xl': '1.875rem', // 30px
        '4xl': '2.5rem', // 40px
        '5xl': '3.125rem', // 50px
        '6xl': '3.75rem', // 60px
        '7xl': '4.375rem', // 70px
      },
      spacing: {
        250: '250px',
        350: '350px',
        '100vw': '100vw',
        '100vh': '100vh',
      },
      minWidth: {
        24: '6rem',
      },
    },
  },
};
