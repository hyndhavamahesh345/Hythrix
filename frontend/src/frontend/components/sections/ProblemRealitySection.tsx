"use client";

import { useState } from "react";
import {
  Clock,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function ProblemRealitySection({ onOpenDemo }: { onOpenDemo?: () => void }) {
  const [activeComparison, setActiveComparison] = useState<"legacy" | "hythrix">("hythrix");

  const decayStages = [
    {
      time: "0 to 5 Minutes",
      decayPercent: "91% Contact Rate",
      intentColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      description: "Buyer is still actively on their phone, reviewing your property imagery with peak emotional intent.",
      reality: "HYTHRIX delivers WhatsApp verification before they leave the page.",
    },
    {
      time: "30 Minutes",
      decayPercent: "38% Contact Rate",
      intentColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      description: "Buyer has moved on to other tasks or submitted enquiries to 2 competing projects in the same micromarket.",
      reality: "Without automation, lead enters spreadsheet queue awaiting manual allocation.",
    },
    {
      time: "24+ Hours",
      decayPercent: "< 12% Contact Rate",
      intentColor: "text-red-400 border-red-500/30 bg-red-500/10",
      description: "Lead is cold. Sales rep calls; buyer doesn't answer or says 'I already booked a visit with another builder.'",
      reality: "Cost-per-lead wasted. Marketing budget leaked.",
    },
  ];

  return (
    <section className="py-24 bg-[#070910] border-t border-b border-white/[0.06] relative overflow-hidden" id="the-reality">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            THE REAL ESTATE SPEED DECAY
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            High-intent property buyers go cold in minutes, not days.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Real estate developers spend lakhs generating enquiries across Meta and portals. But when follow-ups take hours, marketing spend translates into competitor transactions.
          </p>
        </div>

        {/* 1. Lead Intent Decay Timeline */}
        <div className="mb-16">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-orange-400" />
            <span>Buyer Intent Decay vs Time-to-Contact</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {decayStages.map((stage, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                    <span className="text-xs font-mono font-bold text-white uppercase">
                      {stage.time}
                    </span>
                    <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full border ${stage.intentColor}`}>
                      {stage.decayPercent}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.04] text-[11px] font-mono text-slate-400">
                  <span className="text-orange-400 font-semibold block mb-0.5">HYTHRIX Reality:</span>
                  <span>{stage.reality}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Interactive Protocol Comparison Matrix */}
        <div className="rounded-2xl glass-panel p-6 sm:p-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.08]">
            <div>
              <h3 className="text-xl font-bold text-white">
                Operational Architecture Comparison
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                How manual real estate sales fail vs how HYTHRIX automates the pipeline.
              </p>
            </div>

            {/* Toggle switch */}
            <div className="inline-flex p-1 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono">
              <button
                onClick={() => setActiveComparison("legacy")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeComparison === "legacy"
                    ? "bg-red-500/20 text-red-300 border border-red-500/30 font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Broken Standard
              </button>
              <button
                onClick={() => setActiveComparison("hythrix")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  activeComparison === "hythrix"
                    ? "bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white font-bold shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                HYTHRIX Protocol
              </button>
            </div>
          </div>

          {activeComparison === "legacy" ? (
            /* BROKEN REALITY VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/20 space-y-3">
                <div className="flex items-center gap-2 text-red-400 text-xs font-mono font-bold uppercase">
                  <XCircle className="w-4 h-4" />
                  <span>Manual Portal Dumps & Spreadsheets</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Leads from 99acres, MagicBricks, and Meta ads accumulate in CSV exports. Sales managers manually assign contacts hours later, reps cherry-pick leads, and 30% of contacts never receive a single call.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/20 space-y-3">
                <div className="flex items-center gap-2 text-red-400 text-xs font-mono font-bold uppercase">
                  <XCircle className="w-4 h-4" />
                  <span>Unqualified Cold Dialing</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Sales closers dial unqualified numbers only to find budgets mismatch project pricing by 50% or buyer was just window-shopping. Rep morale plummets while top-tier prospects slip away.
                </p>
              </div>
            </div>
          ) : (
            /* HYTHRIX AUTOMATED VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="p-5 rounded-xl bg-orange-500/10 border border-orange-500/30 space-y-3">
                <div className="flex items-center gap-2 text-orange-400 text-xs font-mono font-bold uppercase">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Instant WhatsApp First-Touch</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Within 45 seconds of form submission, HYTHRIX initiates verified WhatsApp dialogue, delivers digital floorplans, and qualifies budget, timeline, and layout preferences conversationally.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-orange-500/10 border border-orange-500/30 space-y-3">
                <div className="flex items-center gap-2 text-orange-400 text-xs font-mono font-bold uppercase">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Verified Buyer Dossier & Walkthrough Sync</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Closers walk into site visits with ready-to-close intelligence: confirmed financing, layout choices, and scheduled walkthrough calendar invites with directions and site location pins.
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-400">
              Transforming ad spend into booked property walkthroughs.
            </span>
            <button
              onClick={onOpenDemo}
              className="text-xs font-mono font-bold text-orange-400 hover:text-orange-300 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Audit your current lead capture latency</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
