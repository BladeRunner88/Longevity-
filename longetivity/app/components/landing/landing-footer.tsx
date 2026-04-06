import Link from "next/link";

export function LandingFooter() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-border-subtle px-7 py-8 text-ink lg:flex-row lg:items-center lg:px-20 lg:py-10">
      <div className="font-display text-[13px] font-bold tracking-[0.14em] uppercase">
        Longevity Protocol
      </div>
      <div className="max-w-[400px] text-center lg:text-left">
        <p className="text-xs text-ink-faint">
          © 2026 · Confidential pre-launch · All rights reserved
        </p>
        <p className="mt-2 text-[10px] leading-normal text-ink-faint">
          * These statements have not been evaluated by the FDA. This product is not
          intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </div>
      <p className="text-xs text-ink-faint">
        <Link
          href="/"
          className="text-ink-dim no-underline transition-colors hover:text-ink"
        >
          View full site →
        </Link>
      </p>
    </footer>
  );
}
