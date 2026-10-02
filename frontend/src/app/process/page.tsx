"use client";

import { useState } from "react";
import {
  Navbar,
  ProcessSection,
  CtaBannerSection,
  Footer,
  FloatingWhatsAppButton,
  ProjectModal,
} from "@/frontend";
import { Sparkles } from "lucide-react";

export default function ProcessPage() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const openProjectModal = () => setIsProjectModalOpen(true);
  const closeProjectModal = () => setIsProjectModalOpen(false);

  return (
    <div className="min-h-screen bg-[#ffffff] text-slate-900 selection:bg-orange-500 selection:text-white flex flex-col antialiased">
      {/* Sticky Navigation */}
      <Navbar onStartProject={openProjectModal} />

      <main className="flex-1 pt-24">
        {/* Dedicated Process Header */}
        <section className="pt-12 pb-8 bg-gradient-to-b from-slate-50/80 to-transparent border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/25 bg-orange-50 text-xs font-mono font-semibold text-orange-600 uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              METHODOLOGY & EXECUTION
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 mb-4">
              From Idea to <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">Measurable Impact</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Our 5-stage engineering lifecycle guarantees rapid sprint velocity, zero scope drift, and enterprise-grade reliability.
            </p>
          </div>
        </section>

        {/* Full Process Section Component */}
        <ProcessSection />

        {/* Call to Action Banner */}
        <CtaBannerSection onStartProject={openProjectModal} />
      </main>

      {/* Footer */}
      <Footer onStartProject={openProjectModal} />

      {/* Interactive Project Intake Modal */}
      <ProjectModal isOpen={isProjectModalOpen} onClose={closeProjectModal} />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsAppButton />
    </div>
  );
}
