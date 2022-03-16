const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#542AE2',
          50: '#f3f2ff',
          100: '#e8e8ff',
          200: '#d5d4ff',
          300: '#b6b2ff',
          400: '#9186ff',
          500: '#6d55fd',
          600: '#5a32f5',
          700: '#542ae2',
          800: '#401bbc',
          900: '#36189a',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F3F5F6',
          200: '#E1E6EA',
          300: '#D0D7DC',
          400: '#97A7B4',
          500: '#677784',
          600: '#485865',
          700: '#37444E',
          750: '#202D36',
          800: '#21262A', // Sidebar Background
          900: '#151A1E', // Background
        },
        yellow: {
          DEFAULT: '#FAAD14',
          50: '#FFFCEB',
          100: '#FFF6C6',
          200: '#FFEB88',
          300: '#FFDC49',
          400: '#FFC920',
          500: '#FAAD14', // Warning Alert
          600: '#DD7F02',
          700: '#B75A06',
          800: '#95440B',
          900: '#7A380D',
        },
        red: {
          DEFAULT: '#FF5959',
          50: '#FFF1F1',
          100: '#FFE1E1',
          200: '#FFC7C7',
          300: '#FFA0A0',
          400: '#FF5959', // Error Alert Normal
          500: '#F83B3B',
          600: '#E51D1D',
          700: '#C11414',
          800: '#A01414',
          900: '#841818',
        },
        green: {
          DEFAULT: '#28FFBF',
          50: '#E7FFF7',
          100: '#C6FFE9',
          200: '#92FFD9',
          300: '#4DFFCA',
          400: '#28FFBF', // Success Alert Normal
          500: '#00E8A1',
          600: '#00BE85',
          700: '#00986F',
          800: '#007859',
          900: '#00624B',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
