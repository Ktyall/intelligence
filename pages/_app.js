export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="nav">
        <a href="/" className="brand">Intelligence</a>
        <nav className="links">
          <a href="/vision">Vision</a>
          <a href="/schools">Schools</a>
          <a href="/owner">Owner</a>
          <a href="/pricing">Pricing</a>
          <a href="/login" className="pill">Sign in</a>
        </nav>
      </header>

      <Component {...pageProps} />

      <footer className="foot">
        <div>wealthiest and mightiest</div>
        <div className="muted">© {new Date().getFullYear()} Intelligence</div>
      </footer>

      <style jsx global>{`
        :root{
          --ink: #0a0a0a;
          --muted: #6b7280;
          --bg: #fffef8;
          --green: #16db65;
          --greenDeep: #12b454;
          --pink: #ff5aaa;
          --violet: #7c5cff;
          --blue: #08b8ff;
          --card: #ffffff;
          --ring: rgba(10,10,10,.08);
        }

        html, body, #__next { height: 100%; margin: 0; }
        body {
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
          color: var(--ink);
          background:
            radial-gradient(60rem 40rem at 90% -10%, rgba(8,184,255,.12), transparent 60%),
            radial-gradient(60rem 40rem at 0% 110%, rgba(124,92,255,.10), transparent 60%),
            var(--bg);
        }

        .nav{
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 18px;
          background: rgba(255,255,255,.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--ring);
        }
        .brand{
          font-weight: 900;
          letter-spacing: .2px;
          font-size: 20px;
          background: linear-gradient(90deg, var(--green), var(--pink), var(--violet));
          -webkit-background-clip: text;
                  background-clip: text;
          color: transparent;
        }
        .links{ display: flex; align-items: center; gap: 14px; }
        .links a{ text-decoration: none; color: var(--ink); font-weight: 600; }
        .links a:hover{ color: var(--violet); }
        .pill{
          padding: 8px 14px;
          border-radius: 999px;
          background: var(--ink);
          color: #fff !important;
        }

        .hero{
          max-width: 1100px;
          margin: 32px auto 0 auto;
          padding: 18px;
        }
        .grid{
          display: grid;
          gap: 16px;
        }
        @media (min-width: 900px){
          .grid2{ grid-template-columns: 1.2fr .8fr; }
          .grid3{ grid-template-columns: repeat(3, 1fr); }
          .grid4{ grid-template-columns: repeat(4, 1fr); }
        }

        .card{
          background: var(--card);
          border: 1px solid var(--ring);
          border-radius: 18px;
          box-shadow: 0 8px 24px rgba(0,0,0,.05);
          padding: 18px;
        }

        .cta{
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 12px;
          border: 0;
          color: #fff;
          font-weight: 800;
          cursor: pointer;
          background: linear-gradient(135deg, var(--green), var(--blue));
          box-shadow: 0 10px 24px rgba(22,219,101,.25);
        }
        .cta.pink{ background: linear-gradient(135deg, var(--pink), var(--violet)); box-shadow: 0 10px 24px rgba(124,92,255,.25); }

        .title{ font-size: clamp(36px, 6vw, 66px); margin: 0; line-height: 1.02; letter-spacing: -0.5px; }
        .lead{ color: var(--muted); font-size: clamp(16px, 2.5vw, 18px); margin: 10px 0 16px 0; }

        .foot{
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 18px 40px 18px;
          color: var(--muted);
        }
        .muted{ color: var(--muted); }
      `}</style>
    </>
  );
}
