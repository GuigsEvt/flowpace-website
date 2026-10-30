"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
      {/* Ambient blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-accent/[0.07] blur-[140px]" />
        <div className="absolute top-[40%] left-[15%] w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[110px]" />
        <div className="absolute top-[25%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent-light/[0.03] blur-[100px]" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-[1]" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Avatar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-5"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 ring-4 ring-accent/10 mx-auto shadow-lg">
            <Image
              src="/me.png"
              alt="Guillaume Evrat"
              width={64}
              height={64}
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          className="mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-medium tracking-wide"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Building in public
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading tracking-tight max-w-4xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Let&apos;s build AI{" "}
          <span className="text-accent">open source</span>{" "}
          together.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-body mt-6 max-w-xl mx-auto leading-relaxed"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          AI is moving fast. I ship tools, share what I learn, and keep everything open.
          No hype, just things that actually work.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
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
