"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Plug, Hammer, Rocket, TrendingUp } from "lucide-react";
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
    <SectionContainer pill="How It Works">
      <h2 className="text-3xl md:text-4xl font-bold text-heading mb-12">
        How Flowpace Powers Your Business
      </h2>

      <WorkflowDiagram />

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
    </SectionContainer>
  );
}
