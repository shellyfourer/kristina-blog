import MediaCard from "@/components/MediaCard";
import Newsletter from "@/components/Newsletter";

export default async function BlogPage() {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/posts`, {
        cache: "no-store",
    });

    const posts = await res.json();

    return (
        <main>
            <Newsletter/>
            <div className="px-6 py-12  max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {Array.isArray(posts) && posts.length > 0 ? (
                    posts.map((post: any) => (
                        <MediaCard key={post.post_id} post={post} />
                    ))
                ) : (
                    <p>No posts found</p>
                )}
            </div>
            <Newsletter/>
        </main>
    );
}