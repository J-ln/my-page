import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: 'transparent',
        "Platinum": "#cfdbd5",
        "Alabaster": "#e8eddf",
        "Saffron": "#f5cb5c",
        "Eblack": "#242423",
        "Jet": "#333533",
        "Orange": "#F09542",
        "Brown": "#8D7840",
        "Lgray": "#A0A0A0"
      },
      fontFamily: {
        'jost': ['var(--font-jost)', 'sans-serif'],
        'roboto': ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
