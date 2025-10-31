export default function Home() {
  return (
    <main className="hero">
      <section className="grid grid2">
        <div className="card" style={{background: "linear-gradient(180deg,#ffffff, #f7fff9)"}}>
          <h1 className="title">Do school work in one place</h1>
          <p className="lead">
            Letters, forms, exports, and clean files for every campus. Each school sees only its world. You watch everything from the owner view.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="/login"><button className="cta">Start</button></a>
            <a href="/vision"><button className="cta pink">See how it works</button></a>
          </div>
          <div style={{ marginTop: 16, color: "#6b7280" }}>
            Private by default. Runs fast on phone and laptop.
          </div>
        </div>

        <div className="card" style={{ background: "conic-gradient(from 210deg at 60% 40%, #16db65, #08b8ff, #7c5cff, #ff5aaa, #16db65)" }}>
          <div style={{ height: 260, display: "grid", placeItems: "center", color: "#fff", fontWeight: 900, fontSize: 20 }}>
            Intelligence
          </div>
        </div>
      </section>

      <section style={{ marginTop: 18 }} className="grid grid3">
        {[
          { t: "Generators", d: "Write letters and docs from clear prompts with your tone" },
          { t: "Workflows", d: "Form in, generate, review, export, email" },
          { t: "Datasets", d: "Connect Sheets or CSV and process rows at scale" },
        ].map((x) => (
          <div key={x.t} className="card">
            <div style={{ fontWeight: 800, fontSize: 18 }}>{x.t}</div>
            <div className="muted" style={{ marginTop: 6 }}>{x.d}</div>
          </div>
        ))}
      </section>

      <section style={{ marginTop: 18 }} className="grid grid3">
        {[
          { t: "Roles", d: "Owner, School Admin, Staff with fine controls" },
          { t: "Export", d: "Send to Drive and store copies in safe storage" },
          { t: "Audit", d: "See who ran what and when, with full history" },
        ].map((x) => (
          <div key={x.t} className="card">
            <div style={{ fontWeight: 800, fontSize: 18 }}>{x.t}</div>
            <div className="muted" style={{ marginTop: 6 }}>{x.d}</div>
          </div>
        ))}
      </section>

      <section style={{ marginTop: 18 }} className="card">
        <div className="grid grid4">
          <div>
            <div style={{ fontWeight: 900, fontSize: 16, color: "#16db65" }}>Fast</div>
            <div className="muted">Global edge hosting</div>
          </div>
          <div>
            <div style={{ fontWeight: 900, fontSize: 16, color: "#ff5aaa" }}>Private</div>
            <div className="muted">Each school isolated</div>
          </div>
          <div>
            <div style={{ fontWeight: 900, fontSize: 16, color: "#7c5cff" }}>Simple</div>
            <div className="muted">One clear interface</div>
          </div>
          <div>
            <div style={{ fontWeight: 900, fontSize: 16, color: "#08b8ff" }}>Yours</div>
            <div className="muted">You own the stack</div>
          </div>
        </div>
      </section>
    </main>
  );
}
