"use client";

import Link from "next/link";
import {
  Sparkles,
  ArrowUpRight,
  Shield,
  Zap,
  Layers,
} from "lucide-react";

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

interface TeamSectionProps {
  onStartProject?: () => void;
}

export default function TeamSection({ onStartProject }: TeamSectionProps) {
  const teamMembers = [
    {
      name: "Nirjogi Hyndhava Mahesh",
      initials: "HM",
      role: "CEO",
      badgeColor: "text-orange-700 bg-orange-50 border-orange-200/80",
      accentGlow: "from-orange-500/20 via-orange-500/5 to-transparent",
      bio: "Leads business strategy, partnerships, business development, client acquisition, and the overall direction of HYTHRIX. Focused on turning business challenges into practical digital products, AI automation, and technology solutions.",
      linkedin: "https://www.linkedin.com/in/hyndhava-mahesh-30894a27/",
    },
    {
      name: "Thrishith Reddy Vootkur",
      initials: "TR",
      role: "COO",
      badgeColor: "text-amber-700 bg-amber-50 border-amber-200/80",
      accentGlow: "from-amber-500/20 via-amber-500/5 to-transparent",
      bio: "Leads operations, project delivery, client coordination, internal processes, growth initiatives, and team management. Focused on ensuring smooth execution and delivering projects efficiently.",
      linkedin: "https://www.linkedin.com/in/thrishith-reddy-vootkur-b03997381/",
    },
    {
      name: "Sruthika Reddy Yedulla",
      initials: "SR",
      role: "CTO",
      badgeColor: "text-blue-700 bg-blue-50 border-blue-200/80",
      accentGlow: "from-blue-500/20 via-blue-500/5 to-transparent",
      bio: "Leads technology and product development at HYTHRIX, with a focus on web development, AI, automation, backend systems, APIs, and technical architecture.",
      linkedin: "https://www.linkedin.com/in/sruthika-reddy-yedulla-023316321/",
    },
  ];

  const leadershipPrinciples = [
    {
      number: "01",
      title: "Direct Founder Engagement",
      description:
        "Every client speaks directly with our leadership team. No intermediary sales reps, junior handoffs, or diluted project communication.",
      icon: Shield,
    },
    {
      number: "02",
      title: "Practical, High-ROI Engineering",
      description:
        "We build systems engineered for business outcomes—prioritizing revenue velocity, automated efficiency, and bulletproof production stability.",
      icon: Zap,
    },
    {
      number: "03",
      title: "Integrated Triad Model",
      description:
        "Strategy, operations, and architecture run in lockstep from Day 1 to ensure zero scope drift and on-time milestone delivery.",
      icon: Layers,
    },
  ];

  return (
    <section id="team" className="py-14 sm:py-24 bg-[#ffffff] relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/25 bg-orange-50 text-[11px] font-mono text-orange-700 font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            FOUNDING LEADERSHIP // CORE TEAM
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            The Minds Engineering{" "}
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              HYTHRIX.
            </span>
          </h1>
          <p className="text-sm sm:text-lg text-slate-600 mt-3 sm:mt-4 leading-relaxed">
            A cohesive leadership triad spanning strategy, operations, and technical architecture. We partner closely with ambitious founders and enterprise operators to build technology that moves the needle.
          </p>
        </div>

        {/* Leadership Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {teamMembers.map((member, idx) => {
            return (
              <div
                key={idx}
                className="group relative rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-slate-200/70 overflow-hidden"
              >
                {/* Decorative Top Ambient Accent */}
                <div
                  className={`absolute top-0 right-0 left-0 h-32 bg-gradient-to-b ${member.accentGlow} pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity`}
                />

                <div className="relative">
                  {/* Top Row: Initials Avatar & Role Pill */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white font-mono font-bold text-lg flex items-center justify-center shadow-md border border-slate-700 group-hover:scale-105 transition-transform">
                      <span>{member.initials}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full border uppercase ${member.badgeColor}`}
                      >
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3 group-hover:text-orange-600 transition-colors">
                    {member.name}
                  </h2>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                {/* LinkedIn Profile Link */}
                <div className="pt-4 border-t border-slate-100 relative">
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 hover:text-white bg-slate-50 hover:bg-[#0077b5] border border-slate-200 hover:border-[#0077b5] transition-all duration-200 group/link shadow-sm"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5" />
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Founding Philosophy & Operational Standards */}
        <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono text-orange-600 font-semibold uppercase tracking-wider block mb-2">
              HOW WE OPERATE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
              Built on Discipline, Precision & Direct Access.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipPrinciples.map((item, pIdx) => {
              const PIcon = item.icon;
              return (
                <div
                  key={pIdx}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600">
                      {item.number}
                    </span>
                    <div className="p-2 rounded-lg bg-orange-50 text-orange-600">
                      <PIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Quick Connect Callout */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-600 text-center sm:text-left">
              Want to consult directly with our leadership team on your product or architecture?
            </p>
            <button
              onClick={() => {
                if (onStartProject) onStartProject();
                else {
                  const target = document.querySelector("#contact");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-md shadow-orange-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              <span>Schedule Direct Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
