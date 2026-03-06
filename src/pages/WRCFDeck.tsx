import { useState, useEffect, useCallback } from "react";

const SLIDE_THEMES = ['d','l','l','d','l','t','d','l','d','d'] as const;
type Theme = 'd' | 'l' | 't';

const WRCFDeck = () => {
  const [current, setCurrent] = useState(0);
  const total = 10;

  const go = useCallback((n: number) => {
    setCurrent(((n % total) + total) % total);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowRight','ArrowDown',' '].includes(e.key)) { e.preventDefault(); go(current + 1); }
      if (['ArrowLeft','ArrowUp'].includes(e.key)) { e.preventDefault(); go(current - 1); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current, go]);

  useEffect(() => {
    let tx = 0;
    const onStart = (e: TouchEvent) => { tx = e.touches[0].clientX; };
    const onEnd = (e: TouchEvent) => {
      const dx = tx - e.changedTouches[0].clientX;
      if (Math.abs(dx) > 50) go(current + (dx > 0 ? 1 : -1));
    };
    document.addEventListener('touchstart', onStart);
    document.addEventListener('touchend', onEnd);
    return () => { document.removeEventListener('touchstart', onStart); document.removeEventListener('touchend', onEnd); };
  }, [current, go]);

  const theme = SLIDE_THEMES[current];
  const dotCls = (t: Theme) => t === 'd' ? 'dot-d' : t === 'l' ? 'dot-l' : 'dot-t';
  const nbCls = (t: Theme) => t === 'd' ? 'nb-d' : t === 'l' ? 'nb-l' : 'nb-t';
  const ncCls = (t: Theme) => t === 'd' ? 'nc-d' : t === 'l' ? 'nc-l' : 'nc-t';

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400&display=swap');

        .wrcf-deck { width:100vw; height:100vh; position:relative; overflow:hidden; background:#0c1410; }
        .wrcf-deck * { box-sizing:border-box; margin:0; padding:0; }

        .wrcf-slide {
          position:absolute; inset:0;
          display:flex; flex-direction:column;
          justify-content:center; align-items:center;
          padding:5vh 7vw;
          opacity:0; pointer-events:none;
          transition: opacity 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .wrcf-slide.active { opacity:1; pointer-events:all; }

        .wrcf-dark  { background: #0c1410; color: #f0ede6; }
        .wrcf-light { background: #f0ede6; color: #0c1410; }

        .wrcf-eyebrow {
          font-family:'DM Mono',monospace;
          font-size:clamp(9px,0.9vw,11px);
          letter-spacing:0.25em; text-transform:uppercase;
          margin-bottom:1.2rem;
        }
        .wrcf-dark .wrcf-eyebrow  { color:rgba(240,237,230,0.35); }
        .wrcf-light .wrcf-eyebrow { color:rgba(12,20,16,0.35); }
        .wrcf-teal-eyebrow { color:rgba(12,20,16,0.5); }

        .wrcf-deck h1 {
          font-family:'Cormorant Garamond',serif;
          font-weight:300; font-size:clamp(3rem,7vw,6.5rem);
          line-height:0.95; letter-spacing:-0.02em; text-align:center;
        }
        .wrcf-deck h1 em { font-style:italic; color:#2ec4b6; }

        .wrcf-deck h2 {
          font-family:'Cormorant Garamond',serif;
          font-weight:300; font-size:clamp(1.9rem,4vw,3.6rem);
          line-height:1.05; letter-spacing:-0.015em;
        }
        .wrcf-deck h2 em { font-style:italic; color:#2ec4b6; }

        .wrcf-sub {
          font-family:'DM Sans',sans-serif;
          font-size:clamp(0.82rem,1.2vw,1rem);
          font-weight:300; line-height:1.7; opacity:0.45;
          max-width:48ch; text-align:center; margin-top:1.4rem;
        }

        hr.wrcf-rule { border:none; width:36px; height:1.5px; background:#2ec4b6; margin:1.6rem auto; opacity:0.7; }

        /* Animations */
        .wrcf-slide.active .wrcf-up { animation: wrcf-up 0.5s cubic-bezier(0.2,0,0,1) both; }
        .wrcf-slide.active .wrcf-up:nth-child(1){animation-delay:0.05s}
        .wrcf-slide.active .wrcf-up:nth-child(2){animation-delay:0.12s}
        .wrcf-slide.active .wrcf-up:nth-child(3){animation-delay:0.19s}
        .wrcf-slide.active .wrcf-up:nth-child(4){animation-delay:0.26s}
        .wrcf-slide.active .wrcf-up:nth-child(5){animation-delay:0.33s}
        .wrcf-slide.active .wrcf-up:nth-child(6){animation-delay:0.40s}
        .wrcf-slide.active .wrcf-up:nth-child(7){animation-delay:0.47s}
        @keyframes wrcf-up { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }

        /* S1 Cover */
        .wrcf-s1 { background: radial-gradient(ellipse 90% 70% at 50% 110%, rgba(46,196,182,0.13) 0%, transparent 60%), #0c1410; }
        .wrcf-logo { height:56px; object-fit:contain; margin-bottom:2.5rem; }
        .wrcf-cover-lockup { display:flex; align-items:baseline; gap:0.3rem; flex-wrap:wrap; justify-content:center; }
        .wrcf-btc-word { font-family:'Cormorant Garamond',serif; font-weight:300; font-size:clamp(2.6rem,6vw,5.5rem); color:#f0ede6; letter-spacing:-0.02em; }
        .wrcf-cx { font-family:'Cormorant Garamond',serif; font-weight:300; font-size:clamp(1.8rem,3.5vw,3rem); color:#2ec4b6; opacity:0.6; }
        .wrcf-word { font-family:'Cormorant Garamond',serif; font-weight:300; font-size:clamp(2.6rem,6vw,5.5rem); color:#2ec4b6; letter-spacing:-0.02em; }

        /* S2 Values */
        .wrcf-value-grid {
          display:grid; grid-template-columns:repeat(3,1fr);
          gap:1px; width:100%; max-width:1050px; margin-top:2rem;
          background:rgba(0,0,0,0.12);
        }
        .wrcf-vcell { background:#f0ede6; padding:1.8rem 1.6rem; display:flex; flex-direction:column; gap:0.5rem; }
        .wrcf-vcell-icon { font-size:1.2rem; }
        .wrcf-vcell-title { font-family:'DM Sans',sans-serif; font-size:0.88rem; font-weight:500; color:#0c1410; }
        .wrcf-vcell-phrase { font-family:'Cormorant Garamond',serif; font-size:clamp(1rem,1.4vw,1.2rem); font-weight:300; font-style:italic; color:rgba(12,20,16,0.5); line-height:1.3; }

        /* S3 Venn */
        .wrcf-venn-wrap { width:min(580px,82vw); height:min(500px,68vh); }
        .wrcf-venn-wrap svg { width:100%; height:100%; overflow:visible; }

        /* S4 Case Studies */
        .wrcf-case-cols { display:grid; grid-template-columns:1fr 1fr; gap:2px; width:100%; max-width:1050px; margin-top:2rem; flex:1; }
        .wrcf-case-col { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07); padding:2.2rem; display:flex; flex-direction:column; gap:1rem; }
        .wrcf-case-tag { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:0.18em; text-transform:uppercase; color:rgba(240,237,230,0.3); }
        .wrcf-case-co { font-family:'Cormorant Garamond',serif; font-size:clamp(1.8rem,3vw,2.6rem); font-weight:300; color:#f0ede6; letter-spacing:-0.01em; }
        .wrcf-case-pts { list-style:none; display:flex; flex-direction:column; gap:0.6rem; flex:1; padding:0; }
        .wrcf-case-pts li { font-family:'DM Sans',sans-serif; font-size:clamp(0.78rem,1vw,0.9rem); font-weight:300; color:rgba(240,237,230,0.5); line-height:1.5; display:flex; gap:0.7rem; align-items:flex-start; }
        .wrcf-case-pts li::before { content:''; display:inline-block; width:4px; height:4px; border-radius:50%; background:#2ec4b6; opacity:0.6; margin-top:0.5rem; flex-shrink:0; }
        .wrcf-case-foot { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:0.15em; text-transform:uppercase; color:rgba(240,237,230,0.22); padding-top:0.8rem; border-top:1px solid rgba(255,255,255,0.06); }

        /* S5 Structural */
        .wrcf-stat-pair { display:grid; grid-template-columns:1fr 1fr; gap:2px; width:100%; max-width:780px; margin-top:2.5rem; }
        .wrcf-stat-block { background:rgba(0,0,0,0.05); padding:2.8rem 2.2rem; display:flex; flex-direction:column; gap:0.4rem; }
        .wrcf-stat-num { font-family:'Cormorant Garamond',serif; font-size:clamp(4rem,9vw,7.5rem); font-weight:300; color:#2ec4b6; line-height:1; letter-spacing:-0.03em; }
        .wrcf-stat-key { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:0.18em; text-transform:uppercase; color:rgba(12,20,16,0.35); margin-top:0.2rem; }
        .wrcf-stat-desc { font-family:'DM Sans',sans-serif; font-size:clamp(0.78rem,1vw,0.88rem); font-weight:300; color:rgba(12,20,16,0.45); line-height:1.55; max-width:22ch; margin-top:0.3rem; }

        /* S6 Pledge */
        .wrcf-pledge-ghost { font-family:'Cormorant Garamond',serif; font-size:clamp(10rem,28vw,22rem); font-weight:300; line-height:1; color:rgba(12,20,16,0.1); position:absolute; top:50%; left:50%; transform:translate(-50%,-52%); pointer-events:none; user-select:none; white-space:nowrap; letter-spacing:-0.04em; }
        .wrcf-pledge-content { position:relative; z-index:2; display:flex; flex-direction:column; align-items:center; text-align:center; gap:1.4rem; }
        .wrcf-pledge-hl { font-family:'Cormorant Garamond',serif; font-size:clamp(1.9rem,4vw,3.4rem); font-weight:300; line-height:1.1; color:#0c1410; }
        .wrcf-pledge-hl strong { font-weight:600; }
        .wrcf-pledge-items { display:flex; gap:3rem; flex-wrap:wrap; justify-content:center; margin-top:0.3rem; }
        .wrcf-pledge-item { display:flex; flex-direction:column; align-items:center; gap:0.4rem; }
        .wrcf-p-icon { font-size:1.4rem; }
        .wrcf-p-label { font-family:'DM Sans',sans-serif; font-size:clamp(0.72rem,0.9vw,0.82rem); font-weight:500; color:rgba(12,20,16,0.6); text-align:center; max-width:13ch; }

        /* S7 Terms */
        .wrcf-terms-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2px; width:100%; max-width:1000px; margin-top:2rem; }
        .wrcf-term-block { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07); padding:1.8rem 1.6rem; display:flex; flex-direction:column; gap:0.35rem; }
        .wrcf-term-key { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:0.2em; text-transform:uppercase; color:rgba(240,237,230,0.3); }
        .wrcf-term-val { font-family:'Cormorant Garamond',serif; font-size:clamp(1.5rem,2.8vw,2.5rem); font-weight:300; color:#f0ede6; line-height:1; }
        .wrcf-term-val.wrcf-ac { color:#2ec4b6; }
        .wrcf-term-sub { font-family:'DM Sans',sans-serif; font-size:0.75rem; font-weight:300; color:rgba(240,237,230,0.3); margin-top:0.2rem; }

        /* S8 Team */
        .wrcf-team-layout { width:100%; max-width:1050px; display:flex; gap:4vw; margin-top:2rem; align-items:flex-start; }
        .wrcf-col-label { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:0.2em; text-transform:uppercase; color:rgba(12,20,16,0.3); margin-bottom:0.8rem; }
        .wrcf-lead-pair { display:flex; gap:2rem; }
        .wrcf-support-cols { display:flex; gap:3vw; flex:1; }
        .wrcf-support-col { display:flex; flex-direction:column; }
        .wrcf-support-people { display:flex; gap:1.2rem; flex-wrap:wrap; }
        .wrcf-team-div { width:1px; background:rgba(0,0,0,0.1); align-self:stretch; flex-shrink:0; margin:0 1vw; }

        .wrcf-person { display:flex; flex-direction:column; align-items:center; gap:0.4rem; text-align:center; }
        .wrcf-av { border-radius:50%; overflow:hidden; flex-shrink:0; border:1.5px solid rgba(46,196,182,0.35); background:rgba(46,196,182,0.1); }
        .wrcf-av.wrcf-lg { width:76px; height:76px; }
        .wrcf-av.wrcf-sm { width:54px; height:54px; }
        .wrcf-av img { width:100%; height:100%; object-fit:cover; display:block; }
        .wrcf-pname { font-family:'DM Sans',sans-serif; font-size:0.78rem; font-weight:500; color:#0c1410; }
        .wrcf-prole { font-size:0.68rem; color:#2ec4b6; opacity:0.85; }
        .wrcf-pnote { font-size:0.62rem; color:rgba(12,20,16,0.35); font-family:'DM Mono',monospace; }

        /* S9 Track Record */
        .wrcf-tr-pair { display:grid; grid-template-columns:1fr 1fr; gap:2px; width:100%; max-width:900px; margin-top:2rem; }
        .wrcf-tr-block { background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07); padding:2.2rem; }
        .wrcf-tr-name { font-family:'Cormorant Garamond',serif; font-size:clamp(1.4rem,2.3vw,2rem); font-weight:300; color:#f0ede6; margin-bottom:0.2rem; }
        .wrcf-tr-role { font-family:'DM Sans',sans-serif; font-size:0.72rem; color:#2ec4b6; opacity:0.8; margin-bottom:1rem; }
        .wrcf-tr-pts { list-style:none; display:flex; flex-direction:column; gap:0.55rem; padding:0; }
        .wrcf-tr-pts li { font-family:'DM Sans',sans-serif; font-size:clamp(0.78rem,1vw,0.88rem); font-weight:300; color:rgba(240,237,230,0.5); line-height:1.5; padding-left:1rem; position:relative; }
        .wrcf-tr-pts li::before { content:'—'; position:absolute; left:0; color:#2ec4b6; opacity:0.4; font-size:0.7rem; }
        .wrcf-wef { margin-top:1.8rem; font-family:'DM Sans',sans-serif; font-size:0.8rem; color:rgba(240,237,230,0.3); display:flex; align-items:center; gap:0.5rem; }

        /* S10 CTA */
        .wrcf-s10 { background: radial-gradient(ellipse 80% 60% at 50% 100%, rgba(46,196,182,0.14) 0%, transparent 55%), #0c1410; }
        .wrcf-cta-email { font-family:'DM Mono',monospace; font-size:clamp(0.8rem,1.3vw,1rem); color:#2ec4b6; letter-spacing:0.08em; border:1px solid rgba(46,196,182,0.3); padding:0.85rem 2rem; margin-top:2.2rem; }
        .wrcf-cta-pills { display:flex; gap:2rem; margin-top:1.8rem; flex-wrap:wrap; justify-content:center; }
        .wrcf-cta-pills span { font-family:'DM Mono',monospace; font-size:9px; letter-spacing:0.2em; text-transform:uppercase; color:rgba(240,237,230,0.2); }
        .wrcf-cta-pills .wrcf-hi { color:rgba(46,196,182,0.65); }

        /* Nav */
        .wrcf-dots { position:fixed; bottom:2rem; left:50%; transform:translateX(-50%); display:flex; gap:6px; z-index:300; }
        .wrcf-dot { width:5px; height:5px; border-radius:50%; cursor:pointer; transition:all 0.3s; border:none; padding:0; background:transparent; }
        .dot-d { background:rgba(240,237,230,0.2); }
        .dot-l { background:rgba(12,20,16,0.2); }
        .dot-t { background:rgba(12,20,16,0.3); }
        .wrcf-dot.wrcf-on.dot-d { background:#2ec4b6; transform:scale(1.5); }
        .wrcf-dot.wrcf-on.dot-l { background:#2ec4b6; transform:scale(1.5); }
        .wrcf-dot.wrcf-on.dot-t { background:#0c1410; transform:scale(1.5); }

        .wrcf-nav { position:fixed; bottom:1.7rem; right:2.2rem; display:flex; align-items:center; gap:0.7rem; z-index:300; }
        .wrcf-nb { background:none; cursor:pointer; width:36px; height:36px; display:flex; align-items:center; justify-content:center; font-size:0.95rem; transition:all 0.2s; padding:0; }
        .nb-d { color:rgba(240,237,230,0.25); border:1px solid rgba(240,237,230,0.1); }
        .nb-l { color:rgba(12,20,16,0.3);    border:1px solid rgba(12,20,16,0.15); }
        .nb-t { color:rgba(12,20,16,0.5);    border:1px solid rgba(12,20,16,0.2); }
        .wrcf-nb.nb-d:hover { color:#2ec4b6; border-color:#2ec4b6; }
        .wrcf-nb.nb-l:hover { color:#2ec4b6; border-color:#2ec4b6; }
        .wrcf-nb.nb-t:hover { color:#0c1410; border-color:rgba(12,20,16,0.5); }
        .wrcf-nc { font-family:'DM Mono',monospace; font-size:10px; letter-spacing:0.1em; min-width:42px; text-align:center; }
        .nc-d { color:rgba(240,237,230,0.25); }
        .nc-l { color:rgba(12,20,16,0.3); }
        .nc-t { color:rgba(12,20,16,0.4); }
      `}</style>

      <div className="wrcf-deck">
        {/* S1 Cover */}
        <section className={`wrcf-slide wrcf-dark wrcf-s1 ${current === 0 ? 'active' : ''}`}>
          <img className="wrcf-logo wrcf-up" src="https://res.cloudinary.com/dialhpycd/image/upload/v1772833511/BTC_Logo_with_text_-_Transparent_Background_-_Large_finf66.png" alt="BlackTech Capital" />
          <div className="wrcf-cover-lockup wrcf-up">
            <span className="wrcf-btc-word">BlackTech Capital</span>
            <span className="wrcf-cx">&nbsp;×&nbsp;</span>
            <span className="wrcf-word">WRCF</span>
          </div>
          <hr className="wrcf-rule wrcf-up" />
          <p className="wrcf-sub wrcf-up" style={{ color: 'rgba(240,237,230,0.38)' }}>A partnership for equitable, sustainable impact<br />in Waterloo Region and beyond.</p>
          <p className="wrcf-up" style={{ marginTop: '3rem', fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase' as const, color: 'rgba(240,237,230,0.16)' }}>Confidential · 2026</p>
        </section>

        {/* S2 Values */}
        <section className={`wrcf-slide wrcf-light ${current === 1 ? 'active' : ''}`} style={{ alignItems: 'flex-start' }}>
          <p className="wrcf-eyebrow wrcf-up">Strategic Fit</p>
          <h2 className="wrcf-up">We Already Speak <em>the Same Language</em></h2>
          <div className="wrcf-value-grid wrcf-up">
            {[
              { icon: '⬡', title: 'Equity-Centred', phrase: 'Capital for<br/>the overlooked' },
              { icon: '◎', title: 'Approachable', phrase: '$10K opens<br/>the door' },
              { icon: '◇', title: 'Accountable', phrase: '7% hurdle.<br/>OSC-licensed.' },
              { icon: '✦', title: 'Catalytic', phrase: 'First cheques.<br/>Unlocks follow-on.' },
              { icon: '⟡', title: 'Collaborative', phrase: 'Intros are our<br/>#1 priority' },
              { icon: '◉', title: 'Impactful', phrase: 'Real outcomes,<br/>not dashboards' },
            ].map((v, i) => (
              <div className="wrcf-vcell" key={i}>
                <span className="wrcf-vcell-icon">{v.icon}</span>
                <span className="wrcf-vcell-title">{v.title}</span>
                <span className="wrcf-vcell-phrase" dangerouslySetInnerHTML={{ __html: v.phrase }} />
              </div>
            ))}
          </div>
        </section>

        {/* S3 Venn */}
        <section className={`wrcf-slide wrcf-light ${current === 2 ? 'active' : ''}`} style={{ gap: 0 }}>
          <p className="wrcf-eyebrow wrcf-up">Mission Alignment</p>
          <div className="wrcf-venn-wrap wrcf-up">
            <svg viewBox="0 0 580 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="290" cy="175" r="158" fill="rgba(46,196,182,0.09)" stroke="rgba(46,196,182,0.45)" strokeWidth="1.5"/>
              <circle cx="180" cy="355" r="158" fill="rgba(46,196,182,0.06)" stroke="rgba(46,196,182,0.28)" strokeWidth="1.5"/>
              <circle cx="400" cy="355" r="158" fill="rgba(46,196,182,0.06)" stroke="rgba(46,196,182,0.28)" strokeWidth="1.5"/>
              <circle cx="290" cy="292" r="54" fill="rgba(46,196,182,0.22)" stroke="rgba(46,196,182,0.55)" strokeWidth="1.5"/>
              <text x="290" y="48" textAnchor="middle" fontFamily="Cormorant Garamond" fontSize="26" fontStyle="italic" fill="rgba(46,196,182,0.95)">Equitable</text>
              <text x="290" y="76" textAnchor="middle" fontFamily="DM Sans" fontSize="13" fontWeight="300" fill="rgba(12,20,16,0.42)">Racial equity · $10K LP · Fair founder terms</text>
              <text x="108" y="462" textAnchor="middle" fontFamily="Cormorant Garamond" fontSize="24" fontStyle="italic" fill="rgba(12,20,16,0.65)">Sustainable</text>
              <text x="108" y="486" textAnchor="middle" fontFamily="DM Sans" fontSize="12" fontWeight="300" fill="rgba(12,20,16,0.38)">ClimateTech only · Carbon drawdown</text>
              <text x="472" y="462" textAnchor="middle" fontFamily="Cormorant Garamond" fontSize="24" fontStyle="italic" fill="rgba(12,20,16,0.65)">Connected</text>
              <text x="472" y="486" textAnchor="middle" fontFamily="DM Sans" fontSize="12" fontWeight="300" fill="rgba(12,20,16,0.38)">Investor intros · Canada–US pipeline</text>
              <text x="290" y="287" textAnchor="middle" fontFamily="Cormorant Garamond" fontSize="14" fontWeight="300" fill="rgba(12,20,16,0.75)">Thriving</text>
              <text x="290" y="305" textAnchor="middle" fontFamily="Cormorant Garamond" fontSize="14" fontWeight="300" fill="rgba(12,20,16,0.75)">People</text>
            </svg>
          </div>
        </section>

        {/* S4 Case Studies */}
        <section className={`wrcf-slide wrcf-dark ${current === 3 ? 'active' : ''}`} style={{ alignItems: 'flex-start' }}>
          <p className="wrcf-eyebrow wrcf-up">Impact &amp; Credibility</p>
          <h2 className="wrcf-up">How We <em>Actually Work</em></h2>
          <div className="wrcf-case-cols wrcf-up">
            <div className="wrcf-case-col">
              <p className="wrcf-case-tag">Portfolio Co. 01</p>
              <p className="wrcf-case-co">Mars Materials</p>
              <ul className="wrcf-case-pts">
                <li>First cheque in — conviction before consensus</li>
                <li>Strategic intros to close their round</li>
                <li>Cleaner &amp; cheaper acrylonitrile supply chains</li>
                <li>Gigatons of carbon drawdown potential</li>
              </ul>
              <p className="wrcf-case-foot">Market innovation, not ESG compliance</p>
            </div>
            <div className="wrcf-case-col">
              <p className="wrcf-case-tag">Portfolio Co. 02</p>
              <p className="wrcf-case-co">Serenity Power</p>
              <ul className="wrcf-case-pts">
                <li>Got into a deal others couldn't access</li>
                <li>Founders chose us — trust earned, not bought</li>
                <li>Active support: intros, strategy, round completion</li>
                <li>Clean energy access for underserved markets</li>
              </ul>
              <p className="wrcf-case-foot">Structural sourcing advantage</p>
            </div>
          </div>
        </section>

        {/* S5 Structural Advantage */}
        <section className={`wrcf-slide wrcf-light ${current === 4 ? 'active' : ''}`}>
          <p className="wrcf-eyebrow wrcf-up">Structural Advantage</p>
          <h2 className="wrcf-up" style={{ textAlign: 'center' }}>We Get Into Deals <em>Others Can't</em></h2>
          <div className="wrcf-stat-pair wrcf-up">
            <div className="wrcf-stat-block">
              <span className="wrcf-stat-num">&lt;1%</span>
              <span className="wrcf-stat-key">of VC to Black founders</span>
              <span className="wrcf-stat-desc">We see deals others miss — because founders see us first.</span>
            </div>
            <div className="wrcf-stat-block">
              <span className="wrcf-stat-num">&lt;6%</span>
              <span className="wrcf-stat-key">of VC to women-led teams</span>
              <span className="wrcf-stat-desc">Half the planet's talent, systematically underfunded. Market inefficiency = opportunity.</span>
            </div>
          </div>
          <p className="wrcf-up" style={{ marginTop: '1.8rem', fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1rem,1.4vw,1.2rem)', fontStyle: 'italic', color: 'rgba(12,20,16,0.38)' }}>That's not a talking point — it's a sourcing advantage.</p>
        </section>

        {/* S6 Pledge */}
        <section className={`wrcf-slide ${current === 5 ? 'active' : ''}`} style={{ background: '#2ec4b6', color: '#0c1410' }}>
          <span className="wrcf-pledge-ghost">1</span>
          <div className="wrcf-pledge-content">
            <p className="wrcf-eyebrow wrcf-teal-eyebrow wrcf-up">Regional Engagement</p>
            <p className="wrcf-pledge-hl wrcf-up">We commit to investing in<br /><strong>at least one</strong> Waterloo Region company.</p>
            <div className="wrcf-pledge-items wrcf-up">
              {[
                { icon: '🔗', label: 'Joint sourcing pipeline' },
                { icon: '📋', label: 'Regular deal flow reporting' },
                { icon: '🤝', label: 'Collaborative founder evaluation' },
                { icon: '📅', label: 'Quarterly touchpoints' },
              ].map((item, i) => (
                <div className="wrcf-pledge-item" key={i}>
                  <span className="wrcf-p-icon">{item.icon}</span>
                  <span className="wrcf-p-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* S7 Fund Terms */}
        <section className={`wrcf-slide wrcf-dark ${current === 6 ? 'active' : ''}`} style={{ alignItems: 'flex-start' }}>
          <p className="wrcf-eyebrow wrcf-up">Fund Details</p>
          <h2 className="wrcf-up"><em>Catalyst Fund</em> — Key Terms</h2>
          <div className="wrcf-terms-grid wrcf-up">
            <div className="wrcf-term-block"><span className="wrcf-term-key">Fund Size</span><span className="wrcf-term-val wrcf-ac">$500K – $2M</span></div>
            <div className="wrcf-term-block"><span className="wrcf-term-key">Investments</span><span className="wrcf-term-val">6 Pre-Seed</span><span className="wrcf-term-sub">Canadian ClimateTech companies</span></div>
            <div className="wrcf-term-block"><span className="wrcf-term-key">Check Size</span><span className="wrcf-term-val">$50K – $250K</span></div>
            <div className="wrcf-term-block"><span className="wrcf-term-key">LP Minimum</span><span className="wrcf-term-val wrcf-ac">$10K</span></div>
            <div className="wrcf-term-block"><span className="wrcf-term-key">Carry / Hurdle</span><span className="wrcf-term-val">20% <span style={{ opacity: 0.35, fontSize: '0.6em' }}>/</span> 7%</span></div>
            <div className="wrcf-term-block"><span className="wrcf-term-key">Fund Life</span><span className="wrcf-term-val">10 <span style={{ opacity: 0.35, fontSize: '0.55em' }}>+ 2 ext.</span></span><span className="wrcf-term-sub">Deploying 2026</span></div>
          </div>
          <p className="wrcf-up" style={{ marginTop: '1.6rem', fontSize: '0.78rem', fontWeight: 300, color: 'rgba(240,237,230,0.28)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#2ec4b6' }}>🌿</span> Equivesto partnership saves $185K–$460K over fund life vs. traditional admin
          </p>
        </section>

        {/* S8 Team */}
        <section className={`wrcf-slide wrcf-light ${current === 7 ? 'active' : ''}`} style={{ alignItems: 'flex-start' }}>
          <p className="wrcf-eyebrow wrcf-up">Our Team</p>
          <h2 className="wrcf-up">Leadership <em>&amp; Advisors</em></h2>
          <div className="wrcf-team-layout wrcf-up">
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.8rem' }}>
              <p className="wrcf-col-label">Executive</p>
              <div className="wrcf-lead-pair">
                <div className="wrcf-person">
                  <div className="wrcf-av wrcf-lg"><img src="https://res.cloudinary.com/dialhpycd/image/upload/v1767978687/Bryan_Duarte_n5onyy.jpg" alt="Bryan Duarte" /></div>
                  <span className="wrcf-pname">Bryan Duarte</span>
                  <span className="wrcf-prole">Managing Partner</span>
                  <span className="wrcf-pnote">🇨🇦 Canadian</span>
                </div>
                <div className="wrcf-person">
                  <div className="wrcf-av wrcf-lg"><img src="https://res.cloudinary.com/dialhpycd/image/upload/v1767978686/Keyona_Meeks_oowrn6.jpg" alt="Keyona Meeks" /></div>
                  <span className="wrcf-pname">Keyona Meeks</span>
                  <span className="wrcf-prole">General Partner</span>
                </div>
              </div>
            </div>
            <div className="wrcf-team-div" />
            <div className="wrcf-support-cols">
              <div className="wrcf-support-col">
                <p className="wrcf-col-label">Investment Committee</p>
                <div className="wrcf-support-people">
                  {[
                    { src: 'https://res.cloudinary.com/dialhpycd/image/upload/v1767979162/Allison_Gibson_l28nks.png', name: 'Allison Gibson', role: 'Inv. Readiness' },
                    { src: 'https://res.cloudinary.com/dialhpycd/image/upload/v1767977694/Bryan_Watson_zufkqk.jpg', name: 'Bryan Watson', role: 'CleanTech', note: '🇨🇦' },
                    { src: 'https://res.cloudinary.com/dialhpycd/image/upload/v1767977694/John_Nicholson_rdy7gi.jpg', name: 'John Nicholson', role: 'Environmental' },
                    { src: 'https://res.cloudinary.com/dialhpycd/image/upload/v1767977693/Melissa_Allen_w5tvpk.jpg', name: 'Melissa Allen', role: 'Finance' },
                  ].map((p, i) => (
                    <div className="wrcf-person" key={i}>
                      <div className="wrcf-av wrcf-sm"><img src={p.src} alt={p.name} /></div>
                      <span className="wrcf-pname">{p.name}</span>
                      <span className="wrcf-prole">{p.role}</span>
                      {p.note && <span className="wrcf-pnote">{p.note}</span>}
                    </div>
                  ))}
                </div>
              </div>
              <div className="wrcf-support-col">
                <p className="wrcf-col-label">Advisory Committee</p>
                <div className="wrcf-support-people">
                  {[
                    { src: 'https://res.cloudinary.com/dialhpycd/image/upload/v1767977351/Lindsey_Motlow_v1jfan.jpg', name: 'Lindsey Motlow', role: 'Energy Research' },
                    { src: 'https://res.cloudinary.com/dialhpycd/image/upload/v1767977383/Marlon_Thompson_x8owxa.jpg', name: 'Marlon Thompson', role: 'Founder/Investor' },
                    { src: 'https://res.cloudinary.com/dialhpycd/image/upload/v1767977424/Nicholas_Parker_iffwhl.jpg', name: 'Nicholas Parker', role: 'Cleantech Pioneer', note: '🇨🇦' },
                    { src: 'https://res.cloudinary.com/dialhpycd/image/upload/v1770137638/Jade_Lockard_c0lqyt.jpg', name: 'Jade Lockard', role: 'Fundraising' },
                  ].map((p, i) => (
                    <div className="wrcf-person" key={i}>
                      <div className="wrcf-av wrcf-sm"><img src={p.src} alt={p.name} /></div>
                      <span className="wrcf-pname">{p.name}</span>
                      <span className="wrcf-prole">{p.role}</span>
                      {p.note && <span className="wrcf-pnote">{p.note}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* S9 Track Record */}
        <section className={`wrcf-slide wrcf-dark ${current === 8 ? 'active' : ''}`} style={{ alignItems: 'flex-start' }}>
          <p className="wrcf-eyebrow wrcf-up">Track Record</p>
          <h2 className="wrcf-up" style={{ textAlign: 'center' }}><em>Proven</em> Experience</h2>
          <div className="wrcf-tr-pair wrcf-up">
            <div className="wrcf-tr-block">
              <p className="wrcf-tr-name">Bryan Duarte</p>
              <p className="wrcf-tr-role">Managing Partner</p>
              <ul className="wrcf-tr-pts">
                <li>5x Entrepreneur · 3 Exits (8x &amp; 10x EBITDA)</li>
                <li>30+ years energy industry experience</li>
                <li>CleanTech EIR · Techstars advisor</li>
              </ul>
            </div>
            <div className="wrcf-tr-block">
              <p className="wrcf-tr-name">Keyona Meeks</p>
              <p className="wrcf-tr-role">General Partner</p>
              <ul className="wrcf-tr-pts">
                <li>10 deal attributions at Bronze Valley — top accelerator for underrepresented founders</li>
                <li>wildwonder (Inc. 5000 #109) · Brevity ($2M) · Grovara ($8.75M)</li>
                <li>SXSW Judge · Founder, ReRev Labs</li>
              </ul>
            </div>
          </div>
          <p className="wrcf-wef wrcf-up">🏆 WEF (UpLink) Top Innovative Fund — 2022</p>
        </section>

        {/* S10 CTA */}
        <section className={`wrcf-slide wrcf-dark wrcf-s10 ${current === 9 ? 'active' : ''}`}>
          <img className="wrcf-logo wrcf-up" src="https://res.cloudinary.com/dialhpycd/image/upload/v1772833511/BTC_Logo_with_text_-_Transparent_Background_-_Large_finf66.png" alt="BlackTech Capital" />
          <h1 className="wrcf-up" style={{ marginTop: '1.8rem' }}>Let's Build This <em>Together</em></h1>
          <hr className="wrcf-rule wrcf-up" />
          <p className="wrcf-sub wrcf-up">Not "invest in us" — <strong style={{ color: '#f0ede6', fontWeight: 400 }}>partner with us.</strong></p>
          <div className="wrcf-cta-email wrcf-up">info@blacktechcapital.com</div>
          <div className="wrcf-cta-pills wrcf-up">
            <span>Equitable</span><span>·</span>
            <span>Connected</span><span>·</span>
            <span>Sustainable</span><span>·</span>
            <span className="wrcf-hi">Thriving People</span>
          </div>
          <p className="wrcf-up" style={{ marginTop: '2.5rem', fontFamily: "'DM Mono',monospace", fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: 'rgba(240,237,230,0.14)' }}>Confidential · For Qualified Investors Only</p>
        </section>
      </div>

      {/* Navigation */}
      <div className="wrcf-dots">
        {SLIDE_THEMES.map((_, i) => (
          <button
            key={i}
            className={`wrcf-dot ${dotCls(theme)} ${i === current ? 'wrcf-on' : ''}`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => go(i)}
          />
        ))}
      </div>
      <div className="wrcf-nav">
        <button className={`wrcf-nb ${nbCls(theme)}`} onClick={() => go(current - 1)}>←</button>
        <span className={`wrcf-nc ${ncCls(theme)}`}>{current + 1} / {total}</span>
        <button className={`wrcf-nb ${nbCls(theme)}`} onClick={() => go(current + 1)}>→</button>
      </div>
    </>
  );
};

export default WRCFDeck;
