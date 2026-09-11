import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data";
export default function Home() {
  return (
    <div className="page-wrap">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> FULL STACK DEVELOPER
          </div>
          <h1>
            Del problema
            <br />a una solución
            <br />
            <span className="accent-text">que se siente.</span>
            <span className="heading-dot">*</span>
          </h1>
          <p>
            Soy Pedro. Conecto diseño, código y lógica de negocio para construir
            productos web que hacen más simple lo complejo.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/proyectos">
              Explorar proyectos <span>↗</span>
            </Link>
            <Link className="text-link" href="/sobremi">
              Un poco sobre mí <span>→</span>
            </Link>
          </div>
          <div className="hero-note">
            <span>01 — DESARROLLO CON PROPÓSITO</span>
            <span>SCROLL PARA EXPLORAR ↓</span>
          </div>
        </div>
        <div
          className="orb-stage"
          aria-label="Ilustración abstracta de un núcleo digital conectado"
          role="img"
        >
          <div className="stage-grid" />
          <span className="stage-coordinate top">PL / DIGITAL SYSTEMS</span>
          <span className="stage-coordinate bottom">
            IDEA → CÓDIGO → PRODUCTO
          </span>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="orb">
            <div className="orb-lines" />
          </div>
          <div className="floating-tag tag-top">
            <span>⌘</span> Pensado para personas
          </div>
          <div className="floating-tag tag-bottom">
            <span className="status-dot" /> Construido con código
          </div>
          <span className="stage-cross">+</span>
        </div>
      </section>
      <div className="stack-strip">
        <span className="mono">MI TOOLKIT</span>
        {[
          "Next.js",
          "React",
          "JavaScript",
          "Node.js",
          "SQL",
          "Material UI",
        ].map((s) => (
          <span key={s}>{s}</span>
        ))}
        <span className="strip-star">✳</span>
      </div>
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / PROYECTOS SELECCIONADOS</span>
            <h2>
              Código que sale
              <br />
              al mundo<span className="accent-text">.</span>
            </h2>
          </div>
          <Link className="text-link" href="/proyectos">
            Todos los proyectos <span>↗</span>
          </Link>
        </div>
        <div className="project-grid">
          {projects.slice(0, 2).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
      <section className="about-teaser">
        <span className="eyebrow">02 / DETRÁS DEL CÓDIGO</span>
        <div>
          <h2>
            Entender el negocio.
            <br />
            <span className="muted">Diseñar la solución.</span>
            <br />
            Hacer que funcione.
          </h2>
          <p>
            Mi foco está en sistemas de gestión, herramientas financieras e
            interfaces que ayudan a trabajar mejor. Me involucro desde los datos
            hasta el último detalle de la experiencia.
          </p>
          <Link className="text-link" href="/sobremi">
            Conocé cómo trabajo <span>↗</span>
          </Link>
        </div>
        <span className="teaser-symbol" aria-hidden="true">
          ✳
        </span>
      </section>
      <section className="cta">
        <span className="eyebrow">¿TENÉS UNA IDEA EN MENTE?</span>
        <Link href="/sobremi#contacto">
          Construyamos
          <br />
          algo que importe.<span>↗</span>
        </Link>
      </section>
    </div>
  );
}
