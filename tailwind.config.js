/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Exact design tokens (use the provided color values)
        "primary-navy": "rgb(30 58 95)",
        "accent-blue": "rgb(84 159 229)",
        "accent-orange": "rgb(247 99 0)",
        "muted-text": "#1e3a5f99",
        "footer-bg": "#1e3a5f",
        "neutral-white": "#ffffff",
      },
      fontFamily: {
        // Use font variables exposed by app/layout.tsx
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
