"use client";

import { motion } from "framer-motion";
import { HeroNetworkAnimation } from "@/components/hero-network-animation";
import { CTAButton } from "@/components/cta-button";
import { ChevronDown } from "lucide-react";

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
    <section className="relative min-h-[75vh] flex items-start justify-center pt-32 md:pt-40 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <HeroNetworkAnimation />
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/60 via-background/40 to-background" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Badge */}
        <motion.div
          className="mb-6 inline-flex items-center gap-2 glass rounded-full px-4 py-1.5"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-xs font-medium text-body">AI-Powered Business Automation</span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <span className="text-heading">Set the Pace.</span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent-light to-accent">
            Own the Flow.
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-body mt-6 max-w-2xl mx-auto text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Custom AI agent systems that transform your entire business — not just
          your inbox.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <CTAButton variant="primary" size="large" href="/contact">
            Book a Discovery Call
          </CTAButton>
          <CTAButton variant="ghost" size="large" href="#how-it-works">
            See How It Works
          </CTAButton>
        </motion.div>

        {/* Hook */}
        <motion.div
          className="mt-16 flex flex-col items-center text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-heading">
            Your Business Is Unique.
          </h2>
          <p className="text-xl md:text-2xl font-bold text-muted mt-1">
            Why Is Your AI Generic?
          </p>
        </motion.div>

        {/* Scroll down arrow */}
        <motion.a
          href="#how-it-works"
          className="mt-20 flex flex-col items-center gap-2 text-muted hover:text-body transition-colors cursor-pointer"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <span className="text-xs font-medium uppercase tracking-widest">How it works</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
