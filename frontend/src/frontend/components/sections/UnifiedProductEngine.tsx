"use client";

import { useState } from "react";
import {
  MessageSquare,
  Users,
  Database,
  ShieldCheck,
  Calendar,
  PhoneCall,
  CheckCheck,
  ArrowRight,
  RefreshCw,
  PlusCircle,
  ChevronRightCircle,
  Download,
  Filter,
  Search,
} from "lucide-react";
import { useLeads } from "@/frontend/hooks/useLeads";

export default function UnifiedProductEngine({ onOpenDemo }: { onOpenDemo?: () => void }) {
  const [activeTab, setActiveTab] = useState<"whatsapp" | "dispatch" | "crm">("whatsapp");
  
  // Interactive Chat State
  const [chatMessages, setChatMessages] = useState<
    { sender: "buyer" | "bot"; text: string; time: string; attachment?: string }[]
  >([
    {
      sender: "buyer",
      text: "Hi, I saw your ad for Kokapet Heights luxury residences. Can I get pricing and floor plans?",
      time: "10:42 AM",
    },
    {
      sender: "bot",
      text: "Hello Vikram! Yes, Kokapet Heights 3 & 4 BHK residences start from ₹1.45 Cr. Here is the verified project brochure and master layout:",
      time: "10:42 AM",
      attachment: "Kokapet_Heights_Master_Brochure.pdf (14.2 MB)",
    },
    {
      sender: "bot",
      text: "To share the exact tower availability with unit numbers, what is your preferred budget range?",
      time: "10:42 AM",
    },
  ]);

  const [dossierState, setDossierState] = useState({
    budget: "Awaiting Confirmation",
    configuration: "3 or 4 BHK Residence",
    timeline: "Exploring",
    intentScore: 78,
    visitStatus: "Not Scheduled",
  });

  const [isTyping, setIsTyping] = useState(false);

  // CRM Leads hook
  const {
    leads,
    stats,
    isLoading: isLoadingLeads,
    actionMessage,
    refreshLeads: fetchLeads,
    simulateInboundLead: handleSimulateLead,
    advanceLeadStage: handleAdvanceStage,
  } = useLeads();

  const [projectFilter, setProjectFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSendPrompt = (promptText: string, updatedDossier: Partial<typeof dossierState>) => {
    if (isTyping) return;

    // Append buyer message
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    setChatMessages((prev) => [...prev, { sender: "buyer", text: promptText, time: timeStr }]);
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "Got it! Updating your preferred unit specs in our developer portal.";
      if (promptText.includes("1.8 Cr") || promptText.includes("budget")) {
        botResponse = "Perfect. We have 3 East-facing corner units in Tower B matching ₹1.8 Cr with possession in 4 months. Would you like to schedule a private walkthrough this Saturday?";
      } else if (promptText.includes("Floor Plans")) {
        botResponse = "Sending the detailed architectural floor plans for Tower B (3 BHK Type-2 with dual balconies). Download below:";
      } else if (promptText.includes("Saturday") || promptText.includes("Walkthrough")) {
        botResponse = "Confirmed! Private walkthrough reserved for Saturday 11:00 AM with Senior Advisor Rajesh Kumar. Site location pin and gate pass sent below.";
      }

      setChatMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botResponse,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          attachment: promptText.includes("Floor Plans") ? "Tower_B_Corner_Floorplans.dwg.pdf (8.4 MB)" : undefined,
        },
      ]);

      setDossierState((prev) => ({ ...prev, ...updatedDossier }));
      setIsTyping(false);
    }, 900);
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesProject = projectFilter === "all" || (lead.project && lead.project.toLowerCase().includes(projectFilter.toLowerCase()));
    const matchesSearch =
      searchQuery === "" ||
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.budgetRange && lead.budgetRange.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesProject && matchesSearch;
  });

  return (
    <section className="py-24 bg-[#050609] relative overflow-hidden" id="engine">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[450px] bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left-Aligned Editorial Hierarchy & Telemetry */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/[0.06]">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-xs uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              SUBSYSTEM ARCHITECTURE // LIVE RUNTIME
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              One Connected Lead Operating System.
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Three real-time subsystems connected by webhooks: WhatsApp conversational discovery, sales manager allocation, and pipeline sync.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-[#0d1017] p-3 rounded-lg border border-white/10 font-mono text-xs text-slate-400 shrink-0">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational
            </span>
            <span className="text-white/20">|</span>
            <span>Meta API v19.0</span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-start sm:justify-center mb-8 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0b0e17] border border-white/[0.08] shadow-lg max-w-full">
            <button
              onClick={() => setActiveTab("whatsapp")}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "whatsapp"
                  ? "bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white shadow-md font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>1. Conversational Qualification</span>
            </button>

            <button
              onClick={() => setActiveTab("dispatch")}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "dispatch"
                  ? "bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white shadow-md font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>2. Sales Team Dispatch</span>
            </button>

            <button
              onClick={() => setActiveTab("crm")}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "crm"
                  ? "bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white shadow-md font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Database className="w-4 h-4" />
              <span>3. Live Pipeline Kanban</span>
            </button>
          </div>
        </div>

        {/* Console Viewport */}
        <div className="rounded-2xl glass-panel overflow-hidden mb-16 shadow-2xl">
          
          {/* Console Header */}
          <div className="px-5 py-3.5 bg-[#080a12] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono font-semibold text-slate-300 pl-2 border-l border-white/10">
                HYTHRIX OS //{" "}
                {activeTab === "whatsapp" && "Interactive Conversational Dialogue"}
                {activeTab === "dispatch" && "Rep Notification & Handoff Pipeline"}
                {activeTab === "crm" && "Live Real-Time Lead Kanban Board"}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Two-Way API Active</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-[#080b13]">
            
            {/* VIEW 1: INTERACTIVE WHATSAPP SIMULATOR */}
            {activeTab === "whatsapp" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Simulated WhatsApp Device (7 Cols) */}
                <div className="lg:col-span-7 rounded-2xl bg-[#0c101b] border border-white/[0.08] overflow-hidden shadow-xl flex flex-col h-[520px]">
                  
                  {/* WhatsApp Top Bar */}
                  <div className="px-4 py-3 bg-[#111728] border-b border-white/[0.08] flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 font-bold text-xs flex items-center justify-center font-mono">
                        HX
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          HYTHRIX Lead Assistant
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <div className="text-[10px] text-emerald-400 font-mono">
                          Verified Meta Cloud API
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Live Test Session
                    </span>
                  </div>

                  {/* Message Stream */}
                  <div className="p-4 space-y-3 overflow-y-auto flex-1 text-xs text-left bg-[#070910]">
                    {chatMessages.map((msg, i) => (
                      <div
                        key={i}
                        className={`flex flex-col ${msg.sender === "buyer" ? "items-start" : "items-end"}`}
                      >
                        <div
                          className={`p-3 rounded-2xl max-w-[85%] ${
                            msg.sender === "buyer"
                              ? "bg-[#141928] text-white rounded-tl-none border border-white/[0.06]"
                              : "bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 text-white rounded-tr-none shadow-md"
                          }`}
                        >
                          <p className="leading-relaxed">{msg.text}</p>
                          
                          {msg.attachment && (
                            <div className="mt-2 p-2 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between gap-2 text-[11px]">
                              <span className="truncate">{msg.attachment}</span>
                              <Download className="w-3.5 h-3.5 shrink-0" />
                            </div>
                          )}

                          <div
                            className={`flex items-center gap-1 text-[9px] mt-1 ${
                              msg.sender === "buyer" ? "text-slate-400 justify-start" : "text-white/80 justify-end"
                            }`}
                          >
                            <span>{msg.time}</span>
                            {msg.sender === "bot" && <CheckCheck className="w-3 h-3 text-white" />}
                          </div>
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono p-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-bounce delay-100" />
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-bounce delay-200" />
                        <span className="ml-1 text-[11px]">HYTHRIX parsing intent...</span>
                      </div>
                    )}
                  </div>

                  {/* Interactive Buyer Response Prompts */}
                  <div className="p-3 bg-[#0c101b] border-t border-white/[0.08] shrink-0">
                    <span className="text-[10px] font-mono text-slate-400 block mb-2 text-left font-semibold">
                      TRY AN INTERACTIVE BUYER RESPONSE:
                    </span>
                    <div className="flex flex-wrap gap-2 text-left">
                      <button
                        onClick={() =>
                          handleSendPrompt("My budget is ₹1.8 Cr. Need 3 BHK corner unit.", {
                            budget: "₹1.80 Cr Verified",
                            configuration: "3 BHK Corner (Tower B)",
                            timeline: "< 4 Months",
                            intentScore: 89,
                          })
                        }
                        disabled={isTyping}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-orange-500/20 hover:border-orange-500/40 border border-white/[0.08] text-xs font-mono text-slate-200 transition-colors cursor-pointer"
                      >
                        1. &ldquo;Budget is ₹1.8 Cr (3 BHK)&rdquo;
                      </button>

                      <button
                        onClick={() =>
                          handleSendPrompt("Can you send Tower B architectural floor plans?", {
                            configuration: "Tower B East-Facing Layout",
                            intentScore: 92,
                          })
                        }
                        disabled={isTyping}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-orange-500/20 hover:border-orange-500/40 border border-white/[0.08] text-xs font-mono text-slate-200 transition-colors cursor-pointer"
                      >
                        2. &ldquo;Send Tower B Floor Plans&rdquo;
                      </button>

                      <button
                        onClick={() =>
                          handleSendPrompt("Book Saturday 11:00 AM private site walkthrough.", {
                            visitStatus: "Confirmed for Saturday 11:00 AM",
                            intentScore: 98,
                          })
                        }
                        disabled={isTyping}
                        className="px-3 py-1.5 rounded-lg bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/30 text-xs font-mono text-orange-300 font-semibold transition-colors cursor-pointer"
                      >
                        3. &ldquo;Book Saturday 11:00 AM Visit&rdquo;
                      </button>
                    </div>
                  </div>

                </div>

                {/* Live Extraction Dossier (5 Cols) */}
                <div className="lg:col-span-5 space-y-4 text-left">
                  <div className="glass-card rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                          Real-Time Dossier Parser
                        </span>
                        <h4 className="text-sm font-bold text-white">Vikram Malhotra</h4>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        {dossierState.intentScore}% Score
                      </span>
                    </div>

                    <div className="space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02]">
                        <span className="text-slate-400">Unit Preference:</span>
                        <span className="text-white font-semibold">{dossierState.configuration}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02]">
                        <span className="text-slate-400">Budget Range:</span>
                        <span className="text-orange-400 font-bold">{dossierState.budget}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02]">
                        <span className="text-slate-400">Possession Window:</span>
                        <span className="text-white font-semibold">{dossierState.timeline}</span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02]">
                        <span className="text-slate-400">Site Walkthrough:</span>
                        <span className="text-emerald-400 font-bold">{dossierState.visitStatus}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs font-mono text-slate-300 space-y-1">
                        <span className="text-orange-400 font-bold block">✓ CRM Action Triggered:</span>
                        <p className="text-[11px] text-slate-400 font-sans">
                          Lead qualified with high intent. Automatically dispatched to Senior Project Closer with loan pre-approval verified.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* VIEW 2: SALES TEAM DISPATCH */}
            {activeTab === "dispatch" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
                
                {/* Sales Rep WhatsApp Alert */}
                <div className="lg:col-span-7 glass-card rounded-2xl p-6 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-orange-400" />
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        Instant Rep Mobile Handoff Alert
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">Delivered via WhatsApp API</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#090b12] border border-white/[0.06] space-y-2 text-xs leading-relaxed text-slate-200">
                    <p className="font-bold text-orange-400 font-mono">⚡ HIGH-INTENT BUYER DOSSIER ASSIGNED:</p>
                    <p><b>Buyer:</b> Vikram Malhotra (+91 98490 •••••)</p>
                    <p><b>Project:</b> Kokapet Heights (Tower B - 3 BHK Corner)</p>
                    <p><b>Verified Budget:</b> ₹1.50 - ₹1.80 Cr (HDFC Pre-Approved)</p>
                    <p><b>Requested Tour:</b> Saturday 11:00 AM (Site Pin Sent)</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer">
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>One-Tap Dial Buyer</span>
                    </button>
                    <button className="py-2.5 px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 font-semibold text-xs border border-white/[0.08] transition-colors flex items-center justify-center gap-2 cursor-pointer">
                      <Calendar className="w-3.5 h-3.5 text-orange-400" />
                      <span>Sync Calendar Invite</span>
                    </button>
                  </div>
                </div>

                {/* Dispatch Logic Rules */}
                <div className="lg:col-span-5 space-y-3 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-1.5">
                    <span className="text-orange-400 font-bold block">1. Round-Robin & Quota Balancing</span>
                    <p className="text-slate-300 font-sans text-xs">
                      Enquiries are distributed instantly among active portfolio managers based on project tier, language preference, and agent availability.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-1.5">
                    <span className="text-orange-400 font-bold block">2. 15-Minute Escalation Safeguard</span>
                    <p className="text-slate-300 font-sans text-xs">
                      If the assigned rep doesn&apos;t confirm contact within 15 minutes, HYTHRIX automatically escalates the lead to the Sales Director.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-1.5">
                    <span className="text-orange-400 font-bold block">3. Channel Partner Lock</span>
                    <p className="text-slate-300 font-sans text-xs">
                      Protects broker attribution. Lead phone number is registered to the channel partner for 90 days, eliminating rep disputes.
                    </p>
                  </div>
                </div>

              </div>
            )}

            {/* VIEW 3: LIVE CRM PIPELINE KANBAN */}
            {activeTab === "crm" && (
              <div className="space-y-6 text-left">
                
                {/* Toolbar */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 rounded-xl bg-[#0b0e17] border border-white/[0.08]">
                  
                  {/* Search and Filters */}
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="relative">
                      <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search lead or budget..."
                        className="bg-[#070910] border border-white/[0.1] rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 font-mono"
                      />
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono">
                      <Filter className="w-3.5 h-3.5 text-slate-400" />
                      <button
                        onClick={() => setProjectFilter("all")}
                        className={`px-2.5 py-1 rounded-md text-[11px] transition-colors cursor-pointer ${
                          projectFilter === "all" ? "bg-orange-500 text-white font-bold" : "text-slate-400 hover:text-white"
                        }`}
                      >
                        All
                      </button>
                      <button
                        onClick={() => setProjectFilter("kokapet")}
                        className={`px-2.5 py-1 rounded-md text-[11px] transition-colors cursor-pointer ${
                          projectFilter === "kokapet" ? "bg-orange-500 text-white font-bold" : "text-slate-400 hover:text-white"
                        }`}
                      >
                        Kokapet
                      </button>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {actionMessage && (
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                        {actionMessage}
                      </span>
                    )}

                    <button
                      onClick={handleSimulateLead}
                      className="px-3 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      <span>Simulate Inbound Lead</span>
                    </button>

                    <button
                      onClick={fetchLeads}
                      disabled={isLoadingLeads}
                      className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.08] transition-colors cursor-pointer"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isLoadingLeads ? "animate-spin" : ""}`} />
                    </button>
                  </div>

                </div>

                {/* Pipeline Stages */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  
                  {/* Stage 1: New Inbound */}
                  <div className="rounded-xl bg-[#0c101c] border border-white/[0.08] p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/[0.06]">
                      <span>1. New Inbound</span>
                      <span className="text-white font-bold font-mono">
                        {filteredLeads.filter((l) => l.stage === "new").length}
                      </span>
                    </div>

                    <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
                      {filteredLeads
                        .filter((l) => l.stage === "new")
                        .map((lead) => (
                          <div key={lead.id} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] space-y-1.5 text-xs">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-white">{lead.name}</span>
                              <span className="text-[10px] font-mono text-slate-500">{lead.id}</span>
                            </div>
                            <div className="text-[11px] text-slate-400">{lead.configuration || "Unspecified"} • {lead.budgetRange}</div>
                            <div className="text-[10px] text-amber-400 font-mono flex items-center justify-between pt-1">
                              <span>WhatsApp Outgoing...</span>
                              <button
                                onClick={() => handleAdvanceStage(lead.id, "new")}
                                className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer"
                                title="Advance Stage"
                              >
                                <ChevronRightCircle className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Stage 2: Qualified Dossier */}
                  <div className="rounded-xl bg-[#0c101c] border border-orange-500/30 p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-orange-400 pb-2 border-b border-white/[0.06]">
                      <span>2. Qualified Dossier</span>
                      <span className="font-bold font-mono">
                        {filteredLeads.filter((l) => l.stage === "qualified").length}
                      </span>
                    </div>

                    <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
                      {filteredLeads
                        .filter((l) => l.stage === "qualified")
                        .map((lead) => (
                          <div key={lead.id} className="p-3 rounded-lg bg-orange-500/5 border border-orange-500/20 space-y-1.5 text-xs">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-white">{lead.name}</span>
                              <span className="text-[10px] font-mono text-emerald-400 font-bold">{lead.intentScore}% Match</span>
                            </div>
                            <div className="text-[11px] text-slate-300">{lead.configuration} • {lead.budgetRange}</div>
                            <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between pt-1">
                              <span>Rep: {lead.assignedRep ? lead.assignedRep.split(" ")[0] : "Assigned"}</span>
                              <button
                                onClick={() => handleAdvanceStage(lead.id, "qualified")}
                                className="text-orange-400 hover:text-orange-300 transition-colors cursor-pointer"
                                title="Schedule Walkthrough"
                              >
                                <ChevronRightCircle className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Stage 3: Site Visit Scheduled */}
                  <div className="rounded-xl bg-[#0c101c] border border-white/[0.08] p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/[0.06]">
                      <span>3. Site Tour Active</span>
                      <span className="text-white font-bold font-mono">
                        {filteredLeads.filter((l) => l.stage === "visit_scheduled").length}
                      </span>
                    </div>

                    <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
                      {filteredLeads
                        .filter((l) => l.stage === "visit_scheduled")
                        .map((lead) => (
                          <div key={lead.id} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] space-y-1.5 text-xs">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-white">{lead.name}</span>
                              <span className="text-[10px] font-mono text-emerald-400">Confirmed</span>
                            </div>
                            <div className="text-[11px] text-slate-300">{lead.configuration} • {lead.project}</div>
                            <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between pt-1">
                              <span>Gate Pass Synced</span>
                              <button
                                onClick={() => handleAdvanceStage(lead.id, "visit_scheduled")}
                                className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                                title="Advance to Booking"
                              >
                                <ChevronRightCircle className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Stage 4: Token Booking */}
                  <div className="rounded-xl bg-[#0c101c] border border-white/[0.08] p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/[0.06]">
                      <span>4. Token Advanced</span>
                      <span className="text-white font-bold font-mono">
                        {filteredLeads.filter((l) => l.stage === "booked").length}
                      </span>
                    </div>

                    <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
                      {filteredLeads
                        .filter((l) => l.stage === "booked")
                        .map((lead) => (
                          <div key={lead.id} className="p-3 rounded-lg bg-white/[0.02] border border-emerald-500/20 space-y-1.5 text-xs">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-white">{lead.name}</span>
                              <span className="text-[10px] font-mono text-emerald-400 font-bold">Deal Won</span>
                            </div>
                            <div className="text-[11px] text-slate-300">{lead.budgetRange} • {lead.configuration}</div>
                            <div className="text-[10px] text-emerald-400 font-mono pt-1">
                              <span>Token Logged • CRM Stage Locked</span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                </div>

                {/* Telemetry Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-6">
                    <span>Active Leads: <b className="text-white">{stats?.totalLeads || leads.length}</b></span>
                    <span>Qualification Efficiency: <b className="text-emerald-400">{stats?.qualificationRate || "82%"}</b></span>
                    <span>Outreach Speed: <b className="text-orange-400">{stats?.avgResponseSeconds || 42}s</b></span>
                  </div>
                  <span className="text-orange-400 font-semibold">Backend Synced to data/leads.json</span>
                </div>

              </div>
            )}

          </div>

        </div>

        {/* Live Walkthrough Button */}
        <div className="text-center">
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 hover:shadow-xl hover:shadow-orange-500/25 transition-all cursor-pointer font-mono"
          >
            <span>Deploy HYTHRIX Engine for Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
