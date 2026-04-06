import Link from "next/link";
import { RevealOnScroll } from "../shared/reveal-on-scroll";

export function HomeCtaSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 text-center text-ink lg:px-20 lg:py-40">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-subtle"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-subtle opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-subtle opacity-35"
        aria-hidden
      />

      <RevealOnScroll className="relative z-[2]">
        <p className="mb-6 text-[11px] font-medium tracking-[0.16em] text-warm uppercase">
          Wave 1 · Limited to 200 members
        </p>
        <h2 className="mb-6 font-display text-[clamp(44px,6vw,80px)] font-black leading-none tracking-[-0.03em] text-ink">
          Your protocol
          <br />
          starts here.
        </h2>
        <p className="mx-auto mb-12 max-w-[460px] text-[17px] leading-relaxed text-ink-dim">
          Request access. Take the quiz when your window opens. Receive your
          personalised longevity protocol monthly.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/landing"
            className="rounded-[5px] bg-ink px-9 py-[18px] font-display text-[13px] font-bold tracking-[0.1em] text-bg uppercase transition hover:bg-[#1e1c16] hover:-translate-y-0.5"
          >
            Request Access
          </Link>
          <Link
            href="/products"
            className="rounded-[5px] border border-border-subtle bg-transparent px-9 py-[18px] font-display text-[13px] font-bold tracking-[0.1em] text-ink-dim uppercase transition hover:border-ink hover:text-ink hover:-translate-y-0.5"
          >
            View the products
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}
