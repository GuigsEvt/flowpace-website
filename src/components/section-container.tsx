"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id?: string;
  pill?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export function SectionContainer({
  id,
  pill,
  children,
  className,
  dark,
}: SectionContainerProps) {
  return (
    <section id={id} className="py-14 md:py-20 px-4 scroll-mt-20">
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
