import * as React from "react";

export const Icon = {
  Arrow: ({ size = 14 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow"><path d="M7 17L17 7M7 7h10v10"/></svg>
  ),
  Close: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M6 18L18 6"/></svg>
  ),
  ChevL: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
  ),
  ChevR: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
  ),
  Clock: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>
  ),
  Cam: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="6" width="14" height="12" rx="2"/><polygon points="22 8 16 12 22 16 22 8"/></svg>
  ),
  Globe: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>
  ),
  Star: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01z"/></svg>
  ),
  Check: () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  ),
};

const LIME = "#d8ff3a";

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
      {children}
    </svg>
  );
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  communication: (
    <>
      <path d="M3 6l9 7 9-7"/>
      <rect x="3" y="5" width="18" height="14" rx="1.5"/>
      <circle cx="18" cy="6" r="2.5" fill="currentColor" stroke="none" opacity="0.9"/>
    </>
  ),
  commercial: (
    <>
      <path d="M3 12l4-4 5 4 5-6 4 5"/>
      <circle cx="20" cy="11" r="1.6" fill="currentColor" stroke="none"/>
      <path d="M3 19h18"/>
    </>
  ),
  finance: (
    <>
      <circle cx="12" cy="12" r="9"/>
      <path d="M15 9.5c-.5-1-1.7-1.5-3-1.5-1.7 0-3 .9-3 2.2 0 2.8 6 1.6 6 4.5 0 1.4-1.4 2.3-3 2.3-1.5 0-2.7-.6-3.2-1.5"/>
      <path d="M12 6v2M12 16v2"/>
    </>
  ),
  digital: (
    <>
      <circle cx="12" cy="12" r="9"/>
      <path d="M3 12h18"/>
      <path d="M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>
    </>
  ),
  productivity: (
    <polygon points="13 2 4 14 11 14 10 22 20 9 13 9 13 2"/>
  ),
  intelligence: (
    <>
      <circle cx="11" cy="11" r="7"/>
      <path d="M21 21l-5-5"/>
      <circle cx="11" cy="11" r="2.5" fill="currentColor" stroke="none"/>
    </>
  ),
};

