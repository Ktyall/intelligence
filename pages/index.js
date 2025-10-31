import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Intelligence</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#fbfbfd" />
      </Head>

      <div style={styles.page}>
        <h1 style={styles.wordmark}>Intelligence</h1>

        <div style={styles.center}>
          <input
            aria-label="Type here"
            placeholder="Type here"
            style={styles.input}
          />
        </div>

        <div style={styles.spacer} />
      </div>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    margin: 0,
    background:
      "radial-gradient(1200px 600px at 50% 0%, rgba(255, 182, 193, .35), transparent 60%), linear-gradient(180deg, #fbfbfd 0%, #f6f7fb 100%)",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    alignItems: "center",
    justifyItems: "center",
    fontFamily:
      "-apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Arial",
    color: "#121212",
    padding: "24px 16px"
  },
  wordmark: {
    margin: "24px 0 8px 0",
    fontSize: "clamp(28px, 6vw, 56px)",
    letterSpacing: ".5px",
    lineHeight: 1.05,
    background:
      "linear-gradient(90deg, #c06, #ffb6c1 40%, #b0b7c3 70%, #ccd2db 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    textAlign: "center",
    fontWeight: 700
  },
  center: {
    width: "100%",
    display: "grid",
    placeItems: "center"
  },
  input: {
    width: "min(92vw, 560px)",
    padding: "16px 20px",
    fontSize: "clamp(16px, 3.5vw, 18px)",
    borderRadius: 18,
    border: "1px solid rgba(0,0,0,.08)",
    outline: "none",
    background: "rgba(255,255,255,.85)",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,.8), 0 1px 2px rgba(0,0,0,.06), 0 8px 24px rgba(194, 112, 128, .12)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)"
  },
  spacer: { height: 24 }
};
