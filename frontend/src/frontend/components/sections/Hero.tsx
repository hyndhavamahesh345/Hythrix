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
  const [activeLayer, setActiveLayer] = useState<"build" | "automate" | "scale">("build");

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
        {
          label: "Web Applications & SaaS",
          description: "Scalable applications built around your business requirements.",
          status: "Custom Built",
        },
        {
          label: "Business Websites & Landing Pages",
          description: "Fast, modern web presences designed to build authority and convert visitors.",
          status: "Optimized",
        },
        {
          label: "Custom APIs & Integrations",
          description: "Seamless data exchange between your CRM, database, and internal tools.",
          status: "Connected",
        },
        {
          label: "Rapid MVPs & Core Software",
          description: "Turn your business concept into working, production-ready software.",
          status: "Production Ready",
        },
      ],
      telemetry: {
        engine: "Modern Tech Stack • TypeScript",
        latency: "Reliable & Scalable",
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
      summary: "Conversational AI voice agents, intelligent assistants, lead qualification, and automated CRM workflows.",
      capabilities: [
        {
          label: "AI Voice Agents & Telephony",
          description: "Sub-second conversational voice calling for 24/7 inbound qualification and outbound follow-ups.",
          status: "Sub-Second Latency",
        },
        {
          label: "AI Assistants & Knowledge Bases",
          description: "Intelligent assistants trained on your documents to answer customer questions.",
          status: "Instant Answers",
        },
        {
          label: "WhatsApp & Inbound Messaging",
          description: "Engage prospective clients instantly on WhatsApp and qualify their interest.",
          status: "Automated",
        },
        {
          label: "CRM & Lead Pipeline Automation",
          description: "Automatically route leads, update records, and notify your sales team.",
          status: "Synchronized",
        },
        {
          label: "Document & Invoice Processing",
          description: "Extract structured data from invoices, contracts, and forms automatically.",
          status: "Zero Data Entry",
        },
      ],
      telemetry: {
        engine: "Smart Workflows • Connected APIs",
        latency: "Always-On Operations",
        integrity: "Secure & Audit-Logged",
      },
    },
    {
      id: "scale" as const,
      number: "03",
      name: "SCALE",
      tagline: "Build Presence. Reach Audience. Turn Attention Into Growth.",
      icon: TrendingUp,
      accentColor: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-600",
      badgeBg: "bg-emerald-50 border-emerald-200 text-emerald-700",
      summary:
        "Build your presence. Reach the right audience. Turn attention into measurable growth. From content and social media to SEO, campaigns, and paid advertising, we create marketing systems designed around your business goals.",
      capabilities: [
        {
          label: "Digital & Social Media Marketing",
          description: "Reach the right audience across organic social channels and digital platforms.",
          status: "Audience Reach",
        },
        {
          label: "Content Strategy & Brand Campaigns",
          description: "High-impact storytelling and positioning that builds authority and trust.",
          status: "Brand Authority",
        },
        {
          label: "SEO & Paid Advertising",
          description: "Search engine optimization and paid media that drive consistent inbound demand.",
          status: "Demand Generation",
        },
        {
          label: "Lead Generation & Conversion Analytics",
          description: "Turn attention into paying customers with analytics and conversion optimization.",
          status: "Customer Growth",
        },
      ],
      telemetry: {
        engine: "Marketing Systems • Campaigns",
        latency: "Attention to Customers",
        integrity: "Measurable Growth",
      },
    },
  ];

  const currentLayerData = layers.find((l) => l.id === activeLayer)!;

  return (
    <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#ffffff]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-orange-500/10 via-amber-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-36 -left-32 w-96 h-96 bg-blue-500/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 -right-32 w-96 h-96 bg-amber-500/5 blur-3xl pointer-events-none -z-10" />

      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Positioning, Headline & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-orange-500/25 bg-orange-50/80 backdrop-blur-md mb-5 sm:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-mono font-semibold tracking-wider text-orange-700 uppercase">
                DIGITAL PRODUCTS • AI & AUTOMATION • GROWTH
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-950 leading-[1.1] mb-5 sm:mb-6">
              BUILD.{" "}
              <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
                AUTOMATE.
              </span>{" "}
              GROW.
            </h1>

            {/* Primary Supporting Copy */}
            <p className="text-base sm:text-xl font-medium text-slate-800 max-w-2xl leading-relaxed mb-3 sm:mb-4">
              We build digital products, intelligent systems, and growth solutions for modern businesses.
            </p>

            {/* Secondary Supporting Copy */}
            <p className="text-xs sm:text-base text-slate-600 max-w-2xl leading-relaxed mb-6 sm:mb-8">
              From websites and software to AI automation and growth systems, HYTHRIX helps businesses turn ideas into working technology.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                href={`https://wa.me/916305081722?text=${encodeURIComponent("Hi HYTHRIX, I would like to discuss a project.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all duration-200"
              >
                <span>Explore Capabilities</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </Link>
            </div>

            {/* Key Trust Signals */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-6 sm:pt-10 mt-6 sm:mt-10 border-t border-slate-200 w-full max-w-xl">
              <div>
                <div className="text-[10px] sm:text-xs font-mono text-orange-600 mb-0.5 sm:mb-1 font-semibold uppercase tracking-wider">
                  01 // PRODUCT
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">Full-Stack Builds</div>
                <div className="text-[10px] sm:text-xs text-slate-500">Web, SaaS, APIs</div>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-mono text-amber-600 mb-0.5 sm:mb-1 font-semibold uppercase tracking-wider">
                  02 // INTELLIGENCE
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">AI Workflows</div>
                <div className="text-[10px] sm:text-xs text-slate-500">Agents & Auto</div>
              </div>
              <div>
                <div className="text-[10px] sm:text-xs font-mono text-emerald-600 mb-0.5 sm:mb-1 font-semibold uppercase tracking-wider">
                  03 // SCALE
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">Marketing</div>
                <div className="text-[10px] sm:text-xs text-slate-500">Reach & Demand</div>
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
                    HYTHRIX // OPERATIONS_ARCHITECTURE
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>ONLINE</span>
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
                      className="p-2.5 rounded-lg bg-white border border-slate-200/80 hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-slate-900 font-semibold text-xs">{cap.label}</span>
                        <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60 flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                          {cap.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-snug">{cap.description}</p>
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
                <span>BUSINESS PIPELINE:</span>
                <div className="flex items-center gap-2">
                  <span className={activeLayer === "build" ? "text-orange-600 font-bold" : "text-slate-400"}>
                    BUILD
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-300" />
                  <span className={activeLayer === "automate" ? "text-orange-600 font-bold" : "text-slate-400"}>
                    AUTOMATE
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-300" />
                  <span className={activeLayer === "scale" ? "text-orange-600 font-bold" : "text-slate-400"}>
                    SCALE
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
