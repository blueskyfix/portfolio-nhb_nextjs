export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  link?: string;
  tags?: string[];
  featured?: boolean; // ← pour filtrer les projets mis en avant sur la home
};

export const projects: Project[] = [
  {
    id: 1,
    image: '/assets/Images/app-web.png',
    alt: 'Application Web Personnalisée',
    title: 'JFN Center\n Site Demo ',
    description:
      "Refonte ergonomique pour le centre JFN. Une architecture d'information pensée pour faciliter l'accès aux programmes de son centre de formation et ceux d'incubation de projet dans le but de booster les inscriptions en ligne.",
    link: 'https://jfncenter-demo.onrender.com/',
    featured: true,
  },
  {
    id: 2,
    image: '/assets/Images/destockage.png',
    alt: 'Landing page Destockage Alimentaire',
    title: 'Destockage Alimentaire\nE-commerce',
    description:
      "Solution française d'e-commerce de déstockage alimentaire. Une interface optimisée pour l'achat immédiat et la navigation par catégories, alliant performance commerciale et engagement contre le gaspillage.",
    link: 'https://destockagealimentaireprixmini.com/',
    featured: true,
  },
  {
    id: 3,
    image: '/assets/Images/folding-house.png',
    alt: 'Site vitrine Folding House',
    title: 'Folding House\nLanding Page',
    description:
      "Développement d'une plateforme vitrine pour la vente de maisons capsules innovantes. Un design conçu pour une audience internationale avec contact et pages e-commerce de produits (catalogues et descriptions).",
    link: 'https://foldinghouse.site',
    featured: true,
  },
  {
    id: 4,
    image: '/assets/Images/folding-house.png',
    alt: 'Site vitrine Folding House',
    title: 'Folding House\nLanding Page',
    description:"Développement d'une plateforme vitrine pour la vente de maisons capsules innovantes. Un design conçu pour une audience internationale avec contact et pages e-commerce de produits (catalogues et descriptions).",
    link: 'https://foldinghouse.site',
  },
];

// Projets mis en avant sur la home (max 3)
export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);