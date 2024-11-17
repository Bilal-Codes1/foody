import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF073A",
        secondary: "#666666",
        tertiary: "#2c2c2c",
      },
      screens: {
        laptop: "920px", // Custom breakpoint at 920px
        xl: "1440px", // Additional breakpoint for very large screens
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
} satisfies Config;
