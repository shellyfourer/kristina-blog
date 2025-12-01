import Newsletter from "@/components/Newsletter";

export default async function BlogPostPage(context: { params: Promise<{ slug: string }> }) {
    const { slug } = await context.params;

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/posts/${slug}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return (
            <main className="px-6 py-12 bg-beige text-greenBrand font-noto">
                <h1 className="text-center text-2xl font-semibold text-greenBrand">
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
            <section className="px-6 pt-10 pb-6 lg:pt-16 lg:pb-8">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
                        {post.title}
                    </h1>

                    <div className="w-16 h-[1px] bg-goldBrand mx-auto"></div>

                    {post.publish_at && (
                        <p className="text-greenBrand/60 text-sm">
                            Kristina Fourer • Published on{" "}
                            {new Date(post.publish_at).toLocaleDateString("en-US")}
                        </p>
                    )}
                </div>
            </section>

            {/* CONTENT BLOCKS */}
            {Array.isArray(post.content_blocks) &&
                post.content_blocks.map((block: any, index: number) => {

                    // CHECK IF THIS IS A CENTER SECTION
                    if (block.type === "center") {
                        return (
                            <section
                                key={index}
                                className="bg-beige text-greenBrand font-noto px-6 py-12 lg:py-16"
                            >
                                <div className="max-w-3xl mx-auto text-center space-y-6">

                                    {block.title && (
                                        <>
                                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-wide">
                                                {block.title}
                                            </h2>
                                            <div className="w-16 h-[1px] bg-goldBrand mx-auto"></div>
                                        </>
                                    )}

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
                            </section>
                        );
                    }

                    // NORMAL LEFT/RIGHT SECTION
                    const isLeft = block.position === "left";

                    return (
                        <section
                            key={index}
                            className="bg-beige text-greenBrand px-6 py-12 lg:py-16"
                        >
                            <div
                                className={`max-w-6xl mx-auto flex flex-col items-center text-center gap-8 lg:gap-16
                                    ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                            >
                                {/* TEXT */}
                                <div className="lg:w-1/2 space-y-6 text-center">

                                    {block.title && (
                                        <>
                                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium tracking-wide">
                                                {block.title}
                                            </h2>
                                            <div className="w-16 h-[1px] bg-goldBrand mx-auto"></div>
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

            <Newsletter />
        </main>
    );
}