import { Lead, LeadStage, LeadStats, DemoBookingRequest, InboundLeadInput } from "../types/leadTypes";
import { readAllLeads, writeAllLeads, calculateLeadStats } from "../storage/leadStorage";

export class LeadService {
  /**
   * Retrieves all leads, optionally filtered by stage or limited by count.
   */
  static async listLeads(filterStage?: LeadStage, limit?: number): Promise<{ leads: Lead[]; stats: LeadStats }> {
    let leads = await readAllLeads();

    if (filterStage) {
      leads = leads.filter((l) => l.stage === filterStage);
    }

    const stats = await calculateLeadStats(await readAllLeads());

    if (limit && limit > 0) {
      leads = leads.slice(0, limit);
    }

    return { leads, stats };
  }

  /**
   * Captures a direct demo consultation request from the website.
   */
  static async createDemoBooking(input: DemoBookingRequest): Promise<Lead> {
    const leads = await readAllLeads();
    const idNumber = Math.floor(1000 + Math.random() * 9000);
    const now = new Date().toISOString();

    const newLead: Lead = {
      id: `HX-${idNumber}`,
      name: input.name.trim(),
      email: input.email.trim().toLowerCase(),
      phone: input.phone.trim(),
      company: input.company?.trim() || "Independent Developer",
      role: input.role || "Developer / Builder",
      monthlyLeads: input.monthlyLeads || "100 - 500 leads/mo",
      project: "Direct Demo Audit Request",
      configuration: "Real Estate Lead Automation Suite",
      budgetRange: "Enterprise Pipeline",
      timeline: "Immediate Implementation",
      intentScore: 95,
      stage: "qualified",
      assignedRep: "Senior Technical Solutions Architect",
      notes: input.note ? `Audit Focus: ${input.note.trim()}` : "Requested 20-min HYTHRIX product walkthrough.",
      source: "Website Demo Booking Modal",
      whatsappStatus: "engaged",
      createdAt: now,
      lastActivityAt: now,
    };

    leads.unshift(newLead);
    await writeAllLeads(leads);
    return newLead;
  }

  /**
   * Ingests an inbound lead from marketing portals or ad webhooks.
   */
  static async ingestLead(input: InboundLeadInput): Promise<Lead> {
    const leads = await readAllLeads();
    const idNumber = Math.floor(1000 + Math.random() * 9000);
    const now = new Date().toISOString();

    const newLead: Lead = {
      id: `HX-${idNumber}`,
      name: input.name.trim(),
      phone: input.phone.trim(),
      email: input.email?.trim().toLowerCase() || "unprovided@prospect.in",
      company: input.company?.trim(),
      role: input.role || "Homebuyer",
      project: input.project || "Default Active Project",
      configuration: input.configuration || "Unspecified",
      budgetRange: input.budgetRange || "Under Evaluation",
      timeline: input.timeline || "Exploring",
      intentScore: input.intentScore || 75,
      stage: input.stage || "new",
      assignedRep: input.assignedRep || "Unassigned (Queue)",
      notes: input.notes || "Inbound lead ingested via API webhook.",
      source: input.source || "External API Webhook",
      whatsappStatus: input.whatsappStatus || "uncontacted",
      createdAt: now,
      lastActivityAt: now,
    };

    leads.unshift(newLead);
    await writeAllLeads(leads);
    return newLead;
  }

  /**
   * Updates a lead's stage and appends operational notes.
   */
  static async advanceStage(id: string, targetStage: LeadStage, notes?: string): Promise<Lead | null> {
    const leads = await readAllLeads();
    const index = leads.findIndex((l) => l.id === id);

    if (index === -1) return null;

    leads[index].stage = targetStage;
    leads[index].lastActivityAt = new Date().toISOString();
    if (notes) {
      leads[index].notes = `${leads[index].notes || ""} | ${notes}`;
    }

    await writeAllLeads(leads);
    return leads[index];
  }
}
