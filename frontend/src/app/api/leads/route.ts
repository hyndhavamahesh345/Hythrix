import { NextResponse } from "next/server";
import { LeadService, LeadStage } from "@/backend";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const stage = searchParams.get("stage") as LeadStage | null;
    const limit = searchParams.get("limit") ? parseInt(searchParams.get("limit")!, 10) : undefined;

    const { leads, stats } = await LeadService.listLeads(stage || undefined, limit);

    return NextResponse.json({
      success: true,
      stats,
      count: leads.length,
      leads,
    });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch leads." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { success: false, message: "Lead name and phone number are required." },
        { status: 400 }
      );
    }

    const newLead = await LeadService.ingestLead(body);

    return NextResponse.json(
      {
        success: true,
        message: "Inbound lead recorded and added to HYTHRIX pipeline queue.",
        lead: newLead,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create lead." },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { id, stage, notes } = body;

    if (!id || !stage) {
      return NextResponse.json(
        { success: false, message: "Lead ID and target stage are required." },
        { status: 400 }
      );
    }

    const updatedLead = await LeadService.advanceStage(id, stage, notes);

    if (!updatedLead) {
      return NextResponse.json(
        { success: false, message: `Lead with ID ${id} not found.` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Lead ${id} moved to stage '${stage}'.`,
      lead: updatedLead,
    });
  } catch (error) {
    console.error("Error updating lead stage:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update lead stage." },
      { status: 500 }
    );
  }
}
