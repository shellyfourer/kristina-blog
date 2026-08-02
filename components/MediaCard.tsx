"use client";

import Image from "next/image";
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
  const { title, cover_image, publish_at } = post;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block bg-beige rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
    >
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={cover_image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
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
