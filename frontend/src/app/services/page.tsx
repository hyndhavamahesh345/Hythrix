"use client";

import { useState } from "react";
import {
  Navbar,
  ServicesSection,
  Footer,
  FloatingWhatsAppButton,
  ProjectModal,
} from "@/frontend";

export default function ServicesPage() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const openProjectModal = () => setIsProjectModalOpen(true);
  const closeProjectModal = () => setIsProjectModalOpen(false);

  return (
    <div className="min-h-screen bg-[#ffffff] text-slate-900 selection:bg-orange-500 selection:text-white flex flex-col antialiased">
      {/* Sticky Navigation */}
      <Navbar onStartProject={openProjectModal} />

      <main className="flex-1 pt-14 sm:pt-16">
        {/* Full Services Section Component */}
        <ServicesSection onStartProject={openProjectModal} />
      </main>

      {/* Footer */}
      <Footer onStartProject={openProjectModal} />

      {/* Project Intake Modal */}
      <ProjectModal isOpen={isProjectModalOpen} onClose={closeProjectModal} />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsAppButton />
    </div>
  );
}
