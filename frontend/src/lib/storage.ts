import { LeadService } from "@/backend/services/leadService";
import { readAllLeads, calculateLeadStats } from "@/backend/storage/leadStorage";
import { Lead } from "@/backend/types/leadTypes";

export const getLeads = readAllLeads;
export const getLeadStats = async () => {
  const leads = await readAllLeads();
  return calculateLeadStats(leads);
};
export const saveLead = (leadData: Omit<Lead, "id" | "createdAt" | "lastActivityAt">) =>
  LeadService.ingestLead(leadData);
export const updateLeadStage = (id: string, stage: Lead["stage"], notes?: string) =>
  LeadService.advanceStage(id, stage, notes);
