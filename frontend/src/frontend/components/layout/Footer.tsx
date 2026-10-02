"use client";

import Link from "next/link";
import BrandLogo from "./BrandLogo";

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

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

          {/* Quick Navigation Links & Social */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
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

            <a
              href="https://www.instagram.com/hythr_ix/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow HYTHRIX on Instagram"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-white bg-slate-100 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-orange-500 border border-slate-200 hover:border-transparent transition-all shadow-sm group"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-600 group-hover:text-white transition-colors" />
              <span>@hythr_ix</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 text-center sm:text-left">
          <div>
            &copy; 2026 HYTHRIX. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
