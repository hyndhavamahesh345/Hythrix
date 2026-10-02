"use client";

export default function CapabilityStrip() {
  const capabilities = [
    { label: "CUSTOM WEB APPLICATIONS", dot: true },
    { label: "AI ASSISTANTS & AUTOMATION", dot: true },
    { label: "WORKFLOW AUTOMATION", dot: true },
    { label: "HIGH-CONVERTING WEBSITES", dot: true },
    { label: "WHATSAPP & CRM AUTOMATION", dot: true },
    { label: "HYTHRIX LABS: EXPERIMENTAL R&D", dot: true },
    { label: "API & MICROSERVICES", dot: true },
    { label: "GROWTH & ATTRIBUTION", dot: true },
  ];

  return (
    <div className="w-full border-y border-slate-200/90 bg-slate-50/80 backdrop-blur-md overflow-hidden py-3.5 select-none relative">
      {/* Edge gradient masks for seamless aesthetic */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center">
        {/* Set 1 */}
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {capabilities.map((item, idx) => (
            <div key={`set1-${idx}`} className="flex items-center gap-4 shrink-0">
              <span className="text-[11px] font-mono tracking-widest text-slate-700 font-semibold uppercase">
                {item.label}
              </span>
              {item.dot && <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(255,94,26,0.6)]" />}
            </div>
          ))}
        </div>

        {/* Set 2 (Identical duplicate for seamless infinite loop) */}
        <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
          {capabilities.map((item, idx) => (
            <div key={`set2-${idx}`} className="flex items-center gap-4 shrink-0">
              <span className="text-[11px] font-mono tracking-widest text-slate-700 font-semibold uppercase">
                {item.label}
              </span>
              {item.dot && <span className="h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(255,94,26,0.6)]" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
