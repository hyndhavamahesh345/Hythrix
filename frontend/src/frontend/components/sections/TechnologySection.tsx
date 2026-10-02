"use client";

import {
  Code2,
  Server,
  Bot,
  Cpu,
  Cloud,
  Terminal,
} from "lucide-react";

export default function TechnologySection() {
  const categories = [
    {
      title: "Frontend Engineering",
      icon: Code2,
      accent: "text-blue-600",
      description: "Modern client-side runtimes, type safety, and component systems.",
      items: [
        { name: "Next.js", purpose: "App Router, SSR & Edge Streaming" },
        { name: "React", purpose: "Component-driven UI ecosystems" },
        { name: "TypeScript", purpose: "Strict typing across all layers" },
        { name: "Tailwind CSS", purpose: "Deterministic, high-performance styling" },
      ],
    },
    {
      title: "Backend & Microservices",
      icon: Server,
      accent: "text-indigo-600",
      description: "High-throughput APIs, asynchronous event queues, and data management.",
      items: [
        { name: "Node.js / Express", purpose: "Event loop concurrency & fast I/O" },
        { name: "Python", purpose: "Data science & AI orchestration" },
        { name: "FastAPI", purpose: "Type-checked asynchronous REST endpoints" },
        { name: "PostgreSQL", purpose: "Relational persistence & JSONB flexibility" },
      ],
    },
    {
      title: "AI & Intelligent Systems",
      icon: Bot,
      accent: "text-orange-600",
      description: "Production LLM pipelines, autonomous tool agents, and computer vision.",
      items: [
        { name: "OpenAI Models", purpose: "High-reasoning agent workflows" },
        { name: "Gemini", purpose: "Multimodal video & long-context parsing" },
        { name: "Open-Source LLMs", purpose: "On-premise & cost-optimized inference" },
        { name: "RAG & Vector Search", purpose: "Proprietary domain knowledge lookup" },
        { name: "Computer Vision", purpose: "Automated spatial & object recognition" },
      ],
    },
    {
      title: "Automation & Integration",
      icon: Cpu,
      accent: "text-amber-600",
      description: "Event-driven workflow engines, messaging channels, and API brokers.",
      items: [
        { name: "n8n", purpose: "Complex self-hosted workflow automation" },
        { name: "Webhooks", purpose: "Sub-second event trigger dispatch" },
        { name: "WhatsApp Cloud API", purpose: "Official conversational outreach" },
        { name: "REST APIs", purpose: "Interoperable CRM & software glue" },
      ],
    },
    {
      title: "Infrastructure & DevOps",
      icon: Cloud,
      accent: "text-emerald-600",
      description: "Zero-downtime deployment, containerization, and developer velocity.",
      items: [
        { name: "Vercel", purpose: "Global edge CDN & serverless hosting" },
        { name: "Docker", purpose: "Reproducible container environments" },
        { name: "GitHub Actions", purpose: "Automated linting, testing & CI/CD" },
        { name: "Cloud Platforms", purpose: "Scalable cloud resources (AWS, GCP)" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#ffffff] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-100 text-[11px] font-mono text-slate-700 font-semibold uppercase tracking-wider mb-4">
            <Terminal className="w-3.5 h-3.5 text-orange-500" />
            VERIFIED TECH STACK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Built With Modern{" "}
            <span className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Technology.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            We avoid legacy bloat. Our architectures rely on battle-tested frameworks, state-of-the-art AI models, and cloud-native infrastructure that ensure long-term agility.
          </p>
        </div>

        {/* Technology Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-200">
                      <Icon className={`w-5 h-5 ${category.accent}`} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-950">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    {category.items.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200/60 text-xs"
                      >
                        <span className="font-semibold text-slate-900 font-mono">{item.name}</span>
                        <span className="text-[11px] text-slate-500 truncate ml-2">
                          {item.purpose}
                        </span>
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
