import dynamic from 'next/dynamic'
import Image from 'next/image'

// Chargé uniquement côté client (étoiles, particules, scroll, nav)
const ClientEffects = dynamic(() => import('@/components/ClientEffects'), {
  ssr: false,
})

// ─── Données des projets ────────────────────────────────────────────────────
// Pour ajouter un projet → ajouter un objet ici, rien d'autre à toucher.
const projects = [
  {
    id: 1,
    image: '/assets/Images/folding-house.png',
    alt: 'Site vitrine Folding House',
    title: 'Folding House\nLanding Page',
    description:
      "Développement d'une plateforme vitrine pour la vente de maisons capsules innovantes. Un design conçu pour une audience internationale avec contact et pages e-commerce de produits (catalogues et descriptions).",
    link: 'https://foldinghouse.site',
  },
  {
    id: 2,
    image: '/assets/Images/destockage.png',
    alt: 'Landing page Destockage Alimentaire',
    title: 'Destockage Alimentaire\nE-commerce',
    description:
      "Solution française d'e-commerce de déstockage alimentaire. Une interface optimisée pour l'achat immédiat et la navigation par catégories, alliant performance commerciale et engagement contre le gaspillage.",
    link: 'https://destockagealimentaireprixmini.com/',
  },
  {
    id: 3,
    image: '/assets/Images/app-web.png',
    alt: 'Application Web Personnalisée',
    title: 'JFN Center\n Site Demo ',
    description:
      "Refonte ergonomique pour le centre JFN. Une architecture d'information pensée pour faciliter l'accès aux programmes de son centre de formation et ceux d'incubation de projet dans le but de booster les inscriptions en ligne.",
    link: 'https://jfncenter-demo.onrender.com/',
  },
]

// ─── Données des services ────────────────────────────────────────────────────
const services = [
  {
    id: 1,
    title: 'Site Vitrine Professionnel',
    description:
      "Affirmez votre présence en ligne avec un site élégant qui reflète l'expertise de votre entreprise. Idéal pour gagner la confiance de vos futurs clients.",
  },
  {
    id: 2,
    title: 'Landing Page à Haute Conversion',
    description:
      "Une page unique conçue pour transformer vos visiteurs en clients. Optimisée pour vos campagnes publicitaires et vos lancements de produits.",
  },
  {
    id: 3,
    title: 'Application Web Sur Mesure',
    description:
      "Digitalisez vos processus métiers avec des outils personnalisés. Améliorez votre productivité grâce à des fonctionnalités adaptées à vos besoins réels.",
  },
  {
    id: 4,
    title: 'Refonte & Optimisation de Site',
    description:
      "Donnez un coup de jeune à votre ancien site. J'optimise votre vitesse de chargement et votre SEO pour vous rendre plus visible sur Google et attirer le plus de visiteurs sur votre site.",
  },
]

