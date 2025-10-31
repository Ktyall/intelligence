// components/Hero.js
import { useEffect, useRef } from "react";

export default function Hero() {
  const lensRef = useRef(null);

  // track cursor and feed CSS variables for the reveal mask
  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX ?? window.innerWidth / 2;
      const y = e.clientY ?? window.innerHeight / 2;
      document.documentElement.style.setProperty("--lx", x + "px");
      document.documentElement.style.setProperty("--ly", y + "px");
      const lens = lensRef.current;
      if (lens) lens.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };
    onMove({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const launch = (e) => {
    e.preventDefault();
    document.body.classList.add("transition-out");
    setTimeout(() => {
      window.location.href = "/demo";
    }, 650);
  };

  return (
    <section className="hero">
      {/* cinematic background */}
      <div className="bg field" aria-hidden />
      <div className="bg fog" aria-hidden />
      <div className="bg rings" aria-hidden />

      {/* reveal layer sits above bg and below text */}
      <div className="reveal" aria-hidden>
        <Stamp style={{ top: "14%", left: "18%" }} kind="book" label="Lesson plans" />
        <Stamp style={{ top: "22%", left: "70%" }} kind="calc" label="Grades" />
        <Stamp style={{ top: "36%", left: "42%" }} kind="map" label="Campus map" />
        <Stamp style={{ top: "58%", left: "22%" }} kind="diploma" label="Transcripts" />
        <Stamp style={{ top: "62%", left: "66%" }} kind="clipboard" label="Checklists" />
        <Stamp style={{ top: "46%", left: "80%" }} kind="calendar" label="Calendar" />
        <Stamp style={{ top: "72%", left: "40%" }} kind="globe" label="Languages" />
        <Stamp style={{ top: "30%", left: "6%" }} kind="beaker" label="Labs" />
        <Stamp style={{ top: "12%", left: "86%" }} kind="star" label="Merit" />
      </div>

      {/* interactive lens glow */}
      <div className="lens" ref={lensRef} aria-hidden />

      {/* foreground content */}
      <div className="inner">
        <h1 className="mark">Intelligence</h1>
        <p className="lead">
          Everything your school does. Orchestrated with calm precision.
        </p>
        <div className="ctaWrap">
          <a href="/demo" onClick={launch} className="cta">Launch demo</a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 90vh;
          display: grid;
          place-items: center;
          overflow: hidden;
          text-align: center;
          color: #eef2ff;
        }

        .bg { position: absolute; inset: -20%; pointer-events: none; }
        .field {
          background:
            radial-gradient(1200px 700px at 20% -10%, #0f1630 0%, transparent 60%),
            radial-gradient(1200px 700px at 90% 120%, #0a1430 0%, transparent 60%),
            linear-gradient(180deg, #0b1224, #0f1630);
        }
        .fog {
          background:
            radial-gradient(40rem 30rem at 50% 30%, rgba(88,208,255,.18), transparent 60%),
            radial-gradient(36rem 24rem at 70% 70%, rgba(127,231,196,.14), transparent 60%);
          filter: blur(60px) saturate(115%);
          animation: breathe 18s ease-in-out infinite alternate;
        }
        .rings {
          background:
            conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,.05), rgba(255,255,255,0) 40%);
          mask-image: radial-gradient(closest-side, rgba(0,0,0,.9), rgba(0,0,0,0) 70%);
          animation: spin 60s linear infinite;
          mix-blend-mode: screen;
        }
        @keyframes breathe { from { transform: scale(1) } to { transform: scale(1.08) } }
        @keyframes spin { to { transform: rotate(360deg) } }

        /* reveal layer uses a mask that follows the cursor */
        .reveal {
          position: absolute;
          inset: 0;
          z-index: 1;

          /* allow hover so tiles can react */
          pointer-events: auto;

          /* circular window controlled by CSS variables set in JS */
          -webkit-mask-image: radial-gradient(
            240px 240px at var(--lx, 50%) var(--ly, 50%),
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,1) 44%,
            rgba(0,0,0,0) 60%
          );
          mask-image: radial-gradient(
            240px 240px at var(--lx, 50%) var(--ly, 50%),
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,1) 44%,
            rgba(0,0,0,0) 60%
          );
        }

        /* interactive lens glow that sits under the mask for light */
        .lens {
          position: absolute;
          width: 780px;
          height: 780px;
          border-radius: 50%;
          background:
            radial-gradient(circle at 50% 50%, rgba(255,255,255,.18), rgba(255,255,255,0) 52%),
            radial-gradient(circle at 40% 40%, rgba(88,208,255,.22), rgba(88,208,255,0) 60%),
            radial-gradient(circle at 60% 60%, rgba(127,231,196,.18), rgba(127,231,196,0) 60%);
          filter: blur(60px);
          transform: translate(-50%, -50%);
          transition: transform .12s ease;
          pointer-events: none;
          mix-blend-mode: screen;
        }

        .inner { position: relative; z-index: 2; max-width: 900px; padding: 0 22px; }
        .mark {
          margin: 0 0 8px 0;
          font-size: clamp(48px, 7vw, 120px);
          line-height: 1.02;
          letter-spacing: .5px;
          font-weight: 800;
          background: linear-gradient(180deg, #ffffff, #cfeaff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 20px 60px rgba(88, 208, 255, .22);
        }
        .lead {
          margin: 0 auto 26px;
          max-width: 680px;
          color: rgba(238,242,255,.78);
          font-size: clamp(16px, 2.2vw, 20px);
        }
        .ctaWrap { display: flex; justify-content: center; gap: 12px; }
        .cta {
          display: inline-flex; align-items: center; justify-content: center;
          height: 48px; padding: 0 18px; border-radius: 12px;
          font-weight: 800; text-decoration: none; color: #0b0b10;
          background: linear-gradient(180deg, #8fe4ff, #58d0ff);
          box-shadow:
            0 18px 40px rgba(88,208,255,.35), inset 0 1px 0 rgba(255,255,255,.8);
        }

        /* fade to white on launch */
        :global(body.transition-out)::after{
          content: "";
          position: fixed; inset: 0; z-index: 9999;
          background: #ffffff;
          animation: fadein .65s ease forwards;
        }
        @keyframes fadein { from { opacity: 0 } to { opacity: 1 } }

        @media (prefers-reduced-motion: reduce) {
          .fog, .rings { animation: none }
        }
      `}</style>
    </section>
  );
}

/* one Stamp is a softly lit tile with a high fidelity icon and a label */
function Stamp({ style, kind, label }) {
  return (
    <div className="stamp" style={style}>
      {icons[kind]}
      <div className="tag">{label}</div>
      <style jsx>{`
        .stamp{
          position: absolute;
          width: 96px; height: 96px;
          display: grid; place-items: center;
          border-radius: 22px;
          background:
            radial-gradient(120% 120% at 30% 20%, rgba(255,255,255,.92), rgba(255,255,255,.62) 40%, rgba(255,255,255,.38) 70%),
            linear-gradient(180deg, rgba(255,255,255,.35), rgba(255,255,255,.12));
          border: 1px solid rgba(255,255,255,.55);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.9),
            inset 0 -1px 0 rgba(0,0,0,.08),
            0 20px 40px rgba(0,0,0,.35);
          animation: bob 6s ease-in-out infinite;
          transition: transform .18s ease, box-shadow .18s ease;
        }
        .stamp:hover{
          transform: translateY(-4px) scale(1.06);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.9),
            inset 0 -1px 0 rgba(0,0,0,.08),
            0 26px 60px rgba(0,0,0,.45);
        }
        @keyframes bob { 0%{ transform: translateY(0) } 50%{ transform: translateY(-6px) } 100%{ transform: translateY(0) } }

        .tag{
          position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
          margin-top: 8px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,.9);
          color: #0b0b10;
          font-weight: 800; font-size: 12px;
          white-space: nowrap;
          box-shadow: 0 8px 20px rgba(0,0,0,.25), inset 0 1px 0 rgba(255,255,255,.9);
          opacity: .95;
        }

        @media (max-width: 600px){
          .stamp{ width: 80px; height: 80px }
          .tag{ font-size: 11px }
        }
      `}</style>
    </div>
  );
}

/* icon set */
const icons = {
  book: (
    <svg viewBox="0 0 48 48" width="44" height="44" aria-label="Lessons">
      <defs>
        <linearGradient id="b1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c1d9ff"/><stop offset="1" stopColor="#89b7ff"/>
        </linearGradient>
        <radialGradient id="bh" cx="30%" cy="20%">
          <stop offset="0" stopColor="#fff" stopOpacity=".9"/><stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect x="7" y="6" width="34" height="36" rx="7" fill="url(#b1)"/>
      <rect x="12" y="14" width="18" height="3" rx="1.5" fill="#ffffff" opacity=".9"/>
      <rect x="12" y="21" width="24" height="3" rx="1.5" fill="#ffffff" opacity=".75"/>
      <rect x="12" y="28" width="18" height="3" rx="1.5" fill="#ffffff" opacity=".75"/>
      <rect x="12" y="35" width="12" height="3" rx="1.5" fill="#ffffff" opacity=".75"/>
      <circle cx="18" cy="12" r="10" fill="url(#bh)" />
    </svg>
  ),
  calc: (
    <svg viewBox="0 0 48 48" width="44" height="44" aria-label="Calculator">
      <defs>
        <linearGradient id="c1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#baf9e1"/><stop offset="1" stopColor="#7fe7c4"/>
        </linearGradient>
      </defs>
      <rect x="8" y="4" width="32" height="40" rx="9" fill="url(#c1)"/>
      {[[14,24],[22,24],[30,24],[14,32],[22,32],[30,32]].map(([x,y],i)=>(
        <rect key={i} x={x} y={y} width="6" height="6" rx="2" fill="#0b0b10" opacity=".85"/>
      ))}
    </svg>
  ),
  map: (
    <svg viewBox="0 0 48 48" width="44" height="44" aria-label="Map">
      <defs>
        <linearGradient id="m1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8fe4ff"/><stop offset="1" stopColor="#58d0ff"/>
        </linearGradient>
      </defs>
      <path d="M6 12l10-4 16 6 10-4v26l-10 4-16-6-10 4z" fill="url(#m1)"/>
      <circle cx="30" cy="18" r="4" fill="#ffefff" />
      <path d="M16 8v26m16-20v26" stroke="#ffffff" strokeWidth="2" opacity=".8"/>
    </svg>
  ),
  diploma: (
    <svg viewBox="0 0 48 48" width="44" height="44" aria-label="Diploma">
      <defs>
        <linearGradient id="d1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe6b3"/><stop offset="1" stopColor="#ffd166"/>
        </linearGradient>
      </defs>
      <rect x="8" y="12" width="32" height="24" rx="4" fill="url(#d1)"/>
      <circle cx="34" cy="24" r="4" fill="#ff6aa0"/>
      <path d="M12 18h16M12 26h10" stroke="#0b0b10" strokeWidth="2" opacity=".3"/>
    </svg>
  ),
  clipboard: (
    <svg viewBox="0 0 48 48" width="44" height="44" aria-label="Clipboard">
      <defs>
        <linearGradient id="cl1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e6eaff"/><stop offset="1" stopColor="#c9d3ff"/>
        </linearGradient>
      </defs>
      <rect x="12" y="10" width="24" height="30" rx="6" fill="url(#cl1)"/>
      <rect x="18" y="6" width="12" height="8" rx="3" fill="#ffffff" opacity=".9"/>
      <path d="M18 20h12M18 26h12M18 32h8" stroke="#0b0b10" strokeWidth="2" opacity=".25"/>
    </svg>
  ),
  calendar: (
    <svg viewBox="0 0 48 48" width="44" height="44" aria-label="Calendar">
      <defs>
        <linearGradient id="ca1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffdcdc"/><stop offset="1" stopColor="#ffb2b2"/>
        </linearGradient>
      </defs>
      <rect x="8" y="10" width="32" height="28" rx="6" fill="url(#ca1)"/>
      <rect x="14" y="16" width="20" height="4" rx="2" fill="#0b0b10" opacity=".2"/>
      <rect x="14" y="24" width="6" height="6" rx="2" fill="#0b0b10" opacity=".85"/>
      <rect x="22" y="24" width="6" height="6" rx="2" fill="#0b0b10" opacity=".85"/>
      <rect x="30" y="24" width="6" height="6" rx="2" fill="#0b0b10" opacity=".85"/>
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 48 48" width="44" height="44" aria-label="Globe">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8fe4ff"/><stop offset="1" stopColor="#58d0ff"/>
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="16" fill="url(#g1)"/>
      <path d="M8 24h32M24 8v32" stroke="#ffffff" strokeWidth="2" opacity=".9"/>
      <ellipse cx="24" cy="24" rx="10" ry="16" fill="none" stroke="#ffffff" strokeWidth="2" opacity=".9"/>
    </svg>
  ),
  beaker: (
    <svg viewBox="0 0 48 48" width="44" height="44" aria-label="Science">
      <defs>
        <linearGradient id="bk1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#baf9e1"/><stop offset="1" stopColor="#7fe7c4"/>
        </linearGradient>
      </defs>
      <path d="M16 8h16v4l-4 6v10a8 8 0 11-8 0V18l-4-6z" fill="url(#bk1)"/>
      <circle cx="20" cy="34" r="2" fill="#0b0b10" opacity=".25"/>
      <circle cx="28" cy="30" r="2" fill="#0b0b10" opacity=".25"/>
    </svg>
  ),
  star: (
    <svg viewBox="0 0 48 48" width="44" height="44" aria-label="Quality">
      <defs>
        <linearGradient id="st1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff3b0"/><stop offset="1" stopColor="#ffd166"/>
        </linearGradient>
      </defs>
      <path d="M24 8l4 8 9 1-7 6 2 9-8-4-8 4 2-9-7-6 9-1z" fill="url(#st1)"/>
    </svg>
  ),
};
