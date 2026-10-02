"use client";

import { useState, useEffect, useCallback } from "react";

export type UserRole = "developer" | "brokerage" | "sales_closer" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  company?: string;
  role: UserRole;
  createdAt: string;
  lastLoginAt: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const stored = localStorage.getItem("hythrix_user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      return localStorage.getItem("hythrix_token");
    } catch {
      return null;
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Validate session in background on mount
  useEffect(() => {
    const storedToken = localStorage.getItem("hythrix_token");
    if (!storedToken) return;

    let ignore = false;
    fetch("/api/auth/me", {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (ignore) return;
        if (data?.user) {
          setUser(data.user);
          localStorage.setItem("hythrix_user", JSON.stringify(data.user));
        } else {
          localStorage.removeItem("hythrix_token");
          localStorage.removeItem("hythrix_user");
          setToken(null);
          setUser(null);
        }
      })
      .catch(() => {
        // Keep cached user if offline
      });

    return () => {
      ignore = true;
    };
  }, []);

  const signIn = useCallback(async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || "Failed to sign in. Please verify your credentials.");
        return false;
      }

      setUser(data.user);
      setToken(data.token);
      localStorage.setItem("hythrix_token", data.token);
      localStorage.setItem("hythrix_user", JSON.stringify(data.user));
      return true;
    } catch (err) {
      console.error("Sign in network error:", err);
      setError("Network error connecting to auth server. Please check your connection.");
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signUp = useCallback(
    async (
      name: string,
      email: string,
      password: string,
      company?: string,
      role: UserRole = "developer"
    ): Promise<boolean> => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password, company, role }),
        });

        const data = await res.json();
        if (!res.ok || !data.success) {
          setError(data.error || "Failed to create account.");
          return false;
        }

        setUser(data.user);
        setToken(data.token);
        localStorage.setItem("hythrix_token", data.token);
        localStorage.setItem("hythrix_user", JSON.stringify(data.user));
        return true;
      } catch (err) {
        console.error("Sign up network error:", err);
        setError("Network error connecting to auth server. Please try again.");
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const signOut = useCallback(() => {
    localStorage.removeItem("hythrix_token");
    localStorage.removeItem("hythrix_user");
    setUser(null);
    setToken(null);
    setError(null);
  }, []);

  return {
    user,
    token,
    isAuthenticated: !!user,
    isLoading,
    error,
    clearError: () => setError(null),
    signIn,
    signUp,
    signOut,
  };
}
