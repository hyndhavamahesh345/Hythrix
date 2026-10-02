"use client";

import Link from "next/link";
import BrandLogo from "./BrandLogo";

interface FooterProps {
  onStartProject?: () => void;
  onOpenDemo?: () => void;
}

export default function Footer({ onStartProject, onOpenDemo }: FooterProps = {}) {
  void onStartProject;
  void onOpenDemo;
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

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-xs sm:text-sm font-medium text-slate-600">
            <Link href="/services" className="hover:text-slate-950 transition-colors">
              Services
            </Link>
            <Link href="/labs" className="hover:text-slate-950 transition-colors">
              Labs
            </Link>
            <Link href="/process" className="hover:text-slate-950 transition-colors">
              Process
            </Link>
            <Link href="/team" className="hover:text-slate-950 transition-colors">
              Team
            </Link>
            <Link href="/contact" className="hover:text-slate-950 transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 text-center sm:text-left">
          <div>
            &copy; 2026 HYTHRIX. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 font-mono text-[10px] sm:text-[11px]">
            <span>ENGINEERED WITH NEXT.JS & TYPESCRIPT</span>
            <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-slate-300" />
            <span>ZERO CLIENT LEAKAGE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
