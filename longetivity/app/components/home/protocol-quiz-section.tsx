import { RevealOnScroll } from "../shared/reveal-on-scroll";
import { ProtocolQuizPanel } from "./protocol-quiz-panel";

export function ProtocolQuizSection() {
  return (
    <section
      className="grid grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:px-20 lg:py-[120px]"
      id="quiz"
    >
      <RevealOnScroll className="max-w-xl">
        <p className="mb-4 text-[11px] font-medium tracking-[0.16em] text-warm uppercase">
          The Protocol Quiz
        </p>
        <h2 className="mb-6 font-display text-[clamp(36px,4.5vw,60px)] font-extrabold leading-[1.04] tracking-[-0.025em] text-ink">
          Seven questions.
          <br />
          Your protocol.
        </h2>
        <p className="mb-6 text-[15px] leading-[1.7] text-ink-dim lg:mb-9">
          Generic brands sell products. We build a system around your biology. The quiz
          determines which of our three formulas leads, in what order, and how to frame
          your protocol.
        </p>
        <div className="mb-6 flex gap-3.5 rounded-[10px] bg-cream p-5 last:mb-0">
          <div
            className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-surface text-base"
            aria-hidden
          >
            ⚡
          </div>
          <div>
            <div className="mb-1 font-display text-sm font-bold text-ink">
              Energy calibration
            </div>
            <div className="text-[13px] leading-normal text-ink-dim">
              We map your energy curve — whether CELLULAR is the priority or whether you
              need RESTORE first.
            </div>
          </div>
        </div>
        <div className="mb-6 flex gap-3.5 rounded-[10px] bg-cream p-5 last:mb-0">
          <div
            className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-surface text-base"
            aria-hidden
          >
            🌙
          </div>
          <div>
            <div className="mb-1 font-display text-sm font-bold text-ink">
              Sleep priority scoring
            </div>
            <div className="text-[13px] leading-normal text-ink-dim">
              If your sleep is poor, we lead with SLEEP — because felt benefits drive
              retention, and retention is everything.
            </div>
          </div>
        </div>
        <div className="flex gap-3.5 rounded-[10px] bg-cream p-5">
          <div
            className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-surface text-base"
            aria-hidden
          >
            🧬
          </div>
          <div>
            <div className="mb-1 font-display text-sm font-bold text-ink">
              Longevity sequencing
            </div>
            <div className="text-[13px] leading-normal text-ink-dim">
              Your protocol output includes a staged introduction — or a full-system
              day-one plan if your profile supports it.
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay="delay">
        <ProtocolQuizPanel />
      </RevealOnScroll>
    </section>
  );
}
