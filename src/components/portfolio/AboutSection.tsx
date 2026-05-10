import { Brain, Code2, TrendingUp, User } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-white/5 bg-surface-900">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-coral-500/15 to-teal-400/15" />
                <div className="relative space-y-4 p-12 text-center">
                  <div className="font-display text-8xl font-extrabold text-white/10">
                    D
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <span className="rounded-full bg-coral-500/10 px-3 py-1 text-xs font-medium text-coral-400">
                      Strategist
                    </span>
                    <span className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-400">
                      Builder
                    </span>
                    <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-400">
                      Thinker
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl border border-amber-400/10 bg-gradient-to-br from-amber-400/20 to-amber-400/0" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <User className="h-4 w-4 text-coral-400" aria-hidden />
              <span className="text-sm font-medium text-surface-200/60">
                About Me
              </span>
            </div>
            <h2 className="font-display mb-6 text-4xl tracking-tight text-white sm:text-5xl">
              Where <span className="text-gradient-coral">AI expertise</span>{" "}
              meets
              <br />
              business <span className="text-gradient-teal">intelligence</span>
            </h2>
            <div className="space-y-4 leading-relaxed text-surface-200/50">
              <p>
                I&apos;m passionate about the intersection of artificial
                intelligence and business strategy. My unique combination of
                technical AI knowledge and business acumen allows me to develop
                solutions that are not just technologically advanced, but also
                strategically sound and commercially viable.
              </p>
              <p>
                From building machine learning models and understanding NLP
                fundamentals to crafting AI roadmaps and conducting ROI
                analysis, I bring a holistic perspective to every project. I
                believe the future belongs to those who can translate AI
                capabilities into tangible business outcomes.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/5 bg-surface-900 p-5">
                <Brain className="mb-3 h-7 w-7 text-orchid-400" aria-hidden />
                <div className="text-sm font-bold text-white">
                  AI-First Thinking
                </div>
                <div className="mt-1 text-xs text-surface-200/40">
                  ML, NLP & Use Case Development
                </div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-surface-900 p-5">
                <TrendingUp
                  className="mb-3 h-7 w-7 text-teal-400"
                  aria-hidden
                />
                <div className="text-sm font-bold text-white">
                  Business Driven
                </div>
                <div className="mt-1 text-xs text-surface-200/40">
                  Strategy, ROI & Stakeholders
                </div>
              </div>
              <div className="rounded-2xl border border-white/5 bg-surface-900 p-5">
                <Code2 className="mb-3 h-7 w-7 text-amber-400" aria-hidden />
                <div className="text-sm font-bold text-white">
                  Full Stack Tools
                </div>
                <div className="mt-1 text-xs text-surface-200/40">
                  Dev, BI, Design & More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
