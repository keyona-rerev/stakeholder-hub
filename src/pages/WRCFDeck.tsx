import { useState, useEffect, useCallback, useRef } from "react";
import bgRain from "@/assets/bg-rain.jpg";
import bgOcean from "@/assets/bg-ocean.jpg";
import bgIce from "@/assets/bg-ice.jpg";
import bgFlamingo from "@/assets/bg-flamingo.jpg";
import marsLogo from "@/assets/mars-materials-logo.webp";
import serenityLogo from "@/assets/serenity-power-logo.png";

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

const TOTAL = 13;
const THEMES: Array<"dark" | "light" | "teal"> = [
  "dark", "dark", "light", "light", "dark", "dark", "light", "light", "teal", "dark", "light", "dark", "dark",
];

const SLIDE_IMAGES: Array<string | null> = [
  bgOcean, bgRain, null, bgFlamingo, bgRain, bgFlamingo, bgIce, null, null, bgOcean, null, bgRain, bgOcean,
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
        <Slide idx={1} cur={cur}><SlideThesis /></Slide>
        <Slide idx={2} cur={cur}><SlideValues /></Slide>
        <Slide idx={3} cur={cur}><SlideVenn /></Slide>
        <Slide idx={4} cur={cur}><SlideCaseStudies /></Slide>
        <Slide idx={5} cur={cur}><SlideMarketAligned /></Slide>
        <Slide idx={6} cur={cur}><SlideFounderSupport /></Slide>
        <Slide idx={7} cur={cur}><SlideStats /></Slide>
        <Slide idx={8} cur={cur}><SlidePledge /></Slide>
        <Slide idx={9} cur={cur}><SlideFundTerms /></Slide>
        <Slide idx={10} cur={cur}><SlideTeam /></Slide>
        <Slide idx={11} cur={cur}><SlideTrackRecord /></Slide>
        <Slide idx={12} cur={cur}><SlideCTA /></Slide>

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

/* ── Slide wrapper with optional blurred bg image ── */
function Slide({ idx, cur, children }: { idx: number; cur: number; children: React.ReactNode }) {
  const active = idx === cur;
  const theme = THEMES[idx];
  const bgImage = SLIDE_IMAGES[idx];

  const baseBg =
    idx === 7 ? "#2ec4b6" :
    theme === "dark" ? "#0c1410" : "#f0ede6";

  const overlay =
    idx === 7 ? "rgba(46,196,182,0.92)" :
    theme === "dark" ? "rgba(12,20,16,0.78)" :
    "rgba(240,237,230,0.85)";

  return (
    <div
      className={`wrcf-slide ${active ? "active" : ""}`}
      style={{
        backgroundColor: baseBg,
        color: theme === "dark" ? "#f0ede6" : "#0c1410",
      }}
    >
      {bgImage && (
        <>
          <div className="wrcf-bg-image" style={{ backgroundImage: `url(${bgImage})` }} />
          <div className="wrcf-bg-overlay" style={{ background: overlay }} />
        </>
      )}
      {!bgImage && (idx === 0 || idx === 12) && (
        <div className="wrcf-bg-overlay" style={{
          background: idx === 0
            ? "radial-gradient(ellipse 90% 70% at 50% 110%, rgba(46,196,182,0.13) 0%, transparent 60%)"
            : "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(46,196,182,0.14) 0%, transparent 55%)",
        }} />
      )}
      <div className="wrcf-slide-content">
        {children}
      </div>
    </div>
  );
}

/* ── Icons (replacing emojis) ── */
function Icon({ type, size = 20, color = "#2ec4b6" }: { type: string; size?: number; color?: string }) {
  const s = { width: size, height: size, flexShrink: 0 };
  switch (type) {
    case "link":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      );
    case "clipboard":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" />
        </svg>
      );
    case "handshake":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 17l-1.5 1.5a2.12 2.12 0 0 1-3 0 2.12 2.12 0 0 1 0-3L8 14" />
          <path d="M16 8l1.5-1.5a2.12 2.12 0 0 1 3 0 2.12 2.12 0 0 1 0 3L19 11" />
          <path d="M7 8l-2.5 2.5a2.12 2.12 0 0 0 0 3l.5.5" />
          <path d="M17 16l2.5-2.5a2.12 2.12 0 0 0 0-3l-.5-.5" />
          <path d="M3 21l3-3" /><path d="M21 3l-3 3" />
          <path d="M12 12l-3 3" /><path d="M15 9l-3 3" />
        </svg>
      );
    case "calendar":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case "leaf":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89-.82" />
          <path d="M6.5 12.5C8 9.5 11 7.5 17 8c1-5-4-7-4-7S5.5 3.5 6.5 12.5Z" />
        </svg>
      );
    case "trophy":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" /><path d="M10 22V14a2 2 0 0 1 4 0v8" />
          <path d="M6 4v6a6 6 0 0 0 12 0V4H6Z" />
        </svg>
      );
    case "shield":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "trending":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      );
    case "loop":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 1l4 4-4 4" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <path d="M7 23l-4-4 4-4" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
      );
    case "network":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3" />
          <circle cx="5" cy="19" r="3" />
          <circle cx="19" cy="19" r="3" />
          <line x1="12" y1="8" x2="5" y2="16" />
          <line x1="12" y1="8" x2="19" y2="16" />
        </svg>
      );
    case "target":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "rocket":
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    default:
      return null;
  }
}

