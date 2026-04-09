export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  badge: "Live" | "Coming Soon";
  features: string[];
}

export const products: Product[] = [
  {
    slug: "sims-workspace",
    name: "SimsWorkspace",
    tagline: "Your AI Agent Command Center",
    description:
      "Visualize and orchestrate your AI agents in real-time. Monitor status, manage workflows, and control your entire agent fleet from one dashboard.",
    icon: "LayoutDashboard",
    badge: "Live",
    features: [
      "Real-time agent status monitoring",
      "Visual workflow orchestration",
      "Team collaboration tools",
      "Performance analytics",
      "Custom agent configurations",
      "Solopreneur and Team modes",
    ],
  },
  {
    slug: "whisper-dictate",
    name: "Whisper Dictate",
    tagline: "Voice-to-Text, Supercharged",
    description:
      "Hands-free productivity powered by OpenAI Whisper. Dictate notes, emails, and documents with near-perfect accuracy.",
    icon: "Mic",
    badge: "Live",
    features: [
      "Real-time transcription",
      "Multi-language support",
      "Custom vocabulary",
      "Privacy-first (local processing)",
      "Keyboard shortcut activation",
      "Auto-punctuation",
    ],
  },
];
