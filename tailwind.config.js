/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#f8fafc",
        "background-dark": "#0f172a",
        surface: "#ffffff",
        "surface-dark": "#1e293b",
        "surface-darker": "#111827",
        'surface-light': '#1f2b42',
        // === 3 WARNA KONTRAS UTAMA ===
        // 1. Cyan (Teknologi / WebGL / Realtime)
        cyan: {
          DEFAULT: '#06b6d4',
          bright: '#00f2fe',
          soft: '#67e8f9',
        },
        // 2. Purple (Kreatif / 3D / Arsitektur)
        purple: {
          DEFAULT: '#8b5cf6',
          bright: '#a855f7',
          soft: '#d8b4fe',
        },
        // 3. Electric Orange (CTA / Highlight / Kontras Utama)
        orange: {
          DEFAULT: '#ff5400',
          bright: '#ff7a35',
          soft: '#ffb38f',
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "ping-slow": "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
