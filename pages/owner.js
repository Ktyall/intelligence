export default function Owner() {
  return (
    <main className="hero">
      <div className="card">
        <h1 className="title">Owner console</h1>
        <p className="lead">See all schools at a glance. Switch into any campus for support. Turn tools on or off and update presets.</p>
        <div className="grid grid3">
          <div className="card"><b>Schools</b><div className="muted">Status, users, activity</div></div>
          <div className="card"><b>Tools</b><div className="muted">Enable flags and prompts</div></div>
          <div className="card"><b>Audit</b><div className="muted">Every action with inputs and outputs</div></div>
        </div>
      </div>
    </main>
  );
}
