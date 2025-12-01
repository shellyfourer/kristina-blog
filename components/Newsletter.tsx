"use client";
import {useState} from "react";

export default function Newsletter() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {/* Clickable Marquee Box */}
            <section
                onClick={() => setIsOpen(true)}
                className="relative overflow-hidden bg-beige border-y border-greenBrand/40 py-5 lg:py-8 cursor-pointer group"
            >
                {/* Moving text inside the box */}
                <div
                    className="flex whitespace-nowrap animate-marquee text-greenBrand font-noto font-semibold tracking-wider text-base sm:text-xl group-hover:text-goldBrand transition-colors duration-300">
                    {Array(12)
                        .fill("JOIN THE NEWSLETTER ") /*add more texts*/
                        .map((text, i) => (
                            <span key={i} className="mx-8">
                                {text}
                            </span>
                        ))}
                </div>
            </section>

            {/* Overlay Modal */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center"
                    onClick={() => setIsOpen(false)} // close on background click
                >
                    <div
                        className="bg-beige text-greenBrand rounded-2xl shadow-xl w-[90%] max-w-md p-8 relative animate-fade-in"
                        onClick={(e) => e.stopPropagation()} // prevent accidental close
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-4 text-greenBrand text-2xl font-bold hover:text-goldBrand transition-colors"
                            aria-label="Close newsletter form"
                        >
                            &times;
                        </button>

                        <h3 className="text-xl font-semibold mb-4">
                            Subscribe to my newsletter
                        </h3>

                        <p className="text-sm mb-6 text-greenBrand/80">
                            Be the first to know when I post something new!
                        </p>

                        {/* Form */}
                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();
                                const form = e.currentTarget;
                                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                                const name = (form.elements.namedItem("name") as HTMLInputElement).value;

                                try {
                                    const res = await fetch("/api/subscribers", {
                                        method: "POST",
                                        headers: {"Content-Type": "application/json"},
                                        body: JSON.stringify({email, name}),
                                    });

                                    const data = await res.json();

                                    if (res.ok) {
                                        alert("Subscribed successfully!");
                                        form.reset();
                                        setIsOpen(false);
                                    } else {
                                        alert(data.error || "Something went wrong. Try again.");
                                    }
                                } catch (err) {
                                    console.error(err);
                                    alert("Network error. Please try again later.");
                                }
                            }}
                            className="space-y-4"
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                                className="w-full border rounded-md px-3 py-2"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                                required
                                className="w-full border rounded-md px-3 py-2"
                            />
                            <button type="submit" className="btn-brand w-full">
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}