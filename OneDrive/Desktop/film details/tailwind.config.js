/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff8600",
        muted: "#8b949e",
        "muted-bg": "#1b1b1b",
        bg: "#0f0f0f",
      },
      boxShadow: {
        card: "0 6px 24px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        pill: "9999px",
      },
    },
  },
  plugins: [],
};
