export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <LoginStub />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="orb-bg" aria-hidden />
      <FloatingIcons />

      <div className="wrap inner">
        <h1>Work that feels simple</h1>
        <p>One place to create letters, run forms, and export clean files. Private by default. Yours always.</p>

        <div className="bar">
          <input placeholder="Type what you need…" />
          <button>Go</button>
        </div>
      </div>

      <style jsx>{`
        .hero{
          position: relative;
          min-height: 82vh;
          display: grid; place-items: center;
          text-align: center;
          overflow: hidden;
        }

        /* Soft 3D glow behind hero */
        .orb-bg{
          position: absolute; inset: -10%;
          background:
            radial-gradient(60rem 30rem at 50% 0%, rgba(88,208,255,.20), transparent 60%),
            radial-gradient(50rem 28rem at 80% 100%, rgba(127,231,196,.16), transparent 60%);
          filter: blur(60px) saturate(110%);
          animation: breathe 18s ease-in-out infinite alternate;
        }
        @keyframes breathe { from { transform: scale(1)} to { transform: scale(1.12)} }

        .inner{ position: relative; z-index: 2; }
        h1{
          font-size: clamp(44px, 6.8vw, 88px);
          line-height: 1.06;
          margin: 0 0 10px 0;
          letter-spacing: -.02em;
          text-shadow: 0 10px 40px rgba(88,208,255,.18);
        }
        p{
          margin: 0 auto 28px;
          max-width: 560px;
          color: var(--muted);
          font-size: clamp(16px, 2.4vw, 18px);
        }

        .bar{
          display: inline-grid;
          grid-template-columns: 1fr auto;
          gap: 10px;
          width: min(92vw, 560px);
          padding: 8px;
          border-radius: 16px;
          background:
            linear-gradient(180deg, rgba(255,255,255,.10), rgba(255,255,255,.04));
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.12),
            0 12px 40px rgba(0,0,0,.35);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,.14);
        }
        input{
          border: 0; outline: 0; background: rgba(255,255,255,.12);
          padding: 14px 16px; border-radius: 12px;
          color: var(--text);
          font-size: 16px;
          box-shadow: inset 0 1px 0 rgba(255,255,255,.08);
        }
        input::placeholder{ color: rgba(238,242,255,.55); }
        button{
          border: 0; border-radius: 12px; padding: 14px 18px;
          font-weight: 800; cursor: pointer;
          color: var(--ink);
          background: linear-gradient(180deg, #8fe4ff, var(--accent));
          box-shadow:
            0 10px 30px rgba(88,208,255,.35),
            inset 0 1px 0 rgba(255,255,255,.7);
        }

        @media (prefers-reduced-motion: reduce){
          .orb-bg, .float, .spinner{ animation: none !important }
        }
      `}</style>
    </section>
  );
}

/* Minimal feature row */
function Features() {
  const items = [
    { t: "Generators", d: "Letters and docs in your tone", c: "#8fe4ff" },
    { t: "Workflows", d: "Collect, generate, export", c: "#7fe7c4" },
    { t: "Datasets", d: "Process full spreadsheets", c: "#d7e2ff" }
  ];
  return (
    <section id="features" className="wrap features">
      {items.map((x) => (
        <div key={x.t} className="chip" style={{ background: x.c }}>
          <div className="label">{x.t}</div>
          <div className="sub"> {x.d} </div>
        </div>
      ))}
      <style jsx>{`
        .features{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
          margin: 72px 0 36px;
        }
        .chip{
          border-radius: 16px;
          padding: 16px;
          color: #0b0b10;
          box-shadow: 0 8px 24px rgba(0,0,0,.15), inset 0 1px 0 rgba(255,255,255,.7);
        }
        .label{ font-weight: 900; }
        .sub{ opacity: .8; font-weight: 600; margin-top: 4px; }
      `}</style>
    </section>
  );
}

