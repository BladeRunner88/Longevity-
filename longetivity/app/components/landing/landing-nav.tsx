import Link from "next/link";

export function LandingNav() {
  return (
    <nav
      className="fixed top-0 right-0 left-0 z-[100] flex items-center justify-between px-6 py-6 sm:px-7 lg:px-14 text-ink"
      aria-label="Primary"
    >
      <Link
        href="/"
        className="font-display text-[15px] font-extrabold tracking-[0.14em] text-ink uppercase"
      >
        Longevity Protocol
      </Link>
      <div className="rounded-full border border-border-subtle bg-surface/60 px-3.5 py-1.5 text-[11px] font-medium tracking-[0.1em] text-ink-faint uppercase backdrop-blur-sm">
        Early Access · April 2026
      </div>
    </nav>
  );
}
