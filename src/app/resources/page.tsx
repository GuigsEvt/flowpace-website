import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources | flowpace.ai",
};

const articles = [
  {
    type: "Article",
    title: "Optimising NVIDIA's DGX Spark (Grace Blackwell 1.5)",
    description:
      "A deep dive into squeezing real performance out of NVIDIA's DGX Spark: memory bandwidth, inference throughput, and the practical tradeoffs no one talks about.",
    href: "https://www.reddit.com/r/LocalLLaMA/comments/1p7ddv3/optimising_nvidias_dgx_spark_grace_blackwell_15/",
    meta: "r/LocalLLaMA · 2025",
    tags: ["NVIDIA", "DGX Spark", "Inference", "Optimization"],
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-background min-h-screen pt-24">
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-heading">
          Resources
        </h1>
        <p className="text-body mt-4 max-w-xl mx-auto text-lg">
          Notes and articles from building in the AI space. No newsletter, no paywall.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div key={article.title} className="glass-card p-8 flex flex-col">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full w-fit text-accent bg-accent/10">
                {article.type}
              </span>
              <h2 className="font-bold text-heading mt-4 text-base leading-snug">
                {article.title}
              </h2>
              <p className="text-body mt-2 text-sm leading-relaxed flex-1">
                {article.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {article.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 text-muted text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-6">
                <span className="text-muted text-xs">{article.meta}</span>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-accent hover:text-accent-light text-sm transition-colors"
                >
                  Read <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}

          <div className="glass-card p-8 flex flex-col items-start justify-center border-dashed">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full w-fit text-muted bg-white/5">
              Coming Soon
            </span>
            <h2 className="font-bold text-heading mt-4 text-base">More on the way</h2>
            <p className="text-body mt-2 text-sm leading-relaxed">
              Articles on local AI, open source tooling, and building fast.
              Follow on{" "}
              <a href="https://x.com/GuillaumeEvrat" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-light transition-colors">
                X
              </a>{" "}
              or{" "}
              <a href="https://github.com/GuigsEvt" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-light transition-colors">
                GitHub
              </a>{" "}
              to stay in the loop.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
