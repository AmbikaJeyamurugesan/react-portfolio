/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edfcfc',
          100: '#d6f8f8',
          200: '#64dfdf',  // Main teal color
          300: '#40d3d3',
          400: '#26c6c6',
          500: '#1ab8b8',
          600: '#0e9f9f',
          700: '#0d8585',
          800: '#0f6c6c',
          900: '#115959',
          950: '#0a3f3f',
        },
        secondary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};