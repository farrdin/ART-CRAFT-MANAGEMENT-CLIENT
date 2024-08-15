/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      headL: "#333333",
      headD: "#F5F5F5",
      paraL: "#4F4F4F",
      paraD: "#D3D3D3",
      backL: "#F5F5F5",
      backD: "#1A1A1A",
      butL: "#008080",
      butD: "#40E0D0",
      linL: "#4169E1",
      linD: "#87CEEB",
    },
    extend: {
      fontFamily: {
        raleway: "'Raleway', 'sans-serif' ",
        merri: "'Merriweather', 'serif' ",
      },
    },
  },
  plugins: [require("daisyui")],
};
