"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center text-white font-bold">
            CH
          </div>
          <span className="font-semibold text-ch-dark hidden sm:inline">
            The Creative House
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-ch-grey hover:text-ch-pink transition"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/quote"
          className="hidden md:inline-flex bg-ch-pink text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-pink-700 transition"
        >
          Get a Quote
        </Link>

        <button
          className="md:hidden text-2xl text-ch-dark"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-ch-grey hover:text-ch-pink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              className="bg-ch-pink text-white px-5 py-2.5 rounded-full text-sm text-center font-medium"
            >
              Get a Quote
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}