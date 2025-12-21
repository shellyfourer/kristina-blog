import Newsletter from "@/components/Newsletter";

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;

    return {
        title: "Kristina Fourer — The Soft Lock-In",
        alternates: {
            canonical: `https://www.kristinafourer.com/blog/${slug}`,
        },
    };
}
export default async function BlogPostPage(
    context: { params: Promise<{ slug: string }> }
) {
    const { slug } = await context.params;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/posts/${slug}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return (
            <main className="px-6 py-12 bg-beige text-greenBrand font-noto">
                <h1 className="text-center text-2xl font-medium">
                    Post not found.
                </h1>
            </main>
        );
    }

    const post = await res.json();

    return (
        <main className="bg-beige text-greenBrand font-noto">
            <Newsletter />

            {/* TITLE */}
            <section className="px-6 pt-12 pb-8">
                <div className="max-w-2xl mx-auto text-center space-y-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
                        {post.title}
                    </h1>

                    <div className="w-12 h-[1px] bg-goldBrand mx-auto" />

                    {post.publish_at && (
                        <p className="text-sm text-greenBrand/60">
                            Kristina Fourer ·{" "}
                            {new Date(post.publish_at).toLocaleDateString("en-US")}
                        </p>
                    )}
                </div>
            </section>

            {/* CONTENT BLOCKS */}
            {Array.isArray(post.content_blocks) &&
                post.content_blocks.map((block: any, index: number) => {

                    /* PURE TEXT BLOCK*/
                    if (block.type === "center") {
                        return (
                            <section
                                key={index}
                                className="px-6 py-10"
                            >
                                <div className="max-w-3xl mx-auto space-y-6">

                                    {block.title && (
                                        <>
                                            <h2 className="text-xl sm:text-2xl font-medium tracking-wide text-center">
                                                {block.title}
                                            </h2>
                                            <div className="w-12 h-[1px] bg-goldBrand mx-auto" />
                                        </>
                                    )}

                                    {Array.isArray(block.text) &&
                                        block.text.map((p: string, i: number) => (
                                            <p
                                                key={i}
                                                className="text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed text-left"
                                            >
                                                {p}
                                            </p>
                                        ))}
                                </div>
                            </section>
                        );
                    }

                    /* IMAGE + TEXT BLOCK */
                    const isLeft = block.position === "left";

                    return (
                        <section
                            key={index}
                            className="px-6 py-12"
                        >
                            <div
                                className={`max-w-6xl mx-auto flex flex-col gap-10 lg:gap-16 items-center
                  ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                            >

                                {/* TEXT */}
                                <div className="lg:w-1/2 max-w-xl space-y-6 text-left">
                                    {block.title && (
                                        <>
                                            <h2 className="text-xl sm:text-2xl font-medium tracking-wide">
                                                {block.title}
                                            </h2>
                                            <div className="w-12 h-[1px] bg-goldBrand" />
                                        </>
                                    )}

                                    {Array.isArray(block.text) &&
                                        block.text.map((p: string, i: number) => (
                                            <p
                                                key={i}
                                                className="text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed"
                                            >
                                                {p}
                                            </p>
                                        ))}
                                </div>

                                {/* IMAGE */}
                                {block.image && (
                                    <div className="lg:w-1/2 relative overflow-hidden rounded-xl shadow-sm h-[280px] sm:h-[360px] lg:h-[460px]">
                                        <img
                                            src={block.image}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-beige to-transparent" />
                                    </div>
                                )}
                            </div>
                        </section>
                    );
                })}

            <Newsletter />
        </main>
    );
}