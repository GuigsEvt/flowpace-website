"use client";

import { motion } from "framer-motion";
import { HeroNetworkAnimation } from "@/components/hero-network-animation";
import { CTAButton } from "@/components/cta-button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <HeroNetworkAnimation />
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/60 via-background/40 to-background" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading tracking-tight"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Set the Pace. Own the Flow.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-body mt-6 max-w-2xl mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Custom AI agent systems that transform your entire business — not just
          your inbox.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <CTAButton variant="primary" size="large" href="#contact">
            Book a Discovery Call
          </CTAButton>
          <CTAButton variant="ghost" size="large" href="#how-it-works">
            See How It Works
          </CTAButton>
        </motion.div>

        <motion.p
          className="mt-16 text-muted text-sm text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          Trusted by businesses across 6+ industries
        </motion.p>
      </div>
    </section>
  );
}
