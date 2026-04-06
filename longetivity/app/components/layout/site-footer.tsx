import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-ink px-6 py-12 text-white/50 lg:px-20 lg:py-20">
      <div className="mb-12 grid grid-cols-2 gap-10 border-b border-white/[0.08] pb-12 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16">
        <div className="col-span-2 lg:col-span-1">
          <div className="mb-4 font-display text-[15px] font-extrabold tracking-[0.14em] text-surface uppercase">
            Longevity Protocol
          </div>
          <p className="max-w-[240px] text-[13px] leading-relaxed">
            A longevity protocol platform. Not a supplement brand. The quiz is the
            product. The data is the moat.
          </p>
        </div>
        <div>
          <div className="mb-5 text-[10px] font-bold tracking-[0.16em] text-white/25 uppercase">
            Products
          </div>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/products#cellular"
                className="text-[13px] text-white/45 no-underline transition hover:text-surface"
              >
                CELLULAR
              </Link>
            </li>
            <li>
              <Link
                href="/products#restore"
                className="text-[13px] text-white/45 no-underline transition hover:text-surface"
              >
                RESTORE
              </Link>
            </li>
            <li>
              <Link
                href="/products#sleep"
                className="text-[13px] text-white/45 no-underline transition hover:text-surface"
              >
                SLEEP
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-[13px] text-white/45 no-underline transition hover:text-surface"
              >
                The Daily System
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-5 text-[10px] font-bold tracking-[0.16em] text-white/25 uppercase">
            Platform
          </div>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/#quiz"
                className="text-[13px] text-white/45 no-underline transition hover:text-surface"
              >
                Take the Quiz
              </Link>
            </li>
            <li>
              <Link
                href="/#how"
                className="text-[13px] text-white/45 no-underline transition hover:text-surface"
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                href="/#science"
                className="text-[13px] text-white/45 no-underline transition hover:text-surface"
              >
                The Science
              </Link>
            </li>
            <li>
              <Link
                href="/#philosophy"
                className="text-[13px] text-white/45 no-underline transition hover:text-surface"
              >
                Our Philosophy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-5 text-[10px] font-bold tracking-[0.16em] text-white/25 uppercase">
            Access
          </div>
          <ul className="flex flex-col gap-3">
            <li>
              <Link
                href="/landing"
                className="text-[13px] text-white/45 no-underline transition hover:text-surface"
              >
                Request Access
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[13px] text-white/45 no-underline transition hover:text-surface">
                Waitlist
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[13px] text-white/45 no-underline transition hover:text-surface">
                Member referral
              </Link>
            </li>
            <li>
              <Link href="#" className="text-[13px] text-white/45 no-underline transition hover:text-surface">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-xs">© 2026 Longevity Protocol. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="#" className="text-xs text-white/30 no-underline transition hover:text-white/60">
            Privacy
          </Link>
          <Link href="#" className="text-xs text-white/30 no-underline transition hover:text-white/60">
            Terms
          </Link>
          <Link href="#" className="text-xs text-white/30 no-underline transition hover:text-white/60">
            Refund Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
