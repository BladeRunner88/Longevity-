import { RevealOnScroll } from "../shared/reveal-on-scroll";

const cards = [
  {
    date: "Latest Data · 2026",
    title: "NAD+ levels elevated by 38% at day 60",
    body: "Recent placebo-controlled trials confirm 500mg daily dosing provides the optimal balance of sustained cellular energy without receptor saturation.",
    compound: "NMN 500mg",
  },
  {
    date: "Meta-Analysis · 2025",
    title: "Cortisol baseline reduction of 22%",
    body: "Gold-standard adaptogen data showing meaningful improvements in perceived stress and recovery metrics across an 8-week structured protocol.",
    compound: "Ashwagandha KSM-66",
  },
  {
    date: "Clinical Observation",
    title: "Enhanced sleep architecture & deep phase",
    body: "Demonstrated ability to cross the blood-brain barrier efficiently, facilitating faster onset of sleep and reduced nighttime awakenings.",
    compound: "Magnesium L-Threonate",
  },
];

export function LandingScienceSection() {
  return (
    <section className="bg-bg px-7 pt-16 pb-20 lg:px-20 lg:pt-20 lg:pb-[120px]">
      <RevealOnScroll className="mb-14 lg:mb-16">
        <div className="mb-5 text-[11px] font-medium tracking-[0.16em] text-warm uppercase">
          Evidence
        </div>
        <h2 className="font-display text-[clamp(36px,4vw,54px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-ink">
          Backed by conservative,
          <br />
          real-world data.
        </h2>
      </RevealOnScroll>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-6">
        {cards.map((c) => (
          <RevealOnScroll
            key={c.title}
            className="rounded-xl border border-border-subtle bg-surface p-8 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-3 text-[11px] font-semibold tracking-[0.1em] text-warm uppercase">
              {c.date}
            </div>
            <div className="mb-3 font-display text-xl font-extrabold leading-tight text-ink">
              {c.title}
            </div>
            <div className="text-[13px] leading-relaxed text-ink-dim">{c.body}</div>
            <div className="mt-6 inline-block rounded-full bg-cream px-3 py-1.5 text-[11px] font-semibold text-ink">
              {c.compound}
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
