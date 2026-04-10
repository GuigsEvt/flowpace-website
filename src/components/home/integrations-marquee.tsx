"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Integration {
  name: string;
  icon: string;
}

const row1: Integration[] = [
  { name: "Gmail", icon: "gmail" },
  { name: "HubSpot", icon: "hubspot" },
  { name: "Notion", icon: "notion" },
  { name: "Airtable", icon: "airtable" },
  { name: "Google Sheets", icon: "googlesheets" },
  { name: "Stripe", icon: "stripe" },
  { name: "QuickBooks", icon: "quickbooks" },
  { name: "WhatsApp", icon: "whatsapp" },
  { name: "Calendly", icon: "calendly" },
  { name: "Discord", icon: "discord" },
  { name: "Linear", icon: "linear" },
  { name: "Supabase", icon: "supabase" },
];

const row2: Integration[] = [
  { name: "Shopify", icon: "shopify" },
  { name: "Zendesk", icon: "zendesk" },
  { name: "Intercom", icon: "intercom" },
  { name: "Jira", icon: "jira" },
  { name: "GitHub", icon: "github" },
  { name: "Anthropic", icon: "anthropic" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Zapier", icon: "zapier" },
  { name: "Trello", icon: "trello" },
  { name: "Asana", icon: "asana" },
  { name: "Docker", icon: "docker" },
  { name: "MongoDB", icon: "mongodb" },
];

function MarqueeRow({
  items,
  direction,
}: {
  items: Integration[];
  direction: "left" | "right";
}) {
  const animationClass =
    direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  const renderItem = (item: Integration, prefix: string, i: number) => (
    <div
      key={`${prefix}-${i}`}
      className="flex flex-col items-center gap-2 px-6 shrink-0"
    >
      <div className="w-10 h-10 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://cdn.simpleicons.org/${item.icon}/a1a1aa`}
          alt={item.name}
          width={32}
          height={32}
          className="w-8 h-8"
          loading="lazy"
        />
      </div>
      <span className="text-zinc-500 text-xs whitespace-nowrap">{item.name}</span>
    </div>
  );

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
      <div className={`flex ${animationClass}`}>
        {items.map((item, i) => renderItem(item, "a", i))}
        {items.map((item, i) => renderItem(item, "b", i))}
      </div>
    </div>
  );
}

export function IntegrationsMarquee() {
  return (
    <section className="py-14 md:py-20 px-4">
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
