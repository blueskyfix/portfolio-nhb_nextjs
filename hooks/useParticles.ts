'use client'

import { useEffect } from 'react'

export function useParticles(containerId: string, glowId: string) {
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const container = document.getElementById(containerId)
    const glow = document.getElementById(glowId)
    if (!container || !glow) return

    if (isMobile) {
      glow.style.display = 'none'
      return
    }

    interface ParticleData {
      element: HTMLDivElement
      x: number
      y: number
      vx: number
      vy: number
    }

    let particles: ParticleData[] = []
    let mouseX = 0
    let mouseY = 0
    let lastParticleTime = 0
    let rafId: number

    function createParticle(x: number, y: number, isExplosion = false) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = x + 'px'
      particle.style.top = y + 'px'
      container!.appendChild(particle)

      const angle = Math.random() * Math.PI * 2
      const velocity = isExplosion ? 2 + Math.random() * 3 : 0.5 + Math.random()
      const pData: ParticleData = {
        element: particle,
        x, y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
      }
      particles.push(pData)

      setTimeout(() => {
        particle.remove()
        particles = particles.filter((p) => p.element !== particle)
      }, 2000)
    }

    function createConnectionLine(x1: number, y1: number, x2: number, y2: number) {
      const line = document.createElement('div')
      line.className = 'connection-line'
      const dx = x2 - x1
      const dy = y2 - y1
      const length = Math.sqrt(dx * dx + dy * dy)
      const angle = Math.atan2(dy, dx) * (180 / Math.PI)
      line.style.width = length + 'px'
      line.style.left = x1 + 'px'
      line.style.top = y1 + 'px'
      line.style.transform = `rotate(${angle}deg)`
      container!.appendChild(line)
      setTimeout(() => line.remove(), 800)
    }

    function animate() {
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.98
        p.vy *= 0.98
        if (p.element.parentNode) {
          p.element.style.left = p.x + 'px'
          p.element.style.top = p.y + 'px'
        }
      })
      rafId = requestAnimationFrame(animate)
    }

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      glow!.style.left = mouseX + 'px'
      glow!.style.top = mouseY + 'px'
      const now = Date.now()
      if (now - lastParticleTime > 30) {
        createParticle(mouseX, mouseY)
        // Lignes de connexion avec les 5 dernières particules
        if (particles.length > 1) {
          particles.slice(-5, -1).forEach((other) => {
            if (other.element.parentNode) {
              const dx = other.x - mouseX
              const dy = other.y - mouseY
              if (Math.sqrt(dx * dx + dy * dy) < 100) {
                createConnectionLine(mouseX, mouseY, other.x, other.y)
              }
            }
          })
        }
        lastParticleTime = now
      }
    }

    const onDown = () => {
      glow!.classList.add('active')
      for (let i = 0; i < 15; i++) {
        setTimeout(() => {
          const angle = (Math.PI * 2 * i) / 15
          const d = 30 + Math.random() * 20
          createParticle(mouseX + Math.cos(angle) * d, mouseY + Math.sin(angle) * d, true)
        }, i * 20)
      }
    }

    const onUp = () => glow!.classList.remove('active')

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(rafId)
    }
  }, [containerId, glowId])
}
