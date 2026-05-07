"use client";

import { useEffect } from "react";
import { Icon, CategoryIcon } from "../Icons";
import { type FlatAgent } from "@/lib/agents";

export function AgentModal({ agent, onClose }: { agent: FlatAgent; onClose: () => void }) {
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
        <div className="modal-cat"><CategoryIcon cat={agent.cat} /> {agent.catLabel}</div>
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
