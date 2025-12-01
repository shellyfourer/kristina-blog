export default function ContactPage() {
    return (
        <main className="bg-beige text-greenBrand font-noto min-h-screen px-6 py-20">

            {/* HEADER */}
            <section className="max-w-3xl mx-auto text-center space-y-4">
                <h2 className="text-3xl sm:text-4xl font-medium tracking-wide">
                    Get in Touch
                </h2>
                <div className="w-16 h-[1px] bg-goldBrand mx-auto"></div>

                <p className="text-greenBrand/70 text-base sm:text-lg max-w-xl mx-auto">
                    Whether you have a question, or just want to say hi — I'm here.
                </p>
            </section>

            {/* FORM */}
            <form
                id="contact-form"
                action="#"
                method="post"
                autoComplete="off"
                className="max-w-xl mx-auto mt-12 space-y-6 bg-beige p-8 rounded-xl
                           shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-greenBrand/10"
            >

                {/* NAME */}
                <div className="flex flex-col space-y-2">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium tracking-wide text-greenBrand/80"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="p-3 rounded-lg border border-greenBrand/20
                                   bg-white text-greenBrand focus:outline-none
                                   focus:border-goldBrand transition"
                    />
                </div>

                {/* EMAIL */}
                <div className="flex flex-col space-y-2">
                    <label
                        htmlFor="email"
                        className="text-sm font-medium tracking-wide text-greenBrand/80"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="p-3 rounded-lg border border-greenBrand/20
                                   bg-white text-greenBrand focus:outline-none
                                   focus:border-goldBrand transition"
                    />
                </div>

                {/* MESSAGE */}
                <div className="flex flex-col space-y-2">
                    <label
                        htmlFor="message"
                        className="text-sm font-medium tracking-wide text-greenBrand/80"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="p-3 rounded-lg border border-greenBrand/20
                                   bg-white text-greenBrand resize-none
                                   focus:outline-none focus:border-goldBrand transition"
                    ></textarea>
                </div>

                {/* BUTTON */}
                <button
                    type="submit"
                    className="btn-brand w-full text-center mt-4"
                >
                    SEND MESSAGE
                </button>

            </form>
        </main>
    );
}