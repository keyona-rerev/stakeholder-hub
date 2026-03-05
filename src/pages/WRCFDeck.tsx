import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ArrowRight, X, Download, CheckCircle2,
  Heart, Users, Shield, Sparkles, Handshake, Target,
  TrendingUp, Leaf, MapPin, Globe, Lightbulb, Zap,
  Building2, ArrowUpRight
} from "lucide-react";

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

/* ══════════════════════════════════════════════════════
   SLIDE 1 — Title: Partnership Framing
   ══════════════════════════════════════════════════════ */
function TitleSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col items-center justify-center bg-[hsl(210,40%,6%)] px-40 text-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-1/3 -right-1/4 h-[800px] w-[800px] rounded-full bg-[hsl(195,85%,35%)] blur-[200px]" />
          <div className="absolute -bottom-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-[hsl(170,60%,35%)] blur-[180px]" />
        </div>
        <div className="relative z-10 mb-12 rounded-2xl bg-white/95 px-10 py-6 shadow-[0_8px_40px_-8px_hsl(195,85%,35%/0.25)]">
          <img src={logo} alt="BlackTech Capital" className="h-16" />
        </div>
        <h1 className="relative z-10 text-[68px] font-bold leading-tight tracking-tight text-white">
          BlackTech Capital{" "}
          <span className="bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(170,60%,45%)] bg-clip-text text-transparent">
            × WRCF
          </span>
        </h1>
        <p className="relative z-10 mt-6 max-w-[900px] text-[28px] leading-relaxed text-white/60">
          A partnership for equitable, sustainable impact in Waterloo Region and beyond.
        </p>
        <div className="relative z-10 mt-12 h-1 w-32 rounded-full bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(170,60%,45%)]" />
        <p className="relative z-10 mt-6 text-[18px] tracking-widest text-white/40">CONFIDENTIAL · 2026</p>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 2 — Shared Values
   ══════════════════════════════════════════════════════ */
