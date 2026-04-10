export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  gradient: string;
  image: string;
  painPoints: {
    title: string;
    description: string;
  }[];
  agentSteps: {
    id: string;
    label: string;
    description: string;
  }[];
  metrics: {
    value: string;
    label: string;
  }[];
  integrations: string[];
}

export const industries: Industry[] = [
  {
    slug: "freight-logistics",
    name: "Freight & Logistics",
    tagline: "Automate quotes, customs, and shipment tracking",
    description:
      "AI agents that handle rate calculations, customs documentation, shipment tracking, and client communication — reducing manual overhead by 80%.",
    gradient: "from-blue-900/40 to-blue-600/10",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop&q=80",
    painPoints: [
      {
        title: "Manual Quote Calculations",
        description:
          "Hours spent building freight quotes across multiple carriers and routes.",
      },
      {
        title: "Customs Compliance Gaps",
        description:
          "Missing documentation and HS code errors causing delays at borders.",
      },
      {
        title: "Tracking Blind Spots",
        description:
          "Clients asking for updates you don't have, across fragmented systems.",
      },
      {
        title: "Email Overload",
        description:
          "Hundreds of daily emails with booking requests, status updates, and exceptions.",
      },
    ],
    agentSteps: [
      { id: "ingest", label: "Email Ingestion", description: "Parse incoming booking requests automatically" },
      { id: "quote", label: "Auto-Quoting", description: "Generate multi-carrier rate comparisons" },
      { id: "docs", label: "Doc Generation", description: "Produce customs forms and BOLs" },
      { id: "track", label: "Live Tracking", description: "Real-time shipment status updates" },
      { id: "alert", label: "Exception Alerts", description: "Proactive delay and issue notifications" },
    ],
    metrics: [
      { value: "85%", label: "Reduction in quote turnaround time" },
      { value: "60%", label: "Fewer customs-related delays" },
      { value: "40+", label: "Hours saved weekly per team" },
    ],
    integrations: ["Flexport", "Cargowise", "Freightos", "Slack", "Gmail", "HubSpot"],
  },
  {
    slug: "hospitality",
    name: "Hospitality & Airbnb",
    tagline: "Enhanced guest messaging and operations",
    description:
      "AI-powered guest communication, dynamic pricing, review management, and maintenance coordination — for hosts managing 1 or 100 properties.",
    gradient: "from-amber-900/40 to-orange-600/10",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop&q=80",
    painPoints: [
      {
        title: "24/7 Guest Messages",
        description:
          "Guests expect instant replies at all hours across multiple platforms.",
      },
      {
        title: "Pricing Guesswork",
        description:
          "Manual pricing means leaving money on the table or sitting empty.",
      },
      {
        title: "Review Management",
        description:
          "Keeping ratings high requires consistent follow-up and response.",
      },
      {
        title: "Maintenance Coordination",
        description:
          "Juggling cleaners, handymen, and turnover schedules across properties.",
      },
    ],
    agentSteps: [
      { id: "msg", label: "Guest Messaging", description: "Auto-respond to inquiries and questions" },
      { id: "price", label: "Dynamic Pricing", description: "Optimize nightly rates by demand" },
      { id: "review", label: "Review Manager", description: "Generate and manage guest reviews" },
      { id: "ops", label: "Operations Hub", description: "Coordinate cleaning and maintenance" },
      { id: "report", label: "Analytics", description: "Revenue and occupancy dashboards" },
    ],
    metrics: [
      { value: "95%", label: "Response rate within 5 minutes" },
      { value: "22%", label: "Average revenue increase" },
      { value: "4.9", label: "Average guest rating maintained" },
    ],
    integrations: ["Airbnb", "VRBO", "Guesty", "PriceLabs", "Slack", "WhatsApp"],
  },
  {
    slug: "venture-capital",
    name: "Venture Capital",
    tagline: "AI-powered deal sourcing and due diligence",
    description:
      "AI agents that source deals, analyze pitch decks, run due diligence, and generate investment memos — giving your fund a data-driven edge.",
    gradient: "from-emerald-900/40 to-green-600/10",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
    painPoints: [
      {
        title: "Deal Flow Overload",
        description:
          "Thousands of inbound pitches with no scalable way to triage quality.",
      },
      {
        title: "Manual Due Diligence",
        description:
          "Weeks of research that could be structured and accelerated.",
      },
      {
        title: "Market Intelligence Gaps",
        description:
          "Missing emerging trends and competitive dynamics in target sectors.",
      },
      {
        title: "Portfolio Monitoring",
        description:
          "Tracking KPIs across 20-50+ portfolio companies manually.",
      },
    ],
    agentSteps: [
      { id: "source", label: "Deal Sourcing", description: "Scan and score inbound deal flow" },
      { id: "analyze", label: "Deck Analysis", description: "Extract key metrics from pitch decks" },
      { id: "dd", label: "Due Diligence", description: "Automated market and team research" },
      { id: "memo", label: "Memo Generation", description: "Draft investment memos" },
      { id: "monitor", label: "Portfolio Tracker", description: "Ongoing KPI monitoring dashboards" },
    ],
    metrics: [
      { value: "10x", label: "Faster initial deal screening" },
      { value: "70%", label: "Time saved on due diligence" },
      { value: "3x", label: "More deals evaluated per quarter" },
    ],
    integrations: ["Affinity", "PitchBook", "Crunchbase", "Notion", "Gmail", "Google Sheets"],
  },
  {
    slug: "insurance",
    name: "Insurance",
    tagline: "Streamline claims, policies, and underwriting",
    description:
      "AI agents for claims processing, policy analysis, underwriting support, and customer communication — reducing processing time by 60%.",
    gradient: "from-purple-900/40 to-violet-600/10",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop&q=80",
    painPoints: [
      {
        title: "Slow Claims Processing",
        description:
          "Manual review cycles that frustrate customers and delay payouts.",
      },
      {
        title: "Underwriting Bottlenecks",
        description:
          "Risk assessment takes days when it should take minutes.",
      },
      {
        title: "Policy Complexity",
        description:
          "Agents struggle to find answers across dense policy documents.",
      },
      {
        title: "Compliance Burden",
        description:
          "Regulatory requirements creating documentation overhead.",
      },
    ],
    agentSteps: [
      { id: "intake", label: "Claims Intake", description: "Auto-process claim submissions" },
      { id: "assess", label: "Risk Assessment", description: "AI-powered underwriting analysis" },
      { id: "policy", label: "Policy Q&A", description: "Instant answers from policy docs (RAG)" },
      { id: "process", label: "Auto-Processing", description: "Route and approve standard claims" },
      { id: "comply", label: "Compliance Check", description: "Automated regulatory validation" },
    ],
    metrics: [
      { value: "60%", label: "Faster claims processing" },
      { value: "45%", label: "Reduction in manual underwriting" },
      { value: "99%", label: "Compliance accuracy rate" },
    ],
    integrations: ["Guidewire", "Duck Creek", "Salesforce", "DocuSign", "Slack", "Teams"],
  },
];
