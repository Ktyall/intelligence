"use client";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <header className="header">
        <div className="brand">
          <div className="brand-dot" />
          <span>Intelligence</span>
        </div>
        <nav className="nav">
          <a href="#">About</a>
          <a href="#">Docs</a>
          <a href="#">Sign in</a>
        </nav>
      </header>

      <main className="main">
        <div className="card">
          <h1>Work that feels simple</h1>
          <p className="lead">
            One place to create letters, run forms, and ship clean files. Private by default. Yours always.
          </p>

          <div className="search">
            <input
              className="input"
              placeholder="Type what you need"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button className="button">Go</button>
          </div>

          <div className="meta">
            Try this sample input
            <span className="dot">•</span>
            parent letter in Spanish about MAP results
          </div>
        </div>
      </main>

      <footer className="footer">
        <div>wealthiest and mightiest</div>
        <div className="nav">
          <a href="#">Privacy</a>
          <span>•</span>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}
