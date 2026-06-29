// src/hooks/useTheme.js
// Dark / Light mode toggle — persists in localStorage
// Applies data-theme="dark" to <html> element

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'dulygo-theme';
const DARK = 'dark';
const LIGHT = 'light';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || LIGHT;
  });

  // Apply to <html> whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggle = () => setTheme(t => t === DARK ? LIGHT : DARK);
  const isDark  = theme === DARK;

  return { theme, isDark, toggle };
}