/* ── Shared micro-components ── */
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

/* ── SLIDE 1: Cover ── */
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
      <p className="up" style={{ fontFamily: "var(--f-body)", fontWeight: 400, fontSize: "clamp(0.95rem, 1.2vw, 1.2rem)", opacity: 0.75, textAlign: "center", maxWidth: "38ch", color: "#f0ede6" }}>
        A partnership for equitable, sustainable impact in Waterloo Region and beyond.
      </p>
      <span className="up" style={{ fontFamily: "var(--f-mono)", fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", opacity: 0.16, marginTop: "3vh" }}>
        CONFIDENTIAL · 2026
      </span>
    </div>
  );
}

/* ── SLIDE 2: Thesis ── */
function SlideThesis() {
  const cols = [
    { title: "ClimateTech Focus", items: ["Clean Energy", "Sustainable Materials", "Carbon Tech", "Climate Adaptation"] },
    { title: "Pre-Seed Stage", items: ["First institutional check", "$50K–$250K investments", "Highest impact per dollar", "Portfolio of 6 companies"] },
    { title: "Canada Geography", items: ["Growing cleantech ecosystem", "Government incentive alignment", "Diverse founder talent pool", "Strategic market positioning"] },
  ];
  return (
    <div className="wrcf-left">
      <Eyebrow>Our Thesis</Eyebrow>
      <H2>{`Back underrepresented founders building <em>ClimateTech solutions</em> at the earliest stage`}</H2>
      <div className="up" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, width: "100%", maxWidth: 1000, marginTop: "2vh" }}>
        {cols.map((col, ci) => (
          <div key={ci} className="wrcf-glass-card" style={{ padding: "2rem" }}>
            <h3 style={{ fontFamily: "var(--f-serif)", fontWeight: 600, fontSize: "1.3rem", color: "#2ec4b6", marginBottom: "1.2rem" }}>{col.title}</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {col.items.map((item, ii) => (
                <li key={ii} style={{ fontFamily: "var(--f-body)", fontWeight: 400, fontSize: "0.92rem", opacity: 0.85, color: "#f0ede6", paddingLeft: "1.2rem", position: "relative", marginBottom: "0.6rem" }}>
                  <span style={{ position: "absolute", left: 0, color: "#2ec4b6", opacity: 0.6 }}>›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── SLIDE 3: Values ── */
const BTC_VALUES = [
  {
    icon: "shield" as const,
    title: "Integrity",
    desc: "We believe principled capital is the most powerful capital. Every decision is grounded in transparency and accountability.",
    wrcf: "Aligned with WRCF's commitment to ethical stewardship",
  },
  {
    icon: "network" as const,
    title: "Inclusion",
    desc: "We champion the equitable advancement of the teams and technologies that will define a sustainable future.",
    wrcf: "Aligned with WRCF's equity-centred grantmaking",
  },
  {
    icon: "handshake" as const,
    title: "Collaboration",
    desc: "Superior outcomes come from partnership — with founders, LPs, and community stakeholders working together.",
    wrcf: "Aligned with WRCF's collaborative community model",
  },
  {
    icon: "trending" as const,
    title: "Impact",
    desc: "Financial performance and tangible, positive impact are two sides of the same coin — not in tension.",
    wrcf: "Aligned with WRCF's measurable impact mandate",
  },
];
function SlideValues() {
  return (
    <div className="wrcf-left">
      <Eyebrow>Our Values × WRCF Alignment</Eyebrow>
      <H2>{`Principled Capital Is <em>the Most Powerful</em> Capital`}</H2>
      <p className="up" style={{
        fontFamily: "var(--f-body)", fontWeight: 400, fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)",
        lineHeight: 1.65, opacity: 0.75, maxWidth: "64ch",
      }}>
        Our investment philosophy is built on the conviction that the most defensible, high-return climate tech strategy is inherently ethical. Superior financial performance and tangible, positive impact are not in tension — they are two sides of the same coin.
      </p>
      <div className="up" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2, width: "100%", maxWidth: 1050, marginTop: "1.5vh" }}>
        {BTC_VALUES.map((v, i) => (
          <div key={i} style={{ background: "rgba(0,0,0,0.06)", padding: "1.8rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(46,196,182,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon type={v.icon} size={20} color="#2ec4b6" />
            </div>
            <span style={{ fontFamily: "var(--f-serif)", fontWeight: 600, fontSize: "1.2rem" }}>{v.title}</span>
            <span style={{ fontFamily: "var(--f-body)", fontWeight: 400, fontSize: "0.85rem", opacity: 0.75, lineHeight: 1.5 }}>{v.desc}</span>
            <span style={{ fontFamily: "var(--f-mono)", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.15em", color: "#2ec4b6", opacity: 0.7, marginTop: "auto" }}>{v.wrcf}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── SLIDE 3: Venn ── */
function SlideVenn() {
  return (
    <div className="wrcf-center">
      <Eyebrow>Mission Alignment</Eyebrow>
      <svg viewBox="0 0 580 540" style={{ width: "min(540px, 62vw)", height: "auto", marginTop: "1vh" }} className="up">
        <circle cx="290" cy="175" r="140" fill="rgba(46,196,182,0.09)" stroke="rgba(46,196,182,0.45)" strokeWidth="1.5" />
        <circle cx="195" cy="335" r="140" fill="rgba(46,196,182,0.06)" stroke="rgba(46,196,182,0.28)" strokeWidth="1.5" />
        <circle cx="385" cy="335" r="140" fill="rgba(46,196,182,0.06)" stroke="rgba(46,196,182,0.28)" strokeWidth="1.5" />
        <circle cx="290" cy="278" r="48" fill="rgba(46,196,182,0.22)" stroke="rgba(46,196,182,0.55)" strokeWidth="1.5" />
        <text x="290" y="55" textAnchor="middle" fontFamily="var(--f-serif)" fontWeight="600" fontSize="24" fill="#2ec4b6">Equitable</text>
        <text x="290" y="78" textAnchor="middle" fontFamily="var(--f-body)" fontSize="12" fill="rgba(12,20,16,0.6)">Racial equity · $10K LP · Fair founder terms</text>
        <text x="120" y="468" textAnchor="middle" fontFamily="var(--f-serif)" fontWeight="600" fontSize="22" fill="rgba(12,20,16,0.8)">Sustainable</text>
        <text x="120" y="490" textAnchor="middle" fontFamily="var(--f-body)" fontSize="11" fill="rgba(12,20,16,0.6)">ClimateTech only · Carbon drawdown</text>
        <text x="460" y="468" textAnchor="middle" fontFamily="var(--f-serif)" fontWeight="600" fontSize="22" fill="rgba(12,20,16,0.8)">Connected</text>
        <text x="460" y="490" textAnchor="middle" fontFamily="var(--f-body)" fontSize="11" fill="rgba(12,20,16,0.6)">Investor intros · Canada–US pipeline</text>
        <text x="290" y="273" textAnchor="middle" fontFamily="var(--f-serif)" fontWeight="400" fontSize="13" fill="rgba(12,20,16,0.85)">Thriving</text>
        <text x="290" y="290" textAnchor="middle" fontFamily="var(--f-serif)" fontWeight="400" fontSize="13" fill="rgba(12,20,16,0.85)">People</text>
      </svg>
    </div>
  );
}

/* ── SLIDE 4: Case Studies ── */
function SlideCaseStudies() {
  return (
    <div className="wrcf-left">
      <Eyebrow>Impact &amp; Credibility</Eyebrow>
      <H2>{`How We <em>Actually Work</em>`}</H2>
      <div className="up wrcf-cards-2col">
        <CaseCard
          tag="PORTFOLIO CO. 01"
          name="Mars Materials"
          logo={marsLogo}
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
          logo={serenityLogo}
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
function CaseCard({ tag, name, logo, bullets, footer }: { tag: string; name: string; logo?: string; bullets: string[]; footer: string }) {
  return (
    <div className="wrcf-case-card wrcf-glass-card">
      <span style={{ fontFamily: "var(--f-mono)", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.85, color: "#f0ede6" }}>{tag}</span>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "0.8rem 0" }}>
        {logo && <img src={logo} alt={name} style={{ height: 36, objectFit: "contain" }} />}
        <h3 style={{ fontFamily: "var(--f-serif)", fontWeight: 300, fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)", color: "#f0ede6" }}>{name}</h3>
      </div>
      <ul className="wrcf-bullet-list" style={{ color: "#f0ede6", opacity: 0.9 }}>
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "0.8rem", marginTop: "auto" }}>
        <span style={{ fontFamily: "var(--f-mono)", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.15em", opacity: 0.7, color: "#f0ede6" }}>{footer}</span>
      </div>
    </div>
  );
}

/* ── SLIDE 5: Market-Aligned Impact ── */
function SlideMarketAligned() {
  return (
    <div className="wrcf-center">
      <Eyebrow>Our Approach</Eyebrow>
      <H2>{`Impact That <em>Outlasts Us</em>`}</H2>
      <p className="up" style={{
        fontFamily: "var(--f-body)", fontWeight: 400, fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
        lineHeight: 1.65, opacity: 0.85, maxWidth: "52ch", textAlign: "center", color: "#f0ede6",
      }}>
        We architect every investment for market-driven success from day one. When impact is aligned with strong market outcomes, it doesn't depend on one fund, one cycle, or one champion — it sustains itself.
      </p>
      <div className="up" style={{ display: "flex", gap: "3.5rem", marginTop: "3vh" }}>
        {[
          { icon: "shield" as const, text: "Survives political cycles and regulatory shifts" },
          { icon: "trending" as const, text: "Every actor stays incentivized by market success" },
          { icon: "loop" as const, text: "Impact that compounds — not campaigns that expire" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.8rem", maxWidth: "18ch" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(46,196,182,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon type={item.icon} size={24} color="#2ec4b6" />
            </div>
            <span style={{ fontFamily: "var(--f-body)", fontWeight: 400, fontSize: "0.9rem", opacity: 0.85, textAlign: "center", color: "#f0ede6" }}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── SLIDE 6: Founder Support — Investor Introductions ── */
function SlideFounderSupport() {
  return (
    <div className="wrcf-center">
      <Eyebrow>Founder Support</Eyebrow>
      <H2>{`Introductions Are <em>Our Primary Job</em>`}</H2>
      <p className="up" style={{
        fontFamily: "var(--f-body)", fontWeight: 400, fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
        lineHeight: 1.65, opacity: 0.85, maxWidth: "52ch", textAlign: "center",
      }}>
        Underrepresented founders don't need operational coaching or technical hand-holding. They need fully raised rounds that get them where we already know they can go — which is why we invested in the first place.
      </p>
      <div className="up" style={{ display: "flex", gap: "3.5rem", marginTop: "3vh" }}>
        {[
          { icon: "network" as const, text: "Investor introductions to close rounds" },
          { icon: "target" as const, text: "Structurally aligned support, not generic mentorship" },
          { icon: "rocket" as const, text: "Founders succeed when capital flows — we make it flow" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.8rem", maxWidth: "18ch" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(46,196,182,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon type={item.icon} size={24} color="#2ec4b6" />
            </div>
            <span style={{ fontFamily: "var(--f-body)", fontWeight: 400, fontSize: "0.9rem", opacity: 0.85, textAlign: "center" }}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── SLIDE 7: Stats ── */
function SlideStats() {
  return (
    <div className="wrcf-center">
      <Eyebrow>Structural Advantage</Eyebrow>
      <H2>{`We Get Into Deals <em>Others Can't</em>`}</H2>
      <div className="up wrcf-stats-grid">
        <StatBlock num="<1%" label="of VC to Black founders" desc="We see deals others miss — because founders see us first." />
        <StatBlock num="<6%" label="of VC to women-led teams" desc="Half the planet's talent, systematically underfunded. Market inefficiency = opportunity." />
      </div>
      <p className="up" style={{ fontFamily: "var(--f-body)", fontWeight: 400, fontSize: "1.1rem", opacity: 0.7, marginTop: "2.5vh" }}>
        That's not a talking point — it's a sourcing advantage.
      </p>
    </div>
  );
}
function StatBlock({ num, label, desc }: { num: string; label: string; desc: string }) {
  return (
    <div className="wrcf-stat-block">
      <span style={{ fontFamily: "var(--f-serif)", fontWeight: 300, fontSize: "clamp(4rem, 7.5vw, 7.5rem)", color: "#2ec4b6", lineHeight: 1, letterSpacing: "-0.03em" }}>{num}</span>
      <span style={{ fontFamily: "var(--f-mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.18em", opacity: 0.6 }}>{label}</span>
      <span style={{ fontFamily: "var(--f-body)", fontWeight: 400, fontSize: "0.9rem", opacity: 0.7, maxWidth: "24ch" }}>{desc}</span>
    </div>
  );
}

/* ── SLIDE 8: Pledge ── */
function SlidePledge() {
  return (
    <div className="wrcf-center" style={{ position: "relative" }}>
      <Eyebrow>Regional Engagement</Eyebrow>
      <h2 className="up" style={{ fontFamily: "var(--f-serif)", fontWeight: 300, fontSize: "clamp(1.9rem, 3.4vw, 3.4rem)", lineHeight: 1.15, textAlign: "center", position: "relative", zIndex: 1 }}>
        We commit to investing in<br /><strong style={{ fontWeight: 600 }}>at least one</strong><br />Waterloo Region company.
      </h2>
      <div className="up wrcf-pledge-row">
        {[
          { icon: "link" as const, label: "Joint sourcing pipeline", color: "#0c1410" },
          { icon: "clipboard" as const, label: "Regular deal flow reporting", color: "#1a5c54" },
          { icon: "handshake" as const, label: "Collaborative founder evaluation", color: "#0c1410" },
          { icon: "calendar" as const, label: "Quarterly touchpoints", color: "#1a5c54" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
            <div style={{ width: 42, height: 42, borderRadius: "50%", background: "rgba(12,20,16,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon type={item.icon} size={20} color={item.color} />
            </div>
            <span style={{ fontFamily: "var(--f-body)", fontWeight: 500, fontSize: "0.85rem", opacity: 0.85, textAlign: "center", maxWidth: "13ch", color: "#0c1410" }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── SLIDE 9: Fund Terms ── */
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
          <div key={i} className="wrcf-term-cell wrcf-glass-card">
            <span style={{ fontFamily: "var(--f-mono)", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.45 }}>{t.key}</span>
            <span style={{ fontFamily: "var(--f-serif)", fontWeight: 300, fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)", color: t.teal ? "#2ec4b6" : undefined }}>{t.value}</span>
            {t.sub && <span style={{ fontFamily: "var(--f-body)", fontWeight: 400, fontSize: "0.78rem", opacity: 0.5 }}>{t.sub}</span>}
          </div>
        ))}
      </div>
      <div className="up" style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "2vh" }}>
        <Icon type="leaf" size={14} color="rgba(240,237,230,0.5)" />
        <span style={{ fontFamily: "var(--f-body)", fontWeight: 400, fontSize: "0.82rem", opacity: 0.45 }}>
          Equivesto partnership saves $185K–$460K over fund life vs. traditional admin
        </span>
      </div>
    </div>
  );
}

/* ── SLIDE 10: Team ── */
function SlideTeam() {
  return (
    <div className="wrcf-left">
      <Eyebrow>Our Team</Eyebrow>
      <H2>{`Leadership <em>& Advisors</em>`}</H2>
      <div className="up wrcf-team-layout">
        <div className="wrcf-team-section" style={{ flexShrink: 0 }}>
          <span className="wrcf-team-label">EXECUTIVE</span>
          <div style={{ display: "flex", gap: "2rem" }}>
            <PersonCard name="Bryan Duarte" role="Managing Partner" photo={TEAM.bryan} size={76} flag="CA" />
            <PersonCard name="Keyona Meeks" role="General Partner" photo={TEAM.keyona} size={76} />
          </div>
        </div>
        <div style={{ width: 1, background: "rgba(0,0,0,0.1)", alignSelf: "stretch" }} />
        <div style={{ flex: 1, display: "flex", gap: "3vw" }}>
          <div className="wrcf-team-section">
            <span className="wrcf-team-label">INVESTMENT COMMITTEE</span>
            <div className="wrcf-team-wrap">
              <PersonCard name="Allison Gibson" role="Inv. Readiness" photo={TEAM.allison} />
              <PersonCard name="Bryan Watson" role="CleanTech" photo={TEAM.watson} flag="CA" />
              <PersonCard name="John Nicholson" role="Environmental" photo={TEAM.john} />
              <PersonCard name="Melissa Allen" role="Finance" photo={TEAM.melissa} />
            </div>
          </div>
          <div className="wrcf-team-section">
            <span className="wrcf-team-label">ADVISORY COMMITTEE</span>
            <div className="wrcf-team-wrap">
              <PersonCard name="Lindsey Motlow" role="Energy Research" photo={TEAM.lindsey} />
              <PersonCard name="Marlon Thompson" role="Founder/Investor" photo={TEAM.marlon} />
              <PersonCard name="Nicholas Parker" role="Cleantech Pioneer" photo={TEAM.nicholas} flag="CA" />
              <PersonCard name="Jade Lockard" role="Fundraising" photo={TEAM.jade} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function FlagBadge() {
  return (
    <span style={{
      fontFamily: "var(--f-mono)", fontSize: "0.55rem", letterSpacing: "0.1em",
      color: "#2ec4b6", opacity: 0.7,
      border: "1px solid rgba(46,196,182,0.3)", borderRadius: 3,
      padding: "1px 5px",
    }}>
      CA
    </span>
  );
}
function PersonCard({ name, role, photo, size = 54, flag }: { name: string; role: string; photo: string; size?: number; flag?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem" }}>
      <TeamPhoto src={photo} size={size} />
      <span style={{ fontFamily: "var(--f-body)", fontWeight: 500, fontSize: "0.82rem", textAlign: "center" }}>{name}</span>
      <span style={{ fontFamily: "var(--f-body)", fontSize: "0.72rem", color: "#2ec4b6", textAlign: "center" }}>{role}</span>
      {flag && <FlagBadge />}
    </div>
  );
}

/* ── SLIDE 11: Track Record ── */
function SlideTrackRecord() {
  return (
    <div className="wrcf-left" style={{ alignItems: "center" }}>
      <Eyebrow>Track Record</Eyebrow>
      <H2>{`<em>Proven</em> Experience`}</H2>
      <div className="up wrcf-cards-2col" style={{ maxWidth: 900 }}>
        <div className="wrcf-case-card wrcf-glass-card">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
            <TeamPhoto src={TEAM.bryan} size={56} />
            <div>
              <h3 style={{ fontFamily: "var(--f-serif)", fontWeight: 300, fontSize: "2rem" }}>Bryan Duarte</h3>
              <span style={{ fontFamily: "var(--f-body)", fontSize: "0.82rem", color: "#2ec4b6", display: "block" }}>Managing Partner</span>
            </div>
          </div>
          <ul className="wrcf-dash-list">
            <li>5x Entrepreneur · 3 Exits (8x &amp; 10x EBITDA)</li>
            <li>30+ years energy industry experience</li>
            <li>CleanTech EIR · Techstars advisor</li>
          </ul>
        </div>
        <div className="wrcf-case-card wrcf-glass-card">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem" }}>
            <TeamPhoto src={TEAM.keyona} size={56} />
            <div>
              <h3 style={{ fontFamily: "var(--f-serif)", fontWeight: 300, fontSize: "2rem" }}>Keyona Meeks</h3>
              <span style={{ fontFamily: "var(--f-body)", fontSize: "0.82rem", color: "#2ec4b6", display: "block" }}>General Partner</span>
            </div>
          </div>
          <ul className="wrcf-dash-list">
            <li>10 deal attributions at Bronze Valley — top accelerator for underrepresented founders</li>
            <li>wildwonder (Inc. 5000 #109) · Brevity ($2M) · Grovara ($8.75M)</li>
            <li>SXSW Judge · Founder, ReRev Labs</li>
          </ul>
        </div>
      </div>
      <div className="up" style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "2vh" }}>
        <Icon type="trophy" size={14} color="rgba(240,237,230,0.5)" />
        <span style={{ fontFamily: "var(--f-body)", fontWeight: 400, fontSize: "0.85rem", opacity: 0.5 }}>
          WEF (UpLink) Top Innovative Fund — 2022
        </span>
      </div>
    </div>
  );
}

/* ── SLIDE 12: CTA ── */
function SlideCTA() {
  return (
    <div className="wrcf-center">
      <img src={LOGO} alt="BlackTech Capital" className="up" style={{ height: 56, objectFit: "contain" }} />
      <h1 className="up wrcf-h1" dangerouslySetInnerHTML={{ __html: `Let's Build This <em>Together</em>` }} />
      <TealRule />
      <p className="up" style={{ fontFamily: "var(--f-body)", fontWeight: 400, fontSize: "1.05rem", opacity: 0.75 }}>
        Not "invest in us" — <strong style={{ opacity: 1 }}>partner with us.</strong>
      </p>
      <a
        href="mailto:bduarte@blacktechcapital.com"
        className="up"
        style={{
          fontFamily: "var(--f-mono)", fontSize: "1rem", color: "#2ec4b6", letterSpacing: "0.08em",
          border: "1px solid rgba(46,196,182,0.3)", padding: "0.85rem 2rem", textDecoration: "none",
        }}
      >
        bduarte@blacktechcapital.com
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

/* ── CSS ── */
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
  display: flex; flex-direction: column;
  justify-content: center; align-items: center;
  opacity: 0; pointer-events: none;
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
.wrcf-slide.active { opacity: 1; pointer-events: auto; }

.wrcf-bg-image {
  position: absolute; inset: 0; z-index: 0;
  background-size: cover; background-position: center;
  filter: blur(2px);
  transform: scale(1.05);
}

.wrcf-bg-overlay {
  position: absolute; inset: 0; z-index: 1;
}

.wrcf-slide-content {
  position: relative; z-index: 2;
  padding: 5vh 7vw;
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
  justify-content: center; align-items: center;
}

.wrcf-glass-card {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  background: rgba(255,255,255,0.18) !important;
  border: 1px solid rgba(255,255,255,0.25) !important;
}

@keyframes wrcf-up {
  from { opacity: 0; transform: translateY(18px); }
  to   { opacity: 1; transform: translateY(0); }
}
.wrcf-slide .up,
.wrcf-slide-content .up,
.wrcf-slide-content .wrcf-center .up,
.wrcf-slide-content .wrcf-left .up {
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

/* Typography */
.wrcf-h1 {
  font-family: var(--f-serif); font-weight: 300;
  font-size: clamp(3rem, 7vw, 6.5rem);
  line-height: 0.95; letter-spacing: -0.02em;
  text-align: center;
}
.wrcf-h1 em, .wrcf-h2 em { font-style: normal; color: #2ec4b6; }

.wrcf-h2 {
  font-family: var(--f-serif); font-weight: 300;
  font-size: clamp(1.9rem, 4vw, 3.6rem);
  line-height: 1.05; letter-spacing: -0.015em;
}

.wrcf-eyebrow {
  font-family: var(--f-mono); font-size: 11px;
  letter-spacing: 0.25em; text-transform: uppercase;
  opacity: 0.55; margin-bottom: 1.2vh;
}

/* Layouts */
.wrcf-center { display: flex; flex-direction: column; align-items: center; gap: 1.8vh; width: 100%; }
.wrcf-left { display: flex; flex-direction: column; align-items: flex-start; gap: 1.8vh; width: 100%; }

/* Values grid */
.wrcf-values-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px; background: rgba(0,0,0,0.12);
  width: 100%; max-width: 900px; margin-top: 1.5vh;
}
.wrcf-value-cell {
  background: #f0ede6; padding: 1.8rem;
  display: flex; flex-direction: column; gap: 0.5rem;
}

/* Cards */
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
  font-family: var(--f-body); font-weight: 400;
  font-size: 0.92rem; line-height: 1.55;
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
  font-family: var(--f-body); font-weight: 400;
  font-size: 0.92rem; opacity: 0.75; line-height: 1.55;
}
.wrcf-dash-list li {
  padding-left: 1.2rem; position: relative; margin-bottom: 0.4rem;
}
.wrcf-dash-list li::before {
  content: '\\2014'; position: absolute; left: 0;
  color: #2ec4b6; opacity: 0.4;
}

/* Stats */
.wrcf-stats-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 2px; max-width: 780px; width: 100%; margin-top: 1vh;
}
.wrcf-stat-block {
  background: rgba(0,0,0,0.05); padding: 2.8rem 2.2rem;
  display: flex; flex-direction: column; gap: 0.4rem;
}

/* Pledge */
.wrcf-pledge-row {
  display: flex; gap: 3rem; margin-top: 3vh;
  position: relative; z-index: 1;
}

/* Terms */
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

/* Team */
.wrcf-team-layout {
  display: flex; gap: 4vw; width: 100%; margin-top: 1vh;
  align-items: flex-start;
}
.wrcf-team-section { display: flex; flex-direction: column; gap: 1rem; }
.wrcf-team-label {
  font-family: var(--f-mono); font-size: 9px;
  text-transform: uppercase; letter-spacing: 0.2em; opacity: 0.45;
}
.wrcf-team-wrap {
  display: flex; flex-wrap: wrap; gap: 1.5rem;
}

/* Nav */
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
