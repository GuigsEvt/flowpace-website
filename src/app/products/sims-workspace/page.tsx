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
        <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-success/10 text-success border border-success/20 mb-4">
          Live
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-heading">
          SimsWorkspace
        </h1>
        <p className="text-body mt-4 max-w-2xl mx-auto text-lg">
          Your AI Agent Command Center
        </p>
      </section>

      {/* Features Grid */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="section-card">
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

      {/* Agent Visualization Placeholder */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="section-card">
          <div className="bg-zinc-900/50 rounded-xl h-[400px] flex items-center justify-center">
            <p className="text-muted text-sm">Agent Dashboard Preview</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-4">
        <h2 className="text-3xl font-bold text-heading mb-4">
          Take Control of Your AI Agents
        </h2>
        <p className="text-body max-w-xl mx-auto mb-8">
          See SimsWorkspace in action. Book a demo and we&apos;ll walk you
          through your custom setup.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium rounded-full bg-accent hover:bg-accent-light text-white transition-colors"
        >
          Book a Demo
        </Link>
      </section>
    </main>
  );
}
