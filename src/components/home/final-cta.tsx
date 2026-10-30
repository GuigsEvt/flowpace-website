"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/cta-button";

export function FinalCTA() {
  return (
    <section className="py-24 px-4">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-accent/[0.07] via-white/[0.02] to-transparent p-12 md:p-20 text-center">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/[0.08] rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-accent-light/[0.04] rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-heading">
              Want to chat about AI?
            </h2>
            <p className="text-body mt-4 max-w-xl mx-auto text-lg leading-relaxed">
              I&apos;m always happy to meet new people building in this space.
              Book 30 minutes. No pitch, just a conversation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <CTAButton variant="primary" size="large" href="/contact">
                Book a call
              </CTAButton>
              <CTAButton
                variant="ghost"
                size="large"
                href="https://github.com/GuigsEvt"
              >
                GitHub &rarr;
              </CTAButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
