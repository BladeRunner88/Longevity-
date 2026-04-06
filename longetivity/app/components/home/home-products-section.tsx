import Link from "next/link";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "../shared/reveal-on-scroll";

type Variant = "cellular" | "restore" | "sleep";

const afterGlow: Record<Variant, string> = {
  cellular: "after:bg-c-gold",
  restore: "after:bg-c-green",
  sleep: "after:bg-c-slate",
};

const dotColor: Record<Variant, string> = {
  cellular: "bg-c-gold",
  restore: "bg-c-green",
  sleep: "bg-c-slate",
};

export function HomeProductsSection() {
  return (
    <section className="bg-ink px-6 py-20 text-surface lg:px-20 lg:py-[120px]" id="products">
      <RevealOnScroll className="mb-12 grid grid-cols-1 items-end gap-6 lg:mb-16 lg:grid-cols-2 lg:gap-16">
        <h2 className="font-display text-[clamp(40px,5vw,68px)] font-extrabold leading-none tracking-[-0.025em] text-surface">
          Three products.
          <br />
          <em className="not-italic text-warm">One system.</em>
          <br />
          Daily.
        </h2>
        <p className="pt-2 text-[15px] leading-relaxed text-white/45 lg:text-right">
          We never present individual products first. The Daily System is what 80% of
          members choose — because the system compounds in ways individual supplements
          don&apos;t.
        </p>
      </RevealOnScroll>
      <RevealOnScroll className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <ProductCard
          variant="cellular"
          label="Cellular"
          name="Daily Renewal"
          ing="NMN 500mg · Morning · FDA-cleared Sept 2025"
          body="NAD+ declines from your mid-thirties. NMN restores the cellular energy production that makes everything else work. Take it every morning. This is the foundation."
          price="$79"
          href="/products#cellular"
        />
        <ProductCard
          variant="restore"
          label="Restore"
          name="Resilience"
          ing="Magnesium Glycinate 400mg + Ashwagandha KSM-66"
          body="The number one complaint of 35–50 year olds: stress and poor recovery. Ashwagandha has the strongest human trial data of any adaptogen. This is the recovery layer."
          price="$69"
          href="/products#restore"
        />
        <ProductCard
          variant="sleep"
          label="Sleep"
          name="Overnight Repair"
          ing="Magnesium L-Threonate 144mg + L-Theanine 200mg"
          body="Sleep is the most underrated longevity intervention. This formula is felt within days — not weeks. It drives more word of mouth and subscription retention than anything else we offer."
          price="$65"
          href="/products#sleep"
        />
      </RevealOnScroll>
      <RevealOnScroll className="relative flex flex-col items-stretch justify-between gap-10 overflow-hidden rounded-2xl bg-warm px-6 py-8 lg:flex-row lg:gap-10 lg:px-12 lg:py-12">
        <div
          className="pointer-events-none absolute top-[-60px] right-[140px] size-[200px] rounded-full bg-white/[0.08]"
          aria-hidden
        />
        <div className="relative max-w-xl flex-1">
          <div className="mb-5 inline-block rounded-full bg-ink/15 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.16em] text-ink uppercase">
            Most Popular · Start Here
          </div>
          <div className="mb-3 font-display text-[38px] font-black leading-none tracking-[-0.02em] text-ink">
            The Daily System
          </div>
          <div className="text-[15px] leading-relaxed text-ink/60">
            All three. One protocol. Monthly delivery. This is the default purchase —
            and the only way we genuinely recommend starting. The system works where
            individual products don&apos;t.
          </div>
        </div>
        <div className="relative shrink-0 text-left lg:text-right">
          <div className="font-display text-[56px] font-black leading-none tracking-[-0.03em] text-ink">
            $189
          </div>
          <div className="mt-1 text-[13px] text-ink/50">per month · all three products</div>
          <Link
            href="/landing"
            className="mt-6 inline-block rounded-[5px] bg-ink px-7 py-3.5 font-display text-xs font-bold tracking-[0.1em] text-bg uppercase no-underline transition hover:bg-[#1e1c16]"
          >
            Request Access
          </Link>
        </div>
      </RevealOnScroll>
    </section>
  );
}

function ProductCard({
  variant,
  label,
  name,
  ing,
  body,
  price,
  href,
}: {
  variant: Variant;
  label: string;
  name: string;
  ing: string;
  body: string;
  price: string;
  href: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] px-8 py-10 transition duration-300",
        "after:pointer-events-none after:absolute after:-bottom-8 after:-right-8 after:size-[100px] after:rounded-full after:opacity-[0.06] after:transition after:duration-300 after:content-['']",
        "hover:-translate-y-1.5 hover:bg-white/[0.08] hover:after:scale-150 hover:after:opacity-[0.12]",
        afterGlow[variant],
      )}
    >
      <div className="mb-7 flex items-center gap-2.5">
        <span className={cn("size-2 rounded-full", dotColor[variant])} />
        <span className="text-[10px] font-bold tracking-[0.18em] text-white/40 uppercase">
          {label}
        </span>
      </div>
      <div className="mb-2 font-display text-[30px] font-extrabold tracking-[-0.01em] text-surface">
        {name}
      </div>
      <div className="mb-5 text-xs leading-normal text-white/35">{ing}</div>
      <div className="mb-8 text-sm leading-relaxed text-white/55">{body}</div>
      <div className="flex items-end justify-between border-t border-white/[0.08] pt-6">
        <div className="font-display text-2xl font-extrabold text-surface">
          {price}{" "}
          <small className="ml-1 font-sans text-xs font-normal text-white/30">/ mo</small>
        </div>
        <Link
          href={href}
          className="text-xs font-semibold tracking-[0.08em] text-warm uppercase no-underline transition hover:text-[#c0a880]"
        >
          Details →
        </Link>
      </div>
    </div>
  );
}
