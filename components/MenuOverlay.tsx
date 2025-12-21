"use client";

import Image from "next/image";
import Link from "next/link";
type MenuOverlayProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
    if (!isOpen) return null;

    return (
        <div
            className="
            fixed inset-x-0 bottom-0
            top-14 md:top-16 lg:top-20
            z-40
            bg-beige" >
            {/* Navigation */}
            <div
                className="
                h-full w-full
                flex flex-col items-center justify-center text-center
                gap-16
                px-4 md:px-12 lg:px-32" >
                <nav
                    aria-label="Primary"
                    className="flex flex-col items-center gap-6" >
                    <Link href="/"
                          className="btn-menu text-sm md:text-lg"
                    >HOME</Link>
                    <Link href="/about"
                          className="btn-menu text-sm md:text-lg"
                    >ABOUT</Link>
                    <Link href="/blog"
                          className="btn-menu text-sm md:text-lg"
                    >BLOG</Link>
                    <Link href="/contact"
                          className="btn-menu text-sm md:text-lg"
                    >CONTACT</Link>
                </nav>

                {/* Socials */}
                <div className="">
                    <Link href="https://instagram.com/kristinafourer"
                    className="btn-menu text-xs md:text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    >INSTAGRAM </Link>

                    <span className="mx-1">·</span>

                    <Link href="https://www.youtube.com/@KristinaFourer"
                    className="btn-menu text-xs md:text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    > YOUTUBE </Link>

                    <span className="mx-1">·</span>

                    <Link href="https://kristinafourer.substack.com/"
                    className="btn-menu text-xs md:text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    > SUBSTACK </Link>

                    <span className="mx-1">·</span>

                    <Link href="https://www.tiktok.com/@tinnnute"
                    className="btn-menu text-xs md:text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    > TIKTOK </Link>

                    <span className="mx-1">·</span>

                    <Link href="https://www.snapchat.com/@tinnute"
                    className="btn-menu text-xs md:text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    > SNAPCHAT</Link>
                </div>

                {/* Logo */}
                <Image
                    src="/transparent_logo.png"
                    alt="Kristina Fourer Logo"
                    width={64}
                    height={64}
                    className="h-auto" />
        </div>
    </div>
    );
}