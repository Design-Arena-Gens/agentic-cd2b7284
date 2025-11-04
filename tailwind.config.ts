import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        valorant: {
          red: '#FF4655',
          dark: '#0F1923',
          darker: '#0A0E13',
        },
      },
    },
  },
  plugins: [],
};
export default config;
