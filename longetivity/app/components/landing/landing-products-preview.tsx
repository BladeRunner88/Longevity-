import { cn } from "@/lib/utils";
import { RevealOnScroll } from "../shared/reveal-on-scroll";

type Variant = "cellular" | "restore" | "sleep";

const dotByVariant: Record<Variant, string> = {
  cellular: "bg-c-gold",
  restore: "bg-c-green",
  sleep: "bg-c-slate",
};

const glowByVariant: Record<Variant, string> = {
  cellular: "before:bg-c-gold",
  restore: "before:bg-c-green",
  sleep: "before:bg-c-slate",
};

const productCards: {
  variant: Variant;
  tag: string;
  name: string;
  subtitle: string;
  price: string;
  margin: string;
}[] = [
  {
    variant: "cellular",
    tag: "Cellular",
    name: "Daily Renewal",
    subtitle:
      "NMN 500mg · Morning · Fuel for your cells. FDA-cleared as of September 2025.",
    price: "$79",
    margin: "77% gross margin",
  },
  {
    variant: "restore",
    tag: "Restore",
    name: "Resilience",
    subtitle:
      "Magnesium Glycinate 400mg + Ashwagandha KSM-66. The adaptogen with the strongest human trial data.",
    price: "$69",
    margin: "81% gross margin",
  },
  {
    variant: "sleep",
    tag: "Sleep",
    name: "Overnight Repair",
    subtitle:
      "Magnesium L-Threonate 144mg + L-Theanine 200mg. Felt within days, not weeks.",
    price: "$65",
    margin: "77% gross margin",
  },
];

export function LandingProductsPreview() {
  return (
    <section className="bg-ink px-7 py-16 text-cream lg:px-20 lg:py-20">
      <RevealOnScroll className="mb-12 flex flex-col items-start justify-between gap-6 lg:mb-14 lg:flex-row lg:items-end">
        <h2 className="font-display text-[clamp(36px,4vw,54px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-cream">
          Three products.
          <br />
          <span className="text-warm">One system.</span>
        </h2>
        <p className="max-w-[280px] text-sm leading-relaxed text-white/40">
          Never lead with individual products. Always lead with the Daily System.
        </p>
      </RevealOnScroll>
      <RevealOnScroll className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {productCards.map((p) => (
          <div
            key={p.name}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.04] px-8 py-9 transition duration-300",
              "before:pointer-events-none before:absolute before:-top-10 before:-right-10 before:size-[120px] before:rounded-full before:opacity-[0.05] before:transition before:duration-300 before:content-['']",
              "hover:-translate-y-1 hover:bg-white/[0.07] hover:before:scale-[1.2] hover:before:opacity-10",
              glowByVariant[p.variant],
            )}
          >
            <div className="mb-6 flex items-center gap-2 text-[10px] font-semibold tracking-[0.16em] uppercase">
              <span
                className={cn("size-1.5 shrink-0 rounded-full", dotByVariant[p.variant])}
              />
              {p.tag}
            </div>
            <div className="mb-2.5 font-display text-[28px] font-extrabold tracking-[-0.01em] text-surface">
              {p.name}
            </div>
            <div className="mb-7 text-[13px] leading-relaxed text-white/45">
              {p.subtitle}
            </div>
            <div className="font-display text-[22px] font-bold text-surface">
              {p.price}{" "}
              <span className="ml-1 font-sans text-xs font-normal text-white/35">
                / month
              </span>
            </div>
            <div className="mt-2 text-[11px] text-white/30">{p.margin}</div>
          </div>
        ))}

        <div className="col-span-1 mt-1 flex flex-col items-stretch justify-between gap-10 rounded-2xl border border-white/[0.14] bg-white/[0.07] px-8 py-10 lg:col-span-3 lg:flex-row lg:gap-10 lg:px-12">
          <div className="max-w-[480px]">
            <div className="mb-3 text-[10px] font-semibold tracking-[0.18em] text-warm uppercase">
              Most popular · Start here
            </div>
            <div className="mb-2.5 font-display text-[32px] font-extrabold tracking-[-0.01em] text-surface">
              The Daily System
            </div>
            <div className="text-sm leading-relaxed text-white/50">
              All three products. One protocol. Delivered monthly. This is what 80% of
              members choose — and the only way we recommend starting. The system
              compounds. Individual products don&apos;t.
            </div>
          </div>
          <div className="shrink-0 text-left lg:text-right">
            <div className="font-display text-5xl font-extrabold leading-none text-surface">
              $189
            </div>
            <div className="mt-1 text-[13px] text-white/35">per month · all three</div>
            <div className="mt-3 inline-block rounded-full bg-warm/20 px-3 py-1.5 text-[11px] font-semibold tracking-[0.1em] text-warm">
              Save $24 vs separate
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
