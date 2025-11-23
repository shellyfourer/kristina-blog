import Newsletter from "@/components/Newsletter";
export default async function BlogPostPage(context: { params: Promise<{ slug: string }> }) {
    const { slug } = await context.params;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/posts/${slug}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return (
            <main className="px-6 py-12">
                <h1 className="text-center text-2xl font-semibold text-greenBrand">
                    Post not found
                </h1>
            </main>
        );
    }

    const post = await res.json();

    return (
        <main className="bg-beige text-greenBrand font-noto">
            <Newsletter />

            <article className="px-6 py-12 max-w-6xl mx-auto space-y-20">

                {/* TITLE */}
                <h1 className="text-3xl sm:text-4xl font-bold text-center tracking-tight">
                    {post.title}
                </h1>

                {/* DATE */}
                {post.publish_at && (
                    <p className="text-greenBrand/60 text-center text-sm">
                        {new Date(post.publish_at).toLocaleDateString("en-US")}
                    </p>
                )}


                {/* CONTENT BLOCKS */}
                {Array.isArray(post.content_blocks) &&
                    post.content_blocks.map((block: any, index: number) => {
                        const isLeft = block.position === "left";

                        return (
                            <section
                                key={index}
                                className="bg-beige text-greenBrand font-noto px-6"
                            >
                                <div
                                    className={`max-w-6xl mx-auto flex flex-col items-center text-center gap-8 lg:gap-16 
                                    ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                                >
                                    {/* TEXT */}
                                    <div className="lg:w-1/2 space-y-6 text-left lg:text-left">

                                        {/* Block title */}
                                        {block.title && (
                                            <h2 className="text-lg sm:text-xl md:text-2xl font-medium leading-snug tracking-wide">
                                                {block.title}
                                            </h2>
                                        )}

                                        {/* Paragraphs */}
                                        {Array.isArray(block.text) &&
                                            block.text.map((p: string, i: number) => (
                                                <p
                                                    key={i}
                                                    className="text-base sm:text-lg md:text-lg leading-relaxed"
                                                >
                                                    {p}
                                                </p>
                                            ))}
                                    </div>

                                    {/* IMAGE */}
                                    {block.image && (
                                        <div className="relative overflow-hidden rounded-xl shadow-sm w-[85%] h-[300px] mx-auto lg:w-1/2 lg:h-[500px]">
                                            <img
                                                src={block.image}
                                                alt=""
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-beige to-transparent"></div>
                                        </div>
                                    )}
                                </div>
                            </section>
                        );
                    })}

            </article>

            <Newsletter />
        </main>
    );
}