import { Mail, ExternalLink } from "lucide-react";
import SectionHeader from "../SectionHeader";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-heading"
    >
      <SectionHeader
        id="contact-heading"
        eyebrow="Contact"
        title="Let's Connect"
        description="Open for internship opportunities, data-related projects, web development collaboration, professional networking, and technology communities."
      />

      <div className="contact-card">
        <h3>Interested in working together?</h3>
        <p>
          Feel free to reach me through email, LinkedIn, GitHub, or Instagram.
        </p>

        <div className="contact-links">
          <a
            href="mailto:nabila.khy@gmail.com"
            aria-label="Send email to nabila.khy@gmail.com"
          >
            <Mail size={18} aria-hidden="true" /> nabila.khy@gmail.com
          </a>

          <a
            href="https://linkedin.com/in/nabila-khyarotunnisa"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in new tab)"
          >
            <ExternalLink size={18} aria-hidden="true" /> LinkedIn
          </a>

          <a
            href="https://github.com/nabilakhyarotunnisa"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in new tab)"
          >
            <ExternalLink size={18} aria-hidden="true" /> GitHub
          </a>

          <a
            href="https://instagram.com/nabilakhy._"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram (opens in new tab)"
          >
            <ExternalLink size={18} aria-hidden="true" /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
