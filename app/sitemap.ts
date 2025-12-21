import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://kristinafourer.com";

    const res = await fetch(`${baseUrl}/api/posts`, {
        cache: "no-store",
    });

    const posts = await res.json();

    const blogUrls = posts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(
            post.updated_at || post.created_at
        ).toISOString(),
    }));

    return [
        { url: baseUrl, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/contact`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/blog`, lastModified: new Date().toISOString() },
        { url: `${baseUrl}/privacy`, lastModified: new Date().toISOString() },
        ...blogUrls,
    ];
}