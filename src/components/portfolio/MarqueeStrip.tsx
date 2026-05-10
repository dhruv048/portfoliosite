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
          <span className="mx-8 text-sm font-bold uppercase tracking-widest text-surface-200/20">
            {text}
          </span>
          <span className={SEP[i % SEP.length]}>✦</span>
        </span>
      ))}
    </>
  );

  return (
    <div className="relative z-10 overflow-hidden border-y border-white/5 bg-surface-950 py-6">
      <div className="animate-marquee flex w-max items-center whitespace-nowrap">
        {row}
        {row}
      </div>
    </div>
  );
}
