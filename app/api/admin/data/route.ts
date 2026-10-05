import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(req: Request) {
  const pw = req.headers.get("x-admin-password");

  if (!pw || pw !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [ordersRes, quotesRes] = await Promise.all([
    supabaseAdmin
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false }),
    supabaseAdmin
      .from("quotes")
      .select("*")
      .order("created_at", { ascending: false }),
  ]);

  return NextResponse.json({
    orders: ordersRes.data || [],
    quotes: quotesRes.data || [],
  });
}