export default function Home() {
  return (
    <>
      {/* Effets client : étoiles, particules, nav, scroll reveal */}
      <ClientEffects />

      {/* ── NAVIGATION ── */}
      <nav id="mainNav">
        <h2 className="Space_Grotesk">N_HB</h2>
        <button className="nav-toggle Manrope" id="navToggle" aria-label="Ouvrir le menu">
          ☰
        </button>
        <ul id="navMenu">
          <li className="Manrope"><a href="#" className="link">Home</a></li>
          <li className="Manrope"><a href="#about_me" className="link">About Me</a></li>
          <li className="Manrope"><a href="#expert" className="link">Compétences</a></li>
          <li className="Manrope"><a href="#projects" className="link">Projects</a></li>
          <li className="Manrope"><a href="#services" className="link">Services</a></li>
        </ul>
        <div>
          <button className="Manrope">
            <a href="#contact" className="link">Contact</a>
          </button>
        </div>
      </nav>

      {/* ── AURORES ── */}
      <div className="aurora-container">
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="aurora aurora-3" />
      </div>

      {/* ── ÉTOILES ── */}
      <div className="stars-container" id="starsContainer" />

      {/* ── PARTICULES ── */}
      <div className="particles-container" id="particlesContainer" />
      <div className="cursor-glow" id="cursorGlow" />

      {/* ── CONTENU ── */}
      <div className="content">

        {/* HERO */}
        <section className="hero">
          <h1 className="Space_Grotesk">Horatio NGUEND</h1>
          <p className="subtitle Manrope">Donnez une image professionnelle à votre entreprise avec un site web moderne et performant.</p>
          <div className="btn-group">
            <button className="Manrope">
              <a href="#projects" className="link">Mes réalisations</a>
            </button>
            <button className="Manrope">
              <a href="/assets/Horatio-dev CV.pdf" download className="link">
                Télécharger CV →
              </a>
            </button>
          </div>
        </section>

        {/* ABOUT ME */}
        <section className="sections" id="about_me">
          <div className='Manrope'>
            <h2 className="Space_Grotesk">About Me</h2>
            <p className="bold">
              <strong>Propulsez votre entreprise avec un partenaire local.</strong><br />
            </p>
            <p className=' bold'>
               Je suis <span className='bolder'>Horatio</span>, développeur web fullstack. J'aide les PME camerounaises à s'imposer sur le web en transformant leur vision en outils de croissance concrets afin d'attirer et convertir leurs prospects et visiteurs en clients.
            </p>
              <ul className='Manrope' style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '10px' }}>
                    <strong ><span className='bolder italic'>Proximité :</span></strong> Une écoute réelle pour comprendre vos défis locaux et vos besoins spécifiques.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <strong><span className='bolder italic'>Performance :</span></strong> Des sites rapides, modernes et parfaitement adaptés aux besoins numériques actuelles.
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <strong><span className='bolder italic'>Accompagnement :</span></strong> Un service de A à Z, de la stratégie à la mise en ligne de votre projet jusqu'à l'analyse de vos ventes.
                  </li>
                </ul>
          </div>
          <div className="imgsimp Manrope">
            <Image
              src="/assets/Images/photo.jpeg"
              alt="Horatio NGUEND - Développeur Web Freelance à Douala"
              fill
              style={{ objectFit: 'cover', borderRadius: '18px' }}
              priority
            />
          </div>
        </section>

        {/* COMPÉTENCES */}
        <section className="box sections" id="expert">
          <div>
            <h2 className="Space_Grotesk">Mes Compétences Techniques en Développement Web</h2>

            <h3 className="Manrope">Front-End</h3>
            <ul className="icon-list">
              {[
                { src: '/assets/icons/icons8-html-5-96.png', alt: 'HTML5', label: 'HTML' },
                { src: '/assets/icons/icons8-css3-100.png', alt: 'CSS3', label: 'CSS' },
                { src: '/assets/icons/icons8-javascript-240.png', alt: 'JavaScript', label: 'JavaScript' },
                { src: '/assets/icons/icons8-react-natif-68.png', alt: 'React', label: 'ReactJS' },
                { src: '/assets/icons/icons8-vent-arrièrecss-480.png', alt: 'Tailwind CSS', label: 'Tailwind' },
              ].map((tech) => (
                <li key={tech.label}>
                  <Image src={tech.src} alt={tech.alt} className="icon" width={52} height={52} loading="lazy" />
                  <h4>{tech.label}</h4>
                </li>
              ))}
            </ul>

            <h3 className="Manrope">Back-End</h3>
            <ul className="icon-list">
              {[
                { src: '/assets/icons/icons8-php-96.png', alt: 'PHP', label: 'PHP' },
                { src: '/assets/icons/icons8-mysql-96.png', alt: 'MySQL', label: 'MySQL' },
                { src: '/assets/icons/icons8-nœud-js-100.png', alt: 'Node.js', label: 'NodeJS' },
                { src: '/assets/icons/icons8-python-480.png', alt: 'Python', label: 'Python' },
              ].map((tech) => (
                <li key={tech.label}>
                  <Image src={tech.src} alt={tech.alt} className="icon" width={52} height={52} loading="lazy" />
                  <h4>{tech.label}</h4>
                </li>
              ))}
            </ul>

            <h3 className="Manrope">Outils</h3>
            <ul className="icon-list">
              {[
                { src: '/assets/icons/icons8-figma-480.png', alt: 'Figma', label: 'Figma' },
                { src: '/assets/icons/icons8-notion-64.png', alt: 'Notion', label: 'Notion' },
                { src: '/assets/icons/icons8-github-64.png', alt: 'GitHub', label: 'GitHub' },
                { src: '/assets/icons/icons8-git-480.png', alt: 'Git', label: 'Git' },
              ].map((tech) => (
                <li key={tech.label}>
                  <Image src={tech.src} alt={tech.alt} className="icon" width={52} height={52} loading="lazy" />
                  <h4>{tech.label}</h4>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROJETS */}
        <section id="projects">
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

        {/* SERVICES */}
        <section id="services">
          <h2 className="Space_Grotesk">Mes Services de Développement Web</h2>
          <table>
            <tbody>
              <tr>
                {services.map((service) => (
                  <td key={service.id}>
                    <h3 className="Space_Grotesk">{service.title}</h3>
                    <p className="Manrope">{service.description}</p>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </section>

        {/* CITATION */}
        <section className="cit Manrope">
          <h3>
            &ldquo;C&apos;est dans les difficultés que l&apos;on découvre qui l&apos;on est
            vraiment, et que nos limites deviennent des tremplins.&rdquo;
          </h3>
          <h2 className="Space_Grotesk">— Horatio NGUEND</h2>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section box">
          <div>
            <h3 className="Space_Grotesk">Discutons de votre projet</h3>
          </div>
          <div>
            <form action="" method="post">
              <div className="form-row">
                <input type="text" name="nom" placeholder="Nom" className="Manrope" required />
                <input type="text" name="prenom" placeholder="Prénom" className="Manrope" required />
              </div>
              <input type="email" name="email" placeholder="Email" className="Manrope" required />
              <textarea
                name="message"
                rows={5}
                placeholder="Votre message..."
                className="Manrope"
                required
              />
              <button type="button" className="Manrope">
                Envoyer →
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <ul>
            <li><a href="#" className="Manrope">Home</a></li>
            <li><a href="#about_me" className="Manrope">About Me</a></li>
            <li><h2 className="Space_Grotesk">NHB</h2></li>
            <li><a href="#expert" className="Manrope">Expertise</a></li>
            <li><a href="#projects" className="Manrope">Projects</a></li>
          </ul>
          <hr />
          <ul className="social-links">
            <li>
              <a href="mailto:hnguend1@gmail.com" aria-label="Gmail">
                <Image src="/assets/icons/icons8-gmail-nouveau-100.png" alt="Gmail" width={26} height={26} loading="lazy" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/237653964737" aria-label="WhatsApp">
                <Image src="/assets/icons/icons8-whatsapp-500.png" alt="WhatsApp" width={26} height={26} loading="lazy" />
              </a>
            </li>
            <li>
              <a href="https://github.com/blueskyfix" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Image src="/assets/icons/icons8-github-64.png" alt="GitHub" width={26} height={26} loading="lazy" />
              </a>
            </li>
            <li>
              <a href="https://www.upwork.com/freelancers/~01988818e93ddd6e8c?mp_source=share" target="_blank" rel="noopener noreferrer" aria-label="Upwork">
                <Image src="/assets/icons/icons8-travailler-500.png" alt="Upwork" width={26} height={26} loading="lazy" />
              </a>
            </li>
            <li>
              <a href="https://fr.fiverr.com/horatio_nguend/" target="_blank" rel="noopener noreferrer" aria-label="Fiverr">
                <Image src="/assets/icons/icons8-cinq-500.png" alt="Fiverr" width={26} height={26} loading="lazy" />
              </a>
            </li>
          </ul>
          <h4 className="Manrope">© 2025 — Tous droits réservés · Horatio NGUEND</h4>
        </footer>
      </div>
    </>
  )
}
