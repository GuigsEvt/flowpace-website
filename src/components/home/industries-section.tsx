"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionContainer } from "@/components/section-container";
import { CTAButton } from "@/components/cta-button";

const industries = [
  {
    name: "Freight & Logistics",
    description: "Automate dispatch, tracking, and carrier communications",
    slug: "freight-logistics",
    gradient: "from-blue-900/60 to-blue-950/40",
    borderHover: "group-hover:shadow-blue-500/20",
  },
  {
    name: "Hospitality & Airbnb",
    description: "Guest messaging, pricing optimization, and review management",
    slug: "hospitality-airbnb",
    gradient: "from-amber-900/40 to-orange-950/30",
    borderHover: "group-hover:shadow-amber-500/20",
  },
  {
    name: "Venture Capital",
    description: "Deal flow analysis, portfolio monitoring, and LP reporting",
    slug: "venture-capital",
    gradient: "from-emerald-900/40 to-green-950/30",
    borderHover: "group-hover:shadow-emerald-500/20",
  },
  {
    name: "Insurance",
    description: "Claims processing, underwriting support, and policy management",
    slug: "insurance",
    gradient: "from-purple-900/40 to-violet-950/30",
    borderHover: "group-hover:shadow-purple-500/20",
  },
];

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
              className={`group relative overflow-hidden rounded-2xl border border-white/5 aspect-[16/10] cursor-pointer ${industry.borderHover}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(255,255,255,0.05)",
              }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.gradient}`}
              />

              {/* Glass overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md border-t border-white/5 p-6">
                <h3 className="font-bold text-heading text-lg">
                  {industry.name}
                </h3>
                <p className="text-sm text-body mt-1">{industry.description}</p>
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
