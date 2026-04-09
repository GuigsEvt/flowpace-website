import { Hero } from "@/components/home/hero";
import { WhySection } from "@/components/home/why-section";
import { WorkflowSection } from "@/components/home/workflow-section";
import { IntegrationsMarquee } from "@/components/home/integrations-marquee";
import { IndustriesSection } from "@/components/home/industries-section";
import { OpenSourceSection } from "@/components/home/opensource-section";
import { AIOpsSection } from "@/components/home/aiops-section";
import { MetricsSection } from "@/components/home/metrics-section";
import { FinalCTA } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhySection />
      <WorkflowSection />
      <IntegrationsMarquee />
      <IndustriesSection />
      <OpenSourceSection />
      <AIOpsSection />
      <MetricsSection />
      <FinalCTA />
    </>
  );
}
