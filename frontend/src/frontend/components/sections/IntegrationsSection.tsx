"use client";

import { useState } from "react";
import { Check, Copy, Terminal, Shield, ArrowUpRight } from "lucide-react";

export default function IntegrationsSection({ onOpenDemo }: { onOpenDemo?: () => void }) {
  const [activeIntegration, setActiveIntegration] = useState<"leadsquared" | "salesforce" | "whatsapp" | "portals">("leadsquared");
  const [copied, setCopied] = useState(false);

  const integrations = [
    {
      id: "leadsquared" as const,
      name: "LeadSquared Real Estate",
      category: "CRM & SALES ENGINE",
      latency: "< 240ms",
      status: "CERTIFIED 2-WAY SYNC",
      description: "Direct bi-directional sync with LeadSquared. Automatically injects verified buyer budgets, timeline preferences, and booked site visits into rep activities without Zapier lag.",
    },
    {
      id: "salesforce" as const,
      name: "Salesforce Real Estate Cloud",
      category: "ENTERPRISE PIPELINE",
      latency: "< 310ms",
      status: "REST API v58.0",
      description: "Syncs rich buyer dossiers directly into Salesforce Opportunities & Lead objects. Maps RERA disclosures and custom tower preference attributes in real-time.",
    },
    {
      id: "whatsapp" as const,
      name: "Meta WhatsApp Cloud API",
      category: "OFFICIAL BUSINESS BSP",
      latency: "< 45ms",
      status: "ENTERPRISE TIER",
      description: "Operates on Meta's official WhatsApp Business Cloud API. High-throughput template delivery, verified green tick support, zero risk of phone number banning.",
    },
    {
      id: "portals" as const,
      name: "99acres / MagicBricks / Housing",
      category: "PORTAL WEBHOOKS",
      latency: "< 120ms",
      status: "INSTANT INGESTION",
      description: "Listens to inbound webhook events from major real estate portals. Eliminates the manual portal login routine for lead download spreadsheets.",
    },
  ];

  const payloads = {
    leadsquared: `{
  "event": "HYTHRIX.LEAD_QUALIFIED",
  "timestamp": "2026-09-29T15:20:00Z",
  "dossier": {
    "lead_id": "HX-9421",
    "name": "Vikram Malhotra",
    "phone": "+919876543210",
    "project": "Kokapet Heights Phase 2",
    "budget_min": 17500000,
    "budget_max": 21000000,
    "unit_type": "3BHK High Rise (Corner)",
    "intent_score": 94,
    "site_visit": {
      "status": "CONFIRMED",
      "slot": "2026-10-03T11:30:00+05:30",
      "closer_assigned": "Rajesh Kumar (Senior Closer)"
    },
    "compliance": {
      "rera_number": "P02400003412",
      "brochure_dispatched": true
    }
  },
  "crm_action": "UPSERT_OPPORTUNITY_AND_SCHEDULE_CALENDAR"
}`,
    salesforce: `{
  "object": "Opportunity",
  "operation": "UpsertByExternalId",
  "external_id": "HYTHRIX_HX-9421",
  "fields": {
    "Name": "Vikram Malhotra - Kokapet 3BHK",
    "StageName": "Site Visit Scheduled",
    "CloseDate": "2026-10-31",
    "Amount": 18500000,
    "LeadSource": "Meta Ads CPL Campaign",
    "Hythrix_Intent_Score__c": 94,
    "Preferred_Tower__c": "Tower B",
    "RERA_Ack__c": true
  }
}`,
    whatsapp: `{
  "messaging_product": "whatsapp",
  "recipient_type": "individual",
  "to": "919876543210",
  "type": "interactive",
  "interactive": {
    "type": "button",
    "header": { "type": "document", "document": { "link": "https://cdn.hythrix.com/brochures/kokapet_p2.pdf" } },
    "body": { "text": "Hello Vikram, Tower B corner residences start from ₹1.65 Cr. Here is the official project layout. When would you prefer a private site walkthrough?" },
    "action": {
      "buttons": [
        { "type": "reply", "reply": { "id": "btn_sat", "title": "This Saturday 11 AM" } },
        { "type": "reply", "reply": { "id": "btn_sun", "title": "This Sunday 3 PM" } }
      ]
    }
  }
}`,
    portals: `{
  "portal_source": "99acres_developer_webhook",
  "property_id": "PR-99-88124",
  "inbound_time": "2026-09-29T15:19:42Z",
  "raw_lead": {
    "buyer_name": "Vikram Malhotra",
    "buyer_mobile": "+919876543210",
    "enquired_for": "4 BHK Sky Villa"
  },
  "hythrix_execution": {
    "latency_ms": 118,
    "whatsapp_triggered": true,
    "assigned_queue": "Kokapet_Luxury_Presales"
  }
}`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(payloads[activeIntegration]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-28 border-t border-white/[0.08] bg-[#05070c]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/[0.06]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              ECOSYSTEM ARCHITECTURE // NATIVE INTEGRATIONS
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Plug directly into your existing sales stack.
            </h2>
            <p className="mt-3 text-slate-400 text-base md:text-lg max-w-2xl">
              Zero software replacement. HYTHRIX acts as the sub-minute conversational intelligence layer on top of your existing CRM, ad channels, and call centers.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Enterprise SOC-2 Type II &amp; ISO 27001 Aligned</span>
          </div>
        </div>

        {/* 2-Part Architecture: Selection Grid + Webhook Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Integration Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            {integrations.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveIntegration(item.id)}
                className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer relative ${
                  activeIntegration === item.id
                    ? "bg-[#0f1422] border-orange-500 shadow-xl"
                    : "bg-[#090c15] border-white/[0.06] hover:border-white/20 hover:bg-[#0c101c]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-semibold">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {item.latency}
                  </span>
                </div>
                <div className="text-base font-bold text-white mb-1.5 flex items-center justify-between">
                  <span>{item.name}</span>
                  {activeIntegration === item.id && (
                    <ArrowUpRight className="w-4 h-4 text-orange-400" />
                  )}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </button>
            ))}
          </div>

          {/* Webhook JSON Payload Visualizer (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[#090b12] border border-white/10 shadow-2xl overflow-hidden font-mono">
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-[#0d101a] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-slate-400 ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-orange-400" />
                    payload.inspect // {activeIntegration}.json
                  </span>
                </div>

                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Schema</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Payload Content */}
              <div className="p-5 text-xs leading-relaxed overflow-x-auto text-slate-300 bg-[#070910] max-h-[460px]">
                <pre className="font-mono text-emerald-400/90 whitespace-pre">
                  {payloads[activeIntegration]}
                </pre>
              </div>

              {/* Terminal Telemetry Footer */}
              <div className="px-4 py-2.5 bg-[#0b0e18] border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  HTTP 200 OK • Webhook ACK Verified
                </span>
                <span className="text-slate-400">Encryption: AES-256 GCM</span>
              </div>
            </div>

            {/* Quick Consultation Trigger */}
            <div className="mt-4 p-4 rounded-xl bg-[#0b0e18] border border-white/[0.06] flex items-center justify-between text-xs">
              <span className="text-slate-300">
                Need custom field mapping for your proprietary in-house ERP or CRM?
              </span>
              <button
                onClick={onOpenDemo}
                className="text-orange-400 hover:text-orange-300 font-bold font-mono ml-4 shrink-0 hover:underline cursor-pointer"
              >
                Discuss API Specs →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
