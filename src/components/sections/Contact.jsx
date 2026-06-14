import { Mail, ExternalLink } from "lucide-react";
import SectionHeader from "../SectionHeader";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24"
      style={{ scrollMarginTop: "120px" }}
    >
      <SectionHeader
        id="contact-heading"
        eyebrow="Contact"
        title="Let's Connect"
        description="Open for internship opportunities, data-related projects, web development collaboration, professional networking, and technology communities."
      />

      <div
        className="relative max-w-[800px] mx-auto rounded-card-lg p-8 md:p-12
                   bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(255,245,230,0.88)_100%)]
                   dark:bg-[linear-gradient(135deg,rgba(45,45,50,0.95)_0%,rgba(36,36,41,0.92)_100%)]
                   backdrop-blur-2xl shadow-card
                   border border-[rgba(255,120,159,0.22)]
                   dark:border-[rgba(255,120,159,0.3)]
                   text-center flex flex-col items-center gap-5"
      >
        <h3 className="text-2xl md:text-3xl font-extrabold text-navy">
          Interested in working together?
        </h3>
        <p className="text-slate text-base md:text-lg max-w-xl leading-relaxed">
          Feel free to reach me through email, LinkedIn, GitHub, or Instagram.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-2">
          <a
            href="mailto:nabila.khy@gmail.com"
            aria-label="Send email to nabila.khy@gmail.com"
            className="flex items-center gap-3 px-5 py-3 rounded-full
                       bg-card-soft border border-[rgba(255,120,159,0.18)]
                       dark:border-[rgba(255,120,159,0.25)]
                       text-navy text-sm font-semibold
                       transition-all duration-200
                       hover:-translate-y-0.5 hover:bg-card-strong
                       hover:shadow-[0_10px_24px_rgba(15,23,42,0.08)]
                       focus-visible:outline-2 focus-visible:outline-accent
                       focus-visible:outline-offset-2"
          >
            <Mail size={18} aria-hidden="true" className="text-accent" />
            <span className="truncate">nabila.khy@gmail.com</span>
          </a>

          <a
            href="https://linkedin.com/in/nabila-khyarotunnisa"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in new tab)"
            className="flex items-center gap-3 px-5 py-3 rounded-full
                       bg-card-soft border border-[rgba(255,120,159,0.18)]
                       dark:border-[rgba(255,120,159,0.25)]
                       text-navy text-sm font-semibold
                       transition-all duration-200
                       hover:-translate-y-0.5 hover:bg-card-strong
                       hover:shadow-[0_10px_24px_rgba(15,23,42,0.08)]
                       focus-visible:outline-2 focus-visible:outline-accent
                       focus-visible:outline-offset-2"
          >
            <ExternalLink size={18} aria-hidden="true" className="text-accent" />
            LinkedIn
          </a>

          <a
            href="https://github.com/nabilakhyarotunnisa"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in new tab)"
            className="flex items-center gap-3 px-5 py-3 rounded-full
                       bg-card-soft border border-[rgba(255,120,159,0.18)]
                       dark:border-[rgba(255,120,159,0.25)]
                       text-navy text-sm font-semibold
                       transition-all duration-200
                       hover:-translate-y-0.5 hover:bg-card-strong
                       hover:shadow-[0_10px_24px_rgba(15,23,42,0.08)]
                       focus-visible:outline-2 focus-visible:outline-accent
                       focus-visible:outline-offset-2"
          >
            <ExternalLink size={18} aria-hidden="true" className="text-accent" />
            GitHub
          </a>

          <a
            href="https://instagram.com/nabilakhy._"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram (opens in new tab)"
            className="flex items-center gap-3 px-5 py-3 rounded-full
                       bg-card-soft border border-[rgba(255,120,159,0.18)]
                       dark:border-[rgba(255,120,159,0.25)]
                       text-navy text-sm font-semibold
                       transition-all duration-200
                       hover:-translate-y-0.5 hover:bg-card-strong
                       hover:shadow-[0_10px_24px_rgba(15,23,42,0.08)]
                       focus-visible:outline-2 focus-visible:outline-accent
                       focus-visible:outline-offset-2"
          >
            <ExternalLink size={18} aria-hidden="true" className="text-accent" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
