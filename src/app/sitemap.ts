import type { MetadataRoute } from "next";
import { blogPath, blogPosts } from "@/lib/blogs";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(blogPath(post.slug)),
    lastModified: post.isoDate ? new Date(post.isoDate) : now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/blogs"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogEntries,
  ];
}
