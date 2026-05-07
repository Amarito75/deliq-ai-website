"use client";

import { useState, useEffect } from "react";

export function SectionIndex() {
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
