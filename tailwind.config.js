/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        esm: { min: "320px", max: "768px" }, // extra small mobile
      },
    },
  },
  plugins: [],
};
