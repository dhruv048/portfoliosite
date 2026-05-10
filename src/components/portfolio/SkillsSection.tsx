import type { ComponentType, SVGProps } from "react";
import {
  BarChart3,
  BrainCircuit,
  Briefcase,
  Cpu,
  Database,
  Globe,
  Palette,
  Heart,
  Layers,
  Lightbulb,
  MessageSquare,
  Mic,
  PieChart,
  PenTool,
  Puzzle,
  RefreshCw,
  Wrench,
  Handshake,
  Users,
  Wallet,
  Crown,
} from "lucide-react";

type SkillIcon = ComponentType<SVGProps<SVGSVGElement>>;

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 sm:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-16 text-center sm:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <Layers className="h-4 w-4 text-amber-400" aria-hidden />
            <span className="text-sm font-medium text-surface-200/60">
              Skills & Expertise
            </span>
          </div>
          <h2 className="font-display mb-4 text-4xl tracking-tight text-white sm:text-5xl xl:text-6xl">
            A <span className="text-gradient-coral">multidisciplinary</span>{" "}
            toolkit
          </h2>
          <p className="mx-auto max-w-2xl text-surface-200/50">
            Four pillars of expertise that enable me to approach challenges from
            every angle — technical, strategic, creative, and interpersonal.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* AI & Data */}
          <div className="skill-card group relative cursor-default overflow-hidden rounded-3xl border border-orchid-400/15 bg-surface-900 p-8 hover:border-orchid-400/40 hover:bg-surface-800">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-bl-full bg-gradient-to-bl from-orchid-400/5 to-transparent transition-all duration-500 group-hover:from-orchid-400/10" />
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orchid-400/20 bg-orchid-400/10">
                  <BrainCircuit
                    className="h-7 w-7 text-orchid-400"
                    aria-hidden
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-tight text-white">
                    AI & Data Skills
                  </h3>
                  <p className="text-sm text-orchid-400/60">
                    Intelligence & Analytics
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {(
                  [
                    [Cpu, "Machine Learning"],
                    [MessageSquare, "NLP Basics"],
                    [Lightbulb, "AI Use Case Dev"],
                    [BarChart3, "Data Analysis"],
                  ] as [SkillIcon, string][]
                ).map(([Icon, label]) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-surface-950 px-4 py-3 transition-colors group-hover:border-orchid-400/25"
                  >
                    <Icon className="h-4 w-4 text-orchid-400" aria-hidden />
                    <span className="text-sm text-surface-200/70">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Business */}
          <div className="skill-card group relative cursor-default overflow-hidden rounded-3xl border border-teal-400/15 bg-surface-900 p-8 hover:border-teal-400/40 hover:bg-surface-800">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-bl-full bg-gradient-to-bl from-teal-400/5 to-transparent transition-all duration-500 group-hover:from-teal-400/10" />
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-teal-400/20 bg-teal-400/10">
                  <Briefcase className="h-7 w-7 text-teal-400" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-tight text-white">
                    Business & Management
                  </h3>
                  <p className="text-sm text-teal-400/60">
                    Leadership & Strategy
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {(
                  [
                    [Handshake, "Client Dealing"],
                    [Users, "Team Management"],
                    [Wallet, "Financial Literacy"],
                    [Crown, "Leadership"],
                  ] as [SkillIcon, string][]
                ).map(([Icon, label]) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-surface-950 px-4 py-3 transition-colors group-hover:border-teal-400/25"
                  >
                    <Icon className="h-4 w-4 text-teal-400" aria-hidden />
                    <span className="text-sm text-surface-200/70">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="skill-card group relative cursor-default overflow-hidden rounded-3xl border border-amber-400/15 bg-surface-900 p-8 hover:border-amber-400/40 hover:bg-surface-800">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-bl-full bg-gradient-to-bl from-amber-400/5 to-transparent transition-all duration-500 group-hover:from-amber-400/10" />
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10">
                  <Wrench className="h-7 w-7 text-amber-400" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-tight text-white">
                    Tools & Technologies
                  </h3>
                  <p className="text-sm text-amber-400/60">
                    Platforms & Development
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {(
                  [
                    [PieChart, "Power BI"],
                    [Database, "SQL & Excel"],
                    [Palette, "Figma & Canva"],
                    [Globe, "App & Web Dev"],
                  ] as [SkillIcon, string][]
                ).map(([Icon, label]) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-surface-950 px-4 py-3 transition-colors group-hover:border-amber-400/25"
                  >
                    <Icon className="h-4 w-4 text-amber-400" aria-hidden />
                    <span className="text-sm text-surface-200/70">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skill-card group relative cursor-default overflow-hidden rounded-3xl border border-coral-400/15 bg-surface-900 p-8 hover:border-coral-400/40 hover:bg-surface-800">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-bl-full bg-gradient-to-bl from-coral-400/5 to-transparent transition-all duration-500 group-hover:from-coral-400/10" />
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-coral-400/20 bg-coral-400/10">
                  <Heart className="h-7 w-7 text-coral-400" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-tight text-white">
                    Soft Skills
                  </h3>
                  <p className="text-sm text-coral-400/60">
                    People & Communication
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {(
                  [
                    [Mic, "Communication"],
                    [Puzzle, "Problem-Solving"],
                    [PenTool, "Content Writing"],
                    [RefreshCw, "Adaptability"],
                  ] as [SkillIcon, string][]
                ).map(([Icon, label]) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-surface-950 px-4 py-3 transition-colors group-hover:border-coral-400/25"
                  >
                    <Icon className="h-4 w-4 text-coral-400" aria-hidden />
                    <span className="text-sm text-surface-200/70">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
