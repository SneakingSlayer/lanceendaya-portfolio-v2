/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "creamy-white": "#fff7ea",
        "creamy-white-muted": "#efebe680",
        "creamy-yellow": "#fdc158",
        "creamy-gray": "#1d1f23",
        "creamy-black": "rgba(24, 25, 28, <alpha-value>)",
        "creamy-red": "#fc5858",
      },
    },
  },

  plugins: [require("@tailwindcss/line-clamp")],
  darkMode: "class",
};
