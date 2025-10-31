export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="halo" />
        <div className="orbit">
          <Orbit />
        </div>

        <div className="inner">
          <h1>Work that feels simple</h1>
          <p>
            One place to create letters, run forms, and export clean files.
            Private by default. Yours always.
          </p>
          <div className="bar">
            <input placeholder="Type what you need…" />
            <button>Go</button>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div>
          <h3>Generators</h3>
          <p>Create letters in your tone and language.</p>
        </div>
        <div>
          <h3>Workflows</h3>
          <p>Collect, generate, review, export, done.</p>
        </div>
        <div>
          <h3>Datasets</h3>
          <p>Process full spreadsheets at once.</p>
        </div>
      </section>

      <style jsx>{`
        :root{
          --bg: #1f225c;
          --text: #f8f9ff;
          --muted: rgba(255,255,255,.6);
          --accent: #ffd166;
        }

        /* Hero */
        .hero{
          position: relative;
          min-height: 82vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center;
          overflow: hidden;
        }
        .halo{
          position: absolute; inset: 0;
          background:
            radial-gradient(40rem 40rem at 50% 30%, rgba(255,209,102,.28), transparent 60%),
            radial-gradient(30rem 20rem at 80% 70%, rgba(255,255,255,.06), transparent 70%);
          animation: pulse 14s ease-in-out infinite alternate;
          filter: blur(60px);
        }
        @keyframes pulse {
          from { transform: scale(1); opacity: .8; }
          to { transform: scale(1.15); opacity: 1; }
        }

        .inner{ position: relative; max-width: 720px; z-index: 2; padding: 0 24px; }
        h1{
          font-size: clamp(42px, 6vw, 84px);
          line-height: 1.05;
          margin-bottom: 12px;
          color: var(--text);
        }
        p{
          color: var(--muted);
          font-size: 18px;
          max-width: 540px;
          margin: 0 auto 36px;
        }

        .bar{
          display: flex; justify-content: center;
          gap: 8px; flex-wrap: wrap;
        }
        input{
          width: min(80vw, 420px);
          padding: 14px 16px;
          border-radius: 12px;
          border: none;
          outline: none;
          font-size: 16px;
        }
        button{
          padding: 14px 20px;
          border: none;
          border-radius: 12px;
          background: var(--accent);
          color: #0b0b10;
          font-weight: 700;
          cursor: pointer;
        }

        /* Orbit wrapper */
        .orbit{
          position: absolute;
          width: min(95vw, 860px);
          height: min(95vw, 860px);
          max-width: 860px;
          max-height: 860px;
          border-radius: 9999px;
          z-index: 1;
          pointer-events: none;
        }

        /* Features */
        .features{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          max-width: 900px;
          margin: 96px auto;
          padding: 0 24px;
        }
        .features h3{
          color: var(--accent);
          font-size: 20px;
          margin-bottom: 6px;
        }
        .features p{
          color: var(--muted);
          font-size: 15px;
          margin: 0;
        }

        /* Respect prefers reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .halo { animation: none; }
          .orbit * { animation: none !important; }
        }
      `}</style>
    </main>
  );
}

/* Orbit of HD SVG icons that circle the hero text */
function Orbit() {
  const icons = [
    <IconLesson key="lesson" />,
    <IconCalculator key="calc" />,
    <IconMap key="map" />,
    <IconForm key="form" />,
    <IconChart key="chart" />,
    <IconShield key="shield" />,
    <IconGear key="gear" />,
    <IconGlobe key="globe" />
  ];

  /* Place icons on two rings with different speeds and delays */
  return (
    <>
      <style jsx>{`
        .ring{
          position: absolute; inset: 0; margin: auto;
          width: 100%; height: 100%;
          animation: spin 48s linear infinite;
          filter: drop-shadow(0 10px 24px rgba(0,0,0,.25));
        }
        .ring.r2{ animation-duration: 60s; }

        @keyframes spin { to { transform: rotate(360deg); } }

        .node{
          position: absolute; top: 50%; left: 50%;
          transform-origin: 0 0;
        }
        .node > div{
          background: #fff;
          border-radius: 16px;
          padding: 10px;
          width: 64px; height: 64px;
          display: grid; place-items: center;
        }

        /* Keep icons upright as the ring rotates */
        .node svg{
          transform: rotate(-0deg);
        }

        @media (max-width: 600px){
          .node > div{ width: 52px; height: 52px; padding: 8px; }
        }
      `}</style>

      {/* Outer ring */}
      <div className="ring">
        {icons.slice(0, 4).map((Icon, i) => (
          <OrbNode key={i} index={i} total={4} radius={38} />
        ))}
      </div>

      {/* Inner ring */}
      <div className="ring r2">
        {icons.slice(4).map((Icon, i) => (
          <OrbNode key={i} index={i} total={4} radius={26} reverse />
        ))}
      </div>

      {/* Render icons inside nodes after layout for clarity */}
      {icons.slice(0, 4).map((Icon, i) => (
        <IconWrapper key={`io-${i}`} index={i} total={4} radius={38}>
          {Icon}
        </IconWrapper>
      ))}
      {icons.slice(4).map((Icon, i) => (
        <IconWrapper key={`ii-${i}`} index={i} total={4} radius={26} reverse>
          {Icon}
        </IconWrapper>
      ))}
    </>
  );
}

