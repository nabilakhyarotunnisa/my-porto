import { Users } from "lucide-react";
import { experiences } from "../../data";
import SectionHeader from "../SectionHeader";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24"
      style={{ scrollMarginTop: "120px" }}
    >
      <SectionHeader
        id="experience-heading"
        eyebrow="Community"
        title="Organizational Experience"
        description="Roles and contributions within technology communities and student organizations."
      />

      <div className="relative max-w-[820px] mx-auto">
        <div
          className="absolute top-0 bottom-0 left-[18px] md:left-6 w-0.5
                     bg-gradient-to-b from-accent via-accent-soft to-transparent"
          aria-hidden="true"
        />

        {experiences.map((item, index) => (
          <div
            key={`${item.role}-${index}`}
            className="relative pl-12 md:pl-16 pb-8 md:pb-10 last:pb-0"
          >
            <div
              className="absolute left-0 top-2 w-9 h-9 md:w-12 md:h-12 rounded-full
                         grid place-items-center text-white
                         bg-gradient-to-br from-accent to-accent-soft
                         shadow-[0_8px_24px_rgba(255,120,159,0.32)]
                         border-4 border-[#fffbf7] dark:border-[#1d1d1f]"
              aria-hidden="true"
            >
              <Users size={16} className="md:hidden" />
              <Users size={20} className="hidden md:block" />
            </div>

            <article
              className="rounded-card p-5 md:p-7 border border-[rgba(255,120,159,0.18)]
                         dark:border-[rgba(255,120,159,0.25)]
                         bg-card-soft backdrop-blur-2xl shadow-card-light
                         flex flex-col gap-4 transition-all duration-200
                         hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-accent tracking-wider">
                  {item.period}
                </span>
                <h3 className="text-base md:text-lg font-extrabold text-navy leading-snug">
                  {item.role}
                </h3>
                <h4 className="text-sm font-semibold text-slate">
                  {item.organization}
                </h4>
              </div>

              <ul className="flex flex-col gap-2 pl-4 relative">
                {item.responsibilities.map((resp) => (
                  <li
                    key={resp}
                    className="relative text-sm text-slate leading-relaxed pl-3
                               before:content-[''] before:absolute before:left-0 before:top-[0.6em]
                               before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent"
                  >
                    {resp}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
