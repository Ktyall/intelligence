export default function Home() {
  return (
    <>
      <main style={{ position: "relative", paddingTop: 20 }}>
        <div className="blobs">
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
        </div>

        <section className="wrap" style={{ marginTop: 28 }}>
          {/* Hero */}
          <div className="grid grid2" style={{ alignItems: "center" }}>
            <div>
              <h1 className="title">One place for school work that feels easy</h1>
              <p className="lead">
                Letters, forms, exports, and history for each campus with privacy by default. You see the whole network from the owner console.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a href="#login"><button className="cta">Get started</button></a>
                <a href="#how"><button className="ghost">See how it works</button></a>
              </div>
            </div>

            {/* Clean hero card on dark background */}
            <div className="card" style={{ minHeight: 280 }}>
              <div style={{ fontWeight: 900, fontSize: 18, marginBottom: 8 }}>Quick run</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 8 }}>
                <input placeholder="Type what you need" style={input} />
                <button className="cta">Go</button>
              </div>
              <div style={{ marginTop: 8, color: "#6b7280", fontSize: 13 }}>
                Example. Parent letter in Spanish about MAP results
              </div>
            </div>
          </div>

          {/* Features */}
          <section id="features" style={{ marginTop: 20 }} className="grid grid3">
            {[
              { t: "Generators", d: "Write letters and docs in your voice" },
              { t: "Workflows", d: "Form in, generate, review, export, email" },
              { t: "Datasets", d: "Connect Sheets and run rows at scale" },
            ].map(x => (
              <div key={x.t} className="card">
                <div style={{ fontWeight: 900, fontSize: 18 }}>{x.t}</div>
                <div style={{ marginTop: 6, color: "#555" }}>{x.d}</div>
              </div>
            ))}
          </section>

          {/* How */}
          <section id="how" style={{ marginTop: 20 }} className="card">
            <ol style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9, color: "#333" }}>
              <li>School signs in and opens a tool tile</li>
              <li>Fill inputs or pick a preset then generate</li>
              <li>Review and export to Drive</li>
              <li>Owner sees activity and can switch into any campus to help</li>
            </ol>
          </section>

          {/* Pricing */}
          <section id="pricing" style={{ marginTop: 20 }} className="grid grid3">
            {[
              { name: "Starter", price: "$99", note: "One school" },
              { name: "Growth", price: "$499", note: "Up to ten schools" },
              { name: "Network", price: "Contact", note: "Many schools" },
            ].map(x => (
              <div key={x.name} className="card">
                <div style={{ fontWeight: 900 }}>{x.name}</div>
                <div style={{ fontSize: 28, marginTop: 6 }}>{x.price}</div>
                <div style={{ color: "#555" }}>{x.note}</div>
              </div>
            ))}
          </section>

          {/* Login stub */}
          <section id="login" style={{ marginTop: 20 }} className="card">
            <h3 style={{ margin: "0 0 8px 0" }}>Sign in</h3>
            <div style={{ display: "grid", gap: 10, maxWidth: 420 }}>
              <input placeholder="Email" style={input} />
              <input placeholder="Password" type="password" style={input} />
              <button className="cta">Continue</button>
              <div style={{ color: "#666" }}>Real auth comes next phase</div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

const input = {
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(11,11,15,.12)",
  fontSize: 16
};
