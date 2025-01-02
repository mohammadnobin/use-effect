// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         'dm-sans' : ['"DM Sans", "sans-serif"']
//       }
//     },
//   },
//   plugins: [ require('tailwind-scrollbar'),],
// }


/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['"DM Sans", "sans-serif"'],
      },
    },
  },
  plugins: [tailwindScrollbar],
};
