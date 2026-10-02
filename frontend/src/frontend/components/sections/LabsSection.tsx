"use client";

import { Sparkles, ArrowRight, Clock, Rocket } from "lucide-react";
import Link from "next/link";

interface LabsSectionProps {
  onStartProject?: () => void;
}

export default function LabsSection({ onStartProject }: LabsSectionProps) {
  return (
    <section id="labs" className="py-20 sm:py-32 bg-[#ffffff] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-b from-orange-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/25 bg-orange-50/80 text-[11px] font-mono text-orange-700 font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
          <span>HYTHRIX LABS // R&D INNOVATION</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] mb-6">
          Something Exciting Is{" "}
          <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
            Coming Soon.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
          Our team is currently researching and developing proprietary software tools, autonomous workflows, and digital products. We look forward to unveiling our upcoming releases soon.
        </p>

        {/* Sleek Status Indicator Card */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 px-6 py-4 rounded-2xl border border-slate-200/90 bg-slate-50/80 backdrop-blur-md mb-10 shadow-sm">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <span className="text-xs font-mono font-semibold text-slate-700 uppercase tracking-wider">
              Status: Active Development
            </span>
          </div>

          <div className="hidden sm:block h-4 w-px bg-slate-300" />

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Public Showcase: Underway</span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 transition-all duration-200"
          >
            <span>Start a Project With Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all duration-200"
          >
            <Rocket className="w-4 h-4 text-orange-500" />
            <span>Explore Current Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
