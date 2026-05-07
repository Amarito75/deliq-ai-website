export function How() {
  const steps = [
    { n: "01", t: "On se cale", d: "30 min en visio pour comprendre ton activité, tes douleurs et ce qu'on automatise en priorité.", tag: "JOUR 1", featured: true },
    { n: "02", t: "On configure", d: "On branche tes outils (mail, CRM, banque, réseaux) et on entraîne tes agents avec ta voix de marque.", tag: "JOUR 2-5" },
    { n: "03", t: "On lance", d: "Tes agents bossent en autonomie. Tu valides ce qui sort dès le jour 1, ils apprennent en continu.", tag: "JOUR 6" },
    { n: "04", t: "On scale", d: "Tu actives d'autres agents au fil de l'eau. Pas de contrat à 12 mois, tu paies ce que tu utilises.", tag: "EN CONTINU" },
  ];
  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="section-head">
          <div><span className="eyebrow">Process · 7 jours chrono</span></div>
          <h2>De zéro à <span className="ital">pleine prod</span><br />en moins de 7 <span className="lime">jours.</span></h2>
        </div>
        <div className="how-grid">
          {steps.map((s, i) => (
            <div className={`how-card ${s.featured ? "featured" : ""}`} key={i}>
              <div className="how-num">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <div className="how-tag">[ {s.tag} ]</div>
              {s.featured && <div className="how-orb" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
