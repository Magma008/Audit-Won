/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "right": {
          "0%": {transform: "translateX(15%)"},
          "50%": {transform: "translateX(0%)"},
          "100%": {transform: "translateX(15%)"}
        }
      },
      animation: {
        "right": "right 2s ease-in-out infinite"
      }
    },
  },
  plugins: [],
}
// @keyframes bounce {
//   0%, 100% {
//       transform: translateY(-25%);
//       animation-timing-function: cubic-bezier(0.8,0,1,1);
//   }
//   50% {
//       transform: none;
//       animation-timing-function: cubic-bezier(0,0,0.2,1);
//   }
// }
// .animate-bounce {
//   animation: bounce 1s infinite;
// }