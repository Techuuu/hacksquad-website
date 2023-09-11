/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      titles: ['Cal Sans', 'Cal Sans Fallback', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      36: '36px',
      42: '42px',
      60: '60px',
    },
    lineHeight: {
      none: '100%',
      1.1: '110%',
      1.125: '112.5%',
      snug: '137.5%',
      normal: '150%',
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#000000',
      white: '#ffffff',
      yellow: '#ffea00',
      purple: '#cbb2ff',
      grey: {
        1: '#c7ccd1',
        2: '#454d54',
      },
    }),
    screens: {
      '2xl': { max: '1919px' },
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '359px' },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
