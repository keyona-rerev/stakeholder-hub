import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Download } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import StatBar from "@/components/StatBar";
import EquivestoComparison from "@/components/EquivestoComparison";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import bryanDuarte from "@/assets/team/bryan-duarte.jpg";
import keyonaMeeks from "@/assets/team/keyona-meeks.jpg";
import allisonGibson from "@/assets/team/allison-gibson.jpg";
import bryanWatson from "@/assets/team/bryan-watson.jpg";
import johnNicholson from "@/assets/team/john-nicholson.jpg";
import melissaAllen from "@/assets/team/melissa-allen.jpg";
import lindseyMotlow from "@/assets/team/lindsey-motlow.jpg";
import marlonThompson from "@/assets/team/marlon-thompson.jpg";
import nicholasParker from "@/assets/team/nicholas-parker.jpg";
import jadeLockard from "@/assets/team/jade-lockard.jpg";

const stats = [
  { value: "$500K–$2M", label: "Flexible Fund Size" },
  { value: "Pre-Seed", label: "Investment Stage" },
  { value: "Through 2026", label: "1-Year Deployment" },
  { value: "$10K", label: "LP Minimum" },
];


const terms = [
  ["Fund Size", "$500K–$2M (flexible, minimum first close $500K)"],
  ["Number of Investments", "6 companies (at $500K fund size)"],
  ["Investment Range", "$50K to $250K per company"],
  ["Stage", "Pre-Seed exclusively"],
  ["Geography", "Canada for all new investments"],
  ["LP Minimum", "$10K"],
  ["LP Investment Options", "$10K | $100K | $300K"],
  ["Max Investment", "25% of fund"],
  ["Follow-on Reserves", "No (except warehoused company Mars Materials)"],
  ["Management Fee", "~2% avg over fund life (4% Y1, 2% Y2-8, 1% Y9-10)"],
  ["Carried Interest", "20%"],
  ["Hurdle Rate", "7%"],
  ["GP Commitment", "1%"],
  ["Fund Life", "10 years + 2 extensions"],
  ["Setup Cost Cap", "$25K + 2.5% of funds raised"],
];

const teamGroups = [
  {
    label: "Executive Leadership",
    members: [
      { name: "Bryan Duarte", role: "Managing Partner", desc: "Executive leader overseeing partnership strategy and organizational direction.", img: bryanDuarte },
      { name: "Keyona Meeks", role: "General Partner", desc: "Strategic leader responsible for partnership development and investment oversight.", img: keyonaMeeks },
    ],
  },
  {
    label: "Investment Committee",
    members: [
      { name: "Allison Gibson", role: "Executive Leadership | Investment Readiness Advisory", desc: "Builds programs that uplift overlooked entrepreneurs and champions food ventures that feed culture and community.", img: allisonGibson },
      { name: "Bryan Watson", role: "Angel Investment & Venture Capital, CleanTech, Finance", desc: "CleanTech specialist. 2021 and 2024 Clean50 Awardee.", img: bryanWatson },
      { name: "John Nicholson", role: "Cleantech and Environmental Expert", desc: "Over 30 years of experience in environmental engineering consulting and cleantech startups.", img: johnNicholson },
      { name: "Melissa Allen", role: "Ubuntu International Laureate 2025 | Finance Leader", desc: "Award-winning emerging finance leader recognized by The Peak, Globe & Mail, and Bay Street Bull.", img: melissaAllen },
    ],
  },
  {
    label: "Advisory Committee",
    members: [
      { name: "Lindsey Motlow", role: "Physicist | VP, Research Group Director", desc: "Investigates emerging technologies in Energy Industry with focus on Hydrogen and Advanced Nuclear.", img: lindseyMotlow },
      { name: "Marlon Thompson", role: "Founder, Investor, Fractional Exec", desc: "Founder of Opening Round and Future Capital (acquired 2023). Venture Scout at Zeal Capital Partners.", img: marlonThompson },
      { name: "Nicholas Parker", role: "Exponential Impact Entrepreneur", desc: "Known as the father of 'cleantech.' Over 40 years of global experience creating sustainable ventures.", img: nicholasParker },
      { name: "Jade Lockard", role: "Investment & Fundraising Strategist", desc: "Specializing in fundraising strategy, investor relations, and capital formation for emerging fund managers.", img: jadeLockard },
    ],
  },
  {
    label: "Fund Administration & Partners",
    members: [
      { name: "Equivesto", role: "Fund Administrator", desc: "OSC-licensed Exempt Market Dealer enabling compliant advertised fundraising." },
      { name: "Osler", role: "Legal Counsel", desc: "Legal representation for fund structure and compliance." },
      { name: "Sonar Accounting Group", role: "Accounting", desc: "Accounting services for the Special Limited Partnership and Management Company." },
    ],
  },
];

