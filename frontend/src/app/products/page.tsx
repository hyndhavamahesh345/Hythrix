"use client";

import { useState } from "react";
import {
  Navbar,
  ProductsSection,
  CtaBannerSection,
  Footer,
  FloatingWhatsAppButton,
  ProjectModal,
  LeadFlowModal,
} from "@/frontend";
import { Sparkles } from "lucide-react";

export default function ProductsPage() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isLeadFlowModalOpen, setIsLeadFlowModalOpen] = useState(false);

  const openProjectModal = () => setIsProjectModalOpen(true);
  const closeProjectModal = () => setIsProjectModalOpen(false);

  const openLeadFlowModal = () => setIsLeadFlowModalOpen(true);
  const closeLeadFlowModal = () => setIsLeadFlowModalOpen(false);

  return (
    <div className="min-h-screen bg-[#ffffff] text-slate-900 selection:bg-orange-500 selection:text-white flex flex-col antialiased">
      {/* Sticky Navigation */}
      <Navbar onStartProject={openProjectModal} />

      <main className="flex-1 pt-20 sm:pt-24">
        {/* Dedicated Products Header */}
        <section className="pt-8 sm:pt-12 pb-6 sm:pb-8 bg-gradient-to-b from-slate-50/80 to-transparent border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/25 bg-orange-50 text-[11px] sm:text-xs font-mono font-semibold text-orange-600 uppercase tracking-wider mb-3 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              PROPRIETARY IP & SYSTEMS
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-950 mb-3 sm:mb-4 leading-tight">
              Products Built by <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">HYTHRIX</span>
            </h1>
            <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We design and ship high-impact proprietary software products and automated revenue engines built for modern enterprise scale.
            </p>
          </div>
        </section>

        {/* Full Products Section Component */}
        <ProductsSection
          onOpenLeadFlowModal={openLeadFlowModal}
          onStartProject={openProjectModal}
        />

        {/* Call to Action Banner */}
        <CtaBannerSection onStartProject={openProjectModal} />
      </main>

      {/* Footer */}
      <Footer onStartProject={openProjectModal} />

      {/* Interactive Project Intake Modal */}
      <ProjectModal isOpen={isProjectModalOpen} onClose={closeProjectModal} />

      {/* Interactive LeadFlow Product Preview Modal */}
      <LeadFlowModal
        isOpen={isLeadFlowModalOpen}
        onClose={closeLeadFlowModal}
        onStartProject={openProjectModal}
      />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsAppButton />
    </div>
  );
}
