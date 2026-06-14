/**
 * Inline-SVG brand icons (GitHub, LinkedIn, Instagram).
 * lucide-react dropped official brand icons, so we ship our own
 * minimal SVGs that respect `currentColor` to fit the design system.
 *
 * Usage:
 *   <BrandIcon name="github" size={18} aria-hidden="true" />
 */
export default function BrandIcon({ name, size = 18, ...rest }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    ...rest,
  };

  switch (name) {
    case "github":
      return (
        <svg {...common}>
          <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5a3 3 0 0 0-.9-2.2c3-.3 6.2-1.5 6.2-7A5.4 5.4 0 0 0 18.5 4.7 5 5 0 0 0 18.4 1S17 0.6 15 2.2a13 13 0 0 0-7 0C6 0.6 4.5 1 4.5 1A5 5 0 0 0 4.4 4.7a5.4 5.4 0 0 0-1.8 3.6c0 5.4 3.2 6.7 6.2 7a3 3 0 0 0-.9 2.2V21" />
        </svg>
      );

    case "linkedin":
      return (
        <svg {...common}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );

    case "instagram":
      return (
        <svg {...common}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
          <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
        </svg>
      );

    default:
      return null;
  }
}
