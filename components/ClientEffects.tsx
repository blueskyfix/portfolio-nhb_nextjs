'use client'

import { useNav } from '@/hooks/useNav'
import { useStars } from '@/hooks/useStars'
import { useParticles } from '@/hooks/useParticles'
import { useScrollReveal } from '@/hooks/useScrollReveal'

/**
 * ClientEffects
 * Composant "invisible" (ne rend rien) dont le seul rôle
 * est d'activer tous les hooks côté client.
 * On l'importe dans page.tsx avec dynamic() pour éviter le SSR.
 */
export default function ClientEffects() {
  useNav()
  useStars('starsContainer')
  useParticles('particlesContainer', 'cursorGlow')
  useScrollReveal()
  return null
}
