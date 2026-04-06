"use client";

import { cn } from "@/lib/utils";
import type { ProductTab } from "./product-types";

const TABS: { id: ProductTab; label: string }[] = [
  { id: "cellular", label: "CELLULAR" },
  { id: "restore", label: "RESTORE" },
  { id: "sleep", label: "SLEEP" },
  { id: "system", label: "Daily System" },
];

type ProductsHeroProps = {
  activeTab: ProductTab;
  onSelectTab: (id: ProductTab) => void;
};

export function ProductsHero({ activeTab, onSelectTab }: ProductsHeroProps) {
  return (
    <section className="relative overflow-hidden bg-cream px-6 py-28 text-center text-ink lg:px-20 lg:pt-40 lg:pb-24">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 size-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/[0.06]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/[0.06] opacity-50"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/[0.06] opacity-30"
        aria-hidden
      />

      <div className="relative z-[2]">
        <p className="mb-6 text-[11px] font-medium tracking-[0.16em] text-warm uppercase">
          The Daily System
        </p>
        <h1 className="mb-7 font-display text-[clamp(52px,7vw,96px)] font-black leading-[0.95] tracking-[-0.03em] text-ink">
          Three formulas.
          <br />
          One protocol.
        </h1>
        <p className="mx-auto mb-14 max-w-[520px] text-[17px] leading-relaxed text-ink-dim">
          Never presented individually. Always experienced as a system. This is how the
          protocol works — because the compounds compound.
        </p>
        <div className="inline-flex gap-0.5 rounded-lg border border-border-subtle bg-surface p-1">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => onSelectTab(t.id)}
              className={cn(
                "rounded-md px-6 py-2.5 font-display text-xs font-bold tracking-[0.1em] uppercase transition-colors",
                activeTab === t.id
                  ? "bg-ink text-bg"
                  : "bg-transparent text-ink-dim hover:text-ink",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
