"use client";

import { motion } from "framer-motion";
import { Shield, Rocket, Lock, TrendingUp } from "lucide-react";
import { SectionContainer } from "@/components/section-container";
import { CTAButton } from "@/components/cta-button";

const cards = [
  {
    icon: Shield,
    title: "Reliability",
    description: "Active fallback systems. 24/7 monitoring. Zero downtime.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Latest models. Optimized RAG. Monthly re-alignment.",
  },
  {
    icon: Lock,
    title: "Security",
    description: "Jailbreak protection. Data sovereignty. Full audit trails.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Monthly refinements. Managed scalability. Evolves with you.",
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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function AIOpsSection() {
  return (
    <SectionContainer pill="Managed AIOps">
      <h2 className="text-3xl md:text-4xl font-bold text-heading">
        We Don&apos;t Just Build It. We Run It.
      </h2>
      <p className="text-body mt-4 max-w-2xl">
        Your AI agents need ongoing care. That&apos;s Managed AIOps.
      </p>

      <motion.div
        className="grid lg:grid-cols-2 gap-6 mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            className="glass-card p-8"
            variants={cardVariants}
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center accent-glow">
              <card.icon className="text-accent w-6 h-6" />
            </div>
            <h3 className="font-bold text-heading mt-4">{card.title}</h3>
            <p className="text-body mt-2">{card.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <p className="text-muted text-sm italic mt-8 text-center">
        No fixed pricing, because your business isn&apos;t fixed. We
        custom-scope every engagement to your exact needs.
      </p>

      <div className="mt-8 text-center">
        <CTAButton href="/managed-aiops">
          Learn How We Manage Your AI
        </CTAButton>
      </div>
    </SectionContainer>
  );
}
