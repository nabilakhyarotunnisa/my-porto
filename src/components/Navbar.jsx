import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../data";
import NavDropdown from "./NavDropdown";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    function handle(e) {
      if (e.matches) setIsMobileOpen(false);
    }
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          const target = document.getElementById("main-content");
          if (target) target.focus();
        }}
      >
        Skip to content
      </a>

      <header
        className="fixed top-safe-top left-1/2 -translate-x-1/2 z-40
                   w-[min(100%-24px,1180px)]
                   rounded-full
                   bg-card-strong backdrop-blur-2xl
                   border border-[rgba(255,120,159,0.18)]
                   dark:border-[rgba(255,120,159,0.25)]
                   shadow-navbar"
      >
        <nav
          aria-label="Main"
          className="flex items-center justify-between gap-3 px-4 md:px-6 py-2.5 md:py-3"
        >
          <a
            href="#home"
            className="flex items-center gap-2 shrink-0
                       text-base md:text-lg font-extrabold text-navy
                       px-2 md:px-3 py-1 rounded-full
                       hover:bg-soft-soft dark:hover:bg-soft
                       transition-colors duration-200
                       focus-visible:outline-2 focus-visible:outline-accent
                       focus-visible:outline-offset-2"
          >
            <span
              className="inline-flex items-center justify-center w-8 h-8 md:w-9 md:h-9
                         rounded-full text-white text-sm font-extrabold
                         bg-gradient-to-br from-accent to-accent-soft
                         shadow-[0_6px_18px_rgba(255,120,159,0.32)]"
            >
              N
            </span>
            <span className="hidden sm:inline">Nabila</span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.subItems ? (
                  <NavDropdown item={item} />
                ) : (
                  <a
                    href={item.href}
                    className="block px-3 md:px-4 py-2 rounded-full
                               text-sm font-semibold text-navy
                               hover:bg-soft-soft dark:hover:bg-soft
                               transition-colors duration-200
                               focus-visible:outline-2 focus-visible:outline-accent
                               focus-visible:outline-offset-2"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMobileOpen((p) => !p)}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-nav"
              className="lg:hidden w-10 h-10 md:w-11 md:h-11 rounded-full
                         grid place-items-center
                         bg-card-soft border border-[rgba(255,120,159,0.18)]
                         dark:border-[rgba(255,120,159,0.25)] text-navy
                         hover:bg-card-strong hover:scale-105 active:scale-95
                         transition-all duration-200
                         focus-visible:outline-2 focus-visible:outline-accent
                         focus-visible:outline-offset-2"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {isMobileOpen && (
        <div
          className="fixed inset-0 z-30 lg:hidden
                     bg-[rgba(45,27,46,0.45)] backdrop-blur-sm
                     animate-fade-in"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        id="mobile-nav"
        className={`fixed top-[110px] left-1/2 -translate-x-1/2 z-40 lg:hidden
                    w-[min(100%-24px,420px)]
                    rounded-card-lg p-4
                    bg-card-strong backdrop-blur-2xl
                    border border-[rgba(255,120,159,0.2)]
                    dark:border-[rgba(255,120,159,0.25)]
                    shadow-nav-mobile
                    origin-top transition-all duration-200
                    ${
                      isMobileOpen
                        ? "scale-100 opacity-100 pointer-events-auto"
                        : "scale-95 opacity-0 pointer-events-none"
                    }`}
      >
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.subItems ? (
                <div className="flex flex-col">
                  <span className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-accent">
                    {item.label}
                  </span>
                  {item.subItems.map((sub) => (
                    <a
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="block px-4 py-2 ml-3 rounded-xl
                                 text-sm font-semibold text-navy
                                 hover:bg-soft-soft dark:hover:bg-soft
                                 transition-colors duration-200"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl
                             text-sm font-semibold text-navy
                             hover:bg-soft-soft dark:hover:bg-soft
                             transition-colors duration-200"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
