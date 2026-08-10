import Link from "next/link";

export default function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-[#efdfb4]/10 bg-[#17243e]/88 px-5 py-5 text-[#efdfb4] shadow-sm shadow-black/10 backdrop-blur-md sm:px-12 sm:py-6">
      <Link
        href="/"
        aria-label="Meagan McKeever, back to home"
        className="font-display text-base leading-none tracking-[0.15em] sm:text-lg"
      >
        MM
      </Link>
      <nav
        aria-label="Primary"
        className="font-body flex items-center gap-3 text-[8px] tracking-[0.08em] sm:gap-8 sm:text-[11px] sm:tracking-[0.2em]"
      >
        <Link className="opacity-75 transition-opacity hover:opacity-100" href="/#projects">
          PROJECTS
        </Link>
        <a
          className="opacity-75 transition-opacity hover:opacity-100"
          href="/Meagan-McKeever-CV.pdf"
          target="_blank"
          rel="noreferrer"
        >
          EXPERIENCE
        </a>
        <Link className="opacity-75 transition-opacity hover:opacity-100" href="/about">
          ABOUT
        </Link>
        <Link className="opacity-75 transition-opacity hover:opacity-100" href="/#contact">
          CONTACT
        </Link>
      </nav>
    </header>
  );
}
