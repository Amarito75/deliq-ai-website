"use client";

import { Icon, AgentIcon, CategoryIcon } from "../Icons";
import { AGENTS_DATA, type FlatAgent } from "@/lib/agents";

export function AgentsSection({ onSelect }: { onSelect: (a: FlatAgent) => void }) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", e.clientX - r.left + "px");
    e.currentTarget.style.setProperty("--my", e.clientY - r.top + "px");
  };

  return (
    <section className="section" id="agents">
      <div className="wrap">
        <div className="section-head">
          <div><span className="eyebrow">L&apos;équipe · 24 agents · 6 catégories</span></div>
          <h2>Choisis tes <span className="ital">collègues</span><br />de la <span className="lime">semaine.</span></h2>
        </div>
        <div className="cat-grid">
          {AGENTS_DATA.map((c) => (
            <div className="cat-card" key={c.cat} onMouseMove={handleMouseMove}>
              <div className="cat-card-head">
                <span className="cat-card-icon" aria-hidden><CategoryIcon cat={c.cat} /></span>
                <div className="cat-card-titles">
                  <h3 className="cat-card-title">{c.label}</h3>
                  <span className="cat-card-count">{c.agents.length} agents</span>
                </div>
              </div>
              <ul className="cat-agent-list">
                {c.agents.map((a) => (
                  <li key={a.name}>
                    <button
                      type="button"
                      className="cat-agent"
                      onClick={() => onSelect({ ...a, cat: c.cat, catLabel: c.label })}
                    >
                      <span className="cat-agent-icon"><AgentIcon name={a.name} /></span>
                      <span className="cat-agent-name">{a.name}</span>
                      <span className="cat-agent-arrow"><Icon.Arrow size={14} /></span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
