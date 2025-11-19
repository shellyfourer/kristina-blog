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
                            Hey everyone, My name is Kristina, and this is my Soft Lock-In Era
                        </h2>

                        <div className="w-16 h-[1px] bg-goldBrand mx-auto"></div>

                        <p className="text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed">

                            For over a decade, I lived on autopilot — always achieving, chasing,
                            rebuilding — without ever stopping to ask why. I reached most of my
                            goals, but somewhere in the process, I burned out. I lost direction.
                            I lost myself.
                        </p>

                        <div className="w-16 h-[1px] bg-goldBrand mx-auto"></div>

                        <p className="text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed">
                            A year ago, I was diagnosed with ADHD and PCOS. That became my breaking
                            point — the moment everything that once defined me disappeared: the discipline,
                            the spark, the drive, the joy. I took a work hiatus, uprooted my life, and
                            slipped into a quiet kind of burnout — functioning, but not living.
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
                            ✨Now, I’m rebuilding from the inside out✨
                        </h2>

                        <p className="font-medium sm:text-lg md:text-lg lg:text-lg leading-relaxed">
                            Welcome to The Soft Lock-In — my quiet rebuild era
                        </p>

                        <div className="w-16 h-[1px] bg-goldBrand mx-auto"></div>

                        <p className="text-base font-medium sm:text-lg md:text-lg lg:text-lg leading-relaxed text-left">
                            This space is about:
                        </p>

                        {/* HEART BULLET POINTS */}
                        <ul className="space-y-3 text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed mx-auto w-fit text-left">
                            <li className="flex items-start gap-2">
                                <span>💚</span>
                                <span>Fitness – movement, training, nutrition, discipline</span>
                            </li>

                            <li className="flex items-start gap-2">
                                <span>💚</span>
                                <span>Beauty – skincare, fashion, maintenance routines</span>
                            </li>

                            <li className="flex items-start gap-2">
                                <span>💚</span>
                                <span>
                        Healing – nervous system regulation, therapy, peace, emotional balance, rediscovering joy
                    </span>
                            </li>

                            <li className="flex items-start gap-2">
                                <span>💚</span>
                                <span>Work – focus, structure, consistency</span>
                            </li>
                        </ul>
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
                            It’s for those of us learning to choose discipline without pressure,
                            growth without chaos, and healing without fear. It’s about managing
                            ADHD and PCOS, breaking out of survival mode, and creating structure
                            that actually sustains peace and progress.
                        </p>

                        <div className="w-16 h-[1px] bg-goldBrand mx-auto"></div>

                        <p className="text-base font-medium sm:text-lg md:text-lg lg:text-lg leading-relaxed">
                            Because here, we follow the plan — not the mood.
                        </p>

                        <div className="w-16 h-[1px] bg-goldBrand mx-auto"></div>

                        <p className="text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed">
                            TIf you’ve ever felt lost, burnt out, or like you’re just existing
                            despite “doing everything right,” this space is for you. The Soft
                            Lock-In is about rebuilding identity, discipline, and confidence —
                            one grounded, consistent day at a time.
                        </p>

                        <div className="w-16 h-[1px] bg-goldBrand mx-auto"></div>

                        <p className="text-base font-medium sm:text-lg md:text-lg lg:text-lg leading-relaxed">
                            Subscribe, lock in, and rebuild with me.
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