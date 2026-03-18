import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ArrowRight, X, ChevronRight, CheckCircle2, XCircle,
  TrendingUp, Mail, Download, AlertTriangle, Shield, Megaphone,
  Building2, Scale, Leaf, Users, Handshake, Target, Rocket, Gem
} from "lucide-react";

import logo from "@/assets/logo.png";
import marsLogo from "@/assets/mars-materials-logo.webp";
import serenityLogo from "@/assets/serenity-power-logo.png";
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
   SLIDE 1 — Title
   ══════════════════════════════════════════════════════ */
function TitleSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col items-center justify-center bg-[hsl(210,40%,6%)] px-40 text-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-1/3 -right-1/4 h-[800px] w-[800px] rounded-full bg-[hsl(195,85%,35%)] blur-[200px]" />
          <div className="absolute -bottom-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-[hsl(200,75%,30%)] blur-[180px]" />
        </div>
        <div className="relative z-10 mb-12 rounded-2xl bg-white/95 px-10 py-6 shadow-[0_8px_40px_-8px_hsl(195,85%,35%/0.25)]">
          <img src={logo} alt="BlackTech Capital" className="h-16" />
        </div>
        <h1 className="relative z-10 text-[72px] font-bold leading-tight tracking-tight text-white">
          Investing at the Intersection of{" "}
          <span className="bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(170,60%,45%)] bg-clip-text text-transparent">
            Impact & Market
          </span>
        </h1>
        <p className="relative z-10 mt-6 max-w-[900px] text-[28px] leading-relaxed text-white/70">
          Building sustainable impact through market-aligned architecture.
        </p>
        <div className="relative z-10 mt-12 h-1 w-32 rounded-full bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(170,60%,45%)]" />
        <p className="relative z-10 mt-6 text-[18px] tracking-widest text-white/40">CONFIDENTIAL · 2026</p>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 2 — The Fragility of Impact (merged Landscape + Fragility)
   ══════════════════════════════════════════════════════ */
