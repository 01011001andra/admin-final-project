/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        stroke: "#272343",
        main: "#FFFFFE",
        highlight: "#FFD803",
        secondary: "#E3F6F5",
        teritiary: "#BAE8E8",
        paragraph: "#2D334A",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
