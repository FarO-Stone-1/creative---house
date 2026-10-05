import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export const metadata = {
  title: "About — The Creative House",
  description:
    "Learn about The Creative House — a printing, design, and branding studio based in Haatso, Accra.",
};

const values = [
  {
    icon: "🎨",
    title: "Craft",
    text: "Every project gets care. We don't cut corners on quality.",
  },
  {
    icon: "⚡",
    title: "Speed",
    text: "Fast turnaround without sacrificing the finish.",
  },
  {
    icon: "🤝",
    title: "Trust",
    text: "We do what we say — on price, on time, on quality.",
  },
  {
    icon: "💡",
    title: "Creativity",
    text: "Ideas that make your brand stand out from the crowd.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="gradient-brand text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
          <p className="font-semibold tracking-widest text-sm mb-3 text-ch-yellow">
            WHO WE ARE
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About The Creative House
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            A printing and design studio built to help Ghanaian brands look
            their best.
          </p>
        </div>
      </section>

      {/* STORY */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-ch-dark mb-6">Our Story</h2>
          <div className="space-y-4 text-ch-grey leading-relaxed">
            <p>
              The Creative House started with a simple idea: <strong className="text-ch-dark">quality printing
              shouldn&apos;t be hard to find</strong>. Too many businesses lose
              customers because their branding looks rushed, faded, or
              inconsistent.
            </p>
            <p>
              Based in <strong className="text-ch-dark">Haatso, Accra</strong>, we
              combine modern printing equipment with a design-first mindset.
              From a single business card to a full brand identity, every
              project gets the same care and attention.
            </p>
            <p>
              Our promise is simple:{" "}
              <span className="text-ch-pink font-semibold">
                Print. Design. Deliver.
              </span>{" "}
              — and do it right, the first time.
            </p>
          </div>
        </div>
      </Section>

      {/* VALUES */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-ch-dark mb-10 text-center">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="text-center p-6 rounded-2xl border border-gray-100 bg-ch-light"
              >
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-semibold text-ch-dark mb-2">{v.title}</h3>
                <p className="text-sm text-ch-grey">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to work with us?
        </h2>
        <p className="text-ch-grey max-w-xl mx-auto mb-8">
          Let&apos;s talk about your next project.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/quote">Get a Quote</Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}