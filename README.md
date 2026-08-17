# Portfolio — Liam Le Strat

Portfolio de développeur front-end, réécrit en **Vite + React + TypeScript + Tailwind CSS**.

Mode clair par défaut avec bascule sombre persistée, grille blueprint en fond, curseur
personnalisé et halos réactifs au pointeur, accordéon d'expériences, navigation qui se masque
au scroll, et version mobile complète (menu burger animé). Accessibilité : navigation clavier,
`prefers-reduced-motion` respecté, curseur natif restauré sur tactile.

## Démarrer

```bash
npm install
npm run dev      # serveur de dev (http://localhost:5173)
npm run build    # build de production typé (tsc + vite) dans dist/
npm run preview  # prévisualise le build
```

Node 18+ recommandé.

## Pourquoi ce stack

Portfolio one-page, sans routing ni contenu dynamique côté serveur : **Vite + React SPA**
suffit, un framework full-stack (Next.js) ajouterait de la complexité (RSC, routes serveur)
sans bénéfice ici. Tailwind pour la vitesse d'itération sur le visuel, TypeScript strict
(`strict: true`, pas de `any` toléré) pour fiabiliser les données du CV/projets.

## Structure

```
src/
  main.tsx              point d'entrée React
  App.tsx               composition des sections
  index.css             variables de thème (CSS custom props), resets, media queries a11y
  data/portfolio.ts     tout le contenu factuel, typé (aucune donnée en dur dans les vues)
  hooks/
    useTheme.ts         thème clair/sombre + persistance localStorage
    useCursor.ts        curseur custom + halos, piloté en requestAnimationFrame
    useHideOnScroll.ts  masquage du header au scroll (throttle rAF)
  components/
    Background.tsx      grille + halos d'ambiance
    CustomCursor.tsx    crosshair + halo suiveur
    Header.tsx          nav sticky, toggle thème
    HeaderMobileMenu.tsx  bouton burger + panneau du menu mobile
    Hero.tsx  Availability.tsx  Experience.tsx  Projects.tsx
    Stack.tsx  Education.tsx  Contact.tsx  Footer.tsx
    SectionHeading.tsx  titre de section réutilisable
```

## Choix d'optimisation

- **Animations en rAF hors React** : curseur, halos et masquage du header écrivent
  directement dans le DOM via des refs — zéro re-render pendant le mouvement.
- **Écouteurs passifs** (`mousemove`, `scroll`) et throttle `requestAnimationFrame`.
- **Composants mémoïsés** (`React.memo`) — le contenu est statique, rien ne re-rend inutilement.
- **Données séparées du rendu** dans `data/portfolio.ts`, entièrement typées.
- **Thème par variables CSS** : le basculement clair/sombre ne touche qu'un attribut
  `data-theme` sur `<html>`, aucune reconstruction de composant.
- **Respect de `prefers-reduced-motion`** : animations et curseur custom désactivés.

## Défis techniques

- **Curseur custom sans re-render React** : le suivi de souris tourne à 60fps
  (`useCursor.ts`). Le faire via `useState` aurait déclenché un re-render de toute
  l'arborescence à chaque `mousemove`. Solution : `useRef` + boucle `requestAnimationFrame`
  qui écrit directement le `style.transform` dans le DOM, React ne voit jamais ces updates.
- **Header qui se masque au scroll sans jank** : même logique dans `useHideOnScroll.ts` —
  lecture de `window.scrollY` throttlée en rAF, écriture DOM directe via ref, aucun
  re-render du composant `Header` pendant le scroll.
- **Accessibilité du menu mobile** : `aria-expanded` sur le bouton burger, `aria-hidden`
  + `tabIndex={-1}` sur les liens du panneau replié pour les sortir de l'ordre de
  tabulation quand il est fermé, et `prefers-reduced-motion` respecté pour désactiver
  curseur custom et animations.

## Personnaliser

- Contenu : `src/data/portfolio.ts`.
- Couleurs / thème : variables CSS dans `src/index.css` (`--blue`, `--orange`, etc.).
- Liens LinkedIn / GitHub / CV : remplacer les `href: '#'` dans `socials` (portfolio.ts).

## Icônes

Les logos de la stack utilisent [devicon](https://devicon.dev/) via CDN (voir `index.html`).
Pour un usage 100 % hors-ligne, installer `devicon` en dépendance et l'importer.
