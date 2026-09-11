import Image from "next/image";
import Link from "next/link";
import { social } from "../data";
export const metadata = { title: "Sobre mí | Pedro Loria" };
export default function AboutPage() {
  return (
    <div className="page-wrap">
      <section className="about-hero">
        <div>
          <span className="eyebrow">02 / SOBRE MÍ</span>
          <h1>
            Hola, soy Pedro<span className="accent-text">.</span>
            <br />
            <span className="muted">Me gusta construir.</span>
          </h1>
          <p className="about-lead">
            Desarrollador Full Stack, con foco en transformar procesos de
            negocio en herramientas web claras y útiles.
          </p>
          <p>
            Me formé en el bootcamp de SoyHenry y trabajo con React, Next.js,
            Node.js y bases de datos SQL. Me interesa conectar todas las partes
            de un producto: la interfaz, la lógica y la información que lo hace
            funcionar.
          </p>
          <p>
            En proyectos como Arriba Comercio y MT Electrodomésticos, ese
            enfoque se traduce en gestión de clientes, créditos, cobranzas y
            reportes. Busco que la complejidad se resuelva en el código y que la
            experiencia sea simple para quien lo usa.
          </p>
          <div className="hero-actions">
            <a
              className="button primary"
              href={social.cv}
              target="_blank"
              rel="noreferrer">
              Ver mi CV <span>↗</span>
            </a>
            <a
              className="text-link"
              href={social.github}
              target="_blank"
              rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>
        <div className="portrait-card">
          <span className="mono">LA PERSONA DETRÁS DEL PRODUCTO</span>
          <div className="portrait-image">
            <Image
              src="/fotoCVEdit.png"
              alt="Pedro Loria, desarrollador Full Stack"
              fill
              sizes="(max-width: 760px) 90vw, 420px"
              priority
              style={{ objectFit: "contain", objectPosition: "bottom" }}
            />
          </div>
          <div className="portrait-caption">
            <span>
              Pedro Loria<small>FULL STACK DEVELOPER</small>
            </span>
            <span className="accent-text">✳</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">CÓMO PIENSO EL DESARROLLO</span>
            <h2>
              De punta a punta<span className="accent-text">.</span>
            </h2>
          </div>
        </div>
        <div className="principles">
          {[
            [
              "01",
              "Primero, entender",
              "El punto de partida es el proceso: quién lo usa, qué necesita resolver y dónde se pierde tiempo.",
            ],
            [
              "02",
              "Construir con criterio",
              "Componentes reutilizables, datos organizados y decisiones técnicas que faciliten el mantenimiento.",
            ],
            [
              "03",
              "Cuidar la experiencia",
              "Una interfaz clara hace la diferencia cuando hay que consultar, cargar o interpretar información todos los días.",
            ],
          ].map(([n, t, d]) => (
            <article key={n}>
              <span className="mono accent-text">{n} /</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="toolkit">
        <span className="eyebrow">TECNOLOGÍAS CON LAS QUE TRABAJO</span>
        <div>
          {[
            [
              "INTERFAZ",
              "React · Next.js · JavaScript · HTML · CSS · Material UI · Redux",
            ],
            [
              "BACKEND Y DATOS",
              "Node.js · SQL · PostgreSQL · Sequelize · Firebase · MongoDB",
            ],
          ].map(([t, d]) => (
            <div className="toolkit-row" key={t}>
              <span className="mono">{t}</span>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="cta" id="contacto">
        <span className="eyebrow">SIGAMOS LA CONVERSACIÓN</span>
        <a href={social.linkedin} target="_blank" rel="noreferrer">
          Una buena idea
          <br />
          empieza charlando.<span>↗</span>
        </a>
        <div className="contact-options">
          <a
            className="text-link"
            href={social.linkedin}
            target="_blank"
            rel="noreferrer">
            LinkedIn ↗
          </a>
          <Link className="text-link" href="/proyectos">
            Conocer mis proyectos →
          </Link>
        </div>
      </section>
    </div>
  );
}
