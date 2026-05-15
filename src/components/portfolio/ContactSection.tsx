import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { IconLinkedIn } from "@/components/icons/BrandIcons";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-16 sm:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-surface-200 bg-white shadow-xl shadow-surface-950/5 sm:rounded-[2rem]">
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-coral-500/14 via-transparent to-teal-400/14" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-bl-full bg-gradient-to-bl from-coral-500/10 to-transparent" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-tr-full bg-gradient-to-tr from-teal-400/10 to-transparent" />

          <div className="relative z-10 px-5 py-10 text-center sm:px-16 sm:py-20">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-surface-200 bg-surface-50 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-coral-500" />
              <span className="text-sm font-medium text-surface-700">
                Ready to collaborate
              </span>
            </div>
            <h2 className="font-display mb-6 text-3xl tracking-tight text-surface-900 sm:text-4xl md:text-5xl xl:text-6xl">
              Let&apos;s build something
              <br />
              <span className="text-gradient-coral">extraordinary</span> together
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base text-surface-700 sm:mb-10 sm:text-lg">
              Work with <strong>Dhruv Goyal</strong> on AI strategy, data analysis,
              or implementation. Reach out to discuss how{" "}
              <strong>Dhruv Goyal in AI</strong> can help your team ship smarter.
            </p>
            <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                id="cta-email-link"
                href={`mailto:${site.email}`}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-coral-500 to-amber-500 px-6 py-3.5 text-sm font-bold text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-coral-500/20 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
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
                className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-surface-300 px-6 py-3.5 text-sm font-bold text-surface-900 transition-all duration-300 hover:bg-surface-50 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
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
