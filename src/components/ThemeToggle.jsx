import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

/**
 * Single-button light / dark toggle.
 * - Shows the icon of the *current* theme (sun = light, moon = dark)
 * - Click to switch; theme persists in localStorage
 * - No "system" option — explicit user choice only
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const Icon = isDark ? Moon : Sun;
  const label = isDark
    ? "Switch to light theme"
    : "Switch to dark theme";

  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={label}
        title={label}
        className="relative w-10 h-10 md:w-11 md:h-11 rounded-full grid place-items-center
                   bg-card-soft backdrop-blur-xl border border-[rgba(255,120,159,0.18)]
                   dark:border-[rgba(255,120,159,0.25)] text-navy
                   shadow-[0_6px_18px_rgba(15,23,42,0.08)]
                   hover:bg-card-strong hover:scale-105 active:scale-95
                   transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]
                   focus-visible:outline-2 focus-visible:outline-accent
                   focus-visible:outline-offset-2"
      >
        <Icon size={18} aria-hidden="true" />
      </button>
    </div>
  );
}
