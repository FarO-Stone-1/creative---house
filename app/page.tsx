import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Link from "next/link";

const services = [
  { name: "T-Shirt Printing",      icon: "👕", href: "/services#tshirts" },
  { name: "Large Format Printing", icon: "🖨️", href: "/services#large-format" },
  { name: "Business Cards",        icon: "💼", href: "/services#cards" },
  { name: "Roll-Up Banners",       icon: "🏷️", href: "/services#rollup" },
  { name: "Stickers & Labels",     icon: "✨", href: "/services#stickers" },
  { name: "Flyers",                icon: "📄", href: "/services#flyers" },
  { name: "Graphics & Web Design", icon: "🎨", href: "/services#design" },
  { name: "Website Development",   icon: "🌐", href: "/services#website" },
  { name: "Banners",               icon: "🚩", href: "/services#banners" },
  { name: "Photography",           icon: "📸", href: "/services#photography" },
];

const galleryPreviews = [
  { name: "Business Cards", image: "/assets/gallery/cards-01.jpg" },
  { name: "Stickers",       image: "/assets/gallery/stickers-01.jpg" },
  { name: "Banners",        image: "/assets/gallery/banner-01.jpg" },
  { name: "Large Format",   image: "/assets/gallery/large-format-01.jpg" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="gradient-brand text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-6 shadow-lg">
            <span className="gradient-brand text-transparent bg-clip-text text-3xl font-bold">
              CH
            </span>
          </div>
          <p className="font-semibold tracking-widest text-sm mb-3 text-ch-yellow">
            PRINT. DESIGN. DELIVER.
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            The Quality That <span className="text-ch-yellow">U</span> Need.
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Turn ordinary products into powerful brand experiences.
            High-quality, durable prints designed to match your brand.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/quote" variant="yellow">
              Get a Free Quote
            </Button>
            <Button
              href="https://wa.me/233501202370"
              variant="whatsapp"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* GRAND OPENING BANNER */}
      <div className="bg-ch-yellow text-ch-dark text-center py-3 font-medium text-sm">
        🎉 Grand Opening Special — Visit us at Haatso Total for opening discounts!
      </div>

      {/* SERVICES */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Services</h2>
          <p className="text-ch-grey max-w-xl mx-auto">
            Everything you need to print, design and deliver your brand.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link
              key={s.name}
              href={s.href}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition border border-gray-100"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <div className="font-medium text-ch-dark">{s.name}</div>
            </Link>
          ))}
        </div>
      </Section>

      {/* GALLERY PREVIEW */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Recent Work</h2>
          <p className="text-ch-grey max-w-xl mx-auto">
            A glimpse of what we&apos;ve delivered for our clients.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryPreviews.map((item) => (
            <div
              key={item.name}
              className="aspect-square bg-ch-light rounded-2xl overflow-hidden relative flex items-end"
            >
              <div className="absolute inset-0 flex items-center justify-center text-ch-grey text-xs text-center px-2">
                {item.name} — image coming soon
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/gallery" variant="outline">
            View Full Gallery
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to bring your ideas to life?
        </h2>
        <p className="text-ch-grey max-w-xl mx-auto mb-8">
          Send us your design or idea — we&apos;ll handle the rest.
        </p>
        <Button href="/quote">Get a Free Quote</Button>
      </Section>
    </>
  );
}