import { BriefcaseBusiness } from "lucide-react";
import { experiences } from "../../data";
import SectionHeader from "../SectionHeader";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section soft-section"
      aria-labelledby="experience-heading"
    >
      <SectionHeader
        id="experience-heading"
        eyebrow="Experience"
        title="Organizational Experience"
        description="Leadership, creative, event, marketing, and community experience."
      />

      <div className="timeline">
        {experiences.map((experience) => (
          <article
            className="timeline-item"
            key={`${experience.role}-${experience.organization}`}
          >
            <div className="timeline-dot" aria-hidden="true">
              <BriefcaseBusiness size={20} aria-hidden="true" />
            </div>

            <div className="timeline-card">
              <h3>{experience.role}</h3>

              <p className="timeline-org">{experience.organization}</p>
              <span>{experience.period}</span>

              <ul>
                {experience.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
