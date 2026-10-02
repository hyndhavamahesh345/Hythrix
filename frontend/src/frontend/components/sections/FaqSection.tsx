"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

export default function FaqSection({ onOpenDemo }: { onOpenDemo?: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "INTEGRATION",
      q: "How does HYTHRIX connect to our active Meta & portal ad campaigns?",
      a: "HYTHRIX connects via direct webhook endpoints into Meta Ads Manager, Google Lead Forms, 99acres, MagicBricks, and custom landing pages. The moment a prospect submits a lead form, the data payload is ingested and verified within 800 milliseconds.",
    },
    {
      category: "WHATSAPP PROTOCOL",
      q: "Does HYTHRIX require official Meta WhatsApp Business API approval?",
      a: "Yes. HYTHRIX deploys on official, verified WhatsApp Cloud API infrastructure. Your project phone number is registered with green badge verification where applicable, ensuring zero risk of account bans or spam blacklisting.",
    },
    {
      category: "CRM SYNCHRONIZATION",
      q: "Can lead data feed into our existing real estate CRM (Salesforce, LeadSquared, Sell.Do)?",
      a: "Yes. HYTHRIX includes bidirectional REST API and webhook integrations for LeadSquared, Sell.Do, Salesforce, HubSpot, and custom developer pipelines. Lead stages, WhatsApp transcripts, and buyer preferences sync in real time.",
    },
    {
      category: "QUALIFICATION",
      q: "Can we customize the qualification questions per project?",
      a: "Absolutely. Each project stream can define custom qualification parameters: minimum budget floors, specific tower configurations (e.g., 3 BHK vs Penthouse), possession timelines, and loan pre-approval requirements.",
    },
    {
      category: "SECURITY & RERA",
      q: "How does the system ensure RERA compliance and broker protection?",
      a: "All automated brochures include dynamic RERA registration numbers and official project disclosures. Channel partner attribution locks ensure that once an agent registers a buyer phone number, commission attribution is preserved for 90 days.",
    },
    {
      category: "ONBOARDING",
      q: "What is the timeline to deploy HYTHRIX for an active real estate launch?",
      a: "Standard deployment takes 48 to 72 hours. Our engineering team provisions your WhatsApp Cloud API container, configures project floorplans, and validates CRM sync before going live.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#07090f] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Editorial Summary & Contact Box (4 Cols) */}
          <div className="lg:col-span-4 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 text-xs font-mono">
              <HelpCircle className="w-3.5 h-3.5 text-orange-400" />
              IMPLEMENTATION AUDIT
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Deployment & Architectural FAQs.
            </h2>

            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              Everything property developers, marketing heads, and sales directors need to know about implementing HYTHRIX across active projects.
            </p>

            <div className="p-5 rounded-2xl glass-card space-y-3">
              <div className="text-xs font-mono font-bold text-white uppercase">
                Have specific CRM or webhook requirements?
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our solutions engineering team can audit your active lead stack during a 20-minute screen share.
              </p>
              <button
                onClick={onOpenDemo}
                className="w-full mt-2 py-2.5 px-4 rounded-xl text-xs font-mono font-semibold text-white bg-gradient-to-r from-red-600 to-orange-500 hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Technical Walkthrough</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Fidelity Accordion (8 Cols) */}
          <div className="lg:col-span-8 space-y-3 text-left">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-[#0c101c] border-orange-500/40 shadow-xl shadow-black/40"
                      : "bg-[#080b13] border-white/[0.06] hover:border-white/[0.12]"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <span className="text-[10px] font-mono text-orange-400 font-bold uppercase tracking-wider block mb-1">
                        {faq.category}
                      </span>
                      <span className="text-base font-bold text-white">
                        {faq.q}
                      </span>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border transition-all mt-1 ${
                        isOpen
                          ? "bg-orange-500/20 text-orange-400 border-orange-500/40 rotate-180"
                          : "bg-white/[0.04] text-slate-400 border-white/[0.08]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed font-normal border-t border-white/[0.04]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