/* Position helpers */
function IconWrapper({ index, total, radius, reverse, children }) {
  const angle = (index / total) * 360;
  const rot = reverse ? -angle : angle;
  const dist = radius + "vmin";
  return (
    <div
      className="node"
      style={{
        transform: `rotate(${rot}deg) translate(${dist}) rotate(${-rot}deg)`
      }}
    >
      <div>{children}</div>
    </div>
  );
}

/* Empty nodes to drive the ring rotation size. Hidden visually. */
function OrbNode({ index, total, radius, reverse }) {
  const angle = (index / total) * 360;
  const rot = reverse ? -angle : angle;
  const dist = radius + "vmin";
  return (
    <div
      className="node"
      aria-hidden
      style={{
        transform: `rotate(${rot}deg) translate(${dist}) rotate(${-rot}deg)`,
        opacity: 0
      }}
    >
      <div />
    </div>
  );
}

/* HD vector icons */
function IconLesson() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-label="Lessons">
      <rect x="6" y="8" width="36" height="28" rx="4" fill="#7c5cff" />
      <rect x="10" y="12" width="20" height="4" rx="2" fill="#ffffff" />
      <rect x="10" y="19" width="28" height="3" rx="1.5" fill="#cfc7ff" />
      <rect x="10" y="25" width="24" height="3" rx="1.5" fill="#cfc7ff" />
      <rect x="10" y="31" width="18" height="3" rx="1.5" fill="#cfc7ff" />
      <rect x="16" y="38" width="16" height="4" rx="2" fill="#7c5cff" opacity=".25" />
    </svg>
  );
}
function IconCalculator() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-label="Calculator">
      <rect x="10" y="6" width="28" height="36" rx="6" fill="#16db65" />
      <rect x="14" y="10" width="20" height="8" rx="3" fill="#0b0b10" opacity=".2" />
      {[[14,22],[22,22],[30,22],[14,30],[22,30],[30,30]].map(([x,y],i)=>(
        <rect key={i} x={x} y={y} width="6" height="6" rx="2" fill="#ffffff" />
      ))}
    </svg>
  );
}
function IconMap() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-label="Map">
      <path d="M6 12l10-4 16 6 10-4v26l-10 4-16-6-10 4z" fill="#08b8ff"/>
      <path d="M16 8v26m16-20v26" stroke="#ffffff" strokeWidth="2" opacity=".8"/>
      <circle cx="30" cy="18" r="4" fill="#ff5aaa" stroke="#fff" strokeWidth="2"/>
    </svg>
  );
}
function IconForm() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-label="Form">
      <rect x="10" y="6" width="28" height="36" rx="4" fill="#ffd166"/>
      <rect x="14" y="12" width="20" height="4" rx="2" fill="#0b0b10" opacity=".25"/>
      <rect x="14" y="20" width="20" height="3" rx="1.5" fill="#0b0b10" opacity=".25"/>
      <rect x="14" y="27" width="20" height="3" rx="1.5" fill="#0b0b10" opacity=".25"/>
      <rect x="14" y="34" width="12" height="4" rx="2" fill="#ffffff"/>
    </svg>
  );
}
function IconChart() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-label="Chart">
      <rect x="8" y="8" width="32" height="28" rx="4" fill="#ff5aaa"/>
      <rect x="14" y="24" width="4" height="10" rx="2" fill="#ffffff"/>
      <rect x="22" y="20" width="4" height="14" rx="2" fill="#ffffff"/>
      <rect x="30" y="16" width="4" height="18" rx="2" fill="#ffffff"/>
      <path d="M12 34h24" stroke="#ffffff" strokeWidth="2" opacity=".6"/>
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-label="Shield">
      <path d="M24 6l14 6v10c0 9-14 16-14 16S10 31 10 22V12l14-6z" fill="#5ee1a1"/>
      <path d="M24 14v18" stroke="#ffffff" strokeWidth="2" opacity=".9"/>
    </svg>
  );
}
function IconGear() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-label="Gear">
      <circle cx="24" cy="24" r="6" fill="#ffffff"/>
      <path d="M24 8l3 4 5-1 2 5 5 2-1 5 4 3-4 3 1 5-5 2-2 5-5-1-3 4-3-4-5 1-2-5-5-2 1-5-4-3 4-3-1-5 5-2 2-5 5 1z"
        fill="#7c5cff" opacity=".95"/>
    </svg>
  );
}
function IconGlobe() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-label="Globe">
      <circle cx="24" cy="24" r="16" fill="#0ea5e9"/>
      <path d="M8 24h32M24 8v32" stroke="#ffffff" strokeWidth="2" opacity=".9"/>
      <ellipse cx="24" cy="24" rx="10" ry="16" fill="none" stroke="#ffffff" strokeWidth="2" opacity=".9"/>
    </svg>
  );
}
