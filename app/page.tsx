
import Newsletter from "@/components/Newsletter";
import MediaCard from "@/components/MediaCard";

export default async function Home() {
    //Fetch latest posts
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/posts`, {
        cache: "no-store",
    });

    const posts = await res.json();

    //sort posts by publish date & show just 3 latest that are published
    const latest = posts
        .filter((p: any) => p.status === "published")
        .sort(
            (a: any, b: any) =>
                new Date(b.publish_at).getTime() - new Date(a.publish_at).getTime()
        )
        .slice(0, 3);

    return (
        <main>
            {/* HERO SECTION */}
            <section className="relative w-full overflow-hidden font-noto h-screen">

                <div className="flex flex-col lg:flex-row h-full relative">
                    <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-full">
                        <img
                            src="/hero-image.png"
                            alt="Kristina by the window at night"
                            aria-hidden="true"
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        />

                        <div
                            className="absolute inset-0 z-10 lg:hidden"
                            style={{
                                background:
                                    'linear-gradient(to top, var(--color-beige) 0%, rgba(241,238,231,0.85) 25%, rgba(241,238,231,0.5) 45%, transparent 70%)',
                            }}
                        />
                    </div>

                    <div className="absolute inset-0 flex items-end justify-center px-6 pb-12 pt-6 text-center z-20 lg:relative lg:inset-auto lg:w-1/2 lg:h-full lg:items-center lg:justify-center lg:px-6 lg:py-0">
                        <div className="max-w-xl">
                            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-greenBrand tracking-wide leading-tight">
                                KRISTINA FOURER
                            </h1>

                            <div className="w-32 h-[1px] bg-goldBrand mx-auto my-4"></div>

                            <p className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl text-greenBrand">
                                follow the plan — not the mood
                            </p>

                            <div className="relative inline-block mt-6 lg:mt-10">
                        <span className="block text-xs sm:text-sm md:text-base lg:text-lg font-medium text-greenBrand">SCROLL
                        </span>
                                <div className="mt-3 w-px bg-greenBrand opacity-90 mx-auto h-[15vh] lg:h-[18vh]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="pt-12 lg:pt-20">
                <Newsletter/>
            </div>
            {/* ABOUT SECTION */}
            <section className="bg-beige text-greenBrand font-noto px-6 py-12 lg:py-20">
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8 lg:flex-row lg:items-center lg:gap-16">


                    <div className="relative overflow-hidden rounded-xl shadow-sm w-[85%] h-[300px] mx-auto lg:w-1/2 lg:h-[500px]">
                        <img
                            src="/about.png"
                            alt="Kristina selfie at home"
                            className="w-full h-full object-cover object-[center_30%] rounded-xl"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-beige to-transparent"></div>
                    </div>


                    <div className="max-w-md mx-auto space-y-6 lg:w-1/2 lg:mx-0">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium leading-snug tracking-wide">
                            Hey, I’m Kristina
                        </h2>

                        <div className="w-16 h-[1px] bg-goldBrand mx-auto"></div>

                        <p className="text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed text-greenBrand/90">
                            a London-based health & wellness coach and full-time corporate warrior
                            currently rebuilding my entire life from the inside out… one habit, one
                            routine, and one sarcastic comment at a time.
                        </p>

                        <a href="about" className="btn-brand mt-4 inline-block">
                            LEARN MORE
                        </a>
                    </div>

                </div>
            </section>
            <Newsletter/>
            {/* LATEST SECTION */}
            <section className="bg-beige text-greenBrand font-noto px-6 py-12 sm:py-16 lg:py-20 text-center">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-2xl font-semibold tracking-wide sm:text-3xl lg:text-4xl">
                        LATEST
                    </h2>
                    <div className="w-16 h-[2px] bg-goldBrand mx-auto mt-3 mb-12"></div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-stretch justify-center">
                        {latest.map((post: any) => (
                            <MediaCard key={post.slug} post={post} />
                        ))}
                    </div>

                </div>
            </section>
            <Newsletter/>
            {/* CONTACT SECTION */}
            <section className="text-center px-6 py-12 lg:py-20 bg-beige text-greenBrand font-noto">

                {/* TITLE */}
                <h2 className="text-2xl font-semibold tracking-wide sm:text-3xl lg:text-4xl mb-10">
                    LET'S CONNECT
                </h2>
                <div className="flex justify-center gap-8 flex-wrap sm:scale-125 mb:scale-150 lg:scale-200">
                <a
                    href="https://instagram.com/kristinafourer"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover"
                >
                    <img src="/instagram.svg" alt="Instagram" className="w-7 h-7" />
                </a>

                <a
                    href="https://www.youtube.com/@KristinaFourer"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="hover"
                >
                    <img src="/youtube.svg" alt="YouTube" className="w-7 h-7" />
                </a>

                <a
                    href="https://www.tiktok.com/@tinnnute"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="hover"
                >
                    <img src="/tik-tok.svg" alt="TikTok" className="w-7 h-7" />
                </a>

                <a
                    href="https://substack.com/@kristinafourer?r=2v9tbt&utm_medium=ios"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Substack"
                    className="hover"
                >
                    <img src="/substack.svg" alt="Substack" className="w-7 h-7" />
                </a>

                <a
                    href="https://www.snapchat.com/@tinnute"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Snapchat"
                    className="hover"
                >
                    <img src="/snapchat.svg" alt="Snapchat" className="w-7 h-7" />
                </a>
                </div>
            </section>
            <Newsletter/>
        </main>
    );
}
