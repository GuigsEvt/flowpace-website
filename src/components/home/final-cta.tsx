"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/cta-button";

export function FinalCTA() {
  return (
    <section className="py-32 px-4">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-heading">
          Want to chat about AI?
        </h2>
        <p className="text-body mt-4 max-w-xl mx-auto">
          I&apos;m always happy to meet new people building in this space.
          Book 30 minutes — no pitch, just a conversation.
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
      </motion.div>
    </section>
  );
}
