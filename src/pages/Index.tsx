import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const Index = () => (
  <main>
    {/* Hero */}
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="container max-w-3xl text-center">
        <SectionReveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
            ClimateTech Venture Capital
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
            Good for People,
            <br />
            Good for Planet.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Investing in underrepresented founders building ClimateTech solutions for a sustainable future.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/catalyst-fund">Explore Catalyst Fund <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/fund-i">Learn About Fund I</Link>
            </Button>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Two Funds One Mission */}
    <section className="bg-secondary/50 py-20">
      <div className="container">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Two Funds, One Mission</h2>
            <p className="mt-4 text-muted-foreground">
              A strategic pause from institutional blueprint to proof-of-concept execution. We designed Fund I as a $15M institutional vehicle to scale our ClimateTech thesis. Current market conditions led us to adapt—not scale down.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <SectionReveal>
            <div className="flex h-full flex-col rounded-xl border bg-card p-8">
              <span className="w-fit rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">Strategic Pause</span>
              <h3 className="mt-4 font-display text-2xl font-semibold">Fund I</h3>
              <p className="mt-1 text-sm text-muted-foreground">The Institutional Blueprint</p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div><p className="text-muted-foreground">Target Size</p><p className="font-medium">$15M</p></div>
                <div><p className="text-muted-foreground">Period</p><p className="font-medium">4 years</p></div>
                <div><p className="text-muted-foreground">Stage</p><p className="font-medium">Pre-Seed to Seed</p></div>
                <div><p className="text-muted-foreground">LP Min</p><p className="font-medium">$100K</p></div>
              </div>
              <div className="mt-auto pt-6">
                <Button asChild variant="outline" size="sm">
                  <Link to="/fund-i">View Blueprint <ArrowRight className="ml-1 h-3 w-3" /></Link>
                </Button>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="flex h-full flex-col rounded-xl border border-accent/30 bg-card p-8 shadow-sm">
              <span className="w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">Currently Fundraising</span>
              <h3 className="mt-4 font-display text-2xl font-semibold">Catalyst Fund</h3>
              <p className="mt-1 text-sm text-muted-foreground">Adaptive Execution</p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div><p className="text-muted-foreground">Target Size</p><p className="font-medium">$500K–$2M</p></div>
                <div><p className="text-muted-foreground">Period</p><p className="font-medium">Through 2026</p></div>
                <div><p className="text-muted-foreground">Stage</p><p className="font-medium">Pre-Seed</p></div>
                <div><p className="text-muted-foreground">LP Min</p><p className="font-medium">$10K</p></div>
              </div>
              <div className="mt-auto pt-6">
                <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/catalyst-fund">Explore Active Fund <ArrowRight className="ml-1 h-3 w-3" /></Link>
                </Button>
              </div>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal className="mt-12">
          <p className="mx-auto max-w-2xl text-center text-sm text-muted-foreground">
            Both funds share the identical mission: investing in underrepresented founders building ClimateTech solutions. The same team, same values, same impact focus—just a more nimble approach to proving the model.
          </p>
        </SectionReveal>
      </div>
    </section>

    {/* Leadership */}
    <section className="py-20">
      <div className="container">
        <SectionReveal>
          <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">Our Leadership</h2>
          <p className="mt-3 text-center text-muted-foreground">Meet the team driving our investment strategy</p>
        </SectionReveal>
        <div className="mx-auto mt-12 grid max-w-2xl gap-8 md:grid-cols-2">
          {[
            { name: "Bryan Duarte", role: "Managing Partner", desc: "Executive leader overseeing partnership strategy and organizational direction." },
            { name: "Keyona Meeks", role: "General Partner", desc: "Strategic leader responsible for partnership development and investment oversight." },
          ].map((p) => (
            <SectionReveal key={p.name}>
              <div className="rounded-xl border bg-card p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-xl font-semibold text-foreground">
                  {p.name.split(" ").map(w => w[0]).join("")}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{p.name}</h3>
                <p className="text-sm font-medium text-accent">{p.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Index;
