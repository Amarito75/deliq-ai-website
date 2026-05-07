"use client";

import { useState } from "react";

export function FAQ() {
  const [open, setOpen] = useState<number>(0);
  const items = [
    { q: "Mes agents IA, ils apprennent ma façon de bosser ?", a: "Oui. On commence par capturer ta voix de marque, tes process et tes outils existants. Tes agents s'entraînent dessus pendant la première semaine, et continuent d'apprendre à chaque interaction." },
    { q: "C'est quoi la différence avec ChatGPT ?", a: "ChatGPT te répond dans une fenêtre. Nos agents sont connectés à tes outils (mail, CRM, banque, réseaux), agissent en autonomie sur des tâches précises, et te rendent des comptes. Ce sont des collègues, pas un assistant à interroger." },
    { q: "Mes données restent où ?", a: "En France, sur des serveurs européens conformes RGPD. Aucune donnée n'est utilisée pour entraîner des modèles tiers. Tu peux tout supprimer en 1 clic, à tout moment." },
    { q: "Combien ça coûte ?", a: "Le pricing dépend du nombre d'agents activés et du volume. On chiffre tout pendant la démo, en transparence. Pas d'engagement, pas de frais cachés. La plupart de nos clients démarrent autour de 99 € / mois." },
    { q: "Et si un agent fait n'importe quoi ?", a: "Tu valides tout ce qui sort en externe la première semaine. Ensuite, tu choisis le niveau d'autonomie agent par agent. À tout moment, tu peux passer un agent en mode 'validation' et inverser la décision." },
    { q: "Combien de temps avant que ça tourne ?", a: "Compte 7 jours entre le call de cadrage et la mise en prod. Les premiers gains de temps sont visibles dès la première semaine d'activité." },
  ];
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="section-head">
          <div><span className="eyebrow">FAQ · vraies questions</span></div>
          <h2>Les trucs qu&apos;on<br />nous <span className="ital">pose tout</span> le <span className="lime">temps.</span></h2>
        </div>
        <div className="faq-grid">
          {items.map((it, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""}`} onClick={() => setOpen(open === i ? -1 : i)}>
              <div className="faq-q">
                <span>{it.q}</span>
                <span className="faq-toggle">{open === i ? "−" : "+"}</span>
              </div>
              <div className="faq-a">{it.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
