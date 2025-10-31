// pages/demo.js
export default function Demo() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#ffffff",
      color: "#0b0b10",
      display: "grid",
      placeItems: "center",
      textAlign: "center",
      padding: "24px"
    }}>
      <div style={{ maxWidth: 900 }}>
        <h1 style={{
          margin: 0,
          fontSize: "clamp(36px, 6vw, 72px)",
          letterSpacing: ".2px"
        }}>
          Owner console preview
        </h1>
        <p style={{ color: "#4b5563", marginTop: 10 }}>
          This is the light environment where dashboards and tools will live.
          We will add the first working tile next.
        </p>

        <div style={{
          marginTop: 24,
          display: "grid",
          gap: 14,
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"
        }}>
          {["Letters", "Workflows", "Datasets", "Audit"].map((t) => (
            <div key={t} style={{
              borderRadius: 16,
              padding: 16,
              background: "#f6f7fb",
              border: "1px solid #e6e8f0",
              boxShadow: "0 8px 24px rgba(0,0,0,.06)"
            }}>
              <div style={{ fontWeight: 900 }}>{t}</div>
              <div style={{ color: "#6b7280", marginTop: 6 }}>
                Coming soon
              </div>
            </div>
          ))}
        </div>

        <a href="/" style={{
          display: "inline-block",
          marginTop: 28,
          padding: "12px 16px",
          borderRadius: 12,
          background: "#0b0b10",
          color: "#ffffff",
          textDecoration: "none",
          fontWeight: 800
        }}>
          Back to hero
        </a>
      </div>
    </main>
  );
}
