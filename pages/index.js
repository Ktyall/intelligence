export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="halo" />
        <div className="inner">
          <h1>Work that feels simple</h1>
          <p>
            One place to create letters, run forms, and export clean files.
            Private by default. Yours always.
          </p>
          <div className="bar">
            <input placeholder="Type what you need…" />
            <button>Go</button>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div>
          <h3>Generators</h3>
          <p>Create letters in your tone and language.</p>
        </div>
        <div>
          <h3>Workflows</h3>
          <p>Collect, generate, review, export, done.</p>
        </div>
        <div>
          <h3>Datasets</h3>
          <p>Process full spreadsheets at once.</p>
        </div>
      </section>

      <style jsx>{`
        .hero{
          position: relative;
          min-height: 80vh;
          display: flex; align-items: center; justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .halo{
          position: absolute; inset: 0;
          background:
            radial-gradient(40rem 40rem at 50% 30%, rgba(255,209,102,.3), transparent 60%),
            radial-gradient(30rem 20rem at 80% 70%, rgba(255,255,255,.06), transparent 70%);
          animation: pulse 14s ease-in-out infinite alternate;
          filter: blur(60px);
        }

        @keyframes pulse {
          from { transform: scale(1); opacity: .8; }
          to { transform: scale(1.2); opacity: 1; }
        }

        .inner{ position: relative; max-width: 700px; z-index: 1; padding: 0 24px; }
        h1{
          font-size: clamp(42px, 6vw, 84px);
          line-height: 1.05;
          margin-bottom: 12px;
        }
        p{
          color: var(--muted);
          font-size: 18px;
          max-width: 540px;
          margin: 0 auto 36px;
        }

        .bar{
          display: flex; justify-content: center;
          gap: 8px; flex-wrap: wrap;
        }

        input{
          width: min(80vw, 420px);
          padding: 14px 16px;
          border-radius: 12px;
          border: none;
          outline: none;
          font-size: 16px;
        }

        button{
          padding: 14px 20px;
          border: none;
          border-radius: 12px;
          background: var(--accent);
          color: #0b0b10;
          font-weight: 700;
          cursor: pointer;
        }

        .features{
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          max-width: 900px;
          margin: 100px auto;
          padding: 0 24px;
        }
        .features h3{
          color: var(--accent);
          font-size: 20px;
          margin-bottom: 6px;
        }
        .features p{
          color: var(--muted);
          font-size: 15px;
          margin: 0;
        }
      `}</style>
    </main>
  );
}