/* Simple login card placeholder */
function LoginStub() {
  return (
    <section id="login" className="wrap login">
      <div className="card">
        <h3>Sign in</h3>
        <div className="grid">
          <input placeholder="Email" />
          <input placeholder="Password" type="password" />
          <button>Continue</button>
        </div>
        <div className="muted">Real sign in lands in the next phase</div>
      </div>

      <style jsx>{`
        .login{ margin: 48px 0 96px; }
        .card{
          max-width: 520px; margin: 0 auto; padding: 20px;
          border-radius: 18px; background: rgba(255,255,255,.06);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: 0 12px 40px rgba(0,0,0,.35);
          text-align: center;
        }
        .grid{ display: grid; gap: 10px; }
        input{
          border: 0; outline: 0; background: rgba(255,255,255,.10);
          padding: 12px 14px; border-radius: 12px; color: var(--text);
        }
        button{
          border: 0; border-radius: 12px; padding: 12px 16px;
          font-weight: 800; cursor: pointer;
          color: var(--ink); background: var(--accent);
          box-shadow: 0 10px 24px rgba(88,208,255,.30), inset 0 1px 0 rgba(255,255,255,.7);
        }
        .muted{ color: var(--muted); margin-top: 8px; font-size: 14px; }
      `}</style>
    </section>
  );
}

/* High fidelity 3D-like icon set that orbits the headline */
function FloatingIcons() {
  const nodes = [
    IconBook(), IconCalc(), IconMap(), IconShield(),
    IconChart(), IconStars(), IconForm(), IconBell()
  ];
  return (
    <>
      <style jsx>{`
        .layer{
          position: absolute; inset: 0; margin: auto;
          width: min(95vw, 900px); height: min(95vw, 900px);
          pointer-events: none; z-index: 1;
        }
        .spinner{
          position: absolute; inset: 0;
          animation: spin 60s linear infinite;
        }
        .spinner.slow{ animation-duration: 90s; }
        @keyframes spin { to { transform: rotate(360deg) } }

        .float{
          position: absolute; top: 50%; left: 50%;
          transform-origin: 0 0;
          filter: drop-shadow(0 18px 40px rgba(0,0,0,.35));
        }
        .tile{
          width: 72px; height: 72px; display: grid; place-items: center;
          border-radius: 18px;
          background:
            radial-gradient(120% 120% at 30% 20%, rgba(255,255,255,.9), rgba(255,255,255,.6) 40%, rgba(255,255,255,.35) 70%),
            linear-gradient(180deg, rgba(255,255,255,.35), rgba(255,255,255,.10));
          border: 1px solid rgba(255,255,255,.5);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.9),
            inset 0 -1px 0 rgba(0,0,0,.08);
        }
        @media (max-width: 600px){ .tile{ width: 58px; height: 58px } }
      `}</style>

      <div className="layer">
        <div className="spinner">
          {nodes.slice(0,4).map((Icon, i) => (
            <IconNode key={i} index={i} total={4} radius={36}>{Icon}</IconNode>
          ))}
        </div>
        <div className="spinner slow">
          {nodes.slice(4).map((Icon, i) => (
            <IconNode key={i} index={i} total={4} radius={24} reverse>{Icon}</IconNode>
          ))}
        </div>
      </div>
    </>
  );
}

function IconNode({ index, total, radius, reverse, children }) {
  const angle = (index / total) * 360;
  const rot = reverse ? -angle : angle;
  const dist = radius + "vmin";
  return (
    <div
      className="float"
      style={{ transform: `rotate(${rot}deg) translate(${dist}) rotate(${-rot}deg)` }}
    >
      <div className="tile">{children}</div>
    </div>
  );
}

