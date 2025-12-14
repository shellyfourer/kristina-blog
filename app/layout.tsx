import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
    metadataBase: new URL("https://www.kristinafourer.com"),

    title: {
        default: "Kristina Fourer — The Soft Lock-In",
        template: "%s — Kristina Fourer",
    },

    description:
        "The Soft Lock-In is a grounded wellness space for women rebuilding their lives through structure, softness, discipline, and intention — balancing hormones, fitness, and modern work.",

    keywords: [
        "Kristina Fourer",
        "The Soft Lock-In",
        "women’s wellness",
        "hormone balance",
        "PCOS support",
        "soft discipline",
        "mental health routines",
        "fitness for women",
        "corporate wellness",
        "intentional living",
    ],

    openGraph: {
        title: "Kristina Fourer — The Soft Lock-In",
        description:
            "A grounded wellness philosophy for women rebuilding through softness, structure, and intentional discipline.",
        url: "https://www.kristinafourer.com",
        siteName: "The Soft Lock-In",
        images: [
            {
                url: "/about.png",
                width: 1200,
                height: 630,
                alt: "The Soft Lock-In — a wellness space by Kristina Fourer",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Kristina Fourer — The Soft Lock-In",
        description:
            "Soft discipline. Real healing. Grounded routines for women rebuilding with intention.",
        images: ["/about.png"],
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1"

            />
            <meta
                name="theme-color"
                content="#F5F2E8"
            />
            <link rel="icon" href="/favicon.png" sizes="any" />
        </head>

        <body className="font-noto text-greenBrand bg-beige overflow-x-hidden">
        {/* HEADER */}
        <header className="border border-greenBrand/10 w-full bg-beige text-greenBrand font-noto px-4 sm:px-6 lg:px-10 py-4 sm:py-6 flex items-center justify-between sticky top-0 z-50">
            <div className="flex items-center gap-6">
                <a href="/" className="flex items-center gap-2">
                    <img
                        src="/transparent_logo.png"
                        alt="The Soft Lock-In Logo"
                        className="w-9 h-8 sm:w-10 sm:h-9 lg:w-11 lg:h-10 hover:scale-105 transition-transform duration-300"
                    />
                </a>

                {/* NAV */}
                <nav className="flex gap-6 sm:gap-8 text-[14px] sm:text-[15px] tracking-wide">
                    <a
                        href="/about"
                        className="hover:underline underline-offset-4 transition-all duration-200"
                    >
                        ABOUT
                    </a>
                    <a
                        href="/blog"
                        className="hover:underline underline-offset-4 transition-all duration-200"
                    >
                        BLOG
                    </a>
                </nav>
            </div>

            {/* SOCIAL + CONTACT */}
            <div className="flex items-center gap-4">
                <div className="hidden lg:flex items-center gap-5 sm:gap-6">
                    <a
                        href="https://instagram.com/kristinafourer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/instagram.svg"
                            alt="Instagram"
                            className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 transition-transform duration-300"
                        />
                    </a>

                    <a
                        href="https://www.youtube.com/@KristinaFourer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/youtube.svg"
                            alt="YouTube"
                            className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 transition-transform duration-300"
                        />
                    </a>

                    <a
                        href="https://substack.com/@kristinafourer?r=2v9tbt&utm_medium=ios"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/substack.svg"
                            alt="Substack"
                            className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 transition-transform duration-300"
                        />
                    </a>
                </div>

                <a href="/contact" className="btn-brand text-[13px] sm:text-[15px]">
                    CONTACT
                </a>
            </div>
        </header>

        {/* MAIN */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="border border-greenBrand/10 w-full py-6 px-8 text-center bg-beige text-muted">
            <p className="text-sm">
                &copy; 2025 Kristina Fourer — All rights reserved.
            </p>
        </footer>
        <Analytics />
        </body>
        </html>
    );
}