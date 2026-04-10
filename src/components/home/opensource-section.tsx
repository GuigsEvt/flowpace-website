"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mic, Activity, LayoutDashboard } from "lucide-react";
import { SectionContainer } from "@/components/section-container";

const projects = [
  {
    icon: Mic,
    title: "Whisper Dictate",
    description:
      "Local-first voice dictation powered by OpenAI Whisper. Fast, private, and accurate transcription right from your desktop.",
    status: "Live" as const,
    cta: "View on GitHub",
    href: "/open-source/whisper-dictate",
  },
  {
    icon: Activity,
    title: "Strava AI Intelligence",
    description:
      "AI-powered training insights from your Strava data. Personalized analytics, recovery predictions, and performance trends.",
    status: "Coming Soon" as const,
    cta: "Join Waitlist",
    href: "/contact",
  },
  {
    icon: LayoutDashboard,
    title: "SimsWorkspace",
    description:
      "An open-source workspace for running and managing AI agent simulations. Test, iterate, and deploy with confidence.",
    status: "Coming Soon" as const,
    cta: "Learn More",
    href: "/open-source/sims-workspace",
  },
];

const statusStyles = {
  Live: "bg-green-500/20 text-green-400",
  "Coming Soon": "bg-amber-500/20 text-amber-400",
};

export function OpenSourceSection() {
  return (
    <SectionContainer pill="Open Source">
      <h2 className="text-3xl md:text-4xl font-bold text-heading">
        Explore Our Open-Source Tools
      </h2>
      <p className="text-body mt-4 max-w-2xl">
        We contribute back to the community with tools we use ourselves. Battle-tested,
        well-documented, and free to use.
      </p>

      <div className="grid lg:grid-cols-3 gap-6 mt-12">
        {projects.map((project, i) => (
          <Link key={project.title} href={project.href}>
            <motion.div
              className="glass-card p-8 h-full cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <project.icon className="w-8 h-8 text-accent" />
              <h3 className="font-bold text-heading mt-4">{project.title}</h3>
              <p className="text-body mt-2">{project.description}</p>
              <span
                className={`${statusStyles[project.status]} rounded-full px-3 py-1 text-xs mt-4 inline-block`}
              >
                {project.status}
              </span>
              <span className="text-accent hover:text-accent-light text-sm mt-4 block">
                {project.cta} &rarr;
              </span>
            </motion.div>
          </Link>
        ))}
      </div>

      <p className="text-muted text-sm text-center mt-12">
        We build in public. Follow our journey and contribute on GitHub.
      </p>
    </SectionContainer>
  );
}
