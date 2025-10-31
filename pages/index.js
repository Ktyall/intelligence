export default function Home() {
  return (
    <main className="hero">
      {/* Hero */}
      <section className="grid grid2">
        <div className="card">
          <h1 className="title">Everything your school needs in one clean place</h1>
          <p className="lead">
            Letters, forms, exports, and history with full privacy per campus. You watch it all from the owner console.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="#login"><button className="cta">Get started</button></a>
            <a href="#how"><button className="ghost">See how it works</button></a>
          </div>
          <div style={{ marginTop: 14, color: "#6b7280" }}>
            Fast on phone, tablet, and laptop.
          </div>
        </div>

        {/* Hero visual */}
        <div className="card" style={{ display: "grid", placeItems: "center", minHeight: 280 }}>
          <Mascot />
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ marginTop: 18 }} className="grid grid3">
        <Feature color="#16db65" title="Generators" text="Write letters and docs in your voice" />
        <Feature color="#0ea5e9" title="Workflows" text="Form in, generate, review, export, email" />
        <Feature color="#7c3aed" title="Datasets" text="Connect Sheets and run rows at scale" />
      </section>

      {/* How it works */}
      <section id="how" style={{ marginTop: 18 }} className="card">
        <ol style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
          <li>School signs in and opens a tool tile</li>
          <li>Fill inputs or pick a prompt, then Generate</li>
          <li>Review output and export to Drive</li>
          <li>Owner sees activity and can switch into any campus to help</li>
        </ol>
      </section>

      {/* Pricing preview */}
      <section id="pricing" style={{ marginTop: 18 }} className="grid grid3">
        <Price name="Starter" price="$99" note="One school" />
        <Price name="Growth" price="$499" note="Up to ten schools" hot />
        <Price name="Network" price="Contact" note="Many schools" />
      </section>

      {/* Simple login card */}
      <section id="login" style={{ marginTop: 18 }} className="card">
        <h3 style={{ margin: "0 0 8px 0" }}>Sign in</h3>
        <div style={{ display: "grid", gap: 10, maxWidth: 420 }}>
          <input placeholder="Email" style={input} />
          <input placeholder="Password" type="password" style={input} />
          <button className="cta">Continue</button>
          <div className="muted">Real auth comes next phase</div>
        </div>
      </section>
    </main>
  );
}

/* Components */

function Feature({ color, title, text }) {
  return (
    <div className="card">
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Badge color={color} />
        <div style={{ fontWeight: 900 }}>{title}</div>
      </div>
      <div className="muted" style={{ marginTop: 6 }}>{text}</div>
    </div>
  );
}

function Price({ name, price, note, hot }) {
  return (
    <div className="card" style={{ borderColor: hot ? "rgba(22,219,101,.35)" : "var(--ring)" }}>
      <div style={{ fontWeight: 900 }}>{name}</div>
      <div style={{ fontSize: 28, marginTop: 6 }}>{price}</div>
      <div className="muted">{note}</div>
    </div>
  );
}

function Badge({ color }) {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" className="floaty" style={{ filter: "drop-shadow(0 6px 12px rgba(0,0,0,.12))" }}>
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={color} />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="32" height="32" rx="10" fill="url(#g)" />
      <circle cx="20" cy="20" r="8" fill="#ffffff" opacity=".9" />
    </svg>
  );
}

function Mascot() {
  return (
    <svg viewBox="0 0 180 120" width="100%" className="floaty">
      <defs>
        <linearGradient id="m1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#16db65" />
          <stop offset="1" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="180" height="120" rx="18" fill="url(#m1)" />
      <circle cx="60" cy="60" r="18" fill="#fff" opacity=".95" />
      <circle cx="120" cy="60" r="18" fill="#fff" opacity=".95" />
      <rect x="70" y="80" width="40" height="8" rx="4" fill="#fff" opacity=".95" />
    </svg>
  );
}

const input = {
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(11,11,15,.12)",
  fontSize: 16
};
