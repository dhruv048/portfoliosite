import type { Metadata } from "next";
import type { BlogPost } from "@/lib/blogs";
import { blogPath } from "@/lib/blogs";
import { site } from "@/lib/site";

export const SEO_KEYWORDS = [
  "Dhruv Goyal",
  "Dhruv Goyal in AI",
  "Artificial Intelligence",
  "AI Strategy",
  "Business Consulting",
  "Machine Learning",
  "AI Business",
  "Digital Strategy",
  "Fintech",
] as const;

const DEFAULT_OG_IMAGE = "/brand-logo.png";
const DEFAULT_OG_IMAGE_WIDTH = 1200;
const DEFAULT_OG_IMAGE_HEIGHT = 630;

export function absoluteUrl(path = ""): string {
  const base = site.siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  ogImage = DEFAULT_OG_IMAGE,
  ogImageWidth = DEFAULT_OG_IMAGE_WIDTH,
  ogImageHeight = DEFAULT_OG_IMAGE_HEIGHT,
  type = "website",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  type?: "website" | "article";
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage);

  return {
    title,
    description,
    keywords: [...SEO_KEYWORDS],
    authors: [{ name: site.name, url: site.siteUrl }],
    creator: site.name,
    publisher: site.name,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      locale: "en_US",
      url,
      siteName: site.name,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: ogImageWidth,
          height: ogImageHeight,
          alt: `${site.name} — ${site.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export const homeMetadata = buildPageMetadata({
  title: site.title,
  description: site.description,
  path: "/",
});

export const blogsIndexMetadata = buildPageMetadata({
  title: `Blog — ${site.name} | Dhruv Goyal in AI`,
  description:
    "Articles by Dhruv Goyal on AI strategy, agents, prompting, personal branding, and building AI businesses — Dhruv Goyal in AI.",
  path: "/blogs",
});

export function blogPostMetadata(post: BlogPost): Metadata {
  return buildPageMetadata({
    title: `${post.title} | Dhruv Goyal`,
    description: post.excerpt,
    path: blogPath(post.slug),
    ogImage: post.coverImage.src,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    type: "article",
  });
}

type JsonLd = Record<string, unknown>;

export function personJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${absoluteUrl("/")}#person`,
    name: site.name,
    alternateName: ["Dhruv Goyal in AI", "Dhruv in AI"],
    url: absoluteUrl("/"),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    email: site.email,
    jobTitle: site.jobTitle,
    description: site.description,
    knowsAbout: site.knowsAbout,
    sameAs: Object.values(site.social).filter(Boolean),
    worksFor: {
      "@type": "Organization",
      name: site.name,
    },
  };
}

export function webSiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    name: site.name,
    alternateName: "Dhruv Goyal in AI",
    url: absoluteUrl("/"),
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": `${absoluteUrl("/")}#person` },
  };
}

export function webPageJsonLd({
  path = "/",
  name,
  description,
}: {
  path?: string;
  name: string;
  description: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
    about: { "@id": `${absoluteUrl("/")}#person` },
    inLanguage: "en",
  };
}

export function professionalServiceJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${site.name} — AI Strategy & Consulting`,
    url: absoluteUrl("/"),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    description: site.description,
    founder: { "@id": `${absoluteUrl("/")}#person` },
    areaServed: "Worldwide",
    serviceType: [
      "AI strategy consulting",
      "Machine learning",
      "Business intelligence",
      "AI implementation",
    ],
  };
}

export function blogPostingJsonLd(post: BlogPost): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: absoluteUrl(blogPath(post.slug)),
    image: absoluteUrl(post.coverImage.src),
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: {
      "@type": "Person",
      name: site.name,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Person",
      name: site.name,
      url: absoluteUrl("/"),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(blogPath(post.slug)),
    },
    keywords: ["Dhruv Goyal", "Dhruv Goyal in AI", ...SEO_KEYWORDS.slice(2, 6)],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function homeJsonLdGraph(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": [
      personJsonLd(),
      webSiteJsonLd(),
      webPageJsonLd({
        path: "/",
        name: site.title,
        description: site.description,
      }),
      professionalServiceJsonLd(),
    ],
  };
}
