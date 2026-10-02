import { NextResponse } from "next/server";
import { LeadService, DemoBookingRequest } from "@/backend";

export async function POST(request: Request) {
  try {
    const body: DemoBookingRequest = await request.json();

    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { success: false, message: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const createdLead = await LeadService.createDemoBooking(body);

    return NextResponse.json(
      {
        success: true,
        referenceId: createdLead.id,
        message: "Your demo walkthrough request has been confirmed. Our team has dispatched a calendar invite and WhatsApp confirmation.",
        lead: createdLead,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing demo request:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error processing demo request." },
      { status: 500 }
    );
  }
}
