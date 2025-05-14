/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
 
    extend: {
      colors: {
        "neon-green": "#00ff00",
        "neon-blue": "#00f0ff",
      },
      boxShadow: {
        neon: "0 0 10px rgba(0, 255, 0, 0.5)",
        "neon-blue": "0 0 10px rgba(0, 240, 255, 0.5)",
      },
      animation: {
        scanline: "scanline 2s linear infinite",
      },
      keyframes: {
        scanline: {
          "0%": { background: "linear-gradient(to bottom, transparent 50%, rgba(0, 255, 0, 0.1) 50%)" },
          "50%": { background: "linear-gradient(to bottom, transparent 50%, rgba(0, 255, 0, 0.3) 50%)" },
          "100%": { background: "linear-gradient(to bottom, transparent 50%, rgba(0, 255, 0, 0.1) 50%)" },
        },
      },
    },
  },
  plugins: [],
};
