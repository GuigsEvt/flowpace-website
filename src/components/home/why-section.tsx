"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionContainer } from "@/components/section-container";

const comparisons = [
  { generic: "One-size-fits-all", flowpace: "Custom-built for you" },
  { generic: "No ongoing support", flowpace: "24/7 managed service" },
  { generic: "Generic prompts", flowpace: "Industry-specific RAG" },
  { generic: "You manage it", flowpace: "We run it for you" },
];

export function WhySection() {
  return (
    <SectionContainer>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left column */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-heading">
            Your Business Is Unique.
            <br />
            Why Is Your AI Generic?
          </h2>
          <p className="text-body mt-6 max-w-lg">
            Most AI tools are built for everyone and optimized for no one. They
            don&apos;t understand your workflows, your data, or your customers.
            You end up spending more time wrestling the tool than getting value
            from it. Flowpace builds AI agents that are purpose-built for your
            business from day one.
          </p>
        </div>

        {/* Right column — comparison card */}
        <motion.div
          className="glass-card p-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Header row */}
          <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-white/5">
            <span className="text-sm font-semibold text-zinc-400 uppercase tracking-wide">
              Generic Tools
            </span>
            <span className="text-sm font-semibold text-[#1A73E8] uppercase tracking-wide">
              Flowpace
            </span>
          </div>

          {/* Comparison rows */}
          <div className="space-y-4">
            {comparisons.map((row, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <X className="w-4 h-4 text-red-500/70 shrink-0" />
                  <span className="text-sm text-zinc-400">{row.generic}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1A73E8] shrink-0" />
                  <span className="text-sm text-zinc-100">{row.flowpace}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Note below comparison */}
      <p className="text-muted text-sm italic mt-8 text-center">
        Every engagement starts with a custom scoping session to map your
        workflows, data sources, and goals.
      </p>
    </SectionContainer>
  );
}
