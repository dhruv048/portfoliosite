import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const LOGO_WIDTH = 944;
const LOGO_HEIGHT = 529;

export function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-surface-200/80 bg-surface-50/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <Link
          id="nav-logo-link"
          href="/#hero"
          className="flex shrink-0 items-center"
          aria-label={`${site.name} — home`}
        >
          <span className="inline-flex rounded-lg  p-1.5">
            <Image
              src="/brand-logo.png"
              alt="Dhruv Goyal logo"
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
              className="h-9 w-auto sm:h-12"
              priority
            />
          </span>
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:gap-8">
          <Link
            id="nav-about-link"
            href="/#about"
            className="text-sm font-medium text-surface-600 transition-colors duration-300 hover:text-surface-900"
          >
            About
          </Link>
          <Link
            id="nav-skills-link"
            href="/#skills"
            className="text-sm font-medium text-surface-600 transition-colors duration-300 hover:text-surface-900"
          >
            Skills
          </Link>
          <Link
            id="nav-services-link"
            href="/#services"
            className="text-sm font-medium text-surface-600 transition-colors duration-300 hover:text-surface-900"
          >
            Services
          </Link>
          <Link
            id="nav-blogs-link"
            href="/blogs"
            className="text-sm font-medium text-surface-600 transition-colors duration-300 hover:text-surface-900"
          >
            Blogs
          </Link>
          <Link
            id="nav-contact-link"
            href="/#contact"
            className="text-sm font-medium text-surface-600 transition-colors duration-300 hover:text-surface-900"
          >
            Contact
          </Link>
          <Link
            id="nav-cta-link"
            href="/#contact"
            className="ml-0 inline-flex rounded-full bg-gradient-to-r from-coral-500 to-amber-500 px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-coral-500/25 sm:ml-2"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </nav>
  );
}
