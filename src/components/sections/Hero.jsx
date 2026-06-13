import { motion, useReducedMotion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  Download,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const heroMotionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
      };

  const cardMotionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.92 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.7, delay: 0.2 },
      };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div {...heroMotionProps}>
          <p className="hero-badge">
            Data Scientist · Machine Learning Enthusiast · Software Engineer
          </p>

          <h1>
            Hi, I&rsquo;m <span>Nabila Khyarotunnisa</span>
          </h1>

          <p className="hero-subtitle">
            Final-year Informatics Engineering student focused on Data Science,
            Machine Learning, and Software Engineering, especially Web
            Development. I enjoy building data-driven solutions, AI-powered
            applications, and responsive digital products.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary">
              View My Work <ArrowRight size={18} aria-hidden="true" />
            </a>

            <a
              href="/Nabila Khyarotunnisa_CV.pdf"
              className="btn secondary"
              download
            >
              Download CV <Download size={18} aria-hidden="true" />
            </a>

            <a href="#contact" className="btn ghost">
              Let&rsquo;s Connect
            </a>
          </div>

          <div className="social-links">
            <a
              href="mailto:nabila.khy@gmail.com"
              aria-label="Send email to Nabila"
            >
              <Mail size={20} aria-hidden="true" />
            </a>

            <a
              href="https://github.com/nabilakhyarotunnisa"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile (opens in new tab)"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/nabila-khyarotunnisa"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              LinkedIn
            </a>

            <a
              href="https://instagram.com/nabilakhy._"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram profile (opens in new tab)"
            >
              Instagram
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div className="hero-card profile-card" {...cardMotionProps}>
        <div className="profile-photo-wrapper">
          <img
            src="/nabila.png"
            alt="Portrait of Nabila Khyarotunnisa"
            className="profile-photo"
            width="360"
            height="360"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        </div>

        <div className="hero-card-inner">
          <Sparkles size={34} aria-hidden="true" />
          <h3>Data & Website Portfolio</h3>
          <p>
            A personal website highlighting data science, machine learning,
            software engineering, web development, achievements, and
            professional experience.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
