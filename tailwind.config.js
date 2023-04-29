/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        coral: "#da664f",
        cherry: "#ebd5ee",
      },
      fontFamily: {
        prosto: ['"Prosto One"'],
        rubik: ["Rubik"],
      },
    },
  },
  plugins: [],
};
