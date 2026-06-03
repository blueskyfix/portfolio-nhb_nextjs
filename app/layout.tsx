import type { Metadata } from 'next'
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

// Schema.org — adapté à ta structure réelle
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Horatio NGUEND',
  jobTitle: 'Développeur Web Freelance',
  url: 'https://horatio-dev-three.vercel.app',
  description: 'Développeur web freelance basé à Douala, Cameroun. Spécialisé en Next.js, React, PHP et WordPress.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Douala',
    addressRegion: 'Littoral',
    addressCountry: 'CM',
  },
  knowsAbout: [
    'Next.js', 'React', 'PHP', 'MySQL',
    'WordPress', 'PrestaShop', 'Tailwind CSS',
  ],
  sameAs: [
    'https://github.com/blueskyfix',    // ← à remplacer
    'https://wa.me/237653964737', // ← à remplacer
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Développeur Web',
    occupationLocation: {
      '@type': 'City',
      name: 'Douala',
    },
  },
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
