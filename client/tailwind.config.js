/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F19820",
        status: {
          red: "#ff5c5f",
          yellow: "#ffba52",
          green: "#5b8dee",
          blue: "#61d260",
        },
      },
    },
  },
  plugins: [],
};

