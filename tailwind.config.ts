import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#1A1A1A",
          50: "#F5F5F4",
          100: "#E7E5E4",
          200: "#D6D3D1",
          300: "#A8A29E",
          400: "#78716C",
          500: "#57534E",
          600: "#44403C",
          700: "#2A2A2A",
          800: "#1A1A1A",
          900: "#0F0F0F",
        },
        orange: {
          DEFAULT: "#F47621",
          50: "#FEF3E9",
          100: "#FDE0C7",
          200: "#FBBF8A",
          300: "#F9A04D",
          400: "#F47621",
          500: "#DC6A1E",
          600: "#C45E1A",
          700: "#9C4B15",
          800: "#753810",
          900: "#4D250A",
        },
        dbricks: {
          DEFAULT: "#FF3621",
          50: "#FFECE9",
          100: "#FFD0C9",
          200: "#FFA193",
          300: "#FF725D",
          400: "#FF3621",
          500: "#E52E1B",
          600: "#CC2818",
          700: "#A62013",
          800: "#80190F",
          900: "#5A110A",
        },
        amber: {
          DEFAULT: "#E8A838",
          50: "#FDF6E7",
          100: "#FAE9C3",
          200: "#F5D58A",
          300: "#F0C151",
          400: "#E8A838",
          500: "#D09530",
          600: "#B88228",
          700: "#936820",
          800: "#6E4E18",
          900: "#493410",
        },
        muted: "#78716C",
        light: "#F5F5F4",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        brand: "4px",
      },
      animation: {
        counter: "counter 2s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        counter: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
