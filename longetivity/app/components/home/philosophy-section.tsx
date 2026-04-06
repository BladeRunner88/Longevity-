import { RevealOnScroll } from "../shared/reveal-on-scroll";

const rules = [
  {
    id: "R1",
    title: "Never discount",
    body: 'Not 10% off. Not a flash sale. Not ever. The price is the signal. We run out of stock before we discount.',
  },
  {
    id: "R2",
    title: "No fake urgency",
    body: 'No countdown timers. No "only 3 left." Your scarcity is structural, not manufactured. Wave releases are real.',
  },
  {
    id: "R3",
    title: "The quiz earns the price",
    body: "At launch we white-label generic supplements with better packaging and a smarter onboarding experience. That is fine — if the experience is exceptional.",
  },
  {
    id: "R4",
    title: "Invite-only referral",
    body: "Members give 2 access codes per quarter. Not a referral discount — an access gift. This rewards loyalty without cheapening the brand.",
  },
  {
    id: "R5",
    title: "Lead with the system",
    body: "Never present individual products first. Always lead with the Daily System. The system compounds. Individual products don't.",
  },
];

export function PhilosophySection() {
  return (
    <section
      className="grid grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-[100px] lg:px-20 lg:py-[140px]"
      id="philosophy"
    >
      <RevealOnScroll className="max-w-xl">
        <p className="mb-4 text-[11px] font-medium tracking-[0.16em] text-warm uppercase">
          Our philosophy
        </p>
        <h2 className="mb-8 font-display text-[clamp(36px,4.5vw,60px)] font-extrabold leading-[1.04] tracking-[-0.025em] text-ink">
          Calm.
          <br />
          Informed.
          <br />
          No hype.
        </h2>
        <p className="mb-5 text-base leading-[1.75] text-ink-dim">
          Most longevity is noise. The most powerful protocol is the one you actually
          take. Consistency outperforms complexity every time.
        </p>
        <div className="my-9 border-l-[3px] border-warm py-2 pl-7">
          <p className="font-display text-[22px] font-bold leading-snug text-ink">
            &quot;We are not building a supplement brand. We are building a longevity
            protocol platform that enters the market as a supplement brand.&quot;
          </p>
        </div>
        <p className="text-base leading-[1.75] text-ink-dim">
          The supplements are the entry point. The quiz is the differentiator. The data
          is the moat. And none of it matters without the experience being exceptional.
        </p>
      </RevealOnScroll>
      <RevealOnScroll delay="delay" className="relative">
        <div className="rounded-2xl border border-border-subtle bg-cream p-8 lg:p-9">
          {rules.map((r) => (
            <div
              key={r.id}
              className="flex gap-4 border-b border-border-subtle py-5 first:pt-0 last:border-b-0 last:pb-0"
            >
              <div className="min-w-5 pt-0.5 font-display text-[11px] font-bold text-warm">
                {r.id}
              </div>
              <div>
                <strong className="mb-1 block font-display text-sm font-bold text-ink">
                  {r.title}
                </strong>
                <p className="text-[13px] leading-relaxed text-ink-dim">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
