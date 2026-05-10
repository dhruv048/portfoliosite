import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ParallaxStarsBackground } from "@/components/parallax/ParallaxStarsBackground";

export function Hero() {
  return (
    <ParallaxStarsBackground showTitle={false} speed={1.15}>
      <section
        id="hero"
        className="relative flex min-h-screen items-center overflow-hidden pt-28 sm:pt-20"
      >
      <div className="hero-gradient pointer-events-none absolute inset-0 z-0 opacity-[0.55]" />

      <div className="animate-float absolute top-32 right-12 h-48 w-48 rounded-full border border-coral-500/10 sm:right-48" />
      <div className="animate-float2 absolute top-56 right-20 h-36 w-36 rounded-full border border-amber-400/10 sm:right-64" />
      <div className="animate-float2 absolute bottom-32 left-10 h-24 w-24 rotate-12 rounded-2xl border border-teal-400/10 bg-gradient-to-br from-teal-400/5 to-teal-400/0 sm:left-20" />
      <div className="animate-pulse-glow absolute top-40 left-[25%] h-3 w-3 rounded-full bg-coral-500/40 sm:left-[30%]" />
      <div
        className="animate-pulse-glow absolute bottom-48 right-[30%] h-2 w-2 rounded-full bg-amber-400/50"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="animate-pulse-glow absolute top-[60%] left-[10%] h-2 w-2 rounded-full bg-teal-400/40 sm:left-[15%]"
        style={{ animationDelay: "2s" }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="animate-slide-up">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-teal-400" />
                <span className="text-sm font-medium text-surface-200/80">
                  Available for consulting & collaboration
                </span>
              </div>
            </div>

            <h1 className="animate-slide-up delay-100 font-display text-5xl leading-[0.9] tracking-tight text-white sm:text-6xl xl:text-8xl">
              AI Strategy
              <br />
              <span className="text-gradient-coral">meets</span> Business
              <br />
              <span className="text-gradient-teal">Impact</span>
              <span className="text-coral-500">.</span>
            </h1>

            <p className="animate-slide-up delay-200 mb-10 mt-6 max-w-lg text-base leading-relaxed text-surface-200/60 sm:text-lg">
              I&apos;m <span className="font-bold text-white">Dhruv</span> — an
              AI strategist and business consultant who transforms complex
              technology into real-world results. From machine learning to
              stakeholder management, I bridge the gap between innovation and
              execution.
            </p>

            <div className="animate-slide-up delay-300 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Link
                id="hero-cta-link"
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-coral-500 to-amber-500 px-8 py-4 font-bold text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-coral-500/20"
              >
                Get in Touch
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                id="hero-work-link"
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white/5"
              >
                View My Work
              </Link>
            </div>

            <div className="animate-slide-up delay-400 mt-12 flex flex-wrap items-center gap-8 sm:gap-12">
              <div>
                <div className="font-display text-3xl font-extrabold text-white">
                  20+
                </div>
                <div className="mt-1 text-sm text-surface-200/50">
                  Skills Mastered
                </div>
              </div>
              <div className="hidden h-10 w-px bg-white/10 sm:block" />
              <div>
                <div className="font-display text-3xl font-extrabold text-white">
                  4
                </div>
                <div className="mt-1 text-sm text-surface-200/50">
                  Core Domains
                </div>
              </div>
              <div className="hidden h-10 w-px bg-white/10 sm:block" />
              <div>
                <div className="font-display text-3xl font-extrabold text-white">
                  AI+Biz
                </div>
                <div className="mt-1 text-sm text-surface-200/50">
                  Unique Blend
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in delay-500 lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface-900 p-8">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-gradient-to-bl from-coral-500/10 to-transparent" />
                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-tr-full bg-gradient-to-tr from-teal-400/10 to-transparent" />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="font-display flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-coral-500 to-amber-400 text-2xl font-extrabold text-white shadow-lg shadow-coral-500/20">
                      D
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">Dhruv</div>
                      <div className="text-sm text-surface-200/50">
                        AI Strategist & Consultant
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-white/5" />

                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-widest text-surface-200/40">
                      Core Expertise
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        ["Machine Learning", "orchid"],
                        ["NLP", "teal"],
                        ["AI Strategy", "coral"],
                        ["Data Analysis", "amber"],
                        ["Business Consulting", "teal"],
                        ["Power BI", "orchid"],
                        ["Web Dev", "coral"],
                      ].map(([label, tone]) => (
                        <span
                          key={label}
                          className={
                            tone === "orchid"
                              ? "rounded-full border border-orchid-400/20 bg-orchid-400/10 px-3 py-1.5 text-xs font-medium text-orchid-400"
                              : tone === "teal"
                                ? "rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1.5 text-xs font-medium text-teal-400"
                                : tone === "coral"
                                  ? "rounded-full border border-coral-400/20 bg-coral-400/10 px-3 py-1.5 text-xs font-medium text-coral-400"
                                  : "rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-400"
                          }
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-white/5" />

                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-widest text-surface-200/40">
                      Proficiency
                    </div>
                    <div className="space-y-2.5">
                      {[
                        ["AI & Data", 90, "from-orchid-400 to-coral-400"],
                        ["Business", 85, "from-teal-400 to-teal-500"],
                        ["Tools", 88, "from-amber-400 to-amber-500"],
                        ["Soft Skills", 92, "from-coral-400 to-coral-500"],
                      ].map(([label, pct, gradient]) => (
                        <div key={label} className="flex items-center gap-3">
                          <span className="w-20 text-xs text-surface-200/60">
                            {label}
                          </span>
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/5">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-float absolute -right-2 -top-4 z-20 flex items-center gap-1 rounded-full bg-teal-400 px-4 py-2 text-xs font-bold text-surface-950 shadow-lg shadow-teal-400/20 sm:-right-4">
                <Sparkles className="h-3.5 w-3.5" />
                AI Enthusiast
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[15]">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          aria-hidden
        >
          <path
            d="M0 80V40C240 10 480 0 720 10C960 20 1200 50 1440 40V80H0Z"
            fill="rgb(6,5,4)"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </section>
    </ParallaxStarsBackground>
  );
}
