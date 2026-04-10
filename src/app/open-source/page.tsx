import type { Metadata } from "next";
import Link from "next/link";
import { Mic, Activity, LayoutDashboard } from "lucide-react";

export const metadata: Metadata = {
  title: "Open Source | Flowpace.ai",
};

const projects = [
  {
    icon: Mic,
    title: "Whisper Dictate",
    description:
      "Local-first voice dictation powered by OpenAI Whisper. Fast, private, and accurate transcription right from your desktop.",
    status: "Live" as const,
    cta: "View Project",
    href: "/open-source/whisper-dictate",
  },
  {
    icon: Activity,
    title: "Strava AI Intelligence",
    description:
      "AI-powered training insights from your Strava data. Personalized analytics, recovery predictions, and performance trends.",
    status: "Coming Soon" as const,
  },
  {
    icon: LayoutDashboard,
    title: "SimsWorkspace",
    description:
      "An open-source workspace for running and managing AI agent simulations. Test, iterate, and deploy with confidence.",
    status: "Coming Soon" as const,
  },
];

const statusStyles = {
  Live: "bg-green-500/20 text-green-400 border border-green-500/20",
  "Coming Soon": "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
};

export default function OpenSourcePage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-32 pt-40 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-heading">
          Open Source
        </h1>
        <p className="text-body mt-4 max-w-2xl mx-auto text-lg">
          AI made the work so easy, we share some open source tools that make
          our life easier -- as humans and as a company.
        </p>
      </section>

      {/* Project Cards */}
      <section className="max-w-5xl mx-auto px-4 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            const card = (
              <div className={`glass-card p-8 h-full ${project.href ? "cursor-pointer group" : ""}`}>
                <div className="flex items-start justify-between mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${statusStyles[project.status]}`}
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-heading">
                  {project.title}
                </h3>
                <p className="text-body text-sm mt-2">
                  {project.description}
                </p>
                {project.cta && (
                  <span className="text-accent-light text-sm font-medium group-hover:underline mt-6 block">
                    {project.cta} &rarr;
                  </span>
                )}
              </div>
            );
            return project.href ? (
              <Link key={project.title} href={project.href}>{card}</Link>
            ) : (
              <div key={project.title}>{card}</div>
            );
          })}
        </div>
      </section>

      {/* Bottom note */}
      <section className="pb-24 text-center px-4">
        <p className="text-muted text-sm">
          We build in public. Follow our journey and contribute on GitHub.
        </p>
      </section>
    </main>
  );
}
