const items = [
  "The quiz is the product",
  "Longevity as a system",
  "NMN 500mg · FDA cleared Sept 2025",
  "Personalised protocol · monthly delivery",
  "76%+ gross margin · zero inventory risk",
  "Wave 1 · 200 members only",
];

export function LandingMarquee() {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden bg-ink py-4 text-cream">
      <div className="flex w-max animate-marquee-slow gap-0">
        {doubled.map((text, i) => (
          <div
            key={`${text}-${i}`}
            className="flex items-center gap-8 whitespace-nowrap px-10 text-xs font-medium tracking-[0.12em] uppercase"
          >
            {text}{" "}
            <span
              className="size-1 shrink-0 rounded-full bg-warm"
              aria-hidden
            />
          </div>
        ))}
      </div>
    </div>
  );
}
