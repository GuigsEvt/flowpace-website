import type { Metadata } from "next";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Flowpace.ai",
};

const trustBadges = ["6+ Industries", "Custom Solutions", "Managed Service"];

const valueProps = [
  "Understand your business goals and current tech stack",
  "Identify high-impact AI opportunities specific to your operations",
  "Map out a phased deployment plan with clear milestones",
  "Discuss pricing, timelines, and managed service options",
  "Answer any questions about our platform and approach",
];

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-32 pt-40 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-heading">
          Let&apos;s Build Something Together
        </h1>
        <p className="text-body mt-4 max-w-2xl mx-auto text-lg">
          Book a free consultation to explore how custom AI agents can transform
          your business.
        </p>
      </section>

      {/* About + Calendly */}
      <section className="max-w-5xl mx-auto px-4 pb-24">
        {/* About Section */}
        <div className="glass-card p-8">
          <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
            {/* Photo Placeholder */}
            <div className="flex justify-center md:justify-start">
              <div className="w-32 h-32 rounded-full bg-zinc-800" />
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-2xl font-bold text-heading">
                Guillaume Evrat
              </h2>
              <p className="text-accent text-sm font-medium mt-1">
                Founder, Flowpace.ai
              </p>
              <p className="text-body mt-4 leading-relaxed">
                I build custom AI solutions that go beyond chatbots and
                templates. With hands-on experience across freight, hospitality,
                venture capital, insurance, and more, I focus on deploying
                production-ready agent systems that deliver measurable ROI --
                then managing them so you don&apos;t have to.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {trustBadges.map((badge) => (
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

        {/* Calendly Section */}
        <div className="mt-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Value Proposition */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-heading mb-2">
                What to Expect
              </h3>
              <p className="text-muted mb-6">
                In a 30-minute call, we&apos;ll:
              </p>
              <ul className="space-y-4">
                {valueProps.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Calendly Embed Placeholder */}
            <div className="section-card">
              <div className="bg-zinc-900 rounded-xl h-[500px] flex items-center justify-center">
                <p className="text-muted text-sm">Calendly Booking Widget</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
