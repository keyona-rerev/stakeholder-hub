import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Zap, BarChart3, Handshake } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import StatBar from "@/components/StatBar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const stats = [
  { value: "$15M", label: "Target Size" },
  { value: "4 Years", label: "Investment Period" },
  { value: "Pre-Seed to Seed", label: "Stage Focus" },
  { value: "On Pause", label: "Strategic Status" },
];

const comparison = [
  ["Core Purpose", "Full-scale institutional ClimateTech fund", "Focused proof-of-concept fund"],
  ["Target Size", "$15M", "$500K–$2M (flexible)"],
  ["Investment Period", "4 years", "1 year (through 2026)"],
  ["Stage Focus", "Pre-Seed to Seed", "Pre-Seed exclusively"],
  ["Number of Investments", "15–20 companies", "6 companies (at $500K)"],
  ["LP Minimum", "$100K", "$10K"],
  ["Management Fee", "3% (Y1-4), 2% (Y5-6), 1% (Y7-10)", "4% Y1, 2% Y2-8, 1% Y9-10 (2% avg)"],
  ["Fund Admin", "Decile Group (planned)", "Equivesto (OSC-licensed)"],
  ["Setup Cost Cap", "$100K", "$25K + 2.5% raised"],
];

const learnings = [
  { icon: Clock, title: "Market Timing", desc: "Large institutional funds face longer fundraising cycles in current market conditions." },
  { icon: Zap, title: "Deployment Speed", desc: "Focused 1-year deployment allows for quicker proof of concept." },
  { icon: BarChart3, title: "Cost Structure", desc: "Smaller funds require leaner operational models." },
  { icon: Handshake, title: "Partner Alignment", desc: "Strategic partnerships like Equivesto enable compliant advertised fundraising." },
];

const FundI = () => (
  <main>
    <section className="py-20">
      <div className="container">
        <SectionReveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">Strategic Pause</p>
          <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Fund I: Our Institutional Blueprint
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Our original $15M fund design remains the foundational model for scaling our ClimateTech thesis. While current market conditions led us to focus on the nimble Catalyst Fund, Fund I's structure continues to inform our long-term strategy.
          </p>
        </SectionReveal>
        <div className="mt-12">
          <StatBar stats={stats} />
        </div>
      </div>
    </section>

    {/* Original Vision */}
    <section className="bg-secondary/50 py-20">
      <div className="container">
        <SectionReveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Original Vision</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">How our initial fund design informed today's Catalyst Fund</p>
        </SectionReveal>
        <SectionReveal className="mt-10 max-w-3xl">
          <p className="text-muted-foreground leading-relaxed">
            Fund I was designed as a <span className="font-medium text-foreground">$15M institutional fund</span> with a 4-year deployment period, follow-on reserves, and a comprehensive structure for scaling our investment thesis. This wasn't just a fund—it was a blueprint for how to bring institutional capital to underrepresented ClimateTech founders at scale.
          </p>
        </SectionReveal>

        {/* Blueprint callout */}
        <SectionReveal className="mt-10">
          <div className="rounded-xl border border-accent/20 bg-accent/5 p-8">
            <h3 className="font-display text-xl font-semibold">From Blueprint to Build: Understanding the Strategic Pause</h3>
            <p className="mt-3 text-muted-foreground">
              The Catalyst Fund isn't a "smaller fund"—it's the <span className="font-medium text-foreground">tactical execution</span> of the Fund I thesis, adapted for current market realities to build a track record faster.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">Same Thesis:</strong> Underrepresented founders in ClimateTech/CleanTech solving real problems</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">Same Team:</strong> Identical leadership and committee structure</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">Same Values:</strong> Impact-focused, transparent, founder-friendly approach</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">Adapted Execution:</strong> Agile deployment model scaled for current market realities</span></li>
            </ul>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Comparison Table */}
    <section className="py-20">
      <div className="container">
        <SectionReveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Detailed Comparison</h2>
          <p className="mt-3 text-muted-foreground">Fund I vs. Catalyst Fund</p>
        </SectionReveal>
        <SectionReveal className="mt-10">
          <div className="overflow-hidden rounded-xl border">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead className="font-medium">Aspect</TableHead>
                  <TableHead className="font-medium">Fund I</TableHead>
                  <TableHead className="font-medium">Catalyst Fund</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparison.map(([aspect, fi, cf]) => (
                  <TableRow key={aspect}>
                    <TableCell className="font-medium">{aspect}</TableCell>
                    <TableCell className="text-muted-foreground">{fi}</TableCell>
                    <TableCell className="text-muted-foreground">{cf}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Key Learnings */}
    <section className="bg-secondary/50 py-20">
      <div className="container">
        <SectionReveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Key Learnings</h2>
          <p className="mt-3 text-muted-foreground">How Fund I informed our Catalyst Fund strategy</p>
        </SectionReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {learnings.map((l) => (
            <SectionReveal key={l.title}>
              <div className="rounded-xl border bg-card p-6">
                <l.icon className="h-5 w-5 text-accent" />
                <h3 className="mt-3 font-display text-lg font-semibold">{l.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{l.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-12 max-w-3xl">
          <h3 className="font-display text-xl font-semibold">The Path Forward</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            The Catalyst Fund represents our adaptive execution. By starting with a focused vehicle, we can demonstrate our thesis with real companies, build a track record, maintain momentum with exceptional founders, and position for future scaling with proven results.
          </p>
        </SectionReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container text-center">
        <SectionReveal>
          <h2 className="text-3xl font-semibold tracking-tight">Interested in the Active Fund?</h2>
          <p className="mt-3 text-muted-foreground">Explore how the Catalyst Fund puts this blueprint into action.</p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/catalyst-fund">Explore Catalyst Fund <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  </main>
);

export default FundI;
