// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode based on class
  theme: {
    extend: {
      colors: {
        // Define your color palettes here
        dark: {
          background: 'rgb(32, 32, 32)',
          text: 'rgb(240, 240, 240)',
          primary: 'rgb(0, 102, 204)',
          secondary: 'rgb(255, 179, 102)',
          accent: 'rgb(255, 64, 129)',
          border: 'rgb(64, 64, 64)',
        },
        light: {
          background: 'rgb(255, 255, 255)',
          text: 'rgb(64, 64, 64)',
          primary: 'rgb(0, 102, 204)',
          secondary: 'rgb(255, 179, 102)',
          accent: 'rgb(255, 64, 129)',
          border: 'rgb(240, 240, 240)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
