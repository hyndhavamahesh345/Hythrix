"use client";

import { useState, useEffect, useCallback } from "react";
import {
  X,
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
} from "lucide-react";
import { useAuth, UserRole } from "@/frontend/hooks/useAuth";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "signin" | "signup";
  onSuccess?: () => void;
}

export default function AuthModal({
  isOpen,
  onClose,
  initialMode = "signin",
  onSuccess,
}: AuthModalProps) {
  const [mode, setMode] = useState<"signin" | "signup">(initialMode);
  const [showPassword, setShowPassword] = useState(false);

  // Form Fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState<UserRole>("developer");
  const [formSuccess, setFormSuccess] = useState<string | null>(null);

  const { signIn, signUp, isLoading, error, clearError } = useAuth();

  const [prevInitialMode, setPrevInitialMode] = useState(initialMode);
  if (initialMode !== prevInitialMode) {
    setPrevInitialMode(initialMode);
    setMode(initialMode);
  }

  const handleClose = useCallback(() => {
    clearError();
    setFormSuccess(null);
    onClose();
  }, [clearError, onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    if (mode === "signin") {
      const ok = await signIn(email, password);
      if (ok) {
        setFormSuccess("Signed in successfully!");
        setTimeout(() => {
          onSuccess?.();
          onClose();
        }, 800);
      }
    } else {
      const ok = await signUp(name, email, password, company, role);
      if (ok) {
        setFormSuccess("Account created successfully!");
        setTimeout(() => {
          onSuccess?.();
          onClose();
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md rounded-2xl bg-gradient-to-b from-[#101422] to-[#0a0d16] border border-white/[0.12] shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Top Flame Accent Line */}
        <div className="h-1 w-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-400" />

        {/* Modal Header */}
        <div className="p-6 pb-0 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs font-mono">
              HX
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block">
                HYTHRIX OS ACCESS
              </span>
              <span className="text-[11px] font-mono text-emerald-400">
                Encrypted Pipeline Auth
              </span>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher: Sign In vs Sign Up */}
        <div className="px-6 pt-5">
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

        {/* Quick Demo Autofill Banner */}
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

        {/* Error / Success Notifications */}
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
