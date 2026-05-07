export function Stats() {
  const items = [
    { num: "24", suf: "", label: "agents prêts à l'emploi", code: "[ 01 / 04 ]", style: "" },
    { num: "12", suf: "h", label: "économisées par semaine en moyenne", code: "[ 02 / 04 ]", style: "ital" },
    { num: "3", suf: "x", label: "plus de leads qualifiés au pipe", code: "[ 03 / 04 ]", style: "lime" },
    { num: "98", suf: "%", label: "des clients gardent leurs agents 6 mois+", code: "[ 04 / 04 ]", style: "ital" },
  ];
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-grid">
          {items.map((s, i) => (
            <div className="stat-card" key={i}>
              <div className="stat-mono">{s.code}</div>
              <div>
                <div className="stat-num">
                  <span className={s.style}>
                    {s.num}
                    {s.suf}
                  </span>
                </div>
                <div className="stat-label" style={{ marginTop: 12 }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
