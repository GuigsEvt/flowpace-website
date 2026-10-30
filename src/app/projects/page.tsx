import type { Metadata } from "next";
import { OpenSourceSection } from "@/components/home/opensource-section";

export const metadata: Metadata = {
  title: "Projects | flowpace.ai",
};

export default function ProjectsPage() {
  return (
    <main className="bg-background min-h-screen pt-24">
      <section className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-heading">
          Open Source Projects
        </h1>
        <p className="text-body mt-4 max-w-xl mx-auto text-lg">
          Tools I build, ship, and keep free. Fork them, improve them, use them.
        </p>
      </section>
      <OpenSourceSection />
    </main>
  );
}
