"use client";

import { useState } from "react";
import {
  Building2,
  Briefcase,
  Users2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function WhoItsForSection({ onOpenDemo }: { onOpenDemo?: () => void }) {
  const [activePersona, setActivePersona] = useState<"developer" | "brokerage" | "closer">("developer");

  const personas = {
    developer: {
      title: "Real Estate Developers & Builders",
      badge: "PORTFOLIO & PROJECT SCALE",
      headline: "Segregate multi-tower intake with zero lead leakage across channel partners.",
      description:
        "Whether launching high-rise residential towers, commercial business parks, or plotted layouts, HYTHRIX isolates inbound interest into dedicated project databases with automated RERA disclosure delivery.",
      benefits: [
        "Multi-project segregation across independent sales teams",
        "Meta Ads & Portal CPL attribution with live CPV tracking",
        "Automated RERA registration numbers and compliance brochures",
        "Real-time executive oversight across active site visits",
      ],
      previewTitle: "Developer Project Master Control",
      previewData: [
        { label: "Active Project Streams", value: "3 (Residential, Villa, Commercial)" },
        { label: "Inbound Source Isolation", value: "Meta Ads, 99acres, MagicBricks" },
        { label: "Channel Partner Lock", value: "Enforced (90-Day Protection)" },
        { label: "RERA Audit Trail", value: "100% Verified Timestamps" },
      ],
    },
    brokerage: {
      title: "Brokerages & Agency Networks",
      badge: "AGENT ALLOCATION & CP LOCK",
      headline: "Round-robin agent distribution with zero lead ownership disputes.",
      description:
        "Route high-value buyer enquiries directly to designated portfolio specialists based on budget bands, unit preferences, and agent availability. Lock client phone numbers to prevent lead theft.",
      benefits: [
        "Automatic round-robin allocation to verified active agents",
        "First-touch timestamp lock prevents commission disputes",
        "Instant WhatsApp alert sent to agent within 45 seconds",
        "Agent response latency tracking with automated re-routing",
      ],
      previewTitle: "Brokerage Round-Robin Pipeline",
      previewData: [
        { label: "Assigned Agent Pool", value: "18 Active Closers" },
        { label: "Dispute Safeguard", value: "Active • Timestamp Protected" },
        { label: "Average First Response", value: "48 Seconds" },
        { label: "Commission Tracking", value: "Synced to Deal Pipeline" },
      ],
    },
    closer: {
      title: "Project Sales Closers & Managers",
      badge: "READY-TO-CLOSE INTELLIGENCE",
      headline: "Walk into property site visits with pre-qualified buyer dossiers.",
      description:
        "Stop wasting hours calling cold leads and asking repetitive discovery questions. Closers receive verified buyer profiles with confirmed budgets, loan pre-approvals, and scheduled calendar invites.",
      benefits: [
        "Pre-verified buyer budget band, unit configuration, and timeline",
        "Confirmed loan pre-approval status and bank preferences",
        "Automated site visit directions and visitor gate passes",
        "One-tap follow-up notes sync directly to project CRM",
      ],
      previewTitle: "Closer Buyer Intelligence Card",
      previewData: [
        { label: "Buyer Name", value: "Vikram Malhotra" },
        { label: "Unit Preference", value: "3 BHK Corner (Tower B)" },
        { label: "Verified Budget", value: "₹1.50 – ₹1.80 Cr" },
        { label: "Financing Status", value: "Pre-Approved (HDFC)" },
      ],
    },
  };

  const current = personas[activePersona];

  return (
    <section className="py-24 bg-[#07080f] border-t border-white/[0.06] relative" id="who-its-for">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            STAKEHOLDER ARCHITECTURE
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineered Exclusively for Property Transactions.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Tailored specifically for real estate ecosystems where speed-to-contact, accurate buyer qualification, and broker attribution make the difference in closing deals.
          </p>
        </div>

        {/* Persona Switcher Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 text-left">
          <button
            onClick={() => setActivePersona("developer")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer font-mono ${
              activePersona === "developer"
                ? "bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20 font-bold"
                : "bg-white/[0.03] hover:bg-white/[0.06] text-slate-400 hover:text-white border border-white/[0.06]"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Developers & Builders</span>
          </button>

          <button
            onClick={() => setActivePersona("brokerage")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer font-mono ${
              activePersona === "brokerage"
                ? "bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20 font-bold"
                : "bg-white/[0.03] hover:bg-white/[0.06] text-slate-400 hover:text-white border border-white/[0.06]"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Brokerages & Agencies</span>
          </button>

          <button
            onClick={() => setActivePersona("closer")}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer font-mono ${
              activePersona === "closer"
                ? "bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20 font-bold"
                : "bg-white/[0.03] hover:bg-white/[0.06] text-slate-400 hover:text-white border border-white/[0.06]"
            }`}
          >
            <Users2 className="w-4 h-4" />
            <span>Project Sales Closers</span>
          </button>
        </div>

        {/* Selected Persona Deep-Dive Card */}
        <div className="glass-panel rounded-2xl p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 7 Cols: Details & Pain Points Solved */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div>
                <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-wider block mb-2">
                  {current.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                  {current.title}
                </h3>
                <p className="text-sm font-semibold text-slate-200 mt-2 leading-snug">
                  {current.headline}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed font-normal">
                  {current.description}
                </p>
              </div>

              {/* Benefits checklist */}
              <div className="space-y-2.5 pt-2">
                {current.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDemo}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
                >
                  <span>Explore this workflow in live demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right 5 Cols: Simulated Operational Console Preview */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#090c14] border border-white/[0.08] shadow-xl text-left space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span className="text-xs font-mono font-bold text-white uppercase">
                    {current.previewTitle}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {current.previewData.map((d, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02]">
                      <span className="text-slate-400">{d.label}:</span>
                      <span className="text-white font-semibold">{d.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>HYTHRIX Verified Runtime</span>
                  <span className="text-orange-400">Zero Configuration Loss</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
