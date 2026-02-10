import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, FileText } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import StatBar from "@/components/StatBar";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "4", label: "Companies in Pipeline" },
  { value: "Pre-Seed", label: "Investment Stage" },
  { value: "$50K–$250K", label: "Target Investment" },
  { value: "Canada", label: "Geography Focus" },
];

const pipeline = [
  {
    name: "Serenity Power",
    sector: "Energy / Fuel Cells",
    status: "In Due Diligence",
    tagline: "Electrifying the oil & gas industry using advanced solid oxide fuel cells",
    problem: "Oil & gas operations rely on diesel generators with high emissions, fuel costs, and regulatory pressure",
    solution: "Solid oxide fuel cells using natural gas byproducts at 60% efficiency, zero air pollutants",
    traction: "20+ industry conversations (Chevron, Shell, Cenovus), Plug and Play accelerator, LOIs secured",
    funding: "Raising $1.12M pre-seed ($4M pre-money cap)",
    website: "https://serenitypower.ca/",
    docs: [{ label: "Pitch Deck", href: "/pdfs/serenity-power-deck.pdf" }],
  },
  {
    name: "Kiwi Charge",
    sector: "EV Charging / Robotics",
    status: "In Due Diligence",
    tagline: "Autonomous EV charging robots for multi-tenant buildings at 40% of competitor cost",
    problem: "Fixed chargers require expensive electrical upgrades (6-18 months), low utilization (20%)",
    solution: "Autonomous robots that charge multiple EVs, 3x utilization, 60% lower installation cost",
    traction: "$1.7M pilot with GM & Pfaff, 140 building waitlist, patents filed, live deployments",
    funding: "Raising $2M USD Seed round ($8M pre-money valuation)",
    website: "https://www.kiwicharge.ca/",
    docs: [{ label: "Pitch Deck", href: "/pdfs/kiwi-charge-deck.pdf" }, { label: "One-Pager", href: "/pdfs/kiwi-charge-one-pager.pdf" }],
  },
  {
    name: "Mars Materials",
    sector: "Carbon Tech / Chemicals",
    status: "Investment Completed",
    tagline: "Transforming carbon into products that purify dirty water",
    problem: "Acrylonitrile is a $14B chemical produced from coal/oil; water purification faces cost barriers",
    solution: "Carbon-negative pathway to acrylonitrile, drop-in replacement for incumbent products",
    traction: "Backed by Shell, Breakthrough Energy, Pachamama; Navy grant for carbon fiber applications",
    funding: "$500K pre-seed extension via SAFE ($10M post-money cap), $320K remaining",
    docs: [],
  },
  {
    name: "Resiliõ (Resiliocs)",
    sector: "Climate Risk / AI SaaS",
    status: "In Due Diligence",
    tagline: "AI-powered climate risk intelligence for asset owners and investors",
    problem: "Climate disasters cause $500B+ annual losses; inadequate forward-looking risk modeling tools",
    solution: "Engineering-first AI models with 87% accuracy, accounts for infrastructure interdependence",
    traction: "Validated Calgary pilot ($500M loss scenario), 6 strategic partnerships, $250K grants",
    funding: "$1M SAFE round ($4M pre-money cap), 50% committed",
    website: "https://resiliocs.com/",
    docs: [{ label: "Pitch Deck", href: "/pdfs/resiliocs-deck.pdf" }, { label: "FAQ", href: "/pdfs/resiliocs-faq.pdf" }],
  },
];

const process = [
  { step: "1", title: "Initial Screening", desc: "Review of deck, team, market, and fit with our thesis" },
  { step: "2", title: "Deep Due Diligence", desc: "Technical review, customer calls, market validation" },
  { step: "3", title: "Investment Committee", desc: "Presentation to committee, term sheet negotiation" },
  { step: "4", title: "Closing & Onboarding", desc: "Legal documentation, capital deployment, portfolio support" },
];

const Opportunities = () => (
  <main>
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-1/3 -right-1/4 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>
      <div className="container">
        <SectionReveal>
          <div className="accent-line mb-4" />
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Pipeline</p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Investment <span className="gradient-text">Opportunities</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Our current pipeline of ClimateTech innovators. These companies represent the exceptional founders we're evaluating for investment through our Catalyst Fund.
          </p>
        </SectionReveal>
        <div className="mt-12">
          <StatBar stats={stats} />
        </div>
      </div>
    </section>

    {/* Pipeline */}
    <section className="bg-secondary/50 py-20">
      <div className="container">
        <SectionReveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Current Investment Pipeline</h2>
          <p className="mt-3 text-muted-foreground">Companies under active due diligence for Catalyst Fund investment</p>
        </SectionReveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {pipeline.map((co) => (
            <SectionReveal key={co.name}>
              <div className="flex h-full flex-col rounded-xl border bg-card p-6 card-hover">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{co.name}</h3>
                    <p className="text-xs text-muted-foreground">{co.sector}</p>
                  </div>
                  <Badge variant={co.status === "Investment Completed" ? "default" : "secondary"} className="shrink-0 text-xs">
                    {co.status}
                  </Badge>
                </div>
                <p className="mt-3 text-sm font-medium text-foreground">{co.tagline}</p>
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <p><span className="font-medium text-foreground">Problem: </span>{co.problem}</p>
                  <p><span className="font-medium text-foreground">Solution: </span>{co.solution}</p>
                  <p><span className="font-medium text-foreground">Traction: </span>{co.traction}</p>
                  <p><span className="font-medium text-foreground">Funding: </span>{co.funding}</p>
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-4 pt-4">
                  {co.website && (
                    <a href={co.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                      Website <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                  {co.docs?.map((doc) => (
                    <a key={doc.label} href={doc.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
                      <FileText className="h-3 w-3" /> {doc.label}
                    </a>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-20">
      <div className="container">
        <SectionReveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Investment Process</h2>
          <p className="mt-3 text-muted-foreground">Our 4-step due diligence framework</p>
        </SectionReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <SectionReveal key={p.step}>
              <div className="relative overflow-hidden rounded-xl border bg-card p-6 card-hover">
                <div className="absolute inset-x-0 top-0 h-1 hero-gradient opacity-60" />
                <span className="flex h-8 w-8 items-center justify-center rounded-full hero-gradient text-sm font-bold text-primary-foreground shadow-md">{p.step}</span>
                <h3 className="mt-3 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Submit */}
    <section className="bg-secondary/50 py-20">
      <div className="container text-center">
        <SectionReveal>
          <h2 className="text-3xl font-semibold tracking-tight">Have a ClimateTech company for our pipeline?</h2>
          <p className="mt-3 text-muted-foreground">Send decks to our investment team or schedule founder office hours.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="mailto:bduarte@blacktechcapital.com">Submit Deck <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  </main>
);

export default Opportunities;
