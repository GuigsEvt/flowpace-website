import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import { industries } from "@/lib/data/industries";
import { IndustryHero } from "@/components/industry-hero";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return { title: "Industry Not Found | Flowpace.ai" };

  return {
    title: `${industry.name} | Flowpace.ai`,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <IndustryHero name={industry.name} tagline={industry.tagline} image={industry.image} />

      {/* Pain Points */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-heading text-center">
            The Challenges
          </h2>
          <p className="text-body mt-4 text-center max-w-2xl mx-auto">
            Common pain points we eliminate with purpose-built AI agents.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {industry.painPoints.map((point) => (
              <div key={point.title} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <AlertTriangle className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading">{point.title}</h3>
                    <p className="text-body text-sm mt-2 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Journey Timeline */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-heading text-center">
            Your AI Agent Workflow
          </h2>
          <p className="text-body mt-4 text-center max-w-2xl mx-auto">
            How your agents work together, end to end.
          </p>

          {/* Desktop horizontal timeline */}
          <div className="hidden lg:block mt-16">
            <div className="relative flex items-start justify-between">
              {/* Connecting line */}
              <div className="absolute top-5 left-[5%] right-[5%] h-px bg-gradient-to-r from-accent/20 via-accent to-accent/20" />

              {industry.agentSteps.map((step, i) => (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center text-center"
                  style={{ width: `${100 / industry.agentSteps.length}%` }}
                >
                  {/* Numbered circle */}
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white text-sm font-bold border-4 border-background">
                    {i + 1}
                  </div>

                  {/* Label */}
                  <h4 className="text-heading font-semibold text-sm mt-4">
                    {step.label}
                  </h4>
                  <p className="text-muted text-xs mt-1 max-w-[140px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="lg:hidden mt-12">
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-[15px] top-0 bottom-0 w-px bg-accent/30" />

              <div className="flex flex-col gap-8">
                {industry.agentSteps.map((step, i) => (
                  <div key={step.id} className="relative flex items-start gap-4">
                    {/* Numbered circle */}
                    <div className="absolute -left-8 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white text-xs font-bold border-4 border-background">
                      {i + 1}
                    </div>

                    <div className="ml-4">
                      <h4 className="text-heading font-semibold text-sm">
                        {step.label}
                      </h4>
                      <p className="text-muted text-xs mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            {industry.metrics.map((metric) => (
              <div
                key={metric.label}
                className="glass-card p-8 text-center"
              >
                <div className="text-5xl font-bold text-heading">
                  {metric.value}
                </div>
                <p className="text-body text-sm mt-3">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-heading">
            Tools We Connect
          </h2>
          <p className="text-body mt-4 max-w-2xl mx-auto">
            Seamless integrations with the platforms you already rely on.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            {industry.integrations.map((name) => (
              <span
                key={name}
                className="glass px-4 py-2 rounded-full text-sm text-heading font-medium"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-heading">
            Ready to Transform Your {industry.name}?
          </h2>
          <p className="text-body mt-4">
            {industry.description}
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium rounded-full bg-accent hover:bg-accent-light text-white transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