/* 3D styled SVG icons with gradients and highlights */
function IconBook(){
  return (
    <svg viewBox="0 0 48 48" width="34" height="34" aria-label="Lessons">
      <defs>
        <linearGradient id="b1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c1d9ff"/><stop offset="1" stopColor="#89b7ff"/>
        </linearGradient>
        <radialGradient id="bh" cx="30%" cy="20%">
          <stop offset="0" stopColor="#fff" stopOpacity=".9"/><stop offset="1" stopColor="#fff" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect x="9" y="8" width="30" height="32" rx="6" fill="url(#b1)"/>
      <rect x="12" y="13" width="18" height="3" rx="1.5" fill="#ffffff" opacity=".9"/>
      <rect x="12" y="19" width="24" height="3" rx="1.5" fill="#ffffff" opacity=".7"/>
      <rect x="12" y="25" width="18" height="3" rx="1.5" fill="#ffffff" opacity=".7"/>
      <rect x="12" y="31" width="12" height="3" rx="1.5" fill="#ffffff" opacity=".7"/>
      <circle cx="18" cy="12" r="10" fill="url(#bh)" />
    </svg>
  );
}
function IconCalc(){
  return (
    <svg viewBox="0 0 48 48" width="34" height="34" aria-label="Calculator">
      <defs>
        <linearGradient id="c1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#baf9e1"/><stop offset="1" stopColor="#7fe7c4"/>
        </linearGradient>
      </defs>
      <rect x="10" y="6" width="28" height="36" rx="8" fill="url(#c1)"/>
      {[[14,24],[22,24],[30,24],[14,32],[22,32],[30,32]].map(([x,y],i)=>(
        <rect key={i} x={x} y={y} width="6" height="6" rx="2" fill="#0b0b10" opacity=".85"/>
      ))}
    </svg>
  );
}
function IconMap(){
  return (
    <svg viewBox="0 0 48 48" width="34" height="34" aria-label="Map">
      <defs>
        <linearGradient id="m1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8fe4ff"/><stop offset="1" stopColor="#58d0ff"/>
        </linearGradient>
      </defs>
      <path d="M6 12l10-4 16 6 10-4v26l-10 4-16-6-10 4z" fill="url(#m1)"/>
      <circle cx="30" cy="18" r="4" fill="#ffefff" />
      <path d="M16 8v26m16-20v26" stroke="#ffffff" strokeWidth="2" opacity=".8"/>
    </svg>
  );
}
function IconShield(){
  return (
    <svg viewBox="0 0 48 48" width="34" height="34" aria-label="Shield">
      <defs>
        <linearGradient id="s1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d8ffe6"/><stop offset="1" stopColor="#aaf7cf"/>
        </linearGradient>
      </defs>
      <path d="M24 6l14 6v10c0 9-14 16-14 16S10 31 10 22V12l14-6z" fill="url(#s1)"/>
      <path d="M24 14v18" stroke="#0b0b10" strokeWidth="2" opacity=".2"/>
    </svg>
  );
}
function IconChart(){
  return (
    <svg viewBox="0 0 48 48" width="34" height="34" aria-label="Chart">
      <defs>
        <linearGradient id="ch1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffdcdc"/><stop offset="1" stopColor="#ffb2b2"/>
        </linearGradient>
      </defs>
      <rect x="8" y="10" width="32" height="26" rx="6" fill="url(#ch1)"/>
      <rect x="14" y="24" width="4" height="10" rx="2" fill="#0b0b10" opacity=".85"/>
      <rect x="22" y="20" width="4" height="14" rx="2" fill="#0b0b10" opacity=".85"/>
      <rect x="30" y="16" width="4" height="18" rx="2" fill="#0b0b10" opacity=".85"/>
    </svg>
  );
}
function IconStars(){
  return (
    <svg viewBox="0 0 48 48" width="34" height="34" aria-label="Quality">
      <defs>
        <linearGradient id="st1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff3b0"/><stop offset="1" stopColor="#ffd166"/>
        </linearGradient>
      </defs>
      <path d="M24 8l4 8 9 1-7 6 2 9-8-4-8 4 2-9-7-6 9-1z" fill="url(#st1)"/>
      <circle cx="36" cy="14" r="3" fill="#fff7cc" />
    </svg>
  );
}
function IconForm(){
  return (
    <svg viewBox="0 0 48 48" width="34" height="34" aria-label="Form">
      <defs>
        <linearGradient id="f1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e6eaff"/><stop offset="1" stopColor="#c9d3ff"/>
        </linearGradient>
      </defs>
      <rect x="10" y="6" width="28" height="36" rx="6" fill="url(#f1)"/>
      <rect x="14" y="14" width="20" height="3" rx="1.5" fill="#0b0b10" opacity=".25"/>
      <rect x="14" y="22" width="20" height="3" rx="1.5" fill="#0b0b10" opacity=".25"/>
      <rect x="14" y="30" width="14" height="4" rx="2" fill="#0b0b10" opacity=".85"/>
    </svg>
  );
}
function IconBell(){
  return (
    <svg viewBox="0 0 48 48" width="34" height="34" aria-label="Alerts">
      <defs>
        <linearGradient id="bl1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe3f2"/><stop offset="1" stopColor="#ffb3da"/>
        </linearGradient>
      </defs>
      <path d="M24 10c-6 0-10 4-10 10v6l-2 3h24l-2-3v-6c0-6-4-10-10-10z" fill="url(#bl1)"/>
      <circle cx="24" cy="37" r="3" fill="#ffffff" opacity=".9"/>
    </svg>
  );
}
