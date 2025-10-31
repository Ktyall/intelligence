export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="nav">
        <a href="/" className="brand">Intelligence</a>
        <nav className="links">
          <a href="/#features">Features</a>
          <a href="/#how">How it works</a>
          <a href="/#pricing">Pricing</a>
          <a href="/#login" className="pill">Sign in</a>
        </nav>
      </header>

      <Component {...pageProps} />

      <footer className="foot">
        <div className="muted">© {new Date().getFullYear()} Intelligence</div>
        <div>wealthiest and mightiest</div>
      </footer>

      <style jsx global>{`
        :root{
          --bg: #1cc37e;         /* solid memorable backdrop */
          --ink: #0b0b0f;
          --panel: #ffffff;
          --ring: rgba(0,0,0,.12);
          --muted: rgba(0,0,0,.55);

          --pink: #ff5aaa;
          --violet: #7c5cff;
          --blue: #08b8ff;
          --yellow: #ffd166;
        }

        html, body, #__next { height: 100%; margin: 0; }
        body {
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
          color: var(--ink);
          background: var(--bg);
        }

        .nav{
          position: sticky; top: 0; z-index: 10;
          display: flex; align-items: center; justify-content: space-between;
          padding: 12px 18px;
          background: rgba(255,255,255,.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--ring);
        }
        .brand{ font-weight: 900; letter-spacing: .2px; }
        .links{ display: flex; gap: 16px; align-items: center; }
        .links a{ text-decoration: none; color: var(--ink); font-weight: 600; }
        .links a:hover{ color: var(--pink); }
        .pill{ padding: 8px 14px; border-radius: 999px; background: var(--ink); color: #fff !important; }

        .hero{ max-width: 1120px; margin: 32px auto 0; padding: 0 18px; }
        .grid{ display: grid; gap: 16px; }
        @media (min-width: 960px){ .grid2{ grid-template-columns: 1.1fr .9fr; } .grid3{ grid-template-columns: repeat(3, 1fr); } }

        .card{
          background: var(--panel);
          border: 1px solid var(--ring);
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,.08);
          padding: 18px;
        }

        .title{ font-size: clamp(36px, 6vw, 64px); line-height: 1.04; margin: 0; letter-spacing: -.3px; }
        .lead{ color: var(--muted); font-size: clamp(16px, 2.6vw, 18px); margin: 10px 0 16px 0; }
        .cta{ display: inline-flex; align-items: center; gap: 10px; padding: 12px 18px; border: 0; border-radius: 12px; font-weight: 800; color: #fff; background: #0b0b0f; cursor: pointer; }
        .ghost{ padding: 12px 18px; border-radius: 12px; border: 1px solid var(--ring); background: #fff; font-weight: 700; }

        .foot{ display: flex; justify-content: space-between; align-items: center; padding: 28px 18px 40px; color: #fff; opacity: .9; }
        .muted{ color: var(--muted); }

        @keyframes floaty { 0%{ transform: translateY(0) } 50%{ transform: translateY(-6px) } 100%{ transform: translateY(0) } }
        .floaty{ animation: floaty 5s ease-in-out infinite; }
      `}</style>
    </>
  );
}
