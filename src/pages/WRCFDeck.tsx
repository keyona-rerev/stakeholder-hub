import { useState, useEffect, useCallback, useRef } from "react";

const LOGO = "https://res.cloudinary.com/dialhpycd/image/upload/v1772833511/BTC_Logo_with_text_-_Transparent_Background_-_Large_finf66.png";

const TEAM = {
  bryan: "https://res.cloudinary.com/dialhpycd/image/upload/v1767978687/Bryan_Duarte_n5onyy.jpg",
  keyona: "https://res.cloudinary.com/dialhpycd/image/upload/v1767978686/Keyona_Meeks_oowrn6.jpg",
  allison: "https://res.cloudinary.com/dialhpycd/image/upload/v1767979162/Allison_Gibson_l28nks.png",
  watson: "https://res.cloudinary.com/dialhpycd/image/upload/v1767977694/Bryan_Watson_zufkqk.jpg",
  john: "https://res.cloudinary.com/dialhpycd/image/upload/v1767977694/John_Nicholson_rdy7gi.jpg",
  melissa: "https://res.cloudinary.com/dialhpycd/image/upload/v1767977693/Melissa_Allen_w5tvpk.jpg",
  lindsey: "https://res.cloudinary.com/dialhpycd/image/upload/v1767977351/Lindsey_Motlow_v1jfan.jpg",
  marlon: "https://res.cloudinary.com/dialhpycd/image/upload/v1767977383/Marlon_Thompson_x8owxa.jpg",
  nicholas: "https://res.cloudinary.com/dialhpycd/image/upload/v1767977424/Nicholas_Parker_iffwhl.jpg",
  jade: "https://res.cloudinary.com/dialhpycd/image/upload/v1770137638/Jade_Lockard_c0lqyt.jpg",
};

const TOTAL = 10;
const THEMES: Array<"dark" | "light" | "teal"> = [
  "dark", "light", "light", "dark", "light", "teal", "dark", "light", "dark", "dark",
];

export default function WRCFDeck() {
  const [cur, setCur] = useState(0);
  const touchRef = useRef<number | null>(null);

  const go = useCallback((d: number) => setCur(c => Math.max(0, Math.min(TOTAL - 1, c + d))), []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); go(1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [go]);

  const theme = THEMES[cur];
  const navColor = theme === "dark" ? "#f0ede6" : "#0c1410";
  const dotActive = theme === "teal" ? "#0c1410" : "#2ec4b6";

  return (
    <>
      <style>{CSS_TEXT}</style>
      <div
        className="wrcf-deck"
        onTouchStart={e => { touchRef.current = e.touches[0].clientX; }}
        onTouchEnd={e => {
          if (touchRef.current === null) return;
          const diff = touchRef.current - e.changedTouches[0].clientX;
          if (Math.abs(diff) > 50) go(diff > 0 ? 1 : -1);
          touchRef.current = null;
        }}
      >
        <Slide idx={0} cur={cur}><SlideCover /></Slide>
        <Slide idx={1} cur={cur}><SlideValues /></Slide>
        <Slide idx={2} cur={cur}><SlideVenn /></Slide>
        <Slide idx={3} cur={cur}><SlideCaseStudies /></Slide>
        <Slide idx={4} cur={cur}><SlideStats /></Slide>
        <Slide idx={5} cur={cur}><SlidePledge /></Slide>
        <Slide idx={6} cur={cur}><SlideFundTerms /></Slide>
        <Slide idx={7} cur={cur}><SlideTeam /></Slide>
        <Slide idx={8} cur={cur}><SlideTrackRecord /></Slide>
        <Slide idx={9} cur={cur}><SlideCTA /></Slide>

        <div className="wrcf-nav">
          <div className="wrcf-dots">
            {Array.from({ length: TOTAL }, (_, i) => (
              <button
                key={i}
                onClick={() => setCur(i)}
                className="wrcf-dot"
                style={{
                  background: i === cur ? dotActive : navColor,
                  opacity: i === cur ? 1 : 0.2,
                  transform: i === cur ? "scale(1.5)" : "scale(1)",
                }}
              />
            ))}
          </div>
          <div className="wrcf-arrows">
            <button onClick={() => go(-1)} style={{ color: navColor, opacity: cur === 0 ? 0.2 : 0.6 }}>←</button>
            <span className="wrcf-counter" style={{ color: navColor }}>{cur + 1} / {TOTAL}</span>
            <button onClick={() => go(1)} style={{ color: navColor, opacity: cur === TOTAL - 1 ? 0.2 : 0.6 }}>→</button>
          </div>
        </div>
      </div>
    </>
  );
}

