import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { industries } from "@/lib/data/industries";

export const metadata: Metadata = {
  title: "Industries | Flowpace.ai",
};

export default function IndustriesPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-32 pt-40 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-heading">
          Industries We Transform
        </h1>
        <p className="text-body mt-4 max-w-2xl mx-auto text-lg">
          We build AI agents purpose-built for your industry — trained on
          domain-specific data, integrated with the tools you already use, and
          designed around the workflows that matter most.
        </p>
      </section>

      {/* Industry Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`}>
              <div className="group relative h-full cursor-pointer rounded-2xl overflow-hidden border border-white/[0.07] transition-all duration-300 hover:border-white/[0.15] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]">
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="backdrop-blur-md bg-white/[0.04] p-6 flex flex-col gap-4 min-h-[140px] justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-heading">
                      {industry.name}
                    </h3>
                    <p className="text-body mt-2 text-sm leading-relaxed">
                      {industry.tagline}
                    </p>
                  </div>

                  <span className="text-accent-light text-sm font-medium group-hover:underline">
                    Learn More &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 text-center px-4">
        <p className="text-body text-lg">
          Don&apos;t see your industry?{" "}
          <Link
            href="/contact"
            className="text-accent-light hover:underline font-medium"
          >
            Get in touch
          </Link>{" "}
          — we build custom agents for any vertical.
        </p>
      </section>
    </main>
  );
}
