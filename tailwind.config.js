module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      display: ['"Exo 2"', 'sans-serif'],
    },

    extend: {
      colors: {
        orange: '#F15A29',
        teal: {
          DEFAULT: '#24B7AF',
          light: '#33ECEC',
        },
        gray: {
          DEFAULT: '#969696',
          dark: '#121212',
          50: '#F2F2F2',
          100: '#E8E8E8',
          200: '#D3D3D3',
          300: '#BFBFBF',
          400: '#AAAAAA',
          500: '#969696',
          600: '#7A7A7A',
          700: '#5E5E5E',
          800: '#424242',
          900: '#262626',
        },
      },
      dropShadow: {
        'current-sm': '0 0 7px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
}
