"use client";

import { AnimatedCounter } from "@/components/animated-counter";

export function MetricsSection() {
  return (
    <section className="py-14 md:py-20 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <AnimatedCounter
            target={85}
            suffix="%"
            label="Reduction in Manual Processing"
          />
          <AnimatedCounter
            target={40}
            suffix="+"
            label="Hours Saved Weekly Per Client"
          />
          <AnimatedCounter
            target={99.9}
            suffix="%"
            decimals={1}
            label="Uptime Across All Deployments"
          />
        </div>
      </div>
    </section>
  );
}
