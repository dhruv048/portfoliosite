import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { BlogCoverImage } from "@/components/portfolio/BlogCoverImage";
import { blogPath, getFeaturedBlogPosts } from "@/lib/blogs";

export function BlogsSection() {
  const featured = getFeaturedBlogPosts();

  return (
    <section id="blogs" className="relative py-16 sm:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[480px] w-[480px] -translate-y-1/2 rounded-full bg-gradient-to-bl from-coral-500/5 via-transparent to-orchid-400/5 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-16 flex flex-col gap-8 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl text-center sm:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-surface-200 bg-white px-4 py-2 shadow-sm shadow-surface-950/5">
              <BookOpen className="h-4 w-4 text-coral-500" aria-hidden />
              <span className="text-sm font-medium text-surface-700">
                Writing
              </span>
            </div>
            <h2 className="font-display mb-4 text-3xl tracking-tight text-surface-900 sm:text-4xl md:text-5xl xl:text-6xl">
              I{" "}
              <span className="text-gradient-coral">
                Share,
              </span>
              {" "} We{" "}
              <span className="text-gradient-coral bg-clip-text text-transparent">
                Grow
              </span>
            </h2>
            <p className="text-surface-700">
              Articles by <strong>Dhruv Goyal</strong> on AI strategy, agents, and
              building in public — explore <strong>Dhruv Goyal in AI</strong> through
              practical guides.
            </p>
          </div>
          <Link
            href="/blogs"
            className="inline-flex shrink-0 items-center justify-center self-center rounded-full border border-surface-200 bg-white px-5 py-2.5 text-sm font-semibold text-surface-800 shadow-sm shadow-surface-950/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-surface-300 hover:shadow-md sm:self-auto"
          >
            All posts
          </Link>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {featured.map((post) => (
            <li key={post.slug}>
              <Link
                href={blogPath(post.slug)}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-surface-200 bg-white shadow-lg shadow-surface-950/5 transition-all duration-300 hover:-translate-y-1 hover:border-coral-400/35 hover:shadow-xl hover:shadow-coral-500/10"
              >
                <div className="relative aspect-[1200/630] w-full overflow-hidden bg-surface-100">
                  <BlogCoverImage
                    src={post.coverImage.src}
                    alt={post.coverImage.alt}
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                <time className="text-xs font-medium uppercase tracking-wider text-surface-500">
                  {post.publishedAt}
                </time>
                <h3 className="font-display mt-3 flex-1 text-lg leading-snug tracking-tight text-surface-900 group-hover:text-coral-600">
                  {post.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-surface-600">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-coral-600">
                  Read
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
