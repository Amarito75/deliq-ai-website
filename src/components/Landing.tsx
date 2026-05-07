"use client";

import { useState } from "react";
import { type FlatAgent } from "@/lib/agents";
import { Nav } from "./landing/Nav";
import { Hero } from "./landing/Hero";
import { Marquee } from "./landing/Marquee";
import { Stats } from "./landing/Stats";
import { How } from "./landing/How";
import { AgentsSection } from "./landing/AgentsSection";
import { AgentModal } from "./landing/AgentModal";
import { Testimonials } from "./landing/Testimonials";
import { CalendarSection } from "./landing/CalendarSection";
import { FAQ } from "./landing/FAQ";
import { CTABanner } from "./landing/CTABanner";
import { Footer } from "./landing/Footer";
import { SectionIndex } from "./landing/SectionIndex";

export default function Landing() {
  const [agent, setAgent] = useState<FlatAgent | null>(null);
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <How />
      <AgentsSection onSelect={setAgent} />
      <Testimonials />
      <CalendarSection />
      <FAQ />
      <CTABanner />
      <Footer />
      <SectionIndex />
      {agent && <AgentModal agent={agent} onClose={() => setAgent(null)} />}
    </>
  );
}
