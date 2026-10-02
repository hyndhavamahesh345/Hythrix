"use client";

import { useState, useId } from "react";
import { ArrowRight, AlertTriangle, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function RoiCalculatorSection({ onOpenDemo }: { onOpenDemo?: () => void }) {
  const [adSpend, setAdSpend] = useState<number>(600000); // ₹6 Lakhs/mo
  const [cpl, setCpl] = useState<number>(950); // ₹950 per lead
  const [avgTicket, setAvgTicket] = useState<number>(18000000); // ₹1.8 Cr
  const [latencyTier, setLatencyTier] = useState<"instant" | "moderate" | "slow" | "critical">("slow");

  const monthlyAdSpendId = useId();
  const cplId = useId();
  const avgTicketId = useId();

  // Calculated metrics
  const totalLeads = Math.round(adSpend / cpl);

  // Decay loss percentages based on real estate sales benchmarks
  const decayRates = {
    instant: { lossPercent: 0.12, contactRate: 0.88, label: "< 5 Mins (Fast)", description: "Low loss, high intent capture" },
    moderate: { lossPercent: 0.38, contactRate: 0.62, label: "30 Mins - 2 Hrs", description: "38% leads already contacting other projects" },
    slow: { lossPercent: 0.58, contactRate: 0.42, label: "2 - 6 Hrs (Standard)", description: "58% leads go cold or don't pick up" },
    critical: { lossPercent: 0.76, contactRate: 0.24, label: "24+ Hours (Spreadsheet)", description: "76% ad spend wasted on cold callbacks" },
  };

  const currentRate = decayRates[latencyTier];
  const leadsLost = Math.round(totalLeads * currentRate.lossPercent);
  const adSpendWasted = Math.round(leadsLost * cpl);
  const recoverableVisits = Math.round(leadsLost * 0.22); // ~22% convert to site visit with 45s WhatsApp qualification
  const pipelineValueRecovered = ((recoverableVisits * 0.10 * avgTicket) / 10000000).toFixed(1); // 10% site visit closing rate in Crores

  return (
    <section className="relative py-28 border-t border-white/[0.08] bg-[#07090e] overflow-hidden">
      {/* Structural Crosshair Grid Accents */}
      <div className="absolute top-0 left-8 text-white/20 font-mono text-xs select-none">+</div>
      <div className="absolute top-0 right-8 text-white/20 font-mono text-xs select-none">+</div>
      <div className="absolute bottom-0 left-8 text-white/20 font-mono text-xs select-none">+</div>
      <div className="absolute bottom-0 right-8 text-white/20 font-mono text-xs select-none">+</div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Left-Aligned Editorial Hierarchy */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.06]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              FINANCIAL AUDIT // AD LEAKAGE ENGINE
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Calculate your lost marketing budget.
            </h2>
            <p className="mt-3 text-slate-400 text-base md:text-lg">
              When sales teams take hours to call back Meta &amp; portal leads, marketing spend directly subsidizes your competitors. Move the sliders to audit your actual leakage.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-[#0d1017] p-3 rounded-lg border border-white/10 font-mono text-xs text-slate-400">
            <span className="text-emerald-400 font-bold">BENCHMARK:</span> Real Estate Industry Avg CPL: ₹800 – ₹1,800
          </div>
        </div>

        {/* 2-Column Calculator Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 md:p-8 rounded-xl bg-[#0c0f18] border border-white/[0.08] shadow-2xl relative">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6 flex items-center justify-between">
                <span>01. Inbound Campaign Variables</span>
                <span className="text-orange-400">Live Adjustment</span>
              </div>

              {/* Slider 1: Monthly Ad Spend */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between">
                  <label htmlFor={monthlyAdSpendId} className="text-sm font-semibold text-slate-200">
                    Monthly Meta &amp; Portal Ad Spend:
                  </label>
                  <span className="text-lg font-mono font-bold text-white bg-[#141824] px-3 py-1 rounded border border-white/10">
                    ₹{(adSpend / 100000).toFixed(1)} Lakhs
                  </span>
                </div>
                <input
                  id={monthlyAdSpendId}
                  aria-label="Monthly Meta & Portal Ad Spend"
                  type="range"
                  min="100000"
                  max="3000000"
                  step="50000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>₹1 Lakh</span>
                  <span>₹15 Lakhs</span>
                  <span>₹30 Lakhs</span>
                </div>
              </div>

              {/* Slider 2: Cost Per Lead */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between">
                  <label htmlFor={cplId} className="text-sm font-semibold text-slate-200">
                    Average Cost Per Lead (CPL):
                  </label>
                  <span className="text-lg font-mono font-bold text-white bg-[#141824] px-3 py-1 rounded border border-white/10">
                    ₹{cpl.toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  id={cplId}
                  aria-label="Average Cost Per Lead (CPL)"
                  type="range"
                  min="400"
                  max="2500"
                  step="50"
                  value={cpl}
                  onChange={(e) => setCpl(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>₹400 (Mass Residential)</span>
                  <span>₹1,200 (Mid-Luxury)</span>
                  <span>₹2,500 (Villas &amp; Penthouse)</span>
                </div>
              </div>

              {/* Slider 3: Average Unit Price */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between">
                  <label htmlFor={avgTicketId} className="text-sm font-semibold text-slate-200">
                    Average Property Ticket Size:
                  </label>
                  <span className="text-lg font-mono font-bold text-white bg-[#141824] px-3 py-1 rounded border border-white/10">
                    ₹{(avgTicket / 10000000).toFixed(2)} Cr
                  </span>
                </div>
                <input
                  id={avgTicketId}
                  aria-label="Average Property Ticket Size"
                  type="range"
                  min="5000000"
                  max="50000000"
                  step="1000000"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>₹50 Lakhs</span>
                  <span>₹2.5 Cr</span>
                  <span>₹5.0 Cr</span>
                </div>
              </div>

              {/* Selector: Current First-Touch Latency */}
              <div className="space-y-3 pt-4 border-t border-white/[0.08]">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-200">
                    Current Sales Rep Follow-Up Latency:
                  </span>
                  <span className="text-xs font-mono text-red-400 font-semibold">
                    {Math.round(currentRate.lossPercent * 100)}% Lead Dropoff
                  </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {(["instant", "moderate", "slow", "critical"] as const).map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setLatencyTier(tier)}
                      className={`p-2.5 rounded-lg border text-left transition-all ${
                        latencyTier === tier
                          ? "bg-orange-500/10 border-orange-500 text-white shadow-lg"
                          : "bg-[#101420] border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <div className="text-xs font-bold font-mono">{decayRates[tier].label}</div>
                      <div className="text-[10px] text-slate-400 mt-1 truncate">
                        {decayRates[tier].description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Micro proof summary bar */}
            <div className="grid grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3 bg-[#0a0d16] border border-white/[0.06] rounded-lg">
                <span className="text-slate-400 block text-[10px]">TOTAL INBOUND</span>
                <span className="text-white font-bold text-base">{totalLeads.toLocaleString()} leads/mo</span>
              </div>
              <div className="p-3 bg-[#0a0d16] border border-white/[0.06] rounded-lg">
                <span className="text-slate-400 block text-[10px]">LOST TO SPREADSHEET</span>
                <span className="text-red-400 font-bold text-base">{leadsLost.toLocaleString()} leads</span>
              </div>
              <div className="p-3 bg-[#0a0d16] border border-white/[0.06] rounded-lg">
                <span className="text-slate-400 block text-[10px]">HYTHRIX SLA</span>
                <span className="text-emerald-400 font-bold text-base">&lt; 45 Seconds</span>
              </div>
            </div>
          </div>

          {/* Real-time Loss & Recovery Dossier (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 md:p-8 rounded-xl bg-gradient-to-b from-[#131722] to-[#0a0d15] border border-red-500/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span className="text-xs font-mono uppercase text-red-400 font-semibold tracking-wider">
                    Pipeline Wastage Audit
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">HX-AUDIT</span>
              </div>

              {/* The Burnt Money Highlight */}
              <div className="mb-6">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Estimated Ad Spend Burnt Monthly
                </span>
                <div className="text-3xl md:text-4xl font-extrabold font-mono text-red-400 flex items-center gap-1">
                  ₹{adSpendWasted.toLocaleString("en-IN")}
                  <span className="text-xs font-normal text-slate-400 font-sans">/ month</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Paid to Meta/Google/Portals for leads that are unreachable by the time your team calls.
                </p>
              </div>

              {/* Divider with Crosshair */}
              <div className="relative py-4">
                <div className="border-t border-white/[0.08]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0c0f18] px-3 font-mono text-[10px] text-slate-400 uppercase">
                  HYTHRIX Recovery Protocol
                </div>
              </div>

              {/* Recovery Projections */}
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-emerald-400 font-semibold uppercase block">
                      Recoverable Site Visits
                    </span>
                    <span className="text-[11px] text-slate-400">Via 45s WhatsApp qualification</span>
                  </div>
                  <div className="text-2xl font-mono font-bold text-emerald-400">
                    +{recoverableVisits} <span className="text-xs font-normal text-slate-400">visits</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-orange-950/20 border border-orange-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-orange-400 font-semibold uppercase block">
                      Unlocked Pipeline Value
                    </span>
                    <span className="text-[11px] text-slate-400">@ 10% visit-to-sale closure rate</span>
                  </div>
                  <div className="text-2xl font-mono font-bold text-orange-400">
                    ₹{pipelineValueRecovered} <span className="text-xs font-normal text-slate-400">Cr</span>
                  </div>
                </div>
              </div>

              {/* High-Intent Trigger CTA */}
              <button
                onClick={onOpenDemo}
                className="w-full mt-6 py-4 px-6 rounded-lg bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Deploy HYTHRIX &amp; Stop Lead Leakage</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-4 mt-4 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp Cloud API
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Zero Code Required
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
