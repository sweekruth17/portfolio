/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        resumebg: "#212524",
        namecolor: "bg-gradient-to-r from-red-500 to-violet-700",
      },
      fontFamily: {
        name: ["Cedarville Cursive"],
      },
    },
  },
  plugins: [],
};
