/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'pia-bg': '#1A1F2E',
        'pia-title': '#A3BFFA',
        'pia-subtitle': '#D3D8E0',
        'pia-clock': '#F5A623',
        'pia-field-bg': '#2A2F42',
        'pia-field-border': '#3A4056',
        'pia-button': '#4A90E2',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-left': 'fadeInLeft 0.8s ease-out 0.2s both',
        'fade-in-right': 'fadeInRight 0.8s ease-out 0.4s both',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};