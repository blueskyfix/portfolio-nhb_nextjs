// components/AstralBackground.tsx
import dynamic from 'next/dynamic'

const ClientEffects = dynamic(() => import('@/components/ClientEffects'), {
  ssr: false,
})

interface Props {
  children: React.ReactNode
}

export default function AstralBackground({ children }: Props) {
  return (
    <>
      <ClientEffects />

      <div className="aurora-container">
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="aurora aurora-3" />
      </div>
      <div className="stars-container" id="starsContainer" />
      <div className="particles-container" id="particlesContainer" />
      <div className="cursor-glow" id="cursorGlow" />

      {children}
    </>
  )
}