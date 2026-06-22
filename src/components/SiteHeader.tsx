import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/ecc-logo.svg.asset.json";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Equipment", href: "#equipment" },
  { label: "Coverage", href: "#coverage" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex h-16 md:h-20 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 shrink-0" aria-label="Equipment Care Company home">
          <img src={logo.url} alt="Equipment Care Company" className="h-8 md:h-10 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ecc-charcoal/80 hover:text-ecc-red transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="tel:+91918452969696" className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-ecc-charcoal hover:text-ecc-blue transition-colors">
            <Phone className="h-4 w-4 text-ecc-blue" />
            Call Now
          </a>
          <a href="#contact" className="hidden md:inline-flex btn-primary text-sm py-2.5 px-4">
            Request Support
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-ecc-charcoal"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ecc-charcoal hover:text-ecc-red"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary">Request Support</a>
              <a href="tel:+91918452969696" className="btn-secondary">
                <Phone className="h-4 w-4 text-ecc-blue" /> Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
