import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Save as a quote request
    if (body.type === "quote") {
      const { name, phone, email, service, quantity, details } = body;

      const { error } = await supabase.from("quotes").insert({
        name,
        phone,
        email: email || null,
        service,
        quantity: quantity || null,
        details,
      });

      if (error) {
        console.error("Supabase error:", error);
        return NextResponse.json(
          { ok: false, error: error.message },
          { status: 500 }
        );
      }

      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      { ok: false, error: "Unknown request type" },
      { status: 400 }
    );
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}