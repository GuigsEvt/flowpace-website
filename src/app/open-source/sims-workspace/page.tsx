import type { Metadata } from "next";
import Link from "next/link";
import {
  LayoutDashboard,
  Activity,
  Users,
  Settings,
  BarChart3,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "SimsWorkspace | Flowpace.ai",
  description:
    "Your AI Agent Command Center. Visualize and orchestrate your AI agents in real-time.",
};

const features = [
  {
    icon: Activity,
    title: "Real-Time Agent Monitoring",
    description:
      "See the live status of every agent -- running, idle, errored, or queued. No more guessing what your AI is doing.",
  },
  {
    icon: Workflow,
    title: "Visual Workflow Orchestration",
    description:
      "Drag-and-drop agent pipelines. Chain agents together, set triggers, and build complex automations visually.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Shared workspaces, role-based access, and real-time cursors. Built for teams, not just solo operators.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Track latency, throughput, cost per run, and success rates. Optimize your agents with data, not instinct.",
  },
  {
    icon: Settings,
    title: "Custom Agent Configurations",
    description:
      "Fine-tune prompts, model selection, temperature, and tool access per agent. Full control without touching code.",
  },
  {
    icon: LayoutDashboard,
    title: "Solopreneur & Team Modes",
    description:
      "A streamlined single-agent view for solopreneurs, and a full fleet dashboard for teams. One product, two experiences.",
  },
];

export default function SimsWorkspacePage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-32 pt-40 px-4 text-center">
        <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 mb-4">
          Coming Soon
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-heading">
          SimsWorkspace
        </h1>
        <p className="text-body mt-4 max-w-2xl mx-auto text-lg">
          Your AI Agent Command Center
        </p>
        <p className="text-muted mt-2 max-w-lg mx-auto text-sm">
          We&apos;re building the ultimate dashboard to visualize and orchestrate
          your AI agents in real-time. Stay tuned.
        </p>
      </section>

      {/* Features Preview */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-heading mb-8 text-center">
          What&apos;s Coming
        </h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="section-card opacity-80">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-heading">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-body text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-4">
        <h2 className="text-3xl font-bold text-heading mb-4">
          Want Early Access?
        </h2>
        <p className="text-body max-w-xl mx-auto mb-8">
          Be the first to know when SimsWorkspace launches. Book a call and
          we&apos;ll add you to the waitlist.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium rounded-full bg-accent hover:bg-accent-light text-white transition-colors"
        >
          Join the Waitlist
        </Link>
      </section>
    </main>
  );
}
