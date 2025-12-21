"use client";

import { useState } from "react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MenuOverlay from "@/components/MenuOverlay";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    {/*Scroll lock when an overlay is open*/}
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    {/*Close overlay when navigating to a different page*/}
    useEffect(() => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    }, [pathname]);

    return (

        <>
            <header className="
            sticky top-0 z-50
            bg-beige
            border border-greenBrand/10
            flex justify-between items-center
            px-4 py-3
            md:px-12 md:py-4
            lg:px-30 lg:py-6"
            >
                <button
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="btn-menu text-xs md:text-sm"
                >
                    {menuOpen ? "✕ CLOSE" : "☰ MENU"}
                </button>

                <Link
                    href="/"
                    className="btn-menu text-sm md:text-lg"
                >KRISTINA FOURER</Link>

                <button aria-label="Search"
                        className="btn-menu text-xs md:text-sm"
                >SEARCH</button>
            </header>

            <MenuOverlay
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
            />
        </>
    );
}

