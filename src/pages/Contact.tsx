import { Mail, Calendar, FolderOpen, Clock, Video, FileText, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";

const Contact = () => (
  <main>
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-1/3 -left-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>
      <div className="container">
        <SectionReveal>
          <div className="accent-line mb-4" />
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Get In Touch</p>
          <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Contact <span className="gradient-text">BlackTech Capital</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            Get in touch with our team to discuss investment opportunities, partnership inquiries, or learn more about our funds.
          </p>
        </SectionReveal>
      </div>
    </section>

    <section className="bg-secondary/50 py-20">
      <div className="container">
        <SectionReveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Connect With Our Team</h2>
          <p className="mt-3 text-muted-foreground">Multiple ways to reach our investment partners</p>
        </SectionReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <SectionReveal>
            <div className="flex h-full flex-col rounded-xl border bg-card p-6">
              <Mail className="h-5 w-5 text-accent" />
              <h3 className="mt-3 font-display text-lg font-semibold">Email Inquiries</h3>
              <p className="mt-1 text-sm text-muted-foreground">Send general inquiries or investment decks to our team</p>
              <div className="mt-4 space-y-2">
                <div>
                  <p className="text-sm font-medium">Bryan Duarte</p>
                  <a href="mailto:bduarte@blacktechcapital.com" className="text-sm text-accent hover:underline">bduarte@blacktechcapital.com</a>
                </div>
                <div>
                  <p className="text-sm font-medium">Keyona Meeks</p>
                  <a href="mailto:kmeeks@blacktechcapital.com" className="text-sm text-accent hover:underline">kmeeks@blacktechcapital.com</a>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="flex h-full flex-col rounded-xl border bg-card p-6">
              <Calendar className="h-5 w-5 text-accent" />
              <h3 className="mt-3 font-display text-lg font-semibold">Schedule a Meeting</h3>
              <p className="mt-1 text-sm text-muted-foreground">Book time directly with our partners</p>
              <div className="mt-4 space-y-3">
                <Button asChild variant="outline" size="sm" className="w-full justify-start">
                  <a href="https://calendly.com/bryanduarte/60-minute-meeting-with-bryan-btc" target="_blank" rel="noopener noreferrer">
                    Schedule with Bryan
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full justify-start">
                  <a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ24g8BPHpaNhG1jyEiBwxS-_kpddOJZtJ_gI0gXj2Shc4V5fYW4niAHyt0Y7ds5jiIwvc4KrKL6" target="_blank" rel="noopener noreferrer">
                    Schedule with Keyona
                  </a>
                </Button>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="flex h-full flex-col rounded-xl border bg-card p-6">
              <FolderOpen className="h-5 w-5 text-accent" />
              <h3 className="mt-3 font-display text-lg font-semibold">Data Room Access</h3>
              <p className="mt-1 text-sm text-muted-foreground">Request access to our investment materials</p>
              <p className="mt-4 text-sm text-muted-foreground">Catalyst Fund Data Room available upon request for qualified investors.</p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>

    {/* Investment Inquiry */}
    <section className="py-20">
      <div className="container">
        <SectionReveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Investment Inquiry</h2>
          <p className="mt-3 text-muted-foreground">Submit your ClimateTech company for consideration</p>
        </SectionReveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <SectionReveal>
            <div className="rounded-xl border bg-card p-8">
              <h3 className="font-display text-xl font-semibold">What We're Looking For</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">Stage:</strong> Pre-Seed ClimateTech companies</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">Geography:</strong> Canadian-based or operating in Canada</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">Focus:</strong> ClimateTech, CleanTech, Sustainable Solutions</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">Founders:</strong> Underrepresented or diverse founding teams</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /><span><strong className="text-foreground">Traction:</strong> Minimum viable product or early customer validation</span></li>
              </ul>
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  </main>
);

export default Contact;
