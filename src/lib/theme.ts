export interface ThemeConfig {
  name: string;
  colors: {
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    accent: string;
    accentForeground: string;
    background: string;
    foreground: string;
    muted: string;
    mutedForeground: string;
    card: string;
    cardForeground: string;
    border: string;
    destructive: string;
    success: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  borderRadius: number; // px
  shadow: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  borderWidth: number; // px
  opacity: number; // 0-100
  spacing: 'compact' | 'comfortable' | 'spacious';
  style: string; // description tag
}

export const defaultTheme: ThemeConfig = {
  name: 'Clean Minimal',
  colors: {
    primary: '#2563eb',
    primaryForeground: '#ffffff',
    secondary: '#f1f5f9',
    secondaryForeground: '#1e293b',
    accent: '#8b5cf6',
    accentForeground: '#ffffff',
    background: '#ffffff',
    foreground: '#0f172a',
    muted: '#f8fafc',
    mutedForeground: '#64748b',
    card: '#ffffff',
    cardForeground: '#0f172a',
    border: '#e2e8f0',
    destructive: '#ef4444',
    success: '#22c55e',
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  borderRadius: 8,
  shadow: 'sm',
  borderWidth: 1,
  opacity: 100,
  spacing: 'comfortable',
  style: 'clean-minimal',
};

export const presets: ThemeConfig[] = [
  { ...defaultTheme },
  {
    name: 'Glassmorphic',
    colors: {
      primary: '#6366f1',
      primaryForeground: '#ffffff',
      secondary: 'rgba(255,255,255,0.15)',
      secondaryForeground: '#e2e8f0',
      accent: '#a78bfa',
      accentForeground: '#ffffff',
      background: '#0f0b2e',
      foreground: '#e2e8f0',
      muted: 'rgba(255,255,255,0.08)',
      mutedForeground: '#94a3b8',
      card: 'rgba(255,255,255,0.1)',
      cardForeground: '#e2e8f0',
      border: 'rgba(255,255,255,0.15)',
      destructive: '#f87171',
      success: '#4ade80',
    },
    fonts: { heading: 'Inter', body: 'Inter' },
    borderRadius: 16,
    shadow: 'lg',
    borderWidth: 1,
    opacity: 80,
    spacing: 'comfortable',
    style: 'glassmorphic',
  },
  {
    name: 'Skeuomorphic',
    colors: {
      primary: '#3b82f6',
      primaryForeground: '#ffffff',
      secondary: '#e8e0d4',
      secondaryForeground: '#3d3029',
      accent: '#f59e0b',
      accentForeground: '#1c1917',
      background: '#f5efe6',
      foreground: '#1c1917',
      muted: '#ece4d8',
      mutedForeground: '#78716c',
      card: '#faf6f0',
      cardForeground: '#1c1917',
      border: '#d6cfc5',
      destructive: '#dc2626',
      success: '#16a34a',
    },
    fonts: { heading: 'Georgia', body: 'Georgia' },
    borderRadius: 6,
    shadow: 'xl',
    borderWidth: 2,
    opacity: 100,
    spacing: 'comfortable',
    style: 'skeuomorphic',
  },
  {
    name: 'Brutalist',
    colors: {
      primary: '#000000',
      primaryForeground: '#ffffff',
      secondary: '#ffff00',
      secondaryForeground: '#000000',
      accent: '#ff0000',
      accentForeground: '#ffffff',
      background: '#ffffff',
      foreground: '#000000',
      muted: '#f0f0f0',
      mutedForeground: '#333333',
      card: '#ffffff',
      cardForeground: '#000000',
      border: '#000000',
      destructive: '#ff0000',
      success: '#00ff00',
    },
    fonts: { heading: 'Space Mono', body: 'Space Mono' },
    borderRadius: 0,
    shadow: 'none',
    borderWidth: 3,
    opacity: 100,
    spacing: 'compact',
    style: 'brutalist',
  },
  {
    name: 'Soft Pastel',
    colors: {
      primary: '#8b5cf6',
      primaryForeground: '#ffffff',
      secondary: '#fce7f3',
      secondaryForeground: '#831843',
      accent: '#f472b6',
      accentForeground: '#ffffff',
      background: '#fdf4ff',
      foreground: '#1e1b4b',
      muted: '#f5f0ff',
      mutedForeground: '#6b7280',
      card: '#ffffff',
      cardForeground: '#1e1b4b',
      border: '#e9d5ff',
      destructive: '#f43f5e',
      success: '#34d399',
    },
    fonts: { heading: 'Nunito', body: 'Nunito' },
    borderRadius: 20,
    shadow: 'md',
    borderWidth: 1,
    opacity: 100,
    spacing: 'spacious',
    style: 'soft-pastel',
  },
  {
    name: 'Corporate',
    colors: {
      primary: '#1e40af',
      primaryForeground: '#ffffff',
      secondary: '#f0f4f8',
      secondaryForeground: '#1e293b',
      accent: '#0369a1',
      accentForeground: '#ffffff',
      background: '#ffffff',
      foreground: '#111827',
      muted: '#f9fafb',
      mutedForeground: '#6b7280',
      card: '#ffffff',
      cardForeground: '#111827',
      border: '#d1d5db',
      destructive: '#dc2626',
      success: '#059669',
    },
    fonts: { heading: 'Source Sans 3', body: 'Source Sans 3' },
    borderRadius: 4,
    shadow: 'sm',
    borderWidth: 1,
    opacity: 100,
    spacing: 'compact',
    style: 'corporate',
  },
  {
    name: 'Dark Neon',
    colors: {
      primary: '#06b6d4',
      primaryForeground: '#0f172a',
      secondary: '#1e293b',
      secondaryForeground: '#e2e8f0',
      accent: '#f43f5e',
      accentForeground: '#ffffff',
      background: '#020617',
      foreground: '#e2e8f0',
      muted: '#0f172a',
      mutedForeground: '#64748b',
      card: '#0f172a',
      cardForeground: '#e2e8f0',
      border: '#1e293b',
      destructive: '#ef4444',
      success: '#10b981',
    },
    fonts: { heading: 'Space Grotesk', body: 'Inter' },
    borderRadius: 12,
    shadow: 'lg',
    borderWidth: 1,
    opacity: 100,
    spacing: 'comfortable',
    style: 'dark-neon',
  },
  {
    name: 'Warm Earth',
    colors: {
      primary: '#b45309',
      primaryForeground: '#ffffff',
      secondary: '#fef3c7',
      secondaryForeground: '#78350f',
      accent: '#059669',
      accentForeground: '#ffffff',
      background: '#fffbeb',
      foreground: '#1c1917',
      muted: '#fef9ee',
      mutedForeground: '#78716c',
      card: '#ffffff',
      cardForeground: '#1c1917',
      border: '#e7e5e4',
      destructive: '#dc2626',
      success: '#16a34a',
    },
    fonts: { heading: 'Merriweather', body: 'Lato' },
    borderRadius: 8,
    shadow: 'md',
    borderWidth: 1,
    opacity: 100,
    spacing: 'spacious',
    style: 'warm-earth',
  },
  {
    name: 'Monochrome',
    colors: {
      primary: '#171717',
      primaryForeground: '#fafafa',
      secondary: '#f5f5f5',
      secondaryForeground: '#171717',
      accent: '#525252',
      accentForeground: '#fafafa',
      background: '#ffffff',
      foreground: '#0a0a0a',
      muted: '#fafafa',
      mutedForeground: '#737373',
      card: '#ffffff',
      cardForeground: '#0a0a0a',
      border: '#e5e5e5',
      destructive: '#dc2626',
      success: '#16a34a',
    },
    fonts: { heading: 'DM Sans', body: 'DM Sans' },
    borderRadius: 6,
    shadow: 'sm',
    borderWidth: 1,
    opacity: 100,
    spacing: 'comfortable',
    style: 'monochrome',
  },
  {
    name: 'Retro',
    colors: {
      primary: '#dc2626',
      primaryForeground: '#fef2f2',
      secondary: '#fef9c3',
      secondaryForeground: '#422006',
      accent: '#2563eb',
      accentForeground: '#ffffff',
      background: '#fefce8',
      foreground: '#1c1917',
      muted: '#fef9c3',
      mutedForeground: '#78716c',
      card: '#fffbeb',
      cardForeground: '#1c1917',
      border: '#d6d3d1',
      destructive: '#b91c1c',
      success: '#15803d',
    },
    fonts: { heading: 'Playfair Display', body: 'Roboto' },
    borderRadius: 2,
    shadow: 'md',
    borderWidth: 2,
    opacity: 100,
    spacing: 'comfortable',
    style: 'retro',
  },
];

// Popular Google Fonts
export const popularFonts = [
  'Inter', 'Roboto', 'Open Sans', 'Lato', 'Montserrat',
  'Poppins', 'Nunito', 'Raleway', 'Ubuntu', 'Playfair Display',
  'Merriweather', 'Source Sans 3', 'DM Sans', 'Space Grotesk', 'Work Sans',
  'Outfit', 'Rubik', 'Manrope', 'Plus Jakarta Sans', 'Space Mono',
];

// Extended Google Fonts catalog
export const extendedFonts = [
  'ABeeZee', 'Abel', 'Abhaya Libre', 'Abril Fatface', 'Aclonica',
  'Acme', 'Adamina', 'Advent Pro', 'Aguafina Script', 'Alata',
  'Albert Sans', 'Alegreya', 'Alegreya Sans', 'Alex Brush', 'Alfa Slab One',
  'Alice', 'Alike', 'Allerta', 'Almendra', 'Amethysta',
  'Amiri', 'Amita', 'Andada Pro', 'Andika', 'Anek Latin',
  'Architects Daughter', 'Archivo', 'Archivo Narrow', 'Arimo', 'Arsenal',
  'Arvo', 'Asap', 'Asar', 'Assistant', 'Atkinson Hyperlegible',
  'Barlow', 'Barlow Condensed', 'Be Vietnam Pro', 'Bebas Neue', 'Belleza',
  'Bitter', 'Bodoni Moda', 'Bree Serif', 'Bricolage Grotesque', 'Brygada 1918',
  'Cabin', 'Cairo', 'Cantarell', 'Cardo', 'Catamaran',
  'Caveat', 'Chakra Petch', 'Chivo', 'Cinzel', 'Comfortaa',
  'Commissioner', 'Concert One', 'Cormorant', 'Cormorant Garamond', 'Courgette',
  'Crimson Pro', 'Crimson Text', 'Cuprum', 'Dancing Script', 'Dosis',
  'EB Garamond', 'Eczar', 'El Messiri', 'Electrolize', 'Encode Sans',
  'Exo 2', 'Familjen Grotesk', 'Figtree', 'Fira Code', 'Fira Sans',
  'Fira Sans Condensed', 'Fjalla One', 'Francois One', 'Frank Ruhl Libre', 'Fraunces',
  'Gabarito', 'Gelasio', 'General Sans', 'Georgia', 'Gloock',
  'Gloria Hallelujah', 'Gothic A1', 'Grape Nuts', 'Great Vibes', 'Hanken Grotesk',
  'Heebo', 'Hind', 'IBM Plex Mono', 'IBM Plex Sans', 'IBM Plex Serif',
  'Inconsolata', 'Instrument Sans', 'Instrument Serif', 'Iosevka',
  'JetBrains Mono', 'Josefin Sans', 'Josefin Slab', 'Jost', 'Kalam',
  'Kanit', 'Karla', 'Khand', 'Kumbh Sans', 'Labrada',
  'League Spartan', 'Lexend', 'Libre Baskerville', 'Libre Franklin',
  'Lilita One', 'Literata', 'Lobster', 'Lobster Two', 'Lora',
  'Lustria', 'Marcellus', 'Maven Pro', 'Merienda', 'Merriweather Sans',
  'Michroma', 'Mogra', 'Mulish', 'Nanum Gothic', 'Noto Sans',
  'Noto Serif', 'Nunito Sans', 'Old Standard TT', 'Onest', 'Orbitron',
  'Oswald', 'Outfit', 'Overpass', 'Oxygen', 'PT Sans',
  'PT Serif', 'Pacifico', 'Patua One', 'Petrona', 'Philosopher',
  'Play', 'Playpen Sans', 'Plus Jakarta Sans', 'Podkova', 'Prata',
  'Prompt', 'Proza Libre', 'Public Sans', 'Quicksand', 'Rajdhani',
  'Red Hat Display', 'Red Hat Text', 'Roboto Condensed', 'Roboto Mono', 'Roboto Slab',
  'Rokkitt', 'Rosarivo', 'Rubik Mono One', 'Russo One', 'Saira',
  'Satisfy', 'Sawarabi Gothic', 'Schibsted Grotesk', 'Secular One', 'Sen',
  'Signika', 'Silkscreen', 'Sintony', 'Sora', 'Source Code Pro',
  'Source Serif 4', 'Spectral', 'Stint Ultra Condensed', 'Syne',
  'Teko', 'Tenor Sans', 'Titillium Web', 'Urbanist', 'Varela Round',
  'Vollkorn', 'Wix Madefor Display', 'Yanone Kaffeesatz', 'Yantramanav', 'Zen Kaku Gothic New',
  'Zilla Slab',
];

// Color harmony functions
function hslToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function hexToRgba(hex: string, alpha: number): string {
  // Handle rgba/non-hex colors
  if (!hex.startsWith('#')) return hex;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function hexToHsl(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) * 60; break;
      case g: h = ((b - r) / d + 2) * 60; break;
      case b: h = ((r - g) / d + 4) * 60; break;
    }
  }
  return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
}

