export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-big">decliq.ai</div>
        <div className="footer-grid">
          <div>
            <div className="logo" style={{ marginBottom: 20 }}>
              <span className="logo-mark" />decliq<span style={{ color: "var(--lime)" }}>.</span>ai
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
          <span>© 2026 DECLIQ.AI · SAS au capital de 10 000 €</span>
          <span>[ Made in France · Hébergé à Paris ]</span>
        </div>
      </div>
    </footer>
  );
}
