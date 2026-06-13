import { BriefcaseBusiness } from "lucide-react";
import { workExperiences } from "../../data";
import SectionHeader from "../SectionHeader";

export default function WorkExperience() {
  return (
    <section
      id="work-experience"
      className="section"
      aria-labelledby="work-experience-heading"
    >
      <SectionHeader
        id="work-experience-heading"
        eyebrow="Professional"
        title="Work Experience"
        description="Professional experience in administration, data management, and digital marketing."
      />

      <div className="timeline">
        {workExperiences.map((experience) => (
          <article
            className="timeline-item"
            key={`${experience.role}-${experience.company}`}
          >
            <div className="timeline-dot" aria-hidden="true">
              <BriefcaseBusiness size={20} aria-hidden="true" />
            </div>

            <div className="timeline-card">
              <h3>{experience.role}</h3>

              <p className="timeline-org">{experience.company}</p>

              <span>{experience.period}</span>

              <p
                style={{
                  marginTop: "8px",
                  color: "var(--slate)",
                }}
              >
                {experience.location}
              </p>

              <div
                className="badge-list"
                style={{ marginTop: "14px" }}
              >
                {experience.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

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
