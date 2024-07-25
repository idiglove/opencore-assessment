import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#EAECF0",
        dark: "#1D2939",
        light: "#475467",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        bannerFrom: "#2F5478",
        bannerTo: "#22405C",
        textColor: "#344054",
        primary: {
          DEFAULT: "#294f74",
          foreground: "#EDF2F5",
        },
        secondary: {
          DEFAULT: "#667085",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        badge: { DEFAULT: "#F9FAFB", secondary: "#F2F4F7" },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      padding: {
        sm: "10px",
        31: "124px",
        22: "88px",
      },
      borderRadius: {
        lg: "18px",
        md: "8px",
        sm: "4px",
      },
      boxShadowColor: {
        input: "var(--input-shadow)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      fontSize: {
        "4xl": "4rem",
      },
      lineHeight: {
        xl: "76px",
      },
      margin: {
        23: "5.75rem",
      },
      backgroundImage: {
        "grid-top": "url('/assets/resources/GridTop.png')",
        "grid-btm": "url('/assets/resources/GridBtm.png')",
        "oc-footer": "url('/assets/resources/OpenCoreFooter.png')",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