const CatalystFund = () => (
  <main>
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-1/3 -right-1/4 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl" />
      </div>
      <div className="container">
        <SectionReveal>
          <div className="accent-line mb-4" />
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Active Fund</p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            The Catalyst Fund: Proving the <span className="gradient-text">Thesis</span>, Building the Track Record
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            We've adapted our institutional vision into an agile, deployable fund focused on Pre-Seed ClimateTech innovators. Through a strategic partnership with Equivesto, we deploy capital directly to founders.
          </p>
        </SectionReveal>
        <div className="mt-12">
          <StatBar stats={stats} />
        </div>
      </div>
    </section>

    {/* Equivesto Partnership */}
    <section className="bg-secondary/50 py-20">
      <div className="container">
        <SectionReveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Strategic Innovation: The Equivesto Partnership</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A structural advantage that changes the game for smaller funds. Our partnership with Equivesto, an OSC-licensed Exempt Market Dealer, is a core structural advantage.
          </p>
        </SectionReveal>
        <SectionReveal>
          <EquivestoComparison />
        </SectionReveal>
      </div>
    </section>

    {/* Fund Terms */}
    <section className="py-20">
      <div className="container">
        <SectionReveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Fund Overview</h2>
          <p className="mt-3 text-muted-foreground">Key details about our current Catalyst Fund</p>
        </SectionReveal>
        <SectionReveal className="mt-10">
          <div className="overflow-hidden rounded-xl border">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead className="font-medium">Detail</TableHead>
                  <TableHead className="font-medium">Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {terms.map(([k, v]) => (
                  <TableRow key={k}>
                    <TableCell className="font-medium">{k}</TableCell>
                    <TableCell className="text-muted-foreground">{v}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Team */}
    <section className="bg-secondary/50 py-20">
      <div className="container">
        <SectionReveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Team & Committees</h2>
          <p className="mt-3 text-muted-foreground">Our leadership and advisory structure</p>
        </SectionReveal>

        {teamGroups.map((group) => (
          <SectionReveal key={group.label} className="mt-10">
            <h3 className="mb-4 font-display text-xl font-semibold text-foreground">{group.label}</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.members.map((m) => (
                <div key={m.name} className="flex items-start gap-4 rounded-lg border bg-card p-5 card-hover">
                  {m.img ? (
                    <img src={m.img} alt={m.name} className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-accent/20" />
                  ) : (
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                      {m.name.split(" ").map(w => w[0]).join("")}
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-foreground">{m.name}</p>
                    <p className="text-xs font-medium text-accent">{m.role}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>

    {/* Market Opportunity */}
    <section className="py-20">
      <div className="container">
        <SectionReveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Market Opportunity</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            ClimateTech represents the largest capital reallocation in human history, and we're positioned at the inflection point.
          </p>
        </SectionReveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "$150B", label: "ClimateTech VC market expected by 2032" },
            { value: "10%", label: "Climate tech's share of total VC funding in 2023, up from 7% in 2018" },
            { value: "$7.6B", label: "VC invested in US clean energy in 2024" },
            { value: "$6B", label: "AI-powered climate solutions raised in 9 months of 2024" },
          ].map((s) => (
            <SectionReveal key={s.label}>
              <div className="relative overflow-hidden rounded-xl border bg-card p-6 card-hover">
                <div className="absolute inset-x-0 top-0 h-1 hero-gradient opacity-60" />
                <TrendingUp className="h-5 w-5 text-accent" />
                <p className="mt-3 font-display text-2xl font-bold text-primary">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Track Record */}
    <section className="bg-secondary/50 py-20">
      <div className="container">
        <SectionReveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Track Record</h2>
          <p className="mt-3 text-muted-foreground">Proven experience in ClimateTech and venture investing</p>
        </SectionReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <SectionReveal>
            <div className="flex items-start gap-4 rounded-xl border bg-card p-6 card-hover">
              <img src={bryanDuarte} alt="Bryan Duarte" className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-accent/20" />
              <div>
                <p className="font-medium text-foreground">Bryan Duarte</p>
                <p className="mt-2 text-sm text-muted-foreground">5x Entrepreneur with 3 Exits (8x and 10x EBITDA). 30+ years energy industry. CleanTech EIR at multiple accelerators, Techstars advisor, Founder of Enliten.</p>
              </div>
            </div>
          </SectionReveal>
          <SectionReveal>
            <div className="flex items-start gap-4 rounded-xl border bg-card p-6 card-hover">
              <img src={keyonaMeeks} alt="Keyona Meeks" className="h-14 w-14 shrink-0 rounded-full object-cover ring-2 ring-accent/20" />
              <div>
                <p className="font-medium text-foreground">Keyona Meeks</p>
                <p className="mt-2 text-sm text-muted-foreground">10 deal attributions at Bronze Valley including wildwonder (Inc. 5000 #109, 400% post-Shark Tank growth), Brevity ($2M AI pitch platform), and Grovara ($8.75M B2B marketplace). g8 + Village Capital Mentor, SXSW Judge.</p>
              </div>
            </div>
          </SectionReveal>
        </div>
        <SectionReveal className="mt-6">
          <p className="text-sm text-muted-foreground">🏆 WEF (UpLink) Top Innovative Fund selection 2022 · Pro-rata co-investment opportunities available to LPs</p>
        </SectionReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container text-center">
        <SectionReveal>
          <h2 className="text-3xl font-semibold tracking-tight">Get in touch to learn more</h2>
          <p className="mt-3 text-muted-foreground">Interested in the Catalyst Fund? We'd love to hear from you.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="hero-gradient text-primary-foreground hover:opacity-90">
              <Link to="/contact">Contact Us <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/pdfs/catalyst-fund-one-pager.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-1 h-4 w-4" /> Fund One-Pager
              </a>
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  </main>
);

export default CatalystFund;
