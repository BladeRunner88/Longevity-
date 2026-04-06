import { RevealOnScroll } from "../shared/reveal-on-scroll";

const steps = [
  {
    n: "01",
    title: "Take the quiz",
    body: "Seven questions. Three minutes. Your age, energy, stress, sleep, and goals — mapped to the right protocol for your biology.",
    delay: "none" as const,
  },
  {
    n: "02",
    title: "Receive your protocol",
    body: "A personalised output — not a generic vitamin recommendation. Specific products, specific timing, specific language for your profile.",
    delay: "delay" as const,
  },
  {
    n: "03",
    title: "We deliver monthly",
    body: "Your protocol ships every 30 days. Premium packaging. No decisions required. The ritual handles itself.",
    delay: "delay" as const,
  },
  {
    n: "04",
    title: "Protocol evolves",
    body: "30-day check-ins refine your stack as your biology responds. The system learns. Most supplements don't even try.",
    delay: "delay-2" as const,
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-cream px-6 py-20 lg:px-20 lg:py-[120px]" id="how">
      <RevealOnScroll className="mb-16 max-w-[560px] lg:mb-20">
        <p className="mb-4 text-[11px] font-medium tracking-[0.16em] text-warm uppercase">
          How it works
        </p>
        <h2 className="font-display text-[clamp(36px,4.5vw,60px)] font-extrabold leading-[1.04] tracking-[-0.025em] text-ink">
          Four steps.
          <br />
          One daily ritual.
        </h2>
      </RevealOnScroll>
      <div className="grid grid-cols-1 gap-px bg-border-subtle sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <RevealOnScroll
            key={s.n}
            delay={s.delay}
            className="bg-surface p-8 pb-12 transition-colors hover:bg-surface lg:px-8 lg:pt-10"
          >
            <div className="mb-7 font-display text-[80px] font-black leading-none tracking-[-0.04em] text-border-subtle">
              {s.n}
            </div>
            <div className="mb-3 font-display text-lg font-bold text-ink">{s.title}</div>
            <div className="text-[13.5px] leading-relaxed text-ink-dim">{s.body}</div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
