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
        <p className="text-body mt-4 max-w-xl mx-auto text-lg">
          I love meeting people curious about AI. No agenda, no pitch,
          just a real conversation about what you&apos;re building or thinking about.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-24">
        <div className="glass-card p-8">
          <div className="grid md:grid-cols-[180px_1fr] gap-8 items-start">
            <div className="flex justify-center md:justify-start">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-zinc-800 relative">
                <Image
                  src="/me.png"
                  alt="Guillaume Evrat"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-heading">Guillaume Evrat</h2>
              <p className="text-accent text-sm font-medium mt-1">
                CTO at{" "}
                <a
                  href="https://paatch.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-light transition-colors"
                >
                  paatch.ai
                </a>
              </p>
              <p className="text-body mt-4 leading-relaxed max-w-xl">
                I build AI tools and ship them as open source as a hobby, and help
                democratize the use of AI and understanding it. The field moves incredibly
                fast. I think the best way to keep up is to build, share, and learn together.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {["Open Source", "Local AI", "Building in public"].map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-1.5 text-xs font-medium rounded-full bg-accent/10 text-accent-light border border-accent/20"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-heading mb-2">
              What we can talk about
            </h3>
            <p className="text-muted mb-6">In 30 minutes, we can:</p>
            <ul className="space-y-4">
              {[
                "Discuss what you're building and where AI can help",
                "Share what's working (and not) in open source AI tooling",
                "Talk about running models locally on Apple Silicon or NVIDIA",
                "Just geek out about the current state of the field",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">→</span>
                  <span className="text-body">{item}</span>
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
