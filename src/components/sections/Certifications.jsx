import { ExternalLink } from "lucide-react";
import { certifications } from "../../data";
import SectionHeader from "../SectionHeader";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section"
      aria-labelledby="certifications-heading"
    >
      <SectionHeader
        eyebrow="Learning"
        title="Training & Certifications"
        description="Relevant certifications and learning roadmap in data science, machine learning, and web development."
      />

      <div className="cert-grid">
        {certifications.map((cert) => (
          <article className="cert-card" key={cert.title}>
            <div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <span>{cert.date}</span>

              <ul>
                {cert.scope.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="cert-button"
            >
              View Certificate <ExternalLink size={16} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
