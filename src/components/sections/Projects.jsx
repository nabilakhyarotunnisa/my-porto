import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../../data";
import SectionHeader from "../SectionHeader";

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
    >
      <SectionHeader
        id="projects-heading"
        eyebrow="Portfolio"
        title="Featured Projects"
        description="Selected projects across data science, machine learning, web development, dashboard development, and AI-powered applications."
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={
              prefersReducedMotion ? undefined : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, margin: "-50px" }}
            transition={
              prefersReducedMotion ? undefined : { delay: index * 0.08 }
            }
          >
            <p className="project-category">{project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="badge-list">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="project-actions">
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="small-link"
              >
                View Case Study <ExternalLink size={16} aria-hidden="true" />
              </a>

              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="small-link"
              >
                View Repository <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
