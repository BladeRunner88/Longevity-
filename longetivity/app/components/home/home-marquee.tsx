const items = [
  "NMN 500mg · FDA cleared September 2025",
  "Magnesium L-Threonate · Ashwagandha KSM-66",
  "Personalised protocol · three minutes",
  "Zero inventory risk · Supliful fulfilled",
  "No discounts. Ever.",
  "The quiz is the product",
];

export function HomeMarquee() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden bg-ink py-[15px]">
      <div className="flex w-max animate-marquee gap-0">
        {doubled.map((text, i) => (
          <div
            key={`${text}-${i}`}
            className="flex items-center gap-6 whitespace-nowrap px-8 text-[11px] font-medium tracking-[0.14em] text-surface/50 uppercase"
          >
            {text}{" "}
            <span className="size-1 shrink-0 rounded-full bg-warm" aria-hidden />
          </div>
        ))}
      </div>
    </div>
  );
}
