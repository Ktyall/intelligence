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
        <div>© {new Date().getFullYear()} Intelligence — wealthiest and mightiest</div>
      </footer>

      <style jsx global>{`
        :root{
          --bg: #1f225c;
          --text: #f8f9ff;
          --muted: rgba(255,255,255,.6);
          --accent: #ffd166;
        }

        html, body, #__next { height: 100%; margin: 0; }
        body {
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Arial;
          background: var(--bg);
          color: var(--text);
          overflow-x: hidden;
        }

        .nav{
          display: flex; justify-content: space-between; align-items: center;
          padding: 18px 32px;
          background: rgba(31,34,92,.65);
          backdrop-filter: blur(10px);
          position: sticky; top: 0; z-index: 10;
        }

        .brand{
          font-weight: 900; font-size: 20px;
          color: var(--text); text-decoration: none;
        }

        .links{ display: flex; gap: 20px; align-items: center; }
        .links a{ color: var(--text); text-decoration: none; opacity: .85; font-weight: 500; }
        .links a:hover{ opacity: 1; }

        .pill{
          padding: 8px 16px; border-radius: 999px;
          background: var(--accent); color: #0b0b10 !important;
          font-weight: 700;
        }

        .foot{
          text-align: center;
          color: var(--muted);
          padding: 60px 24px;
          font-size: 14px;
        }
      `}</style>
    </>
  );
}
