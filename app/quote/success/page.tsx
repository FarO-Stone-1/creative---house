import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function SuccessPage() {
  return (
    <Section>
      <div className="max-w-xl mx-auto text-center py-16">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl md:text-4xl font-bold text-ch-dark mb-4">
          Payment Successful!
        </h1>
        <p className="text-ch-grey mb-8">
          Thank you for your order. We&apos;ve received your payment and will
          begin processing right away. You&apos;ll receive updates on the phone
          number you provided.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/">Back to Home</Button>
          <Button href="/shop" variant="outline">
            Continue Shopping
          </Button>
        </div>
        <p className="text-xs text-ch-grey mt-8">
          Need to reach us?{" "}
          <a
            href="https://wa.me/233501202370"
            className="text-ch-pink hover:underline"
          >
            WhatsApp us
          </a>
        </p>
      </div>
    </Section>
  );
}