'use client'

import { useEffect } from 'react'

export function useNav() {
  useEffect(() => {
    const mainNav = document.getElementById('mainNav')
    const navToggle = document.getElementById('navToggle') as HTMLButtonElement | null
    const navMenu = document.getElementById('navMenu')
    if (!mainNav || !navToggle || !navMenu) return

    // Hamburger
    const onToggle = () => {
      navMenu.classList.toggle('open')
      navToggle.textContent = navMenu.classList.contains('open') ? '✕' : '☰'
    }
    navToggle.addEventListener('click', onToggle)

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open')
        navToggle.textContent = '☰'
      })
    })

    // Hide/show nav on scroll
    let lastScrollY = window.scrollY
    const onScroll = () => {
      const currentY = window.scrollY
      const delta = currentY - lastScrollY
      if (delta > 10 && currentY > 80) {
        mainNav.classList.add('hidden')
        navMenu.classList.remove('open')
        navToggle.textContent = '☰'
      } else if (delta < -6) {
        mainNav.classList.remove('hidden')
      }
      lastScrollY = currentY

      // Glitch sur les titres h2
      const isScrolling = Math.abs(currentY - lastScrollY) > 5
      if (isScrolling) {
        const viewportCenter = window.innerHeight / 2 + currentY
        document.querySelectorAll('h2').forEach((title) => {
          const rect = title.getBoundingClientRect()
          const titleY = rect.top + currentY
          if (Math.abs(viewportCenter - titleY) < 100) {
            title.style.animation = 'glitch 0.3s ease'
            setTimeout(() => { title.style.animation = '' }, 300)
          }
        })
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      navToggle.removeEventListener('click', onToggle)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
}
