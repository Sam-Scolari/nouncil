/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "white",
        beige: "#FAFAE3",
        black: "#322C23",
        red: "#E20010",
        maroon: "#C3000E",
      },
    },
    fontFamily: {
      "crimson-pro": ["CrimsonPro"],
    },
  },
  plugins: [],
};
