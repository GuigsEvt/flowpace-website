import { Hero } from "@/components/home/hero";
import { WorkflowSection } from "@/components/home/workflow-section";
import { IntegrationsMarquee } from "@/components/home/integrations-marquee";
import { IndustriesSection } from "@/components/home/industries-section";
import { AIOpsSection } from "@/components/home/aiops-section";
import { MetricsSection } from "@/components/home/metrics-section";
import { FinalCTA } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkflowSection />
      <IntegrationsMarquee />
      <IndustriesSection />
      <AIOpsSection />
      <MetricsSection />
      <FinalCTA />
    </>
  );
}
