import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import {
  IconGitHub,
  IconLinkedIn,
  IconTwitter,
} from "@/components/icons/BrandIcons";
import { site } from "@/lib/site";

const LOGO_WIDTH = 944;
const LOGO_HEIGHT = 529;

export function SiteFooter() {
  return (
    <footer className="border-t border-surface-200 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <Link
              href="/#hero"
              className="inline-flex rounded-lg p-1.5 "
              aria-label={`${site.name} — home`}
            >
              <Image
                src="/brand-logo.png"
                alt="Dhruv Goyal logo"
                width={LOGO_WIDTH}
                height={LOGO_HEIGHT}
                className="h-9 w-auto sm:h-12"
              />
            </Link>
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
