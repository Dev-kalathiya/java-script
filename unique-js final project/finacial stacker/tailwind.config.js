/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          darkBg: "#1E1E2E",
          lightBg: "#F3F4F6",
          darkText: "#FFFFFF",
          lightText: "#111827",
        },
      },
    },
    darkMode: "class",
    plugins: [],
  };
  