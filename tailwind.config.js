/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "header-top-animation": {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: 1,
          },
        },
        "box-opacity-animation": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "box-opacity-left-animation": {
          "0%": {
            opacity: 0,
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0%)",
          },
        },
        "box-opacity-right-animation": {
          "0%": {
            opacity: 0,
            transform: "translateX(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
  plugins: [],
};