function FragilitySlide() {
  const pillars = [
    {
      icon: <Scale className="h-8 w-8" />,
      label: "Regulation",
      stat: "180°",
      statLabel: "Policy reversals per cycle",
      body: "Impact-driven policies change with every new administration. What's mandated today is rolled back tomorrow.",
      example: "Canada - Consumer carbon price repealed, USA - Paris Agreement withdrawal, ESG disclosure rollbacks",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      label: "Corporate Pledges",
      stat: "40%+",
      statLabel: "DEI & sustainability cuts (2023–24)",
      body: "Companies make commitments when convenient and abandon them when margins tighten or boards turn over.",
      example: "2025 - Canadian Securities Administrators pause new mandatory climate and DEI disclosures, Fortune 500 DEI budget cuts, abandoned net-zero timelines",
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      label: "PR-Driven Impact",
      stat: "68%",
      statLabel: "ESG funds underperformed in 2023",
      body: "When impact was never core to the business model, it's the first line item cut under pressure.",
      example: "Corporate sustainability team layoffs, abandoned diversity targets, greenwashing scandals",
    },
  ];

  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-40">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(38,80%,55%)]">
          The Problem
        </p>
        <h2 className="max-w-[1200px] text-[52px] font-bold leading-[1.15] text-white">
          Impact built on goodwill is{" "}
          <span className="text-[hsl(38,80%,55%)]">fragile by design</span>
        </h2>
        <p className="mt-4 max-w-[1000px] text-[22px] text-white/60">
          Regulations shift with administrations. Corporate pledges are seasonal. Boards drop ESG when it's inconvenient. None of these foundations are stable.
        </p>
        <div className="mt-12 grid max-w-[1500px] grid-cols-3 gap-10">
          {pillars.map((p) => (
            <div key={p.label} className="relative overflow-hidden rounded-2xl border border-[hsl(38,80%,55%)/20] bg-[hsl(38,80%,55%)/5] p-8">
              <div className="absolute top-4 right-4 opacity-10">
                <AlertTriangle className="h-16 w-16 text-[hsl(38,80%,55%)]" />
              </div>
              <div className="text-[hsl(38,80%,55%)]">{p.icon}</div>
              <h3 className="mt-4 text-[22px] font-semibold text-white">{p.label}</h3>
              <p className="mt-2 text-[18px] leading-relaxed text-white/60">{p.body}</p>
              <p className="mt-5 text-[44px] font-bold text-[hsl(38,80%,55%)]">{p.stat}</p>
              <p className="text-[15px] text-white/40">{p.statLabel}</p>
              <p className="mt-4 border-t border-white/10 pt-3 text-[14px] italic text-white/35">{p.example}</p>
            </div>
          ))}
        </div>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 3 — The Architecture Principle (core thesis)
   ══════════════════════════════════════════════════════ */
function ArchitectureSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col items-center justify-center bg-[hsl(210,40%,6%)] px-40 text-center">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/3 h-[600px] w-[600px] rounded-full bg-[hsl(195,85%,35%)] blur-[200px]" />
        </div>
        <Shield className="relative z-10 h-16 w-16 text-[hsl(195,85%,50%)]" />
        <h2 className="relative z-10 mt-8 max-w-[1200px] text-[56px] font-bold leading-[1.15] text-white">
          Impact initiatives must be built for{" "}
          <span className="bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(170,60%,45%)] bg-clip-text text-transparent">
            market-driven success
          </span>{" "}
          from the start
        </h2>
        <div className="relative z-10 mt-10 h-1 w-32 rounded-full bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(170,60%,45%)]" />
        <p className="relative z-10 mt-8 max-w-[950px] text-[26px] leading-relaxed text-white/60">
          When market incentives and impact outcomes are aligned, even actors
          without your values are incentivized to sustain the work. That's how you build something genuinely unstoppable.
        </p>
        <div className="relative z-10 mt-12 grid max-w-[1200px] grid-cols-2 gap-8">
          <div className="rounded-2xl border border-[hsl(38,80%,55%)/20] bg-[hsl(38,80%,55%)/5] p-8 text-left">
            <p className="text-[14px] font-semibold uppercase tracking-widest text-[hsl(38,80%,55%)]">Goodwill-Dependent Impact</p>
            <p className="mt-3 text-[20px] text-white/50">Survives only as long as champions remain. Fragile to political cycles, leadership changes, and market pressure.</p>
          </div>
          <div className="rounded-2xl border border-[hsl(195,85%,35%)/30] bg-[hsl(195,85%,35%)/5] p-8 text-left">
            <p className="text-[14px] font-semibold uppercase tracking-widest text-[hsl(195,85%,50%)]">Market-Aligned Impact</p>
            <p className="mt-3 text-[20px] text-white/70">Self-sustaining. Everyone — allies and non-allies — is incentivized to maintain it because it drives market success.</p>
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 4 — Values × Equality Fund Alignment
   ══════════════════════════════════════════════════════ */
function ValuesAlignmentSlide() {
  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Integrity",
      alignment: "Aligned with Equality Fund's commitment to transparent, accountable stewardship of funds it deploys",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Inclusion",
      alignment: "Aligned with Equality Fund's intersectional approach — merging investment with policy, advocacy, and philanthropy for gender equity",
    },
    {
      icon: <Handshake className="h-8 w-8" />,
      title: "Collaboration",
      alignment: "Aligned with Equality Fund's people-powered movement model — backing organizations for long-term systemic change",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Impact",
      alignment: "Aligned with Equality Fund's measurable mandate — specifically aligned on climate resilience and gender equality",
    },
  ];

  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-40">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">
          Our Values × Equality Fund Alignment
        </p>
        <h2 className="max-w-[1200px] text-[52px] font-bold leading-[1.15] text-white">
          This isn't philanthropy. It's performance,{" "}
          <span className="text-[hsl(195,85%,50%)]">powered by purpose.</span>
        </h2>
        <div className="mt-12 grid max-w-[1500px] grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 flex flex-col gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(195,85%,35%)/10]">
                <div className="text-[hsl(195,85%,50%)]">{v.icon}</div>
              </div>
              <h3 className="text-[24px] font-semibold text-white">{v.title}</h3>
              <p className="mt-auto text-[15px] leading-relaxed text-[hsl(195,85%,50%)]/70">{v.alignment}</p>
            </div>
          ))}
        </div>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 4 — Why Venture Capital
   ══════════════════════════════════════════════════════ */
function WhyVCSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-40">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">
          Why Venture Capital
        </p>
        <h2 className="max-w-[1200px] text-[52px] font-bold leading-[1.15] text-white">
          The asset class built for{" "}
          <span className="text-[hsl(195,85%,50%)]">outsized returns & alignment</span>
        </h2>
        <p className="mt-4 max-w-[1000px] text-[22px] text-white/60">
          We chose venture capital explicitly because it manufactures exactly the architecture we're describing — when you're smart about it, it works.
        </p>
        <div className="mt-12 grid max-w-[1500px] grid-cols-2 gap-8">
          <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <Rocket className="mt-1 h-8 w-8 shrink-0 text-[hsl(195,85%,50%)]" />
            <div>
              <h3 className="text-[22px] font-semibold text-white">Outsized Returns</h3>
              <p className="mt-2 text-[18px] leading-relaxed text-white/60">
                The market data shows serious innovation potential in climate and energy. Technology is constantly being developed — it's waiting for the right person at the right time. Our job is to find them.
              </p>
            </div>
          </div>
          <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <Handshake className="mt-1 h-8 w-8 shrink-0 text-[hsl(195,85%,50%)]" />
            <div>
              <h3 className="text-[22px] font-semibold text-white">Natural Alignment</h3>
              <p className="mt-2 text-[18px] leading-relaxed text-white/60">
                Impact isn't just in the product — it's in how terms are structured. Equitable terms mean founders do what they do best: grow the company. We empower them to do so.
              </p>
            </div>
          </div>
          <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <Users className="mt-1 h-8 w-8 shrink-0 text-[hsl(195,85%,50%)]" />
            <div>
              <h3 className="text-[22px] font-semibold text-white">Founder Empowerment</h3>
              <p className="mt-2 text-[18px] leading-relaxed text-white/60">
                Venture is a powerful vehicle because the founder gets to do what they're best at — building and scaling — while we provide the capital, network, and strategic support to accelerate their success.
              </p>
            </div>
          </div>
          <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <Gem className="mt-1 h-8 w-8 shrink-0 text-[hsl(195,85%,50%)]" />
            <div>
              <h3 className="text-[22px] font-semibold text-white">Equitable Structure</h3>
              <p className="mt-2 text-[18px] leading-relaxed text-white/60">
                VC as an asset class, when done right, creates genuine win-win outcomes. The incentive structure ensures that supporting founders isn't charity — it's the highest-return strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 5 — The Market Gap
   ══════════════════════════════════════════════════════ */
function MarketGapSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-40">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">The Market Opportunity</p>
        <h2 className="max-w-[1200px] text-[52px] font-bold leading-[1.15] text-white">
          Half the planet is{" "}
          <span className="text-[hsl(195,85%,50%)]">systematically underfunded</span>
        </h2>
        <p className="mt-4 max-w-[1000px] text-[22px] text-white/60">
          Women and people of color represent the majority of the global population. The funding gap isn't a social problem — it's a market inefficiency.
        </p>
        <div className="mt-14 grid max-w-[1400px] grid-cols-3 gap-12">
          <div className="border-l-2 border-[hsl(195,85%,35%)/30] pl-8">
            <p className="text-[56px] font-bold text-[hsl(195,85%,50%)]">&lt;1%</p>
            <p className="mt-2 text-[22px] leading-relaxed text-white/60">of venture funding goes to Black founders in 2025</p>
          </div>
          <div className="border-l-2 border-[hsl(195,85%,35%)/30] pl-8">
            <p className="text-[56px] font-bold text-[hsl(195,85%,50%)]">&lt;2%</p>
            <p className="mt-2 text-[22px] leading-relaxed text-white/60">of VC funding goes to women-led teams</p>
          </div>
          <div className="border-l-2 border-[hsl(195,85%,35%)/30] pl-8">
            <p className="text-[56px] font-bold text-[hsl(195,85%,50%)]">Pre-Seed</p>
            <p className="mt-2 text-[22px] leading-relaxed text-white/60">is the most underserved stage — where impact begins</p>
          </div>
        </div>
        <div className="mt-12 rounded-xl bg-[hsl(195,85%,35%)/10] px-8 py-6 max-w-[1400px]">
          <p className="text-[21px] text-white/80">
            The only thing separating these founders from world-changing success — in dollars <span className="italic">and</span> in carbon drawdown — isn't the strength of their ideas or the precision of the market opportunity.{" "}
            <span className="font-semibold text-white">It's their ability to access private finance networks.</span>
          </p>
        </div>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 6 — What We Look For (Investment Criteria)
   ══════════════════════════════════════════════════════ */
function CriteriaSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-40">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">
          Investment Criteria
        </p>
        <h2 className="max-w-[1200px] text-[52px] font-bold leading-[1.15] text-white">
          We invest in <span className="text-[hsl(195,85%,50%)]">market innovations</span>,
          not corporate compliance tools
        </h2>
        <p className="mt-4 max-w-[1000px] text-[22px] text-white/60">
          It's not just about thesis fit. Every investment starts with three non-negotiables — because market-aligned impact demands genuine technical and commercial substance.
        </p>
        <div className="mt-12 grid max-w-[1500px] grid-cols-3 gap-10">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10">
            <Target className="h-8 w-8 text-[hsl(195,85%,50%)]" />
            <h3 className="mt-5 text-[22px] font-semibold text-white">Technically Brilliant Team</h3>
            <p className="mt-3 text-[18px] leading-relaxed text-white/60">
              Deep domain expertise. The kind of founders who understand the science and the market — not just the pitch.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10">
            <TrendingUp className="h-8 w-8 text-[hsl(195,85%,50%)]" />
            <h3 className="mt-5 text-[22px] font-semibold text-white">Substantial Market Innovation</h3>
            <p className="mt-3 text-[18px] leading-relaxed text-white/60">
              We don't invest in ESG dashboards — those are subject to corporate pledges and regulations that change. We invest in innovations that create irreversible market value.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10">
            <Leaf className="h-8 w-8 text-[hsl(195,85%,50%)]" />
            <h3 className="mt-5 text-[22px] font-semibold text-white">Architecture Principle Alignment</h3>
            <p className="mt-3 text-[18px] leading-relaxed text-white/60">
              The impact must be embedded in the business model — inseparable from the company's commercial success.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-xl border border-[hsl(195,85%,35%)/20] bg-[hsl(195,85%,35%)/5] px-8 py-6 max-w-[1500px]">
          <p className="text-[14px] font-semibold uppercase tracking-widest text-[hsl(195,85%,50%)] mb-2">Case Study: Mars Materials</p>
          <p className="text-[19px] text-white/70">
            Our first investment. Making supply chains that use acrylonitrile both{" "}
            <span className="font-semibold text-white">more affordable and cleaner</span>. Potentially{" "}
            <span className="font-semibold text-white">gigatons of carbon drawdown</span>{" "}
            throughout their stakeholder network. That's market-aligned impact at scale.
          </p>
        </div>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 7 — Impact Metrics
   ══════════════════════════════════════════════════════ */
function ImpactMetricsSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-40">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">
          Impact Metrics
        </p>
        <h2 className="max-w-[1200px] text-[52px] font-bold leading-[1.15] text-white">
          Measuring What{" "}
          <span className="italic text-[hsl(195,85%,50%)]">Matters</span>
        </h2>

        <div className="mt-12 grid max-w-[1400px] grid-cols-3 gap-[2px]">
          {/* Equity Impact Targets — FIRST */}
          <div className="rounded-l-2xl bg-white/[0.04] p-10 flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Equity Impact Targets
            </p>
            <div className="mt-2 flex flex-col gap-4">
              {[
                { label: "Women Founders", pct: "50%", highlight: true },
                { label: "BIPOC/Minority Founders", pct: "60%", highlight: false },
                { label: "Black Founders", pct: "40%", highlight: false },
                { label: "2SLGBTQ+ Founders", pct: "5%", highlight: false },
                { label: "Indigenous Founders", pct: "5%", highlight: false },
              ].map((r) => (
                <div
                  key={r.label}
                  className={`flex items-center justify-between border-b border-white/[0.06] pb-3 ${
                    r.highlight ? "rounded-lg bg-[hsl(195,85%,35%)/12] px-4 py-3 border-[hsl(195,85%,50%)/30] border" : ""
                  }`}
                >
                  <span className={`text-[15px] ${r.highlight ? "font-semibold text-white" : "text-white/60"}`}>
                    {r.label}
                  </span>
                  <span className={`font-bold text-[hsl(195,85%,50%)] ${r.highlight ? "text-[24px]" : "text-[20px]"}`}>
                    {r.pct}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* GHG Reduction Targets — SECOND */}
          <div className="bg-white/[0.04] p-10 flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
              GHG Reduction Targets
            </p>
            <div className="mt-2 flex flex-col gap-4">
              {[
                { year: "Year 3", val: "2 MMT CO₂e" },
                { year: "Year 5", val: "10 MMT CO₂e" },
                { year: "Year 7 (2033)", val: "25 MMT CO₂e" },
                { year: "Year 10 (2036)", val: "50 MMT CO₂e" },
                { year: "2050 Projection", val: "1,500 MMT (1.5 GT) CO₂e", note: "Cumulative" },
              ].map((r) => (
                <div key={r.year} className="flex items-baseline justify-between border-b border-white/[0.06] pb-3">
                  <span className="text-[15px] text-white/60">{r.year}</span>
                  <div className="text-right">
                    <span className={`font-bold text-[hsl(170,60%,45%)] ${r.note ? "text-[17px]" : "text-[20px]"}`}>
                      {r.val}
                    </span>
                    {r.note && (
                      <span className="block text-[9px] uppercase tracking-widest text-white/40">{r.note}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Metrics Tracked */}
          <div className="rounded-r-2xl bg-white/[0.04] p-10 flex flex-col gap-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
              Other Metrics Tracked
            </p>
            <div className="mt-2 flex flex-col gap-5">
              {[
                { icon: "💧", label: "Litres of Water Conserved / Saved" },
                { icon: "♻️", label: "Metric Tonnes of Waste Diverted" },
                { icon: "🌿", label: "Metric Tonnes of Plastic Removed / Reduced / Replaced" },
                { icon: "🛡️", label: "Kg of Toxins Eliminated" },
              ].map((r) => (
                <div key={r.label} className="flex items-center gap-4">
                  <span className="text-[18px]">{r.icon}</span>
                  <span className="text-[15px] leading-snug text-white/70">{r.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-auto text-[9px] uppercase tracking-widest text-white/30">
              No specific targets — tracked as portfolio develops
            </p>
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 12 — Our Primary Strategy (Investor Introductions)
   ══════════════════════════════════════════════════════ */
function StrategyIntrosSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-40">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">
          Our Primary Strategy
        </p>
        <h2 className="max-w-[1200px] text-[52px] font-bold leading-[1.15] text-white">
          We help founders{" "}
          <span className="text-[hsl(195,85%,50%)]">finish raising their rounds</span>
        </h2>
        <p className="mt-4 max-w-[1000px] text-[22px] text-white/60">
          Investor introductions are our top priority when working with the most promising founders on the market. We take this seriously because we know the numbers.
        </p>
        <div className="mt-12 flex gap-10 max-w-[1500px]">
          <div className="flex-1 space-y-6">
            <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <Handshake className="mt-1 h-7 w-7 shrink-0 text-[hsl(195,85%,50%)]" />
              <div>
                <h3 className="text-[22px] font-semibold text-white">Strategic Investor Introductions</h3>
                <p className="mt-2 text-[18px] leading-relaxed text-white/60">
                  We actively connect our portfolio founders with aligned investors, accelerators, and strategic partners to help them close their rounds.
                </p>
              </div>
            </div>
            <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <Users className="mt-1 h-7 w-7 shrink-0 text-[hsl(195,85%,50%)]" />
              <div>
                <h3 className="text-[22px] font-semibold text-white">Network-First Approach</h3>
                <p className="mt-2 text-[18px] leading-relaxed text-white/60">
                  Venture capital itself isn't broken — when you're smart about it, it works. The gap is access. We bridge it.
                </p>
              </div>
            </div>
            <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <CheckCircle2 className="mt-1 h-7 w-7 shrink-0 text-[hsl(195,85%,50%)]" />
              <div>
                <h3 className="text-[22px] font-semibold text-white">Pro-Rata Co-Investment</h3>
                <p className="mt-2 text-[18px] leading-relaxed text-white/60">
                  LP co-investment opportunities available for our strongest portfolio companies.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[480px] flex flex-col justify-center">
            <div className="rounded-2xl border border-[hsl(195,85%,35%)/20] bg-[hsl(195,85%,35%)/5] p-10">
              <p className="text-[16px] font-semibold uppercase tracking-widest text-[hsl(195,85%,50%)] mb-6">Why This Matters</p>
              <p className="text-[20px] leading-relaxed text-white/70">
                These founders have the ideas, the technical brilliance, and the market opportunity. What they lack is access to private finance networks.
              </p>
              <p className="mt-6 text-[20px] leading-relaxed text-white/70">
                We have a real bias towards action — when we find the right founders, we don't just write a check. We{" "}
                <span className="font-semibold text-white">open every door we can.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
}


function ImpactCredibilitySlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-40">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">
          Impact &amp; Credibility
        </p>
        <h2 className="max-w-[1200px] text-[52px] font-bold leading-[1.15] text-white mb-12">
          How We <span className="text-[hsl(195,85%,50%)]">Actually Work</span>
        </h2>
        <div className="flex gap-10 max-w-[1500px]">
          {/* Case Study 1 */}
          <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-10 flex flex-col">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-3">Investment Co. 01</p>
            <div className="flex items-center gap-4 mb-6">
              <img src={marsLogo} alt="Mars Materials" className="h-9 object-contain" />
              <a href="https://www.marsmaterials.tech/" target="_blank" rel="noopener noreferrer" className="text-[32px] font-bold text-white hover:text-[hsl(195,85%,50%)] transition-colors underline">Mars Materials</a>
            </div>
            <ul className="space-y-3 text-[18px] text-white/70 leading-relaxed flex-1">
              {[
                "Impact Mission – Remove or Abate 1-3 GigaTons of CO₂ by 2050",
                <>Backed by Bill Gates' <a href="/breakthrough-energy-redirect.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-[hsl(195,85%,50%)] transition-colors" onClick={(e) => e.stopPropagation()}>Breakthrough Energy</a></>,
                <><span>$11 billion beachhead market with Global Leader </span><a href="https://www.snf.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[hsl(195,85%,50%)] transition-colors">SNF</a></>,
                "BTC – One of the first cheques in 2022 – conviction before consensus",
                "Strategic introductions to close their round",
              ].map((b, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[hsl(195,85%,50%)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">Market Innovation, Not ESG Compliance</p>
            </div>
          </div>
          {/* Case Study 2 */}
          <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-10 flex flex-col">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-3">Investment Co. 02</p>
            <div className="flex items-center gap-4 mb-6">
              <img src={serenityLogo} alt="Serenity Power" className="h-9 object-contain" />
              <a href="https://www.serenitypower.ca/" target="_blank" rel="noopener noreferrer" className="text-[32px] font-bold text-white hover:text-[hsl(195,85%,50%)] transition-colors underline">Serenity Power</a>
            </div>
            <ul className="space-y-3 text-[18px] text-white/70 leading-relaxed flex-1">
              {[
                <><a href="https://www.youtube.com/shorts/pWPf4NIzh5w" target="_blank" rel="noopener noreferrer" className="underline hover:text-[hsl(195,85%,50%)] transition-colors" onClick={(e) => e.stopPropagation()}>Women-led</a> CleanTech startup</>,
                <>Advanced <a href="https://upnext.world/why-replacing-diesel-cant-wait/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[hsl(195,85%,50%)] transition-colors" onClick={(e) => e.stopPropagation()}>Solid Oxide Fuel Cells</a> delivering zero emissions</>,
                "Impact Mission – 8,000+ Tons of CO₂ avoided ANNUALLY",
                "Holding the last allocation into their pre-seed round just for BTC",
                "Founders Choose us based on earned trust, not us buying our way in",
              ].map((b, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[hsl(195,85%,50%)]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/40">Structural Sourcing Advantage</p>
            </div>
          </div>
        </div>
        <p className="mt-6 text-[13px] text-white/30 text-center">Click on the hyperlinks above to learn more about these companies</p>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 8 — Why ClimateTech
   ══════════════════════════════════════════════════════ */
function WhyClimateTechSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-40">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">
          Why ClimateTech
        </p>
        <h2 className="max-w-[1100px] text-[52px] font-bold leading-[1.15] text-white">
          Where market and impact alignment is{" "}
          <span className="text-[hsl(195,85%,50%)]">strongest</span>
        </h2>
        <p className="mt-4 max-w-[900px] text-[22px] text-white/60">
          A plethora of technology is constantly being developed in climate and energy. It's our job to find the right people and determine if it's the right time.
        </p>
        <div className="mt-14 grid max-w-[1400px] grid-cols-4 gap-8">
          {[
            { value: "$150B", label: "ClimateTech VC market projected by 2032" },
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
        <div className="mt-10 rounded-xl bg-[hsl(195,85%,35%)/10] px-8 py-5 max-w-[1400px]">
          <p className="text-[20px] text-white/70">
            <Leaf className="mr-2 inline h-5 w-5 text-[hsl(170,60%,45%)]" />
            ClimateTech companies don't just do good — they <span className="font-semibold text-white">capture massive markets</span>. That's the architecture principle in action.
          </p>
        </div>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 9 — Fund Strategy (Fund I pause → Catalyst)
   ══════════════════════════════════════════════════════ */
function FundStrategySlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col justify-center bg-[hsl(210,40%,6%)] px-40">
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">Fund Strategy</p>
        <h2 className="text-[52px] font-bold text-white">
          Strategic Momentum, <span className="text-[hsl(195,85%,50%)]">Deliberate Execution</span>
        </h2>
        <p className="mt-4 max-w-[1400px] text-[22px] text-white/60 whitespace-nowrap">
          Building momentum and a track record via the Catalyst Fund — deploying fully in 2026.
        </p>
        <div className="mt-14 max-w-[1000px]">
          <div className="relative rounded-2xl border-2 border-[hsl(195,85%,35%)/40] bg-[hsl(195,85%,35%)/5] p-10">
            <div className="absolute -top-px -right-px rounded-bl-xl rounded-tr-2xl bg-gradient-to-r from-[hsl(200,75%,50%)] to-[hsl(170,60%,45%)] px-5 py-1.5 text-[14px] font-bold text-white">
              DEPLOYING 2026
            </div>
            <h3 className="text-[36px] font-bold text-[hsl(195,85%,50%)]">Catalyst Fund</h3>
            <div className="mt-8 space-y-4">
              {[
                "Target $2M Fund Size",
                "6 Pre-Seed investments – first 4 identified",
                "Next 2 investments WILL be with women led teams",
                "Accessible LP minimum ($10k) – Opens up opportunities for diverse investors",
                "Canadian Geographic focus",
                "Equivesto partnership for LP trust and Capital Efficiency",
                "10 year fund life with 2% Mgmt Fee and 20% Carry (7% Hurdle Rate)",
              ].map((item) => {
                const isHighlight = item.includes("WILL be with");
                return (
                  <p key={item} className={`flex items-center gap-3 text-[20px] ${isHighlight ? "font-bold text-[hsl(195,85%,50%)] bg-[hsl(195,85%,50%)/10] -mx-4 px-4 py-2 rounded-lg" : "text-white/80"}`}>
                    <CheckCircle2 className={`h-5 w-5 shrink-0 ${isHighlight ? "text-[hsl(170,60%,45%)]" : "text-[hsl(195,85%,50%)]"}`} />
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 10 — Catalyst Fund Overview (Key Terms)
   ══════════════════════════════════════════════════════ */
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
        <p className="mb-4 text-[16px] font-semibold uppercase tracking-[0.2em] text-[hsl(195,85%,50%)]">Catalyst Fund</p>
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

/* ══════════════════════════════════════════════════════
   SLIDE 11 — Equivesto
   ══════════════════════════════════════════════════════ */
function EquivestoSlide() {
  const services = [
    { name: "KYP Due Diligence", eq: true, trad: false },
    { name: "Marketing & Compliance", eq: true, trad: false },
    { name: "KYC Investor Onboarding", eq: true, trad: "partial" as const },
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

/* ══════════════════════════════════════════════════════
   SLIDE 12 — Team & Advisors
   ══════════════════════════════════════════════════════ */
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

/* ══════════════════════════════════════════════════════
   SLIDE 13 — Track Record
   ══════════════════════════════════════════════════════ */
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
                5x Entrepreneur with 3 Exits (8x and 10x EBITDA). 30+ years energy industry. 10+ years in CleanTech/Sustainability. CleanTech EIR/Advisor - Altitude Accelerator, Foresight Canada, Black Founders Network, University of Toronto Entrepreneurship.
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
              <p className="mt-3 text-[18px] leading-relaxed text-white/60">
                Mentored 100+ startup founders across 3 continents.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 rounded-xl bg-[hsl(195,85%,35%)/10] px-8 py-5 max-w-[1400px]">
          <p className="text-[20px] text-white/80">🏆 <a href="https://www.youtube.com/watch?v=16lywelqOmg" target="_blank" rel="noopener noreferrer" className="underline hover:text-[hsl(195,85%,50%)] transition-colors">WEF (UpLink) Top Innovative Fund selection 2022</a></p>
          <p className="mt-3 text-[14px] text-white/40">Click on hyperlink above to watch the YouTube announcement</p>
        </div>
      </div>
    </ScaledSlide>
  );
}

/* ══════════════════════════════════════════════════════
   SLIDE 14 — Contact / CTA
   ══════════════════════════════════════════════════════ */
function ContactSlide() {
  return (
    <ScaledSlide>
      <div className="flex h-full flex-col items-center justify-center bg-[hsl(210,40%,6%)] px-40 text-center">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute -bottom-1/3 -right-1/4 h-[700px] w-[700px] rounded-full bg-[hsl(195,85%,35%)] blur-[200px]" />
        </div>
        <div className="relative z-10 mb-10 rounded-2xl bg-white/95 px-8 py-5 shadow-[0_8px_40px_-8px_hsl(195,85%,35%/0.25)]">
          <img src={logo} alt="BlackTech Capital" className="h-12" />
        </div>
        <h2 className="relative z-10 text-[56px] font-bold text-white">Partner With Us</h2>
        <p className="relative z-10 mt-6 max-w-[750px] text-[24px] text-white/60">
          Join us in building impact that's architected for permanence — not dependent on the next election, the next board meeting, or the next news cycle.
        </p>
        <div className="relative z-10 mt-12 flex flex-col items-start gap-4">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-8 py-5">
            <Mail className="h-6 w-6 text-[hsl(195,85%,50%)]" />
            <span className="text-[22px] text-white">Bryan Duarte - bduarte@blacktechcapital.com</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-8 py-5">
            <Mail className="h-6 w-6 text-[hsl(195,85%,50%)]" />
            <span className="text-[22px] text-white">Keyona Meeks - kmeeks@blacktechcapital.com</span>
          </div>
        </div>
        <p className="relative z-10 mt-16 text-[16px] tracking-widest text-white/30">CONFIDENTIAL · FOR QUALIFIED INVESTORS ONLY</p>
      </div>
    </ScaledSlide>
  );
}

/* ── Main Deck Component ── */
const slides = [
  TitleSlide,              // 1  — Title
  FragilitySlide,          // 2  — The Problem: Impact built on goodwill is fragile
  ArchitectureSlide,       // 3  — The Architecture Principle (core thesis)
  ValuesAlignmentSlide,    // 4  — Values × Equality Fund Alignment
  TeamSlide,               // 5  — Team & Advisors
  TrackRecordSlide,        // 6  — Track Record
  WhyVCSlide,              // 7  — Why Venture Capital as the asset class
  MarketGapSlide,          // 8  — The Market Opportunity (funding gap)
  WhyClimateTechSlide,     // 9  — Why ClimateTech (market data)
  ImpactMetricsSlide,      // 10 — Impact Metrics
  CriteriaSlide,           // 11 — Investment Criteria + Mars Materials
  StrategyIntrosSlide,     // 12 — Our Primary Strategy (Investor Introductions)
  ImpactCredibilitySlide,  // 13 — Impact & Credibility (Case Studies)
  FundStrategySlide,       // 14 — Fund Strategy (Fund I pause → Catalyst)
  EquivestoSlide,          // 15 — The Equivesto Partnership
  ContactSlide,            // 16 — Contact / CTA
];

export default function EqualityFundDeck() {
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
              className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-[hsl(195,85%,50%)]" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
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
