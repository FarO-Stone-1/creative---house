"use client";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

const works = [
  { title: "Business Cards", category: "Business Cards", image: "/assets/gallery/cards-01.jpg" },
  { title: "Custom Stickers", category: "Stickers",       image: "/assets/gallery/stickers-01.jpg" },
  { title: "Promotional Flyers", category: "Flyers",      image: "/assets/gallery/flyers-01.jpg" },
  { title: "Custom Labels", category: "Stickers",         image: "/assets/gallery/labels-01.jpg" },
  { title: "Roll-Up Banner", category: "Banners",         image: "/assets/gallery/rollup-01.jpg" },
  { title: "Large Format Print", category: "Large Format", image: "/assets/gallery/large-format-01.jpg" },
  { title: "Photography Work", category: "Photography",   image: "/assets/gallery/photography-01.jpg" },
];

export default function GalleryPage() {
  return (
    <>
      <section className="gradient-brand text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
          <p className="font-semibold tracking-widest text-sm mb-3 text-ch-yellow">
            OUR PORTFOLIO
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Real projects, real results. A look at what we&apos;ve created for
            our clients across Ghana.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {works.map((w) => (
            <div
              key={w.title}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="aspect-square bg-ch-light relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.image}
                  alt={w.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-ch-pink font-medium mb-1">
                  {w.category}
                </p>
                <p className="text-sm font-medium text-ch-dark">{w.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Like what you see?
        </h2>
        <p className="text-ch-grey max-w-xl mx-auto mb-8">
          Let&apos;s create something for your brand.
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