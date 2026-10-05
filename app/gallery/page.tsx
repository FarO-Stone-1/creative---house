"use client";

import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

const categories = [
  "All",
  "Business Cards",
  "Stickers",
  "Banners",
  "T-Shirts",
  "Large Format",
  "Flyers",
  "Photography",
];

const works = [
  { title: "Business Card — Khiks Haven", category: "Business Cards", image: "/assets/gallery/cards-01.jpg" },
  { title: "Business Card Set",           category: "Business Cards", image: "/assets/gallery/cards-02.jpg" },
  { title: "Round Stickers — Khiks Haven", category: "Stickers",     image: "/assets/gallery/stickers-01.jpg" },
  { title: "Custom Labels",                category: "Stickers",     image: "/assets/gallery/stickers-02.jpg" },
  { title: "Roll-Up Banner",               category: "Banners",      image: "/assets/gallery/banner-01.jpg" },
  { title: "Event Banner",                 category: "Banners",      image: "/assets/gallery/banner-02.jpg" },
  { title: "Custom T-Shirt",               category: "T-Shirts",     image: "/assets/gallery/tshirt-01.jpg" },
  { title: "Team T-Shirts",                category: "T-Shirts",     image: "/assets/gallery/tshirt-02.jpg" },
  { title: "Large Format Print",           category: "Large Format", image: "/assets/gallery/large-format-01.jpg" },
  { title: "Outdoor Signage",              category: "Large Format", image: "/assets/gallery/large-format-02.jpg" },
  { title: "Promo Flyer",                  category: "Flyers",       image: "/assets/gallery/flyer-01.jpg" },
  { title: "Event Flyer",                  category: "Flyers",       image: "/assets/gallery/flyer-02.jpg" },
  { title: "Product Photography",          category: "Photography",  image: "/assets/gallery/photo-01.jpg" },
  { title: "Event Coverage",               category: "Photography",  image: "/assets/gallery/photo-02.jpg" },
];

export default function GalleryPage() {
  return (
    <>
      {/* HERO */}
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

      {/* FILTER STRIP */}
      <Section className="!py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-ch-grey hover:border-ch-pink hover:text-ch-pink transition cursor-pointer"
            >
              {cat}
            </span>
          ))}
        </div>
      </Section>

      {/* GRID */}
      <Section className="!pt-0">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {works.map((w) => (
            <div
              key={w.title}
              className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <div className="aspect-square bg-ch-light relative flex items-center justify-center text-ch-grey text-xs text-center px-3">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span>{w.title}</span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.image}
                  alt={w.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
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

      {/* CTA */}
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