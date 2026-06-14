import { useState, useRef, useEffect, useCallback } from "react";

/**
 * Reusable hook for dropdown / popover open-close state.
 *
 * Handles the three behaviors every dropdown needs:
 *  - Toggle / open / close helpers
 *  - Click-outside-to-close (with a ref to the container element)
 *  - Escape-key-to-close
 *
 * @param {Object} options
 * @param {boolean} [options.closeOnEscape=true]  Close on Escape key.
 * @param {boolean} [options.closeOnOutsideClick=true]  Close on outside click.
 * @returns {{
 *   isOpen: boolean,
 *   setIsOpen: Function,
 *   toggle: Function,
 *   open: Function,
 *   close: Function,
 *   ref: React.RefObject
 * }}
 */
export function useDropdown({
  closeOnEscape = true,
  closeOnOutsideClick = true,
} = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Close on outside click
  useEffect(() => {
    if (!isOpen || !closeOnOutsideClick) return;
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, closeOnOutsideClick]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;
    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeOnEscape]);

  return { isOpen, setIsOpen, toggle, open, close, ref };
}
