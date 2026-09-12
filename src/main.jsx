import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'MongoDB', 'SQL', 'Python', 'Tailwind', 'Git', 'Supabase', 'n8n', 'Excel']

const projects = [
  { number: '01', title: 'Tu próximo proyecto', tag: 'Espacio reservado', detail: 'Una solución que todavía está tomando forma.' },
  { number: '02', title: 'Proyecto en construcción', tag: 'Próximamente', detail: 'Este lugar espera una idea con impacto real.' },
  { number: '03', title: 'Caso para contar', tag: 'Próximamente', detail: 'Cada proyecto merece explicar qué problema resuelve.' },
]

function Arrow({ external = false, up = false }) {
  return <span className="arrow" aria-hidden="true"><svg viewBox="0 0 16 16" focusable="false"><path d={external ? 'M3 13 13 3M6 3h7v7' : up ? 'M8 14V2M3.5 6.5 8 2l4.5 4.5' : 'M8 2v12M3.5 9.5 8 14l4.5-4.5'} /></svg></span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <header className="site-header">
      <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Ir al inicio">FB<span className="brand-dot">.</span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
          <span>{menuOpen ? 'Cerrar' : 'Menú'}</span>
          <span className="menu-lines" aria-hidden="true"><i /><i /></span>
        </button>
        <nav id="main-nav" className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">
          <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
          <a href="#stack" onClick={closeMenu}>Stack</a>
          <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
          <a href="#contacto" className="nav-contact" onClick={closeMenu}>Hablemos <Arrow external /></a>
        </nav>
      </header>

      <main id="contenido">
        <section id="inicio" className="hero section-pad">
          <div className="hero-kicker reveal">Portfolio / 2026 <span>—</span> Córdoba, AR</div>
          <div className="hero-content">
            <h1 className="hero-title reveal reveal-delay-1">Construyo ideas<br /><em>que funcionan.</em></h1>
            <div className="hero-aside reveal reveal-delay-2">
              <div className="initials-mark">FB</div>
              <p>Desarrollador full-stack junior orientado a producto. Aprendo rápido, hago preguntas y convierto problemas en experiencias digitales claras.</p>
              <a className="text-link" href="#proyectos">Ver proyectos <Arrow /></a>
            </div>
          </div>
          <div className="hero-footer reveal reveal-delay-3">
            <span className="availability"><i /> Disponible para oportunidades</span>
            <span className="scroll-note">Scroll para explorar <Arrow /></span>
          </div>
        </section>

        <section id="sobre-mi" className="statement section-pad">
          <div className="section-label">Sobre mí</div>
          <div className="statement-copy">
            <p className="statement-lead">Estoy buscando mi camino en tecnología mientras construyo una base sólida para cualquier tipo de proyecto.</p>
            <div className="statement-details">
              <p>Me interesa entender el porqué detrás de cada decisión: desde una interfaz que se siente natural hasta una API que hace su trabajo sin ruido.</p>
              <p>Mi forma de crecer combina curiosidad, práctica constante y la humildad de saber que siempre hay algo nuevo por aprender.</p>
            </div>
          </div>
        </section>

        <section id="stack" className="stack-section section-pad">
          <div className="section-label">Herramientas</div>
          <div className="stack-heading">
            <h2>Un stack para<br /><em>seguir creciendo.</em></h2>
            <p>Trabajo con herramientas que me permiten moverme desde la idea hasta una solución funcional.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => <span className="skill-pill" key={skill}><small>0{index + 1}</small>{skill}</span>)}
          </div>
        </section>

        <section id="proyectos" className="projects-section section-pad">
          <div className="section-topline"><div className="section-label">Proyectos</div><span>Espacio listo para completar</span></div>
          <div className="projects-intro">
            <h2>Lo mejor<br /><em>está por venir.</em></h2>
            <p>Este espacio está listo para contar tus próximos casos: qué problema resolviste, cómo lo pensaste y qué aprendiste en el camino.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className="project-card-main"><span className="project-tag">{project.tag}</span><h3>{project.title}</h3><p>{project.detail}</p></div>
                <span className="project-status">Pendiente</span>
              </article>
            ))}
          </div>
        </section>

        <section id="contacto" className="contact-section section-pad">
          <div className="section-label">Contacto</div>
          <div className="contact-grid">
            <h2>¿Hacemos algo<br /><em>que importe?</em></h2>
            <div className="contact-copy"><p>Estoy abierto a oportunidades, colaboraciones y conversaciones que me ayuden a seguir creciendo.</p><a className="email-link" href="mailto:tu-email@ejemplo.com">tu-email@ejemplo.com <Arrow external /></a></div>
          </div>
          <div className="contact-links">
            <a href="mailto:tu-email@ejemplo.com">Email <Arrow external /></a>
            <a href="https://github.com/tuusuario" target="_blank" rel="noreferrer">GitHub <Arrow external /></a>
            <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer">LinkedIn <Arrow external /></a>
            <a href="/CV-Flavio-Brito.pdf" download>Descargar CV <Arrow external /></a>
          </div>
          <p className="cv-note">El botón de CV está preparado para cuando agregues <code>CV-Flavio-Brito.pdf</code> en la carpeta <code>public</code>.</p>
        </section>
      </main>

      <footer className="site-footer"><span>Flavio Brito © 2026</span><span>Hecho con curiosidad en Córdoba</span><a href="#inicio">Volver arriba <Arrow up /></a></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
