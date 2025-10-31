// components/Hero.js
import { useEffect, useRef } from "react";

export default function Hero() {
  const lensRef = useRef(null);

  // subtle lens follow
  useEffect(() => {
    const lens = lensRef.current;
    if (!lens) return;
    const onMove = (e) => {
      const x = e.clientX ?? window.innerWidth / 2;
      const y = e.clientY ?? window.innerHeight / 2;
      lens.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="hero">
      <div className="bg field" aria-hidden />
      <div className="bg fog" aria-hidden />
      <div className="bg rings" aria-hidden />
      <div className="lens" ref={lensRef} aria-hidden />

      <div className="inner">
        <h1 className="mark">Intelligence</h1>
        <p className="lead">
          Everything your school does. Orchestrated with calm precision.
        </p>
        <div className="ctaWrap">
          <a href="#start" className="cta">Launch demo</a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 90vh;
          display: grid;
          place-items: center;
          overflow: hidden;
          text-align: center;
          color: #eef2ff;
        }

        /* layered cinematic background */
        .bg {
          position: absolute;
          inset: -20%;
          pointer-events: none;
        }
        .field {
          background:
            radial-gradient(1200px 700px at 20% -10%, #0f1630 0%, transparent 60%),
            radial-gradient(1200px 700px at 90% 120%, #0a1430 0%, transparent 60%),
            linear-gradient(180deg, #0b1224, #0f1630);
        }
        .fog {
          background:
            radial-gradient(40rem 30rem at 50% 30%, rgba(88, 208, 255, .18), transparent 60%),
            radial-gradient(36rem 24rem at 70% 70%, rgba(127, 231, 196, .14), transparent 60%);
          filter: blur(60px) saturate(115%);
          animation: breathe 18s ease-in-out infinite alternate;
        }
        .rings {
          background:
            conic-gradient(from 0deg at 50% 50%, rgba(255,255,255,.05), rgba(255,255,255,0) 40%);
          mask-image: radial-gradient(closest-side, rgba(0,0,0,.9), rgba(0,0,0,0) 70%);
          animation: spin 60s linear infinite;
          mix-blend-mode: screen;
        }

        @keyframes breathe { from { transform: scale(1) } to { transform: scale(1.08) } }
        @keyframes spin { to { transform: rotate(360deg) } }

        /* interactive lens highlight */
        .lens {
          position: absolute;
          width: 750px;
          height: 750px;
          border-radius: 50%;
          background:
            radial-gradient(circle at 50% 50%, rgba(255,255,255,.18), rgba(255,255,255,0) 52%),
            radial-gradient(circle at 40% 40%, rgba(88,208,255,.22), rgba(88,208,255,0) 60%),
            radial-gradient(circle at 60% 60%, rgba(127,231,196,.18), rgba(127,231,196,0) 60%);
          filter: blur(60px);
          transform: translate(-50%, -50%);
          transition: transform .15s ease;
          pointer-events: none;
          mix-blend-mode: screen;
        }

        .inner {
          position: relative;
          z-index: 2;
          max-width: 900px;
          padding: 0 22px;
        }
        .mark {
          margin: 0 0 8px 0;
          font-size: clamp(48px, 7vw, 120px);
          line-height: 1.02;
          letter-spacing: .5px;
          font-weight: 800;
          background: linear-gradient(180deg, #ffffff, #cfeaff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 20px 60px rgba(88, 208, 255, .22);
        }
        .lead {
          margin: 0 auto 26px;
          max-width: 680px;
          color: rgba(238,242,255,.78);
          font-size: clamp(16px, 2.2vw, 20px);
        }

        .ctaWrap { display: flex; justify-content: center; gap: 12px; }
        .cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          padding: 0 18px;
          border-radius: 12px;
          font-weight: 800;
          text-decoration: none;
          color: #0b0b10;
          background: linear-gradient(180deg, #8fe4ff, #58d0ff);
          box-shadow:
            0 18px 40px rgba(88,208,255,.35),
            inset 0 1px 0 rgba(255,255,255,.8);
        }

        @media (prefers-reduced-motion: reduce) {
          .fog, .rings { animation: none }
        }
      `}</style>
    </section>
  );
}
