import { skills } from "../../data";
import SectionHeader from "../SectionHeader";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24
                 bg-soft-soft dark:bg-transparent
                 rounded-[40px] md:rounded-[60px] my-8 md:my-12"
      style={{ scrollMarginTop: "120px" }}
    >
      <SectionHeader
        id="skills-heading"
        eyebrow="Skills"
        title="Skills & Tools"
        description="Technical skills grouped around data science, machine learning, software engineering, and web development."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {skills.map((skill) => {
          const Icon = skill.Icon;
          return (
            <div
              key={skill.title}
              className="rounded-card p-5 md:p-7 border border-[rgba(255,120,159,0.18)]
                         dark:border-[rgba(255,120,159,0.25)]
                         bg-card-soft backdrop-blur-2xl shadow-card-light
                         flex flex-col gap-4 transition-all duration-200
                         hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex items-center gap-3">
                {Icon && (
                  <span
                    className="w-11 h-11 rounded-xl grid place-items-center text-accent
                               bg-[rgba(255,120,159,0.12)]"
                  >
                    <Icon size={22} aria-hidden="true" />
                  </span>
                )}
                <h3 className="text-base md:text-lg font-extrabold text-navy">
                  {skill.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs md:text-[0.8rem] font-semibold
                               text-slate bg-badge border border-[rgba(255,120,159,0.12)]
                               transition-colors duration-200
                               hover:bg-[rgba(255,120,159,0.15)] hover:text-navy"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
