import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "nabila-theme";

function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialTheme() {
  if (typeof window === "undefined") return "system";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
  } catch (e) {
    // localStorage unavailable
  }
  return "system";
}

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === "light" || theme === "dark") {
    root.setAttribute("data-theme", theme);
  } else {
    // "system" — remove explicit override so CSS @media takes over
    root.removeAttribute("data-theme");
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState(getInitialTheme);
  const [resolvedTheme, setResolvedTheme] = useState(() => {
    if (theme === "light" || theme === "dark") return theme;
    return getSystemTheme();
  });

  // Apply theme + listen to system changes when in "system" mode
  useEffect(() => {
    applyTheme(theme);

    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const updateResolved = () => {
        const next = mq.matches ? "dark" : "light";
        setResolvedTheme(next);
      };
      updateResolved();
      // Modern browsers
      if (mq.addEventListener) {
        mq.addEventListener("change", updateResolved);
        return () => mq.removeEventListener("change", updateResolved);
      }
      // Safari < 14 fallback
      mq.addListener(updateResolved);
      return () => mq.removeListener(updateResolved);
    } else {
      setResolvedTheme(theme);
    }
  }, [theme]);

  const setTheme = useCallback((newTheme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch (e) {
      // localStorage unavailable — preference will not persist
    }
  }, []);

  const cycleTheme = useCallback(() => {
    setThemeState((current) => {
      const next = current === "light" ? "dark" : current === "dark" ? "system" : "light";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        // ignore
      }
      return next;
    });
  }, []);

  return { theme, setTheme, resolvedTheme, cycleTheme };
}
