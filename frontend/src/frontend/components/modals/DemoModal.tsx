"use client";

import { useState } from "react";
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock, Building2, Phone, Mail, User } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "Developer / Builder",
    monthlyLeads: "100 - 500 leads/mo",
    note: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to submit demo request.");
      }

      setReferenceId(data.referenceId || "HX-CONFIRMED");
      setSubmitted(true);
    } catch (err: unknown) {
      console.error("Demo submission error:", err);
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setError(null);
    setReferenceId("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      role: "Developer / Builder",
      monthlyLeads: "100 - 500 leads/mo",
      note: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#0d1019] border border-white/10 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden z-10 transition-all my-8">
        {/* Glowing top line */}
        <div className="h-1 w-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-500" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {!submitted ? (
            <>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  REAL-ESTATE PIPELINE AUDIT
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Book a 20-Minute HYTHRIX Demo
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  See how real-estate teams eliminate lead leakage and follow up with high-intent buyers in under 60 seconds.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Verma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 bg-black/40 border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      WhatsApp / Phone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 bg-black/40 border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                      <input
                        type="email"
                        required
                        placeholder="rahul@estate-group.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 bg-black/40 border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Company / Project Name *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-2.5 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        required
                        placeholder="Apex Luxury Living"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 bg-black/40 border border-white/10 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      <option value="Developer / Builder">Developer / Builder</option>
                      <option value="Channel Partner / Brokerage">Channel Partner / Brokerage</option>
                      <option value="Sales Director / VP">Sales Director / VP</option>
                      <option value="Marketing Lead">Marketing Lead</option>
                      <option value="PropTech Consultant">PropTech Consultant</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Monthly Lead Volume
                    </label>
                    <select
                      value={formData.monthlyLeads}
                      onChange={(e) => setFormData({ ...formData, monthlyLeads: e.target.value })}
                      className="w-full px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                    >
                      <option value="Under 100 leads/mo">Under 100 leads/mo</option>
                      <option value="100 - 500 leads/mo">100 - 500 leads/mo</option>
                      <option value="500 - 2,000 leads/mo">500 - 2,000 leads/mo</option>
                      <option value="2,000+ leads/mo">2,000+ leads/mo</option>
                    </select>
                  </div>
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
                    {error}
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 hover:opacity-95 disabled:opacity-50 shadow-lg shadow-orange-500/20 transition-all duration-200 cursor-pointer"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Connecting to HYTHRIX Engine...
                      </span>
                    ) : (
                      <>
                        <span>Schedule Direct Consultation</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-6 pt-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Zero spam promise
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-orange-400" />
                    Response in &lt; 2 hours
                  </span>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Demo Request Received</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. A HYTHRIX real-estate automation specialist will connect with you via WhatsApp ({formData.phone}) to schedule your walkthrough.
              </p>

              {/* Real Backend Lead Confirmation Card */}
              <div className="bg-black/50 border border-white/10 rounded-xl p-4 text-left max-w-md mx-auto">
                <div className="text-xs font-mono text-orange-400 mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    HYTHRIX PIPELINE CONFIRMED
                  </span>
                  <span className="text-white font-bold">{referenceId}</span>
                </div>
                <div className="text-xs text-slate-300 space-y-1 font-mono">
                  <p>• Lead Reference: {referenceId}</p>
                  <p>• Company: {formData.company || "Independent"}</p>
                  <p>• Volume: {formData.monthlyLeads}</p>
                  <p>• Status: Qualified & Assigned to Solutions Team</p>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm font-medium text-white bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
