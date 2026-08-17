import funLogo from '@/assets/projects/fun-logo.jpg';
import liamHouse from '@/assets/projects/liam-house.jpg';
import pokecard from '@/assets/projects/pokecard.jpg';
import mikhaProd from '@/assets/projects/mikha-prod.jpg';
import cePortfolio from '@/assets/projects/ce-portfolio.jpg';

export interface NavLink {
  label: string;
  href: string;
}

export interface KeyPoint {
  title: string;
  body: string;
  link?: { text: string; href: string };
}

export interface Experience {
  company: string;
  role: string;
  meta: string;
  bullets: string[];
}

export type BadgeTone = 'orange' | 'blue' | 'purple' | 'pink' | 'green' | 'cyan';

export interface Project {
  title: string;
  image: string;
  badge: string;
  tone: BadgeTone;
  body: string;
  stack: string[];
  href?: string;
}

export interface StackItem {
  name: string;
  icon: string | null;
}

export interface StackGroup {
  name: string;
  items: StackItem[];
}

export interface Diploma {
  title: string;
  place: string;
  meta: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Formation {
  title: string;
  body: string;
}

export type SocialKind = 'mail' | 'linkedin' | 'github' | 'cv';

export interface Social {
  label: string;
  href: string;
  kind: SocialKind;
}

export const nav: NavLink[] = [
  { label: 'Expérience', href: '#experience' },
  { label: 'Projets', href: '#projets' },
  { label: 'Compétences', href: '#stack' },
  { label: 'Formations', href: '#formation' },
  { label: 'Contact', href: '#contact' },
];

export const keypoints: KeyPoint[] = [
  {
    title: 'Open source',
    body: "Je maintiens et fait évoluer les applications de l'organisation @openfun, avec des contributions publiques régulières.",
    link: { text: '@openfun', href: 'https://github.com/openfun' },
  },
  { title: "6 ans d'expérience", body: 'Spécialisé en développement front-end, avec une vision d’ensemble sur toute la chaîne de production d’une application.' },
  { title: 'Accessibilité & performances', body: 'Je conçois des applications rapides et inclusives, en respectant les standards du web pour offrir une expérience optimale à chaque utilisateur.' },
];

export const experiences: Experience[] = [
  {
    company: 'France Université Numérique',
    role: 'Développeur front-end',
    meta: 'Juin 2025 — aujourd’hui · CDI · Paris',
    bullets: [
      'Développement du tunnel d’achat en React et Next.js (codes promo, achats groupés entreprises, paiement CPF), du cadrage produit à la mise en prod.',
      'Conception du parcours de connexion SSO Keycloak avec les équipes juridiques et communication, sur un site de 2 millions de comptes.',
      'Maintenance de Richie et Joanie (open source) : revues de code, choix techniques, intégration de scans de vulnérabilités.',
      'Animation d’ateliers et formation de quatre contributeurs externes sur un environnement de démo dédié.',
    ],
  },
  {
    company: 'INSEE',
    role: 'Développeur full stack',
    meta: 'Nov. 2023 — Mai 2025 · Contractuel · Montrouge',
    bullets: [
      'Melodi (Open Data) : application React sur micro-services Java / Spring, optimisation des performances sur gros volumes et POC SEO.',
      'Responsable applicatif du 3e outil le plus consulté de l’INSEE : évolutions, correctifs de sécurité et automatisation des livraisons.',
      'Échanges techniques avec les équipes de data.gouv et l’institut statistique bulgare.',
    ],
  },
  {
    company: 'Orange Business',
    role: 'Ingénieur logiciel',
    meta: 'Sept. 2020 — Sept. 2023 · Alternance · Rennes',
    bullets: [
      'Refonte d’une application interne (front Vue / Nuxt, back Java Spring) et livraison d’un portail de démo pour le projet de fin d’études.',
      'Projet Malima (IoT, cartes SIM) : travail quotidien en anglais et animation des rituels agiles.',
      'Migration de pipelines Jenkins et mise en place du monitoring Grafana.',
    ],
  },
];

export const projects: Project[] = [
  { title: 'Richie', image: funLogo, badge: 'Catalogue', tone: 'blue', body: 'Portail public d’une plateforme de formation : revue de code, développement de fonctionnalités et arbitrage des contributions.', stack: ['React', 'TypeScript', 'Django CMS'], href: 'https://github.com/openfun/richie' },
  { title: 'Joanie', image: funLogo, badge: 'Back-office', tone: 'purple', body: 'Back-office des commandes et certificats : développement front-end et intégration API.', stack: ['Next.js', 'TypeScript', 'Django'], href: 'https://github.com/openfun/joanie' },
  { title: 'Liam House', image: liamHouse, badge: 'Creative 3D', tone: 'orange', body: 'Scène interactive 3D conçue lors du Three.js Journey — 4e au concours de la communauté.', stack: ['React', 'Three.js', 'Blender'], href: 'https://liam-house-threejs.vercel.app/' },
  { title: 'Pokecard', image: pokecard, badge: 'Jeu', tone: 'pink', body: 'Simulateur d’ouverture de boosters dans le navigateur : animations de tirage et effets de brillance.', stack: ['React', 'CSS', 'Animation'], href: 'https://pokecard-tau.vercel.app/' },
  { title: 'Mikha Prod', image: mikhaProd, badge: 'Site vitrine', tone: 'green', body: 'Site vitrine d’un vidéaste indépendant, de la définition du besoin à la mise en ligne.', stack: ['React', 'Cadrage & écoute client', 'SEO'], href: 'https://mikhaprod.com/' },
  { title: 'Ce portfolio', image: cePortfolio, badge: 'Ce site', tone: 'cyan', body: 'Le site que vous parcourez : thème clair/sombre, curseur interactif, halos réactifs et accessibilité RGAA.', stack: ['React', 'TypeScript', 'Design UI/UX'] },
];

export const stackGroups: StackGroup[] = [
  {
    name: 'Front-end',
    items: [
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Next.js', icon: 'devicon-nextjs-plain' },
      { name: 'Vue / Nuxt', icon: 'devicon-vuejs-plain colored' },
      { name: 'HTML / CSS', icon: 'devicon-html5-plain colored' },
      { name: 'Three.js', icon: 'devicon-threejs-original' },
    ],
  },
  {
    name: 'Back-end & API',
    items: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'Java / Spring', icon: 'devicon-java-plain colored' },
      { name: 'Python / Django', icon: 'devicon-python-plain colored' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'API REST', icon: null },
      { name: 'Keycloak', icon: null },
    ],
  },
  {
    name: 'Outillage & infra',
    items: [
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'Jenkins', icon: 'devicon-jenkins-plain colored' },
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
      { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored' },
      { name: 'Jest / Vitest', icon: 'devicon-jest-plain colored' },
      { name: 'Grafana', icon: 'devicon-grafana-original colored' },
    ],
  },
  {
    name: 'Qualité & méthodes',
    items: [
      { name: 'RGAA / WCAG', icon: null },
      { name: 'Design systems', icon: null },
      { name: 'Performance web', icon: null },
      { name: 'SEO', icon: null },
      { name: 'Agile', icon: null },
      { name: 'Dév. assisté par IA', icon: null },
    ],
  },
];

