'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget

    try {
      const res = await fetch('https://formspree.io/f/xaqlozyg', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form),
      })

      if (!res.ok) throw new Error()
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <input type="text"  name="nom"    placeholder="Nom"    className="Manrope" required />
        <input type="text"  name="prenom" placeholder="Prénom" className="Manrope" required />
      </div>
      <input type="email" name="email" placeholder="Email" className="Manrope" required />
      <textarea name="message" rows={5} placeholder="Votre message..." className="Manrope" required />

      <button type="submit" className="Manrope" disabled={status === 'loading'}>
        {status === 'loading' ? 'Envoi en cours...' : 'Envoyer →'}
      </button>

      {status === 'success' && (
        <p style={{ color: '#A259FF', marginTop: '1rem', textAlign: 'center' }}>
          Message envoyé ! Je vous réponds très vite.
        </p>
      )}
      {status === 'error' && (
        <p style={{ color: '#E24B4A', marginTop: '1rem', textAlign: 'center' }}>
          Erreur lors de l&apos;envoi. Réessayez ou contactez-moi directement.
        </p>
      )}
    </form>
  )
}