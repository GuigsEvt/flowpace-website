"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  pill?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function SectionContainer({
  pill,
  children,
  className,
  dark,
}: SectionContainerProps) {
  return (
    <section className="py-24 md:py-32 px-4">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className={cn(
            "section-card",
            dark && "bg-background",
            className
          )}
        >
          {pill && (
            <Badge
              variant="outline"
              className="glass mb-8 text-sm text-zinc-300 px-4 py-1.5 rounded-full"
            >
              {pill}
            </Badge>
          )}
          {children}
        </div>
      </motion.div>
    </section>
  );
}