type HarmonyType = 'complementary' | 'analogous' | 'triadic' | 'split-complementary' | 'tetradic';

export function generateRandomPalette(): ThemeConfig['colors'] {
  const harmony: HarmonyType = (['complementary', 'analogous', 'triadic', 'split-complementary', 'tetradic'] as const)[
    Math.floor(Math.random() * 5)
  ];

  const baseHue = Math.floor(Math.random() * 360);
  const baseSat = 60 + Math.floor(Math.random() * 30); // 60-90
  const baseLit = 45 + Math.floor(Math.random() * 15); // 45-60

  let hues: number[];
  switch (harmony) {
    case 'complementary':
      hues = [baseHue, (baseHue + 180) % 360];
      break;
    case 'analogous':
      hues = [baseHue, (baseHue + 30) % 360, (baseHue + 330) % 360];
      break;
    case 'triadic':
      hues = [baseHue, (baseHue + 120) % 360, (baseHue + 240) % 360];
      break;
    case 'split-complementary':
      hues = [baseHue, (baseHue + 150) % 360, (baseHue + 210) % 360];
      break;
    case 'tetradic':
      hues = [baseHue, (baseHue + 90) % 360, (baseHue + 180) % 360, (baseHue + 270) % 360];
      break;
  }

  const isDark = Math.random() > 0.6;

  const primary = hslToHex(hues[0], baseSat, baseLit);
  const accent = hslToHex(hues[1], baseSat - 5, baseLit + 5);
  const secondary = isDark
    ? hslToHex(hues[0], 15, 20)
    : hslToHex(hues[0], 15, 95);

  // Ensure foreground contrast
  const [,, primaryL] = hexToHsl(primary);
  const primaryFg = primaryL > 55 ? '#0f172a' : '#ffffff';

  const [,, accentL] = hexToHsl(accent);
  const accentFg = accentL > 55 ? '#0f172a' : '#ffffff';

  return {
    primary,
    primaryForeground: primaryFg,
    secondary,
    secondaryForeground: isDark ? '#e2e8f0' : '#1e293b',
    accent,
    accentForeground: accentFg,
    background: isDark ? '#0a0a0f' : '#ffffff',
    foreground: isDark ? '#e2e8f0' : '#0f172a',
    muted: isDark ? hslToHex(hues[0], 10, 12) : hslToHex(hues[0], 20, 97),
    mutedForeground: isDark ? '#94a3b8' : '#64748b',
    card: isDark ? hslToHex(hues[0], 10, 8) : '#ffffff',
    cardForeground: isDark ? '#e2e8f0' : '#0f172a',
    border: isDark ? hslToHex(hues[0], 10, 20) : hslToHex(hues[0], 15, 90),
    destructive: '#ef4444',
    success: '#22c55e',
  };
}

