import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Mic,
  Globe,
  BookOpen,
  ShieldCheck,
  Keyboard,
  Type,
  ExternalLink,
} from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Whisper Dictate | Flowpace.ai",
  description:
    "Voice-to-Text, Supercharged. Hands-free productivity powered by OpenAI Whisper. Open source.",
};

const REPO_URL = "https://github.com/GuigsEvt/whisper-dictate";
const DEMO_GIF =
  "https://raw.githubusercontent.com/GuigsEvt/whisper-dictate/main/assets/demo.gif";

const features = [
  {
    icon: Mic,
    title: "Real-Time Transcription",
    description:
      "Stream your voice and see text appear instantly. Powered by OpenAI Whisper for near-perfect accuracy.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description:
      "Dictate in 50+ languages with automatic detection. Switch languages mid-sentence -- it keeps up.",
  },
  {
    icon: BookOpen,
    title: "Custom Vocabulary",
    description:
      "Teach it your industry jargon, product names, and acronyms. No more correcting the same words over and over.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-First (Local Processing)",
    description:
      "All transcription happens on your machine. Your voice data never leaves your device.",
  },
  {
    icon: Keyboard,
    title: "Keyboard Shortcut Activation",
    description:
      "Start and stop dictation with a single hotkey. Works system-wide across any app.",
  },
  {
    icon: Type,
    title: "Auto-Punctuation",
    description:
      "Intelligent punctuation and formatting. Commas, periods, and paragraph breaks are added automatically.",
  },
];

export default function WhisperDictatePage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-32 pt-40 px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-success/10 text-success border border-success/20 mb-4">
          <span>Open Source</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-heading">
          Whisper Dictate
        </h1>
        <p className="text-body mt-4 max-w-2xl mx-auto text-lg">
          Voice-to-Text, Supercharged
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full bg-white text-black hover:bg-zinc-200 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            View on GitHub
          </a>
          <a
            href={`${REPO_URL}#readme`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Documentation
          </a>
        </div>
      </section>

      {/* Demo GIF */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="section-card p-4 md:p-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={DEMO_GIF}
            alt="Whisper Dictate demo"
            className="w-full rounded-xl border border-white/[0.07]"
          />
          <p className="text-muted text-xs text-center mt-3">
            Whisper Dictate in action -- voice-to-text in real time
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-4 pb-16 space-y-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="section-card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-heading">
                    {feature.title}
                  </h3>
                  <p className="text-body text-sm leading-relaxed mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-4">
        <h2 className="text-3xl font-bold text-heading mb-4">
          Ditch the Keyboard. Keep the Speed.
        </h2>
        <p className="text-body max-w-xl mx-auto mb-8">
          Whisper Dictate is free and open source. Star the repo, clone it, and
          start dictating.
        </p>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-10 py-4 text-lg font-medium rounded-full bg-accent hover:bg-accent-light text-white transition-colors"
        >
          <GithubIcon className="w-5 h-5" />
          Get Started on GitHub
        </a>
      </section>
    </main>
  );
}
