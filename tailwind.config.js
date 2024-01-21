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
        dark:'radial-gradient(ellipse 80% 80% at 50% -20%,rgba(83, 138, 214,0.3),rgba(255,255,255,0))',
        light:'radial-gradient(60% 120% at 50% 50%,hsla(0,0%,100%,0) 0,rgba(178, 224, 237, 0.5) 100%)',
        about: "url('./assets/about2.png')",
        banner: "url('./assets/avatar2.png')"
      },
      backgroundColor:{
        black: 'rgb(10 10 10)'
      }
    },
  },
  plugins: [],
};

