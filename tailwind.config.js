/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-400": "#DB3069",
        white: "#F4FAFF",
        black: "#0A0D12",
        "secondary-400": "#F5D547",
        "success-400": "#45CB85",
        "info-400": "#359FDB",
        "error-400": "#DB3045",
      },
    },
  },
  plugins: [],
};
