"use client";

import { Rocket, TrendingUp, Building2, GraduationCap, Briefcase, Cpu } from "lucide-react";

export default function TargetCustomersSection() {
  const segments = [
    {
      title: "Startups & Founders",
      focus: "MVPs, websites, SaaS platforms, and AI product validation.",
      icon: Rocket,
      accent: "text-blue-600 bg-blue-50 border-blue-200",
      capabilities: ["Rapid Prototype Engineering", "Foundational Web Presence", "Investor-Ready Product UIs"],
    },
    {
      title: "Growing Businesses",
      focus: "Digital operating systems, workflow automation, and acquisition growth.",
      icon: TrendingUp,
      accent: "text-emerald-600 bg-emerald-50 border-emerald-200",
      capabilities: ["Process Digitization", "Automated Lead Qualification", "Custom CRM Pipelines"],
    },
    {
      title: "Real Estate Developers",
      focus: "High-speed property showcases, lead automation, and WhatsApp dispatch.",
      icon: Building2,
      accent: "text-orange-600 bg-orange-50 border-orange-200",
      capabilities: ["Sub-second Architectural Portals", "HYTHRIX LeadFlow Integration", "Omnichannel Lead Nurturing"],
    },
    {
      title: "Education & Academies",
      focus: "Digital enrollment platforms, lead qualification systems, and student onboarding.",
      icon: GraduationCap,
      accent: "text-indigo-600 bg-indigo-50 border-indigo-200",
      capabilities: ["Course Discovery Portals", "Automated Admission Inquiries", "Student Notification Pipelines"],
    },
    {
      title: "Professional Services",
      focus: "Authority web presences, client onboarding workflows, and inquiry triage.",
      icon: Briefcase,
      accent: "text-amber-600 bg-amber-50 border-amber-200",
      capabilities: ["Client Intake Workflows", "Automated Scheduling", "Contract & Document Routing"],
    },
    {
      title: "Technology Companies",
      focus: "Custom software modules, third-party API integrations, and internal tooling.",
      icon: Cpu,
      accent: "text-purple-600 bg-purple-50 border-purple-200",
      capabilities: ["Microservice Architecture", "Custom Middleware & Webhooks", "AI Engine Integrations"],
    },
  ];

  return (
    <section className="py-24 bg-[#ffffff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-100 text-[11px] font-mono text-slate-700 font-semibold uppercase tracking-wider mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            ORGANIZATIONAL FIT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Built for{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Ambitious Businesses.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            Whether launching a breakthrough digital product or removing friction from a high-volume operation, we build the technical foundation you need to scale.
          </p>
        </div>

        {/* 6 Target Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 bg-white p-7 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl border ${seg.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-950">{seg.title}</h3>
                  </div>

                  <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                    {seg.focus}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  {seg.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="text-xs text-slate-600 flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-orange-500" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
