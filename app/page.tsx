
import Newsletter from "@/components/Newsletter";

export default function Home() {
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
            <Newsletter/>
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
                            Hey everyone, My name is Kristina, and this is my Soft Lock-In Era.
                        </h2>

                        <div className="w-16 h-[1px] bg-goldBrand mx-auto"></div>

                        <p className="text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed text-greenBrand/90">
                            For more than a decade I was always in motion — achieving, chasing,
                            rebuilding — without ever stopping to ask why. I reached most of my
                            goals, but somewhere along the way I burned out, lost direction, and
                            started living in a fog.
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


                        <div className="rounded-xl overflow-hidden shadow-md w-full max-w-[480px] mx-auto lg:max-w-none aspect-[16/9] md:aspect-[4/5]">
                            <iframe
                                className="w-full h-full hover"
                                src="https://www.youtube.com/embed/5f2iFcPF_9Y?si=F0GiD8vgX9Zn0ldE&controls=0"
                                title="Latest YouTube video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>


                        <div className="rounded-xl overflow-hidden shadow-md w-full max-w-[480px] mx-auto lg:max-w-none aspect-[16/9] md:aspect-[4/5]">
                            <a
                                href="https://www.instagram.com/kristinafourer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full h-full"
                            >
                                <img
                                    src="/about.png"
                                    alt="Latest Instagram post"
                                    className="w-full h-full object-cover hover"
                                />
                            </a>
                        </div>


                        <div className="rounded-xl overflow-hidden shadow-md bg-whiteBg2 border border-greenBrand/10 w-full max-w-[480px] mx-auto lg:max-w-none aspect-[16/9] md:aspect-[4/5] flex flex-col justify-between text-left">
                            <div className="flex flex-col justify-center h-full px-5 py-6 text-center md:text-left">
                                <h3 className="text-lg sm:text-xl font-semibold text-greenBrand mb-2">
                                    How I Started Over at 30
                                </h3>
                                <p className="text-greenBrand/80 text-sm sm:text-[15px] leading-relaxed mb-6">
                                    I spent a decade chasing goals without asking why. Here’s how I stopped,
                                    reset, and began again — one mindful decision at a time.
                                </p>
                                <a
                                    href="#"
                                    className="inline-block font-medium text-goldBrand hover:text-greenBrand transition-colors duration-300"
                                >
                                    READ MORE →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Newsletter/>
            {/* CONTACT SECTION */}
            <section className="text-center px-6 py-12 lg:py-20 bg-beige text-greenBrand font-noto">
                <h2 className="text-2xl font-semibold tracking-wide sm:text-3xl lg:text-4xl">LET'S CONNECT</h2>
                <div className="w-16 h-[2px] bg-goldBrand mx-auto mt-3 mb-12"></div>
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
