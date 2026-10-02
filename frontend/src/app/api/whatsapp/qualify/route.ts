import { NextResponse } from "next/server";
import { QualifyService } from "@/backend";

export async function POST(request: Request) {
  try {
    const { message, leadPhone } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { success: false, message: "Valid message string is required." },
        { status: 400 }
      );
    }

    const result = QualifyService.evaluateMessage(message, leadPhone);

    return NextResponse.json({
      success: true,
      extractedDossier: result.extractedDossier,
      automatedReply: result.automatedReply,
      nextAction: result.nextAction,
    });
  } catch (error) {
    console.error("Error in conversational qualification route:", error);
    return NextResponse.json(
      { success: false, message: "Qualification engine error." },
      { status: 500 }
    );
  }
}
