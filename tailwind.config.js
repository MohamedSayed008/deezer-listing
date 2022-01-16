const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    minWidth: {
      0: '0px',
      60: '15rem',
      72: '18rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    colors: {
      primary: '#73FAFC',
      grayDarker: '#1C1C1C',
      grayDark: '#222222',
      grayLight: '#232323',
      grayLighter: '#2A2A2A',
      textLight: '#878787',
      black: colors.black,
      purple: colors.violet,
      gray: colors.gray,
      green: colors.emerald,
      blue: colors.blue,
      red: colors.rose,
      pink: colors.fuchsia,
      yellow: colors.amber,
      white: colors.white,
      transparent: colors.transparent,
    },
    extend: {
      transitionProperty: {
        height: 'height',
      },
      height: {
        lg: '450px',
      },
      maxHeight: {
        md: '280px',
      },
      spacing: {
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
        'lg-alt': '32px',
        xl: '48px',
        xxl: '64px',
        xxxl: '96px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: 'rgb(59 59 59 / 7%) 0px 0px 24px 0px',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        side: '7px 2px 25px -12px rgb(0 0 0 / 75%)',
        none: 'none',
      },
    },
  },
};
