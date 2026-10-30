import { Hero } from "@/components/home/hero";
import { OpenSourceSection } from "@/components/home/opensource-section";
import { ResourcesPreview } from "@/components/home/resources-preview";
import { FinalCTA } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <OpenSourceSection />
      <ResourcesPreview />
      <FinalCTA />
    </>
  );
}