export const diplomas: Diploma[] = [
  { title: 'Ingénieur informatique & télécoms', place: 'IMT Nord Europe', meta: 'Apprentissage · 2020–2023' },
  { title: 'DUT Réseaux & Télécoms', place: 'IUT de Saint-Malo', meta: 'Apprentissage · 2018–2020' },
  { title: 'Baccalauréat S — mention bien', place: 'Lycée Émile Zola, Rennes', meta: '2015–2018' },
];

export const languages: Language[] = [
  { name: 'Français', level: 'Langue maternelle' },
  { name: 'Anglais', level: 'B2 · TOEIC 890' },
  { name: 'Chinois', level: 'A2 · HSK 2' },
];

export const persoFormations: Formation[] = [
  { title: 'Three.js Journey', body: 'Bruno Simon, en cours — 3D temps réel : WebGL, shaders, optimisation.' },
  { title: 'Pentest web niveau 1', body: 'TryHackMe, en cours — sécurité web côté attaquant.' },
];

export const socials: Social[] = [
  { label: 'Email', href: 'mailto:lestratliam@gmail.com', kind: 'mail' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/liam-le-strat/', kind: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/liamls', kind: 'github' },
  { label: 'CV (FR)', href: '/cv-liam-le-strat-fr.pdf', kind: 'cv' },
  { label: 'CV (EN)', href: '/cv-liam-le-strat-en.pdf', kind: 'cv' },
];
