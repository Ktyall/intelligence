import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Intelligence</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <main className="wrap">
        <h1 className="mark">Intelligence</h1>

        <label className="sr" htmlFor="ask">Type here</label>
        <div className="field">
          <input id="ask" placeholder="Type here" />
          <button>Go</button>
        </div>
      </main>

      <style jsx global>{`
        :root{
          --bg: #faf7f2;
          --ink: #0b0b10;
          --muted: #8a8d95;
          --ring: rgba(13, 13, 18, .08);
          --focus: rgba(20, 180, 255, .35);
          --c1: #16f2b8;
          --c2: #ff6aa0;
          --c3: #8a7dff;
        }

        html, body, #__next { height: 100%; margin: 0; }
        body {
          background:
            radial-gradient(60rem 60rem at 10% -10%, rgba(255,106,160,.12), transparent 60%),
            radial-gradient(50rem 50rem at 90% 110%, rgba(22,242,184,.10), transparent 60%),
            var(--bg);
          color: var(--ink);
          font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Arial;
        }

        .wrap {
          min-height: 100%;
          display: grid;
          place-items: center;
          padding: 24px;
        }

        /* Wordmark: bold, unique tri tone stroke with safe line height to avoid clipping */
        .mark {
          margin: 0 0 28px 0;
          font-size: clamp(48px, 9vw, 120px);
          line-height: 1.08;
          font-weight: 900;
          letter-spacing: -0.015em;
          position: relative;
          display: inline-block;
          color: transparent;
          background: linear-gradient(90deg, var(--c1), var(--c2), var(--c3));
          -webkit-background-clip: text;
                  background-clip: text;
          text-shadow:
            0 0 0 rgba(0,0,0,0),
           -1px 0 0 rgba(0,0,0,.05),
            0 1px 0 rgba(0,0,0,.05);
          padding-bottom: 6px;
        }

        /* Underline accent that animates on focus */
        .mark::after{
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -10px;
          height: 6px;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--c1), var(--c2), var(--c3));
          opacity: .22;
        }

        .field{
          width: min(92vw, 640px);
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 8px;
          align-items: center;
          padding: 8px;
          border: 1px solid var(--ring);
          border-radius: 20px;
          background: rgba(255,255,255,.9);
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.8),
            0 8px 24px rgba(0,0,0,.06);
        }

        input{
          width: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          padding: 14px 14px 14px 16px;
          font-size: clamp(16px, 3.4vw, 19px);
          color: var(--ink);
        }
        input::placeholder{ color: var(--muted); }

        button{
          border: 0;
          border-radius: 14px;
          padding: 12px 18px;
          font-weight: 700;
          color: #0b0b10;
          background:
            conic-gradient(from 220deg at 50% 50%, var(--c1), var(--c2), var(--c3), var(--c1));
          box-shadow:
            0 10px 24px rgba(138,125,255,.22),
            inset 0 1px 0 rgba(255,255,255,.7);
          cursor: pointer;
        }

        /* Focus ring for keyboard and mobile accessibility */
        .field:focus-within{
          box-shadow:
            0 0 0 4px var(--focus),
            inset 0 1px 0 rgba(255,255,255,.8),
            0 8px 24px rgba(0,0,0,.06);
        }

        .sr{ position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
      `}</style>
    </>
  );
}
