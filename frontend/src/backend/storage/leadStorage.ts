import fs from "fs/promises";
import path from "path";
import { Lead, LeadStats } from "../types/leadTypes";

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

const INITIAL_SEEDS: Lead[] = [
  {
    id: "HX-9421",
    name: "Vikram Malhotra",
    email: "vikram.m@gmail.com",
    phone: "+91 98490 12840",
    company: "Malhotra Tech Ventures",
    role: "Developer / Builder",
    monthlyLeads: "500 - 1000 leads/mo",
    project: "Kokapet Heights",
    configuration: "3 BHK Luxury (Tower B)",
    budgetRange: "₹1.50 – ₹1.80 Cr",
    timeline: "< 6 Months",
    intentScore: 94,
    stage: "qualified",
    assignedRep: "Rajesh Kumar (Senior Advisor)",
    notes: "Pre-approved HDFC home loan. Requested site visit for Saturday 11:00 AM.",
    source: "Kokapet Landing Page",
    createdAt: "2026-09-29T10:42:00.000Z",
    lastActivityAt: "2026-09-29T10:43:00.000Z",
    whatsappStatus: "qualified",
  },
  {
    id: "HX-9420",
    name: "Pooja Sharma",
    email: "pooja.sharma@outlook.com",
    phone: "+91 97182 44321",
    company: "Aura Living Spaces",
    role: "Broker / Channel Partner",
    monthlyLeads: "100 - 500 leads/mo",
    project: "Kokapet Heights",
    configuration: "4 BHK Penthouse",
    budgetRange: "₹2.20 – ₹2.50 Cr",
    timeline: "< 3 Months",
    intentScore: 91,
    stage: "visit_scheduled",
    assignedRep: "Sneha Reddy (Project Specialist)",
    notes: "Site visit confirmed for Saturday 2:00 PM. Calendar invite sent.",
    source: "Meta Ads (Instagram)",
    createdAt: "2026-09-29T09:15:00.000Z",
    lastActivityAt: "2026-09-29T09:18:00.000Z",
    whatsappStatus: "handed_off",
  },
  {
    id: "HX-9419",
    name: "Karthik Reddy",
    email: "karthik.r@reddyenterprises.in",
    phone: "+91 99011 83290",
    company: "Reddy Infrastructure",
    role: "Developer / Builder",
    monthlyLeads: "1000+ leads/mo",
    project: "Financial District Skyline",
    configuration: "3 BHK Corner (Unit 1402)",
    budgetRange: "₹2.10 Cr",
    timeline: "Immediate Ready",
    intentScore: 98,
    stage: "booked",
    assignedRep: "Arjun Verma (VP Sales)",
    notes: "Token amount ₹2,00,000 received. Sale agreement draft shared on WhatsApp.",
    source: "99acres Direct Integration",
    createdAt: "2026-09-28T16:20:00.000Z",
    lastActivityAt: "2026-09-29T08:30:00.000Z",
    whatsappStatus: "handed_off",
  },
  {
    id: "HX-9418",
    name: "Ananya Sen",
    email: "ananya.sen@gmail.com",
    phone: "+91 94331 55670",
    company: "Indie Buyer",
    role: "Sales Agency Lead",
    monthlyLeads: "< 100 leads/mo",
    project: "Cyber Hills Plotted Villa",
    configuration: "2 BHK Executive Plot",
    budgetRange: "₹85L – ₹95L",
    timeline: "6 - 12 Months",
    intentScore: 78,
    stage: "new",
    assignedRep: "Unassigned (Queue)",
    notes: "WhatsApp qualification questions dispatched. Waiting for budget confirmation.",
    source: "Google Search Ads",
    createdAt: "2026-09-29T11:20:00.000Z",
    lastActivityAt: "2026-09-29T11:21:00.000Z",
    whatsappStatus: "engaged",
  },
];

export async function ensureStorageFile(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    try {
      await fs.access(LEADS_FILE);
    } catch {
      await fs.writeFile(LEADS_FILE, JSON.stringify(INITIAL_SEEDS, null, 2), "utf-8");
    }
  } catch (error) {
    console.error("Storage initialization error:", error);
  }
}

export async function readAllLeads(): Promise<Lead[]> {
  await ensureStorageFile();
  try {
    const raw = await fs.readFile(LEADS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch (error) {
    console.error("Error reading storage file:", error);
    return INITIAL_SEEDS;
  }
}

export async function writeAllLeads(leads: Lead[]): Promise<void> {
  await ensureStorageFile();
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

export async function calculateLeadStats(leads: Lead[]): Promise<LeadStats> {
  const total = leads.length;
  const newCount = leads.filter((l) => l.stage === "new").length;
  const qualifiedCount = leads.filter((l) => l.stage === "qualified").length;
  const visitCount = leads.filter((l) => l.stage === "visit_scheduled").length;
  const bookedCount = leads.filter((l) => l.stage === "booked").length;

  const qualifiedOrBeyond = leads.filter((l) => l.stage !== "new" && l.stage !== "archived").length;
  const rate = total > 0 ? `${Math.round((qualifiedOrBeyond / total) * 100)}%` : "0%";

  return {
    totalLeads: total,
    newEnquiries: newCount,
    qualifiedDossiers: qualifiedCount,
    siteVisitsScheduled: visitCount,
    tokensBooked: bookedCount,
    avgResponseSeconds: 58,
    qualificationRate: rate,
  };
}
