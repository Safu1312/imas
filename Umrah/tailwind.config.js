module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep mosque green
        primary: {
          DEFAULT: "#1B5E20", // green-800
          50: "#E8F5E8", // green-50
          100: "#C8E6C9", // green-100
          200: "#A5D6A7", // green-200
          300: "#81C784", // green-300
          400: "#66BB6A", // green-400
          500: "#4CAF50", // green-500
          600: "#43A047", // green-600
          700: "#388E3C", // green-700
          800: "#2E7D32", // green-800
          900: "#1B5E20", // green-900
        },
        // Secondary Colors - Warm gold
        secondary: {
          DEFAULT: "#C9B037", // custom gold
          50: "#FFFDE7", // yellow-50
          100: "#FFF9C4", // yellow-100
          200: "#FFF59D", // yellow-200
          300: "#FFF176", // yellow-300
          400: "#FFEE58", // yellow-400
          500: "#FFEB3B", // yellow-500
          600: "#C9B037", // custom gold
          700: "#F9A825", // yellow-700
          800: "#F57F17", // yellow-800
          900: "#E65100", // yellow-900
        },
        // Accent Colors - Sunset orange
        accent: {
          DEFAULT: "#FF6F00", // orange-600
          50: "#FFF3E0", // orange-50
          100: "#FFE0B2", // orange-100
          200: "#FFCC80", // orange-200
          300: "#FFB74D", // orange-300
          400: "#FFA726", // orange-400
          500: "#FF9800", // orange-500
          600: "#FF6F00", // orange-600
          700: "#E65100", // orange-700
          800: "#BF360C", // orange-800
          900: "#3E2723", // orange-900
        },
        // Background Colors
        background: "#FAFAFA", // gray-50
        surface: "#F5F5DC", // custom beige
        // Text Colors
        text: {
          primary: "#212121", // gray-800
          secondary: "#757575", // gray-500
        },
        // Status Colors
        success: "#2E7D32", // green-800
        warning: "#F57C00", // orange-600
        error: "#C62828", // red-700
        // Neutral Colors
        neutral: {
          50: "#FAFAFA", // gray-50
          100: "#F5F5F5", // gray-100
          200: "#EEEEEE", // gray-200
          300: "#E0E0E0", // gray-300
          400: "#BDBDBD", // gray-400
          500: "#9E9E9E", // gray-500
          600: "#757575", // gray-600
          700: "#616161", // gray-700
          800: "#424242", // gray-800
          900: "#212121", // gray-900
        },
      },
      fontFamily: {
        // Headlines - Authentic Arabic-inspired serif
        amiri: ['Amiri', 'serif'],
        // Body - Clean, highly legible sans-serif
        inter: ['Inter', 'sans-serif'],
        // CTAs - Friendly, approachable weight
        poppins: ['Poppins', 'sans-serif'],
        // Accents - Traditional Arabic script
        scheherazade: ['Scheherazade New', 'serif'],
        // Default font stacks
        sans: ['Inter', 'sans-serif'],
        serif: ['Amiri', 'serif'],
      },
      fontSize: {
        // Custom font sizes for spiritual content
        'prayer': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '0.025em' }],
        'verse': ['1.25rem', { lineHeight: '2rem', letterSpacing: '0.05em' }],
        'blessing': ['2rem', { lineHeight: '2.5rem', letterSpacing: '0.025em' }],
      },
      spacing: {
        // Custom spacing for Islamic geometric layouts
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        // Islamic arch-inspired border radius
        'arch': '50% 50% 0 0',
        'mosque': '0.75rem',
      },
      boxShadow: {
        // Custom shadows for prayer cards and spiritual elements
        'prayer-card': '0 4px 12px rgba(27, 94, 32, 0.15)',
        'gentle': '0 2px 8px rgba(27, 94, 32, 0.1)',
        'elevated': '0 8px 24px rgba(27, 94, 32, 0.2)',
        'sacred': '0 0 20px rgba(201, 176, 55, 0.3)',
      },
      animation: {
        // Custom animations for spiritual interactions
        'prayer-bead': 'prayer-bead 1.4s infinite ease-in-out both',
        'gentle-fade': 'fadeIn 600ms ease-out',
        'sacred-reveal': 'reveal 800ms ease-out',
      },
      keyframes: {
        'prayer-bead': {
          '0%, 80%, 100%': {
            transform: 'scale(0)',
            opacity: '0.5',
          },
          '40%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      transitionDuration: {
        // Sacred timing for spiritual interactions
        '300': '300ms',
        '600': '600ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'sacred': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'prayer': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      backgroundImage: {
        // Islamic geometric patterns
        'geometric-pattern': 'radial-gradient(circle at 25% 25%, rgba(201, 176, 55, 0.1) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(201, 176, 55, 0.1) 2px, transparent 2px)',
        'prayer-gradient': 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)',
        'sacred-gradient': 'linear-gradient(135deg, #C9B037 0%, #F9A825 100%)',
      },
      backgroundSize: {
        'pattern': '40px 40px',
      },
      backgroundPosition: {
        'pattern': '0 0, 20px 20px',
      },
    },
  },
  plugins: [
    // Custom plugin for Islamic design utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.transition-sacred': {
          transition: 'all 300ms ease-out',
        },
        '.transition-prayer': {
          transition: 'all 600ms ease-out',
        },
        '.btn-arch': {
          position: 'relative',
          borderRadius: '0',
          clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)',
          background: 'linear-gradient(135deg, #1B5E20, #388E3C)',
        },
        '.btn-arch:hover': {
          background: 'linear-gradient(135deg, #388E3C, #2E7D32)',
          transform: 'translateY(-2px)',
        },
        '.pattern-geometric': {
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(201, 176, 55, 0.1) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(201, 176, 55, 0.1) 2px, transparent 2px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        },
        '.corner-islamic': {
          position: 'relative',
        },
        '.corner-islamic::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '12px',
          height: '12px',
          background: 'linear-gradient(45deg, transparent 30%, #C9B037 30%, #C9B037 70%, transparent 70%)',
        },
        '.corner-islamic::after': {
          content: '""',
          position: 'absolute',
          bottom: '0',
          right: '0',
          width: '12px',
          height: '12px',
          background: 'linear-gradient(225deg, transparent 30%, #C9B037 30%, #C9B037 70%, transparent 70%)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}