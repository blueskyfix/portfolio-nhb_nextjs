import type { Metadata } from 'next'
// @ts-ignore
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Horatio Nguend | Développeur Web à Douala | Sites & Apps',
  description:
    'Horatio NGUEND - Développeur web freelance à Douala, Cameroun. Création de sites vitrines, landing pages et applications web sur mesure. Donnez vie à vos projets. Contactez-moi !',
  authors: [{ name: 'Horatio NGUEND' }],
  openGraph: {
    title: 'Horatio NGUEND - Développeur Web Freelance Douala',
    description:
      'Développeur web passionné spécialisé dans la création de sites vitrines et applications web modernes.',
    type: 'website',
    url: 'https://horatio-dev-three.vercel.app',
    images: [{ url: 'https://horatio-dev-three.vercel.app/assets/Images/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Horatio NGUEND - Développeur Web Freelance Douala',
    description:
      'Développeur web passionné spécialisé dans la création de sites vitrines et applications web modernes.',
    images: ['https://horatio-dev-three.vercel.app/assets/Images/twitter-card-image.jpg'],
  },
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="fr">
      <body><GoogleAnalytics />{children}</body>
    </html>
  )
}
