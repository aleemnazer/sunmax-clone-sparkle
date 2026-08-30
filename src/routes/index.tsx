import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/sunmax/SiteHeader";
import { RateTicker } from "@/components/sunmax/RateTicker";
import {
  About,
  Brands,
  Contact,
  Equipment,
  Hero,
  Projects,
  Reviews,
  Services,
  SiteFooter,
  StatsBand,
  Team,
} from "@/components/sunmax/Sections";

const SITE = "https://sunmax-clone-sparkle.lovable.app";
const title = "SunMax Solar Lahore | Panels, Inverters & Installation";
const description =
  "SunMax installs solar systems across Lahore — DHA, Bahria Town, Johar Town and more — supplying Tier-1 panels, inverters and lithium batteries. Call +92 321 8452143.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:site_name", content: "SunMax Energy" },
      { property: "og:locale", content: "en_PK" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${SITE}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "SunMax Energy",
          description,
          url: `${SITE}/`,
          telephone: "+92 321 8452143",
          email: "sales@sunmax.pk",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lahore",
            addressRegion: "Punjab",
            addressCountry: "PK",
          },
          areaServed: [
            { "@type": "City", name: "Lahore" },
            { "@type": "Country", name: "Pakistan" },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "2000",
          },
        }),
      },
    ],
  }),
  component: Index,
  loader: () => ({
    rateDate: new Intl.DateTimeFormat("en-PK", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Karachi",
    }).format(new Date()),
  }),
});

function Index() {
  const { rateDate } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <RateTicker date={rateDate} />
      <main>
        <Hero />
        <StatsBand />
        <About />
        <Equipment />
        <Brands />
        <Services />
        <Projects />
        <Reviews />
        <Team />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
