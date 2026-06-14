/**
 * Reusable section header: eyebrow label, title, and optional description.
 * Aligned center with a thin gradient underline on the title.
 */
export default function SectionHeader({ eyebrow, title, description, id }) {
  return (
    <div className="flex flex-col items-center text-center mb-12 md:mb-16">
      {eyebrow && (
        <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-accent mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-3xl md:text-4xl font-extrabold text-navy relative inline-block pb-3
                   after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
                   after:bottom-0 after:h-[3px] after:w-12 after:rounded-full
                   after:bg-gradient-to-r after:from-accent after:to-accent-soft"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-slate max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
