import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteFooter } from "@/components/portfolio/SiteFooter";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { BlogCoverImage } from "@/components/portfolio/BlogCoverImage";
import { blogPath, blogPosts, getBlogPostBySlug } from "@/lib/blogs";
import {
  blogPostMetadata,
  blogPostingJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: `Not found — ${site.name}` };
  }
  return blogPostMetadata(post);
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      blogPostingJsonLd(post),
      breadcrumbJsonLd([
        { name: site.name, path: "/" },
        { name: "Blog", path: "/blogs" },
        { name: post.title, path: blogPath(post.slug) },
      ]),
    ],
  };

  return (
    <div className="font-body relative min-h-screen bg-surface-50 text-surface-900">
      <JsonLd data={jsonLd} />
      <div
        className="noise-overlay pointer-events-none fixed inset-0 z-50"
        aria-hidden
      />

      <SiteNav />

      <main className="pt-20 pb-16 sm:pt-24 sm:pb-28">
        <article
          className="mx-auto max-w-3xl px-4 sm:px-8"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          <Link
            href="/blogs"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-surface-600 transition-colors hover:text-surface-900"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All posts by Dhruv Goyal
          </Link>

          <header className="mb-12 border-b border-surface-200 pb-10">
            <time
              dateTime={post.isoDate}
              className="text-xs font-medium uppercase tracking-wider text-surface-500"
              itemProp="datePublished"
            >
              {post.publishedAt}
            </time>
            <h1
              className="font-display mt-4 text-4xl tracking-tight text-surface-900 sm:text-5xl"
              itemProp="headline"
            >
              {post.title}
            </h1>
            <p
              className="mt-4 text-lg leading-relaxed text-surface-700"
              itemProp="description"
            >
              {post.excerpt}
            </p>
            <meta itemProp="author" content={site.name} />
          </header>

          <figure className="mb-12 overflow-hidden rounded-2xl border border-surface-200 bg-surface-100 shadow-sm shadow-surface-950/5">
            <BlogCoverImage
              src={post.coverImage.src}
              alt={post.coverImage.alt}
              sizes="(max-width: 768px) 100vw, 768px"
              className="w-full object-cover"
              priority
            />
          </figure>

          <div
            className="space-y-6 text-base leading-relaxed text-surface-800"
            itemProp="articleBody"
          >
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
