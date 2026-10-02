"use client";

import {
  Sparkles,
  ArrowRight,
  FileText,
  MessageSquare,
  BarChart3,
  UserCheck,
  CheckCircle2,
} from "lucide-react";

interface LabsSectionProps {
  onStartProject?: () => void;
}

export default function LabsSection({ onStartProject }: LabsSectionProps) {
  const upcomingSolutions = [
    {
      id: "solution-01",
      number: "01",
      title: "Client Onboarding & Intake Portals",
      status: "IN DEVELOPMENT",
      statusColor: "text-orange-700 bg-orange-50 border-orange-200",
      icon: UserCheck,
      description:
        "A self-service digital intake flow that replaces tedious back-and-forth emails, securely collects customer information and documents, and automatically provisions new client accounts in your CRM.",
      targetBenefit: "Cuts client onboarding time from days to minutes while eliminating data entry errors.",
      highlights: [
        "Dynamic, multi-step intake questionnaires",
        "Secure document and identity upload workflows",
        "Automated CRM record creation and welcome emails",
      ],
    },
    {
      id: "solution-02",
      number: "02",
      title: "Intelligent Document & Invoice Parser",
      status: "IN DEVELOPMENT",
      statusColor: "text-blue-700 bg-blue-50 border-blue-200",
      icon: FileText,
      description:
        "An automated document engine that reads incoming vendor invoices, contracts, and receipts—extracting line items, vendor details, and payment terms without manual data entry.",
      targetBenefit: "Saves dozens of administrative hours every month and reduces billing inaccuracies.",
      highlights: [
        "Automatic PDF, image, and scan data extraction",
        "Approval queues with staff verification workflows",
        "Direct export to accounting and ERP systems",
      ],
    },
    {
      id: "solution-03",
      number: "03",
      title: "WhatsApp Dispatch & Lead Routing Hub",
      status: "COMING SOON",
      statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      icon: MessageSquare,
      description:
        "A conversational notification system that alerts your sales representatives the second a qualified enquiry arrives, providing instant buyer context and one-click WhatsApp outreach.",
      targetBenefit: "Reduces response times from hours to seconds when buyer purchase intent is highest.",
      highlights: [
        "Immediate sales representative WhatsApp notifications",
        "Pre-populated context cards with buyer requirements",
        "Automated round-robin distribution across your team",
      ],
    },
    {
      id: "solution-04",
      number: "04",
      title: "Operations & Revenue Dashboard",
      status: "COMING SOON",
      statusColor: "text-amber-700 bg-amber-50 border-amber-200",
      icon: BarChart3,
      description:
        "A clean executive console unifying sales activity, team response times, pipeline conversion, and campaign performance in one clear, high-level view.",
      targetBenefit: "Provides leadership with real-time operational clarity without digging through spreadsheets.",
      highlights: [
        "Consolidated pipeline and conversion metrics",
        "Team responsiveness and activity tracking",
        "Automated weekly performance summary digest",
      ],
    },
  ];

  return (
    <section id="labs" className="py-14 sm:py-24 bg-[#ffffff] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/25 bg-orange-50 text-[10px] sm:text-[11px] font-mono text-orange-700 font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            HYTHRIX LABS // UPCOMING CAPABILITIES
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            What We Are{" "}
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Building Next.
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 mt-3 sm:mt-4 leading-relaxed">
            A preview of new software solutions, intelligent automations, and operational tools currently in development at HYTHRIX. We continuously engineer practical systems designed around real business challenges.
          </p>
        </div>

        {/* 4 Clean Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {upcomingSolutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Status Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      // {item.number}
                    </span>
                    <span className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${item.statusColor}`}>
                      {item.status}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200">
                      <Icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                      {item.title}
                    </h3>
                  </div>

                  {/* Core Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Target Benefit Callout */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-5">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold mb-1">
                      KEY BUSINESS IMPACT
                    </div>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      {item.targetBenefit}
                    </p>
                  </div>
                </div>

                {/* Feature Highlights */}
                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Early Access Engagement Card */}
        <div className="rounded-2xl border border-orange-200/80 bg-gradient-to-br from-orange-50/70 via-amber-50/40 to-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono font-bold text-orange-700 uppercase tracking-widest block mb-1">
              EARLY ACCESS & CUSTOM INQUIRIES
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-950">
              Need a tailored version of these solutions for your business?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              We collaborate with select operators to pilot, customize, and deploy these tools into their live operations.
            </p>
          </div>

          <button
            onClick={onStartProject}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-md shadow-orange-500/20 transition-all shrink-0"
          >
            <span>Inquire About Early Access</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
