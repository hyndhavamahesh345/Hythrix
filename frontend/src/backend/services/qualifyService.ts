import { QualificationResult } from "../types/leadTypes";

export class QualifyService {
  /**
   * Evaluates inbound conversational text to extract buyer preferences and compute intent readiness.
   */
  static evaluateMessage(message: string, phone?: string): {
    extractedDossier: QualificationResult;
    automatedReply: string;
    nextAction: "ESCALATE_TO_SALES_REP" | "CONTINUE_WHATSAPP_QUALIFICATION";
  } {
    const text = message.toLowerCase();

    // Configuration extraction
    let configuration = "Unspecified";
    if (text.includes("4 bhk") || text.includes("4bhk") || text.includes("penthouse")) {
      configuration = "4 BHK Luxury / Penthouse";
    } else if (text.includes("3 bhk") || text.includes("3bhk")) {
      configuration = "3 BHK Premium";
    } else if (text.includes("2 bhk") || text.includes("2bhk")) {
      configuration = "2 BHK Executive";
    } else if (text.includes("villa") || text.includes("plot")) {
      configuration = "Plotted Villa / Land";
    }

    // Budget extraction
    let budget = "Standard Pricing";
    if (text.includes("cr") || text.includes("crore")) {
      const match = text.match(/(\d+(\.\d+)?)\s*(to|-)?\s*(\d+(\.\d+)?)?\s*cr/);
      budget = match ? `₹${match[0].toUpperCase()}` : "₹1.50 Cr+";
    } else if (text.includes("lakh") || text.includes("lac") || text.includes("l")) {
      const match = text.match(/(\d+)\s*(to|-)?\s*(\d+)?\s*(lakh|lac|l)/);
      budget = match ? `₹${match[0].toUpperCase()}` : "₹80L - ₹1Cr";
    }

    // Timeline & Intent scoring
    let timeline = "Exploring";
    let intentScore = 70;
    if (text.includes("immediate") || text.includes("ready") || text.includes("this month") || text.includes("30 days")) {
      timeline = "Immediate (< 30 Days)";
      intentScore += 25;
    } else if (text.includes("3 months") || text.includes("90 days") || text.includes("soon")) {
      timeline = "1 - 3 Months";
      intentScore += 20;
    } else if (text.includes("6 months") || text.includes("year")) {
      timeline = "3 - 6 Months";
      intentScore += 10;
    }

    if (configuration !== "Unspecified") intentScore += 10;
    if (budget !== "Standard Pricing") intentScore += 10;
    intentScore = Math.min(99, intentScore);

    const automatedReply =
      intentScore >= 85
        ? `Thank you for sharing your preferences (${configuration}, ${budget}, timeline: ${timeline}). We have selected 3 units that align with your criteria. Would you like our Senior Project Advisor to host an exclusive private site walkthrough this Saturday?`
        : `Thanks for your interest! We have received your query regarding ${configuration}. Could you please confirm your preferred possession date so we can share the current inventory sheet?`;

    const nextAction = intentScore >= 85 ? "ESCALATE_TO_SALES_REP" : "CONTINUE_WHATSAPP_QUALIFICATION";

    return {
      extractedDossier: {
        configuration,
        budget,
        timeline,
        intentScore,
        phone: phone || "Unregistered",
        qualificationLatencyMs: 38,
      },
      automatedReply,
      nextAction,
    };
  }
}
