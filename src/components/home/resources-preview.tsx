"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionContainer } from "@/components/section-container";

const resources = [
  {
    type: "Article",
    typeColor: "text-accent bg-accent/10",
    title: "Optimising NVIDIA's DGX Spark (Grace Blackwell 1.5)",
    description:
      "A deep dive into squeezing real performance out of NVIDIA's DGX Spark: memory bandwidth, inference throughput, and the practical tradeoffs no one talks about.",
    href: "https://www.reddit.com/r/LocalLLaMA/comments/1p7ddv3/optimising_nvidias_dgx_spark_grace_blackwell_15/",
    meta: "r/LocalLLaMA · 2025",
  },
  {
    type: "Coming Soon",
    typeColor: "text-muted bg-white/5",
    title: "More resources on the way",
    description:
      "Articles, guides, and notes on building AI tools, running models locally, and shipping fast. Subscribe or check back soon.",
    href: null,
    meta: null,
  },
];

export function ResourcesPreview() {
  return (
    <SectionContainer pill="Resources">
      <h2 className="text-3xl md:text-4xl font-bold text-heading">
        Things worth reading
      </h2>
      <p className="text-body mt-4 max-w-2xl">
        Notes, articles, and write-ups from building in the AI space. No newsletter,
        no paywall.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl">
        {resources.map((r, i) => (
          <motion.div
            key={r.title}
            className="glass-card p-8 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full w-fit ${r.typeColor}`}>
              {r.type}
            </span>
            <h3 className="font-bold text-heading mt-4 text-base leading-snug">{r.title}</h3>
            <p className="text-body mt-2 text-sm leading-relaxed flex-1">{r.description}</p>
            <div className="flex items-center justify-between mt-6">
              {r.meta && <span className="text-muted text-xs">{r.meta}</span>}
              {r.href ? (
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-accent hover:text-accent-light text-sm transition-colors ml-auto"
                >
                  Read <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-muted text-sm ml-auto">Stay tuned</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
