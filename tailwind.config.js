/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#081f5c",
        secondary: "#d0e3ff",
      },
      screens: {
        esm: { min: "320px", max: "768px" }, // extra small mobile
      },
    },
  },
  plugins: [],
};
