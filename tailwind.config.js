/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultBlue: '#6278f7',
        hoverButton: '#95FFd4',
      },
    },
  },
  variants: {},
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// // Criando cor padrão azul

// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         defaultBlue: '#6278f7',
//       },
//     },
//   },
//   variants: {},
//   plugins: [],
// };
