import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {

        metadataBase: new URL("https://www.kristinafourer.com"),
        icons: {
            icon: "/favicon.png",
        },

    title: {
        default: "Kristina Fourer — The Soft Lock-In",
        template: "%s — Kristina Fourer",
    },

    description:
        "The Soft Lock-In is a grounded wellness space for anyone rebuilding their lives through structure, softness, discipline, and intention — balancing hormones, fitness, and modern work.",

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
            "A grounded wellness philosophy for anyone rebuilding through softness, structure, and intentional discipline.",
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
            "Soft discipline. Real healing. Grounded routines for anyone rebuilding with intention.",
        images: ["/about.png"],
    },
};
export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    themeColor: "#F5F2E8",
};

export default function RootLayout( {children,}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="font-noto text-greenBrand bg-beige overflow-x-hidden">
        {/* HEADER */}
        <Header/>
        {/* MAIN */}
        <main>{children}</main>
        {/* FOOTER */}
        <Footer/>
        {/* ANALYTICS */}
        <Analytics />
        <SpeedInsights />
        </body>
        </html>
    );
}