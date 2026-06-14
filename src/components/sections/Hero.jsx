import { ArrowRight, Mail } from "lucide-react";
import BrandIcon from "../BrandIcon";
import profileImg from "/nabila.png";
import { useTheme } from "../../hooks/useTheme";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 md:pt-16 pb-12 md:pb-24"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-12 items-center">
        <div className="order-2 lg:order-1 flex flex-col gap-5 md:gap-6 text-center lg:text-left">
          <p
            className="self-center lg:self-start inline-flex items-center gap-2 px-4 py-1.5
                       rounded-full text-xs md:text-sm font-semibold
                       bg-soft-soft dark:bg-soft
                       text-navy dark:text-navy border border-[rgba(255,120,159,0.18)]
                       dark:border-[rgba(255,120,159,0.25)]"
          >
            <span
              className="w-2 h-2 rounded-full bg-accent
                         shadow-[0_0_8px_rgba(255,120,159,0.6)]
                         animate-pulse"
            />
            Open to opportunities
          </p>

          <h1
            id="home-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy leading-[1.1]"
          >
            Hi, I&rsquo;m{" "}
            <span
              className="bg-gradient-to-br from-accent to-accent-soft bg-clip-text text-transparent"
            >
              Nabila Khyarotunnisa
            </span>
            <br className="hidden sm:block" />
            <span className="block mt-2 md:mt-3 text-2xl md:text-3xl lg:text-4xl font-bold text-slate">
              Informatics Engineer & Data Enthusiast
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate leading-relaxed max-w-2xl mx-auto lg:mx-0">
            A final-year Informatics Engineering student with hands-on
            experience in data science, machine learning, and web development.
            I love building data-driven products that blend analytics, design,
            and engineering to solve meaningful real-world problems.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-1">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold
                         text-white rounded-full
                         bg-gradient-to-br from-accent to-accent-soft
                         shadow-btn-primary transition-all duration-200
                         hover:-translate-y-0.5 hover:shadow-btn-primary-hover
                         focus-visible:outline-2 focus-visible:outline-accent
                         focus-visible:outline-offset-2"
            >
              View My Work <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold
                         text-navy rounded-full bg-card-soft
                         border border-[rgba(255,120,159,0.25)]
                         transition-all duration-200
                         hover:-translate-y-0.5 hover:bg-card-strong
                         hover:shadow-[0_10px_24px_rgba(15,23,42,0.08)]
                         focus-visible:outline-2 focus-visible:outline-accent
                         focus-visible:outline-offset-2"
            >
              <Mail size={16} aria-hidden="true" /> Contact Me
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3 mt-3">
            <a
              href="https://github.com/nabilakhyarotunnisa"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub (opens in new tab)"
              className="w-11 h-11 grid place-items-center rounded-full
                         bg-card-soft border border-[rgba(255,120,159,0.18)]
                         dark:border-[rgba(255,120,159,0.25)] text-navy
                         transition-all duration-200
                         hover:-translate-y-0.5 hover:bg-card-strong
                         hover:shadow-[0_8px_20px_rgba(15,23,42,0.1)]
                         focus-visible:outline-2 focus-visible:outline-accent
                         focus-visible:outline-offset-2"
            >
              <BrandIcon name="github" size={18} aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/nabila-khyarotunnisa"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn (opens in new tab)"
              className="w-11 h-11 grid place-items-center rounded-full
                         bg-card-soft border border-[rgba(255,120,159,0.18)]
                         dark:border-[rgba(255,120,159,0.25)] text-navy
                         transition-all duration-200
                         hover:-translate-y-0.5 hover:bg-card-strong
                         hover:shadow-[0_8px_20px_rgba(15,23,42,0.1)]
                         focus-visible:outline-2 focus-visible:outline-accent
                         focus-visible:outline-offset-2"
            >
              <BrandIcon name="linkedin" size={18} aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com/nabilakhy._"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram (opens in new tab)"
              className="w-11 h-11 grid place-items-center rounded-full
                         bg-card-soft border border-[rgba(255,120,159,0.18)]
                         dark:border-[rgba(255,120,159,0.25)] text-navy
                         transition-all duration-200
                         hover:-translate-y-0.5 hover:bg-card-strong
                         hover:shadow-[0_8px_20px_rgba(15,23,42,0.1)]
                         focus-visible:outline-2 focus-visible:outline-accent
                         focus-visible:outline-offset-2"
            >
              <BrandIcon name="instagram" size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex items-center justify-center">
          <div
            className="relative w-[260px] h-[320px] sm:w-[300px] sm:h-[380px] md:w-[340px] md:h-[420px]
                       rounded-[36px] overflow-hidden
                       bg-[linear-gradient(135deg,var(--color-hero-card-top)_0%,var(--color-hero-card-bottom)_100%)]
                       backdrop-blur-2xl
                       border border-[rgba(255,120,159,0.3)]
                       shadow-[0_30px_60px_rgba(255,120,159,0.18)]
                       grid place-items-center
                       transition-all duration-200
                       hover:scale-[1.02] hover:shadow-[0_40px_80px_rgba(255,120,159,0.25)]"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-90"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(255,181,31,0.18), transparent 45%)",
              }}
            />

            <img
              src={profileImg}
              alt={isDark ? "Nabila Khyarotunnisa portrait" : "Nabila Khyarotunnisa portrait"}
              width="320"
              height="420"
              loading="eager"
              className="relative w-[88%] h-[88%] object-cover rounded-[24px] z-10
                         drop-shadow-[0_15px_30px_rgba(45,27,46,0.25)]"
            />

            <div
              className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl px-4 py-3
                         bg-[linear-gradient(135deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.5)_100%)]
                         dark:bg-[linear-gradient(135deg,rgba(45,45,50,0.7)_0%,rgba(45,45,50,0.5)_100%)]
                         backdrop-blur-xl border border-[rgba(255,120,159,0.2)]
                         text-left"
            >
              <p className="text-xs font-semibold text-accent tracking-wider uppercase">
                Informatics Engineer
              </p>
              <p className="text-sm font-extrabold text-navy leading-tight mt-0.5">
                Nabila Khyarotunnisa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
