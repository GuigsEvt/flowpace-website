"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SectionContainer } from "@/components/section-container";
import { CTAButton } from "@/components/cta-button";
import { industries } from "@/lib/data/industries";

export function IndustriesSection() {
  return (
    <SectionContainer pill="Industries">
      <h2 className="text-3xl md:text-4xl font-bold text-heading">
        AI Agents Built for Your Industry
      </h2>
      <p className="text-body mt-4 max-w-2xl">
        We don&apos;t do generic. Each agent is trained on domain-specific data and
        built around the workflows that matter most in your industry.
      </p>

      <div className="grid lg:grid-cols-2 gap-6 mt-12">
        {industries.map((industry, i) => (
          <Link key={industry.slug} href={`/industries/${industry.slug}`}>
            <motion.div
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] aspect-[16/10] cursor-pointer transition-all duration-300 hover:border-white/[0.15] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{
                scale: 1.02,
              }}
            >
              {/* Background image */}
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />

              {/* Glass overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md border-t border-white/[0.07] p-6">
                <h3 className="font-bold text-heading text-lg">
                  {industry.name}
                </h3>
                <p className="text-sm text-body mt-1">{industry.tagline}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col items-center mt-12 gap-4">
        <CTAButton href="/industries">Explore All Industries</CTAButton>
        <p className="text-muted text-sm">
          Don&apos;t see your industry? We build custom agents for any vertical.
        </p>
      </div>
    </SectionContainer>
  );
}
