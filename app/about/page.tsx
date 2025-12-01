import Newsletter from "@/components/Newsletter";

export default function AboutPage() {
    return (
        <main>
            <Newsletter/>
            {/* SECTION 1 */}
            <section className="bg-beige text-greenBrand font-noto px-6 py-12 lg:py-20">
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8 lg:flex-row lg:items-center lg:gap-16">

                    {/* TEXT LEFT */}
                    <div className="lg:w-1/2 space-y-6 text-center lg:text-center">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium leading-snug tracking-wide">
                            Hi, I’m Kristina
                        </h2>

                        <div className="w-16 h-[1px] bg-goldBrand mx-auto"></div>

                        <p className="text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed">

                            a London-based women’s health and wellness coach balancing a full-time corporate career while
                            rebuilding my life from the inside out… one habit, one routine, and one sarcastic comment at a time.
                        </p>

                        <div className="w-16 h-[1px] bg-goldBrand mx-auto"></div>

                        <p className="text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed">
                            My rebuild started when life fell apart for “character development” reasons. My
                            structure disappeared, my joy went on holiday without me, and I suddenly realised
                            I needed to rebuild everything — my mind, my body, my routines, and my sense of self.
                        </p>
                    </div>

                    {/* IMAGE RIGHT */}
                    <div className="relative overflow-hidden rounded-xl shadow-sm w-[85%] h-[300px] mx-auto lg:w-1/2 lg:h-[500px]">
                        <img
                            src="/about1.png"
                            alt="Kristina"
                            className="w-full h-full object-cover object-[center_30%]"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-beige to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* SECTION 2 */}
            <section className="bg-beige text-greenBrand font-noto px-6 py-12 lg:py-20">
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8 lg:flex-row-reverse lg:items-center lg:gap-16">

                    {/* TEXT RIGHT */}
                    <div className="lg:w-1/2 space-y-6 text-center lg:text-center">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium leading-snug tracking-wide">
                            ✨So I created The Soft Lock-In✨
                        </h2>

                        <div className="w-16 h-[1px] bg-goldBrand mx-auto"></div>

                        <p className="text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed">
                            my softer, structured, slightly chaotic-but-intentional approach to getting your life together
                            without burning out (again).
                        </p>

                        <div className="w-16 h-[1px] bg-goldBrand mx-auto"></div>

                        <p className="text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed">
                            This is where I share the fitness habits I’m rebuilding, the
                            hormone-supportive nutrition I’m learning, and the mental health work helping me stay sane
                            while juggling corporate life and personal growth.
                        </p>
                    </div>

                    {/* IMAGE LEFT */}
                    <div className="relative overflow-hidden rounded-xl shadow-sm w-[85%] h-[300px] mx-auto lg:w-1/2 lg:h-[500px]">
                        <img
                            src="/about2.png"
                            alt="Kristina"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-beige to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* SECTION 3 */}
            <section className="bg-beige text-greenBrand font-noto px-6 py-12 lg:py-20">
                <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8 lg:flex-row lg:items-center lg:gap-16">

                    {/* TEXT LEFT */}
                    <div className="lg:w-1/2 space-y-6 text-center lg:text-center">


                        <p className="text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed">
                            If you’re tired of restarting, trying to feel like yourself again, or simply
                            here for the entertainment value of watching someone piece their life together
                            with discipline, therapy, and dark humour… welcome. You’re in the right place.
                            And if my journey helps even one person feel less lost or more hopeful —
                            then it’s already worth it.
                        </p>

                        <div className="w-16 h-[1px] bg-goldBrand mx-auto"></div>

                        <p className="text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed">
                            Around here, motivation only shows up once a month (like rent), so we follow the plan — not the mood.
                        </p>

                        <div className="w-16 h-[1px] bg-goldBrand mx-auto"></div>

                        <p className="text-base font-medium sm:text-lg md:text-lg lg:text-lg leading-relaxed">
                            Welcome to my rebuild era. Let’s do this together.
                        </p>
                    </div>

                    {/* IMAGE RIGHT */}
                    <div className="relative overflow-hidden rounded-xl shadow-sm w-[85%] h-[300px] mx-auto lg:w-1/2 lg:h-[500px]">
                        <img
                            src="/about3.png"
                            alt="Kristina"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-beige to-transparent"></div>
                    </div>
                </div>
            </section>
            <Newsletter/>
        </main>
    );
}