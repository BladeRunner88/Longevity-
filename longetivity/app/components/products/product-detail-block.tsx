import Link from "next/link";
import { RevealOnScroll } from "../shared/reveal-on-scroll";
import type { ProductDetailCopy } from "./product-types";

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l3 3" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

type ProductDetailBlockProps = {
  data: ProductDetailCopy;
  isActive: boolean;
};

export function ProductDetailBlock({ data, isActive }: ProductDetailBlockProps) {
  const priceLines = data.priceNote.split("\n");

  return (
    <div className={isActive ? "block" : "hidden"} id={`detail-${data.slug}`}>
      <div className="grid grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:px-20 lg:py-[100px]">
        <RevealOnScroll>
          <div className="mb-6 flex items-center gap-2.5">
            <div className={`size-2.5 rounded-full ${data.dotColorClass}`} />
            <div className="text-[11px] font-bold tracking-[0.16em] text-ink-dim uppercase">
              {data.label}
            </div>
          </div>
          <h2 className="mb-5 font-display text-[clamp(44px,5.5vw,72px)] font-black leading-[0.97] tracking-[-0.03em] text-ink">
            {data.title}
            <br />
            {data.titleLine2}
          </h2>
          <p className="mb-9 max-w-[440px] text-base leading-[1.7] text-ink-dim">
            {data.tagline}
          </p>
          <div className="mb-10 flex flex-wrap gap-2">
            {data.ingredients.map((ing) => (
              <span
                key={ing}
                className="rounded-full border border-border-subtle bg-cream px-4 py-2 text-xs font-medium text-ink-dim"
              >
                {ing}
              </span>
            ))}
          </div>
          <div className="mb-7 flex flex-wrap items-end gap-6">
            <div className="font-display text-5xl font-black tracking-[-0.02em] text-ink">
              {data.price}
            </div>
            <div className="text-[13px] leading-snug text-ink-faint">
              {priceLines.map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/landing"
              className="inline-block rounded-[5px] bg-ink px-8 py-4 font-display text-xs font-bold tracking-[0.1em] text-bg uppercase no-underline transition hover:bg-[#1e1c16] hover:-translate-y-0.5"
            >
              Request Access
            </Link>
            <a
              href={`#${data.detailId}`}
              className="inline-block rounded-[5px] border border-border-subtle bg-transparent px-6 py-4 font-display text-xs font-bold tracking-[0.1em] text-ink-dim uppercase no-underline transition hover:border-ink hover:text-ink"
            >
              Full details ↓
            </a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="relative">
          <div
            className={`relative flex min-h-[480px] flex-col justify-between overflow-hidden rounded-[20px] px-10 py-14 text-surface ${data.cardBgClass} before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/[0.06] before:to-transparent`}
          >
            <div
              className="pointer-events-none absolute rounded-full opacity-[0.12]"
              style={{
                width: data.circle.size,
                height: data.circle.size,
                background: data.circle.color,
                top: data.circle.top,
                right: data.circle.right,
              }}
            />
            <div className="relative z-[1]">
              <div className="text-[11px] font-bold tracking-[0.18em] text-surface/35 uppercase">
                {data.cardLabel}
              </div>
            </div>
            <div className="relative z-[1]">
              <div className="font-display text-[52px] font-black leading-none tracking-[-0.025em] text-surface">
                {data.cardNameLine2 ? (
                  <>
                    {data.cardName}
                    <br />
                    {data.cardNameLine2}
                  </>
                ) : (
                  data.cardName
                )}
              </div>
              <div className="mt-2 text-[13px] text-white/40">{data.cardSub}</div>
            </div>
            <div className="relative z-[1] inline-flex items-center gap-2 self-start rounded-full bg-white/[0.08] px-[18px] py-2.5 text-xs text-white/65">
              {data.timingIcon === "clock" ? (
                <ClockIcon className="shrink-0" />
              ) : (
                <MoonIcon className="shrink-0" />
              )}
              {data.timingText}
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div id={data.detailId} className="scroll-mt-28">
        <RevealOnScroll className="grid grid-cols-1 gap-6 px-6 pb-16 lg:grid-cols-2 lg:px-20 lg:pb-[100px]">
          {data.details.map((d) => (
            <div
              key={d.title}
              className="rounded-[14px] border border-border-subtle bg-cream p-8"
            >
              <div className="mb-3 font-display text-base font-bold text-ink">{d.title}</div>
              <div className="text-[13.5px] leading-[1.7] text-ink-dim">{d.body}</div>
            </div>
          ))}
        </RevealOnScroll>
      </div>

      <div className="bg-ink px-6 py-16 lg:px-20 lg:py-20">
        <RevealOnScroll className="mb-12">
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-extrabold tracking-[-0.02em] text-surface">
            {data.whoHeading}
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {data.whoCards.map((w) => (
            <RevealOnScroll key={w.title}>
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.05] p-7">
                <div className="mb-3.5 text-2xl">{w.icon}</div>
                <div className="mb-2 font-display text-[15px] font-bold text-surface">
                  {w.title}
                </div>
                <div className="text-[13px] leading-relaxed text-white/45">{w.desc}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
