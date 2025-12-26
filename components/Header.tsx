"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MenuOverlay from "@/components/MenuOverlay";
interface SearchResult {
    post_id: string;
    title: string;
    slug: string;
}
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);
    const pathname = usePathname();

    // Scroll lock when the menu overlay is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);
    // Close menu/search on navigation
    useEffect(() => {
        setMenuOpen(false);
        setSearchOpen(false);
        setQuery("");
        setResults([]);
    }, [pathname]);
    // Live search suggestions (debounced)
    useEffect(() => {
        if (!searchOpen || query.trim().length < 2) {
            setResults([]);
            return;
        }

        const timeout = setTimeout(async () => {
            try {
                const res = await fetch(
                    `/api/search?q=${encodeURIComponent(query.trim())}`
                );
                const data = await res.json();
                setResults(Array.isArray(data) ? data : []);
            } catch {
                setResults([]);
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, [query, searchOpen]);

    return (
        <>
            <header
                className="
                sticky top-0 z-50
                bg-beige
                border border-greenBrand/10
                px-4 py-3
                md:px-12 md:py-4
                lg:px-30 lg:py-6"
            >
                {!searchOpen ? (
                    /* NORMAL HEADER */
                    <div className="flex justify-between items-center">
                        <button
                            aria-label="Toggle menu"
                            onClick={() => setMenuOpen((v) => !v)}
                            className="btn-menu text-xs md:text-sm"
                        >
                            {menuOpen ? "✕ CLOSE" : "☰ MENU"}
                        </button>

                        <Link href="/" className="btn-menu text-sm md:text-lg">
                            KRISTINA FOURER
                        </Link>

                        <button
                            aria-label="Open search"
                            onClick={() => {
                                setSearchOpen(true);
                                setMenuOpen(false);
                            }}
                            className="btn-menu text-xs md:text-sm"
                        >
                            SEARCH
                        </button>
                    </div>
                ) : (
                    /* SEARCH MODE */
                    <div className="relative w-full flex flex-col md:flex-row items-center pr-16 md:pr-0">
                        {/* SEARCH INPUT */}
                        <div className="w-full md:flex md:justify-center">
                            <div className="relative w-full md:max-w-md">
                                <input
                                    autoFocus
                                    type="search"
                                    placeholder="Search articles…"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="
                                    w-full
                                    rounded-full
                                    border border-greenBrand/30
                                    bg-transparent
                                    px-4 py-2 md:py-1.5
                                    text-sm
                                    outline-none
                                    focus:border-greenBrand"
                                />

                                {results.length > 0 && (
                                    <ul
                                        className="
                                        absolute left-0 right-0 mt-2
                                        rounded-xl
                                        border border-greenBrand/10
                                        bg-beige
                                        shadow-lg
                                        overflow-hidden
                                        z-50"
                                    >
                                        {results.map((post) => (
                                            <li key={post.post_id}>
                                                <Link
                                                    href={`/blog/${post.slug}`}
                                                    onClick={() => {
                                                        setSearchOpen(false);
                                                        setQuery("");
                                                        setResults([]);
                                                    }}
                                                    className="block px-4 py-3 text-sm hover:bg-greenBrand/5"
                                                >
                                                    {post.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* CLOSE BUTTON */}
                        <button
                            aria-label="Close search"
                            onClick={() => {
                                setSearchOpen(false);
                                setQuery("");
                                setResults([]);
                            }}
                            className="
                            btn-menu text-xs md:text-sm
                            absolute right-0 top-1/2 -translate-y-1/2
                            md:static md:top-auto md:translate-y-0 md:ml-auto"
                        >
                            CLOSE
                        </button>
                    </div>
                )}
            </header>

            <MenuOverlay
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
            />
        </>
    );
}