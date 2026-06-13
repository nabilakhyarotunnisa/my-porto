import React from "react";
import { Sun, Moon, Monitor, Check, ChevronDown } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const OPTIONS = [
  { value: "light", label: "Light", Icon: Sun, description: "Always light" },
  { value: "dark", label: "Dark", Icon: Moon, description: "Always dark" },
  { value: "system", label: "System", Icon: Monitor, description: "Match device" },
];

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef(null);
  const triggerRef = React.useRef(null);

  // Close on outside click
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  // Close on Escape
  React.useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        if (triggerRef.current) triggerRef.current.focus();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  const handleSelect = (value) => {
    setTheme(value);
    setIsOpen(false);
    // Return focus to trigger for keyboard users
    if (triggerRef.current) triggerRef.current.focus();
  };

  const handleTriggerKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      setIsOpen(true);
      setTimeout(() => {
        const firstItem = containerRef.current?.querySelector(".theme-option");
        if (firstItem) firstItem.focus();
      }, 0);
    }
  };

  // Determine the current icon to show on the trigger
  const CurrentIcon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;
  const currentLabel = theme === "light" ? "Light theme" : theme === "dark" ? "Dark theme" : "System theme";

  return (
    <div
      className={`theme-toggle ${isOpen ? "is-open" : ""}`}
      ref={containerRef}
    >
      <button
        ref={triggerRef}
        type="button"
        className="theme-trigger"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleTriggerKeyDown}
        aria-label={`Theme: ${currentLabel}. Click to change.`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls="theme-menu"
        title={`Theme: ${currentLabel}`}
      >
        <CurrentIcon size={18} aria-hidden="true" />
        <ChevronDown
          size={12}
          aria-hidden="true"
          className="theme-chevron"
        />
      </button>

      {isOpen && (
        <div
          className="theme-menu"
          role="menu"
          id="theme-menu"
          aria-label="Theme selection"
        >
          <div className="theme-menu-header" aria-hidden="true">
            <span>Theme</span>
            {theme === "system" && (
              <span className="theme-menu-hint">
                ({resolvedTheme})
              </span>
            )}
          </div>
          {OPTIONS.map((opt) => {
            const { Icon } = opt;
            const isActive = theme === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                className={`theme-option ${isActive ? "is-active" : ""}`}
                role="menuitemradio"
                aria-checked={isActive}
                onClick={() => handleSelect(opt.value)}
              >
                <span className="theme-option-icon">
                  <Icon size={16} aria-hidden="true" />
                </span>
                <span className="theme-option-text">
                  <span className="theme-option-label">{opt.label}</span>
                  <span className="theme-option-desc">{opt.description}</span>
                </span>
                {isActive && (
                  <span className="theme-option-check" aria-hidden="true">
                    <Check size={14} />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