function Slide({ idx, cur, children }: { idx: number; cur: number; children: React.ReactNode }) {
  const active = idx === cur;
  const theme = THEMES[idx];
  const bg =
    idx === 0 ? "#0c1410" :
    idx === 5 ? "#2ec4b6" :
    idx === 9 ? "#0c1410" :
    theme === "dark" ? "#0c1410" : "#f0ede6";

  const extraBg =
    idx === 0 ? "radial-gradient(ellipse 90% 70% at 50% 110%, rgba(46,196,182,0.13) 0%, transparent 60%)" :
    idx === 9 ? "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(46,196,182,0.14) 0%, transparent 55%)" :
    undefined;

  return (
    <div
      className={`wrcf-slide ${active ? "active" : ""}`}
      style={{
        backgroundColor: bg,
        backgroundImage: extraBg,
        color: theme === "dark" ? "#f0ede6" : "#0c1410",
      }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="up wrcf-eyebrow">{children}</div>;
}
function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="up wrcf-h2" dangerouslySetInnerHTML={{ __html: children as string }} />;
}
function TealRule() {
  return <div className="up" style={{ width: 36, height: 1.5, background: "#2ec4b6", opacity: 0.7, borderRadius: 1 }} />;
}
function TeamPhoto({ src, size = 54 }: { src: string; size?: number }) {
  return (
    <img
      src={src}
      alt=""
      style={{
        width: size, height: size, borderRadius: "50%", objectFit: "cover",
        border: "1.5px solid rgba(46,196,182,0.35)",
      }}
    />
  );
}

function SlideCover() {
  return (
    <div className="wrcf-center">
      <img src={LOGO} alt="BlackTech Capital" className="up" style={{ height: 56, objectFit: "contain" }} />
      <div className="up" style={{ display: "flex", alignItems: "baseline", gap: "0.6rem", flexWrap: "wrap", justifyContent: "center" }}>
        <span className="wrcf-title-name">BlackTech Capital</span>
        <span style={{ fontFamily: "var(--f-serif)", fontWeight: 300, fontSize: "3rem", color: "#2ec4b6", opacity: 0.6 }}>×</span>
        <span className="wrcf-title-name" style={{ color: "#2ec4b6" }}>WRCF</span>
      </div>
      <TealRule />
      <p className="up" style={{ fontFamily: "var(--f-body)", fontWeight: 300, fontSize: "clamp(0.85rem, 1.1vw, 1.1rem)", opacity: 0.38, textAlign: "center", maxWidth: "38ch" }}>
        A partnership for equitable, sustainable impact in Waterloo Region and beyond.
      </p>
      <span className="up" style={{ fontFamily: "var(--f-mono)", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.16, marginTop: "3vh" }}>
        CONFIDENTIAL · 2026
      </span>
    </div>
  );
}

const VALUES = [
  { icon: "⬡", title: "Equity-Centred", p1: "Capital for", p2: "the overlooked" },
  { icon: "◎", title: "Approachable", p1: "$10K opens", p2: "the door" },
  { icon: "◇", title: "Accountable", p1: "7% hurdle.", p2: "OSC-licensed." },
  { icon: "✦", title: "Catalytic", p1: "First cheques.", p2: "Unlocks follow-on." },
  { icon: "⟡", title: "Collaborative", p1: "Intros are our", p2: "#1 priority" },
  { icon: "◉", title: "Impactful", p1: "Real outcomes,", p2: "not dashboards" },
];
function SlideValues() {
  return (
    <div className="wrcf-left">
      <Eyebrow>Strategic Fit</Eyebrow>
      <H2>{`We Already Speak <em>the Same Language</em>`}</H2>
      <div className="up wrcf-values-grid">
        {VALUES.map((v, i) => (
          <div key={i} className="wrcf-value-cell">
            <span style={{ fontSize: "1.2rem" }}>{v.icon}</span>
            <span style={{ fontFamily: "var(--f-body)", fontWeight: 500, fontSize: "0.88rem" }}>{v.title}</span>
            <span style={{ fontFamily: "var(--f-serif)", fontWeight: 300, fontStyle: "italic", fontSize: "1.1rem", opacity: 0.5 }}>
              {v.p1}<br />{v.p2}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideVenn() {
  return (
    <div className="wrcf-center">
      <Eyebrow>Mission Alignment</Eyebrow>
      <svg viewBox="0 0 580 500" style={{ width: "min(580px, 70vw)", height: "auto", marginTop: "2vh" }} className="up">
        <circle cx="290" cy="175" r="158" fill="rgba(46,196,182,0.09)" stroke="rgba(46,196,182,0.45)" strokeWidth="1.5" />
        <circle cx="180" cy="355" r="158" fill="rgba(46,196,182,0.06)" stroke="rgba(46,196,182,0.28)" strokeWidth="1.5" />
        <circle cx="400" cy="355" r="158" fill="rgba(46,196,182,0.06)" stroke="rgba(46,196,182,0.28)" strokeWidth="1.5" />
        <circle cx="290" cy="292" r="54" fill="rgba(46,196,182,0.22)" stroke="rgba(46,196,182,0.55)" strokeWidth="1.5" />
        <text x="290" y="48" textAnchor="middle" fontFamily="var(--f-serif)" fontStyle="italic" fontSize="26" fill="#2ec4b6">Equitable</text>
        <text x="290" y="76" textAnchor="middle" fontFamily="var(--f-body)" fontSize="13" fill="rgba(12,20,16,0.42)">Racial equity · $10K LP · Fair founder terms</text>
        <text x="108" y="462" textAnchor="middle" fontFamily="var(--f-serif)" fontStyle="italic" fontSize="24" fill="rgba(12,20,16,0.65)">Sustainable</text>
        <text x="108" y="486" textAnchor="middle" fontFamily="var(--f-body)" fontSize="12" fill="rgba(12,20,16,0.42)">ClimateTech only · Carbon drawdown</text>
        <text x="472" y="462" textAnchor="middle" fontFamily="var(--f-serif)" fontStyle="italic" fontSize="24" fill="rgba(12,20,16,0.65)">Connected</text>
        <text x="472" y="486" textAnchor="middle" fontFamily="var(--f-body)" fontSize="12" fill="rgba(12,20,16,0.42)">Investor intros · Canada–US pipeline</text>
        <text x="290" y="287" textAnchor="middle" fontFamily="var(--f-serif)" fontWeight="300" fontSize="14" fill="rgba(12,20,16,0.75)">Thriving</text>
        <text x="290" y="305" textAnchor="middle" fontFamily="var(--f-serif)" fontWeight="300" fontSize="14" fill="rgba(12,20,16,0.75)">People</text>
      </svg>
    </div>
  );
}

function SlideCaseStudies() {
  return (
    <div className="wrcf-left">
      <Eyebrow>Impact &amp; Credibility</Eyebrow>
      <H2>{`How We <em>Actually Work</em>`}</H2>
      <div className="up wrcf-cards-2col">
        <CaseCard
          tag="PORTFOLIO CO. 01"
          name="Mars Materials"
          bullets={[
            "First cheque in — conviction before consensus",
            "Strategic intros to close their round",
            "Cleaner & cheaper acrylonitrile supply chains",
            "Gigatons of carbon drawdown potential",
          ]}
          footer="MARKET INNOVATION, NOT ESG COMPLIANCE"
        />
        <CaseCard
          tag="PORTFOLIO CO. 02"
          name="Serenity Power"
          bullets={[
            "Got into a deal others couldn't access",
            "Founders chose us — trust earned, not bought",
            "Active support: intros, strategy, round completion",
            "Clean energy access for underserved markets",
          ]}
          footer="STRUCTURAL SOURCING ADVANTAGE"
        />
      </div>
    </div>
  );
}
function CaseCard({ tag, name, bullets, footer }: { tag: string; name: string; bullets: string[]; footer: string }) {
  return (
    <div className="wrcf-case-card">
      <span style={{ fontFamily: "var(--f-mono)", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.3 }}>{tag}</span>
      <h3 style={{ fontFamily: "var(--f-serif)", fontWeight: 300, fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)", margin: "0.8rem 0" }}>{name}</h3>
      <ul className="wrcf-bullet-list">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "0.8rem", marginTop: "auto" }}>
        <span style={{ fontFamily: "var(--f-mono)", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.15em", opacity: 0.22 }}>{footer}</span>
      </div>
    </div>
  );
}

function SlideStats() {
  return (
    <div className="wrcf-center">
      <Eyebrow>Structural Advantage</Eyebrow>
      <H2>{`We Get Into Deals <em>Others Can't</em>`}</H2>
      <div className="up wrcf-stats-grid">
        <StatBlock num="<1%" label="of VC to Black founders" desc="We see deals others miss — because founders see us first." />
        <StatBlock num="<6%" label="of VC to women-led teams" desc="Half the planet's talent, systematically underfunded. Market inefficiency = opportunity." />
      </div>
      <p className="up" style={{ fontFamily: "var(--f-serif)", fontStyle: "italic", fontSize: "1.1rem", opacity: 0.38, marginTop: "2.5vh" }}>
        That's not a talking point — it's a sourcing advantage.
      </p>
    </div>
  );
}
function StatBlock({ num, label, desc }: { num: string; label: string; desc: string }) {
  return (
    <div className="wrcf-stat-block">
      <span style={{ fontFamily: "var(--f-serif)", fontWeight: 300, fontSize: "clamp(4rem, 7.5vw, 7.5rem)", color: "#2ec4b6", lineHeight: 1, letterSpacing: "-0.03em" }}>{num}</span>
      <span style={{ fontFamily: "var(--f-mono)", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.18em", opacity: 0.35 }}>{label}</span>
      <span style={{ fontFamily: "var(--f-body)", fontWeight: 300, fontSize: "0.85rem", opacity: 0.45, maxWidth: "22ch" }}>{desc}</span>
    </div>
  );
}

function SlidePledge() {
  return (
    <div className="wrcf-center" style={{ position: "relative" }}>
      <div className="wrcf-ghost-1">1</div>
      <Eyebrow>Regional Engagement</Eyebrow>
      <h2 className="up" style={{ fontFamily: "var(--f-serif)", fontWeight: 300, fontSize: "clamp(1.9rem, 3.4vw, 3.4rem)", lineHeight: 1.15, textAlign: "center", position: "relative", zIndex: 1 }}>
        We commit to investing in<br /><strong style={{ fontWeight: 600 }}>at least one</strong><br />Waterloo Region company.
      </h2>
      <div className="up wrcf-pledge-row">
        {[
          { icon: "🔗", label: "Joint sourcing pipeline" },
          { icon: "📋", label: "Regular deal flow reporting" },
          { icon: "🤝", label: "Collaborative founder evaluation" },
          { icon: "📅", label: "Quarterly touchpoints" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
            <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
            <span style={{ fontFamily: "var(--f-body)", fontWeight: 500, fontSize: "0.8rem", opacity: 0.6, textAlign: "center", maxWidth: "13ch" }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const TERMS = [
  { key: "Fund Size", value: "$500K – $2M", teal: true },
  { key: "Investments", value: "6 Pre-Seed", sub: "Canadian ClimateTech companies" },
  { key: "Check Size", value: "$50K – $250K" },
  { key: "LP Minimum", value: "$10K", teal: true },
  { key: "Carry / Hurdle", value: "20% / 7%" },
  { key: "Fund Life", value: "10 + 2 ext.", sub: "Deploying 2026" },
];
function SlideFundTerms() {
  return (
    <div className="wrcf-left">
      <Eyebrow>Fund Details</Eyebrow>
      <H2>{`<em>Catalyst Fund</em> — Key Terms`}</H2>
      <div className="up wrcf-terms-grid">
        {TERMS.map((t, i) => (
          <div key={i} className="wrcf-term-cell">
            <span style={{ fontFamily: "var(--f-mono)", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.3 }}>{t.key}</span>
            <span style={{ fontFamily: "var(--f-serif)", fontWeight: 300, fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)", color: t.teal ? "#2ec4b6" : undefined }}>{t.value}</span>
            {t.sub && <span style={{ fontFamily: "var(--f-body)", fontWeight: 300, fontSize: "0.75rem", opacity: 0.3 }}>{t.sub}</span>}
          </div>
        ))}
      </div>
      <p className="up" style={{ fontFamily: "var(--f-body)", fontWeight: 300, fontSize: "0.78rem", opacity: 0.28, marginTop: "2vh" }}>
        🌿 Equivesto partnership saves $185K–$460K over fund life vs. traditional admin
      </p>
    </div>
  );
}

function SlideTeam() {
  return (
    <div className="wrcf-left">
      <Eyebrow>Our Team</Eyebrow>
      <H2>{`Leadership <em>& Advisors</em>`}</H2>
      <div className="up wrcf-team-layout">
        <div className="wrcf-team-section" style={{ flexShrink: 0 }}>
          <span className="wrcf-team-label">EXECUTIVE</span>
          <div style={{ display: "flex", gap: "2rem" }}>
            <PersonCard name="Bryan Duarte" role="Managing Partner" photo={TEAM.bryan} size={76} flag="🇨🇦 Canadian" />
            <PersonCard name="Keyona Meeks" role="General Partner" photo={TEAM.keyona} size={76} />
          </div>
        </div>
        <div style={{ width: 1, background: "rgba(0,0,0,0.1)", alignSelf: "stretch" }} />
        <div style={{ flex: 1, display: "flex", gap: "3vw" }}>
          <div className="wrcf-team-section">
            <span className="wrcf-team-label">INVESTMENT COMMITTEE</span>
            <div className="wrcf-team-wrap">
              <PersonCard name="Allison Gibson" role="Inv. Readiness" photo={TEAM.allison} />
              <PersonCard name="Bryan Watson" role="CleanTech" photo={TEAM.watson} flag="🇨🇦" />
              <PersonCard name="John Nicholson" role="Environmental" photo={TEAM.john} />
              <PersonCard name="Melissa Allen" role="Finance" photo={TEAM.melissa} />
            </div>
          </div>
          <div className="wrcf-team-section">
            <span className="wrcf-team-label">ADVISORY COMMITTEE</span>
            <div className="wrcf-team-wrap">
              <PersonCard name="Lindsey Motlow" role="Energy Research" photo={TEAM.lindsey} />
              <PersonCard name="Marlon Thompson" role="Founder/Investor" photo={TEAM.marlon} />
              <PersonCard name="Nicholas Parker" role="Cleantech Pioneer" photo={TEAM.nicholas} flag="🇨🇦" />
              <PersonCard name="Jade Lockard" role="Fundraising" photo={TEAM.jade} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function PersonCard({ name, role, photo, size = 54, flag }: { name: string; role: string; photo: string; size?: number; flag?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem" }}>
      <TeamPhoto src={photo} size={size} />
      <span style={{ fontFamily: "var(--f-body)", fontWeight: 500, fontSize: "0.78rem", textAlign: "center" }}>{name}</span>
      <span style={{ fontFamily: "var(--f-body)", fontSize: "0.68rem", color: "#2ec4b6", textAlign: "center" }}>{role}</span>
      {flag && <span style={{ fontFamily: "var(--f-mono)", fontSize: "0.6rem", opacity: 0.5 }}>{flag}</span>}
    </div>
  );
}

function SlideTrackRecord() {
  return (
    <div className="wrcf-left" style={{ alignItems: "center" }}>
      <Eyebrow>Track Record</Eyebrow>
      <H2>{`<em>Proven</em> Experience`}</H2>
      <div className="up wrcf-cards-2col" style={{ maxWidth: 900 }}>
        <div className="wrcf-case-card">
          <h3 style={{ fontFamily: "var(--f-serif)", fontWeight: 300, fontSize: "2rem" }}>Bryan Duarte</h3>
          <span style={{ fontFamily: "var(--f-body)", fontSize: "0.72rem", color: "#2ec4b6", opacity: 0.8, marginBottom: "1rem", display: "block" }}>Managing Partner</span>
          <ul className="wrcf-dash-list">
            <li>5x Entrepreneur · 3 Exits (8x &amp; 10x EBITDA)</li>
            <li>30+ years energy industry experience</li>
            <li>CleanTech EIR · Techstars advisor</li>
          </ul>
        </div>
        <div className="wrcf-case-card">
          <h3 style={{ fontFamily: "var(--f-serif)", fontWeight: 300, fontSize: "2rem" }}>Keyona Meeks</h3>
          <span style={{ fontFamily: "var(--f-body)", fontSize: "0.72rem", color: "#2ec4b6", opacity: 0.8, marginBottom: "1rem", display: "block" }}>General Partner</span>
          <ul className="wrcf-dash-list">
            <li>10 deal attributions at Bronze Valley — top accelerator for underrepresented founders</li>
            <li>wildwonder (Inc. 5000 #109) · Brevity ($2M) · Grovara ($8.75M)</li>
            <li>SXSW Judge · Founder, ReRev Labs</li>
          </ul>
        </div>
      </div>
      <p className="up" style={{ fontFamily: "var(--f-body)", fontWeight: 300, fontSize: "0.8rem", opacity: 0.3, marginTop: "2vh" }}>
        🏆 WEF (UpLink) Top Innovative Fund — 2022
      </p>
    </div>
  );
}

function SlideCTA() {
  return (
    <div className="wrcf-center">
      <img src={LOGO} alt="BlackTech Capital" className="up" style={{ height: 56, objectFit: "contain" }} />
      <h1 className="up wrcf-h1" dangerouslySetInnerHTML={{ __html: `Let's Build This <em>Together</em>` }} />
      <TealRule />
      <p className="up" style={{ fontFamily: "var(--f-body)", fontWeight: 300, fontSize: "1rem", opacity: 0.45 }}>
        Not "invest in us" — <strong style={{ opacity: 1 }}>partner with us.</strong>
      </p>
      <a
        href="mailto:info@blacktechcapital.com"
        className="up"
        style={{
          fontFamily: "var(--f-mono)", fontSize: "1rem", color: "#2ec4b6", letterSpacing: "0.08em",
          border: "1px solid rgba(46,196,182,0.3)", padding: "0.85rem 2rem", textDecoration: "none",
        }}
      >
        info@blacktechcapital.com
      </a>
      <div className="up" style={{ display: "flex", gap: "2rem", fontFamily: "var(--f-mono)", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.2 }}>
        <span>Equitable</span>
        <span>Connected</span>
        <span>Sustainable</span>
        <span style={{ color: "#2ec4b6", opacity: 1 }}>Thriving People</span>
      </div>
      <span className="up" style={{ fontFamily: "var(--f-mono)", fontSize: 9, letterSpacing: "0.2em", opacity: 0.14, marginTop: "3vh" }}>
        CONFIDENTIAL · FOR QUALIFIED INVESTORS ONLY
      </span>
    </div>
  );
}

const CSS_TEXT = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Mono&family=DM+Sans:wght@300;400;500&display=swap');

:root {
  --f-serif: 'Cormorant Garamond', Georgia, serif;
  --f-body: 'DM Sans', system-ui, sans-serif;
  --f-mono: 'DM Mono', monospace;
}

.wrcf-deck {
  position: fixed; inset: 0; overflow: hidden;
  background: #0c1410;
  font-family: var(--f-body);
}

.wrcf-slide {
  position: absolute; inset: 0;
  padding: 5vh 7vw;
  display: flex; flex-direction: column;
  justify-content: center; align-items: center;
  opacity: 0; pointer-events: none;
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.wrcf-slide.active { opacity: 1; pointer-events: auto; }

@keyframes wrcf-up {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
.wrcf-slide .up {
  opacity: 0; transform: translateY(18px);
}
.wrcf-slide.active .up {
  animation: wrcf-up 0.5s cubic-bezier(0.2, 0, 0, 1) forwards;
}
.wrcf-slide.active .up:nth-child(1) { animation-delay: 0.05s; }
.wrcf-slide.active .up:nth-child(2) { animation-delay: 0.12s; }
.wrcf-slide.active .up:nth-child(3) { animation-delay: 0.19s; }
.wrcf-slide.active .up:nth-child(4) { animation-delay: 0.26s; }
.wrcf-slide.active .up:nth-child(5) { animation-delay: 0.33s; }
.wrcf-slide.active .up:nth-child(6) { animation-delay: 0.40s; }
.wrcf-slide.active .up:nth-child(7) { animation-delay: 0.47s; }

.wrcf-h1 {
  font-family: var(--f-serif); font-weight: 300;
  font-size: clamp(3rem, 7vw, 6.5rem);
  line-height: 0.95; letter-spacing: -0.02em;
  text-align: center;
}
.wrcf-h1 em, .wrcf-h2 em { font-style: italic; color: #2ec4b6; }

.wrcf-h2 {
  font-family: var(--f-serif); font-weight: 300;
  font-size: clamp(1.9rem, 4vw, 3.6rem);
  line-height: 1.05; letter-spacing: -0.015em;
}

.wrcf-eyebrow {
  font-family: var(--f-mono); font-size: 10px;
  letter-spacing: 0.25em; text-transform: uppercase;
  opacity: 0.35; margin-bottom: 1.2vh;
}

.wrcf-center { display: flex; flex-direction: column; align-items: center; gap: 1.8vh; width: 100%; }
.wrcf-left { display: flex; flex-direction: column; align-items: flex-start; gap: 1.8vh; width: 100%; }

.wrcf-values-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px; background: rgba(0,0,0,0.12);
  width: 100%; max-width: 900px; margin-top: 1.5vh;
}
.wrcf-value-cell {
  background: #f0ede6; padding: 1.8rem;
  display: flex; flex-direction: column; gap: 0.5rem;
}

.wrcf-cards-2col {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 2px; width: 100%; margin-top: 1vh;
}
.wrcf-case-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  padding: 2.2rem;
  display: flex; flex-direction: column;
}
.wrcf-bullet-list {
  list-style: none; padding: 0; margin: 0 0 1rem 0;
  font-family: var(--f-body); font-weight: 300;
  font-size: 0.88rem; opacity: 0.5; line-height: 1.55;
}
.wrcf-bullet-list li {
  padding-left: 1rem; position: relative; margin-bottom: 0.4rem;
}
.wrcf-bullet-list li::before {
  content: ''; position: absolute; left: 0; top: 0.55em;
  width: 4px; height: 4px; border-radius: 50%;
  background: #2ec4b6; opacity: 0.6;
}
.wrcf-dash-list {
  list-style: none; padding: 0; margin: 0;
  font-family: var(--f-body); font-weight: 300;
  font-size: 0.88rem; opacity: 0.5; line-height: 1.55;
}
.wrcf-dash-list li {
  padding-left: 1.2rem; position: relative; margin-bottom: 0.4rem;
}
.wrcf-dash-list li::before {
  content: '\\2014'; position: absolute; left: 0;
  color: #2ec4b6; opacity: 0.4;
}

.wrcf-stats-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 2px; max-width: 780px; width: 100%; margin-top: 1vh;
}
.wrcf-stat-block {
  background: rgba(0,0,0,0.05); padding: 2.8rem 2.2rem;
  display: flex; flex-direction: column; gap: 0.4rem;
}

.wrcf-ghost-1 {
  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--f-serif); font-weight: 300;
  font-size: clamp(10rem, 22vw, 22rem);
  color: rgba(12,20,16,0.1);
  pointer-events: none; user-select: none;
  line-height: 1;
}
.wrcf-pledge-row {
  display: flex; gap: 3rem; margin-top: 3vh;
  position: relative; z-index: 1;
}

.wrcf-terms-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 2px; max-width: 1000px; width: 100%; margin-top: 1vh;
}
.wrcf-term-cell {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  padding: 1.8rem 1.6rem;
  display: flex; flex-direction: column; gap: 0.3rem;
}

.wrcf-team-layout {
  display: flex; gap: 4vw; width: 100%; margin-top: 1vh;
  align-items: flex-start;
}
.wrcf-team-section { display: flex; flex-direction: column; gap: 1rem; }
.wrcf-team-label {
  font-family: var(--f-mono); font-size: 9px;
  text-transform: uppercase; letter-spacing: 0.2em; opacity: 0.3;
}
.wrcf-team-wrap {
  display: flex; flex-wrap: wrap; gap: 1.5rem;
}

.wrcf-nav {
  position: fixed; bottom: 2vh; left: 0; right: 0;
  display: flex; flex-direction: column; align-items: center;
  gap: 1vh; z-index: 100; pointer-events: none;
}
.wrcf-dots {
  display: flex; gap: 8px; pointer-events: auto;
}
.wrcf-dot {
  width: 7px; height: 7px; border-radius: 50%;
  border: none; padding: 0; cursor: pointer;
  transition: all 0.3s ease;
}
.wrcf-arrows {
  display: flex; align-items: center; gap: 1rem;
  pointer-events: auto;
}
.wrcf-arrows button {
  background: none; border: none; font-size: 1.2rem;
  cursor: pointer; padding: 0.3rem;
  font-family: var(--f-body);
}
.wrcf-counter {
  font-family: var(--f-mono); font-size: 11px;
  letter-spacing: 0.1em; opacity: 0.5;
}

.wrcf-title-name {
  font-family: var(--f-serif); font-weight: 300;
  font-size: clamp(2.5rem, 5.5vw, 5.5rem);
  line-height: 1; letter-spacing: -0.02em;
}
`;
