/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "!./node_modules/**"
  ],
  theme: {
    extend: {
      colors: {
        background: '#050508',
        card: 'rgba(15, 17, 25, 0.9)',
        'card-hover': 'rgba(15, 17, 25, 1)',
        primary: {
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
          glow: 'rgba(59, 130, 246, 0.4)'
        },
        secondary: '#94A3B8',
        accent: {
          DEFAULT: '#8B5CF6',
          orange: '#F97316'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      animation: {
        'glow-breathe': 'glowBreathe 7s ease-in-out infinite',
        'hero-float': 'heroFloat 5s ease-in-out infinite',
        'cta-pulse': 'ctaPulse 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float-gentle': 'floatGentle 6s ease-in-out infinite',
        'gradient-border': 'gradientBorder 6s ease infinite',
        'particle-drift': 'particleDrift 4s ease-in-out infinite'
      },
      keyframes: {
        glowBreathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.08' },
          '50%': { transform: 'scale(1.08)', opacity: '0.04' }
        },
        heroFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-6px) rotate(1deg)' }
        },
        ctaPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(59, 130, 246, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' }
        },
        gradientBorder: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        particleDrift: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '20%': { opacity: '0.4' },
          '80%': { opacity: '0.4' },
          '100%': { transform: 'translateY(-60px) translateX(20px)', opacity: '0' }
        }
      }
    }
  },
  plugins: []
}
