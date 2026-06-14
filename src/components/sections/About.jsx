import { GraduationCap } from "lucide-react";
import SectionHeader from "../SectionHeader";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24"
    >
      <SectionHeader
        id="about-heading"
        eyebrow="About"
        title="About Me"
        description="A quick introduction about my academic background, interests, and professional direction."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-8">
        <div
          className="rounded-card p-6 md:p-9 border border-[rgba(255,120,159,0.18)]
                     dark:border-[rgba(255,120,159,0.25)]
                     bg-card-soft backdrop-blur-2xl shadow-card-light
                     flex flex-col gap-4 text-slate leading-relaxed"
        >
          <p>
            I am a final-year Informatics Engineering student at Gunadarma
            University with a strong interest in Data Science, Machine
            Learning, and Software Engineering, especially Web Development. I
            enjoy transforming data into meaningful insights and building
            technology-driven solutions that combine analytics, development,
            and user-centered design.
          </p>

          <p>
            Through academic research, startup initiatives, and technology
            communities, I have gained experience in predictive analytics,
            machine learning, dashboard development, UI/UX design, frontend
            development, and strategic marketing. I am passionate about
            building practical digital products that solve real problems.
          </p>
        </div>

        <div
          className="rounded-card p-6 md:p-9 border border-[rgba(255,120,159,0.18)]
                     dark:border-[rgba(255,120,159,0.25)]
                     bg-card-soft backdrop-blur-2xl shadow-card-light
                     flex flex-col gap-5"
        >
          <h3 className="flex items-center gap-2 text-lg md:text-xl font-extrabold text-navy">
            <GraduationCap size={22} aria-hidden="true" className="text-accent" />
            Education
          </h3>

          <div className="flex flex-col gap-1">
            <h4 className="text-base font-bold text-navy">Gunadarma University</h4>
            <p className="text-slate text-[0.95rem]">Informatics Engineering</p>
            <span className="text-accent text-sm font-semibold">GPA: 3.78 / 4.00</span>
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="text-base font-bold text-navy">
              Taruna Terpadu Vocational School
            </h4>
            <p className="text-slate text-[0.95rem]">Multimedia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