const AGENT_ICONS: Record<string, React.ReactNode> = {
  // Communication
  "Mails": (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5"/>
      <path d="M3 6l9 7 9-7"/>
      <circle cx="19" cy="6" r="2" fill={LIME} stroke="none"/>
    </>
  ),
  "Community Manager": (
    <>
      <circle cx="9" cy="9" r="3.5"/>
      <circle cx="17" cy="14" r="2.5"/>
      <path d="M3 20c.5-3 3-5 6-5s5.5 2 6 5"/>
      <path d="M14 19c.3-1.5 1.5-2.5 3-2.5s2.7 1 3 2.5"/>
    </>
  ),
  "Contenu": (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1"/>
      <path d="M8 8h8M8 12h8M8 16h5"/>
      <circle cx="18" cy="16" r="1.5" fill={LIME} stroke="none"/>
    </>
  ),
  "Newsletter": (
    <>
      <path d="M3 8l9 5 9-5"/>
      <rect x="3" y="6" width="18" height="14" rx="1"/>
      <path d="M9 3l3 3 3-3"/>
    </>
  ),
  "Réputation": (
    <polygon points="12 2 15 9 22 10 17 15 18 22 12 18 6 22 7 15 2 10 9 9 12 2"/>
  ),

  // Commercial
  "Prospection": (
    <>
      <circle cx="11" cy="11" r="7"/>
      <path d="M21 21l-5-5"/>
      <path d="M8 11l2 2 4-4"/>
    </>
  ),
  "SAV / Chatbot": (
    <>
      <path d="M21 12a8 8 0 11-3-6.2"/>
      <path d="M21 4v5h-5"/>
      <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none"/>
      <circle cx="13" cy="12" r="1" fill="currentColor" stroke="none"/>
      <circle cx="17" cy="12" r="1" fill="currentColor" stroke="none"/>
    </>
  ),
  "Devis / Facturation": (
    <>
      <path d="M6 2h9l5 5v15a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1z"/>
      <path d="M14 2v6h6"/>
      <path d="M9 14h6M9 17h4"/>
      <circle cx="16" cy="17" r="2" fill={LIME} stroke="none"/>
    </>
  ),
  "CRM": (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1.5"/>
      <path d="M3 9h18"/>
      <circle cx="8" cy="14" r="1.5"/>
      <path d="M5 18c.5-1.5 1.5-2.5 3-2.5s2.5 1 3 2.5"/>
      <path d="M14 14h4M14 17h3"/>
    </>
  ),

  // Finance
  "Comptabilité": (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1"/>
      <path d="M8 7h8M8 11h8M8 15h5"/>
      <circle cx="17" cy="16" r="2" fill={LIME} stroke="none"/>
    </>
  ),
  "Trésorerie": (
    <>
      <path d="M3 17l5-5 4 4 8-9"/>
      <path d="M14 7h7v7"/>
      <circle cx="21" cy="7" r="1.5" fill="currentColor" stroke="none"/>
    </>
  ),
  "RH": (
    <>
      <circle cx="9" cy="8" r="3.5"/>
      <path d="M3 20c.5-3 3-5 6-5s5.5 2 6 5"/>
      <circle cx="17" cy="6" r="2.5"/>
      <path d="M14 13c1-1 2-1.5 3-1.5 2 0 3.5 1 4 3"/>
    </>
  ),
  "Conformité juridique": (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z"/>
      <path d="M9 12l2 2 4-4"/>
    </>
  ),

  // Digital
  "Webmaster / SEO": (
    <>
      <rect x="3" y="3" width="18" height="14" rx="1"/>
      <path d="M3 7h18"/>
      <circle cx="6" cy="5" r="0.5" fill="currentColor"/>
      <circle cx="8" cy="5" r="0.5" fill="currentColor"/>
      <circle cx="10" cy="5" r="0.5" fill="currentColor"/>
      <path d="M9 21h6M12 17v4"/>
      <path d="M8 12l2 2 5-5" stroke={LIME}/>
    </>
  ),
  "Analytics": (
    <>
      <path d="M3 21V9M9 21V13M15 21V5M21 21V11"/>
      <path d="M3 21h18"/>
    </>
  ),
  "Ads": (
    <>
      <path d="M3 11l6-1 9-6v16l-9-6-6-1z"/>
      <path d="M3 11v3"/>
      <circle cx="18" cy="12" r="2" fill={LIME} stroke="none"/>
    </>
  ),
  "Google Business": (
    <>
      <path d="M12 2l9 7-3 12H6L3 9l9-7z"/>
      <circle cx="12" cy="11" r="2.5"/>
      <path d="M12 13.5V18"/>
    </>
  ),

  // Productivity
  "Agenda": (
    <>
      <rect x="3" y="5" width="18" height="16" rx="1.5"/>
      <path d="M3 10h18"/>
      <path d="M8 3v4M16 3v4"/>
      <circle cx="8" cy="15" r="1" fill="currentColor" stroke="none"/>
      <circle cx="12" cy="15" r="1" fill={LIME} stroke="none"/>
      <circle cx="16" cy="15" r="1" fill="currentColor" stroke="none"/>
    </>
  ),
  "Compte-rendu": (
    <>
      <rect x="9" y="2" width="6" height="12" rx="3"/>
      <path d="M5 11a7 7 0 0014 0"/>
      <path d="M12 18v3M9 21h6"/>
    </>
  ),
  "Veille concurrentielle": (
    <>
      <circle cx="12" cy="12" r="3"/>
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>
    </>
  ),
  "Onboarding": (
    <>
      <path d="M5 12h13M13 6l6 6-6 6"/>
      <circle cx="4" cy="12" r="1.5" fill={LIME} stroke="none"/>
    </>
  ),

  // Intelligence
  "Veille sectorielle": (
    <>
      <circle cx="12" cy="12" r="9"/>
      <circle cx="12" cy="12" r="5"/>
      <circle cx="12" cy="12" r="1.5" fill={LIME} stroke="none"/>
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>
    </>
  ),
  "Appels d'offres": (
    <>
      <path d="M9 11l3 3L22 4"/>
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
    </>
  ),
  "Benchmark prix": (
    <>
      <path d="M3 6h18M3 12h18M3 18h18"/>
      <circle cx="7" cy="6" r="2" fill="currentColor" stroke="none"/>
      <circle cx="14" cy="12" r="2" fill={LIME} stroke="none"/>
      <circle cx="18" cy="18" r="2" fill="currentColor" stroke="none"/>
    </>
  ),
};

export function CategoryIcon({ cat }: { cat: string }) {
  return <span className="cat-ic">{CATEGORY_ICONS[cat] ? <Svg>{CATEGORY_ICONS[cat]}</Svg> : null}</span>;
}

export function AgentIcon({ name }: { name: string }) {
  return <span className="agent-ic">{AGENT_ICONS[name] ? <Svg>{AGENT_ICONS[name]}</Svg> : null}</span>;
}
