import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
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
        coffee: {
          50: "#f5f0e5",
          100: "#e6d7c3",
          200: "#d2b990",
          300: "#c19b69",
          400: "#a67e45",
          500: "#8c6239",
          600: "#704d2e",
          700: "#5c3f26",
          800: "#483220",
          900: "#362419",
          950: "#211509",
        },
        espresso: {
          50: "#faf6f3",
          100: "#f2e9e1",
          200: "#e2cfc0",
          300: "#d0af97",
          400: "#b9886a",
          500: "#a76f4e",
          600: "#95573c",
          700: "#7c4732",
          800: "#663c2d",
          900: "#553429",
          950: "#2e1a15",
        },
        bean: {
          50: "#f8f5f0",
          100: "#eee5d9",
          200: "#ddc7b0",
          300: "#cba582",
          400: "#ba8359",
          500: "#a96c43",
          600: "#8f5638",
          700: "#74432f",
          800: "#61382b",
          900: "#513026",
          950: "#2e1912",
        },
        leaf: {
          50: "#f0f9f0",
          100: "#dcefdd",
          200: "#bce0be",
          300: "#92ca96",
          400: "#65ad6a",
          500: "#488f4d",
          600: "#357339",
          700: "#2b5c2f",
          800: "#254a28",
          900: "#1e3d22",
          950: "#0f2111",
        },
        brazil: {
          green: "#009c3b",
          yellow: "#ffdf00",
          blue: "#002776",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
