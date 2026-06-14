import { ChevronDown } from "lucide-react";
import { useDropdown } from "../hooks/useDropdown";

/**
 * Desktop dropdown for a nav item that has sub-items.
 * - Click the trigger to toggle
 * - Click outside or press Escape to close
 * - Anchor scrolls smoothly to the target section and closes
 */
export default function NavDropdown({ item }) {
  const { isOpen, toggle, close, ref } = useDropdown();
  const hasSubs = Array.isArray(item.subItems) && item.subItems.length > 0;
  const triggerId = `nav-trigger-${item.label.replace(/\s+/g, "-").toLowerCase()}`;
  const menuId = `nav-menu-${item.label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div ref={ref} className="relative">
      <button
        id={triggerId}
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={hasSubs ? toggle : undefined}
        className="flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-full
                   text-sm font-semibold text-navy
                   hover:bg-soft-soft dark:hover:bg-soft
                   transition-colors duration-200
                   focus-visible:outline-2 focus-visible:outline-accent
                   focus-visible:outline-offset-2"
      >
        {item.label}
        {hasSubs && (
          <ChevronDown
            size={14}
            aria-hidden="true"
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

      {hasSubs && isOpen && (
        <div
          id={menuId}
          role="menu"
          aria-labelledby={triggerId}
          className="absolute top-full right-0 mt-2 min-w-[220px] py-2 z-50
                     rounded-card border border-[rgba(255,120,159,0.18)]
                     dark:border-[rgba(255,120,159,0.25)]
                     bg-card-strong backdrop-blur-2xl
                     shadow-nav-dropdown animate-dropdown-fade"
        >
          {item.subItems.map((sub) => (
            <a
              key={sub.href}
              href={sub.href}
              role="menuitem"
              onClick={close}
              className="block px-4 py-2.5 text-sm font-semibold text-navy
                         hover:bg-soft-soft dark:hover:bg-soft
                         transition-colors duration-200"
            >
              {sub.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
