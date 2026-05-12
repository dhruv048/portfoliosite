import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { BlogCoverImage } from "@/components/portfolio/BlogCoverImage";
import { site } from "@/lib/site";
import { blogPath, blogPosts } from "@/lib/blogs";

export const metadata: Metadata = {
  title: `Blog — ${site.name}`,
  description: "Articles on AI strategy, analytics, consulting, and delivery.",
};

export default function BlogsPage() {
  return (
    <div className="font-body relative min-h-screen bg-surface-50 text-surface-900">
      <div
        className="noise-overlay pointer-events-none fixed inset-0 z-50"
        aria-hidden
      />

      <SiteNav />

      <main className="pt-28 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <Link
            href="/#blogs"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-surface-600 transition-colors hover:text-surface-900"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to site
          </Link>

          <header className="mb-14 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-surface-200 bg-white px-4 py-2 shadow-sm shadow-surface-950/5">
              <BookOpen className="h-4 w-4 text-coral-500" aria-hidden />
              <span className="text-sm font-medium text-surface-700">
                All posts
              </span>
            </div>
            <h1 className="font-display text-4xl tracking-tight text-surface-900 sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 text-lg text-surface-700">
              Full archive — each post lives on its own URL on this site.
            </p>
          </header>

          <ul className="flex flex-col gap-4">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={blogPath(post.slug)}
                  className="group flex flex-col gap-4 overflow-hidden rounded-2xl border border-surface-200 bg-white p-4 shadow-sm shadow-surface-950/5 transition-all duration-300 hover:border-coral-400/40 hover:shadow-md sm:flex-row sm:items-center sm:gap-6 sm:p-6"
                >
                  <div className="relative aspect-[1200/630] w-full shrink-0 overflow-hidden rounded-xl bg-surface-100 sm:aspect-auto sm:h-auto sm:w-52 sm:min-h-[140px]">
                    <BlogCoverImage
                      src={post.coverImage.src}
                      alt={post.coverImage.alt}
                      sizes="(max-width: 640px) 100vw, 208px"
                      className="h-full w-full object-cover sm:min-h-[140px]"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <time className="text-xs font-medium uppercase tracking-wider text-surface-500">
                      {post.publishedAt}
                    </time>
                    <h2 className="font-display mt-1 text-xl tracking-tight text-surface-900 group-hover:text-coral-600 sm:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-surface-600">
                      {post.excerpt}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1 self-start text-sm font-semibold text-coral-600 sm:self-center">
                    Read
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
