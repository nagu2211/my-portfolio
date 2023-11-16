/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",'./src/**/*.{js,jsx}'],
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
    },
    extend: {
      colors: {
        primary: '#fffc00',
        accent: '#43d6bc',
      },
      backgroundImage: {
        site: "url('./assets/aver.jpg')",
        about: "url('./assets/about.jpg')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};

