import { Icon } from "../Icons";

export function Testimonials() {
  const items = [
    { c: "t1", q: "On a viré 60% du temps passé sur la prospection. Mes commerciaux closent, l'agent qualifie. C'est tout.", n: "Léa Marchand", r: "CEO · Studio Atlas (TPE design)", a: "LM" },
    { c: "t2", q: "Mon agent SAV répond à 80% des tickets sans moi. Les clients ne voient pas la différence — sauf que c'est plus rapide.", n: "Karim Benali", r: "Fondateur · Atelier du Levant", a: "KB" },
    { c: "t3", q: "Je suis auto-entrepreneure. Là j'en ai 4 pour le prix d'un café par jour.", n: "Marie Vidal", r: "Coach indépendante", a: "MV" },
    { c: "t4", q: "L'agent compta a digéré 3 ans de retard en 48h. J'ai cru à une erreur, c'était propre.", n: "Thomas Roux", r: "Plombier · Eaux Vives SARL", a: "TR" },
    { c: "t5", q: "On dort enfin. La nuit, les agents tournent. Le matin, on a le résumé. C'est devenu vital.", n: "Sophie Léger", r: "DG · Maison Léger (PME 12p)", a: "SL" },
  ];
  return (
    <section className="testi-section" id="temoignages">
      <div className="wrap">
        <div className="section-head">
          <div><span className="eyebrow">Ils nous ont laissé bosser</span></div>
          <h2>Des résultats qui<br /><span className="ital">parlent</span> à leur <span className="lime">place.</span></h2>
        </div>
        <div className="testi-grid">
          {items.map((t, i) => (
            <div className={`testi ${t.c}`} key={i}>
              <div className="testi-stars">{[...Array(5)].map((_, j) => <Icon.Star key={j} />)}</div>
              <div className="testi-quote">{t.q}</div>
              <div className="testi-author">
                <div className="testi-avatar">{t.a}</div>
                <div>
                  <div className="testi-name">{t.n}</div>
                  <div className="testi-role">{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
