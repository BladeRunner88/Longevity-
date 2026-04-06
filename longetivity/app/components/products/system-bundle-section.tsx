import Link from "next/link";
import { RevealOnScroll } from "../shared/reveal-on-scroll";

const items = [
  {
    dot: "bg-c-gold",
    name: "CELLULAR — Daily Renewal",
    sub: "NMN 500mg · Morning",
    price: "$79",
  },
  {
    dot: "bg-c-green",
    name: "RESTORE — Resilience",
    sub: "Mag + Ashwagandha · AM/Midday",
    price: "$69",
  },
  {
    dot: "bg-c-slate",
    name: "SLEEP — Overnight Repair",
    sub: "Mag L-Threonate + L-Theanine · PM",
    price: "$65",
  },
];

export function SystemBundleSection() {
  return (
    <section className="border-t border-border-subtle px-6 py-20 text-center text-ink lg:px-20 lg:py-[120px]">
      <p className="mb-5 text-[11px] font-medium tracking-[0.16em] text-warm uppercase">
        The Default Purchase
      </p>
      <h2 className="mb-5 font-display text-[clamp(40px,5vw,68px)] font-black leading-none tracking-[-0.03em] text-ink">
        The Daily System
      </h2>
      <p className="mx-auto mb-16 max-w-[480px] text-base leading-relaxed text-ink-dim">
        All three formulas. One protocol. Monthly delivery. The system always leads.
        Individual products are available — but this is where you start.
      </p>

      <RevealOnScroll className="relative mx-auto max-w-[1100px] overflow-hidden rounded-[20px] bg-ink px-6 py-10 text-left lg:grid lg:grid-cols-3 lg:gap-8 lg:px-20 lg:py-14">
        <div
          className="pointer-events-none absolute -top-20 -right-20 size-[300px] rounded-full bg-warm opacity-[0.06]"
          aria-hidden
        />

        <div className="relative z-[1] flex flex-col gap-3.5">
          {items.map((it) => (
            <div
              key={it.name}
              className="flex items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.05] px-4 py-3.5"
            >
              <div className={`size-2 shrink-0 rounded-full ${it.dot}`} />
              <div className="min-w-0 flex-1">
                <div className="font-display text-sm font-bold text-surface">{it.name}</div>
                <div className="text-[11px] text-white/35">{it.sub}</div>
              </div>
              <div className="shrink-0 font-display text-[13px] font-bold text-white/40 line-through">
                {it.price}
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-[1] border-y border-white/[0.08] py-8 text-center lg:border-x lg:border-y-0 lg:py-0 lg:px-4">
          <div className="mb-4 text-[10px] font-bold tracking-[0.18em] text-warm uppercase">
            Daily System Bundle
          </div>
          <div className="font-display text-[64px] font-black leading-none tracking-[-0.03em] text-surface">
            $189
          </div>
          <div className="mt-1.5 text-[13px] text-white/35">per month · all three</div>
          <div className="mt-3 inline-block rounded-full bg-warm/20 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-warm">
            Save $24 vs separate
          </div>
        </div>

        <div className="relative z-[1] pt-8 text-center lg:pt-0">
          <Link
            href="/landing"
            className="mb-4 inline-block w-full max-w-[280px] rounded-md bg-warm py-[18px] px-8 font-display text-xs font-bold tracking-[0.1em] text-ink uppercase no-underline transition hover:bg-[#b09a80] hover:-translate-y-0.5 lg:max-w-none"
          >
            Request Access →
          </Link>
          <p className="text-xs leading-normal text-white/25">
            Access opens by invitation only.
            <br />
            Wave 1 limited to 200 members.
            <br />
            No payment until access opens.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
}
