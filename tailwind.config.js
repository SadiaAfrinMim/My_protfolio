// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('daisyui'),
//   ],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], 
  darkMode: ["class", "[data-theme='dark']"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], 
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#a855f7",
          "secondary": "#ec4899",
          "accent": "#8b5cf6",
          "neutral": "#1f2937",
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
          "base-content": "#1f2937",
          "info": "#3b82f6",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
        dark: {
          "primary": "#a855f7",
          "secondary": "#ec4899",
          "accent": "#8b5cf6",
          "neutral": "#1f2937",
          "base-100": "#0a0a0f",
          "base-200": "#111827",
          "base-300": "#1f2937",
          "base-content": "#f9fafb",
          "info": "#3b82f6",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
  },
};