export function themeToCSS(theme: ThemeConfig): string {
  const shadowMap = {
    none: 'none',
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
    lg: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
    xl: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
  };

  const spacingMap = {
    compact: '0.75rem',
    comfortable: '1rem',
    spacious: '1.5rem',
  };

  const alpha = theme.opacity / 100;
  const cardAlpha = hexToRgba(theme.colors.card, alpha);
  const mutedAlpha = hexToRgba(theme.colors.muted, alpha);
  const blur = alpha < 1 ? `blur(${Math.round((1 - alpha) * 20)}px)` : 'none';

  return `
    --t-primary: ${theme.colors.primary};
    --t-primary-fg: ${theme.colors.primaryForeground};
    --t-secondary: ${theme.colors.secondary};
    --t-secondary-fg: ${theme.colors.secondaryForeground};
    --t-accent: ${theme.colors.accent};
    --t-accent-fg: ${theme.colors.accentForeground};
    --t-bg: ${theme.colors.background};
    --t-fg: ${theme.colors.foreground};
    --t-muted: ${theme.colors.muted};
    --t-muted-fg: ${theme.colors.mutedForeground};
    --t-card: ${theme.colors.card};
    --t-card-fg: ${theme.colors.cardForeground};
    --t-border: ${theme.colors.border};
    --t-destructive: ${theme.colors.destructive};
    --t-success: ${theme.colors.success};
    --t-font-heading: '${theme.fonts.heading}', sans-serif;
    --t-font-body: '${theme.fonts.body}', sans-serif;
    --t-radius: ${theme.borderRadius}px;
    --t-shadow: ${shadowMap[theme.shadow]};
    --t-border-width: ${theme.borderWidth}px;
    --t-opacity: ${alpha};
    --t-card-alpha: ${cardAlpha};
    --t-muted-alpha: ${mutedAlpha};
    --t-backdrop: ${blur};
    --t-spacing: ${spacingMap[theme.spacing]};
  `;
}

