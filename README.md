# Portfolio NHB — Next.js 14

Portfolio de Horatio NGUEND, migré de Vanilla JS vers **Next.js 14 + Tailwind CSS + TypeScript**.

---

## Structure du projet

```
portfolio-nhb/
├── app/
│   ├── layout.tsx        ← SEO (metadata, OG tags, Twitter cards)
│   ├── page.tsx          ← Page principale (tout le contenu HTML)
│   └── globals.css       ← Tout ton CSS vanilla converti
├── components/
│   └── ClientEffects.tsx ← Monte tous les hooks côté client
├── hooks/
│   ├── useNav.ts         ← Hamburger + hide on scroll + glitch
│   ├── useStars.ts       ← Génération étoiles + parallaxe
│   ├── useParticles.ts   ← Particules interactives + cursor glow
│   └── useScrollReveal.ts← Animations d'apparition par section
├── public/
│   └── assets/
│       ├── Fonts/        ← Copie tes 3 polices ici
│       ├── Images/       ← Copie tes images ici
│       └── icons/        ← Copie tes icônes ici
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## Installation — étape par étape

### Prérequis
- **Node.js 18+** → https://nodejs.org (vérifie avec `node -v`)
- **npm** (inclus avec Node.js)

---

### Étape 1 — Copier tes assets

Dans le dossier `public/assets/`, copie :

```
public/
└── assets/
    ├── Fonts/
    │   ├── Unbounded-VariableFont_wght.ttf
    │   ├── SpaceGrotesk-VariableFont_wght.ttf
    │   └── Manrope-VariableFont_wght.ttf
    ├── Images/
    │   ├── photo.jpeg          ← ta photo (renommer si besoin dans page.tsx)
    │   ├── folding-house.png   ← screenshot projet 1
    │   ├── destockage.png      ← screenshot projet 2
    │   └── app-web.png         ← screenshot projet 3
    └── icons/
        ├── icons8-html-5-96.png
        ├── icons8-css3-100.png
        ├── icons8-javascript-240.png
        ├── icons8-react-natif-68.png
        ├── icons8-vent-arrièrecss-480.png
        ├── icons8-php-96.png
        ├── icons8-mysql-96.png
        ├── icons8-nœud-js-100.png
        ├── icons8-python-480.png
        ├── icons8-figma-480.png
        ├── icons8-notion-64.png
        ├── icons8-github-64.png
        ├── icons8-git-480.png
        ├── icons8-gmail-nouveau-100.png
        ├── icons8-whatsapp-500.png
        ├── icons8-travailler-500.png
        ├── icons8-cinq-500.png
        ├── globe.png
        ├── click.png
        ├── cpu.png
        └── repost.png
```

---

### Étape 2 — Installer les dépendances

Ouvre un terminal dans le dossier `portfolio-nhb/` :

```bash
npm install
```

---

### Étape 3 — Lancer en mode développement

```bash
npm run dev
```

Ouvre **http://localhost:3000** dans ton navigateur. 🎉

---

### Étape 4 — Personnaliser le contenu

**Changer les images de projets** → édite le tableau `projects` dans `app/page.tsx`

**Ajouter un projet** → ajoute un objet dans le tableau `projects` :
```ts
{
  id: 4,
  image: '/assets/Images/mon-nouveau-projet.png',
  alt: 'Description du projet',
  title: 'Nom du projet',
  description: 'Description...',
  link: 'https://mon-projet.com',
}
```

**Mettre à jour le SEO** → édite `app/layout.tsx` (title, description, OG, Twitter)

**Changer les liens sociaux** → cherche `social-links` dans `app/page.tsx`

---

### Étape 5 — Builder pour la production

```bash
npm run build
npm run start
```

---

## Déploiement sur Vercel (gratuit)

1. Crée un compte sur **https://vercel.com**
2. Pousse ton projet sur GitHub :
   ```bash
   git init
   git add .
   git commit -m "Portfolio Next.js"
   git remote add origin https://github.com/TON_PSEUDO/portfolio-nhb.git
   git push -u origin main
   ```
3. Sur Vercel → **New Project** → importe ton repo GitHub
4. Clique **Deploy** — Vercel détecte automatiquement Next.js

Chaque `git push` redéploie automatiquement ton site. ✅

---

## Ce qui a changé vs le vanilla

| Vanilla                          | Next.js                              |
|----------------------------------|--------------------------------------|
| `index.html` monolithique        | `app/page.tsx` composants clairs     |
| `<script>` en bas de page        | Hooks TypeScript isolés par feature  |
| Pas de SEO dynamique             | `metadata` dans `layout.tsx`         |
| Images sans optimisation         | `next/image` (lazy, WebP, LCP)       |
| Ajouter projet = éditer le HTML  | Ajouter un objet dans `projects[]`   |
| Animations DOM brutes            | Hooks avec `useEffect` + cleanup     |
| CSS inline dans `<script>`       | Tout dans `globals.css`              |
