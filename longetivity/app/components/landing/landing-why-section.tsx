import { RevealOnScroll } from "../shared/reveal-on-scroll";

const items = [
  {
    n: "01",
    title: "Intelligent Personalization",
    body: "Seven questions. Three minutes. A dynamic protocol output that listens and adapts. Deep, reliable long-term care, not a generic vitamin pack.",
  },
  {
    n: "02",
    title: "Longevity-specific",
    body: "Nobody has built a longevity protocol platform combining an intelligent quiz, personalised system, and premium ritual.",
  },
  {
    n: "03",
    title: "No discounts. Ever.",
    body: "The price is the signal. We run out of stock before we discount. Currently unavailable is more powerful than 20% off.",
  },
  {
    n: "04",
    title: "Real scarcity",
    body: "We open 200 spots. We close them. We open 200 more. This is genuine — managing supply chain and onboarding quality deliberately.",
  },
];

export function LandingWhySection() {
  return (
    <section className="grid grid-cols-1 items-start gap-12 px-7 py-20 lg:grid-cols-2 lg:gap-20 lg:px-20 lg:py-[120px]">
      <RevealOnScroll>
        <div className="mb-5 text-[11px] font-medium tracking-[0.16em] text-warm uppercase">
          The difference
        </div>
        <h2 className="font-display text-[clamp(36px,4vw,54px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">
          Built different.
          <br />
          Priced with
          <br />
          conviction.
        </h2>
      </RevealOnScroll>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6">
        {items.map((w) => (
          <RevealOnScroll
            key={w.n}
            className="rounded-xl border border-border-subtle bg-cream p-7"
          >
            <div className="mb-3 font-display text-[11px] font-bold tracking-[0.1em] text-warm">
              {w.n}
            </div>
            <div className="mb-2 font-display text-base font-bold text-ink">{w.title}</div>
            <div className="text-[13px] leading-relaxed text-ink-dim">{w.body}</div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
