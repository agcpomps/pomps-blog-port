/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1024px",
        "2xl": "1496px",
      },
    },
  },
  plugins: [],
};
