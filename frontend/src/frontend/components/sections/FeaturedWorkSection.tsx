"use client";

import { useState } from "react";
import {
  Layers,
  Video,
  Building,
  ArrowRight,
} from "lucide-react";

interface FeaturedWorkSectionProps {
  onStartProject?: () => void;
}

export default function FeaturedWorkSection({ onStartProject }: FeaturedWorkSectionProps) {
  const [activeProject, setActiveProject] = useState<"visionvault" | "jagath">("visionvault");

  return (
    <section id="work" className="py-24 bg-[#07080c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.1] bg-white/[0.04] text-[11px] font-mono text-slate-300 font-semibold uppercase tracking-wider mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              PRODUCTION SYSTEMS & CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Work That Moves{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                Ideas Forward.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              We engineer specialized software systems and digital platforms. Here is a look at verified implementations and technology products built by our team.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveProject("visionvault")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeProject === "visionvault"
                  ? "bg-orange-500/20 text-orange-300 border border-orange-500/40 shadow-sm"
                  : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06]"
              }`}
            >
              01 — VisionVault (AI Platform)
            </button>
            <button
              onClick={() => setActiveProject("jagath")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeProject === "jagath"
                  ? "bg-orange-500/20 text-orange-300 border border-orange-500/40 shadow-sm"
                  : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06]"
              }`}
            >
              02 — Jagath Swapna (Digital Experience)
            </button>
          </div>
        </div>

        {/* Selected Project 1: VisionVault */}
        {activeProject === "visionvault" && (
          <div className="rounded-3xl border border-white/[0.1] bg-[#0b0e17] overflow-hidden shadow-2xl shadow-black/70 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column: Context, Problem, Solution & Stack */}
              <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20 font-semibold uppercase">
                      AI / COMPUTER VISION / DIGITAL PRODUCT
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      FLAGSHIP PRODUCT ARCHITECTURE
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                    VisionVault
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                    An AI-powered computer vision platform designed to transform walkthrough videos into structured household inventory data.
                  </p>

                  {/* Problem & Solution Breakdown */}
                  <div className="space-y-4 mb-8">
                    <div className="p-4 rounded-xl bg-[#07080d] border border-white/[0.06]">
                      <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider mb-1">
                        THE PROBLEM
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Manual home inventory documentation for moves, insurance audits, or asset tracking is tedious, error-prone, and takes hours of manual cataloging.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#07080d] border border-white/[0.06]">
                      <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
                        THE HYTHRIX SOLUTION
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        A seamless video ingestion pipeline that decomposes walkthrough footage into keyframes, segments items with computer vision bounding boxes, and generates an exportable structured inventory matrix.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block mb-2 font-semibold">
                    TECHNOLOGIES USED
                  </span>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Computer Vision", "Python", "FastAPI", "OpenAI / Gemini Vision", "Next.js", "Vector Embeddings"].map(
                      (tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>

                  <button
                    onClick={() => {
                      if (onStartProject) onStartProject();
                      else {
                        const target = document.querySelector("#contact");
                        if (target) target.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <span>Discuss a Vision/AI project like this</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Product UI Simulation */}
              <div className="lg:col-span-6 p-6 sm:p-10 bg-[#080a11] flex flex-col justify-center">
                <div className="rounded-2xl border border-white/[0.08] bg-[#0c0f1a] p-5 shadow-inner">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <Video className="w-4 h-4 text-orange-400" />
                      <span className="text-xs font-mono text-white font-medium">
                        walkthrough_living_room_4k.mp4
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      ANALYSIS COMPLETE
                    </span>
                  </div>

                  {/* Simulated Frame Canvas */}
                  <div className="relative aspect-video rounded-xl bg-[#050609] border border-white/[0.06] overflow-hidden flex items-center justify-center mb-4">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-[#0a0d18] to-slate-900 flex items-center justify-center p-6 text-center">
                      <div className="space-y-2">
                        <div className="text-xs font-mono text-slate-400">FRAME #0412 — KEYFRAME EXTRACTION</div>
                        <div className="flex items-center justify-center gap-3">
                          <div className="px-3 py-1 rounded bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-mono">
                            [Bounding Box: Walnut Dining Table]
                          </div>
                          <div className="px-3 py-1 rounded bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-mono">
                            [Bounding Box: OLED TV 65&quot;]
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Structured Output Stream */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                      <span>PARSED ASSET MATRIX</span>
                      <span>CONFIDENCE: 98.4%</span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#07080e] border border-white/[0.04] text-xs">
                        <span className="text-white font-medium">Samsung OLED 65&quot; TV + Soundbar</span>
                        <span className="font-mono text-emerald-400">Living Room • Electronics</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#07080e] border border-white/[0.04] text-xs">
                        <span className="text-white font-medium">Custom Solid Walnut 6-Seat Dining Table</span>
                        <span className="font-mono text-emerald-400">Dining Area • Furniture</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#07080e] border border-white/[0.04] text-xs">
                        <span className="text-white font-medium">Herman Miller Aeron Ergonomic Chair</span>
                        <span className="font-mono text-emerald-400">Home Office • Seating</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Selected Project 2: Jagath Swapna */}
        {activeProject === "jagath" && (
          <div className="rounded-3xl border border-white/[0.1] bg-[#0b0e17] overflow-hidden shadow-2xl shadow-black/70 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Column: Context, Problem, Solution & Stack */}
              <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold uppercase">
                      REAL ESTATE / DIGITAL EXPERIENCE
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      PROPERTY SHOWCASE SYSTEM
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                    Jagath Swapna
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                    A modern, high-performance digital presence and property showcase engineered for seamless residential exploration, architectural floorplan inspection, and high-intent lead capture.
                  </p>

                  {/* Problem & Solution Breakdown */}
                  <div className="space-y-4 mb-8">
                    <div className="p-4 rounded-xl bg-[#07080d] border border-white/[0.06]">
                      <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider mb-1">
                        THE CHALLENGE
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Traditional real-estate developer websites are often clunky, slow to load architectural graphics, and leak potential buyers through unengaging PDF downloads.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#07080d] border border-white/[0.06]">
                      <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-1">
                        THE HYTHRIX IMPLEMENTATION
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Engineered a sub-second loading web experience with interactive unit selection, master-plan zooming, and instant WhatsApp inquiry routing that captures buyer intent directly into the sales pipeline.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest block mb-2 font-semibold">
                    TECHNOLOGIES USED
                  </span>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Next.js", "TypeScript", "Tailwind CSS", "Interactive SVG Floorplans", "Vercel Edge", "WhatsApp API"].map(
                      (tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>

                  <button
                    onClick={() => {
                      if (onStartProject) onStartProject();
                      else {
                        const target = document.querySelector("#contact");
                        if (target) target.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <span>Inquire for real estate digital systems</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Showcase Simulation */}
              <div className="lg:col-span-6 p-6 sm:p-10 bg-[#080a11] flex flex-col justify-center">
                <div className="rounded-2xl border border-white/[0.08] bg-[#0c0f1a] p-5 shadow-inner">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-mono text-white font-medium">
                        Jagath Swapna // Residential Showcase
                      </span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      LIVE EXPERIENCE
                    </span>
                  </div>

                  {/* Showcase Preview Mockup */}
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-[#060810] border border-white/[0.06]">
                      <div className="text-xs font-semibold text-white mb-1">
                        Luxury 3BHK & 4BHK Residential Enclave
                      </div>
                      <p className="text-xs text-slate-400 mb-3">
                        Gated community featuring 78% open green space, EV infrastructure, and biometric clubhouse access.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                        <div className="p-2 rounded bg-white/[0.02] border border-white/[0.05]">
                          <span className="text-slate-400 block">Unit Sizes</span>
                          <span className="text-white font-semibold">1,850 - 2,940 SQ.FT</span>
                        </div>
                        <div className="p-2 rounded bg-white/[0.02] border border-white/[0.05]">
                          <span className="text-slate-400 block">Lead Response SLA</span>
                          <span className="text-emerald-400 font-semibold">&lt;45s Auto-Dispatch</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/25 flex items-center justify-between text-xs">
                      <span className="text-orange-300 font-medium">Direct WhatsApp Brochure & Tour Dispatch</span>
                      <span className="font-mono text-orange-400 text-[10px] uppercase font-bold">INTEGRATED</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Selected Work Footer Note (Honest, authentic positioning) */}
        <div className="mt-8 p-6 rounded-2xl border border-white/[0.06] bg-[#090b12] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/[0.04] text-orange-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Have a custom software or AI challenge?</div>
              <div className="text-xs text-slate-400">
                We design and engineer bespoke platforms tailored to your operational constraints.
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              if (onStartProject) onStartProject();
              else {
                const target = document.querySelector("#contact");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.1] transition-all shrink-0"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
