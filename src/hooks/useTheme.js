import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "nabila-theme";
const VALID_THEMES = ["light", "dark"];

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (VALID_THEMES.includes(stored)) return stored;
  } catch {
    // localStorage unavailable — fall through to default
  }
  return "light";
}

function applyTheme(theme) {
  const root = document.documentElement;
  // Always set data-theme explicitly so CSS [data-theme="..."] rules win
  // over any system @media (prefers-color-scheme: dark) block.
  root.setAttribute("data-theme", theme);
}

/**
 * Light / dark theme toggle.
 * - Persists to localStorage
 * - Applies via data-theme on <html>
 * - No "system" mode: explicit user choice only (more predictable, no FOUC)
 */
export function useTheme() {
  const [theme, setThemeState] = useState(getInitialTheme);

  // Apply theme whenever it changes
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = useCallback((newTheme) => {
    if (!VALID_THEMES.includes(newTheme)) return;
    setThemeState(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch {
      // localStorage unavailable — preference will not persist
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => {
      const next = current === "light" ? "dark" : "light";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  return { theme, setTheme, toggleTheme };
}
