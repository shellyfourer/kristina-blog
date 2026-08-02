import Image from "next/image";
import type { Metadata } from "next";
import Newsletter from "@/components/Newsletter";
import type { ContentBlock, Post } from "@/types/post";

const SITE_URL = "https://www.kristinafourer.com";

async function getPost(slug: string): Promise<Post | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || SITE_URL;
  const res = await fetch(`${baseUrl}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
}

function excerptFromBlocks(blocks: ContentBlock[] | undefined): string {
  const firstText = blocks?.flatMap((b) => b.text ?? []).find((t) => t?.trim());
  if (!firstText) return "";
  return firstText.length > 160 ? `${firstText.slice(0, 157).trimEnd()}…` : firstText;
}

function absoluteUrl(path: string | undefined): string | undefined {
  if (!path) return undefined;
  return path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  const canonical = `${SITE_URL}/blog/${slug}`;

  if (!post) {
    return {
      title: "Post not found",
      alternates: { canonical },
      robots: { index: false, follow: true },
    };
  }

  const description =
    excerptFromBlocks(post.content_blocks) ||
    "The Soft Lock-In — grounded wellness writing by Kristina Fourer.";
  const image = post.cover_image || "/about.png";

  return {
    title: post.title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: canonical,
      siteName: "The Soft Lock-In",
      images: [{ url: image, alt: post.title }],
      publishedTime: post.publish_at ?? undefined,
      modifiedTime: post.updated_at ?? post.publish_at ?? undefined,
      authors: ["Kristina Fourer"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [image],
    },
  };
}
export default async function BlogPostPage(context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params;

  const post = await getPost(slug);

  if (!post) {
    return (
      <main className="px-6 py-12 bg-beige text-greenBrand font-noto">
        <h1 className="text-center text-2xl font-medium">Post not found.</h1>
      </main>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: excerptFromBlocks(post.content_blocks),
    image: absoluteUrl(post.cover_image),
    datePublished: post.publish_at ?? undefined,
    dateModified: post.updated_at ?? post.publish_at ?? undefined,
    author: {
      "@type": "Person",
      name: "Kristina Fourer",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "The Soft Lock-In",
    },
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
  };

  return (
    <main className="bg-beige text-greenBrand font-noto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Newsletter />

      {/* TITLE */}
      <section className="px-6 pt-12 pb-8">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
            {post.title}
          </h1>

          <div className="w-12 h-[1px] bg-goldBrand mx-auto" />

          {post.publish_at && (
            <p className="text-sm text-greenBrand/60">
              Kristina Fourer · {new Date(post.publish_at).toLocaleDateString("en-US")}
            </p>
          )}
        </div>
      </section>

      {/* CONTENT BLOCKS */}
      {Array.isArray(post.content_blocks) &&
        post.content_blocks.map((block: ContentBlock, index: number) => {
          /* PURE TEXT BLOCK*/
          if (block.type === "center") {
            return (
              <section key={index} className="px-6 py-10">
                <div className="max-w-3xl mx-auto space-y-6">
                  {block.title && (
                    <>
                      <h2 className="text-xl sm:text-2xl font-medium tracking-wide text-center">
                        {block.title}
                      </h2>
                      <div className="w-12 h-[1px] bg-goldBrand mx-auto" />
                    </>
                  )}

                  {Array.isArray(block.text) &&
                    block.text.map((p: string, i: number) => (
                      <p
                        key={i}
                        className="text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed text-left"
                      >
                        {p}
                      </p>
                    ))}
                </div>
              </section>
            );
          }

          /* IMAGE + TEXT BLOCK */
          const isLeft = block.position === "left";

          return (
            <section key={index} className="px-6 py-12">
              <div
                className={`max-w-6xl mx-auto flex flex-col gap-10 lg:gap-16 items-center
                  ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* TEXT */}
                <div className="lg:w-1/2 max-w-xl space-y-6 text-left">
                  {block.title && (
                    <>
                      <h2 className="text-xl sm:text-2xl font-medium tracking-wide">
                        {block.title}
                      </h2>
                      <div className="w-12 h-[1px] bg-goldBrand" />
                    </>
                  )}

                  {Array.isArray(block.text) &&
                    block.text.map((p: string, i: number) => (
                      <p
                        key={i}
                        className="text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                </div>

                {/* IMAGE */}
                {block.image && (
                  <div className="lg:w-1/2 relative overflow-hidden rounded-xl shadow-sm h-[280px] sm:h-[360px] lg:h-[460px]">
                    <Image
                      src={block.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-beige to-transparent" />
                  </div>
                )}
              </div>
            </section>
          );
        })}

      <Newsletter />
    </main>
  );
}
