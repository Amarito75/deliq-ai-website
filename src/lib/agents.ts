export type Agent = {
  name: string;
  role: string;
  desc: string;
  tasks: string[];
};

export type AgentCategory = {
  cat: string;
  label: string;
  color: string;
  agents: Agent[];
};

export type FlatAgent = Agent & {
  cat: string;
  catLabel: string;
};

export const AGENTS_DATA: AgentCategory[] = [
  {
    cat: "communication",
    label: "Communication & Marketing",
    color: "#7c5cff",
    agents: [
      { name: "Mails", role: "Rédaction & tri intelligents", desc: "Trie, priorise et rédige tes mails en 1 clic. Ne rate plus jamais une opportunité dans ta boîte qui déborde.", tasks: ["Tri automatique par priorité", "Réponses pré-rédigées dans ton ton", "Détection des leads chauds", "Suivi des relances"] },
      { name: "Community Manager", role: "Réseaux sociaux pilote auto", desc: "Poste, répond et anime tes réseaux 7j/7. Comme un CM senior, mais qui dort jamais.", tasks: ["Calendrier éditorial multi-plateforme", "Réponses aux DM & commentaires", "Veille de tendances de ton secteur", "Reporting d'engagement"] },
      { name: "Contenu", role: "Articles, posts, scripts vidéo", desc: "Génère du contenu calibré pour ton audience. SEO, hooks, structure : tout est pensé.", tasks: ["Articles de blog SEO", "Posts LinkedIn & Insta", "Scripts vidéo TikTok / Reels", "Adaptation par persona"] },
      { name: "Newsletter", role: "Capture, écrit, envoie", desc: "De la collecte d'emails à la perf de chaque envoi. Ta newsletter devient un actif.", tasks: ["Templates qui convertissent", "Segmentation auto", "A/B test des objets", "Analyse d'ouverture & clics"] },
      { name: "Réputation", role: "Avis, e-réputation, alertes", desc: "Surveille ce qu'on dit de toi partout. Réponds vite, transforme les râleurs en fans.", tasks: ["Monitoring Google, Trustpilot, forums", "Réponses aux avis dans ton ton", "Alertes en temps réel", "Score de réputation mensuel"] },
    ],
  },
  {
    cat: "commercial",
    label: "Commercial & Client",
    color: "#7c5cff",
    agents: [
      { name: "Prospection", role: "Trouve & contacte tes leads", desc: "Identifie des prospects qualifiés et les contacte avec des messages qui ne sentent pas le copier-coller.", tasks: ["Scraping de leads ciblés", "Séquences mail multi-touch", "LinkedIn outreach", "Scoring d'intention"] },
      { name: "SAV / Chatbot", role: "Support 24/7 sur ton site", desc: "Un agent qui connaît tes produits par cœur et répond aux clients en 8 secondes chrono.", tasks: ["Chatbot site & WhatsApp", "Base de connaissance auto-alimentée", "Escalade humaine si besoin", "Statistiques de satisfaction"] },
      { name: "Devis / Facturation", role: "Du devis au paiement", desc: "Génère des devis pro en 30 sec, relance les factures impayées sans gêne.", tasks: ["Devis personnalisés à la voix", "Factures conformes & envoi auto", "Relances graduelles d'impayés", "Synchro comptable"] },
      { name: "CRM", role: "Pipeline qui se remplit seul", desc: "Chaque interaction (mail, call, RDV) atterrit dans ton CRM, qualifié, sans copier-coller.", tasks: ["Saisie auto des contacts", "Notes de réunion enrichies", "Détection de signaux d'achat", "Rappels intelligents"] },
    ],
  },
  {
    cat: "finance",
    label: "Gestion & Finances",
    color: "#7c5cff",
    agents: [
      { name: "Comptabilité", role: "Saisie, justificatifs, clôture", desc: "Photos de tickets, factures fournisseurs, rapprochement bancaire : tout est trié, prêt pour ton expert-comptable.", tasks: ["OCR des justificatifs", "Catégorisation automatique", "Rapprochement bancaire", "Export expert-comptable"] },
      { name: "Trésorerie", role: "Cash flow en temps réel", desc: "Sait combien il te reste, anticipe les trous, t'alerte avant que ça pique.", tasks: ["Prévisionnel à 90 jours", "Alertes seuil de cash", "Suivi des encours clients", "Scénarios d'investissement"] },
      { name: "RH", role: "Paie, contrats, onboarding", desc: "Du contrat à la fiche de paie en passant par les congés. Ton DRH de poche.", tasks: ["Génération de contrats", "Suivi des congés & absences", "Préparation de paie", "Onboarding de nouveaux"] },
      { name: "Conformité juridique", role: "RGPD, CGV, mentions légales", desc: "Garde tes documents légaux à jour, te prévient des nouvelles obligations.", tasks: ["Audit RGPD continu", "Génération CGV / CGU", "Veille réglementaire ciblée", "Modèles de contrats"] },
    ],
  },
  {
    cat: "digital",
    label: "Digital & Technique",
    color: "#7c5cff",
    agents: [
      { name: "Webmaster / SEO", role: "Site optimisé en continu", desc: "Audit ton site, corrige les bugs SEO, propose des améliorations qui rankent.", tasks: ["Audit technique mensuel", "Optimisation des balises", "Suggestions de contenus SEO", "Monitoring de positions"] },
      { name: "Analytics", role: "Comprend tes données", desc: "Lit GA, Search Console, Stripe et te dit ce qui marche, en français, pas en jargon.", tasks: ["Rapport hebdo lisible", "Détection d'anomalies", "Funnels de conversion", "Recommandations actionnables"] },
      { name: "Ads", role: "Pilote tes campagnes payantes", desc: "Lance, optimise et arrête tes pubs Google / Meta. Au CPA fixé, pas un euro gaspillé.", tasks: ["Création de campagnes", "A/B test de créas", "Optimisation d'enchères", "Reporting ROAS clair"] },
      { name: "Google Business", role: "Fiche locale au top", desc: "Pour ceux qui ont un commerce ou bossent en local. Photos, posts, avis : tout est nourri.", tasks: ["Posts hebdo sur ta fiche", "Réponses aux avis", "Optimisation des mots-clés locaux", "Suivi du trafic local"] },
    ],
  },
  {
    cat: "productivity",
    label: "Productivité",
    color: "#7c5cff",
    agents: [
      { name: "Agenda", role: "Calendrier qui se gère seul", desc: "Prend tes RDV, déplace, confirme. Adieu les 12 mails pour caler un créneau.", tasks: ["Prise de RDV par mail / SMS", "Détection des conflits", "Rappels automatiques", "Synchro multi-calendriers"] },
      { name: "Compte-rendu", role: "Réunions transcrites & résumées", desc: "Écoute tes réunions Zoom / Meet / présentielles et te sort un CR actionable.", tasks: ["Transcription précise", "Résumé en 5 lignes", "Liste d'actions extraite", "Partage automatique"] },
      { name: "Veille concurrentielle", role: "Œil sur tes concurrents", desc: "Surveille leurs prix, sorties, communication. T'alerte dès qu'ils bougent.", tasks: ["Tracking de sites concurrents", "Alertes sur changements de prix", "Analyse de leurs publis", "Benchmark mensuel"] },
      { name: "Onboarding", role: "Accueil clients & équipes", desc: "Crée des parcours d'accueil sur-mesure pour clients ou nouveaux salariés.", tasks: ["Séquences de bienvenue", "Documentation interactive", "Suivi de progression", "Collecte de feedback"] },
    ],
  },
  {
    cat: "intelligence",
    label: "Intelligence Marché",
    color: "#7c5cff",
    agents: [
      { name: "Veille sectorielle", role: "Pouls de ton industrie", desc: "Lit la presse, les rapports, les forums spécialisés. Te livre une synthèse hebdo.", tasks: ["Curation multi-sources", "Synthèse hebdomadaire", "Détection de signaux faibles", "Suggestions d'actions"] },
      { name: "Appels d'offres", role: "Trouve & qualifie les AO", desc: "Surveille BOAMP, plateformes privées et te ping uniquement sur ce qui colle à ton offre.", tasks: ["Sourcing multi-plateformes", "Filtrage par critères", "Aide au montage de dossier", "Suivi des résultats"] },
      { name: "Benchmark prix", role: "Tarifs market en continu", desc: "Compare tes prix au marché. Te dit où tu peux monter, où tu dois rester ferme.", tasks: ["Veille tarifaire concurrente", "Élasticité par segment", "Recommandations de pricing", "Reporting trimestriel"] },
    ],
  },
];
