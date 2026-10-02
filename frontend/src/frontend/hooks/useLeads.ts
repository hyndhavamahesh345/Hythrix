"use client";

import { useState, useEffect, useCallback } from "react";
import { Lead, LeadStats } from "@/backend/types/leadTypes";

export function useLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<LeadStats | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  const fetchLeads = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/leads");
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads || []);
        setStats(data.stats || null);
      }
    } catch (err) {
      console.error("Failed to load leads from backend:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let ignore = false;
    fetch("/api/leads")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && !ignore) {
          setLeads(data.leads || []);
          setStats(data.stats || null);
        }
      })
      .catch((err) => {
        console.error("Failed to load leads from backend:", err);
      });

    return () => {
      ignore = true;
    };
  }, []);

  const simulateInboundLead = async () => {
    try {
      const randomNames = ["Meera Nambiar", "Suresh Khanna", "Deepak Iyer", "Tanvi Joshi", "Aditya Singhania"];
      const randomConfigs = ["3 BHK Corner (Tower A)", "2 BHK Executive", "4 BHK Sky Villa", "3 BHK Plotted"];
      const randomBudgets = ["₹1.40 – ₹1.70 Cr", "₹95L – ₹1.10 Cr", "₹2.40 – ₹2.80 Cr", "₹1.60 – ₹1.90 Cr"];

      const name = randomNames[Math.floor(Math.random() * randomNames.length)];
      const config = randomConfigs[Math.floor(Math.random() * randomConfigs.length)];
      const budget = randomBudgets[Math.floor(Math.random() * randomBudgets.length)];

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone: "+91 98" + Math.floor(10000000 + Math.random() * 90000000),
          email: `${name.toLowerCase().replace(" ", ".")}@example.com`,
          project: "Kokapet Heights",
          configuration: config,
          budgetRange: budget,
          timeline: "< 3 Months",
          intentScore: Math.floor(82 + Math.random() * 16),
          stage: "new",
          source: "Simulated Portal Webhook",
        }),
      });

      if (res.ok) {
        setActionMessage(`Ingested new lead: ${name}`);
        setTimeout(() => setActionMessage(null), 3000);
        fetchLeads();
      }
    } catch (err) {
      console.error("Error creating simulated lead:", err);
    }
  };

  const advanceLeadStage = async (id: string, currentStage: Lead["stage"]) => {
    const stageFlow: Record<Lead["stage"], Lead["stage"]> = {
      new: "qualified",
      qualified: "visit_scheduled",
      visit_scheduled: "booked",
      booked: "booked",
      archived: "archived",
    };

    const nextStage = stageFlow[currentStage];
    if (nextStage === currentStage) return;

    try {
      const res = await fetch("/api/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, stage: nextStage }),
      });

      if (res.ok) {
        setActionMessage(`Lead ${id} advanced to ${nextStage}`);
        setTimeout(() => setActionMessage(null), 3000);
        fetchLeads();
      }
    } catch (err) {
      console.error("Error advancing lead stage:", err);
    }
  };

  return {
    leads,
    stats,
    isLoading,
    actionMessage,
    refreshLeads: fetchLeads,
    simulateInboundLead,
    advanceLeadStage,
  };
}
