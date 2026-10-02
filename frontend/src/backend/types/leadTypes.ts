export type LeadStage = "new" | "qualified" | "visit_scheduled" | "booked" | "archived";

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  role?: string;
  monthlyLeads?: string;
  project?: string;
  configuration?: string;
  budgetRange?: string;
  timeline?: string;
  intentScore?: number;
  stage: LeadStage;
  assignedRep?: string;
  notes?: string;
  source: string;
  createdAt: string;
  lastActivityAt: string;
  whatsappStatus: "uncontacted" | "engaged" | "qualified" | "handed_off";
}

export interface LeadStats {
  totalLeads: number;
  newEnquiries: number;
  qualifiedDossiers: number;
  siteVisitsScheduled: number;
  tokensBooked: number;
  avgResponseSeconds: number;
  qualificationRate: string;
}

export interface DemoBookingRequest {
  name: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  monthlyLeads: string;
  note?: string;
}

export interface DemoBookingResponse {
  success: boolean;
  referenceId: string;
  message: string;
  lead: Lead;
}

export interface InboundLeadInput {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  role?: string;
  project?: string;
  configuration?: string;
  budgetRange?: string;
  timeline?: string;
  intentScore?: number;
  stage?: LeadStage;
  assignedRep?: string;
  notes?: string;
  source?: string;
  whatsappStatus?: "uncontacted" | "engaged" | "qualified" | "handed_off";
}

export interface QualificationResult {
  configuration: string;
  budget: string;
  timeline: string;
  intentScore: number;
  phone: string;
  qualificationLatencyMs: number;
}
