/** @type {import('tailwindcss').Config} */

// Nauman Khan — nauman-khan.com
// Brand Guardrails v1.0 — Locked March 31, 2026
// amOS Client: nauman-khan | Stack: Astro + Tailwind + GSAP

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {

      // ─── COLOR SYSTEM ──────────────────────────────────
      // Slate + Teal | Hybrid dark/light alternating sections
      // Dark sections = positioning | Light sections = content
      colors: {
        brand: {
          // Primary palette
          'deep-slate':  '#0F172A',  // Primary dark bg, header, footer, hero
          'slate':       '#1E293B',  // Secondary dark surface, cards on dark
          'mid-slate':   '#334155',  // Borders on dark, muted elements
          'teal':        '#14B8A6',  // PRIMARY ACCENT — CTAs, highlights, stats, dots
          'deep-teal':   '#0D9488',  // Hover state, secondary teal on light
          'teal-bg':     '#F0FDFA',  // Teal background tint on light sections

          // Light surfaces
          'ice':         '#F8FAFC',  // Primary light surface
          'light-alt':   '#F1F5F9',  // Alternate light surface (cream sections)
          'cool-gray':   '#E2E8F0',  // Borders on light, dividers

          // Text on dark
          'text-light':      '#F8FAFC',  // Primary text on dark
          'text-light-2':    '#E2E8F0',  // Secondary headings on dark
          'text-light-3':    '#CBD5E1',  // Secondary text on dark

          // Text on light
          'text-dark':       '#0F172A',  // Primary text on light
          'text-dark-2':     '#334155',  // Body text on light
          'text-dark-3':     '#475569',  // Tertiary on light

          // Muted / structural
          'muted':       '#94A3B8',  // Timestamps, labels, captions
          'dim':         '#64748B',  // Section labels on light, dim text
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
