import Link from "next/link";

export default function Footer() {
  return (
    <footer className="gradient-brand text-white mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-bold text-lg mb-3">The Creative House</h3>
          <p className="text-white/80 text-sm">
            Print. Design. Deliver. Your one-stop shop for quality printing in
            Haatso, Accra.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <Link href="/services" className="hover:text-ch-yellow">
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-ch-yellow">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-ch-yellow">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/quote" className="hover:text-ch-yellow">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              📞{" "}
              <a href="tel:+233501202370" className="hover:text-ch-yellow">
                050 120 2370
              </a>
            </li>
            <li>
              📞{" "}
              <a href="tel:+233595884957" className="hover:text-ch-yellow">
                059 588 4957
              </a>
            </li>
            <li>📍 Haatso Total, Accra</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 py-5 text-center text-xs text-white/70">
        © {new Date().getFullYear()} The Creative House. All rights reserved.
        <br />
        Website by{" "}
<a
  href="https://wa.me/233204904397"
  className="text-ch-yellow hover:underline"
  target="_blank"
  rel="noopener noreferrer"
>
  FarO_Dev
</a>
      </div>
    </footer>
  );
}