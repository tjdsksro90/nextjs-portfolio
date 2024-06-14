/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "custom-red": "rgb(110, 54, 48)",
        "custom-blue": "rgb(40, 69, 108)",
        "custom-purple": "rgb(73, 47, 100)",
        "custom-gray": "rgb(90, 90, 90)",
        "custom-brown": "rgb(96, 59, 44)",
        "custom-green": "rgb(43, 89, 63)",
        "custom-orange": "rgb(133, 76, 29)",
        "custom-pink": "rgb(105, 49, 76)",
        "custom-default": "rgb(55, 55, 55)",
        "custom-yellow": "rgb(137, 99, 42)",
      },
    },
  },
  plugins: [],
};
