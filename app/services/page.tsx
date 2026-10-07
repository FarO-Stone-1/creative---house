import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export const metadata = {
  title: "Services — The Creative House",
  description:
    "T-shirt printing, large format printing, business cards, roll-up banners, stickers, flyers, graphics & web design, banners and photography in Haatso, Accra.",
};

const services = [
  {
    id: "tshirts",
    icon: "👕",
    name: "T-Shirt Printing",
    tagline: "Custom shirts for teams, events, and brands.",
    description:
      "We print high-quality designs on t-shirts, polos, and hoodies. Perfect for corporate uniforms, church groups, schools, events, and personal brands. Durable prints that survive the wash.",
  },
  {
    id: "large-format",
    icon: "🖨️",
    name: "Large Format Printing",
    tagline: "Big prints, bold impact.",
    description:
      "From outdoor advertising to indoor signage — we print on the largest formats with rich, vivid color. Ideal for billboards, wall graphics, event backdrops, and shop signage.",
  },
  {
    id: "cards",
    icon: "💼",
    name: "Business Cards",
    tagline: "First impressions that last.",
    description:
      "Premium matte or gloss business cards with crisp color and sharp detail. Choose from single or double-sided printing. Small batches or bulk orders welcome.",
  },
  {
    id: "rollup",
    icon: "🏷️",
    name: "Roll-Up Banners",
    tagline: "Portable, professional, ready to travel.",
    description:
      "Sturdy 80×200cm roll-up banners with full-color prints. Comes with a retractable stand and carry bag. Perfect for exhibitions, churches, product launches, and events.",
  },
  {
    id: "stickers",
    icon: "✨",
    name: "Stickers & Labels",
    tagline: "Brand everything.",
    description:
      "Custom die-cut stickers, round labels, product labels, and packaging stickers. Waterproof options available for bottles, jars, and outdoor use.",
  },
  {
    id: "flyers",
    icon: "📄",
    name: "Flyers",
    tagline: "Get the word out fast.",
    description:
      "A5, A4, or custom-sized flyers in full color. Perfect for promotions, events, church programs, business openings, and product announcements. Bulk pricing available.",
  },
  {
    id: "design",
    icon: "🎨",
    name: "Graphics & Web Design",
    tagline: "Design that speaks your brand.",
    description:
      "Logos, brand identities, social media graphics, posters, and web design. Our team works with you to build visuals that actually sell your business.",
  },
  {
    id: "banners",
    icon: "🚩",
    name: "Banners",
    tagline: "For every wall, fence, and event.",
    description:
      "Vinyl banners, mesh banners, and fabric banners in any size. Reinforced edges and eyelets for durability outdoors. Ideal for shops, churches, campaigns, and events.",
  },
  {
    id: "photography",
    icon: "📸",
    name: "Photography",
    tagline: "Capture the moment — professionally.",
    description:
      "Event coverage, product photography, and portraits. Clean lighting and professional editing, with fast turnaround for prints and digital use.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="gradient-brand text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
          <p className="font-semibold tracking-widest text-sm mb-3 text-ch-yellow">
            WHAT WE DO
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            From a single business card to a full brand identity — The Creative
            House handles it all.
          </p>
        </div>
      </section>

      <Section>
        <div className="space-y-6">
          {services.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-center bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
            >
              <div className="text-5xl md:text-6xl">{s.icon}</div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-ch-dark mb-2">
                  {s.name}
                </h2>
                <p className="text-ch-pink font-medium mb-3">{s.tagline}</p>
                <p className="text-ch-grey leading-relaxed">{s.description}</p>
              </div>
              <div className="md:pl-4">
                <Button href="/quote" variant="outline">
                  Get a Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Not sure which service you need?
        </h2>
        <p className="text-ch-grey max-w-xl mx-auto mb-8">
          Tell us what you are trying to do and we will recommend the best
          option.
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