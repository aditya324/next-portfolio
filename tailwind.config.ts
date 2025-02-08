import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        dancing: ["var(--font-dancing)"],
        inter: ["var(--font-inter)"],
        roboto: ["var(--font-roboto)"],
        roboto_mono: ["var(--font-roboto-mono)"],
      }
    },
  },
  plugins: [],
} satisfies Config;
