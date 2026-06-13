import React from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { navItems } from "../data";
import ThemeToggle from "./ThemeToggle";

function NavDropdown({ item, isMobile = false, closeMobileMenu }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);
  const triggerRef = React.useRef(null);

  // Close on outside click (desktop only)
  React.useEffect(() => {
    if (isMobile) return;
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  // Close on Escape
  React.useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
        if (triggerRef.current) triggerRef.current.focus();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  const handleTriggerClick = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const handleSubItemClick = () => {
    setIsOpen(false);
    if (isMobile && closeMobileMenu) closeMobileMenu();
  };

  const handleTriggerKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
      e.preventDefault();
      setIsOpen(true);
      // Focus first item
      setTimeout(() => {
        const firstItem = dropdownRef.current?.querySelector(".nav-dropdown-item");
        if (firstItem) firstItem.focus();
      }, 0);
    }
  };

  const dropdownId = `dropdown-${item.label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div
      className={`nav-dropdown ${isOpen ? "is-open" : ""}`}
      ref={dropdownRef}
      onMouseEnter={isMobile ? undefined : () => setIsOpen(true)}
      onMouseLeave={isMobile ? undefined : () => setIsOpen(false)}
    >
      <a
        ref={triggerRef}
        href={item.href}
        className="nav-dropdown-trigger"
        onClick={handleTriggerClick}
        onKeyDown={handleTriggerKeyDown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={dropdownId}
      >
        {item.label}
        <ChevronDown
          size={14}
          aria-hidden="true"
          className="nav-dropdown-chevron"
        />
      </a>

      {isOpen && (
        <div
          className="nav-dropdown-menu"
          role="menu"
          id={dropdownId}
        >
          {item.subItems.map((subItem) => (
            <a
              key={subItem.label}
              href={subItem.href}
              className="nav-dropdown-item"
              role="menuitem"
              tabIndex={0}
              onClick={handleSubItemClick}
            >
              {subItem.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [isMobileMenuOpen]);

  // Close on Escape
  React.useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  // Close mobile menu when resizing to desktop
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className="navbar"
        role="navigation"
        aria-label="Main navigation"
      >
        <a href="#home" className="logo" aria-label="Nabila - Home">
          Nabila<span>.</span>
        </a>

        <div
          className={`nav-links ${isMobileMenuOpen ? "is-open" : ""}`}
          id="primary-navigation"
        >
          {navItems.map((item) =>
            item.subItems ? (
              <NavDropdown
                key={item.label}
                item={item}
                isMobile={isMobileMenuOpen}
                closeMobileMenu={closeMobileMenu}
              />
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={handleMobileLinkClick}
              >
                {item.label}
              </a>
            )
          )}
        </div>

        <ThemeToggle />

        <button
          type="button"
          className={`nav-toggle ${isMobileMenuOpen ? "is-open" : ""}`}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="nav-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
