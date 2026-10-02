"use client";

import { useRouter } from "next/navigation";
import { Code2, Cpu, TrendingUp, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface IntroductionSectionProps {
  onStartProject?: () => void;
}

export default function IntroductionSection({ onStartProject }: IntroductionSectionProps) {
  const router = useRouter();
  const cards = [
    {
      pillar: "BUILD",
      number: "01",
      tagline: "Turn ideas into digital products.",
      description:
        "From corporate web presences to complex full-stack web applications and SaaS platforms, we architect resilient digital products that people love to use.",
      icon: Code2,
      accentBorder: "hover:border-blue-500/40",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      accentBar: "bg-gradient-to-r from-blue-500 to-indigo-500",
      items: [
        "Websites (Corporate & Brand)",
        "Web Applications & SaaS",
        "Rapid MVP Development",
        "High-Speed Landing Pages",
        "Custom Software & Internal Tools",
        "APIs & Microservice Architecture",
      ],
      deliverable: "Production-ready, responsive, and performance-tuned software.",
    },
    {
      pillar: "AUTOMATE",
      number: "02",
      tagline: "Turn repetitive work into intelligent workflows.",
      description:
        "We harness cutting-edge AI, custom agents, and connected workflow systems to eliminate operational friction and run business operations autonomously.",
      icon: Cpu,
      accentBorder: "hover:border-orange-500/40",
      badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
      accentBar: "bg-gradient-to-r from-orange-500 to-amber-500",
      items: [
        "Autonomous AI Agents & RAG",
        "WhatsApp Business Automation",
        "Intelligent Lead Qualification",
        "CRM & Pipeline Synchronization",
        "Automated Customer Support",
        "Contract & Document Processing",
      ],
      deliverable: "Zero-latency workflows operating 24/7 without manual bottlenecks.",
    },
    {
      pillar: "GROW",
      number: "03",
      tagline: "Turn digital presence into measurable growth.",
      description:
        "Building great software is only half the battle. We implement technical SEO, high-conversion funnels, and data attribution engines to drive real revenue.",
      icon: TrendingUp,
      accentBorder: "hover:border-emerald-500/40",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      accentBar: "bg-gradient-to-r from-emerald-500 to-teal-500",
      items: [
        "Technical & Local SEO",
        "High-Intent Lead Generation",
        "Conversion Rate Optimization (CRO)",
        "Funnel Tracking & Attribution",
        "Digital Performance Campaigns",
        "Data & Revenue Analytics",
      ],
      deliverable: "Measurable acquisition pipelines that turn visitors into pipeline.",
    },
  ];

  return (
    <section id="about" className="py-14 sm:py-24 bg-[#ffffff] relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-100 text-[10px] sm:text-[11px] font-mono text-slate-700 font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            THE HYTHRIX METHODOLOGY
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] mb-4 sm:mb-5">
            Technology Built Around{" "}
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Business Outcomes.
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
            We don&apos;t build technology just for the sake of technology. We build digital products, automate repetitive work, and create systems that help businesses operate and grow better.
          </p>
        </div>

        {/* Three Large Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.pillar}
                className={`group relative rounded-2xl border border-slate-200/90 bg-white hover:bg-slate-50/50 p-5 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 ${card.accentBorder}`}
              >
                {/* Top accent gradient line */}
                <div className={`absolute top-0 left-6 right-6 h-[2px] ${card.accentBar} opacity-60 group-hover:opacity-100 transition-opacity`} />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-slate-500 tracking-wider">
                      PHASE // {card.number}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold border ${card.badgeColor}`}
                    >
                      <Icon className="w-3 h-3" />
                      {card.pillar}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3 group-hover:text-slate-950 transition-colors">
                    {card.tagline}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Bullet capabilities */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                    {card.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Deliverable Summary */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-slate-500">
                    <span className="text-slate-800 font-semibold block">IMPACT OUTCOME</span>
                    <span className="text-slate-500">{card.deliverable}</span>
                  </div>
                  <button
                    onClick={() => {
                      if (onStartProject) onStartProject();
                      else {
                        router.push("/contact");
                      }
                    }}
                    className="p-2 rounded-lg bg-slate-100 group-hover:bg-slate-200 text-slate-600 group-hover:text-slate-950 transition-colors"
                    aria-label={`Inquire about ${card.pillar}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
