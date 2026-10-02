"use client";

import BrandLogo from "./BrandLogo";

interface FooterProps {
  onStartProject?: () => void;
  onOpenDemo?: () => void;
}

export default function Footer(_props?: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
          {/* Brand Info */}
          <div className="space-y-3">
            <BrandLogo size="md" variant="light" />
            <div className="text-xs font-mono font-bold text-orange-600 uppercase tracking-widest">
              BUILD. AUTOMATE. GROW.
            </div>
            <p className="text-sm text-slate-600 max-w-md leading-relaxed">
              Digital products, AI & automation, and growth solutions for modern businesses. We transform ideas into resilient production technology.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; 2026 HYTHRIX. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>ENGINEERED WITH NEXT.JS & TYPESCRIPT</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>ZERO CLIENT LEAKAGE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
