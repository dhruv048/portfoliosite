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
    <section id="skills" className="relative bg-surface-950 py-16 sm:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-surface-700 to-transparent" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-12 text-center sm:mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-surface-800 bg-surface-900/50 px-4 py-2">
            <Layers className="h-4 w-4 text-amber-500" aria-hidden />
            <span className="text-sm font-medium text-surface-400">
              Skills & Expertise
            </span>
          </div>
          <h2 className="font-display mb-4 text-3xl tracking-tight text-white sm:text-4xl md:text-5xl xl:text-6xl">
            A <span className="text-gradient-coral">multidisciplinary</span> toolkit
          </h2>
          <p className="mx-auto max-w-2xl text-base text-surface-400 sm:text-lg">
            Four pillars of expertise that enable me to approach challenges from
            every angle.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* AI & Data */}
          <div className="group relative cursor-default overflow-hidden rounded-3xl border border-surface-800 bg-surface-900/40 p-5 transition-all duration-300 sm:p-8 hover:border-orchid-400/50 hover:bg-surface-900 focus-within:border-orchid-400/50">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-bl-full bg-orchid-400/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-surface-700 bg-surface-800 transition-colors group-hover:border-orchid-400/30 group-hover:bg-orchid-400/10">
                  <BrainCircuit className="h-8 w-8 text-surface-400 transition-colors group-hover:text-orchid-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-tight text-white sm:text-2xl">AI & Data Skills</h3>
                  <p className="text-base text-surface-500 group-hover:text-orchid-400/70">Intelligence & Analytics</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 min-[420px]:gap-4">
                {(
                  [
                    [Cpu, "Machine Learning"],
                    [MessageSquare, "NLP Basics"],
                    [Lightbulb, "AI Use Case Dev"],
                    [BarChart3, "Data Analysis"],
                  ] as [SkillIcon, string][]
                ).map(([Icon, label]) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl border border-surface-800 bg-surface-950/50 px-4 py-3 transition-all sm:px-5 sm:py-4 group-hover:border-orchid-400/20">
                    <Icon className="h-5 w-5 text-surface-500 transition-colors group-hover:text-orchid-400" />
                    <span className="text-base font-medium text-surface-300 group-hover:text-white">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Business */}
          <div className="group relative cursor-default overflow-hidden rounded-3xl border border-surface-800 bg-surface-900/40 p-5 transition-all duration-300 sm:p-8 hover:border-teal-400/50 hover:bg-surface-900 focus-within:border-teal-400/50">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-bl-full bg-teal-400/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-surface-700 bg-surface-800 transition-colors group-hover:border-teal-400/30 group-hover:bg-teal-400/10">
                  <Briefcase className="h-8 w-8 text-surface-400 transition-colors group-hover:text-teal-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-tight text-white sm:text-2xl">Business & Strategy</h3>
                  <p className="text-base text-surface-500 group-hover:text-teal-400/70">Leadership & Strategy</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 min-[420px]:gap-4">
                {(
                  [
                    [Handshake, "Client Dealing"],
                    [Users, "Team Management"],
                    [Wallet, "Finance"],
                    [Crown, "Leadership"],
                  ] as [SkillIcon, string][]
                ).map(([Icon, label]) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl border border-surface-800 bg-surface-950/50 px-4 py-3 transition-all sm:px-5 sm:py-4 group-hover:border-teal-400/20">
                    <Icon className="h-5 w-5 text-surface-500 transition-colors group-hover:text-teal-400" />
                    <span className="text-base font-medium text-surface-300 group-hover:text-white">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools (Amber Accent) - Follows same pattern */}
          <div className="group relative cursor-default overflow-hidden rounded-3xl border border-surface-800 bg-surface-900/40 p-5 transition-all duration-300 sm:p-8 hover:border-amber-400/50 hover:bg-surface-900 focus-within:border-amber-400/50">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-bl-full bg-amber-400/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-surface-700 bg-surface-800 transition-colors group-hover:border-amber-400/30 group-hover:bg-amber-400/10">
                  <Wrench className="h-8 w-8 text-surface-400 transition-colors group-hover:text-amber-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-tight text-white sm:text-2xl">Tools & Tech</h3>
                  <p className="text-base text-surface-500 group-hover:text-amber-400/70">Platforms & Development</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 min-[420px]:gap-4">
                {(
                  [
                    [PieChart, "Power BI"],
                    [Database, "SQL & Excel"],
                    [Palette, "Figma"],
                    [Globe, "Web Dev"],
                  ] as [SkillIcon, string][]
                ).map(([Icon, label]) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl border border-surface-800 bg-surface-950/50 px-4 py-3 transition-all sm:px-5 sm:py-4 group-hover:border-amber-400/20">
                    <Icon className="h-5 w-5 text-surface-500 transition-colors group-hover:text-amber-400" />
                    <span className="text-base font-medium text-surface-300 group-hover:text-white">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills (Coral Accent) */}
          <div className="group relative cursor-default overflow-hidden rounded-3xl border border-surface-800 bg-surface-900/40 p-5 transition-all duration-300 sm:p-8 hover:border-coral-400/50 hover:bg-surface-900 focus-within:border-coral-400/50">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-bl-full bg-coral-400/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-surface-700 bg-surface-800 transition-colors group-hover:border-coral-400/30 group-hover:bg-coral-400/10">
                  <Heart className="h-8 w-8 text-surface-400 transition-colors group-hover:text-coral-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-tight text-white sm:text-2xl">Soft Skills</h3>
                  <p className="text-base text-surface-500 group-hover:text-coral-400/70">People & Communication</p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 min-[420px]:gap-4">
                {(
                  [
                    [Mic, "Communication"],
                    [Puzzle, "Problem-Solving"],
                    [PenTool, "Writing"],
                    [RefreshCw, "Adaptability"],
                  ] as [SkillIcon, string][]
                ).map(([Icon, label]) => (
                  <div key={label} className="flex items-center gap-3 rounded-xl border border-surface-800 bg-surface-950/50 px-4 py-3 transition-all sm:px-5 sm:py-4 group-hover:border-coral-400/20">
                    <Icon className="h-5 w-5 text-surface-500 transition-colors group-hover:text-coral-400" />
                    <span className="text-base font-medium text-surface-300 group-hover:text-white">{label}</span>
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