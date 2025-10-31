import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Intelligence</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#f7f7fb" />
      </Head>

      <main className="wrap">
        <div className="halo" aria-hidden />
        <div className="card">
          <h1 className="wordmark">Intelligence</h1>

          <label className="sr" htmlFor="ask">Type here</label>
          <div className="inputWrap">
            <input id="ask" placeholder="Type here" />
            <button>Go</button>
          </div>
        </div>
      </main>

      <style jsx global>{`
        :root{
          --bg: #f7f7fb;
          --ink: #0a0a0a;
          --muted: #8c8f99;
          --glass: rgba(255,255,255,.75);
          --ring: rgba(0,0,0,.08);
          --glow1: #ffd1e1;
          --glow2: #c9d7ff;
          --accent1: #ff2e8f;
          --accent2: #5856d6;
          --accent3: #00b3ff;
        }

        html, body, #__next { height: 100%; margin: 0; }
        body {
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Arial;
          color: var(--ink);
          background:
            radial-gradient(40rem 20rem at 50% 0%, rgba(255, 217, 230, .45), transparent 55%),
            linear-gradient(180deg, #ffffff 0%, var(--bg) 80%);
        }

        .wrap {
          min-height: 100%;
          display: grid;
          place-items: center;
          padding: env(safe-area-inset-top) 16px env(safe-area-inset-bottom);
        }

        .halo {
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(60rem 30rem at 50% -10%, rgba(255, 182, 193, .22), transparent 45%),
            radial-gradient(40rem 24rem at 80% 10%, rgba(189, 216, 255, .18), transparent 55%);
          filter: saturate(110%);
        }

        .card {
          width: min(92vw, 720px);
          background: var(--glass);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 28px;
          border: 1px solid var(--ring);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.8),
            0 8px 20px rgba(0,0,0,.06),
            0 30px 80px rgba(255, 105, 180, .10);
          padding: clamp(20px, 4vw, 36px);
          text-align: center;
        }

        .wordmark {
          margin: 0 0 18px 0;
          font-size: clamp(40px, 9vw, 110px);
          line-height: .95;
          letter-spacing: -0.02em;
          font-weight: 800;
          background: linear-gradient(90deg, var(--accent1), var(--accent2), var(--accent3));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 6px 30px rgba(255, 105, 180, .15);
        }

        .inputWrap {
          margin: 14px auto 2px auto;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 8px;
          align-items: center;
          width: min(92vw, 560px);
          background: rgba(255,255,255,.9);
          border: 1px solid var(--ring);
          border-radius: 18px;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.8),
            0 2px 10px rgba(0,0,0,.04);
          padding: 6px;
        }

        input {
          border: 0;
          outline: 0;
          background: transparent;
          padding: 14px 14px 14px 16px;
          font-size: clamp(16px, 3.5vw, 18px);
          color: var(--ink);
          width: 100%;
        }

        input::placeholder { color: var(--muted); }

        button {
          border: 0;
          cursor: pointer;
          padding: 12px 18px;
          border-radius: 14px;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(135deg, var(--accent1), var(--accent2) 60%, var(--accent3));
          box-shadow: 0 8px 20px rgba(88,86,214,.25), inset 0 1px 0 rgba(255,255,255,.6);
        }

        .sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
      `}</style>
    </>
  );
}
