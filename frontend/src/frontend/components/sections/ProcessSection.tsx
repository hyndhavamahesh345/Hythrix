"use client";

import { CheckCircle2, Search, Compass, Palette, Code, Rocket } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      name: "Discover",
      tagline: "Understand the business, users and problem.",
      description:
        "We dig into operational workflows, identify manual bottlenecks, study target customer behavior, and uncover high-impact leverage points before writing a single line of code.",
      icon: Search,
      deliverables: ["Problem Specification", "Architecture Audit", "ROI Benchmark"],
    },
    {
      step: "02",
      name: "Strategy",
      tagline: "Define the solution, technology and roadmap.",
      description:
        "We engineer the technical blueprint: choosing the right tech stack, data schemas, API contracts, AI models, and milestone delivery dates with strict scope boundaries.",
      icon: Compass,
      deliverables: ["System Architecture Blueprint", "Tech Stack Selection", "Phase Roadmap"],
    },
    {
      step: "03",
      name: "Design",
      tagline: "Create the user experience and product structure.",
      description:
        "We build clean, intuitive design systems and high-fidelity prototypes. Every interface interaction is optimized for clarity, speed, and frictionless user conversion.",
      icon: Palette,
      deliverables: ["Figma Design System", "Interactive Prototype", "Component Library"],
    },
    {
      step: "04",
      name: "Build",
      tagline: "Develop, integrate, test and deploy.",
      description:
        "Iterative engineering sprints using modern TypeScript, Next.js, robust backend microservices, and AI integrations, backed by automated testing and CI/CD pipelines.",
      icon: Code,
      deliverables: ["Full-Stack Codebase", "API Integration", "Automated QA Tests"],
    },
    {
      step: "05",
      name: "Grow",
      tagline: "Optimize, automate and continuously improve.",
      description:
        "Post-launch telemetry, speed optimization, search indexation, workflow automation fine-tuning, and conversion iteration to ensure ongoing business impact.",
      icon: Rocket,
      deliverables: ["Telemetry Monitoring", "Conversion Audits", "Workflow Tuning"],
    },
  ];

  return (
    <section id="process" className="py-14 sm:py-24 bg-slate-50/60 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-100 text-[11px] font-mono text-slate-700 font-semibold uppercase tracking-wider mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            ENGINEERING EXECUTION
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            From Idea to{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Impact.
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 mt-3 sm:mt-4 leading-relaxed">
            A disciplined, 5-step delivery framework built to eliminate guesswork, mitigate technical risk, and deliver production-ready software on schedule.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-slate-200/90 bg-white hover:border-orange-500/40 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-slate-200/60"
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-mono font-bold text-orange-600">
                      {item.step}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-50 text-slate-600 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 mb-2">{item.name}</h3>
                  <div className="text-xs font-semibold text-orange-600 mb-3 leading-snug">
                    {item.tagline}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Deliverables */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                    KEY ARTIFACTS
                  </span>
                  <div className="space-y-1.5">
                    {item.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
