"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { products, categories } from "@/lib/pricing";

export default function ShopPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      {/* HERO */}
      <section className="gradient-brand text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
          <p className="font-semibold tracking-widest text-sm mb-3 text-ch-yellow">
            ORDER ONLINE
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Shop</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Standard products at fixed prices. Pay with MoMo or card and pick up
            at Haatso Total or arrange delivery.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <Section className="!py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full border text-sm transition ${
                active === cat
                  ? "bg-ch-pink text-white border-ch-pink"
                  : "bg-white border-gray-200 text-ch-grey hover:border-ch-pink hover:text-ch-pink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Section>

      {/* PRODUCT GRID */}
      <Section className="!pt-0">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col"
            >
              <div className="aspect-square bg-ch-light flex items-center justify-center text-ch-grey text-xs">
                Image coming soon
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-xs text-ch-pink font-medium mb-1">
                  {p.category}
                </p>
                <h3 className="font-semibold text-ch-dark mb-2">{p.name}</h3>
                <p className="text-sm text-ch-grey mb-4 flex-grow">
                  {p.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-ch-dark">
                      GHS {p.price}
                    </p>
                    <p className="text-xs text-ch-grey">{p.unit}</p>
                  </div>
                  <Button
                    href={`/checkout?product=${p.id}`}
                    variant="outline"
                    className="!px-4 !py-2 !text-sm"
                  >
                    Order
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-ch-grey py-12">
            No products in this category yet.
          </p>
        )}
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need something custom?
        </h2>
        <p className="text-ch-grey max-w-xl mx-auto mb-8">
          Bulk orders, custom sizes, or design work. Send us the details and
          we&apos;ll give you a quote.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/quote">Request a Quote</Button>
          <Button href="https://wa.me/233501202370" variant="whatsapp">
            Chat on WhatsApp
          </Button>
        </div>
      </Section>
    </>
  );
}