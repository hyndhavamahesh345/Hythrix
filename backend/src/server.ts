import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { LeadService } from "./services/leadService";
import { QualifyService } from "./services/qualifyService";
import { AuthService } from "./services/authService";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Root & Health
app.get("/", (_req: Request, res: Response) => {
  res.json({
    service: "HYTHRIX Automation Engine API",
    version: "1.0.0",
    status: "active",
    documentation: "/api/health",
  });
});

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
  });
});

// 1. Leads Endpoints
app.get("/api/leads", async (_req: Request, res: Response) => {
  try {
    const data = await LeadService.listLeads();
    res.json(data);
  } catch (error) {
    console.error("Failed to list leads:", error);
    res.status(500).json({ error: "Failed to fetch leads" });
  }
});

app.post("/api/leads", async (req: Request, res: Response) => {
  try {
    const { name, phone, email, project, configuration, budgetRange, timeline, intentScore, stage, source } = req.body;
    if (!name || !phone) {
      res.status(400).json({ error: "Name and phone are required" });
      return;
    }

    const newLead = await LeadService.ingestLead({
      name,
      phone,
      email,
      project,
      configuration,
      budgetRange,
      timeline,
      intentScore,
      stage,
      source,
    });

    res.status(201).json({ success: true, lead: newLead });
  } catch (error) {
    console.error("Failed to ingest lead:", error);
    res.status(500).json({ error: "Failed to ingest lead" });
  }
});

app.patch("/api/leads", async (req: Request, res: Response) => {
  try {
    const { id, stage, notes } = req.body;
    if (!id || !stage) {
      res.status(400).json({ error: "id and stage are required" });
      return;
    }

    const updated = await LeadService.advanceStage(id, stage, notes);
    if (!updated) {
      res.status(404).json({ error: "Lead not found" });
      return;
    }

    res.json({ success: true, lead: updated });
  } catch (error) {
    console.error("Failed to advance lead stage:", error);
    res.status(500).json({ error: "Failed to update lead stage" });
  }
});

// 2. Demo Booking Endpoint
app.post("/api/demo", async (req: Request, res: Response) => {
  try {
    const { fullName, workEmail, phone, company, role, monthlyLeads, notes } = req.body;
    const name = fullName || req.body.name;
    const email = workEmail || req.body.email;
    const clientPhone = phone || req.body.phone;

    if (!name || !email || !clientPhone) {
      res.status(400).json({ error: "Full name, work email, and phone number are required." });
      return;
    }

    const lead = await LeadService.createDemoBooking({
      name,
      email,
      phone: clientPhone,
      company: company || "Undisclosed",
      role: role || "Prospect",
      monthlyLeads: monthlyLeads || "Not specified",
      note: notes || req.body.note,
    });

    res.status(201).json({
      success: true,
      message: "Demo booked successfully. A HYTHRIX specialist will connect on WhatsApp within 15 minutes.",
      leadId: lead.id,
      assignedRep: lead.assignedRep,
    });
  } catch (error) {
    console.error("Failed to book demo:", error);
    res.status(500).json({ error: "Internal server error booking demo." });
  }
});

// Contact / Project Inquiry Endpoint
app.post("/api/contact", async (req: Request, res: Response) => {
  try {
    const { name, email, phone, company, lookingFor, budget, message } = req.body;
    if (!name || !email || !phone) {
      res.status(400).json({ error: "Name, email, and phone are required." });
      return;
    }

    const lead = await LeadService.createDemoBooking({
      name,
      email,
      phone,
      company: company || "Direct Client",
      role: "Founder / Stakeholder",
      monthlyLeads: budget || "Custom Budget",
      note: `Project Request: ${lookingFor || "General"} | Message: ${message || "N/A"}`,
    });

    res.status(201).json({
      success: true,
      message: "Project request received successfully.",
      leadId: lead.id,
    });
  } catch (error) {
    console.error("Failed to process contact request:", error);
    res.status(500).json({ error: "Internal server error processing contact request." });
  }
});

// 3. WhatsApp Conversational Qualification Endpoint
app.post("/api/whatsapp/qualify", (req: Request, res: Response) => {
  try {
    const { message, project } = req.body;
    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Message string is required." });
      return;
    }

    const evaluation = QualifyService.evaluateMessage(message, project);
    res.json({ success: true, evaluation });
  } catch (error) {
    console.error("Failed to evaluate WhatsApp message:", error);
    res.status(500).json({ error: "Failed to process WhatsApp message." });
  }
});

// 4. Authentication Endpoints (Sign In & Sign Up)
app.post("/api/auth/signup", async (req: Request, res: Response) => {
  try {
    const { name, email, password, company, role } = req.body;
    const result = await AuthService.signup({ name, email, password, company, role });
    if (!result.success) {
      res.status(400).json({ error: result.error });
      return;
    }
    res.status(201).json(result);
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "Internal server error during registration." });
  }
});

app.post("/api/auth/signin", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await AuthService.signin({ email, password });
    if (!result.success) {
      res.status(401).json({ error: result.error });
      return;
    }
    res.json(result);
  } catch (error) {
    console.error("Sign in error:", error);
    res.status(500).json({ error: "Internal server error during sign in." });
  }
});

app.get("/api/auth/me", async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401).json({ error: "Authorization token required" });
      return;
    }
    const token = authHeader.split(" ")[1];
    const user = await AuthService.getCurrentUser(token);
    if (!user) {
      res.status(401).json({ error: "Invalid or expired token" });
      return;
    }
    res.json({ success: true, user });
  } catch (error) {
    console.error("Auth me error:", error);
    res.status(500).json({ error: "Failed to authenticate session." });
  }
});

app.listen(PORT, () => {
  console.log(`[HYTHRIX Core API] Server listening on http://localhost:${PORT}`);
});

export default app;
