'use client'

import { useEffect } from 'react'

interface StarData {
  element: HTMLDivElement
  initialY: number
  parallaxSpeed: number
}

export function useStars(containerId: string) {
  useEffect(() => {
    const container = document.getElementById(containerId)
    if (!container) return

    const stars: StarData[] = []

    function createStar(layer: number, parallaxSpeed: number) {
      const star = document.createElement('div')
      star.className = `star layer-${layer}`
      const x = Math.random() * 100
      const y = Math.random() * 100
      star.style.left = `${x}%`
      star.style.top = `${y}%`
      star.style.animationDuration = `${2 + Math.random() * 3}s`
      star.style.animationDelay = `${Math.random() * 5}s`
      container!.appendChild(star)
      stars.push({ element: star, initialY: y, parallaxSpeed })
    }

    // 3 couches d'étoiles
    for (let i = 0; i < 150; i++) createStar(1, 0.2)
    for (let i = 0; i < 80; i++) createStar(2, 0.5)
    for (let i = 0; i < 30; i++) createStar(3, 1)

    // Parallaxe au scroll
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const windowHeight = window.innerHeight
          stars.forEach((star) => {
            const offset = scrollY * star.parallaxSpeed
            let finalY = (star.initialY + (offset / windowHeight) * 100) % 200
            if (finalY > 100) finalY -= 200
            star.element.style.transform = `translateY(${finalY}vh)`
          })
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      // Nettoyer les étoiles du DOM
      stars.forEach((s) => s.element.remove())
    }
  }, [containerId])
}
