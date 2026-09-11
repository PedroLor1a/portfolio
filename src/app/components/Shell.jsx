"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { social } from "../data";
export default function Shell({ children }) {
  const pathname = usePathname();
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="header">
        <Link href="/" className="brand" aria-label="Pedro Loria, inicio">
          <span className="brand-symbol">
            p<span>l</span>.
          </span>
          <span>
            PEDRO LORIA
            <span className="brand-caption">DEVELOPER & BUILDER</span>
          </span>
        </Link>
        <nav aria-label="Navegación principal">
          {[
            ["/", "Inicio"],
            ["/proyectos", "Proyectos"],
            ["/sobremi", "Sobre mí"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? "active" : ""}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a
          className="contact-link"
          href={social.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          Conectemos <span>↗</span>
        </a>
      </header>
      <main id="contenido">{children}</main>
      <footer className="footer">
        <Link className="footer-name" href="/">
          Pedro Loria<span>Ideas claras. Código con propósito.</span>
        </Link>
        <div>
          <a href={social.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={social.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <span className="mono">HECHO CON NEXT.JS</span>
        </div>
      </footer>
    </>
  );
}