export function themeToPrompt(theme: ThemeConfig, format: 'markdown' | 'json'): string {
  if (format === 'json') {
    return JSON.stringify({
      designSystem: {
        name: theme.name,
        style: theme.style,
        colors: {
          primary: { value: theme.colors.primary, foreground: theme.colors.primaryForeground },
          secondary: { value: theme.colors.secondary, foreground: theme.colors.secondaryForeground },
          accent: { value: theme.colors.accent, foreground: theme.colors.accentForeground },
          background: theme.colors.background,
          foreground: theme.colors.foreground,
          muted: { value: theme.colors.muted, foreground: theme.colors.mutedForeground },
          card: { value: theme.colors.card, foreground: theme.colors.cardForeground },
          border: theme.colors.border,
          destructive: theme.colors.destructive,
          success: theme.colors.success,
        },
        typography: {
          headingFont: theme.fonts.heading,
          bodyFont: theme.fonts.body,
          source: 'Google Fonts',
        },
        shape: {
          borderRadius: `${theme.borderRadius}px`,
          shadow: theme.shadow,
          borderWidth: `${theme.borderWidth}px`,
          opacity: `${theme.opacity}%`,
        },
        spacing: theme.spacing,
      },
      prompt: generatePromptText(theme),
    }, null, 2);
  }

  return generatePromptMarkdown(theme);
}

