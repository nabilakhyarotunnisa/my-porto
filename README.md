# Nabila Khyarotunnisa Personal Portfolio Website

MVP single-page portfolio website based on the Product Requirements Document.

## Tech Stack
- React.js
- Vite
- Tailwind CSS via `@tailwindcss/vite`
- Framer Motion
- Lucide React Icons

## Browser Compatibility

This portfolio is optimized for all modern browsers and devices:

### Desktop Browsers
- Chrome/Chromium (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

### Mobile & Tablets
- iOS Safari 12+
- Chrome Android (latest)
- Samsung Internet
- Firefox Android (latest)

### Accessibility Features
- WCAG 2.1 Level AA compliant
- Keyboard navigation support
- Screen reader friendly with proper ARIA labels
- High contrast mode support
- Reduced motion preference support
- Dark mode support

### Progressive Enhancements
- Graceful degradation for older browsers
- Vendor prefixes for CSS3 features
- Fallback fonts for cross-platform rendering
- Print-friendly stylesheet included

## Sections
- Home / Hero
- About Me
- Skills & Tools
- Featured Projects
- Achievements
- Training & Certifications
- Organisational Experience
- Contact

## Run Locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to Vercel
1. Push this folder to GitHub.
2. Open Vercel and import the repository.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.

## Performance Optimizations
- CSS with vendor prefixes for maximum compatibility
- Optimized image loading
- Fixed background for better performance on lower-end devices
- CSS containment for better rendering performance
- Hardware acceleration hints (will-change properties)

## Notes
- Replace `/public/Nabila-Khyarotunnisa-CV.pdf` with the real CV file so the Download CV button works.
- Update project repository/demo links in `src/main.jsx` when GitHub repositories are ready.
- Optional next improvements: case study pages, dark mode implementation, EmailJS contact form, Google Analytics, and cloud architecture section.
