import { Award } from "lucide-react";
import { achievements } from "../../data";
import SectionHeader from "../SectionHeader";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section soft-section"
      aria-labelledby="achievements-heading"
    >
      <SectionHeader
        eyebrow="Milestones"
        title="Achievements"
        description="Competition, innovation, and business funding achievements."
      />

      <div className="achievement-grid">
        {achievements.map((achievement) => (
          <article className="achievement-card" key={achievement.title}>
            <div className="achievement-icon">
              <Award size={24} aria-hidden="true" />
            </div>

            <div>
              <span>{achievement.year}</span>
              <h3>{achievement.title}</h3>
              <h4>{achievement.organization}</h4>
              <p className="role">{achievement.role}</p>
              <p>{achievement.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
