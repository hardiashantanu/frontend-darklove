// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('daisyui'),
//   ],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "random-motion": "random-motion 5s ease-in-out infinite",
      },
      keyframes: {
        "random-motion": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(20px, -30px)" },
          "50%": { transform: "translate(-15px, 20px)" },
          "75%": { transform: "translate(-10px, -10px)" },
        },
      },
    },
  },
  plugins: [],
};