function generatePromptText(theme: ThemeConfig): string {
  return `Apply the following design system: Use a ${theme.style} visual style. Primary color ${theme.colors.primary} with ${theme.colors.primaryForeground} text on it. Secondary color ${theme.colors.secondary}. Accent color ${theme.colors.accent}. Background ${theme.colors.background}, text ${theme.colors.foreground}. Cards use ${theme.colors.card} background with ${theme.colors.border} borders. Headings use "${theme.fonts.heading}" font, body text uses "${theme.fonts.body}" (both from Google Fonts). Border radius ${theme.borderRadius}px. Shadow intensity: ${theme.shadow}. Border width: ${theme.borderWidth}px. Element opacity: ${theme.opacity}%. Spacing: ${theme.spacing}.`;
}

function generatePromptMarkdown(theme: ThemeConfig): string {
  return `# Design System: ${theme.name}

## Visual Style
${theme.style} design language with ${theme.spacing} spacing.

## Color Palette
| Role | Value | Text Color |
|------|-------|-----------|
| Primary | \`${theme.colors.primary}\` | \`${theme.colors.primaryForeground}\` |
| Secondary | \`${theme.colors.secondary}\` | \`${theme.colors.secondaryForeground}\` |
| Accent | \`${theme.colors.accent}\` | \`${theme.colors.accentForeground}\` |
| Background | \`${theme.colors.background}\` | \`${theme.colors.foreground}\` |
| Muted | \`${theme.colors.muted}\` | \`${theme.colors.mutedForeground}\` |
| Card | \`${theme.colors.card}\` | \`${theme.colors.cardForeground}\` |
| Border | \`${theme.colors.border}\` | — |
| Destructive | \`${theme.colors.destructive}\` | — |
| Success | \`${theme.colors.success}\` | — |

## Typography (Google Fonts)
- **Headings:** ${theme.fonts.heading}
- **Body:** ${theme.fonts.body}

## Shape & Effects
- **Border Radius:** ${theme.borderRadius}px
- **Shadow:** ${theme.shadow}
- **Border Width:** ${theme.borderWidth}px
- **Opacity:** ${theme.opacity}%
- **Spacing:** ${theme.spacing}

## AI Prompt
> ${generatePromptText(theme)}
`;
}
