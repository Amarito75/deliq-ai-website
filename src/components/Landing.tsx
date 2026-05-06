"use client";

import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import { Icon } from "./Icons";
import { AGENTS_DATA, type FlatAgent } from "@/lib/agents";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="logo">
          <span className="logo-mark" />
          deliq<span style={{ color: "var(--lime)" }}>.</span>ai
        </a>
        <div className="nav-links">
          <a href="#agents">Agents</a>
          <a href="#how">Process</a>
          <a href="#temoignages">Clients</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href="#calendar" className="btn btn-accent">
          Réserver <Icon.Arrow />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-grid-bg" />
        <div className="hero-blob b1" />
        <div className="hero-blob b2" />
        <div className="hero-blob b3" />
      </div>
      <div className="wrap">
        <div className="hero-top">
          <span>[ DELIQ.AI · ÉDITION 2026 ]</span>
          <div className="hero-top-r">
            <span>FR · MADE IN FRANCE</span>
            <span>v.4.2</span>
            <span>06.05.2026</span>
          </div>
        </div>
        <h1 className="hero-title">
          <span className="l1">Une équipe <span className="ital">IA</span></span>
          <span className="l2">qui <span className="ital">bosse</span> pour</span>
          <span className="l3">vous <span className="lime">24/7.</span></span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-lede">
            <strong>24 agents intelligents</strong> qui prennent en charge mails, compta, prospection, SAV, réseaux et tout le reste. Vous gardez le contrôle, ils gèrent le bruit.
          </p>
          <div className="hero-cta">
            <a href="#calendar" className="btn btn-accent">
              Réserver une démo gratuite <Icon.Arrow />
            </a>
            <a href="#agents" className="btn btn-ghost">Voir les 24 agents</a>
            <div className="hero-cta-meta">
              <span className="dot" />1 247 agents en ligne · sans engagement
            </div>
          </div>
        </div>
        <div className="hero-ticker">
          <span className="label">[ Live ]</span>
          <div className="hero-pill"><span className="pulse" />Mail trié · il y a 3s</div>
          <div className="hero-pill"><span className="pulse" />Devis envoyé · il y a 18s</div>
          <div className="hero-pill"><span className="pulse" />Lead qualifié · il y a 41s</div>
          <div className="hero-pill"><span className="pulse" />Avis traité · il y a 1m</div>
          <div className="hero-pill"><span className="pulse" />Post publié · il y a 2m</div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Mails triés", "Devis envoyés", "Posts publiés", "Factures relancées", "RDV calés", "Avis traités", "Leads qualifiés", "CR rédigés"];
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span>
          {items.map((t, i) => (
            <React.Fragment key={i}>
              {t}
              <span className="dot" />
            </React.Fragment>
          ))}
        </span>
        <span>
          {items.map((t, i) => (
            <React.Fragment key={"b" + i}>
              {t}
              <span className="dot" />
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  );
}

function Stats() {
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

function How() {
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

function AgentsSection({ onSelect }: { onSelect: (a: FlatAgent) => void }) {
  const [filter, setFilter] = useState<string>("all");
  const cats = AGENTS_DATA;
  const allAgents = useMemo<FlatAgent[]>(
    () => cats.flatMap((c) => c.agents.map((a) => ({ ...a, cat: c.cat, catLabel: c.label, emoji: c.emoji }))),
    [cats]
  );
  const filtered = filter === "all" ? allAgents : allAgents.filter((a) => a.cat === filter);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", e.clientX - r.left + "px");
    e.currentTarget.style.setProperty("--my", e.clientY - r.top + "px");
  };

  return (
    <section className="section" id="agents">
      <div className="wrap">
        <div className="section-head">
          <div><span className="eyebrow">L&apos;équipe · 24 agents</span></div>
          <h2>Choisis tes <span className="ital">collègues</span><br />de la <span className="lime">semaine.</span></h2>
        </div>
        <div className="agents-meter">
          <span>
            [ <span className="num">{filtered.length.toString().padStart(2, "0")}</span> / 24 agents · {filter === "all" ? "tous" : cats.find((c) => c.cat === filter)?.label} ]
          </span>
          <span>
            {filter !== "all" && (
              <button onClick={() => setFilter("all")} style={{ color: "var(--fg-dim)", fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".1em" }}>
                RESET ×
              </button>
            )}
          </span>
        </div>
        <div className="filters">
          <button className={`filter-chip ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
            Tous <span className="count">[24]</span>
          </button>
          {cats.map((c) => (
            <button key={c.cat} className={`filter-chip ${filter === c.cat ? "active" : ""}`} onClick={() => setFilter(c.cat)}>
              <span>{c.emoji}</span>
              {c.label} <span className="count">[{c.agents.length}]</span>
            </button>
          ))}
        </div>
        <div className="agents-grid">
          {filtered.map((a) => (
            <button key={`${a.cat}-${a.name}`} className="agent-card" onClick={() => onSelect(a)} onMouseMove={handleMouseMove}>
              <div className="agent-emoji-box">{a.emoji}</div>
              <div className="agent-name">{a.name}</div>
              <div className="agent-role">{a.role}</div>
              <div className="agent-cat-tag">[ {a.catLabel} ]</div>
              <span className="agent-arrow"><Icon.Arrow size={18} /></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function AgentModal({ agent, onClose }: { agent: FlatAgent; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><Icon.Close /></button>
        <div className="modal-cat">{agent.emoji} {agent.catLabel}</div>
        <h3>Agent <span className="ital">{agent.name}</span></h3>
        <p className="modal-role">{agent.role}</p>
        <div className="modal-desc">{agent.desc}</div>
        <div className="modal-tasks-label">// Ce qu&apos;il fait au quotidien</div>
        <ul className="modal-tasks">
          {agent.tasks.map((t, i) => (<li key={i}>{t}</li>))}
        </ul>
        <div className="modal-cta">
          <a href="#calendar" onClick={onClose} className="btn btn-accent">Activer cet agent <Icon.Arrow /></a>
          <button className="btn btn-ghost" onClick={onClose}>Fermer</button>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
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

function FAQ() {
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

function CalendarSection() {
  const [viewMonth, setViewMonth] = useState(new Date(2026, 4, 1));
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const slots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];
  const taken = ["10:30", "14:00", "15:30"];
  const monthName = viewMonth.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  const firstDay = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), 1);
  const daysInMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 0).getDate();
  const startOffset = (firstDay.getDay() + 6) % 7;
  const todayStart = new Date(2026, 4, 6).getTime();

  type Day = { empty?: boolean; d?: number; available?: boolean; isToday?: boolean };
  const days: Day[] = [];
  for (let i = 0; i < startOffset; i++) days.push({ empty: true });
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), d);
    const isPast = date.getTime() >= todayStart;
    const isToday = date.getTime() === todayStart;
    const dow = date.getDay();
    const isWeekend = dow === 0 || dow === 6;
    const tooFar = (date.getTime() - todayStart) > 1000 * 60 * 60 * 24 * 45;
    const available = isPast && !isWeekend && !tooFar;
    days.push({ d, available, isToday });
  }
  const dows = ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"];

  const formatSel = () => {
    if (!selectedDay) return "";
    const date = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), selectedDay);
    return date.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
  };

  return (
    <section className="section" id="calendar">
      <div className="wrap">
        <div className="section-head">
          <div><span className="eyebrow">Agenda · 30 min · gratuit</span></div>
          <h2>Cale ta démo<br />en <span className="ital">deux</span> <span className="lime">clics.</span></h2>
        </div>
        <div className="cal-wrap">
          <div className="cal-info">
            <div className="cal-org"><span className="logo-mark" />deliq.ai</div>
            <h3>Démo perso de <span className="ital">30 minutes</span></h3>
            <div className="cal-meta">
              <div className="cal-meta-row"><Icon.Clock />30 minutes</div>
              <div className="cal-meta-row"><Icon.Cam />Visio Google Meet</div>
              <div className="cal-meta-row"><Icon.Globe />Fuseau Europe / Paris</div>
            </div>
            <div className="cal-perks">
              <div className="cal-perk"><span className="check"><Icon.Check /></span>Démo live sur ton activité</div>
              <div className="cal-perk"><span className="check"><Icon.Check /></span>Plan d&apos;attaque concret</div>
              <div className="cal-perk"><span className="check"><Icon.Check /></span>Sans engagement, sans CB</div>
            </div>
            <div className="cal-desc">
              On te montre les agents en live sur ta vraie activité. Tu repars avec un plan d&apos;attaque concret — même si tu choisis de ne pas signer.
            </div>
          </div>
          <div className="cal-picker">
            <div className="cal-picker-head">
              <h4>{monthName}</h4>
              <div className="cal-nav">
                <button className="cal-nav-btn" onClick={() => setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1))}><Icon.ChevL /></button>
                <button className="cal-nav-btn" onClick={() => setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1))}><Icon.ChevR /></button>
              </div>
            </div>
            <div className="cal-grid">
              {dows.map((d) => <div className="cal-dow" key={d}>{d}</div>)}
              {days.map((day, i) => {
                if (day.empty) return <div className="cal-day empty" key={i} />;
                const cls = day.available ? "available" : "disabled";
                const todayCls = day.isToday ? "today" : "";
                const sel = selectedDay === day.d ? "selected" : "";
                return (
                  <button
                    key={i}
                    className={`cal-day ${cls} ${todayCls} ${sel}`}
                    onClick={() => {
                      if (day.available && day.d !== undefined) {
                        setSelectedDay(day.d);
                        setSelectedSlot(null);
                      }
                    }}
                  >
                    {day.d}
                  </button>
                );
              })}
            </div>
            {selectedDay && (
              <div className="cal-slots">
                <div className="cal-slots-label">// Créneaux dispo · {formatSel()}</div>
                <div className="cal-slots-grid">
                  {slots.map((s) => {
                    const isTaken = taken.includes(s);
                    const sel = selectedSlot === s ? "selected" : "";
                    return (
                      <button
                        key={s}
                        className={`cal-slot ${isTaken ? "taken" : ""} ${sel}`}
                        onClick={() => !isTaken && setSelectedSlot(s)}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
                {selectedSlot && (
                  <div className="cal-confirm">
                    <div className="cal-confirm-info">
                      <div style={{ color: "var(--fg-dim)", fontSize: 11, marginBottom: 4, fontFamily: "var(--mono)", letterSpacing: ".1em", textTransform: "uppercase" }}>
                        Confirmer le créneau
                      </div>
                      <div className="when">{formatSel()} · {selectedSlot}</div>
                    </div>
                    <button className="btn btn-accent">Réserver <Icon.Arrow /></button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <div className="wrap">
      <div className="cta-banner">
        <span className="eyebrow" style={{ marginBottom: 32, display: "inline-flex" }}>Prêt à déléguer ?</span>
        <h2>Ton équipe <span className="ital">IA</span><br />t&apos;attend <span className="lime">déjà.</span></h2>
        <p>30 minutes pour voir tes agents tourner sur ta vraie activité. Sans engagement, sans CB.</p>
        <a href="#calendar" className="btn btn-accent" style={{ padding: "18px 32px", fontSize: 15 }}>
          Réserver la démo <Icon.Arrow />
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-big">deliq.ai</div>
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ marginBottom: 20 }}>
              <span className="logo-mark" />deliq<span style={{ color: "var(--lime)" }}>.</span>ai
            </div>
            <p style={{ maxWidth: 340, fontSize: 14, lineHeight: 1.6 }}>
              Une équipe IA qui bosse pour les indépendants, TPE et PME françaises. Données en France, conformité RGPD, support humain.
            </p>
          </div>
          <div className="footer-col">
            <h5>Produit</h5>
            <ul>
              <li><a href="#agents">Les 24 agents</a></li>
              <li><a href="#how">Process</a></li>
              <li><a href="#calendar">Réserver une démo</a></li>
              <li><a href="#">Cas d&apos;usage</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Entreprise</h5>
            <ul>
              <li><a href="#">À propos</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Carrières</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Légal</h5>
            <ul>
              <li><a href="#">Mentions légales</a></li>
              <li><a href="#">CGU / CGV</a></li>
              <li><a href="#">Confidentialité</a></li>
              <li><a href="#">Sécurité</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 DELIQ.AI · SAS au capital de 10 000 €</span>
          <span>[ Made in France · Hébergé à Paris ]</span>
        </div>
      </div>
    </footer>
  );
}

function SectionIndex() {
  const [section, setSection] = useState("001 · INTRO");
  useEffect(() => {
    const map = [
      { id: "hero", label: "001 · INTRO" },
      { id: "how", label: "002 · PROCESS" },
      { id: "agents", label: "003 · AGENTS" },
      { id: "temoignages", label: "004 · CLIENTS" },
      { id: "calendar", label: "005 · BOOKING" },
      { id: "faq", label: "006 · FAQ" },
    ];
    const onScroll = () => {
      let cur = map[0].label;
      for (const m of map) {
        const el = document.getElementById(m.id) || (m.id === "hero" ? document.querySelector(".hero") : null);
        if (el && el.getBoundingClientRect().top <= 200) cur = m.label;
      }
      setSection(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="section-index">
      <span className="lime">●</span>
      {section}
    </div>
  );
}

export default function Landing() {
  const [agent, setAgent] = useState<FlatAgent | null>(null);
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <How />
      <AgentsSection onSelect={setAgent} />
      <Testimonials />
      <CalendarSection />
      <FAQ />
      <CTABanner />
      <Footer />
      <SectionIndex />
      {agent && <AgentModal agent={agent} onClose={() => setAgent(null)} />}
    </>
  );
}
