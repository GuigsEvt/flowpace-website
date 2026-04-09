"use client";

import { motion } from "framer-motion";

const row1 = [
  "Slack",
  "Gmail",
  "HubSpot",
  "Salesforce",
  "Notion",
  "Airtable",
  "Google Sheets",
  "Stripe",
  "QuickBooks",
  "Twilio",
  "WhatsApp",
  "Calendly",
];

const row2 = [
  "Shopify",
  "Zendesk",
  "Intercom",
  "Monday.com",
  "Jira",
  "GitHub",
  "AWS",
  "OpenAI",
  "Anthropic",
  "Pinecone",
  "PostgreSQL",
  "Zapier",
];

function MarqueeRow({
  items,
  direction,
}: {
  items: string[];
  direction: "left" | "right";
}) {
  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div
      className="overflow-hidden relative"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className={`flex gap-8 ${animationClass}`}>
        {/* Original set */}
        {items.map((item, i) => (
          <span
            key={`a-${i}`}
            className="text-zinc-500 font-semibold text-lg whitespace-nowrap"
          >
            {item}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {items.map((item, i) => (
          <span
            key={`b-${i}`}
            className="text-zinc-500 font-semibold text-lg whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function IntegrationsMarquee() {
  return (
    <section className="py-24 px-4">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-heading text-center mb-16">
          Connects to the Tools You Already Use
        </h2>

        <div className="space-y-6">
          <MarqueeRow items={row1} direction="left" />
          <MarqueeRow items={row2} direction="right" />
        </div>

        <p className="text-muted text-sm text-center mt-12">
          ...and 200+ more via custom integrations
        </p>
      </motion.div>
    </section>
  );
}
