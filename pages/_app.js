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
          /* Bold single backdrop and refined accents */
          --bg: #241f6a;
          --ink: #0b0b10;
          --panel: #ffffff;
          --ring: rgba(255,255,255,.18);
          --muted: rgba(255,255,255,.75);
          --accent: #ffd166;   /* warm sunflower for buttons */
          --accent2: #5ee1a1;  /* mint accent for small details */
        }

        html, body, #__next { height: 100%; margin: 0; }
        body {
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
          color: #ffffff;
          background: var(--bg);
        }

        .nav{
          position: sticky; top: 0; z-index: 10;
          display: flex; align-items: center; justify-content: space-between;
          padding: 12px 18px;
          background: rgba(36,31,106,.72);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--ring);
        }
        .brand{ font-weight: 900; letter-spacing: .2px; color: #fff; text-decoration: none; }
        .links{ display: flex; gap: 16px; align-items: center; }
        .links a{ text-decoration: none; color: #fff; opacity: .9; font-weight: 600; }
        .links a:hover{ opacity: 1; }
        .pill{ padding: 8px 14px; border-radius: 999px; background: #fff; color: var(--bg) !important; }

        .wrap{ max-width: 1120px; margin: 0 auto; padding: 0 18px; }
        .grid{ display: grid; gap: 16px; }
        @media (min-width: 960px){ .grid2{ grid-template-columns: 1.1fr .9fr; } .grid3{ grid-template-columns: repeat(3, 1fr); } }

        .card{
          background: var(--panel);
          border: 1px solid rgba(11,11,15,.12);
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,.25);
          padding: 18px;
          color: var(--ink);
        }

        .title{ font-size: clamp(40px, 7vw, 84px); line-height: 1.03; margin: 0; letter-spacing: -.3px; color: #fff; }
        .lead{ color: #e8e8ef; font-size: clamp(16px, 2.6vw, 18px); margin: 12px 0 18px 0; }

        .cta{
          display: inline-flex; align-items: center; gap: 10px;
          padding: 12px 18px; border: 0; border-radius: 12px; font-weight: 800;
          color: #0b0b10; background: var(--accent); cursor: pointer;
          box-shadow: 0 10px 24px rgba(255,209,102,.28);
        }
        .ghost{ padding: 12px 18px; border-radius: 12px; border: 1px solid rgba(255,255,255,.35); background: transparent; color: #fff; font-weight: 700; }

        .foot{
          display: flex; justify-content: space-between; align-items: center;
          padding: 28px 18px 40px; color: #fff; opacity: .9;
        }
        .muted{ color: #cfd2f1; }

        /* Ambient blobs behind the hero. No faces. Pure shape and motion. */
        .blobs{ position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        .blob{
          position: absolute; filter: blur(40px); opacity: .6; mix-blend-mode: screen;
          animation: drift 18s ease-in-out infinite;
        }
        .b1{ width: 36rem; height: 36rem; background: #7b6cff; top: -12rem; left: -10rem; }
        .b2{ width: 32rem; height: 32rem; background: #ff6aa0; top: -16rem; right: -12rem; animation-delay: 3s; }
        .b3{ width: 28rem; height: 28rem; background: #5ee1a1; bottom: -10rem; left: 10%; animation-delay: 6s; }
        @keyframes drift {
          0% { transform: translateY(0) rotate(0deg); }
          50%{ transform: translateY(-20px) rotate(10deg); }
          100%{ transform: translateY(0) rotate(0deg); }
        }
      `}</style>
    </>
  );
}
