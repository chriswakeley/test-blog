/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./**/*.md",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#9A0C0C",
          charcoal: "#333333",
          warm: "#F6F3F1",
          gold: "#B68A5A",
          green: "#6F8D7B"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"]
      }
    }
  },
  plugins: [require("daisyui")]
};
