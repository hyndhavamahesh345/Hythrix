"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Lock,
  Mail,
  User as UserIcon,
  Building,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import BrandLogo from "@/frontend/components/layout/BrandLogo";
import { useAuth, UserRole } from "@/frontend/hooks/useAuth";

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = useState(false);

  // Form Fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState<UserRole>("developer");
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  const { signIn, signUp, isLoading, error, clearError } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    if (mode === "signin") {
      const ok = await signIn(email, password);
      if (ok) {
        setFormSuccess("Signed in successfully! Redirecting...");
        setTimeout(() => {
          router.push("/");
        }, 800);
      }
    } else {
      const ok = await signUp(name, email, password, company, role);
      if (ok) {
        setFormSuccess("Account created successfully! Redirecting...");
        setTimeout(() => {
          router.push("/");
        }, 800);
      }
    }
  };

  const fillDemoAccount = () => {
    setMode("signin");
    setEmail("demo@hythrix.com");
    setPassword("demo1234");
    clearError();
  };

  const roleOptions: { id: UserRole; label: string }[] = [
    { id: "developer", label: "Developer / Builder" },
    { id: "brokerage", label: "Brokerage / Agency" },
    { id: "sales_closer", label: "Project Sales Closer" },
  ];

  return (
    <div className="min-h-screen bg-[#06070a] text-white flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-red-600/15 via-orange-500/15 to-amber-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Top Navigation Back */}
      <div className="w-full max-w-md mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to HYTHRIX</span>
        </Link>
        <BrandLogo size="sm" />
      </div>

      {/* Card */}
      <div className="w-full max-w-md rounded-2xl bg-gradient-to-b from-[#101422] to-[#0a0d16] border border-white/[0.12] shadow-2xl overflow-hidden">
        
        {/* Flame Accent */}
        <div className="h-1 w-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-400" />

        {/* Header */}
        <div className="p-6 pb-2 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            ENTERPRISE CONSOLE
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">
            {mode === "signin" ? "Sign In to Your Workspace" : "Create Developer Account"}
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Access real estate lead pipelines, WhatsApp dispatch, and buyer qualification telemetry.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 pt-4">
          <div className="grid grid-cols-2 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs font-semibold">
            <button
              type="button"
              onClick={() => {
                setMode("signin");
                clearError();
              }}
              className={`py-2 rounded-lg transition-all cursor-pointer ${
                mode === "signin"
                  ? "bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white shadow-md font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setMode("signup");
                clearError();
              }}
              className={`py-2 rounded-lg transition-all cursor-pointer ${
                mode === "signup"
                  ? "bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 text-white shadow-md font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Create Account
            </button>
          </div>
        </div>

        {/* Demo Shortcut */}
        {mode === "signin" && (
          <div className="px-6 pt-4">
            <button
              type="button"
              onClick={fillDemoAccount}
              className="w-full px-3 py-2 rounded-lg bg-orange-500/10 hover:bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-mono flex items-center justify-between transition-colors cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Fill Demo Developer Credentials
              </span>
              <span className="font-semibold underline">Auto-fill →</span>
            </button>
          </div>
        )}

        {/* Notifications */}
        <div className="px-6 pt-3">
          {error && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          {formSuccess && (
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>{formSuccess}</span>
            </div>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-left">
          
          {mode === "signup" && (
            <>
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full bg-[#0a0d16] border border-white/[0.1] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Company / Project Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Malhotra Developers"
                    className="w-full bg-[#0a0d16] border border-white/[0.1] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  Your Primary Role
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {roleOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setRole(opt.id)}
                      className={`px-3 py-2 rounded-lg text-xs font-mono text-left transition-colors border cursor-pointer ${
                        role === opt.id
                          ? "bg-orange-500/15 border-orange-500/40 text-orange-300 font-semibold"
                          : "bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-white"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
              Work Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className="w-full bg-[#0a0d16] border border-white/[0.1] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-mono font-medium text-slate-300">
                Password
              </label>
              {mode === "signin" && (
                <span className="text-[11px] font-mono text-slate-500">
                  Demo pass: demo1234
                </span>
              )}
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type={showPassword ? "text" : "password"}
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#0a0d16] border border-white/[0.1] rounded-xl pl-10 pr-10 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 hover:shadow-lg hover:shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isLoading ? (
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>{mode === "signin" ? "Sign In to Console" : "Create HYTHRIX Account"}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>256-Bit SSL Encrypted Enterprise Auth</span>
          </div>

        </form>

      </div>
    </div>
  );
}
