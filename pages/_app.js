export default function App({ Component, pageProps }) {
  return (
    <>
      <header className="nav">
        <a href="/" className="brand">Intelligence</a>
        <nav className="links">
          <a href="/#vision">Vision</a>
          <a href="/#features">Features</a>
          <a href="/#login" className="pill">Sign in</a>
        </nav>
      </header>

      <Component {...pageProps} />

      <footer className="foot">
        <div>© {new Date().getFullYear()} Intelligence • wealthiest and mightiest</div>
      </footer>

      <style jsx global>{`
        :root{
          --bg-1: #0b1224;
          --bg-2: #0f1630;
          --text: #eef2ff;
          --muted: rgba(238,242,255,.70);
          --ink: #0b0b10;
          --accent: #58d0ff;      /* electric cyan */
          --accent-2: #7fe7c4;     /* soft mint for highlights */
          --ring: rgba(255,255,255,.12);
        }

        html, body, #__next { height: 100%; margin: 0; }
        body {
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
          color: var(--text);
          background: radial-gradient(1200px 700px at 30% -10%, #101a3a 0%, transparent 60%),
                      radial-gradient(1000px 700px at 80% 120%, #0a1430 0%, transparent 60%),
                      linear-gradient(180deg, var(--bg-1), var(--bg-2));
          overflow-x: hidden;
        }

        .nav{
          position: sticky; top: 0; z-index: 20;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 24px;
          background: rgba(11, 18, 36, .65);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--ring);
        }

        .brand{ font-weight: 900; letter-spacing: .2px; color: var(--text); text-decoration: none; }
        .links{ display: flex; gap: 16px; align-items: center; }
        .links a{ color: var(--text); text-decoration: none; opacity: .9; font-weight: 600; }
        .links a:hover{ opacity: 1; }
        .pill{
          padding: 8px 14px; border-radius: 999px;
          background: var(--accent); color: var(--ink) !important; font-weight: 700;
          box-shadow: 0 8px 22px rgba(88,208,255,.25);
        }

        .foot{
          text-align: center; color: var(--muted);
          padding: 48px 20px 64px;
        }

        /* Utility */
        .wrap{ max-width: 1120px; margin: 0 auto; padding: 0 20px; }
      `}</style>
    </>
  );
}
