function Badge({ color, label }) {
  return (
    <div className="badge" style={{ backgroundColor: color }}>
      <span>{label}</span>
      <style jsx>{`
        .badge{
          display: inline-flex; align-items: center; justify-content: center;
          height: 44px; min-width: 44px; padding: 0 12px; border-radius: 14px;
          color: #0b0b0f; font-weight: 900; box-shadow: 0 6px 16px rgba(0,0,0,.12);
          transform: rotate(-2deg);
        }
        .badge span{ transform: rotate(2deg); }
      `}</style>
    </div>
  );
}

function Confetti() {
  const dots = Array.from({ length: 18 });
  return (
    <svg viewBox="0 0 320 220" width="100%" className="floaty" aria-hidden>
      {dots.map((_, i) => {
        const cx = Math.random() * 320;
        const cy = Math.random() * 220;
        const r = 4 + Math.random() * 10;
        const palette = ["#ff5aaa", "#7c5cff", "#08b8ff", "#ffd166"];
        const fill = palette[i % palette.length];
        return <circle key={i} cx={cx} cy={cy} r={r} fill={fill} opacity=".9" />;
      })}
    </svg>
  );
}

export default function Home() {
  return (
    <main className="hero">
      {/* Hero */}
      <section className="grid grid2">
        <div className="card">
          <Badge color="#ffd166" label="New" />{" "}
          <Badge color="#ff5aaa" label="Fast" />{" "}
          <Badge color="#08b8ff" label="Private" />
          <h1 className="title" style={{ marginTop: 10 }}>Do school work in one place</h1>
          <p className="lead">
            Letters, forms, exports, and history for every campus. Each school sees only its world. You watch everything from the owner view.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="#login"><button className="cta">Get started</button></a>
            <a href="#how"><button className="ghost">See how it works</button></a>
          </div>
          <div style={{ marginTop: 14, color: "#6b7280" }}>
            Built to feel joyful. Runs smooth on phone and laptop.
          </div>
        </div>

        {/* Hero visual with playful confetti on a solid emerald backdrop */}
        <div className="card" style={{ display: "grid", placeItems: "center", minHeight: 300, background: "#0b0b0f" }}>
          <div style={{ width: "90%", maxWidth: 520 }}>
            <Confetti />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ marginTop: 18 }} className="grid grid3">
        <div className="card">
          <div style={{ fontWeight: 900, fontSize: 18 }}>Generators</div>
          <div className="lead" style={{ marginTop: 6, fontSize: 16 }}>
            Write letters and docs in your voice, Spanish or English.
          </div>
        </div>
        <div className="card">
          <div style={{ fontWeight: 900, fontSize: 18 }}>Workflows</div>
          <div className="lead" style={{ marginTop: 6, fontSize: 16 }}>
            Form in, generate, review, export, email.
          </div>
        </div>
        <div className="card">
          <div style={{ fontWeight: 900, fontSize: 18 }}>Datasets</div>
          <div className="lead" style={{ marginTop: 6, fontSize: 16 }}>
            Connect Sheets and run rows at scale.
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" style={{ marginTop: 18 }} className="card">
        <ol style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9 }}>
          <li>School signs in and opens a tool tile</li>
          <li>Fill inputs or pick a preset, then generate</li>
          <li>Review and export to Drive</li>
          <li>Owner sees activity and can switch into any campus to help</li>
        </ol>
      </section>

      {/* Pricing preview */}
      <section id="pricing" style={{ marginTop: 18 }} className="grid grid3">
        <div className="card"><b>Starter</b><div className="lead" style={{ marginTop: 6, fontSize: 16 }}>$99 per month</div></div>
        <div className="card" style={{ borderColor: "rgba(255,90,170,.35)" }}><b>Growth</b><div className="lead" style={{ marginTop: 6, fontSize: 16 }}>$499 per month</div></div>
        <div className="card"><b>Network</b><div className="lead" style={{ marginTop: 6, fontSize: 16 }}>Contact</div></div>
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

const input = {
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(0,0,0,.12)",
  fontSize: 16
};
