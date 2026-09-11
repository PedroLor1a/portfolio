import Link from "next/link";
export function ProjectVisual({ project }) {
  return (
    <div className={`project-visual ${project.accent}`} aria-hidden="true">
      <div className="visual-grid" />
      <span className="visual-label">{project.label}</span>
      <div className="mini-window">
        <div className="window-top">
          <span className="window-dots">● ● ●</span>
          <span>{project.id}</span>
          <span>↗</span>
        </div>
        <div className="window-body">
          <div className="mini-sidebar">
            <b>{project.number}.</b>
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="mini-content">
            <div className="mini-heading">
              Todo conectado.
              <span>Resumen general</span>
            </div>
            <div className="mini-metrics">
              <div>
                <small>GESTIÓN</small>
                <b>
                  Simple<span>↗</span>
                </b>
              </div>
              <div>
                <small>INFORMACIÓN</small>
                <b>
                  Clara<span>↗</span>
                </b>
              </div>
            </div>
            <div className="chart">
              {[30, 48, 36, 62, 45, 71, 60, 84, 72, 95, 82, 100].map(
                (height, i) => (
                  <i key={i} style={{ height: `${height}%` }} />
                ),
              )}
            </div>
            <div className="mini-bottom">
              <span>OPERACIÓN CONECTADA</span>
              <span>●</span>
            </div>
          </div>
        </div>
      </div>
      <span className="preview-caption">VISTA CONCEPTUAL</span>
    </div>
  );
}
export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link
        href={`/proyectos#${project.id}`}
        aria-label={`Ver proyecto ${project.title}`}
      >
        <ProjectVisual project={project} />
        <div className="card-title">
          <div>
            <span className="mono">{project.category}</span>
            <h3>{project.title}</h3>
          </div>
          <span className="round-arrow">↗</span>
        </div>
      </Link>
    </article>
  );
}

