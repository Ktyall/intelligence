import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Intelligence</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <div style={styles.page}>
        <div style={styles.center}>
          <h1 style={styles.wordmark}>Intelligence</h1>
          <input
            placeholder="Type here"
            style={styles.input}
          />
        </div>
      </div>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    margin: 0,
    background:
      "radial-gradient(800px 400px at 50% 0%, rgba(255, 192, 203, .25), transparent 60%), linear-gradient(180deg, #fbfbfd 0%, #f8f9fb 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily:
      "-apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Arial",
  },
  center: {
    textAlign: "center",
    transform: "translateY(40px)", // pushes it slightly lower
  },
  wordmark: {
    margin: 0,
    fontSize: "clamp(56px, 10vw, 120px)",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    background:
      "linear-gradient(90deg, #ff005e, #e4a0f7, #9b5de5, #5e60ce, #48bfe3)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    textShadow: "0 4px 20px rgba(255, 105, 180, .2)",
  },
  input: {
    marginTop: 40,
    width: "min(90vw, 520px)",
