import { useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Check,
  CircuitBoard,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Quote,
  Star,
  Sun,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
import heroImg from "@/assets/hero-solar.jpg";
import aboutImg from "@/assets/about-team.jpg";
import panelImg from "@/assets/product-panel.jpg";
import inverterImg from "@/assets/product-inverter.jpg";
import batteryImg from "@/assets/product-battery.jpg";
import projectTextileImg from "@/assets/project-textile.jpg";
import projectRetailImg from "@/assets/project-retail.jpg";
import projectTubewellImg from "@/assets/project-tubewell.jpg";
import projectFuelStationImg from "@/assets/project-fuel-station.jpg";
import projectResidentialImg from "@/assets/project-residential.jpg";
import projectColdStorageImg from "@/assets/project-cold-storage.jpg";
import {
  brands,
  equipment,
  projects,
  services,
  socialLinks,
  stats,
  team,
  testimonials,
  whatsappUrl,
} from "./data";

const socialIcons = { Facebook, Instagram, LinkedIn: Linkedin, YouTube: Youtube } as const;
const salesWhatsAppNumber = "923218452143";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.464 3.484 1.346 4.997L2 22l5.144-1.34a9.978 9.978 0 0 0 4.856 1.238h.004c5.514 0 9.996-4.483 9.996-9.998C21.997 6.483 17.515 2 12.001 2Zm0 18.156a8.153 8.153 0 0 1-4.157-1.14l-.297-.176-3.084.803.824-3.008-.194-.309a8.135 8.135 0 0 1-1.253-4.331c0-4.494 3.658-8.152 8.161-8.152 4.503 0 8.161 3.658 8.161 8.152 0 4.503-3.658 8.161-8.161 8.161Z" />
    </svg>
  );
}

