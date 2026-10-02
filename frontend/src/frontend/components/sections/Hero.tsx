"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  TrendingUp,
  Activity,
  CheckCircle2,
  Terminal,
} from "lucide-react";

interface HeroProps {
  onStartProject?: () => void;
}

export default function Hero({ onStartProject }: HeroProps) {
  const router = useRouter();
  const [activeLayer, setActiveLayer] = useState<"build" | "automate" | "grow">("build");

  const layers = [
    {
      id: "build" as const,
      number: "01",
      name: "BUILD",
      tagline: "Digital Products & Modern Platforms",
      icon: Code2,
      accentColor: "from-blue-500 to-indigo-600",
      textColor: "text-blue-600",
      badgeBg: "bg-blue-50 border-blue-200 text-blue-700",
      summary: "High-performance websites, scalable web applications, and resilient SaaS architectures.",
      capabilities: [
        { label: "Web Applications & SaaS", status: "Active 99.98% uptime" },
        { label: "High-Speed Business Sites", status: "Sub-second TTFB" },
        { label: "APIs & Custom Microservices", status: "Zero-latency dispatch" },
        { label: "Rapid MVPs & Scalable Core", status: "Production ready" },
      ],
      telemetry: {
        engine: "Next.js 16 + TypeScript",
        latency: "18ms edge dispatch",
        integrity: "Strictly Typed • CI/CD Verified",
      },
    },
    {
      id: "automate" as const,
      number: "02",
      name: "AUTOMATE",
      tagline: "Intelligent AI & Autonomous Workflows",
      icon: Cpu,
      accentColor: "from-orange-500 to-amber-500",
      textColor: "text-orange-600",
      badgeBg: "bg-orange-50 border-orange-200 text-orange-700",
      summary: "AI agents, automated lead qualification, WhatsApp dispatch, and headless CRM synchronization.",
      capabilities: [
        { label: "Autonomous AI Agents & RAG", status: "Stateful context engines" },
        { label: "WhatsApp & Omnichannel Bots", status: "<45s response SLA" },
        { label: "End-to-End CRM Workflows", status: "Automated routing" },
        { label: "Document & Contract Intelligence", status: "Structured JSON parsing" },
      ],
      telemetry: {
        engine: "Hybrid LLM + Event Webhooks",
        latency: "Real-time dispatch",
        integrity: "Audit-logged & SOC2 compliant",
      },
    },
    {
      id: "grow" as const,
      number: "03",
      name: "GROW",
      tagline: "Measurable Acquisition & Conversion",
      icon: TrendingUp,
      accentColor: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-600",
      badgeBg: "bg-emerald-50 border-emerald-200 text-emerald-700",
      summary: "High-intent lead generation, technical SEO, conversion-rate optimization, and revenue analytics.",
      capabilities: [
        { label: "Technical & Programmatic SEO", status: "Indexation accelerated" },
        { label: "High-Converting Landing Pages", status: "4.2x conversion baseline" },
        { label: "Multi-Channel Lead Engines", status: "Qualified inbound pipeline" },
        { label: "Unified Attribution Analytics", status: "End-to-end CAC/LTV tracking" },
      ],
      telemetry: {
        engine: "Real-time Telemetry & Data Pipelines",
        latency: "Synchronous updates",
        integrity: "Transparent attribution",
      },
    },
  ];

  const currentLayerData = layers.find((l) => l.id === activeLayer)!;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#ffffff]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-orange-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-36 -left-32 w-96 h-96 bg-blue-500/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 -right-32 w-96 h-96 bg-amber-500/5 blur-3xl pointer-events-none -z-10" />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Positioning, Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/25 bg-orange-50/80 backdrop-blur-md mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-orange-700 uppercase">
                DIGITAL PRODUCTS • AI & AUTOMATION • GROWTH
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.08] mb-6">
              BUILD.{" "}
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                AUTOMATE.
              </span>{" "}
              GROW.
            </h1>

            {/* Primary Supporting Copy */}
            <p className="text-lg sm:text-xl font-medium text-slate-800 max-w-2xl leading-relaxed mb-4">
              We build digital products, intelligent systems, and growth solutions for modern businesses.
            </p>

            {/* Secondary Supporting Copy */}
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed mb-8">
              From websites and software to AI automation and growth systems, HYTHRIX helps businesses turn ideas into working technology.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => {
                  if (onStartProject) {
                    onStartProject();
                  } else {
                    router.push("/contact");
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all duration-200"
              >
                <span>Explore Capabilities</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </Link>
            </div>

            {/* Key Trust Signals */}
            <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-slate-200 w-full max-w-xl">
              <div>
                <div className="text-xs font-mono text-orange-600 mb-1 font-semibold uppercase tracking-wider">
                  01 // PRODUCT
                </div>
                <div className="text-sm font-semibold text-slate-900">Full-Stack Builds</div>
                <div className="text-xs text-slate-500">Web, SaaS, APIs</div>
              </div>
              <div>
                <div className="text-xs font-mono text-amber-600 mb-1 font-semibold uppercase tracking-wider">
                  02 // INTELLIGENCE
                </div>
                <div className="text-sm font-semibold text-slate-900">AI Workflows</div>
                <div className="text-xs text-slate-500">Agents & Automation</div>
              </div>
              <div>
                <div className="text-xs font-mono text-emerald-600 mb-1 font-semibold uppercase tracking-wider">
                  03 // SCALE
                </div>
                <div className="text-sm font-semibold text-slate-900">Growth Systems</div>
                <div className="text-xs text-slate-500">SEO & Conversion</div>
              </div>
            </div>
          </div>

          {/* Right Column: System Architecture Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-xl p-5 sm:p-6 shadow-xl shadow-slate-200/60 overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 pl-2">
                    HYTHRIX // SYSTEM_TOPOLOGY.v1
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>SYNCED</span>
                </div>
              </div>

              {/* Three Interconnected Layers Selector */}
              <div className="grid grid-cols-3 gap-2 p-1.5 rounded-xl bg-slate-100/80 border border-slate-200/70 mb-5">
                {layers.map((layer) => {
                  const Icon = layer.icon;
                  const isSelected = activeLayer === layer.id;
                  return (
                    <button
                      key={layer.id}
                      onClick={() => setActiveLayer(layer.id)}
                      className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                        isSelected
                          ? "bg-white text-slate-950 border border-slate-200 shadow-sm"
                          : "text-slate-500 hover:text-slate-900 hover:bg-white/60"
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon className={`w-3.5 h-3.5 ${isSelected ? layer.textColor : "text-slate-400"}`} />
                        <span className="font-mono text-[11px]">{layer.number}</span>
                      </div>
                      <span className="tracking-wider">{layer.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Layer Deep Dive Card */}
              <div className="p-4 sm:p-5 rounded-xl border border-slate-200/80 bg-slate-50/70 relative overflow-hidden transition-all duration-300">
                {/* Subtle top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${currentLayerData.accentColor}`}
                />

                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
                        LAYER {currentLayerData.number}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded border ${currentLayerData.badgeBg}`}
                      >
                        {currentLayerData.name}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-950 mt-1">
                      {currentLayerData.tagline}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  {currentLayerData.summary}
                </p>

                {/* Capabilities Breakdown */}
                <div className="space-y-2 mb-4">
                  {currentLayerData.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs p-2 rounded-lg bg-white border border-slate-200/80"
                    >
                      <span className="text-slate-800 font-medium">{cap.label}</span>
                      <span className="font-mono text-[10px] text-slate-500 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        {cap.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Live Telemetry Bar */}
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-orange-500" />
                    <span className="truncate max-w-[160px] sm:max-w-none">{currentLayerData.telemetry.engine}</span>
                  </div>
                  <span className="text-emerald-600 font-medium">
                    {currentLayerData.telemetry.latency}
                  </span>
                </div>
              </div>

              {/* Connected Pipeline Flow Indicator */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>DATA PIPELINE:</span>
                <div className="flex items-center gap-2">
                  <span className={activeLayer === "build" ? "text-orange-600 font-bold" : "text-slate-400"}>
                    BUILD
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-300" />
                  <span className={activeLayer === "automate" ? "text-orange-600 font-bold" : "text-slate-400"}>
                    AUTOMATE
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-300" />
                  <span className={activeLayer === "grow" ? "text-orange-600 font-bold" : "text-slate-400"}>
                    GROW
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
