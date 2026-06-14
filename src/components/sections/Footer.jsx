export default function Footer() {
  return (
    <footer
      className="mt-16 md:mt-20 pb-8 md:pb-10 pt-8 border-t border-[rgba(255,120,159,0.18)]
                 dark:border-[rgba(255,120,159,0.25)] text-center"
    >
      <p className="text-sm md:text-base text-slate dark:text-muted leading-relaxed px-4">
        &copy; 2026 Nabila Khyarotunnisa. All rights reserved.
        <br className="sm:hidden" />
        <span className="hidden sm:inline"> </span>
        Built with React and handcrafted with care.
      </p>
    </footer>
  );
}
