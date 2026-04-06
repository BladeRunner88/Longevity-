import Link from "next/link";

export function HomeHero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-[140px] pb-24 text-center text-ink sm:px-[60px]"
      id="home"
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 size-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-subtle animate-[rotateSlow_60s_linear_infinite]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-subtle [animation-direction:reverse] animate-[rotateSlow_45s_linear_infinite]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-border-subtle animate-[rotateSlow_30s_linear_infinite]"
        aria-hidden
      />

      <div className="relative z-[2] max-w-[860px]">
        <div className="mb-9 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-cream px-[18px] py-2 text-[11px] font-medium tracking-[0.12em] text-ink-dim uppercase">
          <span className="size-1.5 rounded-full bg-warm" aria-hidden />
          Wave 1 — 200 Members — Now Open
        </div>
        <h1 className="mb-7 font-display text-[clamp(56px,7.5vw,112px)] font-black leading-[0.95] tracking-[-0.035em] text-ink">
          The longevity
          <br />
          <span className="text-warm">protocol</span>
          <br />
          platform.
        </h1>
        <p className="mx-auto mb-[52px] max-w-[520px] text-[clamp(16px,1.8vw,20px)] leading-relaxed text-ink-dim">
          The quiz is the product. The supplements are the delivery mechanism. Take
          three minutes to receive your personalised longevity protocol — then we
          handle the rest.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/#quiz"
            className="rounded-[5px] bg-ink px-9 py-[18px] font-display text-[13px] font-bold tracking-[0.1em] text-bg uppercase transition hover:bg-[#1e1c16] hover:-translate-y-0.5 active:translate-y-0"
          >
            Take the Quiz
          </Link>
          <Link
            href="/products"
            className="rounded-[5px] border border-border-subtle bg-transparent px-9 py-[18px] font-display text-[13px] font-bold tracking-[0.1em] text-ink-dim uppercase transition hover:border-ink hover:text-ink hover:-translate-y-0.5"
          >
            View the System
          </Link>
        </div>
        <div className="mt-[72px] flex flex-wrap items-center justify-center gap-8 border-t border-border-subtle pt-14 sm:gap-12">
          <div className="text-center">
            <div className="font-display text-4xl font-extrabold tracking-[-0.02em] text-ink">
              3
            </div>
            <div className="mt-1.5 text-[11px] tracking-[0.06em] text-ink-faint uppercase">
              Products. One system
            </div>
          </div>
          <div className="hidden h-10 w-px bg-border-subtle sm:block" aria-hidden />
          <div className="text-center">
            <div className="font-display text-4xl font-extrabold tracking-[-0.02em] text-ink">
              76%
            </div>
            <div className="mt-1.5 text-[11px] tracking-[0.06em] text-ink-faint uppercase">
              Gross margin
            </div>
          </div>
          <div className="hidden h-10 w-px bg-border-subtle sm:block" aria-hidden />
          <div className="text-center">
            <div className="font-display text-4xl font-extrabold tracking-[-0.02em] text-ink">
              200
            </div>
            <div className="mt-1.5 text-[11px] tracking-[0.06em] text-ink-faint uppercase">
              Wave 1 spots
            </div>
          </div>
          <div className="hidden h-10 w-px bg-border-subtle sm:block" aria-hidden />
          <div className="text-center">
            <div className="font-display text-4xl font-extrabold tracking-[-0.02em] text-ink">
              $189
            </div>
            <div className="mt-1.5 text-[11px] tracking-[0.06em] text-ink-faint uppercase">
              Full system / month
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
