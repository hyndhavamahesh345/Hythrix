"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";

interface CtaBannerSectionProps {
  onStartProject?: () => void;
}

export default function CtaBannerSection({ onStartProject }: CtaBannerSectionProps) {
  const router = useRouter();

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/contact");
    }
  };

  return (
    <section className="py-10 sm:py-14 bg-[#ffffff] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl sm:rounded-3xl border border-orange-500/25 bg-gradient-to-br from-[#121625] via-[#0d101d] to-[#07080e] p-6 sm:p-10 text-center overflow-hidden shadow-xl shadow-orange-500/10">
          {/* Ambient Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[180px] bg-orange-500/15 blur-3xl pointer-events-none -z-10" />

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-[10px] sm:text-[11px] font-mono text-orange-400 font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3 h-3 text-orange-400" />
            INITIATE COLLABORATION
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight mb-3">
            Have an Idea, Problem, or Process to Improve?
          </h2>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-7 leading-relaxed font-normal">
            Let&apos;s turn it into something useful. We engineer digital products, custom AI systems, and automation workflows built for outcomes.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => {
                if (onStartProject) onStartProject();
                else scrollToContact();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-orange-400" />
              <span>Talk to HYTHRIX</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
