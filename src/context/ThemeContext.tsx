'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { ThemeConfig, defaultTheme, themeToCSS } from '@/lib/theme';

interface ThemeContextType {
  theme: ThemeConfig;
  setTheme: (theme: ThemeConfig) => void;
  updateTheme: (partial: Partial<ThemeConfig>) => void;
  updateColors: (colors: Partial<ThemeConfig['colors']>) => void;
  updateFonts: (fonts: Partial<ThemeConfig['fonts']>) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeConfig>(defaultTheme);

  const setTheme = useCallback((t: ThemeConfig) => {
    setThemeState(t);
  }, []);

  const updateTheme = useCallback((partial: Partial<ThemeConfig>) => {
    setThemeState(prev => ({ ...prev, ...partial }));
  }, []);

  const updateColors = useCallback((colors: Partial<ThemeConfig['colors']>) => {
    setThemeState(prev => ({ ...prev, colors: { ...prev.colors, ...colors } }));
  }, []);

  const updateFonts = useCallback((fonts: Partial<ThemeConfig['fonts']>) => {
    setThemeState(prev => ({ ...prev, fonts: { ...prev.fonts, ...fonts } }));
  }, []);

  // Apply CSS variables
  useEffect(() => {
    document.documentElement.style.cssText = themeToCSS(theme);
  }, [theme]);

  // Load Google Fonts dynamically
  useEffect(() => {
    const fonts = [...new Set([theme.fonts.heading, theme.fonts.body])];
    const link = document.getElementById('google-fonts-link') as HTMLLinkElement;
    const families = fonts.map(f => f.replace(/ /g, '+')).join('&family=');
    const href = `https://fonts.googleapis.com/css2?family=${families}:wght@300;400;500;600;700;800&display=swap`;

    if (link) {
      link.href = href;
    } else {
      const el = document.createElement('link');
      el.id = 'google-fonts-link';
      el.rel = 'stylesheet';
      el.href = href;
      document.head.appendChild(el);
    }
  }, [theme.fonts]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, updateTheme, updateColors, updateFonts }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