function SharedValuesSlide() {
  const values = [
    {
      wrcf: "Equity-Centred",
      icon: <Heart className="h-7 w-7" />,
      btc: "Pre-Seed ClimateTech for underrepresented founders. <1% of VC goes to Black founders — we exist to change that.",
    },
    {
      wrcf: "Approachable",
      icon: <Users className="h-7 w-7" />,
      btc: "$10K LP minimum. We showed up to every WRCF call. We build relationships before we build deals.",
    },
    {
      wrcf: "Accountable",
      icon: <Shield className="h-7 w-7" />,
      btc: "7% hurdle rate. Equivesto's OSC-licensed infrastructure. Transparent reporting from day one.",
    },
    {
      wrcf: "Catalytic",
      icon: <Sparkles className="h-7 w-7" />,
      btc: "First cheques into companies others overlook. Our capital unlocks follow-on funding and market access.",
    },
    {
      wrcf: "Collaborative",
      icon: <Handshake className="h-7 w-7" />,
      btc: "Investor introductions are our #1 priority. We help founders finish raising their rounds — not just write cheques.",
    },
    {
      wrcf: "Impactful",
      icon: <Target className="h-7 w-7" />,
      btc: "Mars Materials: gigatons of potential carbon drawdown. Serenity Power: clean energy access. Real outcomes, not dashboards.",
    },
  ];

  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-32">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(170,60%,45%)]">
          Strategic Fit
        </p>
        <h2 className="text-[52px] font-bold text-white">
          We Already Speak the{" "}
          <span className="text-[hsl(170,60%,45%)]">Same Language</span>
        </h2>
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-[1700px]">
          {values.map((v) => (
            <div key={v.wrcf} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <div className="flex items-center gap-3 text-[hsl(170,60%,45%)]">
                {v.icon}
                <span className="text-[20px] font-bold">{v.wrcf}</span>
              </div>
              <p className="mt-4 text-[17px] leading-relaxed text-white/60">{v.btc}</p>
            </div>
          ))}
        </div>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 3 — Mission Alignment Framework (Venn)
   ══════════════════════════════════════════════════════ */
function MissionAlignmentSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-32">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(170,60%,45%)]">
          Mission Alignment
        </p>
        <h2 className="text-[48px] font-bold text-white max-w-[1100px]">
          Mapping to WRCF's{" "}
          <span className="text-[hsl(170,60%,45%)]">Foundation Framework</span>
        </h2>

        <div className="mt-10 flex gap-12 max-w-[1700px]">
          {/* Venn-style visual */}
          <div className="relative flex-shrink-0 w-[700px] h-[500px]">
            {/* Three overlapping circles */}
            <div className="absolute top-0 left-[140px] w-[380px] h-[380px] rounded-full border-2 border-[hsl(195,85%,50%)/40] bg-[hsl(195,85%,50%)/8] flex items-center justify-center pt-[-40px]">
              <span className="text-[20px] font-semibold text-[hsl(195,85%,50%)] mt-[-80px]">Equitable<br/><span className="text-[16px] text-white/50">Communities</span></span>
            </div>
            <div className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full border-2 border-[hsl(170,60%,45%)/40] bg-[hsl(170,60%,45%)/8] flex items-center justify-center">
              <span className="text-[20px] font-semibold text-[hsl(170,60%,45%)] ml-[-60px] mt-[80px]">Sustainable<br/><span className="text-[16px] text-white/50">Communities</span></span>
            </div>
            <div className="absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full border-2 border-[hsl(38,80%,55%)/40] bg-[hsl(38,80%,55%)/8] flex items-center justify-center">
              <span className="text-[20px] font-semibold text-[hsl(38,80%,55%)] mr-[-60px] mt-[80px]">Connected<br/><span className="text-[16px] text-white/50">Communities</span></span>
            </div>
            {/* Center: Thriving People */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-10">
              <div className="rounded-full bg-white/10 backdrop-blur px-8 py-4 border border-white/20">
                <p className="text-[22px] font-bold text-white text-center">Thriving<br/>People</p>
              </div>
            </div>
          </div>

          {/* BTC alignment mapping */}
          <div className="flex-1 space-y-5 pt-2">
            {[
              { color: "hsl(195,85%,50%)", label: "Equitable", items: ["Racial equity in venture funding", "Accessible LP minimums ($10K)", "Equitable founder terms"] },
              { color: "hsl(170,60%,45%)", label: "Sustainable", items: ["ClimateTech-only thesis", "Gigatons of carbon drawdown potential", "Market-aligned impact (survives political cycles)"] },
              { color: "hsl(38,80%,55%)", label: "Connected", items: ["Investor introduction network", "Cross-border Canada–US pipeline", "WRCF collaboration on local sourcing"] },
            ].map((group) => (
              <div key={group.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[16px] font-bold mb-3" style={{ color: group.color }}>
                  {group.label} Communities → BTC
                </p>
                <div className="space-y-2">
                  {group.items.map((item) => (
                    <p key={item} className="flex items-center gap-3 text-[17px] text-white/60">
                      <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: group.color }} />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 4 — How We Work With Founders (Case Studies)
   ══════════════════════════════════════════════════════ */
function HowWeWorkSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-32">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">
          Impact & Credibility
        </p>
        <h2 className="text-[48px] font-bold text-white">
          How We <span className="text-[hsl(195,85%,50%)]">Actually Work</span> — Not How We Intend To
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-10 max-w-[1600px]">
          {/* Mars Materials */}
          <div className="rounded-2xl border border-[hsl(170,60%,45%)/30] bg-[hsl(170,60%,45%)/5] p-10">
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="h-8 w-8 text-[hsl(170,60%,45%)]" />
              <h3 className="text-[28px] font-bold text-white">Mars Materials</h3>
            </div>
            <div className="space-y-4">
              {[
                "First investment — our conviction in action",
                "Strategic investor introductions to close their round",
                "Making acrylonitrile supply chains cleaner AND cheaper",
                "Potential gigatons of carbon drawdown across stakeholders",
              ].map((item) => (
                <p key={item} className="flex items-start gap-3 text-[19px] text-white/70">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-1 text-[hsl(170,60%,45%)]" />
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-6 rounded-lg bg-white/[0.05] px-5 py-3">
              <p className="text-[16px] text-white/50 italic">Market innovation, not ESG compliance</p>
            </div>
          </div>

          {/* Serenity Power */}
          <div className="rounded-2xl border border-[hsl(195,85%,50%)/30] bg-[hsl(195,85%,50%)/5] p-10">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="h-8 w-8 text-[hsl(195,85%,50%)]" />
              <h3 className="text-[28px] font-bold text-white">Serenity Power</h3>
            </div>
            <div className="space-y-4">
              {[
                "Got into a deal others could not access",
                "Founders trust us because of who we are and how we operate",
                "Active support: introductions, strategy, round completion",
                "Clean energy access — real impact, real returns",
              ].map((item) => (
                <p key={item} className="flex items-start gap-3 text-[19px] text-white/70">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-1 text-[hsl(195,85%,50%)]" />
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-6 rounded-lg bg-white/[0.05] px-5 py-3">
              <p className="text-[16px] text-white/50 italic">Structural sourcing advantage</p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-[20px] text-white/50 max-w-[1200px]">
          Investor introductions are our <span className="font-semibold text-white/80">#1 priority</span>. We help founders finish raising their rounds.
        </p>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 5 — Already Building Together
   ══════════════════════════════════════════════════════ */
function AlreadyBuildingSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col items-center justify-center bg-[hsl(210,40%,6%)] px-40 text-center">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/3 h-[600px] w-[600px] rounded-full bg-[hsl(170,60%,35%)] blur-[200px]" />
        </div>
        <Handshake className="relative z-10 h-20 w-20 text-[hsl(170,60%,45%)]" />
        <h2 className="relative z-10 mt-8 max-w-[1100px] text-[56px] font-bold leading-[1.15] text-white">
          We've Already{" "}
          <span className="bg-gradient-to-r from-[hsl(170,60%,45%)] to-[hsl(200,75%,50%)] bg-clip-text text-transparent">
            Started
          </span>
        </h2>
        <p className="relative z-10 mt-8 max-w-[850px] text-[26px] leading-relaxed text-white/60">
          BlackTech Capital is the only fund that showed up to every WRCF session.
          We don't wait for the cheque to start collaborating.
        </p>
        <div className="relative z-10 mt-14 grid grid-cols-3 gap-8 max-w-[1200px]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <Globe className="h-8 w-8 text-[hsl(170,60%,45%)] mx-auto" />
            <p className="mt-4 text-[20px] font-semibold text-white">Present & Engaged</p>
            <p className="mt-2 text-[17px] text-white/50">Attended every WRCF call and information session</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <Lightbulb className="h-8 w-8 text-[hsl(170,60%,45%)] mx-auto" />
            <p className="mt-4 text-[20px] font-semibold text-white">Proactive Partners</p>
            <p className="mt-2 text-[17px] text-white/50">Already exploring how BTC and WRCF can co-source and co-support</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <Heart className="h-8 w-8 text-[hsl(170,60%,45%)] mx-auto" />
            <p className="mt-4 text-[20px] font-semibold text-white">Relationship First</p>
            <p className="mt-2 text-[17px] text-white/50">We build trust before we build deals — that's who we are</p>
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 6 — Waterloo Region Commitment
   ══════════════════════════════════════════════════════ */
function WaterlooCommitmentSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-32">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(170,60%,45%)]">
          Regional Engagement
        </p>
        <h2 className="text-[48px] font-bold text-white max-w-[1200px]">
          Our Commitment to{" "}
          <span className="text-[hsl(170,60%,45%)]">Waterloo Region</span>
        </h2>

        <div className="mt-10 flex gap-10 max-w-[1600px]">
          {/* Pledge */}
          <div className="flex-1 rounded-2xl border-2 border-[hsl(170,60%,45%)/40] bg-[hsl(170,60%,45%)/5] p-10">
            <div className="flex items-center gap-4 mb-6">
              <MapPin className="h-10 w-10 text-[hsl(170,60%,45%)]" />
              <h3 className="text-[28px] font-bold text-white">The Pledge</h3>
            </div>
            <p className="text-[24px] leading-relaxed text-white/80 mb-8">
              We commit to investing in <span className="font-bold text-[hsl(170,60%,45%)]">at least one company</span> from the Waterloo Region.
            </p>
            <div className="space-y-4">
              {[
                "Joint sourcing pipeline with WRCF",
                "Regular reporting on regional deal flow",
                "Collaborative founder evaluation process",
                "Active partnership, not passive capital",
              ].map((item) => (
                <p key={item} className="flex items-center gap-3 text-[19px] text-white/70">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[hsl(170,60%,45%)]" />
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Local connections */}
          <div className="w-[600px] space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <Building2 className="h-7 w-7 text-[hsl(195,85%,50%)] mb-4" />
              <h3 className="text-[22px] font-semibold text-white">Canadian-Based Fund</h3>
              <p className="mt-2 text-[18px] text-white/60">Canadian geography focus, Canadian team members, local partnerships across the ecosystem</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <Globe className="h-7 w-7 text-[hsl(195,85%,50%)] mb-4" />
              <h3 className="text-[22px] font-semibold text-white">Expanding "Local"</h3>
              <p className="mt-2 text-[18px] text-white/60">Our Canadian ClimateTech pipeline naturally surfaces Waterloo Region founders — the innovation density is real</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <Handshake className="h-7 w-7 text-[hsl(195,85%,50%)] mb-4" />
              <h3 className="text-[22px] font-semibold text-white">Proposed Collaboration</h3>
              <p className="mt-2 text-[18px] text-white/60">Quarterly touchpoints with WRCF to share pipeline, discuss portfolio, and identify ways to deepen regional impact</p>
            </div>
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 7 — Why We Win Deals Others Can't
   ══════════════════════════════════════════════════════ */
function DealAdvantageSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col items-center justify-center bg-[hsl(210,40%,6%)] px-40 text-center">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/3 right-1/4 h-[600px] w-[600px] rounded-full bg-[hsl(195,85%,35%)] blur-[200px]" />
        </div>
        <p className="relative z-10 mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">
          Structural Advantage
        </p>
        <h2 className="relative z-10 max-w-[1100px] text-[52px] font-bold leading-[1.15] text-white">
          We Get Into Deals{" "}
          <span className="text-[hsl(195,85%,50%)]">Others Can't</span>
        </h2>
        <p className="relative z-10 mt-6 max-w-[850px] text-[24px] leading-relaxed text-white/60">
          Underrepresented founders trust us because of who we are and how we operate.
          That's not a talking point — it's a sourcing advantage.
        </p>
        <div className="relative z-10 mt-14 grid grid-cols-3 gap-8 max-w-[1300px]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-left">
            <p className="text-[56px] font-bold text-[hsl(195,85%,50%)]">&lt;1%</p>
            <p className="mt-2 text-[19px] text-white/60">of VC goes to Black founders</p>
            <p className="mt-4 text-[17px] text-white/40">We see the deals others miss — because the founders see us.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-left">
            <p className="text-[56px] font-bold text-[hsl(195,85%,50%)]">&lt;6%</p>
            <p className="mt-2 text-[19px] text-white/60">of VC to women-led teams</p>
            <p className="mt-4 text-[17px] text-white/40">Half the planet's talent, systematically underfunded. Market inefficiency = opportunity.</p>
          </div>
          <div className="rounded-2xl border border-[hsl(195,85%,50%)/30] bg-[hsl(195,85%,50%)/5] p-8 text-left">
            <Zap className="h-10 w-10 text-[hsl(195,85%,50%)] mb-4" />
            <p className="text-[22px] font-bold text-white">Serenity Power</p>
            <p className="mt-2 text-[17px] text-white/60">We got into this deal because the founders chose us — that trust is earned, not bought.</p>
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 8 — Fund Overview (Condensed)
   ══════════════════════════════════════════════════════ */
function FundOverviewSlide() {
  const terms = [
    ["Fund", "Catalyst Fund"],
    ["Size", "$500K–$2M"],
    ["Investments", "6 Pre-Seed Companies"],
    ["Check Size", "$50K–$250K"],
    ["Geography", "Canada"],
    ["LP Minimum", "$10K"],
    ["Carry / Hurdle", "20% / 7%"],
    ["Fund Life", "10 years + 2 ext."],
  ];
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-40">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">Fund Details</p>
        <h2 className="text-[48px] font-bold text-white">Catalyst Fund — Key Terms</h2>
        <p className="mt-3 text-[22px] text-white/50 max-w-[900px]">Pre-Seed ClimateTech. Canadian geography. Deploying 2026.</p>
        <div className="mt-12 grid max-w-[1200px] grid-cols-2 gap-x-16 gap-y-5">
          {terms.map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between border-b border-white/10 pb-4">
              <span className="text-[22px] text-white/50">{k}</span>
              <span className="text-[24px] font-semibold text-white">{v}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-xl bg-[hsl(195,85%,35%)/10] px-8 py-5 max-w-[1200px]">
          <p className="text-[19px] text-white/60">
            <Leaf className="mr-2 inline h-5 w-5 text-[hsl(170,60%,45%)]" />
            Equivesto partnership saves <span className="font-semibold text-white">$185K–$460K</span> over fund life vs. traditional admin
          </p>
        </div>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 9 — Team & Canadian Connections
   ══════════════════════════════════════════════════════ */
function TeamSlide() {
  const leadership = [
    { name: "Bryan Duarte", role: "Managing Partner", img: bryanDuarte, linkedin: "https://www.linkedin.com/in/bryanduarte/", local: true },
    { name: "Keyona Meeks", role: "General Partner", img: keyonaMeeks, linkedin: "https://www.linkedin.com/in/keyonameeks/", local: false },
  ];
  const ic = [
    { name: "Allison Gibson", role: "Investment Readiness", img: allisonGibson, linkedin: "https://www.linkedin.com/in/allisongibson/", local: false },
    { name: "Bryan Watson", role: "CleanTech / Finance", img: bryanWatson, linkedin: "https://www.linkedin.com/in/bryanwatson/", local: true },
    { name: "John Nicholson", role: "Environmental Expert", img: johnNicholson, linkedin: "https://www.linkedin.com/in/johnnicholson/", local: false },
    { name: "Melissa Allen", role: "Finance Leader", img: melissaAllen, linkedin: "https://www.linkedin.com/in/melissaallen/", local: false },
  ];
  const advisory = [
    { name: "Lindsey Motlow", role: "Energy Research", img: lindseyMotlow, linkedin: "https://www.linkedin.com/in/lindseymotlow/", local: false },
    { name: "Marlon Thompson", role: "Founder / Investor", img: marlonThompson, linkedin: "https://www.linkedin.com/in/marlonthompson/", local: false },
    { name: "Nicholas Parker", role: "Cleantech Pioneer", img: nicholasParker, linkedin: "https://www.linkedin.com/in/nicholasparker/", local: true },
    { name: "Jade Lockard", role: "Fundraising Strategy", img: jadeLockard, linkedin: "https://www.linkedin.com/in/jadelockard/", local: false },
  ];

  type Person = { name: string; role: string; img: string; linkedin: string; local: boolean };

  const PersonCard = ({ p, size = "lg" }: { p: Person; size?: "lg" | "sm" }) => (
    <a
      href={p.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="group flex flex-col items-center text-center transition-transform hover:scale-105"
    >
      <div className="relative">
        <img src={p.img} alt={p.name} className={`rounded-full object-cover ring-2 ring-[hsl(195,85%,35%)/30] group-hover:ring-[hsl(195,85%,50%)] transition-all ${size === "lg" ? "h-[100px] w-[100px]" : "h-20 w-20"}`} />
        {p.local && (
          <div className="absolute -top-1 -right-1 rounded-full bg-[hsl(170,60%,45%)] p-1">
            <MapPin className="h-3.5 w-3.5 text-white" />
          </div>
        )}
      </div>
      <p className={`mt-3 font-semibold text-white group-hover:text-[hsl(195,85%,50%)] transition-colors ${size === "lg" ? "text-[20px]" : "text-[17px]"}`}>{p.name}</p>
      <p className={`text-[hsl(195,85%,50%)] ${size === "lg" ? "text-[15px]" : "text-[13px]"}`}>{p.role}</p>
      {p.local && <span className="mt-1 text-[12px] text-[hsl(170,60%,45%)]">🇨🇦 Canadian</span>}
    </a>
  );

  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-24">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">Our Team</p>
        <h2 className="text-[48px] font-bold text-white">
          Leadership & Advisors
          <span className="ml-4 inline-flex items-center gap-2 rounded-full bg-[hsl(170,60%,45%)/15] px-4 py-1 text-[18px] text-[hsl(170,60%,45%)]">
            <MapPin className="h-4 w-4" /> = Canadian connections
          </span>
        </h2>
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
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 10 — Track Record (Brief)
   ══════════════════════════════════════════════════════ */
function TrackRecordSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-40">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">Track Record</p>
        <h2 className="text-[48px] font-bold text-white">Proven Experience</h2>
        <div className="mt-12 grid max-w-[1400px] grid-cols-2 gap-12">
          <div className="flex gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-10">
            <img src={bryanDuarte} alt="Bryan Duarte" className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-[hsl(195,85%,35%)/30]" />
            <div>
              <p className="text-[24px] font-semibold text-white">Bryan Duarte</p>
              <p className="mt-1 text-[16px] text-[hsl(195,85%,50%)]">Managing Partner</p>
              <p className="mt-4 text-[18px] leading-relaxed text-white/60">
                5x Entrepreneur, 3 Exits (8x and 10x EBITDA). 30+ years energy. CleanTech EIR, Techstars advisor.
              </p>
            </div>
          </div>
          <div className="flex gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-10">
            <img src={keyonaMeeks} alt="Keyona Meeks" className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-[hsl(195,85%,35%)/30]" />
            <div>
              <p className="text-[24px] font-semibold text-white">Keyona Meeks</p>
              <p className="mt-1 text-[16px] text-[hsl(195,85%,50%)]">General Partner</p>
              <p className="mt-4 text-[18px] leading-relaxed text-white/60">
                10 deal attributions at Bronze Valley. wildwonder (Inc. 5000 #109), Brevity ($2M), Grovara ($8.75M). SXSW Judge.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 rounded-xl bg-[hsl(195,85%,35%)/10] px-8 py-5 max-w-[1400px]">
          <p className="text-[20px] text-white/80">🏆 WEF (UpLink) Top Innovative Fund selection 2022</p>
        </div>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 11 — Partnership Vision / CTA
   ══════════════════════════════════════════════════════ */
function PartnershipCTASlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col items-center justify-center bg-[hsl(210,40%,6%)] px-40 text-center">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute -bottom-1/3 -right-1/4 h-[700px] w-[700px] rounded-full bg-[hsl(170,60%,35%)] blur-[200px]" />
          <div className="absolute -top-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-[hsl(195,85%,35%)] blur-[180px]" />
        </div>
        <div className="relative z-10 mb-10 rounded-2xl bg-white/95 px-8 py-5 shadow-[0_8px_40px_-8px_hsl(195,85%,35%/0.25)]">
          <img src={logo} alt="BlackTech Capital" className="h-12" />
        </div>
        <h2 className="relative z-10 text-[56px] font-bold text-white">
          Let's Build This{" "}
          <span className="bg-gradient-to-r from-[hsl(170,60%,45%)] to-[hsl(200,75%,50%)] bg-clip-text text-transparent">
            Together
          </span>
        </h2>
        <p className="relative z-10 mt-6 max-w-[800px] text-[24px] text-white/60">
          Not "invest in us" — <span className="font-semibold text-white/80">partner with us</span> to prove that impact investing
          works when it's collaborative, equitable, and built for the market.
        </p>
        <div className="relative z-10 mt-12 flex items-center gap-6">
          <a
            href="mailto:info@blacktechcapital.com"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-3 rounded-xl border border-[hsl(170,60%,45%)/30] bg-[hsl(170,60%,45%)/10] px-8 py-5 text-[22px] text-white hover:bg-[hsl(170,60%,45%)/20] transition-colors"
          >
            <ArrowUpRight className="h-6 w-6 text-[hsl(170,60%,45%)]" />
            info@blacktechcapital.com
          </a>
        </div>
        <div className="relative z-10 mt-10 flex gap-8 text-[18px] text-white/40">
          <span>Equitable</span>
          <span>·</span>
          <span>Connected</span>
          <span>·</span>
          <span>Sustainable</span>
          <span>·</span>
          <span className="text-[hsl(170,60%,45%)]">Thriving People</span>
        </div>
        <p className="relative z-10 mt-10 text-[16px] tracking-widest text-white/30">CONFIDENTIAL · FOR QUALIFIED INVESTORS ONLY</p>
      </div>
    </ScaledSlide>
  );
}

/* ── Main Deck Component ── */
const slides = [
  TitleSlide,              // 1  — BlackTech Capital × WRCF
  SharedValuesSlide,       // 2  — Shared Values (6 values mapped)
  MissionAlignmentSlide,   // 3  — Mission Alignment Framework (Venn)
  HowWeWorkSlide,          // 4  — How We Work (Mars + Serenity case studies)
  AlreadyBuildingSlide,    // 5  — Already Building Together
  WaterlooCommitmentSlide, // 6  — Waterloo Region Commitment
  DealAdvantageSlide,      // 7  — Why We Win Deals Others Can't
  FundOverviewSlide,       // 8  — Fund Overview (condensed)
  TeamSlide,               // 9  — Team & Canadian Connections
  TrackRecordSlide,        // 10 — Track Record
  PartnershipCTASlide,     // 11 — Let's Build This Together
];

export default function WRCFDeck() {
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
      else if (e.key === "Escape") navigate("/");
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
              className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-[hsl(170,60%,45%)]" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>
        <button onClick={() => go(1)} disabled={current === slides.length - 1} className="text-white/60 hover:text-white disabled:opacity-30 transition-opacity">
          <ArrowRight className="h-5 w-5" />
        </button>
        <span className="ml-2 text-[13px] text-white/40">{current + 1}/{slides.length}</span>
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
        onClick={() => navigate("/")}
        className="absolute top-5 right-5 z-50 rounded-full border border-white/10 bg-black/40 p-2 text-white/50 backdrop-blur hover:text-white transition-colors"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}
