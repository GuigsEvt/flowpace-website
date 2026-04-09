import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Gauge, Lock, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Managed AIOps | Flowpace.ai",
};

const pillars = [
  {
    icon: Shield,
    title: "Reliability",
    bullets: [
      "99.9% uptime SLA for all managed agent systems",
      "Automated failover and recovery procedures",
      "Continuous health checks and anomaly detection",
      "Incident response within 15 minutes",
    ],
  },
  {
    icon: Gauge,
    title: "Performance",
    bullets: [
      "Real-time latency and throughput monitoring",
      "Automatic scaling based on demand patterns",
      "Model performance benchmarking and drift detection",
      "Monthly optimization reports with actionable insights",
    ],
  },
  {
    icon: Lock,
    title: "Security",
    bullets: [
      "End-to-end encryption for data in transit and at rest",
      "SOC 2-aligned security practices",
      "Regular vulnerability assessments and patching",
      "Role-based access controls and audit logging",
    ],
  },
  {
    icon: TrendingUp,
    title: "Growth",
    bullets: [
      "Proactive recommendations for new automation opportunities",
      "Quarterly business reviews and roadmap planning",
      "Seamless integration of new agents into existing workflows",
      "Training and knowledge transfer for your team",
    ],
  },
];

const comparisonRows = [
  {
    label: "Setup",
    diy: "Weeks to months",
    generic: "Days with templates",
    flowpace: "Days, fully custom to your stack",
  },
  {
    label: "Monitoring",
    diy: "Build your own dashboards",
    generic: "Basic alerts",
    flowpace: "24/7 proactive monitoring & optimization",
  },
  {
    label: "Updates",
    diy: "Manual, ad-hoc",
    generic: "Platform-wide rollouts",
    flowpace: "Tested, staged deployments per agent",
  },
  {
    label: "Security",
    diy: "Your responsibility",
    generic: "Shared responsibility",
    flowpace: "Fully managed with audit trails",
  },
  {
    label: "Support",
    diy: "Stack Overflow",
    generic: "Ticket-based SLA",
    flowpace: "Dedicated Slack channel + 15-min response",
  },
  {
    label: "Cost Model",
    diy: "Hidden engineering time",
    generic: "Per-seat subscription",
    flowpace: "Predictable monthly retainer",
  },
];

const tiers = [
  {
    name: "Starter",
    description: "For teams exploring AI",
    items: [
      "Up to 3 managed agents",
      "Business-hours support",
      "Monthly performance reports",
      "Standard SLA (99.5% uptime)",
    ],
  },
  {
    name: "Growth",
    description: "For scaling operations",
    items: [
      "Up to 10 managed agents",
      "Extended support hours",
      "Weekly performance reports",
      "Enhanced SLA (99.9% uptime)",
      "Quarterly business reviews",
    ],
  },
  {
    name: "Enterprise",
    description: "For organization-wide transformation",
    items: [
      "Unlimited managed agents",
      "24/7 priority support",
      "Real-time dashboards",
      "Custom SLA",
      "Dedicated account manager",
    ],
  },
];

const faqs = [
  {
    q: "What exactly does 'managed' mean?",
    a: "We handle the full lifecycle of your AI agents -- deployment, monitoring, updates, security, and optimization. You focus on your business; we keep the agents running and improving.",
  },
  {
    q: "Can I bring my own models or infrastructure?",
    a: "Absolutely. We work with your existing stack -- whether it's OpenAI, Anthropic, self-hosted models, or a mix. Our management layer sits on top of whatever you choose.",
  },
  {
    q: "How do you handle data privacy?",
    a: "All data is encrypted in transit and at rest. We follow SOC 2-aligned practices and can deploy within your own cloud environment if needed. Your data never trains third-party models.",
  },
  {
    q: "What's the onboarding process like?",
    a: "We start with a discovery call, then audit your current systems and workflows. From there, we design, build, and deploy your agents in phases -- typically the first agent is live within two weeks.",
  },
  {
    q: "Can I cancel or change tiers at any time?",
    a: "Yes. All plans are month-to-month with no long-term lock-in. You can scale up, scale down, or transition to self-managed at any point.",
  },
];

export default function ManagedAIOpsPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-32 pt-40 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-heading">
          Managed AIOps
        </h1>
        <p className="text-body mt-4 max-w-2xl mx-auto text-lg">
          We don&apos;t just build your AI. We run it, monitor it, and evolve
          it.
        </p>
      </section>

      {/* Pillars */}
      <section className="max-w-5xl mx-auto px-4 pb-16 space-y-8">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div key={pillar.title} className="section-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-heading">
                  {pillar.title}
                </h2>
              </div>
              <ul className="space-y-3">
                {pillar.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-body flex items-start gap-3"
                  >
                    <span className="text-accent mt-1.5 text-xs">&#9679;</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>

      {/* Comparison Table */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="section-card overflow-x-auto">
          <h2 className="text-2xl font-bold text-heading mb-8">
            How We Compare
          </h2>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-surface">
                <th className="px-4 py-3 text-muted font-medium rounded-tl-lg">
                  &nbsp;
                </th>
                <th className="px-4 py-3 text-muted font-medium">DIY</th>
                <th className="px-4 py-3 text-muted font-medium">
                  Generic Tools
                </th>
                <th className="px-4 py-3 text-accent font-semibold rounded-tr-lg">
                  Flowpace Managed AIOps
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-white/[0.02]" : ""}
                >
                  <td className="px-4 py-3 text-heading font-medium">
                    {row.label}
                  </td>
                  <td className="px-4 py-3 text-muted">{row.diy}</td>
                  <td className="px-4 py-3 text-muted">{row.generic}</td>
                  <td className="px-4 py-3 text-body">{row.flowpace}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Scope Tiers */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-heading text-center mb-8">
          Scope Tiers
        </h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.name} className="glass-card p-8 flex flex-col">
              <h3 className="text-xl font-bold text-heading">{tier.name}</h3>
              <p className="text-muted text-sm mt-1 mb-6">{tier.description}</p>
              <ul className="space-y-3 flex-1">
                {tier.items.map((item) => (
                  <li
                    key={item}
                    className="text-body text-sm flex items-start gap-3"
                  >
                    <span className="text-accent mt-1 text-xs">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-heading text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-surface rounded-2xl border border-white/5 overflow-hidden"
            >
              <summary className="cursor-pointer px-6 py-4 text-heading font-medium list-none flex items-center justify-between">
                {faq.q}
                <span className="text-muted ml-4 group-open:rotate-45 transition-transform text-lg">
                  +
                </span>
              </summary>
              <div className="px-6 pb-4 text-body text-sm leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-4">
        <h2 className="text-3xl font-bold text-heading mb-4">
          Ready to Stop Babysitting Your AI?
        </h2>
        <p className="text-body max-w-xl mx-auto mb-8">
          Let us handle the infrastructure so you can focus on results.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium rounded-full bg-accent hover:bg-accent-light text-white transition-colors"
        >
          Book a Call
        </Link>
      </section>
    </main>
  );
}
