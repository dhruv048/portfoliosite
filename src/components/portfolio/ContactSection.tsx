import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { IconLinkedIn } from "@/components/icons/BrandIcons";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 sm:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-surface-900">
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-coral-500/10 via-transparent to-teal-400/10" />
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/10" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-bl-full bg-gradient-to-bl from-coral-500/10 to-transparent" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-tr-full bg-gradient-to-tr from-teal-400/10 to-transparent" />

          <div className="relative z-10 px-6 py-14 text-center sm:px-16 sm:py-20">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-coral-500" />
              <span className="text-sm font-medium text-surface-200/60">
                Ready to collaborate
              </span>
            </div>
            <h2 className="font-display mb-6 text-4xl tracking-tight text-white sm:text-5xl xl:text-6xl">
              Let&apos;s build something
              <br />
              <span className="text-gradient-coral">extraordinary</span> together
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-surface-200/50">
              Whether you&apos;re looking for AI strategy consulting, data
              analysis, or want to discuss how AI can transform your business —
              I&apos;d love to hear from you.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                id="cta-email-link"
                href={`mailto:${site.email}`}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-coral-500 to-amber-500 px-8 py-4 font-bold text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-coral-500/20"
              >
                <Mail className="h-5 w-5" aria-hidden />
                Send Me an Email
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                id="cta-linkedin-link"
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white/5"
              >
                <IconLinkedIn className="h-5 w-5" aria-hidden />
                Connect on LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
