import { MetadataRoute } from "next";
import type { Post } from "@/types/post";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.kristinafourer.com";

  const fetchUrl = process.env.NEXT_PUBLIC_BASE_URL || baseUrl;
  const res = await fetch(`${fetchUrl}/api/posts`, {
    cache: "no-store",
  });

  const posts = await res.json();

  const blogUrls = posts.map((post: Post) => {
    const timestamp = post.updated_at ?? post.created_at;
    const date = timestamp ? new Date(timestamp) : new Date();
    const lastModified = isNaN(date.getTime()) ? new Date() : date;

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: lastModified.toISOString(),
    };
  });

  return [
    { url: baseUrl, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/blog`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/privacy`, lastModified: new Date().toISOString() },
    ...blogUrls,
  ];
}
