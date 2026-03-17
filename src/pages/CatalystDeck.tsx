import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, X, ChevronRight, CheckCircle2, XCircle, TrendingUp, Mail, Download } from "lucide-react";

import logo from "@/assets/logo.png";
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

/* ── Scaled slide wrapper ── */
function ScaledSlide({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const resize = () => {
      if (!containerRef.current) return;
      const parent = containerRef.current.parentElement!;
      const sx = parent.clientWidth / 1920;
      const sy = parent.clientHeight / 1080;
      setScale(Math.min(sx, sy));
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div
        className="slide-content"
        style={{
          width: 1920,
          height: 1080,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          position: "absolute",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Slide definitions ── */

function TitleSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col items-center justify-center bg-[hsl(210,40%,6%)] px-40 text-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-1/3 -right-1/4 h-[800px] w-[800px] rounded-full bg-[hsl(195,85%,35%)] blur-[200px]" />
          <div className="absolute -bottom-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-[hsl(200,75%,30%)] blur-[180px]" />
        </div>
        {/* Light logo container */}
        <div className="relative z-10 mb-12 rounded-2xl bg-white/95 px-10 py-6 shadow-[0_8px_40px_-8px_hsl(195,85%,35%/0.25)]">
          <img src={logo} alt="BlackTech Capital" className="h-16" />
        </div>
        <h1 className="relative z-10 text-[72px] font-bold leading-tight tracking-tight text-white">
          The <span className="bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(170,60%,45%)] bg-clip-text text-transparent">Catalyst Fund</span>
        </h1>
        <p className="relative z-10 mt-6 max-w-[900px] text-[28px] leading-relaxed text-white/70">
          Proving the thesis. Building the track record. Deploying capital to ClimateTech's next generation.
        </p>
        <div className="relative z-10 mt-12 h-1 w-32 rounded-full bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(170,60%,45%)]" />
        <p className="relative z-10 mt-6 text-[18px] tracking-widest text-white/40">CONFIDENTIAL · 2026</p>
      </div>
    </ScaledSlide>
  );
}

function ProblemSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-40">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">The Problem</p>
        <h2 className="max-w-[1200px] text-[56px] font-bold leading-[1.15] text-white">
          Underrepresented founders in ClimateTech lack access to <span className="text-[hsl(195,85%,50%)]">early-stage capital</span>
        </h2>
        <div className="mt-16 grid max-w-[1400px] grid-cols-3 gap-12">
          {[
            { stat: "<1%", desc: "of VC funding goes to Black founders across all industries" },
            { stat: "$150B", desc: "ClimateTech VC market projected by 2032" },
            { stat: "Pre-Seed", desc: "is the most underserved stage — where impact begins" },
          ].map((item) => (
            <div key={item.stat} className="border-l-2 border-[hsl(195,85%,35%)/30] pl-8">
              <p className="text-[48px] font-bold text-[hsl(195,85%,50%)]">{item.stat}</p>
              <p className="mt-3 text-[22px] leading-relaxed text-white/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </ScaledSlide>
  );
}

function MarketSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-40">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">Market Opportunity</p>
        <h2 className="max-w-[1000px] text-[52px] font-bold leading-[1.15] text-white">
          The largest capital reallocation in <span className="text-[hsl(195,85%,50%)]">human history</span>
        </h2>
        <div className="mt-16 grid max-w-[1400px] grid-cols-4 gap-8">
          {[
            { value: "$150B", label: "ClimateTech VC market by 2032" },
            { value: "10%", label: "Climate tech's share of total VC (up from 7%)" },
            { value: "$7.6B", label: "VC in US clean energy in 2024" },
            { value: "$6B", label: "AI-climate solutions raised in 9 months" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <TrendingUp className="h-6 w-6 text-[hsl(195,85%,50%)]" />
              <p className="mt-4 text-[44px] font-bold text-white">{s.value}</p>
              <p className="mt-2 text-[18px] leading-relaxed text-white/50">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </ScaledSlide>
  );
}

function ThesisSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-40">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">Our Thesis</p>
        <h2 className="max-w-[1100px] text-[52px] font-bold leading-[1.15] text-white">
          Back underrepresented founders building <span className="text-[hsl(195,85%,50%)]">ClimateTech solutions</span> at the earliest stage
        </h2>
        <div className="mt-16 grid max-w-[1400px] grid-cols-3 gap-10">
          {[
            { title: "ClimateTech Focus", items: ["Clean Energy", "Sustainable Materials", "Carbon Tech", "Climate Adaptation"] },
            { title: "Pre-Seed Stage", items: ["First institutional check", "$50K–$250K investments", "Highest impact per dollar", "Portfolio of 6 companies"] },
            { title: "Canada Geography", items: ["Growing cleantech ecosystem", "Government incentive alignment", "Diverse founder talent pool", "Strategic market positioning"] },
          ].map((col) => (
            <div key={col.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-10">
              <h3 className="mb-6 text-[24px] font-semibold text-[hsl(195,85%,50%)]">{col.title}</h3>
              <ul className="space-y-4">
                {col.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[20px] text-white/70">
                    <ChevronRight className="h-5 w-5 shrink-0 text-[hsl(195,85%,50%)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </ScaledSlide>
  );
}

function StrategySlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-40">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">Fund Strategy</p>
        <h2 className="text-[52px] font-bold text-white">Two Funds, <span className="text-[hsl(195,85%,50%)]">One Mission</span></h2>
        <p className="mt-4 max-w-[900px] text-[22px] text-white/60">
          The Catalyst Fund is the tactical execution of our institutional thesis — deploying capital now while building the track record for Fund I.
        </p>
        <div className="mt-14 grid grid-cols-2 gap-10 max-w-[1400px]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 opacity-60">
            <div className="mb-4 inline-block rounded-full bg-white/10 px-5 py-1.5 text-[14px] font-semibold text-white/60">PAUSED</div>
            <h3 className="text-[36px] font-bold text-white">Fund I</h3>
            <p className="mt-2 text-[20px] text-white/50">The institutional blueprint</p>
            <div className="mt-8 space-y-4">
              {["$15M target fund size", "Institutional LP base", "Full portfolio construction", "Long-term institutional vehicle"].map((item) => (
                <p key={item} className="flex items-center gap-3 text-[20px] text-white/40">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl border-2 border-[hsl(195,85%,35%)/40] bg-[hsl(195,85%,35%)/5] p-10">
            <div className="absolute -top-px -right-px rounded-bl-xl rounded-tr-2xl bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(170,60%,45%)] px-5 py-1.5 text-[14px] font-bold text-white">
              ACTIVE NOW
            </div>
            <h3 className="text-[36px] font-bold text-[hsl(195,85%,50%)]">Catalyst Fund</h3>
            <p className="mt-2 text-[20px] text-white/70">Tactical execution</p>
            <div className="mt-8 space-y-4">
              {["$500K–$2M flexible fund size", "Accessible LP minimums ($10K)", "6 Pre-Seed investments", "Equivesto partnership for efficiency", "Building track record for Fund I"].map((item) => (
                <p key={item} className="flex items-center gap-3 text-[20px] text-white/80">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[hsl(195,85%,50%)]" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
}

function FundOverviewSlide() {
  const terms = [
    ["Fund Size", "$500K–$2M"],
    ["Investments", "6 companies"],
    ["Check Size", "$50K–$250K"],
    ["Stage", "Pre-Seed"],
    ["Geography", "Canada"],
    ["LP Minimum", "$10K"],
    ["Mgmt Fee", "~2% avg (4%→2%→1%)"],
    ["Carry", "20%"],
    ["Hurdle Rate", "7%"],
    ["Fund Life", "10 years + 2 ext."],
  ];
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-40">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">Fund Overview</p>
        <h2 className="text-[52px] font-bold text-white">Key Terms</h2>
        <div className="mt-14 grid max-w-[1400px] grid-cols-2 gap-x-16 gap-y-6">
          {terms.map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between border-b border-white/10 pb-4">
              <span className="text-[22px] text-white/60">{k}</span>
              <span className="text-[24px] font-semibold text-white">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </ScaledSlide>
  );
}

function EquivestoSlide() {
  const services = [
    { name: "KYP Due Diligence", eq: true, trad: false },
    { name: "Marketing & Compliance", eq: true, trad: false },
    { name: "KYC Investor Onboarding", eq: true, trad: "partial" },
    { name: "GP & LP Legal Formation", eq: true, trad: false },
    { name: "LP Fund Holding & Escrow", eq: true, trad: false },
    { name: "Annual Financial Statements", eq: true, trad: true },
    { name: "Tax Filings", eq: true, trad: false },
    { name: "Investor Communications", eq: true, trad: true },
    { name: "Fund Dissolution", eq: true, trad: false },
  ];
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-40">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">Structural Advantage</p>
        <h2 className="text-[48px] font-bold text-white">The Equivesto Partnership</h2>
        <p className="mt-3 max-w-[800px] text-[20px] text-white/60">OSC-licensed Exempt Market Dealer — unlocking services unavailable to traditional fund admins.</p>
        <div className="mt-10 flex gap-12 max-w-[1500px]">
          <div className="flex-1 space-y-3">
            <div className="grid grid-cols-[1fr_80px_80px] gap-2 pb-2 text-[14px] font-semibold uppercase tracking-widest text-white/40">
              <span>Service</span><span className="text-center text-[hsl(195,85%,50%)]">Equivesto</span><span className="text-center">Trad.</span>
            </div>
            {services.map((s) => (
              <div key={s.name} className="grid grid-cols-[1fr_80px_80px] items-center gap-2 rounded-lg bg-white/[0.03] px-4 py-3">
                <span className="text-[18px] text-white/80">{s.name}</span>
                <span className="flex justify-center">{s.eq ? <CheckCircle2 className="h-5 w-5 text-[hsl(195,85%,50%)]" /> : <XCircle className="h-5 w-5 text-white/20" />}</span>
                <span className="flex justify-center">
                  {s.trad === true ? <CheckCircle2 className="h-5 w-5 text-white/40" /> : s.trad === "partial" ? <span className="text-[14px] text-[hsl(38,80%,55%)]">Partial</span> : <XCircle className="h-5 w-5 text-red-400/40" />}
                </span>
              </div>
            ))}
            <p className="pt-2 text-[16px] text-white/40">6/9 NOT available + 1 partial from Trad. Admin</p>
          </div>
          <div className="w-[400px] space-y-6 pt-8">
            <div className="rounded-2xl border border-[hsl(195,85%,35%)/30] bg-[hsl(195,85%,35%)/5] p-8">
              <p className="text-[14px] font-semibold uppercase tracking-widest text-[hsl(195,85%,50%)]">Equivesto</p>
              <p className="mt-2 text-[48px] font-bold text-white">~$190K</p>
              <p className="text-[16px] text-white/50">10-year total (medium scenario)</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 opacity-60">
              <p className="text-[14px] font-semibold uppercase tracking-widest text-white/50">Traditional Admin</p>
              <p className="mt-2 text-[48px] font-bold text-white">$375K–$650K</p>
              <p className="text-[16px] text-white/50">10-year total</p>
            </div>
            <div className="rounded-xl bg-[hsl(195,85%,35%)/10] px-6 py-4 text-center">
              <p className="text-[22px] font-bold text-[hsl(195,85%,50%)]">$185K–$460K saved</p>
              <p className="text-[14px] text-white/50">Goes to founders & LP returns</p>
            </div>
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
}

function TeamSlide() {
  const leadership = [
    { name: "Bryan Duarte", role: "Managing Partner", img: bryanDuarte, linkedin: "https://www.linkedin.com/in/duartebryan/" },
    { name: "Keyona Meeks", role: "General Partner", img: keyonaMeeks, linkedin: "https://www.linkedin.com/in/keyona-meeks/" },
  ];
  const ic = [
    { name: "Allison Gibson", role: "Investment Readiness", img: allisonGibson, linkedin: "https://www.linkedin.com/in/alliegco/" },
    { name: "Bryan Watson", role: "CleanTech / Finance", img: bryanWatson, linkedin: "https://www.linkedin.com/in/cleantechnorth/" },
    { name: "John Nicholson", role: "Environmental Expert", img: johnNicholson, linkedin: "https://www.linkedin.com/in/johnjnicholsonjr/" },
    { name: "Melissa Allen", role: "Finance Leader", img: melissaAllen, linkedin: "https://www.linkedin.com/in/melissaaallen/" },
  ];
  const advisory = [
    { name: "Lindsey Motlow", role: "Energy Research", img: lindseyMotlow, linkedin: "https://www.linkedin.com/in/lindseymotlow/" },
    { name: "Marlon Thompson", role: "Founder / Investor", img: marlonThompson, linkedin: "https://www.linkedin.com/in/thompsonmarlon/" },
    { name: "Nicholas Parker", role: "Cleantech Pioneer", img: nicholasParker, linkedin: "https://www.linkedin.com/in/nicholasparker3/" },
    { name: "Jade Lockard", role: "Fundraising Strategy", img: jadeLockard, linkedin: "https://www.linkedin.com/in/jade-lockard/" },
  ];

  type Person = { name: string; role: string; img: string; linkedin: string };

  const PersonCard = ({ p, size = "lg" }: { p: Person; size?: "lg" | "sm" }) => (
    <a
      href={p.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="group flex flex-col items-center text-center transition-transform hover:scale-105"
    >
      <img src={p.img} alt={p.name} className={`rounded-full object-cover ring-2 ring-[hsl(195,85%,35%)/30] group-hover:ring-[hsl(195,85%,50%)] transition-all ${size === "lg" ? "h-[100px] w-[100px]" : "h-20 w-20"}`} />
      <p className={`mt-3 font-semibold text-white group-hover:text-[hsl(195,85%,50%)] transition-colors ${size === "lg" ? "text-[20px]" : "text-[17px]"}`}>{p.name}</p>
      <p className={`text-[hsl(195,85%,50%)] ${size === "lg" ? "text-[15px]" : "text-[13px]"}`}>{p.role}</p>
    </a>
  );

  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-24">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">Our Team</p>
        <h2 className="text-[48px] font-bold text-white">Leadership & Advisors</h2>
        <div className="mt-10 space-y-10 max-w-[1700px]">
          <div>
            <p className="mb-5 text-[14px] font-semibold uppercase tracking-widest text-white/40">Executive Leadership</p>
            <div className="flex gap-20">{leadership.map((p) => <PersonCard key={p.name} p={p} size="lg" />)}</div>
          </div>
          <div>
            <p className="mb-5 text-[14px] font-semibold uppercase tracking-widest text-white/40">Investment Committee</p>
            <div className="grid grid-cols-4 gap-10">{ic.map((p) => <PersonCard key={p.name} p={p} size="sm" />)}</div>
          </div>
          <div>
            <p className="mb-5 text-[14px] font-semibold uppercase tracking-widest text-white/40">Advisory Committee</p>
            <div className="grid grid-cols-4 gap-10">{advisory.map((p) => <PersonCard key={p.name} p={p} size="sm" />)}</div>
          </div>
        </div>
        <p className="mt-8 text-[14px] text-white/30">Click any team member to view their LinkedIn profile</p>
      </div>
    </ScaledSlide>
  );
}

function TrackRecordSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-40">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">Track Record</p>
        <h2 className="text-[52px] font-bold text-white">Proven Experience</h2>
        <div className="mt-14 grid max-w-[1400px] grid-cols-2 gap-12">
          <div className="flex gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-10">
            <img src={bryanDuarte} alt="Bryan Duarte" className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-[hsl(195,85%,35%)/30]" />
            <div>
              <p className="text-[24px] font-semibold text-white">Bryan Duarte</p>
              <p className="mt-1 text-[16px] text-[hsl(195,85%,50%)]">Managing Partner</p>
              <p className="mt-4 text-[18px] leading-relaxed text-white/60">
                5x Entrepreneur with 3 Exits (8x and 10x EBITDA). 30+ years energy industry. CleanTech EIR, Techstars advisor, Founder of Enliten.
              </p>
            </div>
          </div>
          <div className="flex gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-10">
            <img src={keyonaMeeks} alt="Keyona Meeks" className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-[hsl(195,85%,35%)/30]" />
            <div>
              <p className="text-[24px] font-semibold text-white">Keyona Meeks</p>
              <p className="mt-1 text-[16px] text-[hsl(195,85%,50%)]">General Partner</p>
              <p className="mt-4 text-[18px] leading-relaxed text-white/60">
                10 deal attributions at Bronze Valley including wildwonder (Inc. 5000 #109), Brevity ($2M AI platform), Grovara ($8.75M marketplace). SXSW Judge.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 rounded-xl bg-[hsl(195,85%,35%)/10] px-8 py-5 max-w-[1400px]">
          <p className="text-[20px] text-white/80">🏆 WEF (UpLink) Top Innovative Fund selection 2022 · Pro-rata co-investment opportunities available to LPs</p>
        </div>
      </div>
    </ScaledSlide>
  );
}

function ContactSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col items-center justify-center bg-[hsl(210,40%,6%)] px-40 text-center">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute -bottom-1/3 -right-1/4 h-[700px] w-[700px] rounded-full bg-[hsl(195,85%,35%)] blur-[200px]" />
        </div>
        {/* Light logo container */}
        <div className="relative z-10 mb-10 rounded-2xl bg-white/95 px-8 py-5 shadow-[0_8px_40px_-8px_hsl(195,85%,35%/0.25)]">
          <img src={logo} alt="BlackTech Capital" className="h-12" />
        </div>
        <h2 className="relative z-10 text-[56px] font-bold text-white">Let's Build the Future Together</h2>
        <p className="relative z-10 mt-6 max-w-[700px] text-[24px] text-white/60">
          Interested in the Catalyst Fund? We'd love to connect.
        </p>
        <div className="relative z-10 mt-12 flex items-center gap-8">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-8 py-5">
            <Mail className="h-6 w-6 text-[hsl(195,85%,50%)]" />
            <span className="text-[22px] text-white">info@blacktechcapital.com</span>
          </div>
        </div>
        <p className="relative z-10 mt-16 text-[16px] tracking-widest text-white/30">CONFIDENTIAL · FOR QUALIFIED INVESTORS ONLY</p>
      </div>
    </ScaledSlide>
  );
}

/* ── Main Deck Component ── */
/* Order: Title, Problem, Market (moved to 3), Thesis, Strategy, Fund Overview, Equivesto, Team, Track Record, Contact */
const slides = [TitleSlide, ProblemSlide, MarketSlide, ThesisSlide, StrategySlide, FundOverviewSlide, EquivestoSlide, TeamSlide, TrackRecordSlide, ContactSlide];

export default function CatalystDeck() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const go = useCallback(
    (dir: 1 | -1) => {
      setCurrent((c) => Math.max(0, Math.min(slides.length - 1, c + dir)));
    },
    []
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); go(1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
      else if (e.key === "Escape") navigate("/catalyst-fund");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go, navigate]);

  const SlideComponent = slides[current];

  return (
    <div
      className="fixed inset-0 z-50 bg-[hsl(210,40%,6%)] select-none"
      onClick={(e) => {
        const x = e.clientX / window.innerWidth;
        if (x > 0.65) go(1);
        else if (x < 0.35) go(-1);
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3 }}
        >
          <SlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation bar */}
      <div className="absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 rounded-full border border-white/10 bg-black/60 px-5 py-2.5 backdrop-blur-md">
        <button onClick={() => go(-1)} disabled={current === 0} className="text-white/60 hover:text-white disabled:opacity-30 transition-opacity">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-[hsl(195,85%,50%)]" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>
        <button onClick={() => go(1)} disabled={current === slides.length - 1} className="text-white/60 hover:text-white disabled:opacity-30 transition-opacity">
          <ArrowRight className="h-5 w-5" />
        </button>
        <span className="ml-2 text-[13px] text-white/40">{current + 1}/{slides.length}</span>
        {/* Download button */}
        <a
          href="/pdfs/catalyst-fund-one-pager.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="ml-1 text-white/60 hover:text-white transition-opacity"
          title="Download One-Pager"
        >
          <Download className="h-4 w-4" />
        </a>
      </div>

      {/* Exit button */}
      <button
        onClick={() => navigate("/catalyst-fund")}
        className="absolute top-5 right-5 z-50 rounded-full border border-white/10 bg-black/40 p-2 text-white/50 backdrop-blur hover:text-white transition-colors"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}
