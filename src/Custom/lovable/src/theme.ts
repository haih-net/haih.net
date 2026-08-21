export const theme = {
  lovable: {
    color: {
      /** Pure white page background — no tint. */
      bg: '#ffffff',
      surface: '#ffffff',
      surfaceRaised: '#f2f3f5',
      border: '#e4e5e8',
      borderStrong: '#c6c8cd',
      /** Near-black body text for maximum contrast on white. */
      text: '#101114',
      textMuted: '#54565d',
      accent: '#1b46e0',
      accentDim: '#d6ddfb',
      accentSoft: '#f3f5ff',
      agent: '#1b46e0',
      human: '#101114',
      danger: '#b3241f',
    },
    font: {
      sans: "'Inter Tight', 'Inter', 'Segoe UI', system-ui, sans-serif",
      mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace",
    },
    radius: {
      sm: '6px',
      md: '10px',
      lg: '14px',
      pill: '999px',
    },
    bp: {
      md: '48rem',
      lg: '68rem',
    },
  },
} as const

export type AppTheme = typeof theme

export const lovableTheme = theme
