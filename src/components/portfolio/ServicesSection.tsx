import {
  Brain,
  Code,
  LineChart,
  Rocket,
  Target,
} from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 sm:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-coral-500/5 via-transparent to-teal-400/5 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-16 text-center sm:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-surface-200 bg-white px-4 py-2 shadow-sm shadow-surface-950/5">
            <Rocket className="h-4 w-4 text-teal-500" aria-hidden />
            <span className="text-sm font-medium text-surface-700">
              What I Offer
            </span>
          </div>
          <h2 className="font-display mb-4 text-4xl tracking-tight text-surface-900 sm:text-5xl xl:text-6xl">
            Services & <span className="text-gradient-teal">Offerings</span>
          </h2>
          <p className="mx-auto max-w-2xl text-surface-700">
            End-to-end support from strategy to execution — whether you need an
            AI roadmap, data insights, or a full digital solution.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* AI Strategy */}
          <div className="service-card group relative cursor-default overflow-hidden rounded-3xl border border-surface-200 bg-white p-8 text-center shadow-lg shadow-surface-950/5 hover:border-orchid-400/45 hover:bg-surface-50">
            <div className="absolute inset-0 bg-gradient-to-b from-orchid-400/0 to-orchid-400/0 transition-all duration-500 group-hover:from-orchid-400/5 group-hover:to-transparent" />
            <div className="relative z-10">
              <div className="service-icon mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-orchid-400/20 bg-orchid-400/10">
                <Brain className="h-9 w-9 text-orchid-400" aria-hidden />
              </div>
              <h3 className="font-display mb-3 text-lg tracking-tight text-surface-900">
                AI Strategy & Consulting
              </h3>
              <p className="text-sm leading-relaxed text-surface-600">
                Develop comprehensive AI roadmaps, evaluate use cases, and align
                AI initiatives with your business objectives for maximum ROI.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {["Roadmap", "ROI Analysis", "Use Cases"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-orchid-400/10 px-2 py-1 text-[10px] text-orchid-400/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Business */}
          <div className="service-card group relative cursor-default overflow-hidden rounded-3xl border border-surface-200 bg-white p-8 text-center shadow-lg shadow-surface-950/5 hover:border-teal-400/45 hover:bg-surface-50">
            <div className="absolute inset-0 bg-gradient-to-b from-teal-400/0 to-teal-400/0 transition-all duration-500 group-hover:from-teal-400/5 group-hover:to-transparent" />
            <div className="relative z-10">
              <div className="service-icon mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-400/10">
                <Target className="h-9 w-9 text-teal-400" aria-hidden />
              </div>
              <h3 className="font-display mb-3 text-lg tracking-tight text-surface-900">
                Business Consulting
              </h3>
              <p className="text-sm leading-relaxed text-surface-600">
                Strategic advice on market research, competitive analysis,
                stakeholder communication, and building business cases that win.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {["Research", "Strategy", "Growth"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-teal-400/10 px-2 py-1 text-[10px] text-teal-400/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Data */}
          <div className="service-card group relative cursor-default overflow-hidden rounded-3xl border border-surface-200 bg-white p-8 text-center shadow-lg shadow-surface-950/5 hover:border-amber-400/45 hover:bg-surface-50">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-400/0 to-amber-400/0 transition-all duration-500 group-hover:from-amber-400/5 group-hover:to-transparent" />
            <div className="relative z-10">
              <div className="service-icon mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10">
                <LineChart className="h-9 w-9 text-amber-400" aria-hidden />
              </div>
              <h3 className="font-display mb-3 text-lg tracking-tight text-surface-900">
                Data Analysis & BI
              </h3>
              <p className="text-sm leading-relaxed text-surface-600">
                Turn raw data into actionable insights using Power BI, SQL, and
                Excel. Beautiful dashboards and reports that tell a story.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {["Power BI", "SQL", "Dashboards"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-amber-400/10 px-2 py-1 text-[10px] text-amber-400/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Web Dev */}
          <div className="service-card group relative cursor-default overflow-hidden rounded-3xl border border-surface-200 bg-white p-8 text-center shadow-lg shadow-surface-950/5 hover:border-coral-400/45 hover:bg-surface-50">
            <div className="absolute inset-0 bg-gradient-to-b from-coral-400/0 to-coral-400/0 transition-all duration-500 group-hover:from-coral-400/5 group-hover:to-transparent" />
            <div className="relative z-10">
              <div className="service-icon mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-coral-400/20 bg-coral-400/10">
                <Code className="h-9 w-9 text-coral-400" aria-hidden />
              </div>
              <h3 className="font-display mb-3 text-lg tracking-tight text-surface-900">
                Web & App Development
              </h3>
              <p className="text-sm leading-relaxed text-surface-600">
                Design and develop modern applications with integrated AI
                chatbots, beautiful UI/UX using Figma, and full-stack
                capabilities.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {["Full Stack", "AI Chatbots", "UI/UX"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-coral-400/10 px-2 py-1 text-[10px] text-coral-400/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
