/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-red': 'rgb(255, 226, 221)',
        'custom-red-dark': 'rgb(110, 54, 48)',
        'custom-orange': 'rgb(250, 222, 201)',
        'custom-orange-dark': 'rgb(133, 76, 29)',
        'custom-yellow': 'rgb(253, 236, 200)',
        'custom-yellow-dark': 'rgb(137, 99, 42)',
        'custom-green': 'rgb(219, 237, 219)',
        'custom-green-dark': 'rgb(43, 89, 63)',
        'custom-blue': 'rgb(211, 229, 239)',
        'custom-blue-dark': 'rgb(40, 69, 108)',
        'custom-purple': 'rgb(232, 222, 238)',
        'custom-purple-dark': 'rgb(73, 47, 100)',
        'custom-pink': 'rgb(245, 224, 233)',
        'custom-pink-dark': 'rgb(105, 49, 76)',
        'custom-brown': 'rgb(238, 224, 218)',
        'custom-brown-dark': 'rgb(96, 59, 44)',
        'custom-gray': 'rgba(227, 226, 224, 0.5)',
        'custom-gray-dark': 'rgb(90, 90, 90)',
        'custom-default': 'rgb(227, 226, 224)',
        'custom-default-dark': 'rgb(55, 55, 55)',
        'custom-text-red': '#EB5757',
        'custom-text-orange': 'rgba(217, 115, 13, 1)',
        'custom-text-yellow': 'rgba(203, 145, 47, 1)',
        'custom-text-green': 'rgba(68, 131, 97, 1)',
        'custom-text-blue': 'rgba(51, 126, 169, 1)',
        'custom-text-purple': 'rgba(144, 101, 176, 1)',
        'custom-text-pink': 'rgba(193, 76, 138, 1)',
        'custom-text-brown': 'rgba(159, 107, 83, 1)',
        'custom-text-gray': 'rgba(120, 119, 116, 1)',
        'custom-text-defatul': 'rgb(55, 53, 47)',
        code: 'rgba(135,131,120,.15)',
      },
    },
  },
  safelist: [
    'bg-custom-red',
    'dark:bg-custom-red-dark',
    'bg-custom-orange',
    'dark:bg-custom-orange-dark',
    'bg-custom-yellow',
    'dark:bg-custom-yellow-dark',
    'bg-custom-green',
    'dark:bg-custom-green-dark',
    'bg-custom-blue',
    'dark:bg-custom-blue-dark',
    'bg-custom-purple',
    'dark:bg-custom-purple-dark',
    'bg-custom-pink',
    'dark:bg-custom-pink-dark',
    'bg-custom-brown',
    'dark:bg-custom-brown-dark',
    'bg-custom-gray',
    'dark:bg-custom-gray-dark',
    'bg-custom-default',
    'dark:bg-custom-default-dark',
    'text-custom-text-red',
    'text-custom-text-orange',
    'text-custom-text-yellow',
    'text-custom-text-green',
    'text-custom-text-blue',
    'text-custom-text-purple',
    'text-custom-text-pink',
    'text-custom-text-brown',
    'text-custom-text-gray',
    'text-custom-text-default',
  ],
  plugins: [],
};
