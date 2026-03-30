'use client'

import { useEffect } from 'react'

/**
 * useScrollReveal
 * Assigne les attributs data-reveal à chaque section
 * et observe leur entrée dans le viewport via IntersectionObserver.
 * Se lance une seule fois côté client (useEffect).
 */
export function useScrollReveal() {
  useEffect(() => {
    // --- About Me ---
    document.querySelector('#about_me > div:first-child')
      ?.setAttribute('data-reveal', 'from-left')
    document.querySelector('#about_me .imgsimp')
      ?.setAttribute('data-reveal', 'from-right')

    // --- Compétences : titre ---
    document.querySelector('#expert h2')
      ?.setAttribute('data-reveal', 'from-bottom')

    // Sous-titres h3 en cascade
    document.querySelectorAll('#expert h3').forEach((h3, i) => {
      h3.setAttribute('data-reveal', 'from-bottom')
      h3.setAttribute('data-reveal-delay', String(i + 1))
    })

    // Listes d'icônes en cascade
    document.querySelectorAll('#expert .icon-list').forEach((ul, i) => {
      ul.setAttribute('data-reveal', 'from-bottom')
      ul.setAttribute('data-reveal-delay', String(i + 1))
      ul.querySelectorAll('li').forEach((li, j) => {
        li.setAttribute('data-reveal', 'from-bottom')
        li.setAttribute('data-reveal-delay', String(Math.min(j + 1, 6)))
      })
    })

    // --- Projets ---
    document.querySelector('#projects h2')
      ?.setAttribute('data-reveal', 'from-bottom')

    document.querySelectorAll('.project').forEach((card, i) => {
      card.setAttribute('data-reveal', 'card-up')
      card.setAttribute('data-reveal-delay', String(i + 1))
    })

    // --- Services ---
    document.querySelector('#services h2')
      ?.setAttribute('data-reveal', 'from-bottom')

    document.querySelectorAll('#services td').forEach((td, i) => {
      td.setAttribute('data-reveal', 'from-bottom-subtle')
      td.setAttribute('data-reveal-delay', String(i + 1))
    })

    // --- Citation ---
    document.querySelector('.cit')
      ?.setAttribute('data-reveal', 'fade')

    // --- Contact ---
    const contactLeft = document.querySelector('#contact > div:first-child')
    const contactRight = document.querySelector('#contact > div:last-child')
    contactLeft?.setAttribute('data-reveal', 'from-left-subtle')
    contactRight?.setAttribute('data-reveal', 'from-right-subtle')
    contactRight?.setAttribute('data-reveal-delay', '1')

    // --- IntersectionObserver ---
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    document.querySelectorAll('[data-reveal]').forEach((el) => {
      revealObserver.observe(el)
    })

    return () => revealObserver.disconnect()
  }, [])
}
