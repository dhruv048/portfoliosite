import { Brain, Code2, TrendingUp, User } from "lucide-react";
import { ArrowRight, BarChart3, Lightbulb, Sparkles, Target } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(28,25,23,0.055) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        {/* Main Grid - Text Left, Card Right */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Text Content - Left Side */}
          <div className="lg:col-span-6">
            {/* Top Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orchid-500/20 to-coral-500/20 px-4 py-2 text-sm font-semibold text-orchid-600">
              <Sparkles className="h-4 w-4" />
              AI Enthusiast • Problem Solver • Builder
            </div>

            {/* Main Heading */}
            <h2 className="font-display mb-6 text-4xl tracking-tight text-surface-900 sm:text-5xl">
              Where <span className="text-gradient-coral">AI expertise</span>{" "}
              meets
              <br />
              business <span className="text-gradient-teal">intelligence</span>
            </h2>
<div className="h-5"></div>

                  <div className="grid overflow-hidden rounded-2xl  bg-surface-50 sm:grid-cols-3">
                    <div className="flex flex-col items-start gap-3 px-4 py-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm shadow-surface-950/5 ring-1 ring-surface-950/10">
                        <Target className="h-4.5 w-4.5 text-coral-600" />
                      </div>
                      <div className="leading-tight">
                        <div className="text-sm font-semibold text-surface-900">
                          Strategize
                        </div>
                         <div className="mt-2 text-xs text-surface-600">
                  Building intelligent solutions with purpose.
                </div>
                      </div>
                    </div>

                    <div className="flex flex-col  items-start gap-3 border-t border-surface-200 px-4 py-4 sm:border-l sm:border-t-0">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm shadow-surface-950/5 ring-1 ring-surface-950/10">
                        <BarChart3 className="h-4.5 w-4.5 text-coral-600" />
                      </div>
                      <div className="leading-tight">
                        <div className="text-sm font-semibold text-surface-900">
                          Analyze
                        </div>
                        <div className="mt-2 text-xs text-surface-600">
                  Aligning AI capabilities with business goals.
                </div>
                       
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-3 border-t border-surface-200 px-4 py-4 sm:border-l sm:border-t-0">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm shadow-surface-950/5 ring-1 ring-surface-950/10">
                        <Lightbulb className="h-4.5 w-4.5 text-coral-600" />
                      </div>
                      <div className="leading-tight">
                        <div className="text-sm font-semibold text-surface-900">
                          Build
                        </div>
                        <div className="mt-2 text-xs text-surface-600">
                  From models to products — end to end.
                </div>
                      </div>
                    </div>
                  </div>

          
          </div>

          {/* Profile Card - Right Side */}
          <div className="relative animate-fade-in delay-500 lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative overflow-hidden rounded-3xl border border-surface-200 bg-white p-8 shadow-xl shadow-surface-950/5">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-gradient-to-bl from-coral-500/10 to-transparent" />
                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-tr-full bg-gradient-to-tr from-teal-400/10 to-transparent" />

                <div className="relative z-10 space-y-6">
                  {/* Avatar Section */}
                  <div className="flex items-center gap-4">
                    <div
                      className="relative shrink-0"
                      title="Dhruv — 3D-style avatar"
                    >
                      <div className="relative h-20 w-20 overflow-hidden rounded-full border-[3px] border-white bg-surface-100 shadow-[0_6px_0_0_#d6d3d1,0_16px_36px_-14px_rgba(244,63,94,0.45),0_6px_14px_-4px_rgba(28,25,23,0.2)]">
                        <Image
                          src="/hero-avatar-3d.png"
                          alt="Dhruv — illustrated 3D emoji-style character (not a photograph)"
                          width={136}
                          height={136}
                          priority
                          sizes="(max-width: 768px) 80px, 80px"
                          className="size-full object-cover object-center"
                        />
                        <div
                          className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-surface-950/10"
                          aria-hidden
                        />
                        <div
                          className="pointer-events-none absolute inset-x-0 top-0 h-[42%] rounded-t-full bg-gradient-to-b from-white/55 to-transparent mix-blend-soft-light"
                          aria-hidden
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-surface-900">
                        Dhruv
                      </div>
                      <div className="text-sm text-surface-600">
                        Software Developer turned Business Officer
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-surface-200" />

                  {/* Core Expertise Tags */}
                  <div className="space-y-3">
                    <div className="text-xs font-bold uppercase tracking-widest text-surface-600">
                      Core Expertise
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Machine Learning",
                        "NLP",
                        "AI Strategy",
                        "Data Analysis",
                        "Business Consulting",
                        "Power BI",
                        "Web Dev",
                      ].map((label) => (
                        <span
                          key={label}
                          className="rounded-full border border-coral-500/25 bg-coral-500/10 px-3 py-1.5 text-xs font-medium text-coral-600"
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-20 rounded-2xl border border-surface-200 bg-surface-50 p-8 sm:p-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-surface-950/5">
                <span className="text-2xl font-bold text-orchid-500">"</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-lg leading-relaxed text-surface-700">
                I help businesses and teams unlock the power of AI through practical solutions, strategic insights, and intelligent systems that drive real outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}