import type { Metadata } from "next";
import Image from "next/image";
import { CalendlyEmbed } from "@/components/calendly-embed";

export const metadata: Metadata = {
  title: "Contact | flowpace.ai",
};

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen">
      <section className="py-32 pt-40 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-heading">
          Let&apos;s grab 30 minutes
        </h1>
        <p className="text-body mt-4 max-w-xl mx-auto text-lg leading-relaxed">
          I love meeting people curious about AI. No agenda, no pitch,
          just a real conversation about what you&apos;re building or thinking about.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-24 space-y-10">
        {/* Profile card */}
        <div className="glass-card p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 flex justify-center md:justify-start">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border border-white/10 shadow-lg relative">
                <Image
                  src="/me.png"
                  alt="Guillaume Evrat"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold text-heading">Guillaume Evrat</h2>
                <span className="text-muted text-sm">·</span>
                <a
                  href="https://paatch.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm font-medium hover:text-accent-light transition-colors"
                >
                  CTO at paatch.ai
                </a>
              </div>
              <p className="text-body mt-4 leading-relaxed max-w-xl">
                I build AI tools and ship them as open source as a hobby, and help
                democratize the use of AI and understanding it. The field moves incredibly
                fast. I think the best way to keep up is to build, share, and learn together.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Open Source", "Local AI", "Building in public"].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 text-xs font-medium rounded-lg bg-accent/10 text-accent-light border border-accent/15"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Calendly + talking points */}
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-heading mb-2">
              What we can talk about
            </h3>
            <p className="text-muted mb-6 text-sm">In 30 minutes, we can:</p>
            <ul className="space-y-4">
              {[
                "Discuss what you're building and where AI can help",
                "Share what's working (and not) in open source AI tooling",
                "Talk about running models locally on Apple Silicon or NVIDIA",
                "Just geek out about the current state of the field",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-body">
                  <span className="text-accent mt-0.5 shrink-0">→</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <CalendlyEmbed url="https://calendly.com/guillaume-paatch/30min" />
        </div>
      </section>
    </main>
  );
}
