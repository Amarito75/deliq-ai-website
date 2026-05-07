import { Icon } from "../Icons";

export function CTABanner() {
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
