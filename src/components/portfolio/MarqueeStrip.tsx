const ITEMS = [
  "Machine Learning",
  "Business Strategy",
  "Data Analysis",
  "NLP",
  "Power BI",
  "Leadership",
  "Web Development",
  "AI Strategy",
] as const;

const SEP = [
  "text-coral-500/30",
  "text-teal-400/30",
  "text-amber-400/30",
  "text-orchid-400/30",
] as const;

export function MarqueeStrip() {
  const row = (
    <>
      {ITEMS.map((text, i) => (
        <span key={`${text}-${i}`} className="flex items-center">
          <span className="mx-4 text-xs font-bold uppercase tracking-widest text-surface-700/35 sm:mx-8 sm:text-sm">
            {text}
          </span>
          <span className={SEP[i % SEP.length]}>✦</span>
        </span>
      ))}
    </>
  );

  return (
    <div className="relative z-10 overflow-hidden border-y border-surface-200 bg-surface-100 py-4 sm:py-6">
      <div className="animate-marquee flex w-max items-center whitespace-nowrap">
        {row}
        {row}
      </div>
    </div>
  );
}
