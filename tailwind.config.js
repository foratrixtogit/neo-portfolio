/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#22d3ee",
          600: "#06b6d4",
        },
        dark: "#0b0f14"
      },
      boxShadow: {
        glow: "0 0 24px rgba(34,211,238,0.45)",
        'inner-neon': "inset 0 0 20px rgba(34,211,238,0.25)"
      },
      backgroundImage: {
        'neon-grid':
          "linear-gradient(rgba(34,211,238,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.12) 1px, transparent 1px)",
        'radial-fade':
          "radial-gradient(1200px 600px at 50% -10%, rgba(34,211,238,0.25), transparent 60%)"
      },
      backgroundSize: {
        'grid-24': '24px 24px',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' }
        },
        twinkle: {
          '0%,100%': { opacity: 0.2 },
          '50%': { opacity: 1 }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        twinkle: 'twinkle 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
