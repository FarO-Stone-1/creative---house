import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, amount, reference, customer, items } = await req.json();

    if (!email || !amount || !reference) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const res = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount: Math.round(amount * 100), // convert GHS → pesewas
          reference,
          callback_url: `${process.env.NEXT_PUBLIC_SITE_URL}/quote/success?ref=${reference}`,
          metadata: { customer, items },
        }),
      }
    );

    const data = await res.json();

    if (!data.status) {
      return NextResponse.json(
        { ok: false, error: data.message || "Paystack error" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      ok: true,
      authorization_url: data.data.authorization_url,
      reference: data.data.reference,
    });
  } catch (err) {
    console.error("Paystack initiate error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}