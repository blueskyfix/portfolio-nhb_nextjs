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
  },
  {
    id: 4,
    image: '/assets/Images/k-shop.png',
    alt: 'Boutique E-commerce K-shop',
    title: 'K-Shop \n Boutique E-commerce',
    description:"Conception d’une boutique en ligne moderne pensée pour offrir une navigation simple et rapide. Une interface claire, orientée conversion, permettant de mettre en valeur les produits et de faciliter l’expérience d’achat sur mobile comme sur ordinateur.",
    link: 'https://k-shop.gt.tc',
  },
  {
    id: 5,
    image: '/assets/Images/thereza.png',
    alt: 'Thereza Market 237 E-commerce',
    title: 'Thereza Market 237 \n Boutique E-commerce',
    description:"Création d’une plateforme de vente en ligne moderne, conçue pour attirer l’attention, mettre en avant les offres et transformer les visiteurs en clients. Une expérience utilisateur simple et persuasive, adaptée au mobile et aux objectifs de performance commerciale.",
    link: 'https://therezamarket237.com/',
  },
  {
    id: 6,
    image: '/assets/Images/ctc.png',
    alt: 'Chaka Trade Consulting',
    title: 'Chaka Trade Consulting \n Site vitrine',
    description:"Creation d'un site ergonomique pour Chaka Trade Consulting. Une structure pensée pour faciliter l'accès aux informations de son programme de consulting et de sa methode d'approche dans le but de mieux presenter leurs programmes et services.",
    link: 'https://ctc-9b03.onrender.com/',
    featured: true,
  },
];

// Projets mis en avant sur la home (max 3)
export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);