import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, DollarSign, Lock, Users, Zap, Settings } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import StatBar from "@/components/StatBar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const stats = [
  { value: "$500K–$2M", label: "Flexible Fund Size" },
  { value: "Pre-Seed", label: "Investment Stage" },
  { value: "Through 2026", label: "1-Year Deployment" },
  { value: "$10K", label: "LP Minimum" },
];

const equivesto = [
  { icon: Shield, title: "Compliant Advertised Fundraising", desc: "OSC-licensed administrator enables legitimate advertising of the Catalyst Fund while maintaining full regulatory compliance." },
  { icon: DollarSign, title: "Lower Setup Costs", desc: "Setup capped at $25K + 2.5% of funds raised (vs. $100K+ traditionally), meaning more capital deployed to founders." },
  { icon: Lock, title: "3rd-Party Escrow", desc: "Investor funds held in third-party escrow, providing additional security and transparency for limited partners." },
  { icon: Users, title: "Opportunity Access", desc: "$10K LP minimum (vs. $100K in Fund I) opens the door to a broader base of impact-focused investors." },
  { icon: Zap, title: "Higher Deployable Capital", desc: "Leaner cost structure means a higher percentage of capital goes directly to portfolio companies." },
  { icon: Settings, title: "Operational Efficiency", desc: "Streamlined fund administration allows us to focus on what matters: finding and supporting exceptional founders." },
];

const terms = [
  ["Fund Size", "$500K–$2M (flexible, minimum first close $500K)"],
  ["Number of Investments", "6 companies (at $500K fund size)"],
  ["Investment Range", "$50K to $250K per company"],
  ["Stage", "Pre-Seed exclusively"],
  ["Geography", "Canada for all new investments"],
  ["LP Minimum", "$10K"],
  ["Max Investment", "25% of fund"],
  ["Follow-on Reserves", "No (except warehoused company Mars Materials)"],
  ["Management Fee", "2% avg over fund life (4% Y1, 2% Y2-8, 1% Y9-10)"],
  ["Carried Interest", "20%"],
  ["GP Commitment", "1%"],
  ["Setup Cost Cap", "$25K + 2.5% of funds raised"],
];

const CatalystFund = () => (
  <main>
    <section className="py-20">
      <div className="container">
        <SectionReveal>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">Active Fund</p>
          <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            The Catalyst Fund: Proving the Thesis, Building the Track Record
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
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {equivesto.map((item) => (
            <SectionReveal key={item.title}>
              <div className="rounded-xl border bg-card p-6">
                <item.icon className="h-5 w-5 text-accent" />
                <h3 className="mt-3 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
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

        {[
          {
            label: "Executive Leadership",
            members: [
              { name: "Bryan Duarte", role: "Managing Partner", desc: "Executive leader overseeing partnership strategy and organizational direction." },
              { name: "Keyona Meeks", role: "General Partner", desc: "Strategic leader responsible for partnership development and investment oversight." },
            ],
          },
          {
            label: "Investment Committee",
            members: [
              { name: "Allison Gibson", role: "Executive Leadership | Investment Readiness Advisory", desc: "Builds programs that uplift overlooked entrepreneurs and champions food ventures that feed culture and community." },
              { name: "Bryan Watson", role: "Angel Investment & Venture Capital, CleanTech, Finance", desc: "CleanTech specialist. 2021 and 2024 Clean50 Awardee." },
              { name: "John Nicholson", role: "Cleantech and Environmental Expert", desc: "Over 30 years of experience in environmental engineering consulting and cleantech startups." },
              { name: "Melissa Allen", role: "Ubuntu International Laureate 2025 | Finance Leader", desc: "Award-winning emerging finance leader recognized by The Peak, Globe & Mail, and Bay Street Bull." },
            ],
          },
          {
            label: "Advisory Committee",
            members: [
              { name: "Lindsey Motlow", role: "Physicist | VP, Research Group Director", desc: "Investigates emerging technologies in Energy Industry with focus on Hydrogen and Advanced Nuclear." },
              { name: "Marlon Thompson", role: "Founder, Investor, Fractional Exec", desc: "Founder of Opening Round and Future Capital (acquired 2023). Venture Scout at Zeal Capital Partners." },
              { name: "Nicholas Parker", role: "Exponential Impact Entrepreneur", desc: "Known as the father of 'cleantech.' Over 40 years of global experience creating sustainable ventures." },
              { name: "Jade Lockard", role: "Investment & Fundraising Strategist", desc: "Specializing in fundraising strategy, investor relations, and capital formation for emerging fund managers." },
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
        ].map((group) => (
          <SectionReveal key={group.label} className="mt-10">
            <h3 className="mb-4 font-display text-xl font-semibold text-foreground">{group.label}</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.members.map((m) => (
                <div key={m.name} className="rounded-lg border bg-card p-5">
                  <p className="font-medium text-foreground">{m.name}</p>
                  <p className="text-xs font-medium text-accent">{m.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container text-center">
        <SectionReveal>
          <h2 className="text-3xl font-semibold tracking-tight">Get in touch to learn more</h2>
          <p className="mt-3 text-muted-foreground">Interested in the Catalyst Fund? We'd love to hear from you.</p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Contact Us <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  </main>
);

export default CatalystFund;
