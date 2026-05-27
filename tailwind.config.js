/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0C0C0F",
        bg2: "#131318",
        bg3: "#1A1A22",
        fg: "#F0EDE8",
        fg2: "#9B9AA0",
        fg3: "#5C5B63",
        accent: "#22B573",
        accent2: "#1A8F5A",
        "accent-dim": "rgba(34,181,115,0.12)",
        border: "rgba(255,255,255,0.07)",
        border2: "rgba(255,255,255,0.12)",
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
        sans: ['Geist', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
