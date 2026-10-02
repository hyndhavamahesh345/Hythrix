"use client";

import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Bot,
  Phone,
  Database,
  Users,
  Building,
  Workflow,
} from "lucide-react";

interface ProductsSectionProps {
  onOpenLeadFlowModal?: () => void;
  onStartProject?: () => void;
}

export default function ProductsSection({ onOpenLeadFlowModal, onStartProject }: ProductsSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  const pipelineSteps = [
    {
      step: "01",
      name: "Website Ingestion",
      detail: "Inbound visitor submits property inquiry on web portal or campaign landing page.",
      metric: "Instant Event Webhook",
      icon: Building,
    },
    {
      step: "02",
      name: "WhatsApp Outreach",
      detail: "Automated branded WhatsApp message dispatched in <45s with project PDF brochure.",
      metric: "<45s Latency SLA",
      icon: Phone,
    },
    {
      step: "03",
      name: "AI Qualification",
      detail: "Conversational qualification assessing budget, timeline, configuration, and buying intent.",
      metric: "Intent Score 0-100",
      icon: Bot,
    },
    {
      step: "04",
      name: "CRM Pipeline Sync",
      detail: "Live bidirectional sync into CRM with enriched metadata, conversation transcripts, and tags.",
      metric: "Zero Manual Entry",
      icon: Database,
    },
    {
      step: "05",
      name: "Site Visit & Follow-up",
      detail: "Direct sales closer assignment with calendar scheduling and automated reminder sequence.",
      metric: "Higher Conversion",
      icon: Users,
    },
  ];

  return (
    <section id="products" className="py-14 sm:py-24 bg-[#ffffff] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/25 bg-orange-50 text-[11px] font-mono text-orange-700 font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            PROPRIETARY TECHNOLOGY
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Products Built by{" "}
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              HYTHRIX.
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 mt-3 sm:mt-4 leading-relaxed">
            Alongside client solutions, we build our own technology products designed around real business problems. We dogfood our architectures to prove reliability at scale.
          </p>
        </div>

        {/* Featured Flagship Product Card: HYTHRIX LeadFlow */}
        <div className="rounded-2xl sm:rounded-3xl border border-orange-200/90 bg-gradient-to-b from-orange-50/30 via-white to-white p-5 sm:p-8 md:p-12 shadow-xl shadow-orange-500/5 relative overflow-hidden">
          {/* Product Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 sm:pb-8 mb-6 sm:mb-8 border-b border-slate-200 gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-orange-100 text-orange-800 border border-orange-200 uppercase tracking-wider">
                  REAL ESTATE LEAD AUTOMATION
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 uppercase tracking-wider">
                  A HYTHRIX PRODUCT
                </span>
              </div>
              <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight">
                HYTHRIX LeadFlow
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  if (onOpenLeadFlowModal) {
                    onOpenLeadFlowModal();
                  } else if (onStartProject) {
                    onStartProject();
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-md shadow-orange-500/20 transition-all"
              >
                <span>Explore LeadFlow Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-700 max-w-3xl mb-10 leading-relaxed">
            A lead-management and automation system designed to help real-estate businesses capture, qualify and follow up with property enquiries without lead leakage or delayed response times.
          </p>

          {/* Interactive Visual Pipeline Flow */}
          <div className="mb-8 sm:mb-10">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-2">
              <Workflow className="w-4 h-4 text-orange-500" />
              <span>PIPELINE ARCHITECTURE (TAP TO INSPECT)</span>
            </div>

            {/* Stepper Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 sm:gap-3">
              {pipelineSteps.map((step, idx) => {
                const Icon = step.icon;
                const isSelected = activeStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`p-3 sm:p-4 rounded-xl border text-left transition-all duration-200 ${
                      isSelected
                        ? "bg-white border-orange-500/80 shadow-md ring-1 ring-orange-500/30"
                        : "bg-slate-50/80 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                      <span className="text-[10px] font-mono font-bold text-slate-500">
                        STEP {step.step}
                      </span>
                      <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-orange-600" : "text-slate-400"}`} />
                    </div>
                    <div className="text-xs font-bold text-slate-950 mb-0.5 sm:mb-1">{step.name}</div>
                    <div className="text-[10px] font-mono text-emerald-700">{step.metric}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Deep Dive Preview Card */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] sm:text-xs font-mono text-orange-600 font-semibold uppercase">
                  ACTIVE STAGE INSPECTION // STEP {pipelineSteps[activeStep].step}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-950 mt-1">
                  {pipelineSteps[activeStep].name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                  {pipelineSteps[activeStep].detail}
                </p>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 sm:gap-3 shrink-0 pt-2 sm:pt-0">
                <span className="px-2.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono">
                  {pipelineSteps[activeStep].metric}
                </span>
                <button
                  onClick={() => {
                    if (onOpenLeadFlowModal) onOpenLeadFlowModal();
                    else if (onStartProject) onStartProject();
                  }}
                  className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-xs font-semibold text-slate-800 border border-slate-200 shadow-sm transition-all"
                >
                  View Live Lead Engine
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
