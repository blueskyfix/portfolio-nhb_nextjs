import type { Metadata } from 'next'
import './globals.css'

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
    url: 'https://votredomaine.com',
    images: [{ url: 'https://votredomaine.com/assets/Images/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Horatio NGUEND - Développeur Web Freelance Douala',
    description:
      'Développeur web passionné spécialisé dans la création de sites vitrines et applications web modernes.',
    images: ['https://votredomaine.com/assets/Images/twitter-card-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
