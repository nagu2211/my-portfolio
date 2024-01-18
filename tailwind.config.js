/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",'./src/**/*.{js,jsx}'],
  "darkMode": "class",
  theme:  {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      xxl: '1440px'
    },
    extend: {
      colors: {
        primary: '#fffc00',
        accent: '#43d6bc',
      },
      backgroundImage: {
        light: "url('./assets/white.avif')",
        dark: "url('./assets/dark.avif')",
        about: "url('./assets/about.webp')",
      },
    },
  },
  plugins: [],
};