function Eyebrow({ small, big }: { small: string; big: string }) {
  return (
    <div className="mb-3">
      <p className="text-eyebrow">{small}</p>
      <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-muted-foreground">
        {big}
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink">
      <img
        src={heroImg}
        alt="Rooftop solar panel array installed by Sun Box ESS on a commercial building"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <p className="text-eyebrow">Welcome to Sun Box ESS</p>
        <h1 className="mt-3 max-w-3xl text-[1.85rem] font-bold uppercase leading-[1.1] text-ink-foreground sm:mt-4 sm:text-5xl lg:text-6xl">
          Solar Equipment and Installation Services in Lahore &amp; Across Pakistan
        </h1>
        <p className="mt-5 max-w-2xl text-sm text-ink-muted sm:mt-6 sm:text-lg">
          Sun Box ESS supplies Tier-1 solar panels, inverters and lithium batteries, and builds
          complete systems for homes, businesses, industry and farms — from load audit to
          net metering.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
          <Button asChild variant="solar" size="lg" className="w-full sm:w-auto">
            <a href="#contact">
              Contact Us <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild variant="outlineLight" size="lg" className="w-full sm:w-auto">
            <a href="#services">Our Services</a>
          </Button>
        </div>
        <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-5 sm:mt-16 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-6">
          {[
            ["300+", "Sites commissioned"],
            ["3 MW+", "Installed capacity"],
            ["30 yrs", "Panel warranty"],
            ["98%", "Client retention"],
          ].map(([v, l]) => (
            <div key={l} className="border-l-2 border-primary pl-4">
              <dt className="font-display text-2xl font-bold text-ink-foreground">{v}</dt>
              <dd className="text-xs uppercase tracking-widest text-ink-muted">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function StatsBand() {
  return (
    <section className="bg-background px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card p-4 text-center sm:p-6">
            <p className="font-display text-xl font-bold text-foreground sm:text-2xl">{s.value}</p>
            <p className="mt-1 text-[0.65rem] uppercase tracking-widest text-muted-foreground sm:text-xs">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const aboutTabs = [
  {
    key: "who",
    label: "Who We Are",
    copy: "Sun Box ESS is a Pakistan-based solar equipment supplier and system integrator. We stock panels, inverters, lithium batteries and balance-of-system components for residential, commercial, industrial and agricultural use, and deliver consultation, design, installation, grid connection and after-sales support.",
    points: ["Tier-1 panels", "Premium inverters", "Lithium storage", "In-house EPC crews"],
  },
  {
    key: "mission",
    label: "Our Mission",
    copy: "Our mission is to make dependable solar hardware affordable and accessible, so households and businesses can cut energy costs without gambling on unverified equipment or absent warranties.",
    points: ["Lower energy bills", "Verified hardware", "Honest sizing", "Documented warranties"],
  },
  {
    key: "goal",
    label: "Our Goal",
    copy: "Our goal is a grid where every rooftop contributes. We invest in trained crews, real stock and long-term service so solar keeps performing years after the invoice is closed.",
    points: ["Trained technicians", "Local stock", "Long-term O&M", "Measured performance"],
  },
];

export function About() {
  const [active, setActive] = useState(aboutTabs[0]!.key);
  const tab = aboutTabs.find((t) => t.key === active)!;

  return (
    <section id="about" className="bg-surface py-14 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src={aboutImg}
            alt="Sun Box ESS technicians installing solar panels on a rooftop"
            loading="lazy"
            width={1024}
            height={1280}
            className="w-full rounded-lg object-cover shadow-card"
          />
          <div className="absolute -bottom-5 left-4 sm:left-6 rounded-lg bg-gradient-solar px-6 py-4 shadow-solar">
            <p className="font-display text-3xl font-bold text-primary-foreground">10+</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/85">
              Years of experience
            </p>
          </div>
        </div>

        <div>
          <Eyebrow small="About" big="Company" />
          <h2 className="section-title text-foreground">
            Solar Products and Professional Services Across Pakistan
          </h2>
          <p className="mt-4 text-muted-foreground">
            Based in Lahore, we have completed installations in almost all major societies of the
            city — including DHA, Bahria Town, Johar Town, Model Town, Wapda Town, Valencia,
            Faisal Town, Gulberg and Lake City — and supply equipment nationwide.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {aboutTabs.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(t.key)}
                className={`rounded-md px-4 py-2 font-display text-sm font-semibold uppercase tracking-widest transition-colors ${
                  active === t.key
                    ? "bg-primary text-primary-foreground shadow-solar"
                    : "bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <p className="mt-6 text-muted-foreground">{tab.copy}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {tab.points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="grid size-5 place-items-center rounded-full bg-accent">
                  <Check className="size-3 text-accent-foreground" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const equipmentMedia = [
  { img: panelImg, icon: Sun, alt: "Bifacial solar panel supplied by Sun Box ESS" },
  { img: inverterImg, icon: CircuitBoard, alt: "Wall mounted hybrid solar inverter" },
  { img: batteryImg, icon: BatteryCharging, alt: "Lithium battery storage cabinet" },
];

export function Equipment() {
  return (
    <section id="equipment" className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <Eyebrow small="Sun Box ESS" big="Equipment" />
          <h2 className="section-title text-foreground">Solar Equipment Trading</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-3">
          {equipment.map((item, i) => {
            const media = equipmentMedia[i]!;
            const Icon = media.icon;
            return (
              <article
                key={item.title}
                className="group overflow-hidden rounded-lg border border-border bg-card shadow-card transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-surface">
                  <img
                    src={media.img}
                    alt={media.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 grid size-10 place-items-center rounded-md bg-gradient-solar shadow-solar">
                    <Icon className="size-5 text-primary-foreground" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold uppercase text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{item.copy}</p>
                  <ul className="mt-4 space-y-2">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                        <Check className="size-4 text-primary" strokeWidth={3} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="ghostSolar" className="mt-5 px-0">
                    <a href="#contact">
                      Request pricing <ArrowRight className="size-4" />
                    </a>
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Brands() {
  const loop = [...brands, ...brands];
  return (
    <section className="border-y border-border bg-surface py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <Eyebrow small="Sun Box ESS" big="Product Lines" />
          <h2 className="section-title text-foreground">Categories We Supply</h2>
        </div>
      </div>
      <div className="group mt-10 overflow-hidden">
        <div className="flex w-max animate-marquee-fast gap-4 group-hover:[animation-play-state:paused]">
          {loop.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="whitespace-nowrap rounded-md border border-border bg-card px-8 py-5 font-display text-lg font-bold uppercase tracking-widest text-muted-foreground"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-gradient-ink py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-eyebrow">Our</p>
          <p className="font-display text-sm font-bold uppercase tracking-[0.24em] text-ink-muted">
            Services
          </p>
          <h2 className="section-title mt-3 text-ink-foreground">What We Deliver</h2>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="bg-ink p-6 sm:p-7">
              <span className="font-display text-4xl font-bold text-primary/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold uppercase text-ink-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projectImages: Record<string, string> = {
  "Small Workshop, Faisalabad": projectTextileImg,
  "Retail Store, Sheikhupura": projectRetailImg,
  "Tube-Well, Bahawalpur": projectTubewellImg,
  "Fuel Station, Lahore Ring Road": projectFuelStationImg,
  "Private Residence, DHA Karachi": projectResidentialImg,
  // NOTE: this photo carries a burned-in "Lake city meadows" caption — it belongs to the
  // Multan hybrid project below, not Cold Storage Unit. Reassigned per client correction.
  "Private Residence, Multan": projectColdStorageImg,
};

export function Projects() {
  return (
    <section id="projects" className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow small="Our" big="Projects" />
            <h2 className="section-title text-foreground">Our Latest Projects</h2>
          </div>
          <Button asChild variant="solar">
            <a href="#contact">Discuss your site</a>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-lg border border-border bg-card shadow-card"
            >
              <div className="aspect-4/3 overflow-hidden">
                {projectImages[p.title] ? (
                  <img
                    src={projectImages[p.title]}
                    alt={`${p.title} — ${p.size} solar installation`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex size-full flex-col items-center justify-center gap-2 bg-surface text-muted-foreground">
                    <Sun className="size-8" />
                    <p className="text-xs uppercase tracking-widest">Photo coming soon</p>
                  </div>
                )}
              </div>
              <div className="p-5">
                <p className="text-eyebrow">{p.sector}</p>
                <h3 className="mt-2 font-display text-lg font-bold uppercase text-foreground">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.size}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {[
            ["300+", "Happy customers", "Households and businesses running on systems we supplied and installed."],
            ["300+", "Solar solutions", "Custom on-grid, hybrid and pumping designs delivered nationwide."],
          ].map(([v, t, c]) => (
            <div key={t} className="rounded-lg border border-border bg-surface p-6 sm:p-8">
              <p className="font-display text-4xl font-bold text-primary">{v}</p>
              <h3 className="mt-2 font-display text-xl font-bold uppercase text-foreground">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-surface py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <Eyebrow small="Customer" big="Testimonials" />
            <h2 className="section-title text-foreground">Trusted by Customers Across Pakistan</h2>
          </div>
          <div className="rounded-lg bg-gradient-solar px-6 py-5 text-center sm:px-8 sm:py-6 shadow-solar">
            <p className="font-display text-4xl font-bold text-primary-foreground">4.9/5</p>
            <div className="mt-1 flex justify-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current text-primary-foreground" />
              ))}
            </div>
            <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground/85">
              Rated by 2,000+ customers
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-card"
            >
              <Quote className="size-7 text-primary" />
              <blockquote className="mt-4 flex-1 text-sm text-muted-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-display text-base font-bold uppercase text-foreground">
                  {t.name}
                </p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Team() {
  return (
    <section className="bg-background py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <Eyebrow small="Our" big="Team" />
          <h2 className="section-title text-foreground">Meet Our Team</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div
              key={m.name}
              className="rounded-lg border border-border bg-card p-6 text-center shadow-card"
            >
              <span className="mx-auto grid size-16 place-items-center rounded-full bg-gradient-solar font-display text-xl font-bold text-primary-foreground shadow-solar">
                {m.name
                  .split(" ")
                  .filter((w) => !w.endsWith("."))
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")}
              </span>
              <p className="mt-4 font-display text-lg font-bold uppercase text-foreground">
                {m.name}
              </p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-gradient-ink py-14 sm:py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-eyebrow">Contact</p>
          <h2 className="section-title mt-3 text-ink-foreground">Get a System Quote</h2>
          <p className="mt-4 max-w-lg text-ink-muted">
            Share your monthly units and roof area and our engineers will send a sized proposal
            with equipment, pricing and expected payback.
          </p>

          <ul className="mt-10 space-y-5">
            {[
              { icon: Phone, label: "+92 321 8452143", sub: "Sales & support, 9am - 8pm", href: "tel:+923218452143" },
              {
                icon: WhatsAppIcon,
                label: "WhatsApp",
                sub: "Chat with our sales team",
                href: whatsappUrl,
              },
              {
                icon: Mail,
                label: "sunmax.esolutions@gmail.com",
                sub: "Quotes within one working day",
                href: "mailto:sunmax.esolutions@gmail.com",
              },
              { icon: MapPin, label: "Lahore", sub: "Warehouses and service centres across Punjab" },
            ].map((c) => {
              const content = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-white/10">
                    <c.icon className="size-5 text-primary" />
                  </span>
                  <div>
                    <p className="font-display text-base font-bold uppercase text-ink-foreground sm:text-lg">
                      {c.label}
                    </p>
                    <p className="text-sm text-ink-muted">{c.sub}</p>
                  </div>
                </>
              );
              return (
                <li key={c.label} className="flex items-start gap-3 sm:gap-4">
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const lines = [
              "Hi Sun Box ESS, I'd like a solar system quote.",
              `Name: ${data.get("name")}`,
              `Phone: ${data.get("phone")}`,
            ];
            const city = data.get("city");
            if (city) lines.push(`City: ${city}`);
            const units = data.get("units");
            if (units) lines.push(`Monthly units: ${units} kWh`);
            const message = data.get("message");
            if (message) lines.push(`Details: ${message}`);
            window.open(
              `https://wa.me/${salesWhatsAppNumber}?text=${encodeURIComponent(lines.join("\n"))}`,
              "_blank",
              "noopener,noreferrer",
            );
            setSent(true);
          }}
          className="rounded-lg border border-border bg-card p-6 shadow-card sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-foreground">
              Full name
              <input
                required
                name="name"
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
              />
            </label>
            <label className="block text-sm font-medium text-foreground">
              Phone
              <input
                required
                name="phone"
                type="tel"
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
              />
            </label>
            <label className="block text-sm font-medium text-foreground">
              City
              <input
                name="city"
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
              />
            </label>
            <label className="block text-sm font-medium text-foreground">
              Monthly units (kWh)
              <input
                name="units"
                type="number"
                min="0"
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
              />
            </label>
          </div>
          <label className="mt-4 block text-sm font-medium text-foreground">
            What do you need?
            <textarea
              name="message"
              rows={4}
              className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/40"
            />
          </label>
          <Button type="submit" variant="solar" size="lg" className="mt-6 w-full">
            Get Quote on WhatsApp <WhatsAppIcon className="size-4" />
          </Button>
          {sent && (
            <p className="mt-3 text-center text-sm font-medium text-foreground">
              Opening WhatsApp in a new tab — just hit send.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink py-10 text-ink-muted sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Sun Box ESS logo" width={36} height={36} className="size-9 rounded-md" />
            <span className="font-display text-2xl font-bold uppercase text-ink-foreground">
              Sun<span className="text-primary">Box</span> ESS
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm">
            Sun Box ESS supplies Tier-1 solar panels, inverters and lithium storage, and builds
            complete solar systems for homes, businesses, industry and agriculture across
            Pakistan.
          </p>
          <ul className="mt-5 flex items-center gap-2">
            {socialLinks.map((s) => {
              const Icon = socialIcons[s.name as keyof typeof socialIcons];
              return (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="grid size-9 place-items-center rounded-md bg-white/10 text-ink-muted transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid size-9 place-items-center rounded-md bg-white/10 text-ink-muted transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <WhatsAppIcon className="size-4" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-ink-foreground">
            Company
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {["About", "Equipment", "Services", "Projects"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-primary">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-sm font-bold uppercase tracking-widest text-ink-foreground">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="tel:+923218452143" className="hover:text-primary">
                +92 321 8452143
              </a>
            </li>
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:sunmax.esolutions@gmail.com" className="hover:text-primary">
                sunmax.esolutions@gmail.com
              </a>
            </li>
            <li>Lahore, Punjab</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 px-4 pt-6 text-xs sm:px-6">
        &copy; {new Date().getFullYear()} Sun Box ESS. All rights reserved.
      </div>
    </footer>
  );
}

export function WhatsAppFloatButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sun Box ESS on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
