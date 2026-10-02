"use client";

import { Target, Zap, Bot, RefreshCw } from "lucide-react";

export default function WhyHythrixSection() {
  const points = [
    {
      number: "01",
      title: "Business First",
      icon: Target,
      tagline: "We start with the problem, not the technology.",
      description:
        "We don't recommend complex architectures when a lightweight solution gets the job done faster. Every technical decision is grounded in conversion, operational efficiency, and tangible business ROI.",
    },
    {
      number: "02",
      title: "Build Fast",
      icon: Zap,
      tagline: "Focused teams and modern technology move ideas into reality.",
      description:
        "By eliminating bureaucratic layers and leveraging composable, modern tech stacks, we deliver high-fidelity prototypes and production releases in weeks rather than months.",
    },
    {
      number: "03",
      title: "Automation Mindset",
      icon: Bot,
      tagline: "We look for opportunities to reduce repetitive manual work.",
      description:
        "Whenever humans are doing tasks that machines can do better—like copy-pasting lead data, sending repetitive WhatsApp updates, or formatting documents—we engineer intelligent automation.",
    },
    {
      number: "04",
      title: "Built to Evolve",
      icon: RefreshCw,
      tagline: "Solutions designed so businesses can improve and expand over time.",
      description:
        "No vendor lock-in or fragile spaghetti code. We write modular, well-documented TypeScript, standardized REST APIs, and scalable databases that your internal team can grow with confidence.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/25 bg-orange-50 text-[11px] font-mono text-orange-700 font-semibold uppercase tracking-wider mb-4">
            THE HYTHRIX ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            More Than a{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Development Agency.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            We partner with forward-thinking operators as a high-velocity product and automation team—building systems that last, scale, and generate measurable enterprise value.
          </p>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl border border-slate-200/90 bg-white p-8 hover:border-orange-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-orange-50 text-orange-600 border border-orange-200/60">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-mono font-bold text-slate-400">
                    {"//"} {pt.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-950 mb-2 group-hover:text-slate-950 transition-colors">
                  {pt.title}
                </h3>
                <div className="text-xs font-semibold text-orange-600 mb-3">
                  {pt.tagline}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
