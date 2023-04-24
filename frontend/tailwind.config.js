/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#9EBC9E",
        purple: "#CCABD8",
        orange: "#efbb72",
        darkteal: "#C2E6DF",
        sand: "#F2D8A7",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
