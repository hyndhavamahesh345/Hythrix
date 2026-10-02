"use client";

import { useState } from "react";
import {
  Navbar,
  TeamSection,
  Footer,
  FloatingWhatsAppButton,
  ProjectModal,
} from "@/frontend";

export default function TeamPage() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const openProjectModal = () => setIsProjectModalOpen(true);
  const closeProjectModal = () => setIsProjectModalOpen(false);

  return (
    <div className="min-h-screen bg-[#ffffff] text-slate-900 selection:bg-orange-500 selection:text-white flex flex-col antialiased">
      {/* Sticky Navigation */}
      <Navbar onStartProject={openProjectModal} />

      <main className="flex-1 pt-14 sm:pt-16">
        {/* Full Team Section Component */}
        <TeamSection onStartProject={openProjectModal} />
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
