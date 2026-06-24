/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Shared design tokens (mapped to CSS vars)
        background: 'var(--background)',
        surface: 'var(--surface)',
        card: 'var(--card)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
        },
        // Tattva-specific tonal palette
        tattva: {
          obsidian: '#0D0D0D',
          charcoal: '#161513',
          ink: '#1C1A17',
          cream: '#EDE8DF',
          'cream-dim': '#C9C3B6',
          'cream-faint': 'rgba(237,232,223,0.45)',
          rule: 'rgba(237,232,223,0.10)',
          'rule-dim': 'rgba(237,232,223,0.06)',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],              // body, labels, tagline
        display: ['General Sans', 'sans-serif'],      // wordmark only
        serif: ['Cormorant', 'serif'],                // Sanskrit verse, quote headline
        'serif-sc': ['"Cormorant SC"', 'serif'],     // small-caps source labels
        sanskrit: ['"Tiro Devanagari Sanskrit"', 'serif'],
        instrument: ['"Instrument Serif"', 'serif'],
      },
      fontSize: {
        // Hero headings (fluid)
        'hero-lg': ['clamp(3.5rem, 8vw, 8rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'hero-md': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],

        // Section headings
        'section-h1': ['clamp(2rem, 4.5vw, 3.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '600' }],
        'section-h2': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],

        // Sanskrit / editorial quote sizes (fluid)
        'quote-xl': ['clamp(2.25rem, 5vw, 4.5rem)', { lineHeight: '1.22', letterSpacing: '0.01em', fontWeight: '400' }],
        'quote-lg': ['clamp(1.6rem, 3.5vw, 3rem)', { lineHeight: '1.3', letterSpacing: '0.01em', fontWeight: '300' }],

        // Body text
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.005em' }],
        'body-md': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0' }],

        // Labels
        'label-md': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '600' }],
        'label-sm': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.07em', fontWeight: '600' }],

        // Captions
        caption: ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      spacing: {
        'section-gap': 'clamp(4rem, 8vw, 10rem)',
        'section-gap-sm': 'clamp(2.5rem, 5vw, 5rem)',
      },
      animation: {
        'fade-in': 'fadeIn 2.4s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
