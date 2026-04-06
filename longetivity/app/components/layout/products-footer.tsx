import Link from "next/link";

export function ProductsFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink px-6 py-12 text-surface/50 lg:px-20 lg:pb-10 lg:pt-16">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="font-display text-[13px] font-extrabold tracking-[0.14em] text-surface uppercase">
          Longevity Protocol
        </div>
        <p className="text-xs text-white/25">© 2026 Longevity Protocol. Confidential pre-launch.</p>
        <Link
          href="/"
          className="text-xs text-white/35 no-underline transition hover:text-white/70"
        >
          ← Back to main site
        </Link>
      </div>
    </footer>
  );
}
