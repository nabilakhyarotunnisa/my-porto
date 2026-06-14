import { FolderGit2, ExternalLink } from "lucide-react";
import BrandIcon from "../BrandIcon";
import { projects } from "../../data";
import SectionHeader from "../SectionHeader";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-16 md:py-24"
      style={{ scrollMarginTop: "120px" }}
    >
      <SectionHeader
        id="projects-heading"
        eyebrow="Projects"
        title="Featured Projects"
        description="A selection of projects that combine machine learning, data analytics, and modern web development to solve real problems."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {projects.map((project, index) => (
          <article
            key={`${project.title}-${index}`}
            className="group relative overflow-hidden rounded-card p-5 md:p-7
                       border border-[rgba(255,120,159,0.18)]
                       dark:border-[rgba(255,120,159,0.25)]
                       bg-card-soft backdrop-blur-2xl shadow-card-light
                       flex flex-col gap-4 transition-all duration-200
                       hover:-translate-y-1 hover:shadow-card"
          >
            <div
              className="absolute -top-8 -right-8 w-40 h-40 rounded-full
                         bg-gradient-to-br from-[rgba(255,120,159,0.18)] to-[rgba(255,181,31,0.18)]
                         pointer-events-none blur-2xl"
            />

            <div className="flex items-center gap-3 relative">
              <span
                className="w-11 h-11 rounded-xl grid place-items-center
                           bg-gradient-to-br from-accent to-accent-soft
                           text-white shadow-[0_8px_24px_rgba(255,120,159,0.32)]"
              >
                <FolderGit2 size={22} aria-hidden="true" />
              </span>
              <span className="text-xs font-semibold text-accent tracking-wider uppercase">
                {project.category}
              </span>
            </div>

            <h3 className="text-lg md:text-xl font-extrabold text-navy leading-snug relative">
              {project.title}
            </h3>

            <p className="text-sm md:text-[0.95rem] text-slate leading-relaxed relative">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 relative">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-[0.7rem] md:text-xs font-semibold
                             text-slate bg-badge border border-[rgba(255,120,159,0.12)]
                             transition-colors duration-200
                             hover:bg-[rgba(255,120,159,0.15)] hover:text-navy"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-1 relative">
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold
                           text-white rounded-full
                           bg-gradient-to-br from-accent to-accent-soft
                           shadow-cert-button transition-all duration-200
                           hover:-translate-y-0.5 hover:shadow-cert-button-hover
                           focus-visible:outline-2 focus-visible:outline-accent
                           focus-visible:outline-offset-2"
              >
                <BrandIcon name="github" size={16} aria-hidden="true" /> Repository
              </a>
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold
                           text-navy rounded-full bg-card-soft
                           border border-[rgba(255,120,159,0.25)]
                           transition-all duration-200
                           hover:-translate-y-0.5 hover:bg-card-strong
                           hover:shadow-[0_10px_24px_rgba(15,23,42,0.08)]
                           focus-visible:outline-2 focus-visible:outline-accent
                           focus-visible:outline-offset-2"
              >
                <ExternalLink size={16} aria-hidden="true" /> View Case Study
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
