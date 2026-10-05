import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export const metadata = {
  title: "Contact — The Creative House",
  description:
    "Get in touch with The Creative House in Haatso, Accra. Call, WhatsApp, or visit us.",
};

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="gradient-brand text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
          <p className="font-semibold tracking-widest text-sm mb-3 text-ch-yellow">
            GET IN TOUCH
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            Call, message, or stop by. We&apos;re happy to help with your next
            project.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="tel:+233501202370"
            className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition"
          >
            <div className="text-4xl mb-4">📞</div>
            <h3 className="font-semibold text-ch-dark mb-1">Call Us</h3>
            <p className="text-ch-grey text-sm mb-3">Fast response during business hours</p>
            <p className="text-ch-pink font-medium">050 120 2370</p>
            <p className="text-ch-pink font-medium">059 588 4957</p>
          </a>

          <a
            href="https://wa.me/233501202370?text=Hello%20Creative%20House%2C%20I%27d%20like%20to%20make%20an%20enquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition"
          >
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-semibold text-ch-dark mb-1">WhatsApp</h3>
            <p className="text-ch-grey text-sm mb-3">Send us a message</p>
            <p className="text-[#25D366] font-medium">Chat now</p>
          </a>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="font-semibold text-ch-dark mb-1">Visit Us</h3>
            <p className="text-ch-grey text-sm mb-3">Come see our work in person</p>
            <p className="text-ch-dark font-medium">
              Haatso Total
              <br />
              Accra, Ghana
            </p>
          </div>
        </div>
      </Section>

      {/* MAP + FORM */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-ch-dark mb-4">
              Find Us on the Map
            </h2>
            <div className="rounded-2xl overflow-hidden border border-gray-100 aspect-square md:aspect-[4/3]">
              <iframe
                title="The Creative House Location"
                src="https://www.google.com/maps?q=Haatso%20Total%2C%20Accra%2C%20Ghana&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ch-dark mb-4">
              Send Us a Message
            </h2>
            <p className="text-ch-grey mb-6">
              Prefer typing? Send us the details and we&apos;ll get back to you
              as soon as possible.
            </p>
            <div className="space-y-4">
              <Button
                href="https://wa.me/233501202370?text=Hello%20Creative%20House%2C%20I%27d%20like%20to%20make%20an%20enquiry"
                variant="whatsapp"
                className="w-full"
              >
                Message on WhatsApp
              </Button>
              <Button href="/quote" className="w-full">
                Request a Quote Instead
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}