"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { products } from "@/lib/pricing";

const services = [
  "T-Shirt Printing",
  "Large Format Printing",
  "Business Cards",
  "Roll-Up Banners",
  "Stickers & Labels",
  "Flyers",
  "Graphics & Web Design",
  "Banners",
  "Photography",
  "Other / Custom",
  "Website Development",
];

function QuoteContent() {
  const params = useSearchParams();
  const prefillProduct = params.get("product");
  const matchedProduct = products.find((p) => p.id === prefillProduct);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: matchedProduct?.category ?? "",
    quantity: 1,
    details: matchedProduct ? `Interested in: ${matchedProduct.name}` : "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const update = (key: keyof typeof form, value: string | number) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "quote",
          ...form,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or message us on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Section>
        <div className="max-w-xl mx-auto text-center py-16">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="text-3xl font-bold text-ch-dark mb-4">
            Request Received!
          </h1>
          <p className="text-ch-grey mb-8">
            We&apos;ll get back to you on {form.phone} within a few hours.
            For urgent jobs, message us on WhatsApp.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/" variant="outline">
              Back to Home
            </Button>
            <Button
              href={`https://wa.me/233501202370?text=Hi%2C%20I%20just%20submitted%20a%20quote%20request%20from%20the%20website.`}
              variant="whatsapp"
            >
              Message on WhatsApp
            </Button>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <>
      <section className="gradient-brand text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          <p className="font-semibold tracking-widest text-sm mb-3 text-ch-yellow">
            GET A QUOTE
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tell Us What You Need
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Fill in the form and we&apos;ll come back to you with a price and
            timeline — usually within a few hours.
          </p>
        </div>
      </section>

      <Section>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 space-y-6"
        >
          {matchedProduct && (
            <div className="bg-ch-light rounded-xl p-4 border border-gray-100">
              <p className="text-xs text-ch-grey mb-1">You&apos;re enquiring about</p>
              <p className="font-semibold text-ch-dark">{matchedProduct.name}</p>
              <p className="text-ch-pink font-medium">
                GHS {matchedProduct.price}{" "}
                <span className="text-ch-grey text-sm font-normal">
                  / {matchedProduct.unit}
                </span>
              </p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-ch-dark mb-2">
                Your Name *
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
          </div>

          <div>
            <label className="block text-sm font-medium text-ch-dark mb-2">
              Email (optional)
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ch-pink focus:outline-none focus:ring-2 focus:ring-ch-pink/20"
              placeholder="you@example.com"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-ch-dark mb-2">
                Service *
              </label>
              <select
                required
                value={form.service}
                onChange={(e) => update("service", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ch-pink focus:outline-none focus:ring-2 focus:ring-ch-pink/20 bg-white"
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-ch-dark mb-2">
                Quantity
              </label>
              <input
                type="number"
                min={1}
                value={form.quantity}
                onChange={(e) => update("quantity", Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ch-pink focus:outline-none focus:ring-2 focus:ring-ch-pink/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ch-dark mb-2">
              Details *
            </label>
            <textarea
              required
              rows={5}
              value={form.details}
              onChange={(e) => update("details", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ch-pink focus:outline-none focus:ring-2 focus:ring-ch-pink/20 resize-none"
              placeholder="Tell us about your project — sizes, colors, deadline, etc."
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm bg-red-50 rounded-xl p-3">
              {error}
            </p>
          )}

          <Button className="w-full !py-4">
            {submitting ? "Sending..." : "Send Request"}
          </Button>

          <p className="text-xs text-ch-grey text-center">
            We&apos;ll never share your details. For urgent jobs, WhatsApp us
            directly.
          </p>
        </form>
      </Section>
    </>
  );
}

export default function QuotePage() {
  return (
    <Suspense
      fallback={
        <Section>
          <div className="text-center py-16 text-ch-grey">Loading...</div>
        </Section>
      }
    >
      <QuoteContent />
    </Suspense>
  );
}