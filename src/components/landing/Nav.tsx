import { Icon } from "../Icons";

export function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="logo">
          <span className="logo-mark" />
          decliq<span style={{ color: "var(--lime)" }}>.</span>ai
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
