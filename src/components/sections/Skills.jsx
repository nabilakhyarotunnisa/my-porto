import { skills } from "../../data";
import SectionHeader from "../SectionHeader";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section soft-section"
      aria-labelledby="skills-heading"
    >
      <SectionHeader
        id="skills-heading"
        eyebrow="Skills"
        title="Skills & Tools"
        description="Technical skills grouped around data science, machine learning, software engineering, and web development."
      />

      <div className="skills-grid">
        {skills.map((skill) => {
          const Icon = skill.Icon;
          return (
            <div className="skill-card" key={skill.title}>
              <div className="card-title">
                {Icon && <Icon size={22} aria-hidden="true" />}
                <h3>{skill.title}</h3>
              </div>

              <div className="badge-list">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
