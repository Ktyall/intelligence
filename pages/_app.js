// pages/_app.js
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
        <div>© {new Date().getFullYear()} Intelligence. wealthiest and mightiest</div>
      </footer>

      <style jsx global>{`
        :root{
          --ink: #0b0b10;
          --text: #eef2ff;
        }
        html, body, #__next { height: 100%; margin: 0 }
        body {
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
          color: var(--text);
          background: #0b1224;
        }
        .nav{
          position: sticky; top: 0; z-index: 10;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 22px;
          background: rgba(11,18,36,.6);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,.12);
        }
        .brand{ font-weight: 900; letter-spacing: .2px; color: #fff; text-decoration: none }
        .links{ display: flex; gap: 16px; align-items: center }
        .links a{ color: #fff; opacity: .9; text-decoration: none; font-weight: 600 }
        .links a:hover{ opacity: 1 }
        .pill{
          padding: 8px 14px; border-radius: 999px;
          background: #58d0ff; color: var(--ink) !important; font-weight: 800;
          box-shadow: 0 10px 24px rgba(88,208,255,.28);
        }
        .foot{
          text-align: center; color: rgba(238,242,255,.7);
          padding: 56px 20px 72px;
        }
      `}</style>
    </>
  );
}
