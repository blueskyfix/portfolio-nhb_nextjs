import type { Metadata } from 'next'
// Ajoute l'import du type en haut du fichier
import { projects, type Project } from './data/projects'
// @ts-ignore
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://horatio-dev-three.vercel.app'),
  title: 'Horatio Nguend - Développeur Web à Douala - Sites & Apps',
  description:
    'Horatio NGUEND - Développeur web freelance à Douala, Cameroun. Création de sites vitrines, landing pages et applications web sur mesure.',
  keywords: [
    'développeur web Douala',
    'freelance web Cameroun',
    'création site internet Douala',
    'Next.js Cameroun',
    'application web Afrique centrale',
    'Horatio NGUEND',
  ],
  applicationName: "Horatio Nguend",
  authors: [{ name: 'Horatio NGUEND' }],
  alternates: {
    canonical: 'https://horatio-dev-three.vercel.app',
  },
  icons: {
    icon: [
      { url: '/assets/icons/favicon.ico' },
      { url: '/assets/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/assets/icons/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Horatio NGUEND - Développeur Web Freelance Douala',
    description:
      'Développeur web passionné spécialisé dans la création de sites vitrines et applications web modernes.',
    type: 'website',
    url: 'https://horatio-dev-three.vercel.app',
    locale: 'fr_FR',
    images: [{
      url: '/assets/Images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Horatio NGUEND – Développeur Web Douala',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Horatio NGUEND - Développeur Web Freelance Douala',
    description:
      'Développeur web passionné spécialisé dans la création de sites vitrines et applications web modernes.',
    images: [{
      url: '/assets/Images/twitter-card-image.jpg',
      alt: 'Horatio NGUEND – Développeur Web Douala',
    }],
  },
}

// ─── Schema.org dynamique branché sur projects.ts ──────────────────────────
const BASE_URL = 'https://horatio-dev-three.vercel.app'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // 1. Identité personnelle
    {
      '@type': 'Person',
      '@id': `${BASE_URL}/#horatio`,
      name: 'Horatio NGUEND',
      jobTitle: 'Développeur Web Freelance',
      url: BASE_URL,
      description:
        'Développeur web freelance basé à Douala, Cameroun. Spécialisé en Next.js, React, PHP, WordPress et PrestaShop.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Douala',
        addressRegion: 'Littoral',
        addressCountry: 'CM',
      },
      knowsAbout: [
        'Next.js', 'React', 'PHP', 'MySQL',
        'WordPress', 'PrestaShop', 'Tailwind CSS',
        'HTML', 'CSS', 'JavaScript',
      ],
      sameAs: [
        'https://github.com/blueskyfix',     // ← à remplacer
        'https://fr.fiverr.com/horatio_nguend/', // ← à remplacer
        'https://www.upwork.com/freelancers/~01988818e93ddd6e8c?mp_source=share', // ← à remplacer
      ],
    },

    // 2. Portfolio — liste dynamique des projets
    {
      '@type': 'ItemList',
      '@id': `${BASE_URL}/projects#list`,
      name: 'Portfolio – Projets Web réalisés par Horatio NGUEND',
      description:
        'Sélection de projets web livrés à des clients réels : sites vitrines, e-commerce, landing pages.',
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'WebSite',
          name: project.title.replace(/\n/g, ' ').trim(),
          description: project.description,
          url: project.link ?? BASE_URL,
          image: {
            '@type': 'ImageObject',
            url: `${BASE_URL}${project.image}`,
            description: project.alt,
          },
          // Relie chaque projet à son créateur
          author: { '@id': `${BASE_URL}/#horatio` },
        },
      })),
    },

    // 3. Site web lui-même
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Horatio Dev – Portfolio',
      description: 'Portfolio officiel de Horatio NGUEND, développeur web freelance à Douala.',
      inLanguage: 'fr-FR',
      author: { '@id': `${BASE_URL}/#horatio` },
    },
  ],
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="fr">
      <body><GoogleAnalytics />
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/> {/*SEO*/}
              {children}</body>
    </html>
  )
}
