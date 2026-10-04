"use client";

import { useState } from "react";
import {
  Navbar,
  Hero,
  CapabilityStrip,
  IntroductionSection,
  WhyHythrixSection,
  TargetCustomersSection,
  CtaBannerSection,
  Footer,
  ProjectModal,
} from "@/frontend";

export default function Home() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const openProjectModal = () => setIsProjectModalOpen(true);
  const closeProjectModal = () => setIsProjectModalOpen(false);

  return (
    <div className="min-h-screen bg-[#ffffff] text-slate-900 selection:bg-orange-500 selection:text-white flex flex-col antialiased">
      {/* 1. Sticky Navigation */}
      <Navbar onStartProject={openProjectModal} />

      {/* Main Flow */}
      <main className="flex-1">
        {/* 2. Hero Section with 3-Layer Interconnected System Visual */}
        <Hero onStartProject={openProjectModal} />

        {/* 3. Capability Journey Bar / Ticker */}
        <CapabilityStrip />

        {/* 4. Introduction: Technology Built Around Business Outcomes */}
        <IntroductionSection onStartProject={openProjectModal} />

        {/* 5. Why HYTHRIX: More Than a Development Agency */}
        <WhyHythrixSection />

        {/* 6. Target Customers: Built for Ambitious Businesses */}
        <TargetCustomersSection />

        {/* 7. High-Converting CTA Banner Section */}
        <CtaBannerSection onStartProject={openProjectModal} />
      </main>

      {/* 8. Editorial Footer */}
      <Footer onStartProject={openProjectModal} />

      {/* Interactive Project Intake Modal */}
      <ProjectModal isOpen={isProjectModalOpen} onClose={closeProjectModal} />

    </div>
  );
}
