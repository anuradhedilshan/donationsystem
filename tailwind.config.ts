import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-dark": "#22262A",
      "secondry-dark": "#333942",
      "primary-light": "#FDD160",
      "secondry-light": "#78ACFC",
    },
  },
  plugins: [],
};
export default config;
