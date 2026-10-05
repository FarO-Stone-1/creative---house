import { NextResponse } from "next/server";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";

// Service role client — bypasses RLS so we can write from a webhook
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const body = await req.text();

  // Verify Paystack signature
  const hash = crypto
    .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY!)
    .update(body)
    .digest("hex");

  if (hash !== req.headers.get("x-paystack-signature")) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const event = JSON.parse(body);

  if (event.event === "charge.success") {
    const { reference, amount, metadata } = event.data;

    const { error } = await supabaseAdmin.from("orders").insert({
      reference,
      customer_name: metadata?.customer?.name ?? "Unknown",
      customer_phone: metadata?.customer?.phone ?? "",
      customer_email: metadata?.customer?.email ?? "",
      items: metadata?.items ?? [],
      total: amount / 100, // convert pesewas → GHS
      status: "paid",
    });

    if (error) {
      console.error("Failed to save order:", error);
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    console.log("✅ Order saved:", reference);
  }

  return NextResponse.json({ ok: true });
}