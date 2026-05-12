import Link from "next/link";
import { Heart, Mail } from "lucide-react";
import {
  IconGitHub,
  IconLinkedIn,
  IconTwitter,
} from "@/components/icons/BrandIcons";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-surface-200 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <span className="inline-flex font-display tracking-tight h-8 w-15 items-center justify-center rounded-lg bg-gradient-to-br from-coral-500 to-amber-400 text-lg font-bold text-white">
              Dhruv
            </span>
          
          </div>
          <div className="flex items-center justify-center gap-6">
            <Link
              id="footer-twitter-link"
              href={site.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-500 transition-colors hover:text-surface-900"
              aria-label="X (Twitter)"
            >
              <IconTwitter className="h-5 w-5" />
            </Link>
            <Link
              id="footer-linkedin-link"
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-500 transition-colors hover:text-surface-900"
              aria-label="LinkedIn"
            >
              <IconLinkedIn className="h-5 w-5" />
            </Link>
            <Link
              id="footer-github-link"
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-500 transition-colors hover:text-surface-900"
              aria-label="GitHub"
            >
              <IconGitHub className="h-5 w-5" />
            </Link>
            <Link
              id="footer-mail-link"
              href={`mailto:${site.email}`}
              className="text-surface-500 transition-colors hover:text-surface-900"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex items-center justify-center gap-1 text-sm text-surface-600 md:justify-end">
            © {new Date().getFullYear()} {site.name}. 
          </div>
        </div>
      </div>
    </footer>
  );
}
