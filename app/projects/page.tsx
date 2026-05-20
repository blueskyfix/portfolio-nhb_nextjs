import dynamic from 'next/dynamic'
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/projects";
import AstralBackground from '@/components/AstralBackground'

// Chargé uniquement côté client (étoiles, particules, scroll, nav)
const ClientEffects = dynamic(() => import('@/components/ClientEffects'), {
  ssr: false,
})

export const metadata = {
  title: "Mes Projets | Horatio Dev",
  description: "Tous mes projets web — sites vitrines, apps React, Next.js.",
};

export default function ProjetsPage() {
  return (
    <>
    <AstralBackground>
    
          {/* ── NAVIGATION ── */}
      <nav id="mainNav">
        <h2 className="Space_Grotesk">N_HB</h2>
        <button className="nav-toggle Manrope" id="navToggle" aria-label="Ouvrir le menu">
          ☰
        </button>
        <ul id="navMenu">
          <li className="Manrope"><a href="/" className="link">Home</a></li>
          <li className="Manrope"><a href="/#about_me" className="link">About Me</a></li>
          <li className="Manrope"><a href="/expert" className="link">Compétences</a></li>
          <li className="Manrope"><a href="/projects" className="link">Projects</a></li>
          <li className="Manrope"><a href="/services" className="link">Services</a></li>
        </ul>
        <div>
          <button className="Manrope">
            <a href="/#contact" className="link">Contact</a>
          </button>
        </div>
      </nav>

    <main className="min-h-screen bg-[#0A0A0A] text-white py-2">


      {/* PROJETS */}
        <section id="projects" className='pt-4'>
          <h2 className="Space_Grotesk">Portfolio - Mes Projets Web</h2>
          <div id="list_project">
            {projects.map((project) => (
              <div className="project" key={project.id}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={600}
                  height={200}
                  style={{ objectFit: 'cover', borderRadius: '10px', marginBottom: '1.5rem' }}
                  loading="lazy"
                />
                <h3 className="Space_Grotesk" style={{ whiteSpace: 'pre-line' }}>
                  {project.title}
                </h3>
                <p>{project.description}</p>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="Manrope">Voir Plus</button>
                  </a>
                ) : (
                  <button className="Manrope" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                    Bientôt disponible
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>
    </main>
    </AstralBackground>
    </>
  );
}