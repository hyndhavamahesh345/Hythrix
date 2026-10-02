"use client";

import { useState } from "react";
import { ArrowRight, MessageSquare, CheckCircle, Calendar } from "lucide-react";

interface CtaSectionProps {
  onOpenDemo: () => void;
}

export default function CtaSection({ onOpenDemo }: CtaSectionProps) {
  const [selectedSlot, setSelectedSlot] = useState("Thursday 2:00 PM IST");

  const sampleSlots = [
    "Thursday 2:00 PM IST",
    "Friday 11:30 AM IST",
    "Friday 4:00 PM IST",
    "Saturday 11:00 AM IST",
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-[#050609]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-red-600/18 via-orange-500/22 to-amber-500/12 blur-[170px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="rounded-3xl p-1 bg-gradient-to-b from-white/[0.15] via-white/[0.05] to-transparent shadow-2xl">
          <div className="rounded-[22px] bg-gradient-to-b from-[#101422] to-[#0a0c14] border border-white/[0.1] px-6 py-16 sm:px-12 sm:py-20 relative overflow-hidden">
            
            {/* Top Flame Line */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-red-600 via-orange-500 to-amber-400" />

            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              DEPLOY HYTHRIX AUTOMATION
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 max-w-3xl mx-auto">
              Ready to Turn Property Enquiries Into{" "}
              <span className="gradient-brand-text">Booked Site Visits?</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
              Book a live 20-minute product demonstration. We will examine your current lead response flow and show how HYTHRIX connects your enquiries to instant WhatsApp qualification.
            </p>

            {/* Quick Slot Selector Preview */}
            <div className="max-w-xl mx-auto mb-8 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-left">
              <span className="text-[11px] font-mono text-slate-400 block mb-2 font-semibold flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-orange-400" />
                SELECT A WALKTHROUGH WINDOW:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {sampleSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => {
                      setSelectedSlot(slot);
                      onOpenDemo();
                    }}
                    className={`p-2 rounded-lg text-[11px] font-mono text-center transition-colors cursor-pointer border ${
                      selectedSlot === slot
                        ? "bg-orange-500/20 border-orange-500/50 text-orange-300 font-bold"
                        : "bg-white/[0.03] border-white/[0.06] text-slate-300 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white text-base bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-200 cursor-pointer font-mono"
              >
                <span>Reserve Demo Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all text-base cursor-pointer font-mono"
              >
                <MessageSquare className="w-4 h-4 text-orange-400" />
                <span>Ask Product Questions</span>
              </button>
            </div>

            {/* Commitments */}
            <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Engineered for property sales
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-orange-400" />
                Zero disruption to active sales teams
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                Dedicated project onboarding
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
