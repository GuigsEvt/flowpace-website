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
      <div className="absolute inset-0 z-0">
        <HeroNetworkAnimation />
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div
          className="mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium tracking-wide"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Building in public
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading tracking-tight max-w-4xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Let&apos;s build AI{" "}
          <span className="text-accent">open source</span>{" "}
          together.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-body mt-6 max-w-xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          AI is moving fast. I ship tools, share what I learn, and keep everything open.
          No hype, just things that actually work.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <CTAButton variant="primary" size="large" href="#projects">
            See the projects
          </CTAButton>
          <CTAButton variant="ghost" size="large" href="/contact">
            Chat with me
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
