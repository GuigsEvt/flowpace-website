import type { Metadata } from "next";
import Link from "next/link";
import {
  Mic,
  Globe,
  BookOpen,
  ShieldCheck,
  Keyboard,
  Type,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Whisper Dictate | Flowpace.ai",
  description:
    "Voice-to-Text, Supercharged. Hands-free productivity powered by OpenAI Whisper.",
};

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
        <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-success/10 text-success border border-success/20 mb-4">
          Live
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-heading">
          Whisper Dictate
        </h1>
        <p className="text-body mt-4 max-w-2xl mx-auto text-lg">
          Voice-to-Text, Supercharged
        </p>
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
          Try Whisper Dictate and experience what hands-free productivity
          actually feels like.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium rounded-full bg-accent hover:bg-accent-light text-white transition-colors"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}
