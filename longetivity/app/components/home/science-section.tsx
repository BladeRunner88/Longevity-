import { RevealOnScroll } from "../shared/reveal-on-scroll";

export function ScienceSection() {
  return (
    <section className="bg-cream px-6 py-20 lg:px-20 lg:py-[120px]" id="science">
      <RevealOnScroll className="mb-12 flex flex-col items-start justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
        <div>
          <p className="mb-4 text-[11px] font-medium tracking-[0.16em] text-warm uppercase">
            The science, made human
          </p>
          <h2 className="font-display text-[clamp(36px,4.5vw,60px)] font-extrabold leading-[1.04] tracking-[-0.025em] text-ink">
            Why these
            <br />
            ingredients.
          </h2>
        </div>
        <p className="max-w-[300px] text-left text-sm leading-relaxed text-ink-dim lg:text-right">
          We chose each ingredient for one reason: the evidence. Not trends. Not
          marketing. Evidence.
        </p>
      </RevealOnScroll>
      <RevealOnScroll className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-border-subtle bg-surface p-8 transition-transform duration-200 hover:-translate-y-1">
          <div
            className="mb-5 flex size-11 items-center justify-center rounded-[10px] bg-cream text-xl"
            aria-hidden
          >
            🔋
          </div>
          <div className="mb-2.5 font-display text-[17px] font-bold text-ink">
            NMN &amp; NAD+ decline
          </div>
          <div className="text-[13.5px] leading-relaxed text-ink-dim">
            NAD+ — the molecule that powers cellular energy — declines by roughly 50%
            between the ages of 40 and 60. NMN is the most studied precursor for
            restoring it. FDA-cleared as of September 2025.
          </div>
          <div className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.1em] text-warm uppercase">
            CELLULAR product →
          </div>
        </div>
        <div className="rounded-xl border border-border-subtle bg-surface p-8 transition-transform duration-200 hover:-translate-y-1">
          <div
            className="mb-5 flex size-11 items-center justify-center rounded-[10px] bg-cream text-xl"
            aria-hidden
          >
            🌿
          </div>
          <div className="mb-2.5 font-display text-[17px] font-bold text-ink">
            Ashwagandha KSM-66
          </div>
          <div className="text-[13.5px] leading-relaxed text-ink-dim">
            Of all the adaptogens, Ashwagandha has the largest body of human clinical
            trial data. KSM-66 is the full-spectrum root extract with the most
            consistent efficacy. Not a trend — a standard.
          </div>
          <div className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.1em] text-warm uppercase">
            RESTORE product →
          </div>
        </div>
        <div className="rounded-xl border border-border-subtle bg-surface p-8 transition-transform duration-200 hover:-translate-y-1">
          <div
            className="mb-5 flex size-11 items-center justify-center rounded-[10px] bg-cream text-xl"
            aria-hidden
          >
            😴
          </div>
          <div className="mb-2.5 font-display text-[17px] font-bold text-ink">
            Magnesium L-Threonate
          </div>
          <div className="text-[13.5px] leading-relaxed text-ink-dim">
            The only form of magnesium shown to cross the blood-brain barrier
            effectively. Combined with L-Theanine for sleep quality — not just sleep
            onset. Felt within days, not weeks. This drives retention.
          </div>
          <div className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.1em] text-warm uppercase">
            SLEEP product →
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
