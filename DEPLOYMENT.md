# Deployment Checklist

## Before Deploy
- Replace placeholder CV in `public/Nabila-Khyarotunnisa-CV.pdf`.
- Replace project CTA links with real GitHub, demo, or case study URLs.
- Check LinkedIn, GitHub, Instagram, and email links.
- Run `npm run build` to verify there are no errors.

## Vercel Deployment
- Login to Vercel.
- Import GitHub repository.
- Select Vite as framework.
- Use default settings:
  - Install command: `npm install`
  - Build command: `npm run build`
  - Output directory: `dist`
- Click Deploy.

## Acceptance Criteria
- All main sections are visible.
- Website is responsive on mobile and desktop.
- Download CV button works after replacing placeholder CV.
- Contact links work.
- Minimum 3 projects, 3 achievements, and 2 certifications are displayed.
