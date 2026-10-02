"use client";

import { useState } from "react";
import {
  Code2,
  Cpu,
  TrendingUp,
  Globe,
  Database,
  Bot,
  Zap,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface ServicesSectionProps {
  onStartProject?: () => void;
}

export default function ServicesSection({ onStartProject }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<"all" | "digital-products" | "ai-automation" | "growth">("all");

  const services = [
    // 1. Digital Products (Flagship Priority)
    {
      category: "digital-products",
      categoryName: "Digital Products",
      badge: "FLAGSHIP CAPABILITY",
      pillar: "BUILD",
      title: "Web Applications & SaaS Platforms",
      description:
        "Full-stack web applications engineered for speed, high concurrency, and long-term maintainability. From enterprise dashboards to multi-tenant SaaS products.",
      icon: Code2,
      accentBorder: "border-blue-200 hover:border-blue-400",
      tagColor: "text-blue-700 bg-blue-50 border-blue-200",
      capabilities: [
        "Multi-Tenant SaaS Architecture",
        "Role-Based Access & Auth Systems",
        "Real-Time Collaborative UIs",
        "Custom APIs & Third-Party Integrations",
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    },
    {
      category: "digital-products",
      categoryName: "Digital Products",
      badge: "FLAGSHIP CAPABILITY",
      pillar: "BUILD",
      title: "High-Performance Websites & MVPs",
      description:
        "Engineered business websites, high-converting landing pages, and rapid MVP turnarounds designed to validate ideas and establish dominant brand authority.",
      icon: Globe,
      accentBorder: "border-indigo-200 hover:border-indigo-400",
      tagColor: "text-indigo-700 bg-indigo-50 border-indigo-200",
      capabilities: [
        "Corporate & Startup Web Presences",
        "High-Speed Conversion Landing Pages",
        "Rapid MVP Prototyping & Deployments",
        "Headless CMS Integration",
      ],
      technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "Vercel", "Framer Motion"],
    },
    {
      category: "digital-products",
      categoryName: "Digital Products",
      badge: "CORE ENGINEERING",
      pillar: "BUILD",
      title: "Custom Software & Internal Tools",
      description:
        "Purpose-built internal operational software, administrative consoles, and microservice APIs that replace chaotic spreadsheets and fragmented SaaS subscriptions.",
      icon: Database,
      accentBorder: "border-sky-200 hover:border-sky-400",
      tagColor: "text-sky-700 bg-sky-50 border-sky-200",
      capabilities: [
        "Internal Operations Dashboards",
        "REST & GraphQL Microservices",
        "Data Migration & Synchronization",
        "Automated Reporting Consoles",
      ],
      technologies: ["Node.js", "FastAPI", "Python", "Docker", "REST APIs"],
    },

    // 2. AI & Automation (Flagship Priority)
    {
      category: "ai-automation",
      categoryName: "AI & Automation",
      badge: "FLAGSHIP CAPABILITY",
      pillar: "AUTOMATE",
      title: "Autonomous AI Agents & RAG Systems",
      description:
        "Context-aware AI agents equipped with vector retrieval (RAG) that execute complex tasks, answer queries using proprietary knowledge bases, and resolve operations.",
      icon: Bot,
      accentBorder: "border-orange-200 hover:border-orange-400",
      tagColor: "text-orange-700 bg-orange-50 border-orange-200",
      capabilities: [
        "Domain-Tuned RAG Knowledge Bases",
        "Multi-Step Autonomous Tool Calling",
        "Intelligent Customer Service Agents",
        "Deterministic Guardrails & Auditing",
      ],
      technologies: ["OpenAI", "Gemini", "LangChain", "Vector DBs", "Python", "FastAPI"],
    },
    {
      category: "ai-automation",
      categoryName: "AI & Automation",
      badge: "FLAGSHIP CAPABILITY",
      pillar: "AUTOMATE",
      title: "Omnichannel & WhatsApp Automation",
      description:
        "Direct-to-consumer conversational systems that capture inbound leads, conduct instant qualification, schedule appointments, and update sales teams in seconds.",
      icon: Cpu,
      accentBorder: "border-amber-200 hover:border-amber-400",
      tagColor: "text-amber-700 bg-amber-50 border-amber-200",
      capabilities: [
        "Official WhatsApp Cloud API Solutions",
        "Conversational Intent Scoring",
        "Automated Calendar & Tour Booking",
        "Rich Media & Document Delivery",
      ],
      technologies: ["WhatsApp API", "Webhooks", "Node.js", "Meta Graph API"],
    },
    {
      category: "ai-automation",
      categoryName: "AI & Automation",
      badge: "CORE WORKFLOWS",
      pillar: "AUTOMATE",
      title: "CRM, Workflow & Document Pipelines",
      description:
        "Connect fragmented business tools into unified, event-driven pipelines. Automated invoice generation, contract extraction, and zero-touch CRM hygiene.",
      icon: Zap,
      accentBorder: "border-yellow-200 hover:border-yellow-400",
      tagColor: "text-yellow-700 bg-yellow-50 border-yellow-200",
      capabilities: [
        "Event-Driven n8n & Make Automation",
        "AI OCR & Unstructured Document Parsing",
        "Lead Routing & Instant CRM Ingestion",
        "Custom Webhook Middleware",
      ],
      technologies: ["n8n", "Webhooks", "Python", "OCR", "HubSpot / Zoho API"],
    },

    // 3. Growth Systems (Additional Capability)
    {
      category: "growth",
      categoryName: "Growth Systems",
      badge: "GROWTH CAPABILITY",
      pillar: "GROW",
      title: "Technical SEO & Programmatic Discovery",
      description:
        "Engineered SEO foundations, Core Web Vitals optimization, structured schema markup, and programmatic page generation that dominate organic search results.",
      icon: TrendingUp,
      accentBorder: "border-emerald-200 hover:border-emerald-400",
      tagColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      capabilities: [
        "Core Web Vitals & Speed Optimization",
        "Structured Schema & JSON-LD Architectures",
        "Programmatic Landing Pages",
        "Local Search & Geo-Targeted Signals",
      ],
      technologies: ["Next.js SSR", "Google Search Console", "Schema.org", "Lighthouse"],
    },
    {
      category: "growth",
      categoryName: "Growth Systems",
      badge: "GROWTH CAPABILITY",
      pillar: "GROW",
      title: "Conversion Optimization & Analytics",
      description:
        "End-to-end telemetry and funnel architecture to turn traffic into qualified pipeline. Rigorous A/B testing, heatmap analytics, and revenue attribution.",
      icon: Layers,
      accentBorder: "border-teal-200 hover:border-teal-400",
      tagColor: "text-teal-700 bg-teal-50 border-teal-200",
      capabilities: [
        "Frictionless Form & Lead Funnel Auditing",
        "A/B Variant Testing & Layout Iteration",
        "Full-Funnel CAC & Attribution Tracking",
        "Event-Driven Behavioral Analytics",
      ],
      technologies: ["PostHog", "Google Analytics 4", "Mixpanel", "Conversion UI"],
    },
  ];

  const filteredServices =
    activeTab === "all" ? services : services.filter((s) => s.category === activeTab);

  return (
    <section id="services" className="py-24 bg-slate-50/60 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/25 bg-orange-50 text-[11px] font-mono text-orange-700 font-semibold uppercase tracking-wider mb-4">
              CAPABILITIES & ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              What We Build.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              We specialize in engineering robust <span className="text-slate-900 font-semibold">Digital Products</span> and intelligent <span className="text-orange-600 font-semibold">AI & Automation</span> workflows, backed by measurable <span className="text-emerald-600 font-semibold">Growth Systems</span>.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-200/70 border border-slate-300/70 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "all"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              All Capabilities
            </button>
            <button
              onClick={() => setActiveTab("digital-products")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "digital-products"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              Digital Products
            </button>
            <button
              onClick={() => setActiveTab("ai-automation")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "ai-automation"
                  ? "bg-orange-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              AI & Automation
            </button>
            <button
              onClick={() => setActiveTab("growth")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "growth"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              Growth Systems
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = service.badge === "FLAGSHIP CAPABILITY";
            return (
              <div
                key={index}
                className={`group relative rounded-2xl border bg-white p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-slate-200/70 ${
                  service.accentBorder
                } ${isFeatured ? "ring-1 ring-slate-200" : ""}`}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-orange-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded border uppercase ${service.tagColor}`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-950 mb-3 group-hover:text-slate-950 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Capabilities */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-2 font-semibold">
                      KEY DELIVERABLES
                    </span>
                    {service.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags & CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      if (onStartProject) onStartProject();
                      else {
                        const target = document.querySelector("#contact");
                        if (target) target.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-slate-700 group-hover:text-slate-950 bg-slate-50 group-hover:bg-slate-100 border border-slate-200 transition-all"
                  >
                    <span>Inquire for this Build</span>
                    <ArrowRight className="w-3 h-3 text-orange-500" />
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
