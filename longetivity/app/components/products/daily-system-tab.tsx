import { RevealOnScroll } from "../shared/reveal-on-scroll";

type DailySystemTabProps = {
  isActive: boolean;
};

const miniCards = [
  {
    dot: "bg-c-gold",
    label: "Cellular",
    name: "Daily Renewal",
    sub: "NMN 500mg · Morning",
    price: "$79",
  },
  {
    dot: "bg-c-green",
    label: "Restore",
    name: "Resilience",
    sub: "Magnesium + Ashwagandha",
    price: "$69",
  },
  {
    dot: "bg-c-slate",
    label: "Sleep",
    name: "Overnight Repair",
    sub: "Mag L-Threonate + L-Theanine",
    price: "$65",
  },
];

export function DailySystemTab({ isActive }: DailySystemTabProps) {
  return (
    <div className={isActive ? "block" : "hidden"} id="detail-system">
      <div className="px-6 pt-24 pb-12 lg:px-20 lg:pt-[100px] lg:pb-16">
        <RevealOnScroll className="mx-auto max-w-[680px] text-center">
          <p className="mb-6 text-[11px] font-medium tracking-[0.16em] text-warm uppercase">
            Most Popular · Default Purchase
          </p>
          <h2 className="mb-6 font-display text-[clamp(44px,6vw,80px)] font-black leading-[0.97] tracking-[-0.03em] text-ink">
            The Daily System
          </h2>
          <p className="mb-12 text-[17px] leading-relaxed text-ink-dim">
            All three. One protocol. Monthly delivery. This is what 80% of our members
            choose. The system compounds in ways individual supplements don&apos;t — and
            the quiz tells you exactly how to sequence it for your biology.
          </p>
        </RevealOnScroll>
        <RevealOnScroll className="mx-auto grid max-w-[900px] grid-cols-1 gap-5 lg:grid-cols-3">
          {miniCards.map((c) => (
            <div
              key={c.label}
              className="rounded-[14px] border border-border-subtle bg-cream p-7"
            >
              <div className="mb-4 flex items-center gap-2">
                <div className={`size-2 rounded-full ${c.dot}`} />
                <span className="text-[10px] font-bold tracking-[0.16em] text-ink-dim uppercase">
                  {c.label}
                </span>
              </div>
              <div className="mb-2 font-display text-[22px] font-extrabold text-ink">
                {c.name}
              </div>
              <div className="mb-5 text-xs leading-normal text-ink-faint">{c.sub}</div>
              <div className="font-display text-lg font-bold text-ink-faint line-through">
                {c.price}
              </div>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </div>
  );
}
