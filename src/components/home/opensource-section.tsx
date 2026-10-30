"use client";

import { motion } from "framer-motion";
import { Mic, Trash2, FileSearch } from "lucide-react";
import { SectionContainer } from "@/components/section-container";

const projects = [
  {
    icon: FileSearch,
    title: "Steno ASR",
    description:
      "French speech recognition built on EmbeddingGemma 2. Transcription with capitalization and punctuation in a single pass, faster than real-time on a standard laptop.",
    status: "Live" as const,
    href: "https://github.com/GuigsEvt/steno-asr",
    site: "https://steno.flowpace.ai",
    tags: ["PyTorch", "ASR", "French", "CTC"],
  },
  {
    icon: Trash2,
    title: "Vibe Cleaner",
    description:
      "First experimentation of full AI reverse engineering to create a desktop safety and cleaner for Mac. Pretty sure there will be no more offline paid desktop apps in the future.",
    status: "Coming Soon" as const,
    href: null,
    site: null,
    tags: ["macOS", "Python", "CLI"],
  },
  {
    icon: Mic,
    title: "Whisper Dictate",
    description:
      "Local-first voice dictation powered by OpenAI Whisper. Fast, private, and accurate transcription right from your desktop. No cloud, no data sent anywhere.",
    status: "Live" as const,
    href: "https://github.com/GuigsEvt/whisper-dictate",
    site: null,
    tags: ["Whisper", "macOS", "Local"],
  },
];

const statusStyles = {
  Live: "bg-green-500/20 text-green-400",
  "Coming Soon": "bg-amber-500/20 text-amber-400",
};

export function OpenSourceSection() {
  return (
    <SectionContainer pill="Open Source">
      <div id="projects" className="scroll-mt-20" />
      <h2 className="text-3xl md:text-4xl font-bold text-heading">
        What I&apos;m shipping
      </h2>
      <p className="text-body mt-4 max-w-2xl">
        Tools I build for fun, learning, or because I needed them. All open source,
        all free to use and fork.
      </p>

      <div className="grid lg:grid-cols-3 gap-6 mt-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="glass-card p-8 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <project.icon className="w-8 h-8 text-accent" />
            <h3 className="font-bold text-heading mt-4 text-lg">{project.title}</h3>
            <p className="text-body mt-2 text-sm leading-relaxed flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 text-muted text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between mt-5">
              <span className={`${statusStyles[project.status]} rounded-full px-3 py-1 text-xs`}>
                {project.status}
              </span>
              <div className="flex items-center gap-3">
                {project.site && (
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body hover:text-heading text-sm transition-colors"
                  >
                    Live &rarr;
                  </a>
                )}
                {project.href && project.href !== "#" ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-light text-sm transition-colors"
                  >
                    GitHub &rarr;
                  </a>
                ) : !project.href ? (
                  <span className="text-muted text-sm">Coming soon</span>
                ) : null}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
