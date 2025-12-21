import Link from "next/link";
export default function Footer() {
    return (
    <footer
        className="
    border-t border-greenBrand/10
    bg-beige
    px-6 py-4
    text-center"
    >
        <div className="text-[10px] tracking-wide text-greenBrand/50 space-y-1">
            <p>
                © {new Date().getFullYear()} Kristina Fourer. All rights reserved.
            </p>

            <p>
                <Link href="/privacy" className="hover:text-goldBrand transition-colors">
                    Privacy Policy
                </Link>
            </p>

            <address className="not-italic">
                London, United Kingdom
            </address>
        </div>
    </footer>
    );
}