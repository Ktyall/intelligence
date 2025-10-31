export default function Login() {
  return (
    <main className="hero">
      <div className="card" style={{ maxWidth: 520, margin: "0 auto" }}>
        <h1 className="title" style={{ fontSize: 32 }}>Sign in</h1>
        <div style={{ display: "grid", gap: 10 }}>
          <input placeholder="Email" style={input} />
          <input placeholder="Password" type="password" style={input} />
          <button className="cta">Continue</button>
        </div>
        <div className="muted" style={{ marginTop: 10 }}>Real sign in comes next phase</div>
      </div>
      <style jsx>{`
        `}</style>
    </main>
  );
}

const input = {
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(10,10,10,.12)",
  fontSize: 16
};
