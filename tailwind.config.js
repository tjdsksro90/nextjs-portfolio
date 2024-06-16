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
        "custom-red": "rgb(255, 226, 221)",
        "custom-red-dark": "rgb(110, 54, 48)",
        "custom-orange": "rgb(250, 222, 201)",
        "custom-orange-dark": "rgb(133, 76, 29)",
        "custom-yellow": "rgb(253, 236, 200)",
        "custom-yellow-dark": "rgb(137, 99, 42)",
        "custom-green": "rgb(219, 237, 219)",
        "custom-green-dark": "rgb(43, 89, 63)",
        "custom-blue": "rgb(211, 229, 239)",
        "custom-blue-dark": "rgb(40, 69, 108)",
        "custom-purple": "rgb(232, 222, 238)",
        "custom-purple-dark": "rgb(73, 47, 100)",
        "custom-pink": "rgb(245, 224, 233)",
        "custom-pink-dark": "rgb(105, 49, 76)",
        "custom-brown": "rgb(238, 224, 218)",
        "custom-brown-dark": "rgb(96, 59, 44)",
        "custom-gray": "rgba(227, 226, 224, 0.5)",
        "custom-gray-dark": "rgb(90, 90, 90)",
        "custom-default": "rgb(227, 226, 224)",
        "custom-default-dark": "rgb(55, 55, 55)",
        code: "rgba(135,131,120,.15)",
      },
    },
  },
  plugins: [],
};
