import { useEffect, useState } from "react";
import { Menu, Phone, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Equipment", href: "#equipment" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        solid ? "bg-ink/95 backdrop-blur border-b border-white/10" : "bg-ink"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-6 sm:py-4 sm:px-6">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-md bg-gradient-solar shadow-solar">
            <Sun className="size-5 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-bold uppercase tracking-wide sm:text-2xl text-ink-foreground">
            Sun<span className="text-primary">Max</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-sm font-semibold uppercase tracking-widest text-ink-muted transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+923218452143"
            className="hidden items-center gap-2 text-sm font-semibold text-ink-foreground sm:flex"
          >
            <Phone className="size-4 text-primary" />
            +92 321 8452143
          </a>
          <Button asChild variant="solar" size="sm" className="hidden sm:inline-flex">
            <a href="#contact">Get a Quote</a>
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-md border border-white/15 text-ink-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-ink px-4 pb-5 lg:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 font-display text-sm font-semibold uppercase tracking-widest text-ink-muted"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+923218452143"
            className="mt-4 flex items-center gap-2 text-sm font-semibold text-ink-foreground sm:hidden"
          >
            <Phone className="size-4 text-primary" />
            +92 321 8452143
          </a>
          <Button asChild variant="solar" className="mt-4 w-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              Get a Quote
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}
