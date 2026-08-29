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

const title = "SunMax | Solar Panels, Inverters & Installation in Pakistan";
const description =
  "SunMax supplies Tier-1 solar panels, inverters and lithium batteries and installs complete solar systems for homes, businesses, industry and farms across Pakistan.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
