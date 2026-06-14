import { ExternalLink } from "lucide-react";
import { certifications } from "../../data";
import SectionHeader from "../SectionHeader";

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24"
      style={{ scrollMarginTop: "120px" }}
    >
      <SectionHeader
        id="certifications-heading"
        eyebrow="Learning"
        title="Training & Certifications"
        description="Relevant certifications and learning roadmap in data science, machine learning, and web development."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {certifications.map((cert) => (
          <article
            key={cert.title}
            className="rounded-card p-5 md:p-7 border border-[rgba(255,120,159,0.18)]
                       dark:border-[rgba(255,120,159,0.25)]
                       bg-card-soft backdrop-blur-2xl shadow-card-light
                       flex flex-col gap-4 transition-all duration-200
                       hover:-translate-y-1 hover:shadow-card"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-base md:text-lg font-extrabold text-navy leading-snug">
                {cert.title}
              </h3>
              <p className="text-sm text-slate font-semibold">{cert.issuer}</p>
              <span className="text-xs text-accent font-semibold">{cert.date}</span>
            </div>

            <ul className="flex flex-col gap-2 pl-4 relative">
              {cert.scope.map((item) => (
                <li
                  key={item}
                  className="relative text-sm text-slate leading-relaxed pl-3
                             before:content-[''] before:absolute before:left-0 before:top-[0.6em]
                             before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent"
                >
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="self-start mt-1 inline-flex items-center gap-2 px-5 py-2.5
                         text-sm font-bold text-white rounded-full
                         bg-gradient-to-br from-accent to-accent-soft
                         shadow-cert-button transition-all duration-200
                         hover:-translate-y-0.5 hover:shadow-cert-button-hover
                         active:translate-y-0
                         focus-visible:outline-2 focus-visible:outline-accent
                         focus-visible:outline-offset-2"
            >
              View Certificate <ExternalLink size={16} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
