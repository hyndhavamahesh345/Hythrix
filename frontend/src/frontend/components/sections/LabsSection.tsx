"use client";

import { useState } from "react";
import {
  Terminal,
  ArrowRight,
  Sparkles,
  GitBranch,
  Code2,
} from "lucide-react";

interface LabsSectionProps {
  onStartProject?: () => void;
}

export default function LabsSection({ onStartProject }: LabsSectionProps) {
  const [selectedExperiment, setSelectedExperiment] = useState(0);
  const [activeTab, setActiveTab] = useState<"architecture" | "telemetry" | "stack">("architecture");

  const experiments = [
    {
      id: "exp-01",
      code: "LAB-01",
      title: "AgentX: Multi-Agent Consensus Loop",
      category: "AUTONOMOUS REASONING",
      status: "ACTIVE EXPERIMENT",
      statusColor: "emerald",
      badge: "AI R&D",
      summary:
        "An autonomous multi-agent arbitration architecture where specialized critic and planner models cross-evaluate generated code and business logic before triggering production database writes.",
      problem: "LLM hallucinations in complex enterprise business workflows.",
      solution: "Self-healing Evaluator-Optimizer loop with deterministic verification guardrails.",
      metrics: [
        { label: "Verification Accuracy", value: "99.4%" },
        { label: "Loop Latency", value: "<180ms" },
        { label: "Autonomous Intervention", value: "100%" },
        { label: "Target Release", value: "Q1 2027" },
      ],
      stack: ["Python", "FastAPI", "OpenAI / Gemini", "LangGraph", "Redis"],
      telemetryLog: `[SYSTEM_INIT] AgentX Orchestrator initialized. Consensus threshold: 0.95
[DISPATCH] Sub-agent 'Planner' generating task execution tree...
[INSPECTION] Critic model validation: 0 warnings, 0 syntax violations.
[CONSENSUS] 3/3 model consensus reached in 142ms.
[STATUS] Deterministic schema write approved. Zero hallucinations detected.`,
      nodes: [
        { name: "Task Ingest", role: "Webhook Entry" },
        { name: "Planner Model", role: "Deconstruction" },
        { name: "Critic Agent", role: "Schema Verification" },
        { name: "Consensus Engine", role: "3-Way Voting" },
        { name: "Safe Execution", role: "Production Dispatch" },
      ],
    },
    {
      id: "exp-02",
      code: "LAB-02",
      title: "OmniSync: Real-Time Universal State Mesh",
      category: "DISTRIBUTED SYSTEMS",
      status: "BENCHMARKING",
      statusColor: "amber",
      badge: "REAL-TIME INFRA",
      summary:
        "High-throughput edge state distribution protocol designed to synchronize multiplayer operational workspaces, inventory states, and live telemetry without centralized database locks.",
      problem: "Multi-tenant websocket latency spikes and concurrency race conditions.",
      solution: "Conflict-free Replicated Data Types (CRDTs) over distributed edge WebSockets.",
      metrics: [
        { label: "State Synchronization", value: "Real-Time" },
        { label: "Payload Overhead", value: "Compressed" },
        { label: "Concurrent Mesh Nodes", value: "Scalable" },
        { label: "Conflict Resolution", value: "Deterministic" },
      ],
      stack: ["Rust", "WebSockets", "CRDTs", "Cloudflare Workers", "protobuf"],
      telemetryLog: `[MESH_STREAM] Node connected: us-east.edge (peer connection verified)
[DELTA_BROADCAST] Synced 1,480 mutation operations across distributed edge nodes.
[CONFLICT_DETECTION] CRDT resolution applied; deterministic state match.
[BANDWIDTH] Compressed wire transfer for multi-user state updates.
[HEARTBEAT] All regional edge caches verified active.`,
      nodes: [
        { name: "Client Mutation", role: "Local Optimistic UI" },
        { name: "Edge Mesh", role: "Real-Time Broker" },
        { name: "CRDT Arbiter", role: "Vector Clocks" },
        { name: "Regional Replicas", role: "Bi-directional Sync" },
        { name: "Cold Persistence", role: "Event Store" },
      ],
    },
    {
      id: "exp-03",
      code: "LAB-03",
      title: "DocuMatrix: Spatial Vector Knowledge Graph",
      category: "KNOWLEDGE RETRIEVAL",
      status: "PROTOTYPE",
      statusColor: "blue",
      badge: "DOCUMENT INTELLIGENCE",
      summary:
        "Layout-aware semantic retrieval engine that parses complex multi-column PDFs, tables, architectural drawings, and legal contracts without losing hierarchical context.",
      problem: "Standard text extractors lose formatting in tables, financial footnotes, and spatial layouts.",
      solution: "2D spatial bounding-box embeddings coupled with hybrid dense-sparse vector reranking.",
      metrics: [
        { label: "Table Extraction", value: "High-Fidelity" },
        { label: "Context Preservation", value: "Hierarchical" },
        { label: "Parsing Architecture", value: "Layout-Aware" },
        { label: "Accuracy Threshold", value: "Verified" },
      ],
      stack: ["PyTorch", "Milvus", "LayoutLM", "TypeScript", "FastAPI"],
      telemetryLog: `[DOCUMENT_INGEST] Processing commercial lease contract...
[SPATIAL_PARSER] Detected multi-row financial tables with custom headers.
[EMBEDDING] Hybrid dense-sparse vectors mapped with spatial coordinates.
[QUERY_MATCH] Precision match on nested footnote and clause terms.
[RERANKER] Semantic relevance confirmed across layout sections.`,
      nodes: [
        { name: "Document Parser", role: "Spatial Layout OCR" },
        { name: "Chunk Graph", role: "Contextual Hierarchy" },
        { name: "Dense & Sparse Vector", role: "Dual Embeddings" },
        { name: "Cross-Encoder", role: "Semantic Reranking" },
        { name: "Target LLM Context", role: "Zero-Loss Synthesis" },
      ],
    },
    {
      id: "exp-04",
      code: "LAB-04",
      title: "AutoOps: Self-Healing Microservice Watchdog",
      category: "AUTONOMOUS INFRASTRUCTURE",
      status: "SANDBOX EVALUATION",
      statusColor: "purple",
      badge: "SYSTEMS",
      summary:
        "An automated anomaly detection system that diagnoses silent infrastructure degradation, microservice latency regressions, and runs instant automated rollbacks before downtime affects users.",
      problem: "Post-deployment regressions that pass standard unit tests but degrade production SLAs.",
      solution: "Real-time canary telemetry analytics with automated eBPF runtime intervention.",
      metrics: [
        { label: "Recovery Mode", value: "Automated Rollback" },
        { label: "Degradation Detection", value: "Proactive" },
        { label: "Human Escalation", value: "Minimized" },
        { label: "High Availability", value: "Failover Ready" },
      ],
      stack: ["Go", "eBPF", "Kubernetes", "Prometheus", "Docker"],
      telemetryLog: `[WATCHDOG_DAEMON] Monitoring 48 production container pods...
[CANARY_SIGNAL] Canary v2.4.1 showing 12% increase in p95 database response time.
[AUTONOMOUS_INTERVENTION] Traffic re-routed to stable replica v2.4.0 (0 drop).
[POST_MORTEM] Memory profile snapshot taken. Alert dispatched to engineering team.
[STATUS] Normal system operations sustained with zero user impact.`,
      nodes: [
        { name: "Telemetry Tap", role: "eBPF Kernel Probes" },
        { name: "Anomaly Engine", role: "Bayesian Baseline" },
        { name: "Canary Guard", role: "Threshold Validation" },
        { name: "Rollback Trigger", role: "Instant Revert" },
        { name: "Diagnostic Export", role: "Automated Root-Cause" },
      ],
    },
  ];

  const current = experiments[selectedExperiment];

  return (
    <section id="labs" className="py-14 sm:py-24 bg-[#ffffff] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/25 bg-orange-50 text-[11px] font-mono text-orange-700 font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            HYTHRIX LABS // EXPERIMENTAL R&D
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Where We Test the{" "}
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Frontier of Technology.
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 mt-3 sm:mt-4 leading-relaxed">
            We don’t just deploy standard software. In our internal lab, we research autonomous AI decision loops, ultra-low-latency protocols, and fault-tolerant architectures before bringing them into client production systems.
          </p>
        </div>

        {/* Experiment Navigation Tabs */}
        <div className="flex max-w-full overflow-x-auto no-scrollbar gap-2 sm:gap-3 p-1.5 rounded-2xl bg-slate-100 border border-slate-200/90 mb-8 shrink-0">
          {experiments.map((exp, idx) => {
            const isSelected = selectedExperiment === idx;
            return (
              <button
                key={exp.id}
                onClick={() => {
                  setSelectedExperiment(idx);
                  setActiveTab("architecture");
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  isSelected
                    ? "bg-white text-slate-950 shadow-md border border-slate-200/90"
                    : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
                }`}
              >
                <span className="font-mono text-[10px] text-orange-600 font-bold">{exp.code}</span>
                <span>{exp.title.split(":")[0]}</span>
                <span className="hidden lg:inline text-[10px] font-mono text-slate-400">
                  [{exp.status}]
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Lab Console */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-800 bg-[#0d101d] text-white p-5 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-orange-500/10 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-500/10 blur-3xl pointer-events-none rounded-full" />

          {/* Console Header Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-orange-500/15 border border-orange-500/30 text-orange-400 uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
                  {current.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-slate-400 bg-slate-800/80 border border-slate-700 uppercase">
                  {current.status}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white">
                {current.title}
              </h3>
            </div>

            {/* Sub-Tabs: Architecture / Telemetry / Stack */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start lg:self-auto shrink-0">
              <button
                onClick={() => setActiveTab("architecture")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "architecture"
                    ? "bg-slate-800 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Architecture
              </button>
              <button
                onClick={() => setActiveTab("telemetry")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "telemetry"
                    ? "bg-slate-800 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Telemetry
              </button>
              <button
                onClick={() => setActiveTab("stack")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === "stack"
                    ? "bg-slate-800 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Tech Stack
              </button>
            </div>
          </div>

          {/* Description & Core Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            <div className="lg:col-span-8">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {current.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <div className="text-[10px] font-mono text-rose-400 font-bold uppercase mb-1">
                    CHALLENGE IN FOCUS
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">{current.problem}</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
                  <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase mb-1">
                    ENGINEERED PARADIGM
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed">{current.solution}</div>
                </div>
              </div>
            </div>

            {/* Live Metrics Grid */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              {current.metrics.map((metric, mIdx) => (
                <div key={mIdx} className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/60">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    {metric.label}
                  </div>
                  <div className="text-lg sm:text-xl font-mono font-bold text-orange-400">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Screen: Tab Content */}
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 sm:p-6 mb-8">
            {activeTab === "architecture" && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-400 uppercase flex items-center gap-2">
                    <GitBranch className="w-3.5 h-3.5 text-orange-500" />
                    <span>SYSTEM EXECUTION PIPELINE</span>
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    SIMULATED RUNTIME: STABLE
                  </span>
                </div>

                {/* Pipeline Flow Visual */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
                  {current.nodes.map((node, nIdx) => (
                    <div
                      key={nIdx}
                      className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 relative group hover:border-orange-500/40 transition-colors"
                    >
                      <div className="text-[10px] font-mono text-orange-400 mb-1 font-bold">
                        0{nIdx + 1}
                      </div>
                      <div className="text-xs font-bold text-slate-100 mb-0.5">{node.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{node.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "telemetry" && (
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-orange-400" />
                    <span>LIVE LAB TELEMETRY LOG</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">BUFFER SIZE: 64KB</span>
                </div>
                <pre className="font-mono text-xs sm:text-sm text-emerald-400/90 bg-slate-950 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap leading-relaxed border border-slate-900">
                  {current.telemetryLog}
                </pre>
              </div>
            )}

            {activeTab === "stack" && (
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase mb-4 flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-orange-400" />
                  <span>EXPERIMENTAL CORE DEPENDENCIES & LIBRARIES</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {current.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Console Footer Callout */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-slate-800/90 gap-4">
            <div className="text-xs sm:text-sm text-slate-400 text-center sm:text-left">
              Interested in incorporating these experimental architectures into your enterprise tech stack?
            </div>

            <button
              onClick={() => {
                if (onStartProject) onStartProject();
                else {
                  const target = document.querySelector("#contact");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-lg shadow-orange-500/20 transition-all shrink-0"
            >
              <span>Request Technical Briefing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
