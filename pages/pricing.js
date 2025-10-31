export default function Pricing() {
  return (
    <main className="hero">
      <h1 className="title">Pricing</h1>
      <div className="grid grid3" style={{ marginTop: 18 }}>
        <div className="card">
          <div style={{ fontWeight: 900, fontSize: 18 }}>Starter</div>
          <div className="muted">One school</div>
          <div style={{ marginTop: 10 }}><b>$99</b> per month</div>
        </div>
        <div className="card" style={{ borderColor: "rgba(124,92,255,.4)" }}>
          <div style={{ fontWeight: 900, fontSize: 18, color: "#7c5cff" }}>Growth</div>
          <div className="muted">Up to ten schools</div>
          <div style={{ marginTop: 10 }}><b>$499</b> per month</div>
        </div>
        <div className="card">
          <div style={{ fontWeight: 900, fontSize: 18 }}>Network</div>
          <div className="muted">Many schools</div>
          <div style={{ marginTop: 10 }}>Contact</div>
        </div>
      </div>
    </main>
  );
}
