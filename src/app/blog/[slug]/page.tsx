import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Post | Flowpace.ai",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="bg-background min-h-screen">
      <article className="max-w-3xl mx-auto px-4 py-32 pt-40">
        <Link
          href="/blog"
          className="text-accent-light text-sm hover:underline mb-8 inline-block"
        >
          &larr; Back to Blog
        </Link>

        <div className="section-card mt-4">
          <p className="text-muted text-xs mb-2">
            {slug.replace(/-/g, " ")}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-heading mb-6">
            Coming Soon
          </h1>
          <p className="text-body leading-relaxed">
            This post is currently being written. Check back soon for the full
            article on this topic.
          </p>
        </div>
      </article>
    </main>
  );
}
