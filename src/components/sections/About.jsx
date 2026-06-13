import { GraduationCap } from "lucide-react";
import SectionHeader from "../SectionHeader";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <SectionHeader
        eyebrow="About"
        title="About Me"
        description="A quick introduction about my academic background, interests, and professional direction."
      />

      <div className="about-grid">
        <div className="about-card">
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

        <div className="education-card">
          <h3>
            <GraduationCap size={22} aria-hidden="true" /> Education
          </h3>

          <div>
            <h4>Gunadarma University</h4>
            <p>Informatics Engineering</p>
            <span>GPA: 3.78 / 4.00</span>
          </div>

          <div>
            <h4>Taruna Terpadu Vocational School</h4>
            <p>Multimedia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
