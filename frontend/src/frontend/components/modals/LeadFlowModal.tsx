"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  X,
  Bot,
  Phone,
  Database,
  Send,
  Activity,
} from "lucide-react";

interface LeadFlowModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartProject?: () => void;
}

export default function LeadFlowModal({ isOpen, onClose, onStartProject }: LeadFlowModalProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"whatsapp" | "pipeline" | "crm">("whatsapp");
  const [simulatedMessage, setSimulatedMessage] = useState("Hi, looking for 3BHK pricing for Jagath Emerald.");
  const [analyzing, setAnalyzing] = useState(false);
  const [leadScore, setLeadScore] = useState(92);
  const [botReply, setBotReply] = useState(
    "Namaste! Jagath Emerald offers luxury 3BHKs starting at 1,850 sq.ft with panoramic clubhouse views. Are you planning for self-occupancy or investment, and what is your preferred move-in timeline?"
  );

  if (!isOpen) return null;

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!simulatedMessage.trim()) return;

    setAnalyzing(true);
    setTimeout(() => {
      setLeadScore(Math.floor(88 + Math.random() * 11));
      setBotReply(
        `Thank you for confirming your interest in ${simulatedMessage.slice(0, 30)}... We have reserved your unit catalog. Our senior property advisor will reach out on WhatsApp within 15 minutes.`
      );
      setAnalyzing(false);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5 sm:mb-6 pr-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-orange-50 text-orange-700 border border-orange-200 font-semibold uppercase">
              A HYTHRIX PRODUCT
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono text-slate-500">
              REAL ESTATE LEAD AUTOMATION
            </span>
          </div>
          <h3 className="text-xl sm:text-3xl font-extrabold text-slate-950">
            HYTHRIX LeadFlow Engine
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Live interactive preview of automated buyer capture, qualification, and sales team dispatch.
          </p>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="grid grid-cols-3 gap-1 sm:gap-2 p-1 sm:p-1.5 rounded-xl bg-slate-100 border border-slate-200 mb-5 sm:mb-6">
          <button
            onClick={() => setActiveTab("whatsapp")}
            className={`py-2 px-1.5 sm:px-3 rounded-lg text-[11px] sm:text-xs font-semibold transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
              activeTab === "whatsapp"
                ? "bg-white text-slate-950 border border-slate-200 shadow-sm"
                : "text-slate-600 hover:text-slate-950"
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="hidden sm:inline">WhatsApp Outreach Bot</span>
            <span className="sm:hidden">WhatsApp</span>
          </button>
          <button
            onClick={() => setActiveTab("pipeline")}
            className={`py-2 px-1.5 sm:px-3 rounded-lg text-[11px] sm:text-xs font-semibold transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
              activeTab === "pipeline"
                ? "bg-white text-slate-950 border border-slate-200 shadow-sm"
                : "text-slate-600 hover:text-slate-950"
            }`}
          >
            <Activity className="w-3.5 h-3.5 text-orange-600 shrink-0" />
            <span className="hidden sm:inline">AI Scoring & Triage</span>
            <span className="sm:hidden">AI Scoring</span>
          </button>
          <button
            onClick={() => setActiveTab("crm")}
            className={`py-2 px-1.5 sm:px-3 rounded-lg text-[11px] sm:text-xs font-semibold transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
              activeTab === "crm"
                ? "bg-white text-slate-950 border border-slate-200 shadow-sm"
                : "text-slate-600 hover:text-slate-950"
            }`}
          >
            <Database className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="hidden sm:inline">CRM & Dispatch</span>
            <span className="sm:hidden">CRM Sync</span>
          </button>
        </div>

        {/* Tab 1: WhatsApp Bot */}
        {activeTab === "whatsapp" && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-slate-900 font-semibold">
                    HYTHRIX WhatsApp Concierge (Automated)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 font-semibold">&lt;45s SLA</span>
              </div>

              {/* Chat Thread */}
              <div className="space-y-3 mb-4 max-h-56 overflow-y-auto pr-1">
                <div className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-orange-600 p-3 text-xs text-white shadow-sm">
                    {simulatedMessage}
                  </div>
                </div>

                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white border border-slate-200 p-3 text-xs text-slate-800 shadow-sm">
                    {analyzing ? (
                      <div className="flex items-center gap-2 text-slate-500 font-mono text-[11px]">
                        <Bot className="w-3.5 h-3.5 animate-spin text-orange-500" />
                        <span>AI evaluating intent & project inventory...</span>
                      </div>
                    ) : (
                      botReply
                    )}
                  </div>
                </div>
              </div>

              {/* Test Input Form */}
              <form onSubmit={handleSimulate} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type buyer inquiry..."
                  value={simulatedMessage}
                  onChange={(e) => setSimulatedMessage(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-xl bg-white border border-slate-200 focus:border-orange-500 text-xs text-slate-900 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={analyzing}
                  className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-xs font-semibold text-white flex items-center gap-1.5 transition-colors disabled:opacity-50"
                >
                  <span>Test Bot</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Tab 2: AI Scoring */}
        {activeTab === "pipeline" && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-mono text-slate-500 font-semibold">QUALIFICATION TELEMETRY</span>
              <span className="text-xs font-mono text-orange-600 font-bold">INTENT SCORE: {leadScore}/100</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Configuration</div>
                <div className="text-xs font-bold text-slate-900 mt-1">3BHK Luxury</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Budget Match</div>
                <div className="text-xs font-bold text-emerald-700 mt-1">Verified In-Range</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Timeline</div>
                <div className="text-xs font-bold text-slate-900 mt-1">&lt; 90 Days</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Confidence</div>
                <div className="text-xs font-bold text-emerald-700 mt-1">96.8% Valid</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-800">
              High intent detected. Automated CRM stage shifted from &ldquo;New Lead&rdquo; to &ldquo;Qualified Buyer&rdquo; without human delay.
            </div>
          </div>
        )}

        {/* Tab 3: CRM & Dispatch */}
        {activeTab === "crm" && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-mono text-slate-500 font-semibold">CRM WEBHOOK & REVENUE PIPELINE</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
                DISPATCHED
              </span>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex justify-between">
                <span className="text-slate-500">Assigned Closer:</span>
                <span className="text-slate-900 font-semibold">Senior Sales Director</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex justify-between">
                <span className="text-slate-500">CRM Destination:</span>
                <span className="text-slate-900 font-semibold">HubSpot / Salesforce / Custom DB</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 flex justify-between">
                <span className="text-slate-500">Automated Follow-up:</span>
                <span className="text-emerald-700 font-semibold">Scheduled (T+4 Hours)</span>
              </div>
            </div>
          </div>
        )}

        {/* Modal Action Footer */}
        <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            Interested in deploying LeadFlow for your real estate business?
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                if (onStartProject) onStartProject();
                else {
                  router.push("/contact");
                }
              }}
              className="px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-500 text-xs sm:text-sm hover:from-orange-500 hover:to-amber-400 transition-all shadow-md shadow-orange-500/20"
            >
              Inquire About LeadFlow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
