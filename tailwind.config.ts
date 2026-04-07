/** @type {import('tailwindcss').Config} */

// Nauman Khan — nauman-khan.com
// Brand Guardrails v2.0 — Aligned with dev.getampere.ai Design System
// amOS Client: nauman-khan | Stack: Next.js 14 + Tailwind + GSAP
// Source: dev.getampere.ai color extraction (2026-04-06)

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {

      // ─── COLOR SYSTEM ──────────────────────────────────
      // Dark-first palette: Dark navy + Light + Teal accent (Lusion-inspired)
      colors: {
        brand: {
          // Primary palette
          'dark':        '#0a0b14',  // Primary dark bg (very dark navy)
          'dark-slate':  '#0F172A',  // Secondary dark, text on light backgrounds
          'dark-2':      '#1E293B',  // Mid-dark (Section 03)
          'dark-3':      '#3F3F46',  // Dark secondary text

          // Light surfaces
          'light':       '#FFFFFF',  // Primary light surface, button text
          'light-alt':   '#F4F4F5',  // Alternate light surface (off-white)

          // Text on dark backgrounds
          'text-light':      '#E4E4E7',  // Primary text on dark (light gray/silver)
          'text-light-2':    '#A1A1AA',  // Secondary text on dark (muted gray)
          'text-light-3':    '#A1A1AA',  // Tertiary text on dark

          // Text on light backgrounds
          'text-dark':       '#0F172A',  // Primary text on light (slate)
          'text-dark-2':     '#3F3F46',  // Body text on light (dark gray)
          'text-dark-3':     '#3F3F46',  // Tertiary on light

          // Buttons & CTAs (Lusion-style pill buttons)
          'button-dark':     '#0F172A',  // Primary button background (dark slate)
          'button-text':     '#FFFFFF',  // Button text (pure white)
          'button-secondary': '#FFFFFF', // Secondary button background (white)

          // Accent color
          'accent':      '#14B8A6',  // Teal (links, highlights, CTAs)

          // Muted / structural
          'muted':       '#A1A1AA',  // Timestamps, labels, captions
          'dim':         '#A1A1AA',  // Section labels, dim text
          'border':      '#3F3F46',  // Subtle borders
        },
      },

      // ─── TYPOGRAPHY ────────────────────────────────────
      // Lexend Tera (display) + Inter (body) + JetBrains Mono (labels)
      // No serif. All geometric sans-serif system.
      fontFamily: {
        'display': ['Lexend Tera', 'system-ui', 'sans-serif'],  // Headlines, display, statements
        'sans':    ['Inter', 'system-ui', 'sans-serif'],          // Body, nav, UI
        'mono':    ['JetBrains Mono', 'Fira Code', 'monospace'],  // Labels, markers, code
      },

      fontSize: {
        // Hero name (Lexend Tera)
        'hero':       ['clamp(5rem, 15vw, 17.5rem)', { lineHeight: '0.85', letterSpacing: '-0.04em', fontWeight: '700' }],

        // Headlines (Lexend Tera)
        'display':    ['2.5rem',  { lineHeight: '1.12', letterSpacing: '-0.01em', fontWeight: '600' }],   // 40px — H1
        'title':      ['2rem',    { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],     // 32px — H1 alt
        'subtitle':   ['1.5rem',  { lineHeight: '1.3', fontWeight: '600' }],                               // 24px — H2
        'card-title': ['1.25rem', { lineHeight: '1.3', fontWeight: '600' }],                               // 20px — H3

        // Statement lines (Lexend Tera, italic for contrast)
        'statement':  ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.15', fontWeight: '500' }],

        // Body (sans)
        'body':       ['1rem',    { lineHeight: '1.7' }],    // 16px
        'body-sm':    ['0.875rem', { lineHeight: '1.6' }],   // 14px
        'caption':    ['0.8125rem', { lineHeight: '1.5' }],  // 13px

        // Labels (mono, ALL CAPS)
        'label':      ['0.6875rem', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '400' }],  // 11px

        // Stats
        'stat':       ['1.75rem', { lineHeight: '1', fontWeight: '500' }],   // 28px
        'stat-lg':    ['2rem',    { lineHeight: '1', fontWeight: '500' }],   // 32px
      },

      // ─── SPACING & LAYOUT ─────────────────────────────
      // Generous whitespace. Architectural rhythm.
      spacing: {
        'section':   '7rem',     // 112px — between major sections
        'section-sm': '4.5rem',  // 72px — between sub-sections
        'block':     '2.5rem',   // 40px — between content blocks
        'element':   '1.5rem',   // 24px — between elements
      },

      maxWidth: {
        'content':   '72rem',    // 1152px — max content width
        'prose':     '42rem',    // 672px — article body max width
        'narrow':    '36rem',    // 576px — narrow text blocks
      },

      // ─── BORDERS & RADIUS ─────────────────────────────
      // Minimal. 0.5px default. 4px radius.
      borderWidth: {
        'thin':  '0.5px',
        'accent': '2px',   // Left-border accents on cards/pillars
      },

      borderRadius: {
        'card':   '0.5rem',   // 8px — cards
        'button': '0.25rem',  // 4px — buttons, tags
        'pill':   '1.25rem',  // 20px — pills, category tags
      },

      // ─── ANIMATION ────────────────────────────────────
      // GSAP handles complex animations.
      // These are CSS-only ambient transitions.
      transitionDuration: {
        'fast':   '150ms',
        'normal': '200ms',
        'slow':   '400ms',
      },

      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.33, 1, 0.68, 1)',  // ease-out equivalent
      },

      keyframes: {
        'marquee': {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-once': {
          '0%':   { transform: 'scale(1)', opacity: '1' },
          '50%':  { transform: 'scale(1.3)', opacity: '0.7' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },

      animation: {
        'marquee':     'marquee 30s linear infinite',
        'pulse-once':  'pulse-once 1.5s ease-in-out 1',
      },
    },
  },

  plugins: [],
}
