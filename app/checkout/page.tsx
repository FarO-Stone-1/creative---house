"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { products } from "@/lib/pricing";

function CheckoutContent() {
  const params = useSearchParams();
  const productId = params.get("product");
  const product = products.find((p) => p.id === productId);

  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    setLoading(true);
    setError("");

    try {
      const reference = `CH-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

      const res = await fetch("/api/paystack/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          amount: product.price,
          reference,
          customer: form,
          items: [product],
        }),
      });

      const data = await res.json();

      if (!data.ok) throw new Error(data.error || "Payment init failed");

      window.location.href = data.authorization_url;
    } catch (err) {
      console.error(err);
      setError("Could not start payment. Please try again or WhatsApp us.");
      setLoading(false);
    }
  };

  if (!product) {
    return (
      <Section>
        <div className="max-w-md mx-auto text-center py-16">
          <h1 className="text-2xl font-bold text-ch-dark mb-4">
            Product not found
          </h1>
          <p className="text-ch-grey mb-8">
            Please go back to the shop and pick a product.
          </p>
          <Button href="/shop" variant="outline">
            Back to Shop
          </Button>
        </div>
      </Section>
    );
  }

  return (
    <>
      <section className="gradient-brand text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 text-center">
          <p className="font-semibold tracking-widest text-sm mb-3 text-ch-yellow">
            CHECKOUT
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">
            Complete Your Order
          </h1>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="font-semibold text-ch-dark mb-4">
                Order Summary
              </h2>
              <p className="text-xs text-ch-pink font-medium mb-1">
                {product.category}
              </p>
              <p className="font-medium text-ch-dark mb-2">{product.name}</p>
              <p className="text-sm text-ch-grey mb-4">
                {product.description}
              </p>
              <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                <span className="text-ch-grey text-sm">Total</span>
                <span className="text-2xl font-bold text-ch-dark">
                  GHS {product.price}
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <form
              onSubmit={handlePay}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-5"
            >
              <h2 className="font-semibold text-ch-dark mb-2">
                Your Details
              </h2>

              <div>
                <label className="block text-sm font-medium text-ch-dark mb-2">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ch-pink focus:outline-none focus:ring-2 focus:ring-ch-pink/20"
                  placeholder="e.g. Kofi Mensah"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ch-dark mb-2">
                  Phone Number *
                </label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ch-pink focus:outline-none focus:ring-2 focus:ring-ch-pink/20"
                  placeholder="e.g. 050 120 2370"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ch-dark mb-2">
                  Email *
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ch-pink focus:outline-none focus:ring-2 focus:ring-ch-pink/20"
                  placeholder="you@example.com"
                />
                <p className="text-xs text-ch-grey mt-2">
                  We&apos;ll send your receipt here.
                </p>
              </div>

              {error && (
                <p className="text-red-600 text-sm bg-red-50 rounded-xl p-3">
                  {error}
                </p>
              )}

              <Button className="w-full !py-4">
                {loading
                  ? "Redirecting to payment..."
                  : `Pay GHS ${product.price} with MoMo or Card`}
              </Button>

              <p className="text-xs text-ch-grey text-center">
                Secure payment via Paystack. You&apos;ll be redirected to
                complete your payment.
              </p>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <Section>
          <div className="text-center py-16 text-ch-grey">Loading...</div>
        </Section>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}