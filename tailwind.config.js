/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#081f5c",
        secondary: "#d0e3ff",
        textPrimary: "#000054",
        textSecondary: "#2271D3",
        textSecondaryTwo: "#003EA0",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(162.68deg, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.2) 100%)",
      },
      aspectRatio: {
        "100/100": "100/100",
        "280/280": "280/280",
        "360/360": "360/360",
        "438/438": "438/438",
        "438/588": "438/588",
        "1376/770": "1376/770",
      },
      screens: {
        esm: { min: "320px", max: "768px" }, // extra small mobile
      },
    },
  },
  plugins: [],
};
