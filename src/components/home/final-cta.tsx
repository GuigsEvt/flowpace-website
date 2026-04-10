"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/cta-button";

export function FinalCTA() {
  return (
    <section className="py-14 md:py-20 px-4">
      <div className="max-w-7xl mx-auto backdrop-blur-md bg-white/[0.04] border border-white/[0.07] rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-heading">
            Ready to Set Your Own Pace?
          </h2>
          <p className="text-body max-w-2xl mx-auto mt-6">
            Book a free discovery call. We&apos;ll audit your processes and show
            you exactly where AI agents can transform your operations.
          </p>
          <div className="mt-8">
            <CTAButton size="large" href="/contact">
              Book Your Free Call
            </CTAButton>
          </div>
          <p className="text-muted text-sm mt-4">
            No commitment. No generic pitch. Just your business, analyzed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
