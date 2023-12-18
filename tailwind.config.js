/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      primary: ["Pluto Cond Black"],
      secondary: ["Pluto Cond Regular"],
    },
    screens: {
      "2xl": { max: "1536px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "850px" },
      sm: { max: "600px" },
      xsm: { max: "280px" },
    },
    colors: {
      primary: "#3e332d",
      secondary: "#e87b26",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar"), require("flowbite/plugin")],
};
