"use client";

import { motion } from "framer-motion";
import { Mic, Trash2, FileSearch, ArrowUpRight } from "lucide-react";
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
  Live: "bg-green-500/15 text-green-400 border border-green-500/20",
  "Coming Soon": "bg-amber-500/15 text-amber-400 border border-amber-500/20",
};

export function OpenSourceSection() {
  const [featured, ...rest] = projects;

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

      <div className="mt-12 space-y-5">
        {/* Featured project — horizontal layout */}
        <motion.div
          className="glass-card p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center">
                <featured.icon className="w-5 h-5 text-accent" />
              </div>
              <span className={`${statusStyles[featured.status]} rounded-full px-3 py-1 text-xs font-medium`}>
                {featured.status}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-heading">{featured.title}</h3>
            <p className="text-body mt-3 leading-relaxed max-w-lg">{featured.description}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {featured.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 text-muted text-xs border border-white/[0.06]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex md:flex-col gap-3 items-start shrink-0">
            {featured.site && (
              <a
                href={featured.site}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-body hover:text-heading transition-colors border border-white/10 hover:border-white/20 rounded-xl px-4 py-2.5 whitespace-nowrap"
              >
                Live site <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            {featured.href && (
              <a
                href={featured.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors border border-accent/25 hover:border-accent/40 rounded-xl px-4 py-2.5 whitespace-nowrap"
              >
                GitHub <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </motion.div>

        {/* Secondary projects — 2-col grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {rest.map((project, i) => (
            <motion.div
              key={project.title}
              className="glass-card p-7 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i + 1) * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.07] flex items-center justify-center">
                  <project.icon className="w-4 h-4 text-muted" />
                </div>
                <span className={`${statusStyles[project.status]} rounded-full px-2.5 py-0.5 text-xs font-medium`}>
                  {project.status}
                </span>
              </div>
              <h3 className="font-bold text-heading text-lg">{project.title}</h3>
              <p className="text-body mt-2 text-sm leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-white/5 text-muted text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/[0.05]">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-light text-sm transition-colors flex items-center gap-1.5"
                  >
                    GitHub <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-muted text-sm">Coming soon</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
