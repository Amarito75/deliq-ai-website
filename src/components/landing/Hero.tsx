import { Icon } from "../Icons";

export function Hero() {
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
          <span>[ DECLIQ.AI · ÉDITION 2026 ]</span>
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
