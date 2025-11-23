"use client";

import Link from "next/link";

interface MediaCardProps {
    post: {
        slug: string;
        title: string;
        cover_image: string;
        publish_at: string | null;
    };
}

export default function MediaCard({ post }: MediaCardProps) {
    const { slug, title, cover_image, publish_at } = post;

    return (
        <Link
            href={`/blog/${post.slug}`}
            className="block bg-beige rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
        >
            {/* Image */}
            <div className="w-full h-56 overflow-hidden">
                <img
                    src={cover_image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Text */}
            <div className="p-5 text-greenBrand font-noto">
                <h2 className="text-lg font-semibold leading-snug mb-1 group-hover:text-goldBrand transition-colors">
                    {title}
                </h2>

                {publish_at && (
                    <p className="text-sm text-greenBrand/60">
                        {new Date(publish_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                    </p>
                )}
            </div>
        </Link>
    );
}