import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Flowpace.ai",
};

const posts = [
  {
    slug: "why-ai-agents-not-chatbots",
    date: "2025-01-15",
    title: "Why Your Business Needs AI Agents, Not Chatbots",
    excerpt:
      "Chatbots answer questions. Agents take action. Here's why the distinction matters and how to make the shift.",
  },
  {
    slug: "managed-aiops-explained",
    date: "2025-01-08",
    title: "Managed AIOps: What It Is and Why It Matters",
    excerpt:
      "Building AI is the easy part. Running it in production, reliably, at scale -- that's where managed AIOps comes in.",
  },
  {
    slug: "building-in-public-lessons",
    date: "2024-12-20",
    title: "Lessons from Building Flowpace in Public",
    excerpt:
      "Transparency, feedback loops, and the unexpected benefits of sharing your process with the world.",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-32 pt-40 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-heading">Blog</h1>
        <p className="text-body mt-4 max-w-2xl mx-auto text-lg">
          Insights on AI agents, automation, and building in public.
        </p>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="section-card h-full group cursor-pointer transition-all duration-300 hover:border-white/10">
                <p className="text-muted text-xs mb-3">{post.date}</p>
                <h3 className="text-lg font-semibold text-heading mb-2 group-hover:text-accent-light transition-colors">
                  {post.title}
                </h3>
                <p className="text-body text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <span className="text-accent-light text-sm font-medium group-hover:underline">
                  Read More &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
