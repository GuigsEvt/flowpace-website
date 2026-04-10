"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Plug, Hammer, Rocket, TrendingUp, Check, X } from "lucide-react";
import { SectionContainer } from "@/components/section-container";

const WorkflowDiagram = dynamic(
  () => import("@/components/flow/workflow-diagram"),
  { ssr: false }
);

const steps = [
  {
    Icon: Plug,
    title: "Connect",
    description: "We plug into your existing tools",
  },
  {
    Icon: Hammer,
    title: "Build",
    description: "We design agents for your workflows",
  },
  {
    Icon: Rocket,
    title: "Deploy",
    description: "Agents go live with 24/7 monitoring",
  },
  {
    Icon: TrendingUp,
    title: "Evolve",
    description: "Monthly refinements as your business grows",
  },
];

const comparisons = [
  { generic: "One-size-fits-all", flowpace: "Custom-built for you" },
  { generic: "No ongoing support", flowpace: "24/7 managed service" },
  { generic: "Generic prompts", flowpace: "Industry-specific RAG" },
  { generic: "You manage it", flowpace: "We run it for you" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export function WorkflowSection() {
  return (
    <SectionContainer id="how-it-works" pill="How It Works">
      <h2 className="text-3xl md:text-4xl font-bold text-heading mb-12">
        How Flowpace<span className="text-accent">.ai</span> Powers Your Business
      </h2>

      <WorkflowDiagram />
      <p className="text-muted text-xs text-center mt-2">
        Drag nodes to rearrange &middot; Scroll to zoom &middot; Drag canvas to pan
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {steps.map(({ Icon, title, description }) => (
          <motion.div
            key={title}
            className="glass-card p-6"
            variants={cardVariants}
          >
            <Icon className="w-6 h-6 text-accent mb-4" />
            <h3 className="text-heading font-bold mb-1">{title}</h3>
            <p className="text-body text-sm">{description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* What You Get -- why Flowpace */}
      <div className="mt-20 pt-16 border-t border-white/[0.07]">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">What You Get</span>
            <h3 className="text-3xl md:text-4xl font-bold text-heading mt-3">
              Your Business Is Unique.
              <br />
              <span className="text-muted">Why Is Your AI Generic?</span>
            </h3>
            <p className="text-body mt-6 max-w-lg">
              Most AI tools are built for everyone and optimized for no one. They
              don&apos;t understand your workflows, your data, or your customers.
              You end up spending more time wrestling the tool than getting value
              from it. Flowpace builds AI agents that are purpose-built for your
              business from day one.
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-white/[0.07]">
              <span className="text-sm font-semibold text-zinc-400 uppercase tracking-wide">
                Generic Tools
              </span>
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                Flowpace
              </span>
            </div>
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
                    <Check className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm text-zinc-100">{row.flowpace}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <p className="text-muted text-sm italic mt-8 text-center">
          Every engagement starts with a custom scoping session to map your
          workflows, data sources, and goals.
        </p>
      </div>
    </SectionContainer>
  );
}
