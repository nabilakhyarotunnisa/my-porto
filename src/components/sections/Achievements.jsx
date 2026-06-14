import { Award } from "lucide-react";
import { achievements } from "../../data";
import SectionHeader from "../SectionHeader";

export default function Achievements() {
  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24
                 bg-soft-soft dark:bg-transparent
                 rounded-[40px] md:rounded-[60px] my-8 md:my-12"
      style={{ scrollMarginTop: "120px" }}
    >
      <SectionHeader
        id="achievements-heading"
        eyebrow="Milestones"
        title="Achievements"
        description="Competition, innovation, and business funding achievements."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {achievements.map((achievement) => (
          <article
            key={achievement.title}
            className="rounded-card p-5 md:p-7 border border-[rgba(255,120,159,0.18)]
                       dark:border-[rgba(255,120,159,0.25)]
                       bg-card-soft backdrop-blur-2xl shadow-card-light
                       flex gap-4 items-start transition-all duration-200
                       hover:-translate-y-1 hover:shadow-card"
          >
            <div
              className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full grid place-items-center
                         text-white bg-gradient-to-br from-accent to-accent-soft
                         shadow-[0_8px_24px_rgba(255,120,159,0.32)]"
            >
              <Award size={24} aria-hidden="true" />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-accent tracking-wider">
                {achievement.year}
              </span>
              <h3 className="text-base md:text-lg font-extrabold text-navy leading-snug">
                {achievement.title}
              </h3>
              <h4 className="text-sm font-semibold text-slate">
                {achievement.organization}
              </h4>
              <p className="text-xs text-accent-soft font-semibold mt-1">
                {achievement.role}
              </p>
              <p className="text-sm text-slate leading-relaxed mt-2">
                {achievement.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
