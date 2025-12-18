import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://kristinafourer.com";

    //Fetch blog posts
    const res = await fetch(`${baseUrl}/api/posts`, {
        cache: "no-store",
    });

    const posts = await res.json();

    const blogUrls = posts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updated_at || post.created_at,
    }));

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/about`, lastModified: new Date() },
        { url: `${baseUrl}/contact`, lastModified: new Date() },
        { url: `${baseUrl}/blog`, lastModified: new Date() },
        ...blogUrls,
    ];
}