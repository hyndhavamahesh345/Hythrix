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

      <main className="flex-1 pt-14 sm:pt-16">
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
