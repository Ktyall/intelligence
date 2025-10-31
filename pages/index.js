export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0b0f1a',
      color: '#e7ecff',
      fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      textAlign: 'center',
      padding: '40px 16px'
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '900px',
        fontSize: '14px',
        opacity: 0.8
      }}>
        <div>Intelligence</div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#">About</a>
          <a href="#">Docs</a>
          <a href="#">Sign in</a>
        </div>
      </header>

      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '48px', margin: '0 0 10px' }}>Work that feels simple</h1>
        <p style={{ maxWidth: '500px', margin: '0 auto 40px', color: '#a0aec0' }}>
          One place to create letters, run forms, and ship clean files. Private by default. Yours always.
        </p>

        <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
          <input
            placeholder="Type what you need"
            style={{
              width: '100%',
              padding: '16px 100px 16px 20px',
              borderRadius: '12px',
              border: 'none',
              backgroundColor: '#12182a',
              color: '#e7ecff',
              fontSize: '16px',
              outline: 'none'
            }}
          />
          <button style={{
            position: 'absolute',
            right: '6px',
            top: '6px',
            height: '44px',
            padding: '0 18px',
            backgroundColor: '#79ffe1',
            color: '#0b0f1a',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            Go
          </button>
        </div>

        <div style={{ color: '#a0aec0', fontSize: '12px', marginTop: '10px' }}>
          Try: parent letter in Spanish about MAP results
        </div>
      </main>

      <footer style={{ fontSize: '12px', opacity: 0.7 }}>
        wealthiest and mightiest
      </footer>
    </div>
  );
}
